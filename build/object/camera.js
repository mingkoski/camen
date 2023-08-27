"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _object = require('./object');
var _common = require('../shader/common');






 class Camera extends _object.CamenObject {
    
    
    
    
    

    constructor(option) {
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

        const shaderModule = window.camenDevice.createShaderModule({ code: _common.common });

        console.log(`Max Buffer size of this device is ${window.camenDevice.limits.maxBufferSize}`);

        const vertexBuffers = [
            {
                attributes: [
                    { shaderLocation: 0, offset: 0, format: "float32x4" }
                ],
                arrayStride: 16, stepMode: "vertex",
            },
        ];

        const pipelineDescriptor = {
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

        this._renderPipeline = window.camenDevice.createRenderPipeline(pipelineDescriptor);
        this._commandEncoder = window.camenDevice.createCommandEncoder();

        this._renderPassDescriptor = {
            colorAttachments: [
                {
                    clearValue: {r: 1, g: 1, b: 1, a: 1}, loadOp: "clear", storeOp: "store",
                    view: context.getCurrentTexture().createView(),
                },
            ] 
        };
    }

     render() {
        if(!this.parent) { return; }
        const passEncoder = this._commandEncoder.beginRenderPass(this._renderPassDescriptor);

        passEncoder.setPipeline(this._renderPipeline);
        passEncoder.setVertexBuffer(0, this.parent.vertexBuffer);
        passEncoder.draw(3);
        passEncoder.end();
    
        window.camenDevice.queue.submit([this._commandEncoder.finish()]);
    }
} exports.Camera = Camera;