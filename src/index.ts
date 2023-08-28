const init = async () => {
    window.isCamenSupported = "gpu" in navigator;
    if(window.isCamenSupported) { return; }
    
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) { window.isCamenSupported = false; return; }
    
    window.camenDevice = await adapter.requestDevice();
}

await init();

export { Camera } from "./object/camera.js";
export { World as Scene } from "./object/world.js";