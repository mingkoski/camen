/// <reference types="dist" />
import { CamenObject } from "./object.js";
export declare class World {
    private _device;
    protected _vertices: Float32Array;
    get vertices(): Float32Array;
    protected _vertexBuffer: GPUBuffer;
    get vertexBuffer(): GPUBuffer;
    protected _vertexBufferLayouts: GPUVertexBufferLayout[];
    get vertexBufferLayouts(): GPUVertexBufferLayout[];
    protected _objects: Record<string, CamenObject>;
    constructor();
    add(object: CamenObject): void;
}
