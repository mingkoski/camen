import { World } from "./world";

export abstract class CamenObject {
    id: number; get Id() { return this.id; }

    world: World | undefined = undefined;
    abstract set World(world: World | undefined);

    parent: CamenObject = undefined;
    set Parent(parent: CamenObject | undefined) {};
    get Parent() { return this.parent; };

    children: CamenObject[] = [];

    constructor() {

    }
};