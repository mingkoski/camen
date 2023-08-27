"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _createNamedExportFrom(obj, localName, importedName) { Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]}); }const init = async () => {
    window.isCamenSupported = "gpu" in navigator;
    if(window.isCamenSupported) { return; }
    
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) { window.isCamenSupported = false; return; }
    
    window.camenDevice = await adapter.requestDevice();
}

await init();

var _camerajs = require('./object/camera.js'); _createNamedExportFrom(_camerajs, 'Camera', 'Camera');
var _scenejs = require('./object/scene.js'); _createNamedExportFrom(_scenejs, 'Scene', 'Scene');