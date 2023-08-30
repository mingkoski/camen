/// <reference types="dist" />
import { CamenObject } from "./object.js";
import { World } from "./world.js";
interface CameraOption {
    canvas?: HTMLCanvasElement;
}
export declare class Camera extends CamenObject {
    protected _canvas: HTMLCanvasElement;
    protected _shaderModule: GPUShaderModule;
    protected _renderPipeline: GPURenderPipeline | null;
    protected _commandEncoder: GPUCommandEncoder | null;
    protected _renderPassDescriptor: GPURenderPassDescriptor;
    get world(): World | null;
    set world(value: World);
    constructor(option?: CameraOption);
    render(): void;
}
export {};
