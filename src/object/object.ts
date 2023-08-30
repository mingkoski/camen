import { Vector3 } from "../unit/vector.js";
import { World } from "./world.js";

export class CamenObject {
    protected _id:       string;
    protected _world:    World | null;
    protected _parent:   CamenObject | null;
    protected _children: CamenObject[];
    protected _position: Vector3;

    get id()                              { return this._id; }

    get world()                           { return this._world; }
    set world(value: World | null)        { this._world = value; }

    get parent()                          { return this.parent; };
    set parent(value: CamenObject | null) { this._parent = value; };
    
    get position()                        { return this._position; }
    set position(value: Vector3)          { this._position = value; }

    constructor() {
        this._world = null;
        this._id = crypto.randomUUID();
        this._parent = null;
        this._children = [];
        this._position = new Vector3();
    }
};