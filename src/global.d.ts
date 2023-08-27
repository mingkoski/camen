declare global {
    interface Window {
        isCamenSupported: boolean;
        camenDevice: GPUDevice;
    }
}

export {};