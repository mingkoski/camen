let avaliable = false;
let device: GPUDevice;
let canvasFormat: GPUTextureFormat;

await (async () => {
    avaliable = "gpu" in navigator;
    
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) { avaliable = false; return; }
    
    device = await adapter.requestDevice();
    canvasFormat = navigator.gpu.getPreferredCanvasFormat();
})();

class CamenInfo {
    private _isAvaliable:  boolean;
    private _device:       GPUDevice;
    private _canvasFormat: GPUTextureFormat;

    public get isAvailable()      { return this._isAvaliable; }
    public get device()           { return this._device; }
    public get canvasFormat()     { return this._canvasFormat; }

    constructor() {
        this._isAvaliable  = avaliable;
        this._device       = device;
        this._canvasFormat = canvasFormat;
    }
}

export const Info = new CamenInfo();