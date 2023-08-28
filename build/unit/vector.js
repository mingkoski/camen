function _define_property(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : obj[key] = value, obj;
}
export var Vector3 = function Vector3(x, y, z) {
    !function(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw TypeError("Cannot call a class as a function");
    }(this, Vector3), _define_property(this, "_x", void 0), _define_property(this, "_y", void 0), _define_property(this, "_z", void 0), this._x = x || 0, this._y = y || 0, this._z = z || 0;
};
