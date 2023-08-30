let available = false;
let device: GPUDevice;
let canvasFormat: GPUTextureFormat;

await (async () => {
    available = "gpu" in navigator;
    
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) { available = false; return; }
    
    device = await adapter.requestDevice();
    canvasFormat = navigator.gpu.getPreferredCanvasFormat();
})();

class CamenInfo {
    private _isAvailable:  boolean;
    private _device:       GPUDevice;
    private _canvasFormat: GPUTextureFormat;

    public get isAvailable()      { return this._isAvailable; }
    public get device()           { return this._device; }
    public get canvasFormat()     { return this._canvasFormat; }

    constructor() {
        this._isAvailable  = available;
        this._device       = device;
        this._canvasFormat = canvasFormat;
    }
}

export const Info = new CamenInfo();