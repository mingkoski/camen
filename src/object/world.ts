import { CamenObject } from "./object.js";

export class World {
    protected _vertices: Float32Array;
    get vertices() { return this._vertices; }
    protected _vertexBuffer: GPUBuffer;
    get vertexBuffer() { return this._vertexBuffer; }
    protected _vertexBufferLayouts: GPUVertexBufferLayout[];
    get vertexBufferLayouts() { return this._vertexBufferLayouts; }
    protected _objects: Record<string, CamenObject> = {};

    constructor() {
        this._vertices = new Float32Array();

        const gpuBufferDescriptor: GPUBufferDescriptor = {
            size: window.camenDevice.limits.maxBufferSize,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        }

        this._vertexBuffer = window.camenDevice.createBuffer(gpuBufferDescriptor);

        this._vertexBufferLayouts = [
            {
                attributes: [
                    { shaderLocation: 0, offset: 0, format: "float32x4" }
                ],
                arrayStride: 16, stepMode: "vertex",
            }
        ];
    }

    public add(object: CamenObject) {
        this._objects[object.id] = object;
        object.world = this;
    }
};