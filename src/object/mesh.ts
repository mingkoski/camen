import { CamenObject } from "./object";

export class Mesh extends CamenObject {
    private _vertex: Float32Array;
    private _index: Uint32Array;

    constructor() {
        super();
    }
};