import { CamenObject } from "./object";
import { Mesh } from "./mesh";
import { Camera } from "./camera";

export class World {
    VERTEX_BUFFER: GPUBuffer;
    OBJECTS: Record<number, CamenObject> = {};

    constructor() {

    }

    public add(object: CamenObject) {
        this.OBJECTS[object.Id] = object;
        object.World = this;
    }
};