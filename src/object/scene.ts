import { CamenObject } from "./object";

export class Scene extends CamenObject {
    private _vertexBuffer: GPUBuffer;
    public get vertexBuffer() { return this._vertexBuffer; }

    constructor() {
        super();
    }

    public add(object: CamenObject) {
        object.parent = this;
    }

    public remove(object: CamenObject) {
        object.parent = undefined;
    }
}