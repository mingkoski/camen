/// <reference types="dist" />
import { CamenObject } from "./object.js";
export declare class World {
    protected _vertices: Float32Array;
    protected _vertexBuffer: GPUBuffer;
    protected _vertexBufferLayouts: GPUVertexBufferLayout[];
    protected _objects: Record<string, CamenObject>;
    get vertices(): Float32Array;
    get vertexBuffer(): GPUBuffer;
    get vertexBufferLayouts(): GPUVertexBufferLayout[];
    constructor();
    add(object: CamenObject): void;
}
