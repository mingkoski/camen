import { CamenObject } from "./object";
import { common } from "../shader/common";

interface CameraOption {
    canvas: HTMLCanvasElement;
}

export class Camera extends CamenObject {
    public canvas: HTMLCanvasElement;
    renderPipeline: GPURenderPipeline;
    commandEncoder: GPUCommandEncoder;
    renderPassDescriptor: GPURenderPassDescriptor;

    constructor(option?: CameraOption) {
        super();
        if (option) {
            this.canvas = option.canvas ? option.canvas : document.createElement("canvas");
        }

        const context = this.canvas.getContext("webgpu");
        context.configure({
            device: window.camenDevice,
            format: navigator.gpu.getPreferredCanvasFormat(),
            alphaMode: "premultiplied"
        });

        const shaderModule = window.camenDevice.createShaderModule({ code: common });

        console.log(`Max Buffer size of this device is ${window.camenDevice.limits.maxBufferSize}`);

        const vertices = new Float32Array([0, 100, 0, 1, 100, 0, 0, 1, 200, 1, 0, 1]);
        const gpuBufferDescriptor: GPUBufferDescriptor =
            //{ size: window.dimenDevice.limits.maxBufferSize, usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST }
            { size: vertices.byteLength, usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST }

        const vertexBuffer = window.camenDevice.createBuffer(gpuBufferDescriptor);
        window.camenDevice.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);

        const vertexBuffers: GPUVertexBufferLayout[] = [
            {
                attributes: [
                    { shaderLocation: 0, offset: 0, format: "float32x4" }
                ],
                arrayStride: 16, stepMode: "vertex",
            },
        ];

        const pipelineDescriptor: GPURenderPipelineDescriptor = {
            vertex: {
                module: shaderModule,
                entryPoint: "vertex_main",
                buffers: vertexBuffers,
            },
            fragment: {
                module: shaderModule,
                entryPoint: "fragment_main",
                targets: [{ format: navigator.gpu.getPreferredCanvasFormat() }]
            },
            primitive: { topology: "triangle-list" },
            layout: "auto",
        };

        this.renderPipeline = window.camenDevice.createRenderPipeline(pipelineDescriptor);
        this.commandEncoder = window.camenDevice.createCommandEncoder();

        this.renderPassDescriptor = {
            colorAttachments: [
                {
                    clearValue: {r: 1, g: 1, b: 1, a: 1}, loadOp: "clear", storeOp: "store",
                    view: context.getCurrentTexture().createView(),
                },
            ] as GPURenderPassColorAttachment[]
        };
    }

    public render() {
        const passEncoder = this.commandEncoder.beginRenderPass(this.renderPassDescriptor);

        passEncoder.setPipeline(this.renderPipeline);
        passEncoder.setVertexBuffer(0, this.vertexBuffer);
        passEncoder.draw(3);
        passEncoder.end();
    
        window.camenDevice.queue.submit([this.commandEncoder.finish()]);
    }
}