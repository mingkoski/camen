function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _define_property(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : obj[key] = value, obj;
}
import { Camen } from "../camen.js";
export var World = function() {
    var protoProps, staticProps;
    function World() {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw TypeError("Cannot call a class as a function");
        }(this, World), _define_property(this, "_device", void 0), _define_property(this, "_vertices", void 0), _define_property(this, "_vertexBuffer", void 0), _define_property(this, "_vertexBufferLayouts", void 0), _define_property(this, "_objects", {}), this._device = Camen.getDevice(), this._vertices = new Float32Array();
        var gpuBufferDescriptor = {
            size: this._device.limits.maxBufferSize,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        };
        this._vertexBuffer = this._device.createBuffer(gpuBufferDescriptor), this._vertexBufferLayouts = [
            {
                attributes: [
                    {
                        shaderLocation: 0,
                        offset: 0,
                        format: "float32x4"
                    }
                ],
                arrayStride: 16,
                stepMode: "vertex"
            }
        ];
    }
    return protoProps = [
        {
            key: "vertices",
            get: function() {
                return this._vertices;
            }
        },
        {
            key: "vertexBuffer",
            get: function() {
                return this._vertexBuffer;
            }
        },
        {
            key: "vertexBufferLayouts",
            get: function() {
                return this._vertexBufferLayouts;
            }
        },
        {
            key: "add",
            value: function(object) {
                this._objects[object.id] = object, object.world = this;
            }
        }
    ], _defineProperties(World.prototype, protoProps), staticProps && _defineProperties(World, staticProps), World;
}();
