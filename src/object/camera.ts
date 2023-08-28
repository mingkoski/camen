import { CamenObject } from "./object";
import { World } from "./world";
import { common } from "../shader/common";

interface CameraOption {
    canvas: HTMLCanvasElement;
}

export class Camera extends CamenObject {
    CANVAS: HTMLCanvasElement;
    RENDER_PIPELINE: GPURenderPipeline;
    COMMAND_ENCODER: GPUCommandEncoder;
    RENDER_PASS_DESCRIPTOR: GPURenderPassDescriptor;

    set World(world: World) {

    }

    constructor(option?: CameraOption) {
        super();
        if (option) {
            this.CANVAS = option.canvas ? option.canvas : document.createElement("canvas");
        }

        const gpuTextureFormat = navigator.gpu.getPreferredCanvasFormat();

        const context = this.CANVAS.getContext("webgpu");
        context.configure({ device: window.camenDevice, format: gpuTextureFormat, alphaMode: "premultiplied" });

        const shaderModule = window.camenDevice.createShaderModule({ code: common });

        console.log(`Max Buffer size of this device is ${window.camenDevice.limits.maxBufferSize}`);

        const vertexBuffers: GPUVertexBufferLayout[] = [
            {
                attributes: [{ shaderLocation: 0, offset: 0, format: "float32x4" }],
                arrayStride: 16, stepMode: "vertex",
            },
        ];

        const pipelineDescriptor: GPURenderPipelineDescriptor = {
            vertex: {
                module: shaderModule, entryPoint: "vertex_main",
                buffers: vertexBuffers,
            },
            fragment: {
                module: shaderModule, entryPoint: "fragment_main",
                targets: [{ format: gpuTextureFormat }]
            },
            primitive: { topology: "triangle-list" },
            layout: "auto",
        };

        this.RENDER_PIPELINE = window.camenDevice.createRenderPipeline(pipelineDescriptor);
        this.COMMAND_ENCODER = window.camenDevice.createCommandEncoder();

        this.RENDER_PASS_DESCRIPTOR = {
            colorAttachments: [
                {
                    clearValue: {r: 1, g: 1, b: 1, a: 1}, loadOp: "clear", storeOp: "store",
                    view: context.getCurrentTexture().createView(),
                },
            ] as GPURenderPassColorAttachment[]
        };
    }

    public render() {
        if(!this.World) { return; }
        const passEncoder = this.COMMAND_ENCODER.beginRenderPass(this.RENDER_PASS_DESCRIPTOR);

        passEncoder.setPipeline(this.RENDER_PIPELINE);
        passEncoder.setVertexBuffer(0, this._world._vertexBuffer);
        passEncoder.draw(3);
        passEncoder.end();
    
        window.camenDevice.queue.submit([this.COMMAND_ENCODER.finish()]);
    }
};