declare global {
    interface Window {
        camenDevice: GPUDevice;
        camenCanvasFormat: GPUTextureFormat;
    }
}
export {};