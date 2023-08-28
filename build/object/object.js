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
import { Vector3 } from "../unit/vector.js";
export var CamenObject = function() {
    var staticProps;
    function CamenObject() {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw TypeError("Cannot call a class as a function");
        }(this, CamenObject), _define_property(this, "_world", void 0), _define_property(this, "_id", void 0), _define_property(this, "_parent", void 0), _define_property(this, "_children", void 0), _define_property(this, "_position", void 0), this._world = null, this._id = crypto.randomUUID(), this._parent = null, this._children = [], this._position = new Vector3();
    }
    return _defineProperties(CamenObject.prototype, [
        {
            key: "world",
            get: function() {
                return this._world;
            },
            set: function(value) {
                this._world = value;
            }
        },
        {
            key: "id",
            get: function() {
                return this._id;
            }
        },
        {
            key: "parent",
            get: function() {
                return this.parent;
            },
            set: function(value) {
                this._parent = value;
            }
        },
        {
            key: "position",
            get: function() {
                return this._position;
            },
            set: function(value) {
                this._position = value;
            }
        }
    ]), staticProps && _defineProperties(CamenObject, staticProps), CamenObject;
}();
