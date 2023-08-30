/// <reference types="dist" />
declare class CamenInfo {
    private _isAvailable;
    private _device;
    private _canvasFormat;
    get isAvailable(): boolean;
    get device(): GPUDevice;
    get canvasFormat(): GPUTextureFormat;
    constructor();
}
export declare const Info: CamenInfo;
export {};
