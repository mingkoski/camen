import { CamenObject } from "./object";

export class Mesh extends CamenObject {
    _vertex: Float32Array;
    _index: Uint32Array;

    constructor() {
        super();
    }
};