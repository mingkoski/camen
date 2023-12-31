import { Info } from "../info.js";
import { CamenObject } from "./object.js";

export class World {
    protected _vertices: Float32Array;
    protected _vertexBuffer: GPUBuffer;
    protected _vertexBufferLayouts: GPUVertexBufferLayout[];
    protected _objects: Record<string, CamenObject> = {};

    public get vertices()            { return this._vertices;            };
    public get vertexBuffer()        { return this._vertexBuffer;        };
    public get vertexBufferLayouts() { return this._vertexBufferLayouts; };
    public get objects()             { return this._objects;             };

    constructor() {
        this._vertices = new Float32Array();

        const gpuBufferDescriptor: GPUBufferDescriptor = {
            size: Info.device.limits.maxBufferSize,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        }

        this._vertexBuffer = Info.device.createBuffer(gpuBufferDescriptor);

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