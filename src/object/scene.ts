import { CamenObject } from "./object";
import { Mesh } from "./mesh";
import { Camera } from "./camera";

export class Scene {
    _vertexBuffer: GPUBuffer;
    _objects: Record<number, CamenObject> = {};

    constructor() {

    }

    public add(object: CamenObject) {
        this._objects[object._id] = object;
    }
};