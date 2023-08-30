import { Vector3 } from "../unit/vector.js";
import { World } from "./world.js";
export declare class CamenObject {
    protected _id: string;
    protected _world: World | null;
    protected _parent: CamenObject | null;
    protected _children: CamenObject[];
    protected _position: Vector3;
    get id(): string;
    get world(): World | null;
    set world(value: World | null);
    get parent(): CamenObject | null;
    set parent(value: CamenObject | null);
    get position(): Vector3;
    set position(value: Vector3);
    constructor();
}
