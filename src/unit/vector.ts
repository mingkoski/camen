export class Vector3 {
    _x: number; _y: number; _z: number;
    constructor(x?: number, y?: number, z?: number) {
        this._x = x ? x : 0;
        this._y = y ? y : 0;
        this._z = z ? z : 0;
    }
}