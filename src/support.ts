await (async () => {
    if(window.isCamenSupported !== undefined) { return; }
    window.isCamenSupported = "gpu" in navigator;
    if(window.isCamenSupported) { return; }
    
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) { window.isCamenSupported = false; return; }
    
    window.camenDevice = await adapter.requestDevice();

    window.camenCanvasFormat = navigator.gpu.getPreferredCanvasFormat();
})();

export function isCamenSupported() { return window.isCamenSupported; }