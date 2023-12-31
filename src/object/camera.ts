import { Info } from "../info.js";
import { CamenObject } from "./object.js";
import { World } from "./world.js";
import { common } from "../shader/common.js";

interface CameraOption {
    canvas?: HTMLCanvasElement;
}

export class Camera extends CamenObject {
    protected _canvas:               HTMLCanvasElement;
    protected _shaderModule:         GPUShaderModule;
    protected _renderPipeline:       GPURenderPipeline | null;
    protected _commandEncoder:       GPUCommandEncoder | null;
    protected _renderPassDescriptor: GPURenderPassDescriptor;

    public get world(): World | null { return this._world; }
    public set world(value: World) {
        const pipelineDescriptor: GPURenderPipelineDescriptor = {
            vertex: {
                module: this._shaderModule, entryPoint: "vertex_main",
                buffers: value.vertexBufferLayouts
            },
            fragment: {
                module: this._shaderModule, entryPoint: "fragment_main",
                targets: [{ format: Info.canvasFormat }]
            },
            primitive: { topology: "triangle-list" },
            layout: "auto"
        };

        this._renderPipeline = Info.device.createRenderPipeline(pipelineDescriptor);
        this._commandEncoder = Info.device.createCommandEncoder();
    }

    constructor(option?: CameraOption) {
        super();
        this._canvas = option ? (option.canvas ? option.canvas : document.createElement("canvas")) : document.createElement("canvas");

        const context = this._canvas.getContext("webgpu")!;
        context.configure({ device: Info.device, format: Info.canvasFormat, alphaMode: "premultiplied" });
        this._shaderModule = Info.device.createShaderModule({ code: common });
        this._renderPipeline = null;
        this._commandEncoder = null;
        this._renderPassDescriptor = {
            colorAttachments: [
                {
                    clearValue: {r: 1, g: 1, b: 1, a: 1}, loadOp: "clear", storeOp: "store",
                    view: context.getCurrentTexture().createView(),
                },
            ]
        };
    }

    public render() {
        if(!this._world) { return; }
        const passEncoder = this._commandEncoder!.beginRenderPass(this._renderPassDescriptor);

        passEncoder.setPipeline(this._renderPipeline!);
        passEncoder.setVertexBuffer(0, this._world.vertexBuffer);
        passEncoder.draw(this._world.vertices.length >> 2); // divide by 4
        passEncoder.end();
    
        Info.device.queue.submit([this._commandEncoder!.finish()]);
    }
};