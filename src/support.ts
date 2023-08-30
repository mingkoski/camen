let camenSupport = false;

await (async () => {
    camenSupport = "gpu" in navigator;
    
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) { camenSupport = false; return; }
    
    window.camenDevice = await adapter.requestDevice();

    window.camenCanvasFormat = navigator.gpu.getPreferredCanvasFormat();
})();

export function isCamenSupported() { return camenSupport; }