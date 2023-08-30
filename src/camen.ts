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

export class Camen {
    public static isAvaliable() { return avaliable; }
    public static getDevice() { return device; }
    public static getCanvasFormat() { return canvasFormat; }
}