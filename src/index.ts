const init = async () => {
    window.isCamenSupported = "gpu" in navigator;
    if(window.isCamenSupported) { return; }
    
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) { window.isCamenSupported = false; return; }
    
    window.camenDevice = await adapter.requestDevice();

    window.camenCanvasFormat = navigator.gpu.getPreferredCanvasFormat();
}

await init();

export { World } from "./object/world.js";
export { Camera } from "./object/camera.js";