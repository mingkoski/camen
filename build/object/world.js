function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}import{Info as r}from"../info.js";export var World=function(){var i,f;function o(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,o),t(this,"_device",void 0),t(this,"_vertices",void 0),t(this,"_vertexBuffer",void 0),t(this,"_vertexBufferLayouts",void 0),t(this,"_objects",{}),this._device=r.device,this._vertices=new Float32Array;var e={size:this._device.limits.maxBufferSize,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST};this._vertexBuffer=this._device.createBuffer(e),this._vertexBufferLayouts=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"}],arrayStride:16,stepMode:"vertex"}]}return i=[{key:"vertices",get:function(){return this._vertices}},{key:"vertexBuffer",get:function(){return this._vertexBuffer}},{key:"vertexBufferLayouts",get:function(){return this._vertexBufferLayouts}},{key:"add",value:function(e){this._objects[e.id]=e,e.world=this}}],e(o.prototype,i),f&&e(o,f),o}();