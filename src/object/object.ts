import { Scene } from "./scene";

export class CamenObject {
    _id: number;
    get id() { return this._id; }
    parent?: CamenObject = undefined;
    children: CamenObject[] = [];

    constructor() {

    }
};