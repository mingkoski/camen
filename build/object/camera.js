function _assert_this_initialized(self) {
    if (void 0 === self) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
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
function _get_prototype_of(o) {
    return (_get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    })(o);
}
function _set_prototype_of(o, p) {
    return (_set_prototype_of = Object.setPrototypeOf || function(o, p) {
        return o.__proto__ = p, o;
    })(o, p);
}
import { Camen } from "../camen.js";
import { CamenObject } from "./object.js";
import { common } from "../shader/common.js";
export var Camera = function(CamenObject) {
    !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _set_prototype_of(subClass, superClass);
    }(Camera, CamenObject);
    var hasNativeReflectConstruct, protoProps, staticProps, _super = (hasNativeReflectConstruct = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
            return !1;
        }
    }(), function() {
        var call, result, Super = _get_prototype_of(Camera);
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (call = result) && ("object" == (call && "undefined" != typeof Symbol && call.constructor === Symbol ? "symbol" : typeof call) || "function" == typeof call) ? call : _assert_this_initialized(this);
    });
    function Camera(option) {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw TypeError("Cannot call a class as a function");
        }(this, Camera), _define_property(_assert_this_initialized(_this = _super.call(this)), "_device", void 0), _define_property(_assert_this_initialized(_this), "_canvasFormat", void 0), _define_property(_assert_this_initialized(_this), "_canvas", void 0), _define_property(_assert_this_initialized(_this), "_shaderModule", void 0), _define_property(_assert_this_initialized(_this), "_renderPipeline", void 0), _define_property(_assert_this_initialized(_this), "_commandEncoder", void 0), _define_property(_assert_this_initialized(_this), "_renderPassDescriptor", void 0), _this._canvas = option && option.canvas ? option.canvas : document.createElement("canvas"), _this._device = Camen.getDevice(), _this._canvasFormat = Camen.getCanvasFormat();
        var _this, context = _this._canvas.getContext("webgpu");
        return context.configure({
            device: _this._device,
            format: _this._canvasFormat,
            alphaMode: "premultiplied"
        }), _this._shaderModule = Camen.getDevice().createShaderModule({
            code: common
        }), _this._renderPipeline = null, _this._commandEncoder = null, _this._renderPassDescriptor = {
            colorAttachments: [
                {
                    clearValue: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1
                    },
                    loadOp: "clear",
                    storeOp: "store",
                    view: context.getCurrentTexture().createView()
                }
            ]
        }, _this;
    }
    return protoProps = [
        {
            key: "world",
            get: function() {
                return this._world;
            },
            set: function(value) {
                var pipelineDescriptor = {
                    vertex: {
                        module: this._shaderModule,
                        entryPoint: "vertex_main",
                        buffers: value.vertexBufferLayouts
                    },
                    fragment: {
                        module: this._shaderModule,
                        entryPoint: "fragment_main",
                        targets: [
                            {
                                format: this._canvasFormat
                            }
                        ]
                    },
                    primitive: {
                        topology: "triangle-list"
                    },
                    layout: "auto"
                };
                this._renderPipeline = this._device.createRenderPipeline(pipelineDescriptor), this._commandEncoder = this._device.createCommandEncoder();
            }
        },
        {
            key: "render",
            value: function() {
                if (this._world) {
                    var passEncoder = this._commandEncoder.beginRenderPass(this._renderPassDescriptor);
                    passEncoder.setPipeline(this._renderPipeline), passEncoder.setVertexBuffer(0, this._world.vertexBuffer), passEncoder.draw(this._world.vertices.length >> 2), passEncoder.end(), Camen.getDevice().queue.submit([
                        this._commandEncoder.finish()
                    ]);
                }
            }
        }
    ], _defineProperties(Camera.prototype, protoProps), staticProps && _defineProperties(Camera, staticProps), Camera;
}(CamenObject);
