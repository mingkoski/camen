import { Vector3 } from "../unit/vector.js";
import { World } from "./world.js";

export class CamenObject {
    protected _id:       string;
    protected _world:    World | null;
    protected _parent:   CamenObject | null;
    protected _children: CamenObject[];
    protected _position: Vector3;

    public get id()                              { return this._id;        };

    public get world()                           { return this._world;     };
    public set world(value: World | null)        { this._world = value;    };

    public get parent()                          { return this.parent;     };
    public set parent(value: CamenObject | null) { this._parent = value;   };

    public get position()                        { return this._position;  };
    public set position(value: Vector3)          { this._position = value; };

    constructor() {
        this._world = null;
        this._id = crypto.randomUUID();
        this._parent = null;
        this._children = [];
        this._position = new Vector3();
    }
};