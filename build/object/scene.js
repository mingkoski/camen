"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _object = require('./object');

 class Scene extends _object.CamenObject {
    
     get vertexBuffer() { return this._vertexBuffer; }

    constructor() {
        super();
    }

     add(object) {
        object.parent = this;
    }

     remove(object) {
        object.parent = undefined;
    }
} exports.Scene = Scene;