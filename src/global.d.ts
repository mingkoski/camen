declare global {
    interface Window {
        isCamenSupported: boolean;
        camenDevice: GPUDevice;
        camenCanvasFormat: GPUTextureFormat;
    }
}
export {};