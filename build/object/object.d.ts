import { Vector3 } from "../unit/vector";
import { World } from "./world";
export declare class CamenObject {
    protected _world: World | null;
    get world(): World | null;
    set world(value: World | null);
    protected _id: string;
    get id(): string;
    protected _parent: CamenObject | null;
    get parent(): CamenObject | null;
    set parent(value: CamenObject | null);
    protected _children: CamenObject[];
    protected _position: Vector3;
    get position(): Vector3;
    set position(value: Vector3);
    constructor();
}
