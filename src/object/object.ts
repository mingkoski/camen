import { Vector3 } from "../unit/vector.js";
import { World } from "./world.js";

export class CamenObject {
    protected _world: World | null;
    get world() { return this._world; }
    set world(value: World | null) { this._world = value; }

    protected _id: string;
    get id(): string { return this._id; }

    protected _parent: CamenObject | null;
    get parent() { return this.parent; };
    set parent(value: CamenObject | null) { this._parent = value; };

    protected _children: CamenObject[];

    protected _position: Vector3;
    get position() { return this._position; }
    set position(value: Vector3) { this._position = value; }

    constructor() {
        this._world = null;
        this._id = crypto.randomUUID();
        this._parent = null;
        this._children = [];
        this._position = new Vector3();
    }
};