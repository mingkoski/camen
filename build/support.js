function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg), value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
}
var fn, camenSupport = !1;
await (fn = function() {
    var adapter;
    return function(thisArg, body) {
        var f, y, t, g, _ = {
            label: 0,
            sent: function() {
                if (1 & t[0]) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        };
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return function(op) {
                    if (f) throw TypeError("Generator is already executing.");
                    for(; _;)try {
                        if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        switch(y = 0, t && (op = [
                            2 & op[0],
                            t.value
                        ]), op[0]){
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                return _.label++, {
                                    value: op[1],
                                    done: !1
                                };
                            case 5:
                                _.label++, y = op[1], op = [
                                    0
                                ];
                                continue;
                            case 7:
                                op = _.ops.pop(), _.trys.pop();
                                continue;
                            default:
                                if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                    _ = 0;
                                    continue;
                                }
                                if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (6 === op[0] && _.label < t[1]) {
                                    _.label = t[1], t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2], _.ops.push(op);
                                    break;
                                }
                                t[2] && _.ops.pop(), _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [
                            6,
                            e
                        ], y = 0;
                    } finally{
                        f = t = 0;
                    }
                    if (5 & op[0]) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: !0
                    };
                }([
                    n,
                    v
                ]);
            };
        }
    }(this, function(_state) {
        switch(_state.label){
            case 0:
                return camenSupport = "gpu" in navigator, [
                    4,
                    navigator.gpu.requestAdapter()
                ];
            case 1:
                if (!(adapter = _state.sent())) return camenSupport = !1, [
                    2
                ];
                return [
                    4,
                    adapter.requestDevice()
                ];
            case 2:
                return window.camenDevice = _state.sent(), window.camenCanvasFormat = navigator.gpu.getPreferredCanvasFormat(), [
                    2
                ];
        }
    });
}, function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
    });
})();
export function isCamenSupported() {
    return camenSupport;
}
