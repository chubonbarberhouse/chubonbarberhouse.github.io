var od = (e) => {
    throw TypeError(e);
};
var $a = (e, t, n) => t.has(e) || od("Cannot " + n);
var E = (e, t, n) => ($a(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    J = (e, t, n) =>
        t.has(e)
            ? od("Cannot add the same private member more than once")
            : t instanceof WeakSet
            ? t.add(e)
            : t.set(e, n),
    B = (e, t, n, r) => ($a(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Pe = (e, t, n) => ($a(e, t, "access private method"), n);
var zi = (e, t, n, r) => ({
    set _(o) {
        B(e, t, o, n);
    },
    get _() {
        return E(e, t, r);
    },
});
function I0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
                o.crossOrigin === "use-credentials"
                    ? (i.credentials = "include")
                    : o.crossOrigin === "anonymous"
                    ? (i.credentials = "omit")
                    : (i.credentials = "same-origin"),
                i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
function hh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mh = { exports: {} },
    sa = {},
    ph = { exports: {} },
    K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ni = Symbol.for("react.element"),
    F0 = Symbol.for("react.portal"),
    z0 = Symbol.for("react.fragment"),
    $0 = Symbol.for("react.strict_mode"),
    H0 = Symbol.for("react.profiler"),
    B0 = Symbol.for("react.provider"),
    W0 = Symbol.for("react.context"),
    U0 = Symbol.for("react.forward_ref"),
    V0 = Symbol.for("react.suspense"),
    Q0 = Symbol.for("react.memo"),
    Y0 = Symbol.for("react.lazy"),
    id = Symbol.iterator;
function K0(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (id && e[id]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var gh = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    vh = Object.assign,
    yh = {};
function go(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = yh), (this.updater = n || gh);
}
go.prototype.isReactComponent = {};
go.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
go.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xh() {}
xh.prototype = go.prototype;
function Du(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = yh), (this.updater = n || gh);
}
var Au = (Du.prototype = new xh());
Au.constructor = Du;
vh(Au, go.prototype);
Au.isPureReactComponent = !0;
var sd = Array.isArray,
    wh = Object.prototype.hasOwnProperty,
    Iu = { current: null },
    bh = { key: !0, ref: !0, __self: !0, __source: !0 };
function kh(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t))
            wh.call(t, r) && !bh.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
        o.children = l;
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
    return { $$typeof: Ni, type: e, key: i, ref: s, props: o, _owner: Iu.current };
}
function G0(e, t) {
    return { $$typeof: Ni, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Fu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ni;
}
function q0(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var ad = /\/+/g;
function Ha(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? q0("" + e.key) : t.toString(36);
}
function us(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (i) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Ni:
                    case F0:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
                (o = o(s)),
                (e = r === "" ? "." + Ha(s, 0) : r),
                sd(o)
                    ? ((n = ""),
                    e != null && (n = e.replace(ad, "$&/") + "/"),
                        us(o, t, n, "", function (c) {
                            return c;
                        }))
                    : o != null &&
                    (Fu(o) &&
                    (o = G0(
                        o,
                        n + (!o.key || (s && s.key === o.key) ? "" : ("" + o.key).replace(ad, "$&/") + "/") + e
                    )),
                        t.push(o)),
                1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), sd(e)))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + Ha(i, a);
            s += us(i, t, n, l, o);
        }
    else if (((l = K0(e)), typeof l == "function"))
        for (e = l.call(e), a = 0; !(i = e.next()).done; )
            (i = i.value), (l = r + Ha(i, a++)), (s += us(i, t, n, l, o));
    else if (i === "object")
        throw (
            ((t = String(e)),
                Error(
                    "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                    "). If you meant to render a collection of children, use an array instead."
                ))
        );
    return s;
}
function $i(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        us(e, r, "", "", function (i) {
            return t.call(n, i, o++);
        }),
            r
    );
}
function X0(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Fe = { current: null },
    cs = { transition: null },
    J0 = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: cs, ReactCurrentOwner: Iu };
function Ch() {
    throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
    map: $i,
    forEach: function (e, t, n) {
        $i(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            $i(e, function () {
                t++;
            }),
                t
        );
    },
    toArray: function (e) {
        return (
            $i(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Fu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
K.Component = go;
K.Fragment = z0;
K.Profiler = H0;
K.PureComponent = Du;
K.StrictMode = $0;
K.Suspense = V0;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J0;
K.act = Ch;
K.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = vh({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (s = Iu.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (l in t) wh.call(t, l) && !bh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
        r.children = a;
    }
    return { $$typeof: Ni, type: e.type, key: o, ref: i, props: r, _owner: s };
};
K.createContext = function (e) {
    return (
        (e = {
            $$typeof: W0,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
            (e.Provider = { $$typeof: B0, _context: e }),
            (e.Consumer = e)
    );
};
K.createElement = kh;
K.createFactory = function (e) {
    var t = kh.bind(null, e);
    return (t.type = e), t;
};
K.createRef = function () {
    return { current: null };
};
K.forwardRef = function (e) {
    return { $$typeof: U0, render: e };
};
K.isValidElement = Fu;
K.lazy = function (e) {
    return { $$typeof: Y0, _payload: { _status: -1, _result: e }, _init: X0 };
};
K.memo = function (e, t) {
    return { $$typeof: Q0, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
    var t = cs.transition;
    cs.transition = {};
    try {
        e();
    } finally {
        cs.transition = t;
    }
};
K.unstable_act = Ch;
K.useCallback = function (e, t) {
    return Fe.current.useCallback(e, t);
};
K.useContext = function (e) {
    return Fe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
    return Fe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
    return Fe.current.useEffect(e, t);
};
K.useId = function () {
    return Fe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
    return Fe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
    return Fe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
    return Fe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
    return Fe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
    return Fe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
    return Fe.current.useRef(e);
};
K.useState = function (e) {
    return Fe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
    return Fe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
    return Fe.current.useTransition();
};
K.version = "18.3.1";
ph.exports = K;
var y = ph.exports;
const O = hh(y),
    Z0 = I0({ __proto__: null, default: O }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ev = y,
    tv = Symbol.for("react.element"),
    nv = Symbol.for("react.fragment"),
    rv = Object.prototype.hasOwnProperty,
    ov = ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    iv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sh(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) rv.call(t, r) && !iv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return { $$typeof: tv, type: e, key: i, ref: s, props: o, _owner: ov.current };
}
sa.Fragment = nv;
sa.jsx = Sh;
sa.jsxs = Sh;
mh.exports = sa;
var u = mh.exports,
    Nh = { exports: {} },
    et = {},
    Eh = { exports: {} },
    Th = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(T, P) {
        var D = T.length;
        T.push(P);
        e: for (; 0 < D; ) {
            var U = (D - 1) >>> 1,
                F = T[U];
            if (0 < o(F, P)) (T[U] = P), (T[D] = F), (D = U);
            else break e;
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0];
    }
    function r(T) {
        if (T.length === 0) return null;
        var P = T[0],
            D = T.pop();
        if (D !== P) {
            T[0] = D;
            e: for (var U = 0, F = T.length, Y = F >>> 1; U < Y; ) {
                var q = 2 * (U + 1) - 1,
                    ve = T[q],
                    Te = q + 1,
                    Z = T[Te];
                if (0 > o(ve, D))
                    Te < F && 0 > o(Z, ve) ? ((T[U] = Z), (T[Te] = D), (U = Te)) : ((T[U] = ve), (T[q] = D), (U = q));
                else if (Te < F && 0 > o(Z, D)) (T[U] = Z), (T[Te] = D), (U = Te);
                else break e;
            }
        }
        return P;
    }
    function o(T, P) {
        var D = T.sortIndex - P.sortIndex;
        return D !== 0 ? D : T.id - P.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var l = [],
        c = [],
        d = 1,
        f = null,
        p = 3,
        h = !1,
        b = !1,
        x = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(T) {
        for (var P = n(c); P !== null; ) {
            if (P.callback === null) r(c);
            else if (P.startTime <= T) r(c), (P.sortIndex = P.expirationTime), t(l, P);
            else break;
            P = n(c);
        }
    }
    function k(T) {
        if (((x = !1), g(T), !b))
            if (n(l) !== null) (b = !0), $(C);
            else {
                var P = n(c);
                P !== null && W(k, P.startTime - T);
            }
    }
    function C(T, P) {
        (b = !1), x && ((x = !1), v(j), (j = -1)), (h = !0);
        var D = p;
        try {
            for (g(P), f = n(l); f !== null && (!(f.expirationTime > P) || (T && !z())); ) {
                var U = f.callback;
                if (typeof U == "function") {
                    (f.callback = null), (p = f.priorityLevel);
                    var F = U(f.expirationTime <= P);
                    (P = e.unstable_now()), typeof F == "function" ? (f.callback = F) : f === n(l) && r(l), g(P);
                } else r(l);
                f = n(l);
            }
            if (f !== null) var Y = !0;
            else {
                var q = n(c);
                q !== null && W(k, q.startTime - P), (Y = !1);
            }
            return Y;
        } finally {
            (f = null), (p = D), (h = !1);
        }
    }
    var S = !1,
        N = null,
        j = -1,
        L = 5,
        M = -1;
    function z() {
        return !(e.unstable_now() - M < L);
    }
    function I() {
        if (N !== null) {
            var T = e.unstable_now();
            M = T;
            var P = !0;
            try {
                P = N(!0, T);
            } finally {
                P ? Q() : ((S = !1), (N = null));
            }
        } else S = !1;
    }
    var Q;
    if (typeof m == "function")
        Q = function () {
            m(I);
        };
    else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel(),
            G = _.port2;
        (_.port1.onmessage = I),
            (Q = function () {
                G.postMessage(null);
            });
    } else
        Q = function () {
            w(I, 0);
        };
    function $(T) {
        (N = T), S || ((S = !0), Q());
    }
    function W(T, P) {
        j = w(function () {
            T(e.unstable_now());
        }, P);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (T) {
            T.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            b || h || ((b = !0), $(C));
        }),
        (e.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
                ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
                : (L = 0 < T ? Math.floor(1e3 / T) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (T) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var P = 3;
                    break;
                default:
                    P = p;
            }
            var D = p;
            p = P;
            try {
                return T();
            } finally {
                p = D;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (T, P) {
            switch (T) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    T = 3;
            }
            var D = p;
            p = T;
            try {
                return P();
            } finally {
                p = D;
            }
        }),
        (e.unstable_scheduleCallback = function (T, P, D) {
            var U = e.unstable_now();
            switch (
                (typeof D == "object" && D !== null
                    ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? U + D : U))
                    : (D = U),
                    T)
                ) {
                case 1:
                    var F = -1;
                    break;
                case 2:
                    F = 250;
                    break;
                case 5:
                    F = 1073741823;
                    break;
                case 4:
                    F = 1e4;
                    break;
                default:
                    F = 5e3;
            }
            return (
                (F = D + F),
                    (T = { id: d++, callback: P, priorityLevel: T, startTime: D, expirationTime: F, sortIndex: -1 }),
                    D > U
                        ? ((T.sortIndex = D),
                            t(c, T),
                        n(l) === null && T === n(c) && (x ? (v(j), (j = -1)) : (x = !0), W(k, D - U)))
                        : ((T.sortIndex = F), t(l, T), b || h || ((b = !0), $(C))),
                    T
            );
        }),
        (e.unstable_shouldYield = z),
        (e.unstable_wrapCallback = function (T) {
            var P = p;
            return function () {
                var D = p;
                p = P;
                try {
                    return T.apply(this, arguments);
                } finally {
                    p = D;
                }
            };
        });
})(Th);
Eh.exports = Th;
var sv = Eh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var av = y,
    Je = sv;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Ph = new Set(),
    ei = {};
function wr(e, t) {
    io(e, t), io(e + "Capture", t);
}
function io(e, t) {
    for (ei[e] = t, e = 0; e < t.length; e++) Ph.add(t[e]);
}
var Zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Sl = Object.prototype.hasOwnProperty,
    lv =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ld = {},
    ud = {};
function uv(e) {
    return Sl.call(ud, e) ? !0 : Sl.call(ld, e) ? !1 : lv.test(e) ? (ud[e] = !0) : ((ld[e] = !0), !1);
}
function cv(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                    ? !n.acceptsBooleans
                    : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function dv(e, t, n, r) {
    if (t === null || typeof t > "u" || cv(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function ze(e, t, n, r, o, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = s);
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Ee[e] = new ze(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Ee[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ee[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Ee[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Ee[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ee[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Ee[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Ee[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Ee[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zu = /[\-:]([a-z])/g;
function $u(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(zu, $u);
        Ee[t] = new ze(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(zu, $u);
    Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(zu, $u);
    Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hu(e, t, n, r) {
    var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
    (o !== null
        ? o.type !== 0
        : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (dv(t, n, o, r) && (n = null),
        r || o === null
            ? uv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
            : ((t = o.attributeName),
                (r = o.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((o = o.type),
                        (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var an = av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Hi = Symbol.for("react.element"),
    Rr = Symbol.for("react.portal"),
    Mr = Symbol.for("react.fragment"),
    Bu = Symbol.for("react.strict_mode"),
    Nl = Symbol.for("react.profiler"),
    jh = Symbol.for("react.provider"),
    Rh = Symbol.for("react.context"),
    Wu = Symbol.for("react.forward_ref"),
    El = Symbol.for("react.suspense"),
    Tl = Symbol.for("react.suspense_list"),
    Uu = Symbol.for("react.memo"),
    wn = Symbol.for("react.lazy"),
    Mh = Symbol.for("react.offscreen"),
    cd = Symbol.iterator;
function Eo(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (cd && e[cd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var he = Object.assign,
    Ba;
function $o(e) {
    if (Ba === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ba = (t && t[1]) || "";
        }
    return (
        `
` +
        Ba +
        e
    );
}
var Wa = !1;
function Ua(e, t) {
    if (!e || Wa) return "";
    Wa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                    Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var o = c.stack.split(`
`),
                    i = r.stack.split(`
`),
                    s = o.length - 1,
                    a = i.length - 1;
                1 <= s && 0 <= a && o[s] !== i[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || o[s] !== i[a])) {
                                var l =
                                    `
` + o[s].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                    l.includes("<anonymous>") &&
                                    (l = l.replace("<anonymous>", e.displayName)),
                                        l
                                );
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (Wa = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? $o(e) : "";
}
function fv(e) {
    switch (e.tag) {
        case 5:
            return $o(e.type);
        case 16:
            return $o("Lazy");
        case 13:
            return $o("Suspense");
        case 19:
            return $o("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Ua(e.type, !1)), e;
        case 11:
            return (e = Ua(e.type.render, !1)), e;
        case 1:
            return (e = Ua(e.type, !0)), e;
        default:
            return "";
    }
}
function Pl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Mr:
            return "Fragment";
        case Rr:
            return "Portal";
        case Nl:
            return "Profiler";
        case Bu:
            return "StrictMode";
        case El:
            return "Suspense";
        case Tl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Rh:
                return (e.displayName || "Context") + ".Consumer";
            case jh:
                return (e._context.displayName || "Context") + ".Provider";
            case Wu:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                        e
                );
            case Uu:
                return (t = e.displayName || null), t !== null ? t : Pl(e.type) || "Memo";
            case wn:
                (t = e._payload), (e = e._init);
                try {
                    return Pl(e(t));
                } catch {}
        }
    return null;
}
function hv(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                    (e = e.displayName || e.name || ""),
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Pl(t);
        case 8:
            return t === Bu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function zn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Oh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function mv(e) {
    var t = Oh(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (s) {
                    (r = "" + s), i.call(this, s);
                },
            }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                    getValue: function () {
                        return r;
                    },
                    setValue: function (s) {
                        r = "" + s;
                    },
                    stopTracking: function () {
                        (e._valueTracker = null), delete e[t];
                    },
                }
        );
    }
}
function Bi(e) {
    e._valueTracker || (e._valueTracker = mv(e));
}
function Lh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Oh(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Es(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function jl(e, t) {
    var n = t.checked;
    return he({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function dd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = zn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
        });
}
function _h(e, t) {
    (t = t.checked), t != null && Hu(e, "checked", t, !1);
}
function Rl(e, t) {
    _h(e, t);
    var n = zn(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Ml(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Ml(e, t.type, zn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function fd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name),
    n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ml(e, t, n) {
    (t !== "number" || Es(e.ownerDocument) !== e) &&
    (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ho = Array.isArray;
function Br(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + zn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
    return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function hd(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(R(92));
            if (Ho(n)) {
                if (1 < n.length) throw Error(R(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: zn(n) };
}
function Dh(e, t) {
    var n = zn(t.value),
        r = zn(t.defaultValue);
    n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function md(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ah(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Ll(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Ah(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : e;
}
var Wi,
    Ih = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                MSApp.execUnsafeLocalFunction(function () {
                    return e(t, n, r, o);
                });
            }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (
                Wi = Wi || document.createElement("div"),
                    Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Wi.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function ti(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Uo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    pv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Uo).forEach(function (e) {
    pv.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Uo[t] = Uo[e]);
    });
});
function Fh(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || (Uo.hasOwnProperty(e) && Uo[e])
            ? ("" + t).trim()
            : t + "px";
}
function zh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Fh(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var gv = he(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function _l(e, t) {
    if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(R(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(R(62));
    }
}
function Dl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Al = null;
function Vu(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
    );
}
var Il = null,
    Wr = null,
    Ur = null;
function pd(e) {
    if ((e = Pi(e))) {
        if (typeof Il != "function") throw Error(R(280));
        var t = e.stateNode;
        t && ((t = da(t)), Il(e.stateNode, e.type, t));
    }
}
function $h(e) {
    Wr ? (Ur ? Ur.push(e) : (Ur = [e])) : (Wr = e);
}
function Hh() {
    if (Wr) {
        var e = Wr,
            t = Ur;
        if (((Ur = Wr = null), pd(e), t)) for (e = 0; e < t.length; e++) pd(t[e]);
    }
}
function Bh(e, t) {
    return e(t);
}
function Wh() {}
var Va = !1;
function Uh(e, t, n) {
    if (Va) return e(t, n);
    Va = !0;
    try {
        return Bh(e, t, n);
    } finally {
        (Va = !1), (Wr !== null || Ur !== null) && (Wh(), Hh());
    }
}
function ni(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = da(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
            ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(R(231, t, typeof n));
    return n;
}
var Fl = !1;
if (Zt)
    try {
        var To = {};
        Object.defineProperty(To, "passive", {
            get: function () {
                Fl = !0;
            },
        }),
            window.addEventListener("test", To, To),
            window.removeEventListener("test", To, To);
    } catch {
        Fl = !1;
    }
function vv(e, t, n, r, o, i, s, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (d) {
        this.onError(d);
    }
}
var Vo = !1,
    Ts = null,
    Ps = !1,
    zl = null,
    yv = {
        onError: function (e) {
            (Vo = !0), (Ts = e);
        },
    };
function xv(e, t, n, r, o, i, s, a, l) {
    (Vo = !1), (Ts = null), vv.apply(yv, arguments);
}
function wv(e, t, n, r, o, i, s, a, l) {
    if ((xv.apply(this, arguments), Vo)) {
        if (Vo) {
            var c = Ts;
            (Vo = !1), (Ts = null);
        } else throw Error(R(198));
        Ps || ((Ps = !0), (zl = c));
    }
}
function br(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Vh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function gd(e) {
    if (br(e) !== e) throw Error(R(188));
}
function bv(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = br(e)), t === null)) throw Error(R(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return gd(o), e;
                if (i === r) return gd(o), t;
                i = i.sibling;
            }
            throw Error(R(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    (s = !0), (n = o), (r = i);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = o), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(R(189));
            }
        }
        if (n.alternate !== r) throw Error(R(190));
    }
    if (n.tag !== 3) throw Error(R(188));
    return n.stateNode.current === n ? e : t;
}
function Qh(e) {
    return (e = bv(e)), e !== null ? Yh(e) : null;
}
function Yh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Yh(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Kh = Je.unstable_scheduleCallback,
    vd = Je.unstable_cancelCallback,
    kv = Je.unstable_shouldYield,
    Cv = Je.unstable_requestPaint,
    ge = Je.unstable_now,
    Sv = Je.unstable_getCurrentPriorityLevel,
    Qu = Je.unstable_ImmediatePriority,
    Gh = Je.unstable_UserBlockingPriority,
    js = Je.unstable_NormalPriority,
    Nv = Je.unstable_LowPriority,
    qh = Je.unstable_IdlePriority,
    aa = null,
    zt = null;
function Ev(e) {
    if (zt && typeof zt.onCommitFiberRoot == "function")
        try {
            zt.onCommitFiberRoot(aa, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : jv,
    Tv = Math.log,
    Pv = Math.LN2;
function jv(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Tv(e) / Pv) | 0)) | 0;
}
var Ui = 64,
    Vi = 4194304;
function Bo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Rs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? (r = Bo(a)) : ((i &= s), i !== 0 && (r = Bo(i)));
    } else (s = n & ~o), s !== 0 ? (r = Bo(s)) : i !== 0 && (r = Bo(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Ct(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function Rv(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Mv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - Ct(i),
            a = 1 << s,
            l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Rv(a, t)) : l <= t && (e.expiredLanes |= a), (i &= ~a);
    }
}
function $l(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xh() {
    var e = Ui;
    return (Ui <<= 1), !(Ui & 4194240) && (Ui = 64), e;
}
function Qa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Ei(e, t, n) {
    (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ct(t)),
        (e[t] = n);
}
function Ov(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Ct(n),
            i = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
}
function Yu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Ct(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var te = 0;
function Jh(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zh,
    Ku,
    em,
    tm,
    nm,
    Hl = !1,
    Qi = [],
    Mn = null,
    On = null,
    Ln = null,
    ri = new Map(),
    oi = new Map(),
    kn = [],
    Lv =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function yd(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Mn = null;
            break;
        case "dragenter":
        case "dragleave":
            On = null;
            break;
        case "mouseover":
        case "mouseout":
            Ln = null;
            break;
        case "pointerover":
        case "pointerout":
            ri.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            oi.delete(t.pointerId);
    }
}
function Po(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
        t !== null && ((t = Pi(t)), t !== null && Ku(t)),
            e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function _v(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (Mn = Po(Mn, e, t, n, r, o)), !0;
        case "dragenter":
            return (On = Po(On, e, t, n, r, o)), !0;
        case "mouseover":
            return (Ln = Po(Ln, e, t, n, r, o)), !0;
        case "pointerover":
            var i = o.pointerId;
            return ri.set(i, Po(ri.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (i = o.pointerId), oi.set(i, Po(oi.get(i) || null, e, t, n, r, o)), !0;
    }
    return !1;
}
function rm(e) {
    var t = rr(e.target);
    if (t !== null) {
        var n = br(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Vh(n)), t !== null)) {
                    (e.blockedOn = t),
                        nm(e.priority, function () {
                            em(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function ds(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Al = r), n.target.dispatchEvent(r), (Al = null);
        } else return (t = Pi(n)), t !== null && Ku(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function xd(e, t, n) {
    ds(e) && n.delete(t);
}
function Dv() {
    (Hl = !1),
    Mn !== null && ds(Mn) && (Mn = null),
    On !== null && ds(On) && (On = null),
    Ln !== null && ds(Ln) && (Ln = null),
        ri.forEach(xd),
        oi.forEach(xd);
}
function jo(e, t) {
    e.blockedOn === t &&
    ((e.blockedOn = null), Hl || ((Hl = !0), Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Dv)));
}
function ii(e) {
    function t(o) {
        return jo(o, e);
    }
    if (0 < Qi.length) {
        jo(Qi[0], e);
        for (var n = 1; n < Qi.length; n++) {
            var r = Qi[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Mn !== null && jo(Mn, e),
        On !== null && jo(On, e),
        Ln !== null && jo(Ln, e),
            ri.forEach(t),
            oi.forEach(t),
            n = 0;
        n < kn.length;
        n++
    )
        (r = kn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); ) rm(n), n.blockedOn === null && kn.shift();
}
var Vr = an.ReactCurrentBatchConfig,
    Ms = !0;
function Av(e, t, n, r) {
    var o = te,
        i = Vr.transition;
    Vr.transition = null;
    try {
        (te = 1), Gu(e, t, n, r);
    } finally {
        (te = o), (Vr.transition = i);
    }
}
function Iv(e, t, n, r) {
    var o = te,
        i = Vr.transition;
    Vr.transition = null;
    try {
        (te = 4), Gu(e, t, n, r);
    } finally {
        (te = o), (Vr.transition = i);
    }
}
function Gu(e, t, n, r) {
    if (Ms) {
        var o = Bl(e, t, n, r);
        if (o === null) nl(e, t, r, Os, n), yd(e, r);
        else if (_v(o, e, t, n, r)) r.stopPropagation();
        else if ((yd(e, r), t & 4 && -1 < Lv.indexOf(e))) {
            for (; o !== null; ) {
                var i = Pi(o);
                if ((i !== null && Zh(i), (i = Bl(e, t, n, r)), i === null && nl(e, t, r, Os, n), i === o)) break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else nl(e, t, r, null, n);
    }
}
var Os = null;
function Bl(e, t, n, r) {
    if (((Os = null), (e = Vu(r)), (e = rr(e)), e !== null))
        if (((t = br(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Vh(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Os = e), null;
}
function om(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Sv()) {
                case Qu:
                    return 1;
                case Gh:
                    return 4;
                case js:
                case Nv:
                    return 16;
                case qh:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var jn = null,
    qu = null,
    fs = null;
function im() {
    if (fs) return fs;
    var e,
        t = qu,
        n = t.length,
        r,
        o = "value" in jn ? jn.value : jn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (fs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function hs(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
    );
}
function Yi() {
    return !0;
}
function wd() {
    return !1;
}
function tt(e) {
    function t(n, r, o, i, s) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = s),
            (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1)
                ? Yi
                : wd),
                (this.isPropagationStopped = wd),
                this
        );
    }
    return (
        he(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    (this.isDefaultPrevented = Yi));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                (n.stopPropagation
                    ? n.stopPropagation()
                    : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    (this.isPropagationStopped = Yi));
            },
            persist: function () {},
            isPersistent: Yi,
        }),
            t
    );
}
var vo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Xu = tt(vo),
    Ti = he({}, vo, { view: 0, detail: 0 }),
    Fv = tt(Ti),
    Ya,
    Ka,
    Ro,
    la = he({}, Ti, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ju,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Ro &&
                (Ro && e.type === "mousemove"
                    ? ((Ya = e.screenX - Ro.screenX), (Ka = e.screenY - Ro.screenY))
                    : (Ka = Ya = 0),
                    (Ro = e)),
                    Ya);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Ka;
        },
    }),
    bd = tt(la),
    zv = he({}, la, { dataTransfer: 0 }),
    $v = tt(zv),
    Hv = he({}, Ti, { relatedTarget: 0 }),
    Ga = tt(Hv),
    Bv = he({}, vo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wv = tt(Bv),
    Uv = he({}, vo, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Vv = tt(Uv),
    Qv = he({}, vo, { data: 0 }),
    kd = tt(Qv),
    Yv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Kv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Gv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function qv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gv[e]) ? !!t[e] : !1;
}
function Ju() {
    return qv;
}
var Xv = he({}, Ti, {
        key: function (e) {
            if (e.key) {
                var t = Yv[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = hs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                    ? Kv[e.keyCode] || "Unidentified"
                    : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ju,
        charCode: function (e) {
            return e.type === "keypress" ? hs(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? hs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    Jv = tt(Xv),
    Zv = he({}, la, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Cd = tt(Zv),
    ey = he({}, Ti, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ju,
    }),
    ty = tt(ey),
    ny = he({}, vo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ry = tt(ny),
    oy = he({}, la, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    iy = tt(oy),
    sy = [9, 13, 27, 32],
    Zu = Zt && "CompositionEvent" in window,
    Qo = null;
Zt && "documentMode" in document && (Qo = document.documentMode);
var ay = Zt && "TextEvent" in window && !Qo,
    sm = Zt && (!Zu || (Qo && 8 < Qo && 11 >= Qo)),
    Sd = " ",
    Nd = !1;
function am(e, t) {
    switch (e) {
        case "keyup":
            return sy.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function lm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Or = !1;
function ly(e, t) {
    switch (e) {
        case "compositionend":
            return lm(t);
        case "keypress":
            return t.which !== 32 ? null : ((Nd = !0), Sd);
        case "textInput":
            return (e = t.data), e === Sd && Nd ? null : e;
        default:
            return null;
    }
}
function uy(e, t) {
    if (Or)
        return e === "compositionend" || (!Zu && am(e, t)) ? ((e = im()), (fs = qu = jn = null), (Or = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return sm && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var cy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Ed(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cy[e.type] : t === "textarea";
}
function um(e, t, n, r) {
    $h(r),
        (t = Ls(t, "onChange")),
    0 < t.length && ((n = new Xu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Yo = null,
    si = null;
function dy(e) {
    wm(e, 0);
}
function ua(e) {
    var t = Dr(e);
    if (Lh(t)) return e;
}
function fy(e, t) {
    if (e === "change") return t;
}
var cm = !1;
if (Zt) {
    var qa;
    if (Zt) {
        var Xa = "oninput" in document;
        if (!Xa) {
            var Td = document.createElement("div");
            Td.setAttribute("oninput", "return;"), (Xa = typeof Td.oninput == "function");
        }
        qa = Xa;
    } else qa = !1;
    cm = qa && (!document.documentMode || 9 < document.documentMode);
}
function Pd() {
    Yo && (Yo.detachEvent("onpropertychange", dm), (si = Yo = null));
}
function dm(e) {
    if (e.propertyName === "value" && ua(si)) {
        var t = [];
        um(t, si, e, Vu(e)), Uh(dy, t);
    }
}
function hy(e, t, n) {
    e === "focusin" ? (Pd(), (Yo = t), (si = n), Yo.attachEvent("onpropertychange", dm)) : e === "focusout" && Pd();
}
function my(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ua(si);
}
function py(e, t) {
    if (e === "click") return ua(t);
}
function gy(e, t) {
    if (e === "input" || e === "change") return ua(t);
}
function vy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Nt = typeof Object.is == "function" ? Object.is : vy;
function ai(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Sl.call(t, o) || !Nt(e[o], t[o])) return !1;
    }
    return !0;
}
function jd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Rd(e, t) {
    var n = jd(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = jd(n);
    }
}
function fm(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
                ? !1
                : t && t.nodeType === 3
                    ? fm(e, t.parentNode)
                    : "contains" in e
                        ? e.contains(t)
                        : e.compareDocumentPosition
                            ? !!(e.compareDocumentPosition(t) & 16)
                            : !1
        : !1;
}
function hm() {
    for (var e = window, t = Es(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Es(e.document);
    }
    return t;
}
function ec(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function yy(e) {
    var t = hm(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && fm(n.ownerDocument.documentElement, n)) {
        if (r !== null && ec(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                (r = r.end === void 0 ? i : Math.min(r.end, o)),
                !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = Rd(n, i));
                var s = Rd(n, r);
                o &&
                s &&
                (e.rangeCount !== 1 ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== s.node ||
                    e.focusOffset !== s.offset) &&
                ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var xy = Zt && "documentMode" in document && 11 >= document.documentMode,
    Lr = null,
    Wl = null,
    Ko = null,
    Ul = !1;
function Md(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ul ||
    Lr == null ||
    Lr !== Es(r) ||
    ((r = Lr),
        "selectionStart" in r && ec(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
                (r = {
                    anchorNode: r.anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                })),
    (Ko && ai(Ko, r)) ||
    ((Ko = r),
        (r = Ls(Wl, "onSelect")),
    0 < r.length &&
    ((t = new Xu("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Lr))));
}
function Ki(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var _r = {
        animationend: Ki("Animation", "AnimationEnd"),
        animationiteration: Ki("Animation", "AnimationIteration"),
        animationstart: Ki("Animation", "AnimationStart"),
        transitionend: Ki("Transition", "TransitionEnd"),
    },
    Ja = {},
    mm = {};
Zt &&
((mm = document.createElement("div").style),
"AnimationEvent" in window ||
(delete _r.animationend.animation, delete _r.animationiteration.animation, delete _r.animationstart.animation),
"TransitionEvent" in window || delete _r.transitionend.transition);
function ca(e) {
    if (Ja[e]) return Ja[e];
    if (!_r[e]) return e;
    var t = _r[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in mm) return (Ja[e] = t[n]);
    return e;
}
var pm = ca("animationend"),
    gm = ca("animationiteration"),
    vm = ca("animationstart"),
    ym = ca("transitionend"),
    xm = new Map(),
    Od =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Qn(e, t) {
    xm.set(e, t), wr(t, [e]);
}
for (var Za = 0; Za < Od.length; Za++) {
    var el = Od[Za],
        wy = el.toLowerCase(),
        by = el[0].toUpperCase() + el.slice(1);
    Qn(wy, "on" + by);
}
Qn(pm, "onAnimationEnd");
Qn(gm, "onAnimationIteration");
Qn(vm, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(ym, "onTransitionEnd");
io("onMouseEnter", ["mouseout", "mouseover"]);
io("onMouseLeave", ["mouseout", "mouseover"]);
io("onPointerEnter", ["pointerout", "pointerover"]);
io("onPointerLeave", ["pointerout", "pointerover"]);
wr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
wr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
wr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
wr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Wo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    ky = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));
function Ld(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), wv(r, t, void 0, e), (e.currentTarget = null);
}
function wm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        c = a.currentTarget;
                    if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
                    Ld(o, a, c), (i = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((a = r[s]),
                            (l = a.instance),
                            (c = a.currentTarget),
                            (a = a.listener),
                        l !== i && o.isPropagationStopped())
                    )
                        break e;
                    Ld(o, a, c), (i = l);
                }
        }
    }
    if (Ps) throw ((e = zl), (Ps = !1), (zl = null), e);
}
function se(e, t) {
    var n = t[Gl];
    n === void 0 && (n = t[Gl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (bm(t, e, 2, !1), n.add(r));
}
function tl(e, t, n) {
    var r = 0;
    t && (r |= 4), bm(n, e, r, t);
}
var Gi = "_reactListening" + Math.random().toString(36).slice(2);
function li(e) {
    if (!e[Gi]) {
        (e[Gi] = !0),
            Ph.forEach(function (n) {
                n !== "selectionchange" && (ky.has(n) || tl(n, !1, e), tl(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Gi] || ((t[Gi] = !0), tl("selectionchange", !1, t));
    }
}
function bm(e, t, n, r) {
    switch (om(t)) {
        case 1:
            var o = Av;
            break;
        case 4:
            o = Iv;
            break;
        default:
            o = Gu;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
    !Fl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
        r
            ? o !== void 0
            ? e.addEventListener(t, n, { capture: !0, passive: o })
            : e.addEventListener(t, n, !0)
            : o !== void 0
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1);
}
function nl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = s.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o))
                        )
                            return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = rr(a)), s === null)) return;
                    if (((l = s.tag), l === 5 || l === 6)) {
                        r = i = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Uh(function () {
        var c = i,
            d = Vu(n),
            f = [];
        e: {
            var p = xm.get(e);
            if (p !== void 0) {
                var h = Xu,
                    b = e;
                switch (e) {
                    case "keypress":
                        if (hs(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        h = Jv;
                        break;
                    case "focusin":
                        (b = "focus"), (h = Ga);
                        break;
                    case "focusout":
                        (b = "blur"), (h = Ga);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = Ga;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = bd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = $v;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = ty;
                        break;
                    case pm:
                    case gm:
                    case vm:
                        h = Wv;
                        break;
                    case ym:
                        h = ry;
                        break;
                    case "scroll":
                        h = Fv;
                        break;
                    case "wheel":
                        h = iy;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = Vv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = Cd;
                }
                var x = (t & 4) !== 0,
                    w = !x && e === "scroll",
                    v = x ? (p !== null ? p + "Capture" : null) : p;
                x = [];
                for (var m = c, g; m !== null; ) {
                    g = m;
                    var k = g.stateNode;
                    if (
                        (g.tag === 5 &&
                        k !== null &&
                        ((g = k), v !== null && ((k = ni(m, v)), k != null && x.push(ui(m, k, g)))),
                            w)
                    )
                        break;
                    m = m.return;
                }
                0 < x.length && ((p = new h(p, b, null, n, d)), f.push({ event: p, listeners: x }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                        (h = e === "mouseout" || e === "pointerout"),
                    p && n !== Al && (b = n.relatedTarget || n.fromElement) && (rr(b) || b[en]))
                )
                    break e;
                if (
                    (h || p) &&
                    ((p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window),
                        h
                            ? ((b = n.relatedTarget || n.toElement),
                                (h = c),
                                (b = b ? rr(b) : null),
                            b !== null && ((w = br(b)), b !== w || (b.tag !== 5 && b.tag !== 6)) && (b = null))
                            : ((h = null), (b = c)),
                    h !== b)
                ) {
                    if (
                        ((x = bd),
                            (k = "onMouseLeave"),
                            (v = "onMouseEnter"),
                            (m = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                        ((x = Cd), (k = "onPointerLeave"), (v = "onPointerEnter"), (m = "pointer")),
                            (w = h == null ? p : Dr(h)),
                            (g = b == null ? p : Dr(b)),
                            (p = new x(k, m + "leave", h, n, d)),
                            (p.target = w),
                            (p.relatedTarget = g),
                            (k = null),
                        rr(d) === c &&
                        ((x = new x(v, m + "enter", b, n, d)), (x.target = g), (x.relatedTarget = w), (k = x)),
                            (w = k),
                        h && b)
                    )
                        t: {
                            for (x = h, v = b, m = 0, g = x; g; g = Pr(g)) m++;
                            for (g = 0, k = v; k; k = Pr(k)) g++;
                            for (; 0 < m - g; ) (x = Pr(x)), m--;
                            for (; 0 < g - m; ) (v = Pr(v)), g--;
                            for (; m--; ) {
                                if (x === v || (v !== null && x === v.alternate)) break t;
                                (x = Pr(x)), (v = Pr(v));
                            }
                            x = null;
                        }
                    else x = null;
                    h !== null && _d(f, p, h, x, !1), b !== null && w !== null && _d(f, w, b, x, !0);
                }
            }
            e: {
                if (
                    ((p = c ? Dr(c) : window),
                        (h = p.nodeName && p.nodeName.toLowerCase()),
                    h === "select" || (h === "input" && p.type === "file"))
                )
                    var C = fy;
                else if (Ed(p))
                    if (cm) C = gy;
                    else {
                        C = my;
                        var S = hy;
                    }
                else
                    (h = p.nodeName) &&
                    h.toLowerCase() === "input" &&
                    (p.type === "checkbox" || p.type === "radio") &&
                    (C = py);
                if (C && (C = C(e, c))) {
                    um(f, C, n, d);
                    break e;
                }
                S && S(e, p, c),
                e === "focusout" &&
                (S = p._wrapperState) &&
                S.controlled &&
                p.type === "number" &&
                Ml(p, "number", p.value);
            }
            switch (((S = c ? Dr(c) : window), e)) {
                case "focusin":
                    (Ed(S) || S.contentEditable === "true") && ((Lr = S), (Wl = c), (Ko = null));
                    break;
                case "focusout":
                    Ko = Wl = Lr = null;
                    break;
                case "mousedown":
                    Ul = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Ul = !1), Md(f, n, d);
                    break;
                case "selectionchange":
                    if (xy) break;
                case "keydown":
                case "keyup":
                    Md(f, n, d);
            }
            var N;
            if (Zu)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var j = "onCompositionStart";
                            break e;
                        case "compositionend":
                            j = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            j = "onCompositionUpdate";
                            break e;
                    }
                    j = void 0;
                }
            else
                Or
                    ? am(e, n) && (j = "onCompositionEnd")
                    : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j &&
            (sm &&
            n.locale !== "ko" &&
            (Or || j !== "onCompositionStart"
                ? j === "onCompositionEnd" && Or && (N = im())
                : ((jn = d), (qu = "value" in jn ? jn.value : jn.textContent), (Or = !0))),
                (S = Ls(c, j)),
            0 < S.length &&
            ((j = new kd(j, e, null, n, d)),
                f.push({ event: j, listeners: S }),
                N ? (j.data = N) : ((N = lm(n)), N !== null && (j.data = N)))),
            (N = ay ? ly(e, n) : uy(e, n)) &&
            ((c = Ls(c, "onBeforeInput")),
            0 < c.length &&
            ((d = new kd("onBeforeInput", "beforeinput", null, n, d)),
                f.push({ event: d, listeners: c }),
                (d.data = N)));
        }
        wm(f, t);
    });
}
function ui(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ls(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 &&
        i !== null &&
        ((o = i),
            (i = ni(e, n)),
        i != null && r.unshift(ui(e, i, o)),
            (i = ni(e, t)),
        i != null && r.push(ui(e, i, o))),
            (e = e.return);
    }
    return r;
}
function Pr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function _d(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            c = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
        c !== null &&
        ((a = c),
            o
                ? ((l = ni(n, i)), l != null && s.unshift(ui(n, l, a)))
                : o || ((l = ni(n, i)), l != null && s.push(ui(n, l, a)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var Cy = /\r\n?/g,
    Sy = /\u0000|\uFFFD/g;
function Dd(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Cy,
            `
`
        )
        .replace(Sy, "");
}
function qi(e, t, n) {
    if (((t = Dd(t)), Dd(e) !== t && n)) throw Error(R(425));
}
function _s() {}
var Vl = null,
    Ql = null;
function Yl(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Kl = typeof setTimeout == "function" ? setTimeout : void 0,
    Ny = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ad = typeof Promise == "function" ? Promise : void 0,
    Ey =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Ad < "u"
            ? function (e) {
                return Ad.resolve(null).then(e).catch(Ty);
            }
            : Kl;
function Ty(e) {
    setTimeout(function () {
        throw e;
    });
}
function rl(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), ii(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    ii(t);
}
function _n(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Id(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var yo = Math.random().toString(36).slice(2),
    Dt = "__reactFiber$" + yo,
    ci = "__reactProps$" + yo,
    en = "__reactContainer$" + yo,
    Gl = "__reactEvents$" + yo,
    Py = "__reactListeners$" + yo,
    jy = "__reactHandles$" + yo;
function rr(e) {
    var t = e[Dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[en] || n[Dt])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = Id(e); e !== null; ) {
                    if ((n = e[Dt])) return n;
                    e = Id(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Pi(e) {
    return (e = e[Dt] || e[en]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Dr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(R(33));
}
function da(e) {
    return e[ci] || null;
}
var ql = [],
    Ar = -1;
function Yn(e) {
    return { current: e };
}
function ae(e) {
    0 > Ar || ((e.current = ql[Ar]), (ql[Ar] = null), Ar--);
}
function oe(e, t) {
    Ar++, (ql[Ar] = e.current), (e.current = t);
}
var $n = {},
    Le = Yn($n),
    We = Yn(!1),
    mr = $n;
function so(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $n;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return (
        r &&
        ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
    );
}
function Ue(e) {
    return (e = e.childContextTypes), e != null;
}
function Ds() {
    ae(We), ae(Le);
}
function Fd(e, t, n) {
    if (Le.current !== $n) throw Error(R(168));
    oe(Le, t), oe(We, n);
}
function km(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(R(108, hv(e) || "Unknown", o));
    return he({}, n, r);
}
function As(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $n),
            (mr = Le.current),
            oe(Le, e),
            oe(We, We.current),
            !0
    );
}
function zd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(R(169));
    n ? ((e = km(e, t, mr)), (r.__reactInternalMemoizedMergedChildContext = e), ae(We), ae(Le), oe(Le, e)) : ae(We),
        oe(We, n);
}
var Yt = null,
    fa = !1,
    ol = !1;
function Cm(e) {
    Yt === null ? (Yt = [e]) : Yt.push(e);
}
function Ry(e) {
    (fa = !0), Cm(e);
}
function Kn() {
    if (!ol && Yt !== null) {
        ol = !0;
        var e = 0,
            t = te;
        try {
            var n = Yt;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Yt = null), (fa = !1);
        } catch (o) {
            throw (Yt !== null && (Yt = Yt.slice(e + 1)), Kh(Qu, Kn), o);
        } finally {
            (te = t), (ol = !1);
        }
    }
    return null;
}
var Ir = [],
    Fr = 0,
    Is = null,
    Fs = 0,
    ot = [],
    it = 0,
    pr = null,
    Gt = 1,
    qt = "";
function er(e, t) {
    (Ir[Fr++] = Fs), (Ir[Fr++] = Is), (Is = e), (Fs = t);
}
function Sm(e, t, n) {
    (ot[it++] = Gt), (ot[it++] = qt), (ot[it++] = pr), (pr = e);
    var r = Gt;
    e = qt;
    var o = 32 - Ct(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - Ct(t) + o;
    if (30 < i) {
        var s = o - (o % 5);
        (i = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (o -= s),
            (Gt = (1 << (32 - Ct(t) + o)) | (n << o) | r),
            (qt = i + e);
    } else (Gt = (1 << i) | (n << o) | r), (qt = e);
}
function tc(e) {
    e.return !== null && (er(e, 1), Sm(e, 1, 0));
}
function nc(e) {
    for (; e === Is; ) (Is = Ir[--Fr]), (Ir[Fr] = null), (Fs = Ir[--Fr]), (Ir[Fr] = null);
    for (; e === pr; )
        (pr = ot[--it]), (ot[it] = null), (qt = ot[--it]), (ot[it] = null), (Gt = ot[--it]), (ot[it] = null);
}
var qe = null,
    Ge = null,
    ue = !1,
    kt = null;
function Nm(e, t) {
    var n = st(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function $d(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                    t !== null ? ((e.stateNode = t), (qe = e), (Ge = _n(t.firstChild)), !0) : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                    t !== null ? ((e.stateNode = t), (qe = e), (Ge = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                    t !== null
                        ? ((n = pr !== null ? { id: Gt, overflow: qt } : null),
                            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                            (n = st(18, null, null, 0)),
                            (n.stateNode = t),
                            (n.return = e),
                            (e.child = n),
                            (qe = e),
                            (Ge = null),
                            !0)
                        : !1
            );
        default:
            return !1;
    }
}
function Xl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jl(e) {
    if (ue) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!$d(e, t)) {
                if (Xl(e)) throw Error(R(418));
                t = _n(n.nextSibling);
                var r = qe;
                t && $d(e, t) ? Nm(r, n) : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e));
            }
        } else {
            if (Xl(e)) throw Error(R(418));
            (e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e);
        }
    }
}
function Hd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    qe = e;
}
function Xi(e) {
    if (e !== qe) return !1;
    if (!ue) return Hd(e), (ue = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Yl(e.type, e.memoizedProps))),
        t && (t = Ge))
    ) {
        if (Xl(e)) throw (Em(), Error(R(418)));
        for (; t; ) Nm(e, t), (t = _n(t.nextSibling));
    }
    if ((Hd(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = _n(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Ge = null;
        }
    } else Ge = qe ? _n(e.stateNode.nextSibling) : null;
    return !0;
}
function Em() {
    for (var e = Ge; e; ) e = _n(e.nextSibling);
}
function ao() {
    (Ge = qe = null), (ue = !1);
}
function rc(e) {
    kt === null ? (kt = [e]) : kt.push(e);
}
var My = an.ReactCurrentBatchConfig;
function Mo(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(R(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(R(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
                ? t.ref
                : ((t = function (s) {
                    var a = o.refs;
                    s === null ? delete a[i] : (a[i] = s);
                }),
                    (t._stringRef = i),
                    t);
        }
        if (typeof e != "string") throw Error(R(284));
        if (!n._owner) throw Error(R(290, e));
    }
    return e;
}
function Ji(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
            Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    );
}
function Bd(e) {
    var t = e._init;
    return t(e._payload);
}
function Tm(e) {
    function t(v, m) {
        if (e) {
            var g = v.deletions;
            g === null ? ((v.deletions = [m]), (v.flags |= 16)) : g.push(m);
        }
    }
    function n(v, m) {
        if (!e) return null;
        for (; m !== null; ) t(v, m), (m = m.sibling);
        return null;
    }
    function r(v, m) {
        for (v = new Map(); m !== null; ) m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
        return v;
    }
    function o(v, m) {
        return (v = Fn(v, m)), (v.index = 0), (v.sibling = null), v;
    }
    function i(v, m, g) {
        return (
            (v.index = g),
                e
                    ? ((g = v.alternate),
                        g !== null ? ((g = g.index), g < m ? ((v.flags |= 2), m) : g) : ((v.flags |= 2), m))
                    : ((v.flags |= 1048576), m)
        );
    }
    function s(v) {
        return e && v.alternate === null && (v.flags |= 2), v;
    }
    function a(v, m, g, k) {
        return m === null || m.tag !== 6
            ? ((m = dl(g, v.mode, k)), (m.return = v), m)
            : ((m = o(m, g)), (m.return = v), m);
    }
    function l(v, m, g, k) {
        var C = g.type;
        return C === Mr
            ? d(v, m, g.props.children, k, g.key)
            : m !== null &&
            (m.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === wn && Bd(C) === m.type))
                ? ((k = o(m, g.props)), (k.ref = Mo(v, m, g)), (k.return = v), k)
                : ((k = ws(g.type, g.key, g.props, null, v.mode, k)), (k.ref = Mo(v, m, g)), (k.return = v), k);
    }
    function c(v, m, g, k) {
        return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== g.containerInfo ||
        m.stateNode.implementation !== g.implementation
            ? ((m = fl(g, v.mode, k)), (m.return = v), m)
            : ((m = o(m, g.children || [])), (m.return = v), m);
    }
    function d(v, m, g, k, C) {
        return m === null || m.tag !== 7
            ? ((m = hr(g, v.mode, k, C)), (m.return = v), m)
            : ((m = o(m, g)), (m.return = v), m);
    }
    function f(v, m, g) {
        if ((typeof m == "string" && m !== "") || typeof m == "number")
            return (m = dl("" + m, v.mode, g)), (m.return = v), m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Hi:
                    return (
                        (g = ws(m.type, m.key, m.props, null, v.mode, g)), (g.ref = Mo(v, null, m)), (g.return = v), g
                    );
                case Rr:
                    return (m = fl(m, v.mode, g)), (m.return = v), m;
                case wn:
                    var k = m._init;
                    return f(v, k(m._payload), g);
            }
            if (Ho(m) || Eo(m)) return (m = hr(m, v.mode, g, null)), (m.return = v), m;
            Ji(v, m);
        }
        return null;
    }
    function p(v, m, g, k) {
        var C = m !== null ? m.key : null;
        if ((typeof g == "string" && g !== "") || typeof g == "number") return C !== null ? null : a(v, m, "" + g, k);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Hi:
                    return g.key === C ? l(v, m, g, k) : null;
                case Rr:
                    return g.key === C ? c(v, m, g, k) : null;
                case wn:
                    return (C = g._init), p(v, m, C(g._payload), k);
            }
            if (Ho(g) || Eo(g)) return C !== null ? null : d(v, m, g, k, null);
            Ji(v, g);
        }
        return null;
    }
    function h(v, m, g, k, C) {
        if ((typeof k == "string" && k !== "") || typeof k == "number")
            return (v = v.get(g) || null), a(m, v, "" + k, C);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Hi:
                    return (v = v.get(k.key === null ? g : k.key) || null), l(m, v, k, C);
                case Rr:
                    return (v = v.get(k.key === null ? g : k.key) || null), c(m, v, k, C);
                case wn:
                    var S = k._init;
                    return h(v, m, g, S(k._payload), C);
            }
            if (Ho(k) || Eo(k)) return (v = v.get(g) || null), d(m, v, k, C, null);
            Ji(m, k);
        }
        return null;
    }
    function b(v, m, g, k) {
        for (var C = null, S = null, N = m, j = (m = 0), L = null; N !== null && j < g.length; j++) {
            N.index > j ? ((L = N), (N = null)) : (L = N.sibling);
            var M = p(v, N, g[j], k);
            if (M === null) {
                N === null && (N = L);
                break;
            }
            e && N && M.alternate === null && t(v, N),
                (m = i(M, m, j)),
                S === null ? (C = M) : (S.sibling = M),
                (S = M),
                (N = L);
        }
        if (j === g.length) return n(v, N), ue && er(v, j), C;
        if (N === null) {
            for (; j < g.length; j++)
                (N = f(v, g[j], k)), N !== null && ((m = i(N, m, j)), S === null ? (C = N) : (S.sibling = N), (S = N));
            return ue && er(v, j), C;
        }
        for (N = r(v, N); j < g.length; j++)
            (L = h(N, v, j, g[j], k)),
            L !== null &&
            (e && L.alternate !== null && N.delete(L.key === null ? j : L.key),
                (m = i(L, m, j)),
                S === null ? (C = L) : (S.sibling = L),
                (S = L));
        return (
            e &&
            N.forEach(function (z) {
                return t(v, z);
            }),
            ue && er(v, j),
                C
        );
    }
    function x(v, m, g, k) {
        var C = Eo(g);
        if (typeof C != "function") throw Error(R(150));
        if (((g = C.call(g)), g == null)) throw Error(R(151));
        for (var S = (C = null), N = m, j = (m = 0), L = null, M = g.next(); N !== null && !M.done; j++, M = g.next()) {
            N.index > j ? ((L = N), (N = null)) : (L = N.sibling);
            var z = p(v, N, M.value, k);
            if (z === null) {
                N === null && (N = L);
                break;
            }
            e && N && z.alternate === null && t(v, N),
                (m = i(z, m, j)),
                S === null ? (C = z) : (S.sibling = z),
                (S = z),
                (N = L);
        }
        if (M.done) return n(v, N), ue && er(v, j), C;
        if (N === null) {
            for (; !M.done; j++, M = g.next())
                (M = f(v, M.value, k)),
                M !== null && ((m = i(M, m, j)), S === null ? (C = M) : (S.sibling = M), (S = M));
            return ue && er(v, j), C;
        }
        for (N = r(v, N); !M.done; j++, M = g.next())
            (M = h(N, v, j, M.value, k)),
            M !== null &&
            (e && M.alternate !== null && N.delete(M.key === null ? j : M.key),
                (m = i(M, m, j)),
                S === null ? (C = M) : (S.sibling = M),
                (S = M));
        return (
            e &&
            N.forEach(function (I) {
                return t(v, I);
            }),
            ue && er(v, j),
                C
        );
    }
    function w(v, m, g, k) {
        if (
            (typeof g == "object" && g !== null && g.type === Mr && g.key === null && (g = g.props.children),
            typeof g == "object" && g !== null)
        ) {
            switch (g.$$typeof) {
                case Hi:
                    e: {
                        for (var C = g.key, S = m; S !== null; ) {
                            if (S.key === C) {
                                if (((C = g.type), C === Mr)) {
                                    if (S.tag === 7) {
                                        n(v, S.sibling), (m = o(S, g.props.children)), (m.return = v), (v = m);
                                        break e;
                                    }
                                } else if (
                                    S.elementType === C ||
                                    (typeof C == "object" && C !== null && C.$$typeof === wn && Bd(C) === S.type)
                                ) {
                                    n(v, S.sibling),
                                        (m = o(S, g.props)),
                                        (m.ref = Mo(v, S, g)),
                                        (m.return = v),
                                        (v = m);
                                    break e;
                                }
                                n(v, S);
                                break;
                            } else t(v, S);
                            S = S.sibling;
                        }
                        g.type === Mr
                            ? ((m = hr(g.props.children, v.mode, k, g.key)), (m.return = v), (v = m))
                            : ((k = ws(g.type, g.key, g.props, null, v.mode, k)),
                                (k.ref = Mo(v, m, g)),
                                (k.return = v),
                                (v = k));
                    }
                    return s(v);
                case Rr:
                    e: {
                        for (S = g.key; m !== null; ) {
                            if (m.key === S)
                                if (
                                    m.tag === 4 &&
                                    m.stateNode.containerInfo === g.containerInfo &&
                                    m.stateNode.implementation === g.implementation
                                ) {
                                    n(v, m.sibling), (m = o(m, g.children || [])), (m.return = v), (v = m);
                                    break e;
                                } else {
                                    n(v, m);
                                    break;
                                }
                            else t(v, m);
                            m = m.sibling;
                        }
                        (m = fl(g, v.mode, k)), (m.return = v), (v = m);
                    }
                    return s(v);
                case wn:
                    return (S = g._init), w(v, m, S(g._payload), k);
            }
            if (Ho(g)) return b(v, m, g, k);
            if (Eo(g)) return x(v, m, g, k);
            Ji(v, g);
        }
        return (typeof g == "string" && g !== "") || typeof g == "number"
            ? ((g = "" + g),
                m !== null && m.tag === 6
                    ? (n(v, m.sibling), (m = o(m, g)), (m.return = v), (v = m))
                    : (n(v, m), (m = dl(g, v.mode, k)), (m.return = v), (v = m)),
                s(v))
            : n(v, m);
    }
    return w;
}
var lo = Tm(!0),
    Pm = Tm(!1),
    zs = Yn(null),
    $s = null,
    zr = null,
    oc = null;
function ic() {
    oc = zr = $s = null;
}
function sc(e) {
    var t = zs.current;
    ae(zs), (e._currentValue = t);
}
function Zl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function Qr(e, t) {
    ($s = e),
        (oc = zr = null),
        (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function lt(e) {
    var t = e._currentValue;
    if (oc !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), zr === null)) {
            if ($s === null) throw Error(R(308));
            (zr = e), ($s.dependencies = { lanes: 0, firstContext: e });
        } else zr = zr.next = e;
    return t;
}
var or = null;
function ac(e) {
    or === null ? (or = [e]) : or.push(e);
}
function jm(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? ((n.next = n), ac(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), tn(e, r);
}
function tn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var bn = !1;
function lc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Rm(e, t) {
    (e = e.updateQueue),
    t.updateQueue === e &&
    (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
    });
}
function Xt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), X & 2)) {
        var o = r.pending;
        return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), tn(e, n);
    }
    return (
        (o = r.interleaved),
            o === null ? ((t.next = t), ac(r)) : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            tn(e, n)
    );
}
function ms(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yu(e, n);
    }
}
function Wd(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
            } while (n !== null);
            i === null ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Hs(e, t, n, r) {
    var o = e.updateQueue;
    bn = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            c = l.next;
        (l.next = null), s === null ? (i = c) : (s.next = c), (s = l);
        var d = e.alternate;
        d !== null &&
        ((d = d.updateQueue),
            (a = d.lastBaseUpdate),
        a !== s && (a === null ? (d.firstBaseUpdate = c) : (a.next = c), (d.lastBaseUpdate = l)));
    }
    if (i !== null) {
        var f = o.baseState;
        (s = 0), (d = c = l = null), (a = i);
        do {
            var p = a.lane,
                h = a.eventTime;
            if ((r & p) === p) {
                d !== null &&
                (d = d.next =
                    { eventTime: h, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var b = e,
                        x = a;
                    switch (((p = t), (h = n), x.tag)) {
                        case 1:
                            if (((b = x.payload), typeof b == "function")) {
                                f = b.call(h, f, p);
                                break e;
                            }
                            f = b;
                            break e;
                        case 3:
                            b.flags = (b.flags & -65537) | 128;
                        case 0:
                            if (((b = x.payload), (p = typeof b == "function" ? b.call(h, f, p) : b), p == null))
                                break e;
                            f = he({}, f, p);
                            break e;
                        case 2:
                            bn = !0;
                    }
                }
                a.callback !== null &&
                a.lane !== 0 &&
                ((e.flags |= 64), (p = o.effects), p === null ? (o.effects = [a]) : p.push(a));
            } else
                (h = { eventTime: h, lane: p, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                    d === null ? ((c = d = h), (l = f)) : (d = d.next = h),
                    (s |= p);
            if (((a = a.next), a === null)) {
                if (((a = o.shared.pending), a === null)) break;
                (p = a), (a = p.next), (p.next = null), (o.lastBaseUpdate = p), (o.shared.pending = null);
            }
        } while (!0);
        if (
            (d === null && (l = f),
                (o.baseState = l),
                (o.firstBaseUpdate = c),
                (o.lastBaseUpdate = d),
                (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (s |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (vr |= s), (e.lanes = s), (e.memoizedState = f);
    }
}
function Ud(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function")) throw Error(R(191, o));
                o.call(r);
            }
        }
}
var ji = {},
    $t = Yn(ji),
    di = Yn(ji),
    fi = Yn(ji);
function ir(e) {
    if (e === ji) throw Error(R(174));
    return e;
}
function uc(e, t) {
    switch ((oe(fi, t), oe(di, e), oe($t, ji), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ll(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ll(t, e));
    }
    ae($t), oe($t, t);
}
function uo() {
    ae($t), ae(di), ae(fi);
}
function Mm(e) {
    ir(fi.current);
    var t = ir($t.current),
        n = Ll(t, e.type);
    t !== n && (oe(di, e), oe($t, n));
}
function cc(e) {
    di.current === e && (ae($t), ae(di));
}
var ce = Yn(0);
function Bs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var il = [];
function dc() {
    for (var e = 0; e < il.length; e++) il[e]._workInProgressVersionPrimary = null;
    il.length = 0;
}
var ps = an.ReactCurrentDispatcher,
    sl = an.ReactCurrentBatchConfig,
    gr = 0,
    de = null,
    xe = null,
    ke = null,
    Ws = !1,
    Go = !1,
    hi = 0,
    Oy = 0;
function je() {
    throw Error(R(321));
}
function fc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Nt(e[n], t[n])) return !1;
    return !0;
}
function hc(e, t, n, r, o, i) {
    if (
        ((gr = i),
            (de = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ps.current = e === null || e.memoizedState === null ? Ay : Iy),
            (e = n(r, o)),
            Go)
    ) {
        i = 0;
        do {
            if (((Go = !1), (hi = 0), 25 <= i)) throw Error(R(301));
            (i += 1), (ke = xe = null), (t.updateQueue = null), (ps.current = Fy), (e = n(r, o));
        } while (Go);
    }
    if (((ps.current = Us), (t = xe !== null && xe.next !== null), (gr = 0), (ke = xe = de = null), (Ws = !1), t))
        throw Error(R(300));
    return e;
}
function mc() {
    var e = hi !== 0;
    return (hi = 0), e;
}
function Mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function ut() {
    if (xe === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = ke === null ? de.memoizedState : ke.next;
    if (t !== null) (ke = t), (xe = e);
    else {
        if (e === null) throw Error(R(310));
        (xe = e),
            (e = {
                memoizedState: xe.memoizedState,
                baseState: xe.baseState,
                baseQueue: xe.baseQueue,
                queue: xe.queue,
                next: null,
            }),
            ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e);
    }
    return ke;
}
function mi(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function al(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = xe,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            (o.next = i.next), (i.next = s);
        }
        (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
        (i = o.next), (r = r.baseState);
        var a = (s = null),
            l = null,
            c = i;
        do {
            var d = c.lane;
            if ((gr & d) === d)
                l !== null &&
                (l = l.next =
                    {
                        lane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                    }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                l === null ? ((a = l = f), (s = r)) : (l = l.next = f), (de.lanes |= d), (vr |= d);
            }
            c = c.next;
        } while (c !== null && c !== i);
        l === null ? (s = r) : (l.next = a),
        Nt(r, t.memoizedState) || (Be = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (de.lanes |= i), (vr |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function ll(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = (o = o.next);
        do (i = e(i, s.action)), (s = s.next);
        while (s !== o);
        Nt(i, t.memoizedState) || (Be = !0),
            (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function Om() {}
function Lm(e, t) {
    var n = de,
        r = ut(),
        o = t(),
        i = !Nt(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (Be = !0)),
            (r = r.queue),
            pc(Am.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), pi(9, Dm.bind(null, n, r, o, t), void 0, null), Ce === null)) throw Error(R(349));
        gr & 30 || _m(n, t, o);
    }
    return o;
}
function _m(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = de.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (de.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dm(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Im(t) && Fm(e);
}
function Am(e, t, n) {
    return n(function () {
        Im(t) && Fm(e);
    });
}
function Im(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Nt(e, n);
    } catch {
        return !0;
    }
}
function Fm(e) {
    var t = tn(e, 1);
    t !== null && St(t, e, 1, -1);
}
function Vd(e) {
    var t = Mt();
    return (
        typeof e == "function" && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: mi,
                lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Dy.bind(null, de, e)),
            [t.memoizedState, e]
    );
}
function pi(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            (t = de.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }), (de.updateQueue = t), (t.lastEffect = e.next = e))
                : ((n = t.lastEffect),
                    n === null
                        ? (t.lastEffect = e.next = e)
                        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
            e
    );
}
function zm() {
    return ut().memoizedState;
}
function gs(e, t, n, r) {
    var o = Mt();
    (de.flags |= e), (o.memoizedState = pi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ha(e, t, n, r) {
    var o = ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (xe !== null) {
        var s = xe.memoizedState;
        if (((i = s.destroy), r !== null && fc(r, s.deps))) {
            o.memoizedState = pi(t, n, i, r);
            return;
        }
    }
    (de.flags |= e), (o.memoizedState = pi(1 | t, n, i, r));
}
function Qd(e, t) {
    return gs(8390656, 8, e, t);
}
function pc(e, t) {
    return ha(2048, 8, e, t);
}
function $m(e, t) {
    return ha(4, 2, e, t);
}
function Hm(e, t) {
    return ha(4, 4, e, t);
}
function Bm(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
                t(e),
                function () {
                    t(null);
                }
        );
    if (t != null)
        return (
            (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
        );
}
function Wm(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), ha(4, 4, Bm.bind(null, t, e), n);
}
function gc() {}
function Um(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Vm(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fc(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qm(e, t, n) {
    return gr & 21
        ? (Nt(n, t) || ((n = Xh()), (de.lanes |= n), (vr |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function Ly(e, t) {
    var n = te;
    (te = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = sl.transition;
    sl.transition = {};
    try {
        e(!1), t();
    } finally {
        (te = n), (sl.transition = r);
    }
}
function Ym() {
    return ut().memoizedState;
}
function _y(e, t, n) {
    var r = In(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Km(e))) Gm(t, n);
    else if (((n = jm(e, t, n, r)), n !== null)) {
        var o = Ie();
        St(n, e, r, o), qm(n, t, r);
    }
}
function Dy(e, t, n) {
    var r = In(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Km(e)) Gm(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
            try {
                var s = t.lastRenderedState,
                    a = i(s, n);
                if (((o.hasEagerState = !0), (o.eagerState = a), Nt(a, s))) {
                    var l = t.interleaved;
                    l === null ? ((o.next = o), ac(t)) : ((o.next = l.next), (l.next = o)), (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = jm(e, t, o, r)), n !== null && ((o = Ie()), St(n, e, r, o), qm(n, t, r));
    }
}
function Km(e) {
    var t = e.alternate;
    return e === de || (t !== null && t === de);
}
function Gm(e, t) {
    Go = Ws = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function qm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yu(e, n);
    }
}
var Us = {
        readContext: lt,
        useCallback: je,
        useContext: je,
        useEffect: je,
        useImperativeHandle: je,
        useInsertionEffect: je,
        useLayoutEffect: je,
        useMemo: je,
        useReducer: je,
        useRef: je,
        useState: je,
        useDebugValue: je,
        useDeferredValue: je,
        useTransition: je,
        useMutableSource: je,
        useSyncExternalStore: je,
        useId: je,
        unstable_isNewReconciler: !1,
    },
    Ay = {
        readContext: lt,
        useCallback: function (e, t) {
            return (Mt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: lt,
        useEffect: Qd,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), gs(4194308, 4, Bm.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return gs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return gs(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Mt();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = Mt();
            return (
                (t = n !== void 0 ? n(t) : t),
                    (r.memoizedState = r.baseState = t),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }),
                    (r.queue = e),
                    (e = e.dispatch = _y.bind(null, de, e)),
                    [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Mt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Vd,
        useDebugValue: gc,
        useDeferredValue: function (e) {
            return (Mt().memoizedState = e);
        },
        useTransition: function () {
            var e = Vd(!1),
                t = e[0];
            return (e = Ly.bind(null, e[1])), (Mt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = de,
                o = Mt();
            if (ue) {
                if (n === void 0) throw Error(R(407));
                n = n();
            } else {
                if (((n = t()), Ce === null)) throw Error(R(349));
                gr & 30 || _m(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                    Qd(Am.bind(null, r, i, e), [e]),
                    (r.flags |= 2048),
                    pi(9, Dm.bind(null, r, i, n, t), void 0, null),
                    n
            );
        },
        useId: function () {
            var e = Mt(),
                t = Ce.identifierPrefix;
            if (ue) {
                var n = qt,
                    r = Gt;
                (n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = hi++),
                0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = Oy++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Iy = {
        readContext: lt,
        useCallback: Um,
        useContext: lt,
        useEffect: pc,
        useImperativeHandle: Wm,
        useInsertionEffect: $m,
        useLayoutEffect: Hm,
        useMemo: Vm,
        useReducer: al,
        useRef: zm,
        useState: function () {
            return al(mi);
        },
        useDebugValue: gc,
        useDeferredValue: function (e) {
            var t = ut();
            return Qm(t, xe.memoizedState, e);
        },
        useTransition: function () {
            var e = al(mi)[0],
                t = ut().memoizedState;
            return [e, t];
        },
        useMutableSource: Om,
        useSyncExternalStore: Lm,
        useId: Ym,
        unstable_isNewReconciler: !1,
    },
    Fy = {
        readContext: lt,
        useCallback: Um,
        useContext: lt,
        useEffect: pc,
        useImperativeHandle: Wm,
        useInsertionEffect: $m,
        useLayoutEffect: Hm,
        useMemo: Vm,
        useReducer: ll,
        useRef: zm,
        useState: function () {
            return ll(mi);
        },
        useDebugValue: gc,
        useDeferredValue: function (e) {
            var t = ut();
            return xe === null ? (t.memoizedState = e) : Qm(t, xe.memoizedState, e);
        },
        useTransition: function () {
            var e = ll(mi)[0],
                t = ut().memoizedState;
            return [e, t];
        },
        useMutableSource: Om,
        useSyncExternalStore: Lm,
        useId: Ym,
        unstable_isNewReconciler: !1,
    };
function vt(e, t) {
    if (e && e.defaultProps) {
        (t = he({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function eu(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : he({}, t, n)),
        (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ma = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? br(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ie(),
            o = In(e),
            i = Xt(r, o);
        (i.payload = t), n != null && (i.callback = n), (t = Dn(e, i, o)), t !== null && (St(t, e, o, r), ms(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ie(),
            o = In(e),
            i = Xt(r, o);
        (i.tag = 1),
            (i.payload = t),
        n != null && (i.callback = n),
            (t = Dn(e, i, o)),
        t !== null && (St(t, e, o, r), ms(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ie(),
            r = In(e),
            o = Xt(n, r);
        (o.tag = 2), t != null && (o.callback = t), (t = Dn(e, o, r)), t !== null && (St(t, e, r, n), ms(t, e, r));
    },
};
function Yd(e, t, n, r, o, i, s) {
    return (
        (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(r, i, s)
                : t.prototype && t.prototype.isPureReactComponent
                ? !ai(n, r) || !ai(o, i)
                : !0
    );
}
function Xm(e, t, n) {
    var r = !1,
        o = $n,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = lt(i))
            : ((o = Ue(t) ? mr : Le.current), (r = t.contextTypes), (i = (r = r != null) ? so(e, o) : $n)),
            (t = new t(n, i)),
            (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
            (t.updater = ma),
            (e.stateNode = t),
            (t._reactInternals = e),
        r &&
        ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
    );
}
function Kd(e, t, n, r) {
    (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ma.enqueueReplaceState(t, t.state, null);
}
function tu(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), lc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? (o.context = lt(i)) : ((i = Ue(t) ? mr : Le.current), (o.context = so(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
    typeof i == "function" && (eu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
    typeof o.getSnapshotBeforeUpdate == "function" ||
    (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
    ((t = o.state),
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && ma.enqueueReplaceState(o, o.state, null),
        Hs(e, n, o, r),
        (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function co(e, t) {
    try {
        var n = "",
            r = t;
        do (n += fv(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function ul(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function nu(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var zy = typeof WeakMap == "function" ? WeakMap : Map;
function Jm(e, t, n) {
    (n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Qs || ((Qs = !0), (fu = r)), nu(e, t);
        }),
            n
    );
}
function Zm(e, t, n) {
    (n = Xt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                nu(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
            nu(e, t), typeof r != "function" && (An === null ? (An = new Set([this])) : An.add(this));
            var s = t.stack;
            this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
        }),
            n
    );
}
function Gd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new zy();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = Zy.bind(null, e, t, n)), t.then(e, e));
}
function qd(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Xd(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
            n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Xt(-1, 1)), (t.tag = 2), Dn(n, t, 1))),
                (n.lanes |= 1)),
            e);
}
var $y = an.ReactCurrentOwner,
    Be = !1;
function De(e, t, n, r) {
    t.child = e === null ? Pm(t, null, n, r) : lo(t, e.child, n, r);
}
function Jd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        Qr(t, o),
            (r = hc(e, t, n, r, i, o)),
            (n = mc()),
            e !== null && !Be
                ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), nn(e, t, o))
                : (ue && n && tc(t), (t.flags |= 1), De(e, t, r, o), t.child)
    );
}
function Zd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
        !Sc(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), ep(e, t, i, r, o))
            : ((e = ws(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var s = i.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : ai), n(s, r) && e.ref === t.ref)) return nn(e, t, o);
    }
    return (t.flags |= 1), (e = Fn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function ep(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ai(i, r) && e.ref === t.ref)
            if (((Be = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Be = !0);
            else return (t.lanes = e.lanes), nn(e, t, o);
    }
    return ru(e, t, n, r, o);
}
function tp(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), oe(Hr, Ye), (Ye |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                        (t.lanes = t.childLanes = 1073741824),
                        (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                        (t.updateQueue = null),
                        oe(Hr, Ye),
                        (Ye |= e),
                        null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = i !== null ? i.baseLanes : n),
                oe(Hr, Ye),
                (Ye |= r);
        }
    else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), oe(Hr, Ye), (Ye |= r);
    return De(e, t, o, n), t.child;
}
function np(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ru(e, t, n, r, o) {
    var i = Ue(n) ? mr : Le.current;
    return (
        (i = so(t, i)),
            Qr(t, o),
            (n = hc(e, t, n, r, i, o)),
            (r = mc()),
            e !== null && !Be
                ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), nn(e, t, o))
                : (ue && r && tc(t), (t.flags |= 1), De(e, t, n, o), t.child)
    );
}
function ef(e, t, n, r, o) {
    if (Ue(n)) {
        var i = !0;
        As(t);
    } else i = !1;
    if ((Qr(t, o), t.stateNode === null)) vs(e, t), Xm(t, n, r), tu(t, n, r, o), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? (c = lt(c)) : ((c = Ue(n) ? mr : Le.current), (c = so(t, c)));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
        ((a !== r || l !== c) && Kd(t, s, r, c)),
            (bn = !1);
        var p = t.memoizedState;
        (s.state = p),
            Hs(t, r, s, o),
            (l = t.memoizedState),
            a !== r || p !== l || We.current || bn
                ? (typeof d == "function" && (eu(t, n, d, r), (l = t.memoizedState)),
                    (a = bn || Yd(t, n, a, r, p, l, c))
                        ? (f ||
                        (typeof s.UNSAFE_componentWillMount != "function" &&
                            typeof s.componentWillMount != "function") ||
                        (typeof s.componentWillMount == "function" && s.componentWillMount(),
                        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" && (t.flags |= 4194308))
                        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                            (t.memoizedProps = r),
                            (t.memoizedState = l)),
                    (s.props = r),
                    (s.state = l),
                    (s.context = c),
                    (r = a))
                : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (s = t.stateNode),
            Rm(e, t),
            (a = t.memoizedProps),
            (c = t.type === t.elementType ? a : vt(t.type, a)),
            (s.props = c),
            (f = t.pendingProps),
            (p = s.context),
            (l = n.contextType),
            typeof l == "object" && l !== null ? (l = lt(l)) : ((l = Ue(n) ? mr : Le.current), (l = so(t, l)));
        var h = n.getDerivedStateFromProps;
        (d = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
        ((a !== f || p !== l) && Kd(t, s, r, l)),
            (bn = !1),
            (p = t.memoizedState),
            (s.state = p),
            Hs(t, r, s, o);
        var b = t.memoizedState;
        a !== f || p !== b || We.current || bn
            ? (typeof h == "function" && (eu(t, n, h, r), (b = t.memoizedState)),
                (c = bn || Yd(t, n, c, r, p, b, l) || !1)
                    ? (d ||
                    (typeof s.UNSAFE_componentWillUpdate != "function" &&
                        typeof s.componentWillUpdate != "function") ||
                    (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, b, l),
                    typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, b, l)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                    : (typeof s.componentDidUpdate != "function" ||
                    (a === e.memoizedProps && p === e.memoizedState) ||
                    (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" ||
                    (a === e.memoizedProps && p === e.memoizedState) ||
                    (t.flags |= 1024),
                        (t.memoizedProps = r),
                        (t.memoizedState = b)),
                (s.props = r),
                (s.state = b),
                (s.context = l),
                (r = c))
            : (typeof s.componentDidUpdate != "function" ||
            (a === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 1024),
                (r = !1));
    }
    return ou(e, t, n, r, i, o);
}
function ou(e, t, n, r, o, i) {
    np(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && zd(t, n, !1), nn(e, t, i);
    (r = t.stateNode), ($y.current = t);
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
            e !== null && s ? ((t.child = lo(t, e.child, null, i)), (t.child = lo(t, null, a, i))) : De(e, t, a, i),
            (t.memoizedState = r.state),
        o && zd(t, n, !0),
            t.child
    );
}
function rp(e) {
    var t = e.stateNode;
    t.pendingContext ? Fd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fd(e, t.context, !1),
        uc(e, t.containerInfo);
}
function tf(e, t, n, r, o) {
    return ao(), rc(o), (t.flags |= 256), De(e, t, n, r), t.child;
}
var iu = { dehydrated: null, treeContext: null, retryLane: 0 };
function su(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function op(e, t, n) {
    var r = t.pendingProps,
        o = ce.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (
        ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
            a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
            oe(ce, o & 1),
        e === null)
    )
        return (
            Jl(t),
                (e = t.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                    : ((s = r.children),
                        (e = r.fallback),
                        i
                            ? ((r = t.mode),
                                (i = t.child),
                                (s = { mode: "hidden", children: s }),
                                !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = va(s, r, 0, null)),
                                (e = hr(e, r, n, null)),
                                (i.return = t),
                                (e.return = t),
                                (i.sibling = e),
                                (t.child = i),
                                (t.child.memoizedState = su(n)),
                                (t.memoizedState = iu),
                                e)
                            : vc(t, s))
        );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return Hy(e, t, s, r, a, o, n);
    if (i) {
        (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== o
                ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
                : ((r = Fn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
                a !== null ? (i = Fn(a, i)) : ((i = hr(i, s, n, null)), (i.flags |= 2)),
                (i.return = t),
                (r.return = t),
                (r.sibling = i),
                (t.child = r),
                (r = i),
                (i = t.child),
                (s = e.child.memoizedState),
                (s = s === null ? su(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
                (i.memoizedState = s),
                (i.childLanes = e.childLanes & ~n),
                (t.memoizedState = iu),
                r
        );
    }
    return (
        (i = e.child),
            (e = i.sibling),
            (r = Fn(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
            (r.return = t),
            (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = r),
            (t.memoizedState = null),
            r
    );
}
function vc(e, t) {
    return (t = va({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Zi(e, t, n, r) {
    return (
        r !== null && rc(r),
            lo(t, e.child, null, n),
            (e = vc(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
    );
}
function Hy(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = ul(Error(R(422)))), Zi(e, t, s, r))
            : t.memoizedState !== null
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((i = r.fallback),
                    (o = t.mode),
                    (r = va({ mode: "visible", children: r.children }, o, 0, null)),
                    (i = hr(i, o, s, null)),
                    (i.flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                t.mode & 1 && lo(t, e.child, null, s),
                    (t.child.memoizedState = su(s)),
                    (t.memoizedState = iu),
                    i);
    if (!(t.mode & 1)) return Zi(e, t, s, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (i = Error(R(419))), (r = ul(i, r, void 0)), Zi(e, t, s, r);
    }
    if (((a = (s & e.childLanes) !== 0), Be || a)) {
        if (((r = Ce), r !== null)) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | s) ? 0 : o),
            o !== 0 && o !== i.retryLane && ((i.retryLane = o), tn(e, o), St(r, e, o, -1));
        }
        return Cc(), (r = ul(Error(R(421)))), Zi(e, t, s, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = ex.bind(null, e)), (o._reactRetry = t), null)
        : ((e = i.treeContext),
            (Ge = _n(o.nextSibling)),
            (qe = t),
            (ue = !0),
            (kt = null),
        e !== null && ((ot[it++] = Gt), (ot[it++] = qt), (ot[it++] = pr), (Gt = e.id), (qt = e.overflow), (pr = t)),
            (t = vc(t, r.children)),
            (t.flags |= 4096),
            t);
}
function nf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Zl(e.return, t, n);
}
function cl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
        : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = r),
            (i.tail = n),
            (i.tailMode = o));
}
function ip(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((De(e, t, r.children, n), (r = ce.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && nf(e, n, t);
                else if (e.tag === 19) nf(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((oe(ce, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate), e !== null && Bs(e) === null && (o = n), (n = n.sibling);
                (n = o),
                    n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                    cl(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && Bs(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                cl(t, !0, n, null, i);
                break;
            case "together":
                cl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function vs(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nn(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (vr |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child, n = Fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
            (e = e.sibling), (n = n.sibling = Fn(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function By(e, t, n) {
    switch (t.tag) {
        case 3:
            rp(t), ao();
            break;
        case 5:
            Mm(t);
            break;
        case 1:
            Ue(t.type) && As(t);
            break;
        case 4:
            uc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            oe(zs, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (oe(ce, ce.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                        ? op(e, t, n)
                        : (oe(ce, ce.current & 1), (e = nn(e, t, n)), e !== null ? e.sibling : null);
            oe(ce, ce.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return ip(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                    oe(ce, ce.current),
                    r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), tp(e, t, n);
    }
    return nn(e, t, n);
}
var sp, au, ap, lp;
sp = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
au = function () {};
ap = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), ir($t.current);
        var i = null;
        switch (n) {
            case "input":
                (o = jl(e, o)), (r = jl(e, r)), (i = []);
                break;
            case "select":
                (o = he({}, o, { value: void 0 })), (r = he({}, r, { value: void 0 })), (i = []);
                break;
            case "textarea":
                (o = Ol(e, o)), (r = Ol(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _s);
        }
        _l(n, r);
        var s;
        n = null;
        for (c in o)
            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
                if (c === "style") {
                    var a = o[c];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                    c !== "children" &&
                    c !== "suppressContentEditableWarning" &&
                    c !== "suppressHydrationWarning" &&
                    c !== "autoFocus" &&
                    (ei.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (((a = o != null ? o[c] : void 0), r.hasOwnProperty(c) && l !== a && (l != null || a != null)))
                if (c === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
                    } else n || (i || (i = []), i.push(c, n)), (n = l);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                            (a = a ? a.__html : void 0),
                        l != null && a !== l && (i = i || []).push(c, l))
                        : c === "children"
                        ? (typeof l != "string" && typeof l != "number") || (i = i || []).push(c, "" + l)
                        : c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        (ei.hasOwnProperty(c)
                            ? (l != null && c === "onScroll" && se("scroll", e), i || a === l || (i = []))
                            : (i = i || []).push(c, l));
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
lp = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Oo(e, t) {
    if (!ue)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Wy(e, t, n) {
    var r = t.pendingProps;
    switch ((nc(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Re(t), null;
        case 1:
            return Ue(t.type) && Ds(), Re(t), null;
        case 3:
            return (
                (r = t.stateNode),
                    uo(),
                    ae(We),
                    ae(Le),
                    dc(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                (Xi(t)
                    ? (t.flags |= 4)
                    : e === null ||
                    (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                    ((t.flags |= 1024), kt !== null && (pu(kt), (kt = null)))),
                    au(e, t),
                    Re(t),
                    null
            );
        case 5:
            cc(t);
            var o = ir(fi.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                ap(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(R(166));
                    return Re(t), null;
                }
                if (((e = ir($t.current)), Xi(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (((r[Dt] = t), (r[ci] = i), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            se("cancel", r), se("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            se("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Wo.length; o++) se(Wo[o], r);
                            break;
                        case "source":
                            se("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            se("error", r), se("load", r);
                            break;
                        case "details":
                            se("toggle", r);
                            break;
                        case "input":
                            dd(r, i), se("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }), se("invalid", r);
                            break;
                        case "textarea":
                            hd(r, i), se("invalid", r);
                    }
                    _l(n, i), (o = null);
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children"
                                ? typeof a == "string"
                                ? r.textContent !== a &&
                                (i.suppressHydrationWarning !== !0 && qi(r.textContent, a, e),
                                    (o = ["children", a]))
                                : typeof a == "number" &&
                                r.textContent !== "" + a &&
                                (i.suppressHydrationWarning !== !0 && qi(r.textContent, a, e),
                                    (o = ["children", "" + a]))
                                : ei.hasOwnProperty(s) && a != null && s === "onScroll" && se("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Bi(r), fd(r, i, !0);
                            break;
                        case "textarea":
                            Bi(r), md(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = _s);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = o.nodeType === 9 ? o : o.ownerDocument),
                    e === "http://www.w3.org/1999/xhtml" && (e = Ah(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                            ? ((e = s.createElement("div")),
                                (e.innerHTML = "<script></script>"),
                                (e = e.removeChild(e.firstChild)))
                            : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)),
                                n === "select" &&
                                ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Dt] = t),
                        (e[ci] = r),
                        sp(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = Dl(n, r)), n)) {
                            case "dialog":
                                se("cancel", e), se("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                se("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Wo.length; o++) se(Wo[o], e);
                                o = r;
                                break;
                            case "source":
                                se("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                se("error", e), se("load", e), (o = r);
                                break;
                            case "details":
                                se("toggle", e), (o = r);
                                break;
                            case "input":
                                dd(e, r), (o = jl(e, r)), se("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (o = he({}, r, { value: void 0 })),
                                    se("invalid", e);
                                break;
                            case "textarea":
                                hd(e, r), (o = Ol(e, r)), se("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        _l(n, o), (a = o);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style"
                                    ? zh(e, l)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((l = l ? l.__html : void 0), l != null && Ih(e, l))
                                    : i === "children"
                                        ? typeof l == "string"
                                            ? (n !== "textarea" || l !== "") && ti(e, l)
                                            : typeof l == "number" && ti(e, "" + l)
                                        : i !== "suppressContentEditableWarning" &&
                                        i !== "suppressHydrationWarning" &&
                                        i !== "autoFocus" &&
                                        (ei.hasOwnProperty(i)
                                            ? l != null && i === "onScroll" && se("scroll", e)
                                            : l != null && Hu(e, i, l, s));
                            }
                        switch (n) {
                            case "input":
                                Bi(e), fd(e, r, !1);
                                break;
                            case "textarea":
                                Bi(e), md(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + zn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Br(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null && Br(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = _s);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Re(t), null;
        case 6:
            if (e && t.stateNode != null) lp(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
                if (((n = ir(fi.current)), ir($t.current), Xi(t))) {
                    if (
                        ((r = t.stateNode),
                            (n = t.memoizedProps),
                            (r[Dt] = t),
                        (i = r.nodeValue !== n) && ((e = qe), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                qi(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                qi(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Dt] = t), (t.stateNode = r);
            }
            return Re(t), null;
        case 13:
            if (
                (ae(ce),
                    (r = t.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (ue && Ge !== null && t.mode & 1 && !(t.flags & 128)) Em(), ao(), (t.flags |= 98560), (i = !1);
                else if (((i = Xi(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(R(318));
                        if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(R(317));
                        i[Dt] = t;
                    } else ao(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    Re(t), (i = !1);
                } else kt !== null && (pu(kt), (kt = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                r !== (e !== null && e.memoizedState !== null) &&
                r &&
                ((t.child.flags |= 8192),
                t.mode & 1 && (e === null || ce.current & 1 ? be === 0 && (be = 3) : Cc())),
                t.updateQueue !== null && (t.flags |= 4),
                    Re(t),
                    null);
        case 4:
            return uo(), au(e, t), e === null && li(t.stateNode.containerInfo), Re(t), null;
        case 10:
            return sc(t.type._context), Re(t), null;
        case 17:
            return Ue(t.type) && Ds(), Re(t), null;
        case 19:
            if ((ae(ce), (i = t.memoizedState), i === null)) return Re(t), null;
            if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
                if (r) Oo(i, !1);
                else {
                    if (be !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Bs(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        Oo(i, !1),
                                        r = s.updateQueue,
                                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (s = i.alternate),
                                        s === null
                                            ? ((i.childLanes = 0),
                                                (i.lanes = e),
                                                (i.child = null),
                                                (i.subtreeFlags = 0),
                                                (i.memoizedProps = null),
                                                (i.memoizedState = null),
                                                (i.updateQueue = null),
                                                (i.dependencies = null),
                                                (i.stateNode = null))
                                            : ((i.childLanes = s.childLanes),
                                                (i.lanes = s.lanes),
                                                (i.child = s.child),
                                                (i.subtreeFlags = 0),
                                                (i.deletions = null),
                                                (i.memoizedProps = s.memoizedProps),
                                                (i.memoizedState = s.memoizedState),
                                                (i.updateQueue = s.updateQueue),
                                                (i.type = s.type),
                                                (e = s.dependencies),
                                                (i.dependencies =
                                                    e === null
                                                        ? null
                                                        : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return oe(ce, (ce.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null && ge() > fo && ((t.flags |= 128), (r = !0), Oo(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Bs(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                                (r = !0),
                                (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                                Oo(i, !0),
                            i.tail === null && i.tailMode === "hidden" && !s.alternate && !ue)
                        )
                            return Re(t), null;
                    } else
                        2 * ge() - i.renderingStartTime > fo &&
                        n !== 1073741824 &&
                        ((t.flags |= 128), (r = !0), Oo(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
            }
            return i.tail !== null
                ? ((t = i.tail),
                    (i.rendering = t),
                    (i.tail = t.sibling),
                    (i.renderingStartTime = ge()),
                    (t.sibling = null),
                    (n = ce.current),
                    oe(ce, r ? (n & 1) | 2 : n & 1),
                    t)
                : (Re(t), null);
        case 22:
        case 23:
            return (
                kc(),
                    (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                    r && t.mode & 1 ? Ye & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t),
                    null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(R(156, t.tag));
}
function Uy(e, t) {
    switch ((nc(t), t.tag)) {
        case 1:
            return Ue(t.type) && Ds(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return (
                uo(),
                    ae(We),
                    ae(Le),
                    dc(),
                    (e = t.flags),
                    e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return cc(t), null;
        case 13:
            if ((ae(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(R(340));
                ao();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return ae(ce), null;
        case 4:
            return uo(), null;
        case 10:
            return sc(t.type._context), null;
        case 22:
        case 23:
            return kc(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var es = !1,
    Oe = !1,
    Vy = typeof WeakSet == "function" ? WeakSet : Set,
    A = null;
function $r(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                pe(e, t, r);
            }
        else n.current = null;
}
function lu(e, t, n) {
    try {
        n();
    } catch (r) {
        pe(e, t, r);
    }
}
var rf = !1;
function Qy(e, t) {
    if (((Vl = Ms), (e = hm()), ec(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        l = -1,
                        c = 0,
                        d = 0,
                        f = e,
                        p = null;
                    t: for (;;) {
                        for (
                            var h;
                            f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                            f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                            f.nodeType === 3 && (s += f.nodeValue.length),
                            (h = f.firstChild) !== null;

                        )
                            (p = f), (f = h);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (p === n && ++c === o && (a = s),
                                p === i && ++d === r && (l = s),
                                (h = f.nextSibling) !== null)
                            )
                                break;
                            (f = p), (p = f.parentNode);
                        }
                        f = h;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ql = { focusedElem: e, selectionRange: n }, Ms = !1, A = t; A !== null; )
        if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (A = e);
        else
            for (; A !== null; ) {
                t = A;
                try {
                    var b = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (b !== null) {
                                    var x = b.memoizedProps,
                                        w = b.memoizedState,
                                        v = t.stateNode,
                                        m = v.getSnapshotBeforeUpdate(t.elementType === t.type ? x : vt(t.type, x), w);
                                    v.__reactInternalSnapshotBeforeUpdate = m;
                                }
                                break;
                            case 3:
                                var g = t.stateNode.containerInfo;
                                g.nodeType === 1
                                    ? (g.textContent = "")
                                    : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(R(163));
                        }
                } catch (k) {
                    pe(t, t.return, k);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (A = e);
                    break;
                }
                A = t.return;
            }
    return (b = rf), (rf = !1), b;
}
function qo(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && lu(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function pa(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function uu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function up(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), up(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
    e.tag === 5 &&
    ((t = e.stateNode), t !== null && (delete t[Dt], delete t[ci], delete t[Gl], delete t[Py], delete t[jy])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function cp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function of(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || cp(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
                    (n = n._reactRootContainer),
                n != null || t.onclick !== null || (t.onclick = _s));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), (e = e.sibling);
}
function du(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (du(e, t, n), e = e.sibling; e !== null; ) du(e, t, n), (e = e.sibling);
}
var Se = null,
    bt = !1;
function pn(e, t, n) {
    for (n = n.child; n !== null; ) dp(e, t, n), (n = n.sibling);
}
function dp(e, t, n) {
    if (zt && typeof zt.onCommitFiberUnmount == "function")
        try {
            zt.onCommitFiberUnmount(aa, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Oe || $r(n, t);
        case 6:
            var r = Se,
                o = bt;
            (Se = null),
                pn(e, t, n),
                (Se = r),
                (bt = o),
            Se !== null &&
            (bt
                ? ((e = Se),
                    (n = n.stateNode),
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                : Se.removeChild(n.stateNode));
            break;
        case 18:
            Se !== null &&
            (bt
                ? ((e = Se),
                    (n = n.stateNode),
                    e.nodeType === 8 ? rl(e.parentNode, n) : e.nodeType === 1 && rl(e, n),
                    ii(e))
                : rl(Se, n.stateNode));
            break;
        case 4:
            (r = Se), (o = bt), (Se = n.stateNode.containerInfo), (bt = !0), pn(e, t, n), (Se = r), (bt = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Oe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    (i = i.tag), s !== void 0 && (i & 2 || i & 4) && lu(n, t, s), (o = o.next);
                } while (o !== r);
            }
            pn(e, t, n);
            break;
        case 1:
            if (!Oe && ($r(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    pe(n, t, a);
                }
            pn(e, t, n);
            break;
        case 21:
            pn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((Oe = (r = Oe) || n.memoizedState !== null), pn(e, t, n), (Oe = r)) : pn(e, t, n);
            break;
        default:
            pn(e, t, n);
    }
}
function sf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Vy()),
            t.forEach(function (r) {
                var o = tx.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (Se = a.stateNode), (bt = !1);
                            break e;
                        case 3:
                            (Se = a.stateNode.containerInfo), (bt = !0);
                            break e;
                        case 4:
                            (Se = a.stateNode.containerInfo), (bt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (Se === null) throw Error(R(160));
                dp(i, s, o), (Se = null), (bt = !1);
                var l = o.alternate;
                l !== null && (l.return = null), (o.return = null);
            } catch (c) {
                pe(o, t, c);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) fp(t, e), (t = t.sibling);
}
function fp(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((pt(t, e), Rt(e), r & 4)) {
                try {
                    qo(3, e, e.return), pa(3, e);
                } catch (x) {
                    pe(e, e.return, x);
                }
                try {
                    qo(5, e, e.return);
                } catch (x) {
                    pe(e, e.return, x);
                }
            }
            break;
        case 1:
            pt(t, e), Rt(e), r & 512 && n !== null && $r(n, n.return);
            break;
        case 5:
            if ((pt(t, e), Rt(e), r & 512 && n !== null && $r(n, n.return), e.flags & 32)) {
                var o = e.stateNode;
                try {
                    ti(o, "");
                } catch (x) {
                    pe(e, e.return, x);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === "input" && i.type === "radio" && i.name != null && _h(o, i), Dl(a, s);
                        var c = Dl(a, i);
                        for (s = 0; s < l.length; s += 2) {
                            var d = l[s],
                                f = l[s + 1];
                            d === "style"
                                ? zh(o, f)
                                : d === "dangerouslySetInnerHTML"
                                ? Ih(o, f)
                                : d === "children"
                                    ? ti(o, f)
                                    : Hu(o, d, f, c);
                        }
                        switch (a) {
                            case "input":
                                Rl(o, i);
                                break;
                            case "textarea":
                                Dh(o, i);
                                break;
                            case "select":
                                var p = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var h = i.value;
                                h != null
                                    ? Br(o, !!i.multiple, h, !1)
                                    : p !== !!i.multiple &&
                                    (i.defaultValue != null
                                        ? Br(o, !!i.multiple, i.defaultValue, !0)
                                        : Br(o, !!i.multiple, i.multiple ? [] : "", !1));
                        }
                        o[ci] = i;
                    } catch (x) {
                        pe(e, e.return, x);
                    }
            }
            break;
        case 6:
            if ((pt(t, e), Rt(e), r & 4)) {
                if (e.stateNode === null) throw Error(R(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                    o.nodeValue = i;
                } catch (x) {
                    pe(e, e.return, x);
                }
            }
            break;
        case 3:
            if ((pt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    ii(t.containerInfo);
                } catch (x) {
                    pe(e, e.return, x);
                }
            break;
        case 4:
            pt(t, e), Rt(e);
            break;
        case 13:
            pt(t, e),
                Rt(e),
                (o = e.child),
            o.flags & 8192 &&
            ((i = o.memoizedState !== null),
                (o.stateNode.isHidden = i),
            !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (wc = ge())),
            r & 4 && sf(e);
            break;
        case 22:
            if (
                ((d = n !== null && n.memoizedState !== null),
                    e.mode & 1 ? ((Oe = (c = Oe) || d), pt(t, e), (Oe = c)) : pt(t, e),
                    Rt(e),
                r & 8192)
            ) {
                if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !d && e.mode & 1))
                    for (A = e, d = e.child; d !== null; ) {
                        for (f = A = d; A !== null; ) {
                            switch (((p = A), (h = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    qo(4, p, p.return);
                                    break;
                                case 1:
                                    $r(p, p.return);
                                    var b = p.stateNode;
                                    if (typeof b.componentWillUnmount == "function") {
                                        (r = p), (n = p.return);
                                        try {
                                            (t = r),
                                                (b.props = t.memoizedProps),
                                                (b.state = t.memoizedState),
                                                b.componentWillUnmount();
                                        } catch (x) {
                                            pe(r, n, x);
                                        }
                                    }
                                    break;
                                case 5:
                                    $r(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        lf(f);
                                        continue;
                                    }
                            }
                            h !== null ? ((h.return = p), (A = h)) : lf(f);
                        }
                        d = d.sibling;
                    }
                e: for (d = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                (o = f.stateNode),
                                    c
                                        ? ((i = o.style),
                                            typeof i.setProperty == "function"
                                                ? i.setProperty("display", "none", "important")
                                                : (i.display = "none"))
                                        : ((a = f.stateNode),
                                            (l = f.memoizedProps.style),
                                            (s = l != null && l.hasOwnProperty("display") ? l.display : null),
                                            (a.style.display = Fh("display", s)));
                            } catch (x) {
                                pe(e, e.return, x);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null)
                            try {
                                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                            } catch (x) {
                                pe(e, e.return, x);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), (f = f.return);
                    }
                    d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            pt(t, e), Rt(e), r & 4 && sf(e);
            break;
        case 21:
            break;
        default:
            pt(t, e), Rt(e);
    }
}
function Rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (cp(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(R(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (ti(o, ""), (r.flags &= -33));
                    var i = of(e);
                    du(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = of(e);
                    cu(e, a, s);
                    break;
                default:
                    throw Error(R(161));
            }
        } catch (l) {
            pe(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Yy(e, t, n) {
    (A = e), hp(e);
}
function hp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
        var o = A,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || es;
            if (!s) {
                var a = o.alternate,
                    l = (a !== null && a.memoizedState !== null) || Oe;
                a = es;
                var c = Oe;
                if (((es = s), (Oe = l) && !c))
                    for (A = o; A !== null; )
                        (s = A),
                            (l = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? uf(o)
                                : l !== null
                                ? ((l.return = s), (A = l))
                                : uf(o);
                for (; i !== null; ) (A = i), hp(i), (i = i.sibling);
                (A = o), (es = a), (Oe = c);
            }
            af(e);
        } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : af(e);
    }
}
function af(e) {
    for (; A !== null; ) {
        var t = A;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Oe || pa(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Oe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            i !== null && Ud(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Ud(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var d = c.memoizedState;
                                    if (d !== null) {
                                        var f = d.dehydrated;
                                        f !== null && ii(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(R(163));
                    }
                Oe || (t.flags & 512 && uu(t));
            } catch (p) {
                pe(t, t.return, p);
            }
        }
        if (t === e) {
            A = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (A = n);
            break;
        }
        A = t.return;
    }
}
function lf(e) {
    for (; A !== null; ) {
        var t = A;
        if (t === e) {
            A = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (A = n);
            break;
        }
        A = t.return;
    }
}
function uf(e) {
    for (; A !== null; ) {
        var t = A;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        pa(4, t);
                    } catch (l) {
                        pe(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            pe(t, o, l);
                        }
                    }
                    var i = t.return;
                    try {
                        uu(t);
                    } catch (l) {
                        pe(t, i, l);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        uu(t);
                    } catch (l) {
                        pe(t, s, l);
                    }
            }
        } catch (l) {
            pe(t, t.return, l);
        }
        if (t === e) {
            A = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (A = a);
            break;
        }
        A = t.return;
    }
}
var Ky = Math.ceil,
    Vs = an.ReactCurrentDispatcher,
    yc = an.ReactCurrentOwner,
    at = an.ReactCurrentBatchConfig,
    X = 0,
    Ce = null,
    ye = null,
    Ne = 0,
    Ye = 0,
    Hr = Yn(0),
    be = 0,
    gi = null,
    vr = 0,
    ga = 0,
    xc = 0,
    Xo = null,
    He = null,
    wc = 0,
    fo = 1 / 0,
    Qt = null,
    Qs = !1,
    fu = null,
    An = null,
    ts = !1,
    Rn = null,
    Ys = 0,
    Jo = 0,
    hu = null,
    ys = -1,
    xs = 0;
function Ie() {
    return X & 6 ? ge() : ys !== -1 ? ys : (ys = ge());
}
function In(e) {
    return e.mode & 1
        ? X & 2 && Ne !== 0
            ? Ne & -Ne
            : My.transition !== null
                ? (xs === 0 && (xs = Xh()), xs)
                : ((e = te), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : om(e.type))), e)
        : 1;
}
function St(e, t, n, r) {
    if (50 < Jo) throw ((Jo = 0), (hu = null), Error(R(185)));
    Ei(e, n, r),
    (!(X & 2) || e !== Ce) &&
    (e === Ce && (!(X & 2) && (ga |= n), be === 4 && Cn(e, Ne)),
        Ve(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && ((fo = ge() + 500), fa && Kn()));
}
function Ve(e, t) {
    var n = e.callbackNode;
    Mv(e, t);
    var r = Rs(e, e === Ce ? Ne : 0);
    if (r === 0) n !== null && vd(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && vd(n), t === 1))
            e.tag === 0 ? Ry(cf.bind(null, e)) : Cm(cf.bind(null, e)),
                Ey(function () {
                    !(X & 6) && Kn();
                }),
                (n = null);
        else {
            switch (Jh(r)) {
                case 1:
                    n = Qu;
                    break;
                case 4:
                    n = Gh;
                    break;
                case 16:
                    n = js;
                    break;
                case 536870912:
                    n = qh;
                    break;
                default:
                    n = js;
            }
            n = bp(n, mp.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function mp(e, t) {
    if (((ys = -1), (xs = 0), X & 6)) throw Error(R(327));
    var n = e.callbackNode;
    if (Yr() && e.callbackNode !== n) return null;
    var r = Rs(e, e === Ce ? Ne : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ks(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var i = gp();
        (Ce !== e || Ne !== t) && ((Qt = null), (fo = ge() + 500), fr(e, t));
        do
            try {
                Xy();
                break;
            } catch (a) {
                pp(e, a);
            }
        while (!0);
        ic(), (Vs.current = i), (X = o), ye !== null ? (t = 0) : ((Ce = null), (Ne = 0), (t = be));
    }
    if (t !== 0) {
        if ((t === 2 && ((o = $l(e)), o !== 0 && ((r = o), (t = mu(e, o)))), t === 1))
            throw ((n = gi), fr(e, 0), Cn(e, r), Ve(e, ge()), n);
        if (t === 6) Cn(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                !Gy(o) &&
                ((t = Ks(e, r)), t === 2 && ((i = $l(e)), i !== 0 && ((r = i), (t = mu(e, i)))), t === 1))
            )
                throw ((n = gi), fr(e, 0), Cn(e, r), Ve(e, ge()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(R(345));
                case 2:
                    tr(e, He, Qt);
                    break;
                case 3:
                    if ((Cn(e, r), (r & 130023424) === r && ((t = wc + 500 - ge()), 10 < t))) {
                        if (Rs(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            Ie(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = Kl(tr.bind(null, e, He, Qt), t);
                        break;
                    }
                    tr(e, He, Qt);
                    break;
                case 4:
                    if ((Cn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var s = 31 - Ct(r);
                        (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
                    }
                    if (
                        ((r = o),
                            (r = ge() - r),
                            (r =
                                (120 > r
                                    ? 120
                                    : 480 > r
                                        ? 480
                                        : 1080 > r
                                            ? 1080
                                            : 1920 > r
                                                ? 1920
                                                : 3e3 > r
                                                    ? 3e3
                                                    : 4320 > r
                                                        ? 4320
                                                        : 1960 * Ky(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Kl(tr.bind(null, e, He, Qt), r);
                        break;
                    }
                    tr(e, He, Qt);
                    break;
                case 5:
                    tr(e, He, Qt);
                    break;
                default:
                    throw Error(R(329));
            }
        }
    }
    return Ve(e, ge()), e.callbackNode === n ? mp.bind(null, e) : null;
}
function mu(e, t) {
    var n = Xo;
    return (
        e.current.memoizedState.isDehydrated && (fr(e, t).flags |= 256),
            (e = Ks(e, t)),
        e !== 2 && ((t = He), (He = n), t !== null && pu(t)),
            e
    );
}
function pu(e) {
    He === null ? (He = e) : He.push.apply(He, e);
}
function Gy(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Nt(i(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Cn(e, t) {
    for (t &= ~xc, t &= ~ga, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ct(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function cf(e) {
    if (X & 6) throw Error(R(327));
    Yr();
    var t = Rs(e, 0);
    if (!(t & 1)) return Ve(e, ge()), null;
    var n = Ks(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = $l(e);
        r !== 0 && ((t = r), (n = mu(e, r)));
    }
    if (n === 1) throw ((n = gi), fr(e, 0), Cn(e, t), Ve(e, ge()), n);
    if (n === 6) throw Error(R(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), tr(e, He, Qt), Ve(e, ge()), null;
}
function bc(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t);
    } finally {
        (X = n), X === 0 && ((fo = ge() + 500), fa && Kn());
    }
}
function yr(e) {
    Rn !== null && Rn.tag === 0 && !(X & 6) && Yr();
    var t = X;
    X |= 1;
    var n = at.transition,
        r = te;
    try {
        if (((at.transition = null), (te = 1), e)) return e();
    } finally {
        (te = r), (at.transition = n), (X = t), !(X & 6) && Kn();
    }
}
function kc() {
    (Ye = Hr.current), ae(Hr);
}
function fr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Ny(n)), ye !== null))
        for (n = ye.return; n !== null; ) {
            var r = n;
            switch ((nc(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Ds();
                    break;
                case 3:
                    uo(), ae(We), ae(Le), dc();
                    break;
                case 5:
                    cc(r);
                    break;
                case 4:
                    uo();
                    break;
                case 13:
                    ae(ce);
                    break;
                case 19:
                    ae(ce);
                    break;
                case 10:
                    sc(r.type._context);
                    break;
                case 22:
                case 23:
                    kc();
            }
            n = n.return;
        }
    if (
        ((Ce = e),
            (ye = e = Fn(e.current, null)),
            (Ne = Ye = t),
            (be = 0),
            (gi = null),
            (xc = ga = vr = 0),
            (He = Xo = null),
        or !== null)
    ) {
        for (t = 0; t < or.length; t++)
            if (((n = or[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    (i.next = o), (r.next = s);
                }
                n.pending = r;
            }
        or = null;
    }
    return e;
}
function pp(e, t) {
    do {
        var n = ye;
        try {
            if ((ic(), (ps.current = Us), Ws)) {
                for (var r = de.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                Ws = !1;
            }
            if (
                ((gr = 0),
                    (ke = xe = de = null),
                    (Go = !1),
                    (hi = 0),
                    (yc.current = null),
                n === null || n.return === null)
            ) {
                (be = 1), (gi = t), (ye = null);
                break;
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (((t = Ne), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
                    var c = l,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var p = d.alternate;
                        p
                            ? ((d.updateQueue = p.updateQueue),
                                (d.memoizedState = p.memoizedState),
                                (d.lanes = p.lanes))
                            : ((d.updateQueue = null), (d.memoizedState = null));
                    }
                    var h = qd(s);
                    if (h !== null) {
                        (h.flags &= -257), Xd(h, s, a, i, t), h.mode & 1 && Gd(i, c, t), (t = h), (l = c);
                        var b = t.updateQueue;
                        if (b === null) {
                            var x = new Set();
                            x.add(l), (t.updateQueue = x);
                        } else b.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Gd(i, c, t), Cc();
                            break e;
                        }
                        l = Error(R(426));
                    }
                } else if (ue && a.mode & 1) {
                    var w = qd(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), Xd(w, s, a, i, t), rc(co(l, a));
                        break e;
                    }
                }
                (i = l = co(l, a)), be !== 4 && (be = 2), Xo === null ? (Xo = [i]) : Xo.push(i), (i = s);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var v = Jm(i, l, t);
                            Wd(i, v);
                            break e;
                        case 1:
                            a = l;
                            var m = i.type,
                                g = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof m.getDerivedStateFromError == "function" ||
                                    (g !== null &&
                                        typeof g.componentDidCatch == "function" &&
                                        (An === null || !An.has(g))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var k = Zm(i, a, t);
                                Wd(i, k);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            yp(n);
        } catch (C) {
            (t = C), ye === n && n !== null && (ye = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function gp() {
    var e = Vs.current;
    return (Vs.current = Us), e === null ? Us : e;
}
function Cc() {
    (be === 0 || be === 3 || be === 2) && (be = 4),
    Ce === null || (!(vr & 268435455) && !(ga & 268435455)) || Cn(Ce, Ne);
}
function Ks(e, t) {
    var n = X;
    X |= 2;
    var r = gp();
    (Ce !== e || Ne !== t) && ((Qt = null), fr(e, t));
    do
        try {
            qy();
            break;
        } catch (o) {
            pp(e, o);
        }
    while (!0);
    if ((ic(), (X = n), (Vs.current = r), ye !== null)) throw Error(R(261));
    return (Ce = null), (Ne = 0), be;
}
function qy() {
    for (; ye !== null; ) vp(ye);
}
function Xy() {
    for (; ye !== null && !kv(); ) vp(ye);
}
function vp(e) {
    var t = wp(e.alternate, e, Ye);
    (e.memoizedProps = e.pendingProps), t === null ? yp(e) : (ye = t), (yc.current = null);
}
function yp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Uy(n, t)), n !== null)) {
                (n.flags &= 32767), (ye = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (be = 6), (ye = null);
                return;
            }
        } else if (((n = Wy(n, t, Ye)), n !== null)) {
            ye = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            ye = t;
            return;
        }
        ye = t = e;
    } while (t !== null);
    be === 0 && (be = 5);
}
function tr(e, t, n) {
    var r = te,
        o = at.transition;
    try {
        (at.transition = null), (te = 1), Jy(e, t, n, r);
    } finally {
        (at.transition = o), (te = r);
    }
    return null;
}
function Jy(e, t, n, r) {
    do Yr();
    while (Rn !== null);
    if (X & 6) throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(R(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (Ov(e, i),
        e === Ce && ((ye = Ce = null), (Ne = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        ts ||
        ((ts = !0),
            bp(js, function () {
                return Yr(), null;
            })),
            (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = at.transition), (at.transition = null);
        var s = te;
        te = 1;
        var a = X;
        (X |= 4),
            (yc.current = null),
            Qy(e, n),
            fp(n, e),
            yy(Ql),
            (Ms = !!Vl),
            (Ql = Vl = null),
            (e.current = n),
            Yy(n),
            Cv(),
            (X = a),
            (te = s),
            (at.transition = i);
    } else e.current = n;
    if (
        (ts && ((ts = !1), (Rn = e), (Ys = o)),
            (i = e.pendingLanes),
        i === 0 && (An = null),
            Ev(n.stateNode),
            Ve(e, ge()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Qs) throw ((Qs = !1), (e = fu), (fu = null), e);
    return (
        Ys & 1 && e.tag !== 0 && Yr(),
            (i = e.pendingLanes),
            i & 1 ? (e === hu ? Jo++ : ((Jo = 0), (hu = e))) : (Jo = 0),
            Kn(),
            null
    );
}
function Yr() {
    if (Rn !== null) {
        var e = Jh(Ys),
            t = at.transition,
            n = te;
        try {
            if (((at.transition = null), (te = 16 > e ? 16 : e), Rn === null)) var r = !1;
            else {
                if (((e = Rn), (Rn = null), (Ys = 0), X & 6)) throw Error(R(331));
                var o = X;
                for (X |= 4, A = e.current; A !== null; ) {
                    var i = A,
                        s = i.child;
                    if (A.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (A = c; A !== null; ) {
                                    var d = A;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qo(8, d, i);
                                    }
                                    var f = d.child;
                                    if (f !== null) (f.return = d), (A = f);
                                    else
                                        for (; A !== null; ) {
                                            d = A;
                                            var p = d.sibling,
                                                h = d.return;
                                            if ((up(d), d === c)) {
                                                A = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = h), (A = p);
                                                break;
                                            }
                                            A = h;
                                        }
                                }
                            }
                            var b = i.alternate;
                            if (b !== null) {
                                var x = b.child;
                                if (x !== null) {
                                    b.child = null;
                                    do {
                                        var w = x.sibling;
                                        (x.sibling = null), (x = w);
                                    } while (x !== null);
                                }
                            }
                            A = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (A = s);
                    else
                        e: for (; A !== null; ) {
                            if (((i = A), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        qo(9, i, i.return);
                                }
                            var v = i.sibling;
                            if (v !== null) {
                                (v.return = i.return), (A = v);
                                break e;
                            }
                            A = i.return;
                        }
                }
                var m = e.current;
                for (A = m; A !== null; ) {
                    s = A;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (A = g);
                    else
                        e: for (s = m; A !== null; ) {
                            if (((a = A), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            pa(9, a);
                                    }
                                } catch (C) {
                                    pe(a, a.return, C);
                                }
                            if (a === s) {
                                A = null;
                                break e;
                            }
                            var k = a.sibling;
                            if (k !== null) {
                                (k.return = a.return), (A = k);
                                break e;
                            }
                            A = a.return;
                        }
                }
                if (((X = o), Kn(), zt && typeof zt.onPostCommitFiberRoot == "function"))
                    try {
                        zt.onPostCommitFiberRoot(aa, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (te = n), (at.transition = t);
        }
    }
    return !1;
}
function df(e, t, n) {
    (t = co(n, t)), (t = Jm(e, t, 1)), (e = Dn(e, t, 1)), (t = Ie()), e !== null && (Ei(e, 1, t), Ve(e, t));
}
function pe(e, t, n) {
    if (e.tag === 3) df(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                df(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" && (An === null || !An.has(r)))
                ) {
                    (e = co(n, e)),
                        (e = Zm(t, e, 1)),
                        (t = Dn(t, e, 1)),
                        (e = Ie()),
                    t !== null && (Ei(t, 1, e), Ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Zy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Ie()),
        (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
    (Ne & n) === n &&
    (be === 4 || (be === 3 && (Ne & 130023424) === Ne && 500 > ge() - wc) ? fr(e, 0) : (xc |= n)),
        Ve(e, t);
}
function xp(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Vi), (Vi <<= 1), !(Vi & 130023424) && (Vi = 4194304)) : (t = 1));
    var n = Ie();
    (e = tn(e, t)), e !== null && (Ei(e, t, n), Ve(e, n));
}
function ex(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), xp(e, n);
}
function tx(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(R(314));
    }
    r !== null && r.delete(t), xp(e, n);
}
var wp;
wp = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || We.current) Be = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), By(e, t, n);
            Be = !!(e.flags & 131072);
        }
    else (Be = !1), ue && t.flags & 1048576 && Sm(t, Fs, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            vs(e, t), (e = t.pendingProps);
            var o = so(t, Le.current);
            Qr(t, n), (o = hc(null, t, r, e, o, n));
            var i = mc();
            return (
                (t.flags |= 1),
                    typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
                        ? ((t.tag = 1),
                            (t.memoizedState = null),
                            (t.updateQueue = null),
                            Ue(r) ? ((i = !0), As(t)) : (i = !1),
                            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
                            lc(t),
                            (o.updater = ma),
                            (t.stateNode = o),
                            (o._reactInternals = t),
                            tu(t, r, e, n),
                            (t = ou(null, t, r, !0, i, n)))
                        : ((t.tag = 0), ue && i && tc(t), De(null, t, o, n), (t = t.child)),
                    t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (vs(e, t),
                        (e = t.pendingProps),
                        (o = r._init),
                        (r = o(r._payload)),
                        (t.type = r),
                        (o = t.tag = rx(r)),
                        (e = vt(r, e)),
                        o)
                    ) {
                    case 0:
                        t = ru(null, t, r, e, n);
                        break e;
                    case 1:
                        t = ef(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Jd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Zd(null, t, r, vt(r.type, e), n);
                        break e;
                }
                throw Error(R(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : vt(r, o)), ru(e, t, r, o, n);
        case 1:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : vt(r, o)), ef(e, t, r, o, n);
        case 3:
            e: {
                if ((rp(t), e === null)) throw Error(R(387));
                (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Rm(e, t), Hs(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                            (t.updateQueue.baseState = i),
                            (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (o = co(Error(R(423)), t)), (t = tf(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = co(Error(R(424)), t)), (t = tf(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            Ge = _n(t.stateNode.containerInfo.firstChild),
                                qe = t,
                                ue = !0,
                                kt = null,
                                n = Pm(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((ao(), r === o)) {
                        t = nn(e, t, n);
                        break e;
                    }
                    De(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Mm(t),
                e === null && Jl(t),
                    (r = t.type),
                    (o = t.pendingProps),
                    (i = e !== null ? e.memoizedProps : null),
                    (s = o.children),
                    Yl(r, o) ? (s = null) : i !== null && Yl(r, i) && (t.flags |= 32),
                    np(e, t),
                    De(e, t, s, n),
                    t.child
            );
        case 6:
            return e === null && Jl(t), null;
        case 13:
            return op(e, t, n);
        case 4:
            return (
                uc(t, t.stateNode.containerInfo),
                    (r = t.pendingProps),
                    e === null ? (t.child = lo(t, null, r, n)) : De(e, t, r, n),
                    t.child
            );
        case 11:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : vt(r, o)), Jd(e, t, r, o, n);
        case 7:
            return De(e, t, t.pendingProps, n), t.child;
        case 8:
            return De(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return De(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                        (o = t.pendingProps),
                        (i = t.memoizedProps),
                        (s = o.value),
                        oe(zs, r._currentValue),
                        (r._currentValue = s),
                    i !== null)
                )
                    if (Nt(i.value, s)) {
                        if (i.children === o.children && !We.current) {
                            t = nn(e, t, n);
                            break e;
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            (l = Xt(-1, n & -n)), (l.tag = 2);
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var d = c.pending;
                                                d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
                                                    (c.pending = l);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (l = i.alternate),
                                        l !== null && (l.lanes |= n),
                                            Zl(i.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((s = i.return), s === null)) throw Error(R(341));
                                (s.lanes |= n),
                                    (a = s.alternate),
                                a !== null && (a.lanes |= n),
                                    Zl(s, n, t),
                                    (s = i.sibling);
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((i = s.sibling), i !== null)) {
                                        (i.return = s.return), (s = i);
                                        break;
                                    }
                                    s = s.return;
                                }
                            i = s;
                        }
                De(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                    (r = t.pendingProps.children),
                    Qr(t, n),
                    (o = lt(o)),
                    (r = r(o)),
                    (t.flags |= 1),
                    De(e, t, r, n),
                    t.child
            );
        case 14:
            return (r = t.type), (o = vt(r, t.pendingProps)), (o = vt(r.type, o)), Zd(e, t, r, o, n);
        case 15:
            return ep(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                    (o = t.pendingProps),
                    (o = t.elementType === r ? o : vt(r, o)),
                    vs(e, t),
                    (t.tag = 1),
                    Ue(r) ? ((e = !0), As(t)) : (e = !1),
                    Qr(t, n),
                    Xm(t, r, o),
                    tu(t, r, o, n),
                    ou(null, t, r, !0, e, n)
            );
        case 19:
            return ip(e, t, n);
        case 22:
            return tp(e, t, n);
    }
    throw Error(R(156, t.tag));
};
function bp(e, t) {
    return Kh(e, t);
}
function nx(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function st(e, t, n, r) {
    return new nx(e, t, n, r);
}
function Sc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rx(e) {
    if (typeof e == "function") return Sc(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Wu)) return 11;
        if (e === Uu) return 14;
    }
    return 2;
}
function Fn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = st(e.tag, t, e.key, e.mode)),
                (n.elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
            (n.flags = e.flags & 14680064),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
    );
}
function ws(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) Sc(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case Mr:
                return hr(n.children, o, i, t);
            case Bu:
                (s = 8), (o |= 8);
                break;
            case Nl:
                return (e = st(12, n, t, o | 2)), (e.elementType = Nl), (e.lanes = i), e;
            case El:
                return (e = st(13, n, t, o)), (e.elementType = El), (e.lanes = i), e;
            case Tl:
                return (e = st(19, n, t, o)), (e.elementType = Tl), (e.lanes = i), e;
            case Mh:
                return va(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case jh:
                            s = 10;
                            break e;
                        case Rh:
                            s = 9;
                            break e;
                        case Wu:
                            s = 11;
                            break e;
                        case Uu:
                            s = 14;
                            break e;
                        case wn:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(R(130, e == null ? e : typeof e, ""));
        }
    return (t = st(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function hr(e, t, n, r) {
    return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function va(e, t, n, r) {
    return (e = st(22, e, r, t)), (e.elementType = Mh), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function dl(e, t, n) {
    return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function fl(e, t, n) {
    return (
        (t = st(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
    );
}
function ox(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Qa(0)),
        (this.expirationTimes = Qa(-1)),
        (this.entangledLanes =
            this.finishedLanes =
                this.mutableReadLanes =
                    this.expiredLanes =
                        this.pingedLanes =
                            this.suspendedLanes =
                                this.pendingLanes =
                                    0),
        (this.entanglements = Qa(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function Nc(e, t, n, r, o, i, s, a, l) {
    return (
        (e = new ox(e, t, n, a, l)),
            t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
            (i = st(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            lc(i),
            e
    );
}
function ix(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Rr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function kp(e) {
    if (!e) return $n;
    e = e._reactInternals;
    e: {
        if (br(e) !== e || e.tag !== 1) throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ue(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(R(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ue(n)) return km(e, n, t);
    }
    return t;
}
function Cp(e, t, n, r, o, i, s, a, l) {
    return (
        (e = Nc(n, r, !0, e, o, i, s, a, l)),
            (e.context = kp(null)),
            (n = e.current),
            (r = Ie()),
            (o = In(n)),
            (i = Xt(r, o)),
            (i.callback = t ?? null),
            Dn(n, i, o),
            (e.current.lanes = o),
            Ei(e, o, r),
            Ve(e, r),
            e
    );
}
function ya(e, t, n, r) {
    var o = t.current,
        i = Ie(),
        s = In(o);
    return (
        (n = kp(n)),
            t.context === null ? (t.context = n) : (t.pendingContext = n),
            (t = Xt(i, s)),
            (t.payload = { element: e }),
            (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
            (e = Dn(o, t, s)),
        e !== null && (St(e, o, s, i), ms(e, o, s)),
            s
    );
}
function Gs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function ff(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Ec(e, t) {
    ff(e, t), (e = e.alternate) && ff(e, t);
}
function sx() {
    return null;
}
var Sp =
    typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
        };
function Tc(e) {
    this._internalRoot = e;
}
xa.prototype.render = Tc.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(R(409));
    ya(e, t, null, null);
};
xa.prototype.unmount = Tc.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        yr(function () {
            ya(null, e, null, null);
        }),
            (t[en] = null);
    }
};
function xa(e) {
    this._internalRoot = e;
}
xa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = tm();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++);
        kn.splice(n, 0, e), n === 0 && rm(e);
    }
};
function Pc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wa(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function hf() {}
function ax(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var c = Gs(s);
                i.call(c);
            };
        }
        var s = Cp(t, r, e, 0, null, !1, !1, "", hf);
        return (e._reactRootContainer = s), (e[en] = s.current), li(e.nodeType === 8 ? e.parentNode : e), yr(), s;
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var c = Gs(l);
            a.call(c);
        };
    }
    var l = Nc(e, 0, !1, null, null, !1, !1, "", hf);
    return (
        (e._reactRootContainer = l),
            (e[en] = l.current),
            li(e.nodeType === 8 ? e.parentNode : e),
            yr(function () {
                ya(t, l, n, r);
            }),
            l
    );
}
function ba(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var l = Gs(s);
                a.call(l);
            };
        }
        ya(t, s, e, o);
    } else s = ax(n, t, e, o, r);
    return Gs(s);
}
Zh = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Bo(t.pendingLanes);
                n !== 0 && (Yu(t, n | 1), Ve(t, ge()), !(X & 6) && ((fo = ge() + 500), Kn()));
            }
            break;
        case 13:
            yr(function () {
                var r = tn(e, 1);
                if (r !== null) {
                    var o = Ie();
                    St(r, e, 1, o);
                }
            }),
                Ec(e, 1);
    }
};
Ku = function (e) {
    if (e.tag === 13) {
        var t = tn(e, 134217728);
        if (t !== null) {
            var n = Ie();
            St(t, e, 134217728, n);
        }
        Ec(e, 134217728);
    }
};
em = function (e) {
    if (e.tag === 13) {
        var t = In(e),
            n = tn(e, t);
        if (n !== null) {
            var r = Ie();
            St(n, e, t, r);
        }
        Ec(e, t);
    }
};
tm = function () {
    return te;
};
nm = function (e, t) {
    var n = te;
    try {
        return (te = e), t();
    } finally {
        te = n;
    }
};
Il = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Rl(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = da(r);
                        if (!o) throw Error(R(90));
                        Lh(r), Rl(r, o);
                    }
                }
            }
            break;
        case "textarea":
            Dh(e, n);
            break;
        case "select":
            (t = n.value), t != null && Br(e, !!n.multiple, t, !1);
    }
};
Bh = bc;
Wh = yr;
var lx = { usingClientEntryPoint: !1, Events: [Pi, Dr, da, $h, Hh, bc] },
    Lo = { findFiberByHostInstance: rr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    ux = {
        bundleType: Lo.bundleType,
        version: Lo.version,
        rendererPackageName: Lo.rendererPackageName,
        rendererConfig: Lo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: an.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Qh(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Lo.findFiberByHostInstance || sx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ns.isDisabled && ns.supportsFiber)
        try {
            (aa = ns.inject(ux)), (zt = ns);
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lx;
et.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pc(t)) throw Error(R(200));
    return ix(e, t, null, n);
};
et.createRoot = function (e, t) {
    if (!Pc(e)) throw Error(R(299));
    var n = !1,
        r = "",
        o = Sp;
    return (
        t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
            (t = Nc(e, 1, !1, null, null, n, !1, r, o)),
            (e[en] = t.current),
            li(e.nodeType === 8 ? e.parentNode : e),
            new Tc(t)
    );
};
et.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : ((e = Object.keys(e).join(",")), Error(R(268, e)));
    return (e = Qh(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
    return yr(e);
};
et.hydrate = function (e, t, n) {
    if (!wa(t)) throw Error(R(200));
    return ba(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
    if (!Pc(e)) throw Error(R(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        s = Sp;
    if (
        (n != null &&
        (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
            (t = Cp(t, null, e, 1, n ?? null, o, !1, i, s)),
            (e[en] = t.current),
            li(e),
            r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new xa(t);
};
et.render = function (e, t, n) {
    if (!wa(t)) throw Error(R(200));
    return ba(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
    if (!wa(e)) throw Error(R(40));
    return e._reactRootContainer
        ? (yr(function () {
            ba(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[en] = null);
            });
        }),
            !0)
        : !1;
};
et.unstable_batchedUpdates = bc;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!wa(n)) throw Error(R(200));
    if (e == null || e._reactInternals === void 0) throw Error(R(38));
    return ba(e, t, n, !1, r);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function Np() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Np);
        } catch (e) {
            console.error(e);
        }
}
Np(), (Nh.exports = et);
var Ri = Nh.exports;
const Ep = hh(Ri);
var Tp,
    mf = Ri;
(Tp = mf.createRoot), mf.hydrateRoot;
const cx = 1,
    dx = 1e6;
let hl = 0;
function fx() {
    return (hl = (hl + 1) % Number.MAX_SAFE_INTEGER), hl.toString();
}
const ml = new Map(),
    pf = (e) => {
        if (ml.has(e)) return;
        const t = setTimeout(() => {
            ml.delete(e), Zo({ type: "REMOVE_TOAST", toastId: e });
        }, dx);
        ml.set(e, t);
    },
    hx = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e, toasts: [t.toast, ...e.toasts].slice(0, cx) };
            case "UPDATE_TOAST":
                return { ...e, toasts: e.toasts.map((n) => (n.id === t.toast.id ? { ...n, ...t.toast } : n)) };
            case "DISMISS_TOAST": {
                const { toastId: n } = t;
                return (
                    n
                        ? pf(n)
                        : e.toasts.forEach((r) => {
                            pf(r.id);
                        }),
                        { ...e, toasts: e.toasts.map((r) => (r.id === n || n === void 0 ? { ...r, open: !1 } : r)) }
                );
            }
            case "REMOVE_TOAST":
                return t.toastId === void 0
                    ? { ...e, toasts: [] }
                    : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
        }
    },
    bs = [];
let ks = { toasts: [] };
function Zo(e) {
    (ks = hx(ks, e)),
        bs.forEach((t) => {
            t(ks);
        });
}
function mx({ ...e }) {
    const t = fx(),
        n = (o) => Zo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
        r = () => Zo({ type: "DISMISS_TOAST", toastId: t });
    return (
        Zo({
            type: "ADD_TOAST",
            toast: {
                ...e,
                id: t,
                open: !0,
                onOpenChange: (o) => {
                    o || r();
                },
            },
        }),
            { id: t, dismiss: r, update: n }
    );
}
function px() {
    const [e, t] = y.useState(ks);
    return (
        y.useEffect(
            () => (
                bs.push(t),
                    () => {
                        const n = bs.indexOf(t);
                        n > -1 && bs.splice(n, 1);
                    }
            ),
            [e]
        ),
            { ...e, toast: mx, dismiss: (n) => Zo({ type: "DISMISS_TOAST", toastId: n }) }
    );
}
function we(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
    };
}
function gf(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function Pp(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((o) => {
            const i = gf(o, t);
            return !n && typeof i == "function" && (n = !0), i;
        });
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : gf(e[o], null);
                }
            };
    };
}
function Et(...e) {
    return y.useCallback(Pp(...e), e);
}
function ka(e, t = []) {
    let n = [];
    function r(i, s) {
        const a = y.createContext(s),
            l = n.length;
        n = [...n, s];
        const c = (f) => {
            var v;
            const { scope: p, children: h, ...b } = f,
                x = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || a,
                w = y.useMemo(() => b, Object.values(b));
            return u.jsx(x.Provider, { value: w, children: h });
        };
        c.displayName = i + "Provider";
        function d(f, p) {
            var x;
            const h = ((x = p == null ? void 0 : p[e]) == null ? void 0 : x[l]) || a,
                b = y.useContext(h);
            if (b) return b;
            if (s !== void 0) return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``);
        }
        return [c, d];
    }
    const o = () => {
        const i = n.map((s) => y.createContext(s));
        return function (a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return y.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
        };
    };
    return (o.scopeName = e), [r, gx(o, ...t)];
}
function gx(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (i) {
            const s = r.reduce((a, { useScope: l, scopeName: c }) => {
                const f = l(i)[`__scope${c}`];
                return { ...a, ...f };
            }, {});
            return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
function qs(e) {
    const t = yx(e),
        n = y.forwardRef((r, o) => {
            const { children: i, ...s } = r,
                a = y.Children.toArray(i),
                l = a.find(wx);
            if (l) {
                const c = l.props.children,
                    d = a.map((f) =>
                        f === l
                            ? y.Children.count(c) > 1
                            ? y.Children.only(null)
                            : y.isValidElement(c)
                                ? c.props.children
                                : null
                            : f
                    );
                return u.jsx(t, { ...s, ref: o, children: y.isValidElement(c) ? y.cloneElement(c, void 0, d) : null });
            }
            return u.jsx(t, { ...s, ref: o, children: i });
        });
    return (n.displayName = `${e}.Slot`), n;
}
var vx = qs("Slot");
function yx(e) {
    const t = y.forwardRef((n, r) => {
        const { children: o, ...i } = n;
        if (y.isValidElement(o)) {
            const s = kx(o),
                a = bx(i, o.props);
            return o.type !== y.Fragment && (a.ref = r ? Pp(r, s) : s), y.cloneElement(o, a);
        }
        return y.Children.count(o) > 1 ? y.Children.only(null) : null;
    });
    return (t.displayName = `${e}.SlotClone`), t;
}
var jp = Symbol("radix.slottable");
function xx(e) {
    const t = ({ children: n }) => u.jsx(u.Fragment, { children: n });
    return (t.displayName = `${e}.Slottable`), (t.__radixId = jp), t;
}
function wx(e) {
    return y.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === jp;
}
function bx(e, t) {
    const n = { ...t };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r)
            ? o && i
            ? (n[r] = (...a) => {
                const l = i(...a);
                return o(...a), l;
            })
            : o && (n[r] = o)
            : r === "style"
            ? (n[r] = { ...o, ...i })
            : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
}
function kx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
            (n = t && "isReactWarning" in t && t.isReactWarning),
            n ? e.props.ref : e.props.ref || e.ref);
}
function Cx(e) {
    const t = e + "CollectionProvider",
        [n, r] = ka(t),
        [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        s = (x) => {
            const { scope: w, children: v } = x,
                m = O.useRef(null),
                g = O.useRef(new Map()).current;
            return u.jsx(o, { scope: w, itemMap: g, collectionRef: m, children: v });
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        l = qs(a),
        c = O.forwardRef((x, w) => {
            const { scope: v, children: m } = x,
                g = i(a, v),
                k = Et(w, g.collectionRef);
            return u.jsx(l, { ref: k, children: m });
        });
    c.displayName = a;
    const d = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        p = qs(d),
        h = O.forwardRef((x, w) => {
            const { scope: v, children: m, ...g } = x,
                k = O.useRef(null),
                C = Et(w, k),
                S = i(d, v);
            return (
                O.useEffect(() => (S.itemMap.set(k, { ref: k, ...g }), () => void S.itemMap.delete(k))),
                    u.jsx(p, { [f]: "", ref: C, children: m })
            );
        });
    h.displayName = d;
    function b(x) {
        const w = i(e + "CollectionConsumer", x);
        return O.useCallback(() => {
            const m = w.collectionRef.current;
            if (!m) return [];
            const g = Array.from(m.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort((S, N) => g.indexOf(S.ref.current) - g.indexOf(N.ref.current));
        }, [w.collectionRef, w.itemMap]);
    }
    return [{ Provider: s, Slot: c, ItemSlot: h }, b, r];
}
var Sx = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
    ],
    Qe = Sx.reduce((e, t) => {
        const n = qs(`Primitive.${t}`),
            r = y.forwardRef((o, i) => {
                const { asChild: s, ...a } = o,
                    l = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), u.jsx(l, { ...a, ref: i });
            });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
function Rp(e, t) {
    e && Ri.flushSync(() => e.dispatchEvent(t));
}
function Hn(e) {
    const t = y.useRef(e);
    return (
        y.useEffect(() => {
            t.current = e;
        }),
            y.useMemo(
                () =>
                    (...n) => {
                        var r;
                        return (r = t.current) == null ? void 0 : r.call(t, ...n);
                    },
                []
            )
    );
}
function Nx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Hn(e);
    y.useEffect(() => {
        const r = (o) => {
            o.key === "Escape" && n(o);
        };
        return (
            t.addEventListener("keydown", r, { capture: !0 }),
                () => t.removeEventListener("keydown", r, { capture: !0 })
        );
    }, [n, t]);
}
var Ex = "DismissableLayer",
    gu = "dismissableLayer.update",
    Tx = "dismissableLayer.pointerDownOutside",
    Px = "dismissableLayer.focusOutside",
    vf,
    Mp = y.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    jc = y.forwardRef((e, t) => {
        const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: o,
                onFocusOutside: i,
                onInteractOutside: s,
                onDismiss: a,
                ...l
            } = e,
            c = y.useContext(Mp),
            [d, f] = y.useState(null),
            p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
            [, h] = y.useState({}),
            b = Et(t, (N) => f(N)),
            x = Array.from(c.layers),
            [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
            v = x.indexOf(w),
            m = d ? x.indexOf(d) : -1,
            g = c.layersWithOutsidePointerEventsDisabled.size > 0,
            k = m >= v,
            C = Rx((N) => {
                const j = N.target,
                    L = [...c.branches].some((M) => M.contains(j));
                !k || L || (o == null || o(N), s == null || s(N), N.defaultPrevented || a == null || a());
            }, p),
            S = Mx((N) => {
                const j = N.target;
                [...c.branches].some((M) => M.contains(j)) ||
                (i == null || i(N), s == null || s(N), N.defaultPrevented || a == null || a());
            }, p);
        return (
            Nx((N) => {
                m === c.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && a && (N.preventDefault(), a()));
            }, p),
                y.useEffect(() => {
                    if (d)
                        return (
                            n &&
                            (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                            ((vf = p.body.style.pointerEvents), (p.body.style.pointerEvents = "none")),
                                c.layersWithOutsidePointerEventsDisabled.add(d)),
                                c.layers.add(d),
                                yf(),
                                () => {
                                    n &&
                                    c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                    (p.body.style.pointerEvents = vf);
                                }
                        );
                }, [d, p, n, c]),
                y.useEffect(
                    () => () => {
                        d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), yf());
                    },
                    [d, c]
                ),
                y.useEffect(() => {
                    const N = () => h({});
                    return document.addEventListener(gu, N), () => document.removeEventListener(gu, N);
                }, []),
                u.jsx(Qe.div, {
                    ...l,
                    ref: b,
                    style: { pointerEvents: g ? (k ? "auto" : "none") : void 0, ...e.style },
                    onFocusCapture: we(e.onFocusCapture, S.onFocusCapture),
                    onBlurCapture: we(e.onBlurCapture, S.onBlurCapture),
                    onPointerDownCapture: we(e.onPointerDownCapture, C.onPointerDownCapture),
                })
        );
    });
jc.displayName = Ex;
var jx = "DismissableLayerBranch",
    Op = y.forwardRef((e, t) => {
        const n = y.useContext(Mp),
            r = y.useRef(null),
            o = Et(t, r);
        return (
            y.useEffect(() => {
                const i = r.current;
                if (i)
                    return (
                        n.branches.add(i),
                            () => {
                                n.branches.delete(i);
                            }
                    );
            }, [n.branches]),
                u.jsx(Qe.div, { ...e, ref: o })
        );
    });
Op.displayName = jx;
function Rx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Hn(e),
        r = y.useRef(!1),
        o = y.useRef(() => {});
    return (
        y.useEffect(() => {
            const i = (a) => {
                    if (a.target && !r.current) {
                        let l = function () {
                            Lp(Tx, n, c, { discrete: !0 });
                        };
                        const c = { originalEvent: a };
                        a.pointerType === "touch"
                            ? (t.removeEventListener("click", o.current),
                                (o.current = l),
                                t.addEventListener("click", o.current, { once: !0 }))
                            : l();
                    } else t.removeEventListener("click", o.current);
                    r.current = !1;
                },
                s = window.setTimeout(() => {
                    t.addEventListener("pointerdown", i);
                }, 0);
            return () => {
                window.clearTimeout(s),
                    t.removeEventListener("pointerdown", i),
                    t.removeEventListener("click", o.current);
            };
        }, [t, n]),
            { onPointerDownCapture: () => (r.current = !0) }
    );
}
function Mx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Hn(e),
        r = y.useRef(!1);
    return (
        y.useEffect(() => {
            const o = (i) => {
                i.target && !r.current && Lp(Px, n, { originalEvent: i }, { discrete: !1 });
            };
            return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
        }, [t, n]),
            { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
    );
}
function yf() {
    const e = new CustomEvent(gu);
    document.dispatchEvent(e);
}
function Lp(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? Rp(o, i) : o.dispatchEvent(i);
}
var Ox = jc,
    Lx = Op,
    Bn = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {},
    _x = "Portal",
    _p = y.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e,
            [o, i] = y.useState(!1);
        Bn(() => i(!0), []);
        const s = n || (o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body));
        return s ? Ep.createPortal(u.jsx(Qe.div, { ...r, ref: t }), s) : null;
    });
_p.displayName = _x;
function Dx(e, t) {
    return y.useReducer((n, r) => t[n][r] ?? n, e);
}
var Rc = (e) => {
    const { present: t, children: n } = e,
        r = Ax(t),
        o = typeof n == "function" ? n({ present: r.isPresent }) : y.Children.only(n),
        i = Et(r.ref, Ix(o));
    return typeof n == "function" || r.isPresent ? y.cloneElement(o, { ref: i }) : null;
};
Rc.displayName = "Presence";
function Ax(e) {
    const [t, n] = y.useState(),
        r = y.useRef(null),
        o = y.useRef(e),
        i = y.useRef("none"),
        s = e ? "mounted" : "unmounted",
        [a, l] = Dx(s, {
            mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
        });
    return (
        y.useEffect(() => {
            const c = rs(r.current);
            i.current = a === "mounted" ? c : "none";
        }, [a]),
            Bn(() => {
                const c = r.current,
                    d = o.current;
                if (d !== e) {
                    const p = i.current,
                        h = rs(c);
                    e
                        ? l("MOUNT")
                        : h === "none" || (c == null ? void 0 : c.display) === "none"
                        ? l("UNMOUNT")
                        : l(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"),
                        (o.current = e);
                }
            }, [e, l]),
            Bn(() => {
                if (t) {
                    let c;
                    const d = t.ownerDocument.defaultView ?? window,
                        f = (h) => {
                            const x = rs(r.current).includes(h.animationName);
                            if (h.target === t && x && (l("ANIMATION_END"), !o.current)) {
                                const w = t.style.animationFillMode;
                                (t.style.animationFillMode = "forwards"),
                                    (c = d.setTimeout(() => {
                                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
                                    }));
                            }
                        },
                        p = (h) => {
                            h.target === t && (i.current = rs(r.current));
                        };
                    return (
                        t.addEventListener("animationstart", p),
                            t.addEventListener("animationcancel", f),
                            t.addEventListener("animationend", f),
                            () => {
                                d.clearTimeout(c),
                                    t.removeEventListener("animationstart", p),
                                    t.removeEventListener("animationcancel", f),
                                    t.removeEventListener("animationend", f);
                            }
                    );
                } else l("ANIMATION_END");
            }, [t, l]),
            {
                isPresent: ["mounted", "unmountSuspended"].includes(a),
                ref: y.useCallback((c) => {
                    (r.current = c ? getComputedStyle(c) : null), n(c);
                }, []),
            }
    );
}
function rs(e) {
    return (e == null ? void 0 : e.animationName) || "none";
}
function Ix(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
            (n = t && "isReactWarning" in t && t.isReactWarning),
            n ? e.props.ref : e.props.ref || e.ref);
}
var Fx = Z0[" useInsertionEffect ".trim().toString()] || Bn;
function zx({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [o, i, s] = $x({ defaultProp: t, onChange: n }),
        a = e !== void 0,
        l = a ? e : o;
    {
        const d = y.useRef(e !== void 0);
        y.useEffect(() => {
            const f = d.current;
            f !== a &&
            console.warn(
                `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
            ),
                (d.current = a);
        }, [a, r]);
    }
    const c = y.useCallback(
        (d) => {
            var f;
            if (a) {
                const p = Hx(d) ? d(e) : d;
                p !== e && ((f = s.current) == null || f.call(s, p));
            } else i(d);
        },
        [a, e, i, s]
    );
    return [l, c];
}
function $x({ defaultProp: e, onChange: t }) {
    const [n, r] = y.useState(e),
        o = y.useRef(n),
        i = y.useRef(t);
    return (
        Fx(() => {
            i.current = t;
        }, [t]),
            y.useEffect(() => {
                var s;
                o.current !== n && ((s = i.current) == null || s.call(i, n), (o.current = n));
            }, [n, o]),
            [n, r, i]
    );
}
function Hx(e) {
    return typeof e == "function";
}
var Bx = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
    }),
    Wx = "VisuallyHidden",
    Ca = y.forwardRef((e, t) => u.jsx(Qe.span, { ...e, ref: t, style: { ...Bx, ...e.style } }));
Ca.displayName = Wx;
var Ux = Ca,
    Mc = "ToastProvider",
    [Oc, Vx, Qx] = Cx("Toast"),
    [Dp, $N] = ka("Toast", [Qx]),
    [Yx, Sa] = Dp(Mc),
    Ap = (e) => {
        const {
                __scopeToast: t,
                label: n = "Notification",
                duration: r = 5e3,
                swipeDirection: o = "right",
                swipeThreshold: i = 50,
                children: s,
            } = e,
            [a, l] = y.useState(null),
            [c, d] = y.useState(0),
            f = y.useRef(!1),
            p = y.useRef(!1);
        return (
            n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Mc}\`. Expected non-empty \`string\`.`),
                u.jsx(Oc.Provider, {
                    scope: t,
                    children: u.jsx(Yx, {
                        scope: t,
                        label: n,
                        duration: r,
                        swipeDirection: o,
                        swipeThreshold: i,
                        toastCount: c,
                        viewport: a,
                        onViewportChange: l,
                        onToastAdd: y.useCallback(() => d((h) => h + 1), []),
                        onToastRemove: y.useCallback(() => d((h) => h - 1), []),
                        isFocusedToastEscapeKeyDownRef: f,
                        isClosePausedRef: p,
                        children: s,
                    }),
                })
        );
    };
Ap.displayName = Mc;
var Ip = "ToastViewport",
    Kx = ["F8"],
    vu = "toast.viewportPause",
    yu = "toast.viewportResume",
    Fp = y.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = Kx, label: o = "Notifications ({hotkey})", ...i } = e,
            s = Sa(Ip, n),
            a = Vx(n),
            l = y.useRef(null),
            c = y.useRef(null),
            d = y.useRef(null),
            f = y.useRef(null),
            p = Et(t, f, s.onViewportChange),
            h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            b = s.toastCount > 0;
        y.useEffect(() => {
            const w = (v) => {
                var g;
                r.length !== 0 && r.every((k) => v[k] || v.code === k) && ((g = f.current) == null || g.focus());
            };
            return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
        }, [r]),
            y.useEffect(() => {
                const w = l.current,
                    v = f.current;
                if (b && w && v) {
                    const m = () => {
                            if (!s.isClosePausedRef.current) {
                                const S = new CustomEvent(vu);
                                v.dispatchEvent(S), (s.isClosePausedRef.current = !0);
                            }
                        },
                        g = () => {
                            if (s.isClosePausedRef.current) {
                                const S = new CustomEvent(yu);
                                v.dispatchEvent(S), (s.isClosePausedRef.current = !1);
                            }
                        },
                        k = (S) => {
                            !w.contains(S.relatedTarget) && g();
                        },
                        C = () => {
                            w.contains(document.activeElement) || g();
                        };
                    return (
                        w.addEventListener("focusin", m),
                            w.addEventListener("focusout", k),
                            w.addEventListener("pointermove", m),
                            w.addEventListener("pointerleave", C),
                            window.addEventListener("blur", m),
                            window.addEventListener("focus", g),
                            () => {
                                w.removeEventListener("focusin", m),
                                    w.removeEventListener("focusout", k),
                                    w.removeEventListener("pointermove", m),
                                    w.removeEventListener("pointerleave", C),
                                    window.removeEventListener("blur", m),
                                    window.removeEventListener("focus", g);
                            }
                    );
                }
            }, [b, s.isClosePausedRef]);
        const x = y.useCallback(
            ({ tabbingDirection: w }) => {
                const m = a().map((g) => {
                    const k = g.ref.current,
                        C = [k, ...a1(k)];
                    return w === "forwards" ? C : C.reverse();
                });
                return (w === "forwards" ? m.reverse() : m).flat();
            },
            [a]
        );
        return (
            y.useEffect(() => {
                const w = f.current;
                if (w) {
                    const v = (m) => {
                        var C, S, N;
                        const g = m.altKey || m.ctrlKey || m.metaKey;
                        if (m.key === "Tab" && !g) {
                            const j = document.activeElement,
                                L = m.shiftKey;
                            if (m.target === w && L) {
                                (C = c.current) == null || C.focus();
                                return;
                            }
                            const I = x({ tabbingDirection: L ? "backwards" : "forwards" }),
                                Q = I.findIndex((_) => _ === j);
                            pl(I.slice(Q + 1))
                                ? m.preventDefault()
                                : L
                                ? (S = c.current) == null || S.focus()
                                : (N = d.current) == null || N.focus();
                        }
                    };
                    return w.addEventListener("keydown", v), () => w.removeEventListener("keydown", v);
                }
            }, [a, x]),
                u.jsxs(Lx, {
                    ref: l,
                    role: "region",
                    "aria-label": o.replace("{hotkey}", h),
                    tabIndex: -1,
                    style: { pointerEvents: b ? void 0 : "none" },
                    children: [
                        b &&
                        u.jsx(xu, {
                            ref: c,
                            onFocusFromOutsideViewport: () => {
                                const w = x({ tabbingDirection: "forwards" });
                                pl(w);
                            },
                        }),
                        u.jsx(Oc.Slot, { scope: n, children: u.jsx(Qe.ol, { tabIndex: -1, ...i, ref: p }) }),
                        b &&
                        u.jsx(xu, {
                            ref: d,
                            onFocusFromOutsideViewport: () => {
                                const w = x({ tabbingDirection: "backwards" });
                                pl(w);
                            },
                        }),
                    ],
                })
        );
    });
Fp.displayName = Ip;
var zp = "ToastFocusProxy",
    xu = y.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
            i = Sa(zp, n);
        return u.jsx(Ca, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (s) => {
                var c;
                const a = s.relatedTarget;
                !((c = i.viewport) != null && c.contains(a)) && r();
            },
        });
    });
xu.displayName = zp;
var Mi = "Toast",
    Gx = "toast.swipeStart",
    qx = "toast.swipeMove",
    Xx = "toast.swipeCancel",
    Jx = "toast.swipeEnd",
    $p = y.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
            [a, l] = zx({ prop: r, defaultProp: o ?? !0, onChange: i, caller: Mi });
        return u.jsx(Rc, {
            present: n || a,
            children: u.jsx(t1, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: Hn(e.onPause),
                onResume: Hn(e.onResume),
                onSwipeStart: we(e.onSwipeStart, (c) => {
                    c.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: we(e.onSwipeMove, (c) => {
                    const { x: d, y: f } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "move"),
                        c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                        c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
                }),
                onSwipeCancel: we(e.onSwipeCancel, (c) => {
                    c.currentTarget.setAttribute("data-swipe", "cancel"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
                }),
                onSwipeEnd: we(e.onSwipeEnd, (c) => {
                    const { x: d, y: f } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "end"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                        c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                        l(!1);
                }),
            }),
        });
    });
$p.displayName = Mi;
var [Zx, e1] = Dp(Mi, { onClose() {} }),
    t1 = y.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                type: r = "foreground",
                duration: o,
                open: i,
                onClose: s,
                onEscapeKeyDown: a,
                onPause: l,
                onResume: c,
                onSwipeStart: d,
                onSwipeMove: f,
                onSwipeCancel: p,
                onSwipeEnd: h,
                ...b
            } = e,
            x = Sa(Mi, n),
            [w, v] = y.useState(null),
            m = Et(t, (_) => v(_)),
            g = y.useRef(null),
            k = y.useRef(null),
            C = o || x.duration,
            S = y.useRef(0),
            N = y.useRef(C),
            j = y.useRef(0),
            { onToastAdd: L, onToastRemove: M } = x,
            z = Hn(() => {
                var G;
                (w == null ? void 0 : w.contains(document.activeElement)) && ((G = x.viewport) == null || G.focus()),
                    s();
            }),
            I = y.useCallback(
                (_) => {
                    !_ ||
                    _ === 1 / 0 ||
                    (window.clearTimeout(j.current),
                        (S.current = new Date().getTime()),
                        (j.current = window.setTimeout(z, _)));
                },
                [z]
            );
        y.useEffect(() => {
            const _ = x.viewport;
            if (_) {
                const G = () => {
                        I(N.current), c == null || c();
                    },
                    $ = () => {
                        const W = new Date().getTime() - S.current;
                        (N.current = N.current - W), window.clearTimeout(j.current), l == null || l();
                    };
                return (
                    _.addEventListener(vu, $),
                        _.addEventListener(yu, G),
                        () => {
                            _.removeEventListener(vu, $), _.removeEventListener(yu, G);
                        }
                );
            }
        }, [x.viewport, C, l, c, I]),
            y.useEffect(() => {
                i && !x.isClosePausedRef.current && I(C);
            }, [i, C, x.isClosePausedRef, I]),
            y.useEffect(() => (L(), () => M()), [L, M]);
        const Q = y.useMemo(() => (w ? Yp(w) : null), [w]);
        return x.viewport
            ? u.jsxs(u.Fragment, {
                children: [
                    Q &&
                    u.jsx(n1, {
                        __scopeToast: n,
                        role: "status",
                        "aria-live": r === "foreground" ? "assertive" : "polite",
                        "aria-atomic": !0,
                        children: Q,
                    }),
                    u.jsx(Zx, {
                        scope: n,
                        onClose: z,
                        children: Ri.createPortal(
                            u.jsx(Oc.ItemSlot, {
                                scope: n,
                                children: u.jsx(Ox, {
                                    asChild: !0,
                                    onEscapeKeyDown: we(a, () => {
                                        x.isFocusedToastEscapeKeyDownRef.current || z(),
                                            (x.isFocusedToastEscapeKeyDownRef.current = !1);
                                    }),
                                    children: u.jsx(Qe.li, {
                                        role: "status",
                                        "aria-live": "off",
                                        "aria-atomic": !0,
                                        tabIndex: 0,
                                        "data-state": i ? "open" : "closed",
                                        "data-swipe-direction": x.swipeDirection,
                                        ...b,
                                        ref: m,
                                        style: { userSelect: "none", touchAction: "none", ...e.style },
                                        onKeyDown: we(e.onKeyDown, (_) => {
                                            _.key === "Escape" &&
                                            (a == null || a(_.nativeEvent),
                                            _.nativeEvent.defaultPrevented ||
                                            ((x.isFocusedToastEscapeKeyDownRef.current = !0), z()));
                                        }),
                                        onPointerDown: we(e.onPointerDown, (_) => {
                                            _.button === 0 && (g.current = { x: _.clientX, y: _.clientY });
                                        }),
                                        onPointerMove: we(e.onPointerMove, (_) => {
                                            if (!g.current) return;
                                            const G = _.clientX - g.current.x,
                                                $ = _.clientY - g.current.y,
                                                W = !!k.current,
                                                T = ["left", "right"].includes(x.swipeDirection),
                                                P = ["left", "up"].includes(x.swipeDirection) ? Math.min : Math.max,
                                                D = T ? P(0, G) : 0,
                                                U = T ? 0 : P(0, $),
                                                F = _.pointerType === "touch" ? 10 : 2,
                                                Y = { x: D, y: U },
                                                q = { originalEvent: _, delta: Y };
                                            W
                                                ? ((k.current = Y), os(qx, f, q, { discrete: !1 }))
                                                : xf(Y, x.swipeDirection, F)
                                                ? ((k.current = Y),
                                                    os(Gx, d, q, { discrete: !1 }),
                                                    _.target.setPointerCapture(_.pointerId))
                                                : (Math.abs(G) > F || Math.abs($) > F) && (g.current = null);
                                        }),
                                        onPointerUp: we(e.onPointerUp, (_) => {
                                            const G = k.current,
                                                $ = _.target;
                                            if (
                                                ($.hasPointerCapture(_.pointerId) &&
                                                $.releasePointerCapture(_.pointerId),
                                                    (k.current = null),
                                                    (g.current = null),
                                                    G)
                                            ) {
                                                const W = _.currentTarget,
                                                    T = { originalEvent: _, delta: G };
                                                xf(G, x.swipeDirection, x.swipeThreshold)
                                                    ? os(Jx, h, T, { discrete: !0 })
                                                    : os(Xx, p, T, { discrete: !0 }),
                                                    W.addEventListener("click", (P) => P.preventDefault(), {
                                                        once: !0,
                                                    });
                                            }
                                        }),
                                    }),
                                }),
                            }),
                            x.viewport
                        ),
                    }),
                ],
            })
            : null;
    }),
    n1 = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
            o = Sa(Mi, t),
            [i, s] = y.useState(!1),
            [a, l] = y.useState(!1);
        return (
            i1(() => s(!0)),
                y.useEffect(() => {
                    const c = window.setTimeout(() => l(!0), 1e3);
                    return () => window.clearTimeout(c);
                }, []),
                a
                    ? null
                    : u.jsx(_p, {
                        asChild: !0,
                        children: u.jsx(Ca, { ...r, children: i && u.jsxs(u.Fragment, { children: [o.label, " ", n] }) }),
                    })
        );
    },
    r1 = "ToastTitle",
    Hp = y.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return u.jsx(Qe.div, { ...r, ref: t });
    });
Hp.displayName = r1;
var o1 = "ToastDescription",
    Bp = y.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return u.jsx(Qe.div, { ...r, ref: t });
    });
Bp.displayName = o1;
var Wp = "ToastAction",
    Up = y.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
            ? u.jsx(Qp, { altText: n, asChild: !0, children: u.jsx(Lc, { ...r, ref: t }) })
            : (console.error(`Invalid prop \`altText\` supplied to \`${Wp}\`. Expected non-empty \`string\`.`), null);
    });
Up.displayName = Wp;
var Vp = "ToastClose",
    Lc = y.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
            o = e1(Vp, n);
        return u.jsx(Qp, {
            asChild: !0,
            children: u.jsx(Qe.button, { type: "button", ...r, ref: t, onClick: we(e.onClick, o.onClose) }),
        });
    });
Lc.displayName = Vp;
var Qp = y.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return u.jsx(Qe.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t,
    });
});
function Yp(e) {
    const t = [];
    return (
        Array.from(e.childNodes).forEach((r) => {
            if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), s1(r))) {
                const o = r.ariaHidden || r.hidden || r.style.display === "none",
                    i = r.dataset.radixToastAnnounceExclude === "";
                if (!o)
                    if (i) {
                        const s = r.dataset.radixToastAnnounceAlt;
                        s && t.push(s);
                    } else t.push(...Yp(r));
            }
        }),
            t
    );
}
function os(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? Rp(o, i) : o.dispatchEvent(i);
}
var xf = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function i1(e = () => {}) {
    const t = Hn(e);
    Bn(() => {
        let n = 0,
            r = 0;
        return (
            (n = window.requestAnimationFrame(() => (r = window.requestAnimationFrame(t)))),
                () => {
                    window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
                }
        );
    }, [t]);
}
function s1(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function a1(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (r) => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o
                    ? NodeFilter.FILTER_SKIP
                    : r.tabIndex >= 0
                        ? NodeFilter.FILTER_ACCEPT
                        : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function pl(e) {
    const t = document.activeElement;
    return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var l1 = Ap,
    Kp = Fp,
    Gp = $p,
    qp = Hp,
    Xp = Bp,
    Jp = Up,
    Zp = Lc;
function eg(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = eg(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function tg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = eg(e)) && (r && (r += " "), (r += t));
    return r;
}
const wf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    bf = tg,
    ng = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return bf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: i } = t,
            s = Object.keys(o).map((c) => {
                const d = n == null ? void 0 : n[c],
                    f = i == null ? void 0 : i[c];
                if (d === null) return null;
                const p = wf(d) || wf(f);
                return o[c][p];
            }),
            a =
                n &&
                Object.entries(n).reduce((c, d) => {
                    let [f, p] = d;
                    return p === void 0 || (c[f] = p), c;
                }, {}),
            l =
                t == null || (r = t.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((c, d) => {
                        let { class: f, className: p, ...h } = d;
                        return Object.entries(h).every((b) => {
                            let [x, w] = b;
                            return Array.isArray(w) ? w.includes({ ...i, ...a }[x]) : { ...i, ...a }[x] === w;
                        })
                            ? [...c, f, p]
                            : c;
                    }, []);
        return bf(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    rg = (...e) =>
        e
            .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var c1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d1 = y.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: o = "",
            children: i,
            iconNode: s,
            ...a
        },
        l
    ) =>
        y.createElement(
            "svg",
            {
                ref: l,
                ...c1,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: rg("lucide", o),
                ...a,
            },
            [...s.map(([c, d]) => y.createElement(c, d)), ...(Array.isArray(i) ? i : [i])]
        )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ne = (e, t) => {
    const n = y.forwardRef(({ className: r, ...o }, i) =>
        y.createElement(d1, { ref: i, iconNode: t, className: rg(`lucide-${u1(e)}`, r), ...o })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const og = ne("Baby", [
    ["path", { d: "M9 12h.01", key: "157uk2" }],
    ["path", { d: "M15 12h.01", key: "1k8ypt" }],
    ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
    [
        "path",
        {
            d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
            key: "5yv0yz",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f1 = ne("Calendar", [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
    ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h1 = ne("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m1 = ne("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ig = ne("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p1 = ne("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = ne("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = ne("Droplet", [
    [
        "path",
        {
            d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
            key: "c7niix",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = ne("Ear", [
    ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0", key: "1dfaln" }],
    ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y1 = ne("ExternalLink", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _c = ne("Facebook", [
    ["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x1 = ne("Gift", [
    ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
    ["path", { d: "M12 8v13", key: "1c76mn" }],
    ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
    ["path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5", key: "1ihvrl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = ne("Heart", [
    [
        "path",
        {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = ne("Mail", [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = ne("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
        },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C1 = ne("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vi = ne("MessageCircle", [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = ne("Paintbrush", [
    ["path", { d: "m14.622 17.897-10.68-2.913", key: "vj2p1u" }],
    [
        "path",
        {
            d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
            key: "18tc5c",
        },
    ],
    [
        "path",
        {
            d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
            key: "ytzfxy",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = ne("Palette", [
    ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
    ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
    ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
    ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
    [
        "path",
        {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ag = ne("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = ne("Quote", [
    [
        "path",
        {
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0",
        },
    ],
    [
        "path",
        {
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T1 = ne("Ruler", [
    [
        "path",
        {
            d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
            key: "icamh8",
        },
    ],
    ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
    ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
    ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
    ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Na = ne("Scissors", [
    ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
    ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
    ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kf = ne("ShoppingBag", [
    ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wu = ne("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx",
        },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lg = ne("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P1 = ne("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _o = ne("Waves", [
    [
        "path",
        { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "knzxuh" },
    ],
    [
        "path",
        {
            d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
            key: "2jd2cc",
        },
    ],
    [
        "path",
        {
            d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
            key: "rd2r6e",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xs = ne("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    Dc = "-",
    j1 = (e) => {
        const t = M1(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (s) => {
                const a = s.split(Dc);
                return a[0] === "" && a.length !== 1 && a.shift(), ug(a, t) || R1(s);
            },
            getConflictingClassGroupIds: (s, a) => {
                const l = n[s] || [];
                return a && r[s] ? [...l, ...r[s]] : l;
            },
        };
    },
    ug = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? ug(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(Dc);
        return (s = t.validators.find(({ validator: a }) => a(i))) == null ? void 0 : s.classGroupId;
    },
    Cf = /^\[(.+)\]$/,
    R1 = (e) => {
        if (Cf.test(e)) {
            const t = Cf.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
        }
    },
    M1 = (e) => {
        const { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
        return (
            L1(Object.entries(e.classGroups), n).forEach(([i, s]) => {
                bu(s, r, i, t);
            }),
                r
        );
    },
    bu = (e, t, n, r) => {
        e.forEach((o) => {
            if (typeof o == "string") {
                const i = o === "" ? t : Sf(t, o);
                i.classGroupId = n;
                return;
            }
            if (typeof o == "function") {
                if (O1(o)) {
                    bu(o(r), t, n, r);
                    return;
                }
                t.validators.push({ validator: o, classGroupId: n });
                return;
            }
            Object.entries(o).forEach(([i, s]) => {
                bu(s, Sf(t, i), n, r);
            });
        });
    },
    Sf = (e, t) => {
        let n = e;
        return (
            t.split(Dc).forEach((r) => {
                n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
                    (n = n.nextPart.get(r));
            }),
                n
        );
    },
    O1 = (e) => e.isThemeGetter,
    L1 = (e, t) =>
        t
            ? e.map(([n, r]) => {
                const o = r.map((i) =>
                    typeof i == "string"
                        ? t + i
                        : typeof i == "object"
                        ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a]))
                        : i
                );
                return [n, o];
            })
            : e,
    _1 = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            r = new Map();
        const o = (i, s) => {
            n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s;
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s);
            },
        };
    },
    cg = "!",
    D1 = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            r = t.length === 1,
            o = t[0],
            i = t.length,
            s = (a) => {
                const l = [];
                let c = 0,
                    d = 0,
                    f;
                for (let w = 0; w < a.length; w++) {
                    let v = a[w];
                    if (c === 0) {
                        if (v === o && (r || a.slice(w, w + i) === t)) {
                            l.push(a.slice(d, w)), (d = w + i);
                            continue;
                        }
                        if (v === "/") {
                            f = w;
                            continue;
                        }
                    }
                    v === "[" ? c++ : v === "]" && c--;
                }
                const p = l.length === 0 ? a : a.substring(d),
                    h = p.startsWith(cg),
                    b = h ? p.substring(1) : p,
                    x = f && f > d ? f - d : void 0;
                return { modifiers: l, hasImportantModifier: h, baseClassName: b, maybePostfixModifierPosition: x };
            };
        return n ? (a) => n({ className: a, parseClassName: s }) : s;
    },
    A1 = (e) => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return (
            e.forEach((r) => {
                r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
            }),
                t.push(...n.sort()),
                t
        );
    },
    I1 = (e) => ({ cache: _1(e.cacheSize), parseClassName: D1(e), ...j1(e) }),
    F1 = /\s+/,
    z1 = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
            i = [],
            s = e.trim().split(F1);
        let a = "";
        for (let l = s.length - 1; l >= 0; l -= 1) {
            const c = s[l],
                { modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: h } = n(c);
            let b = !!h,
                x = r(b ? p.substring(0, h) : p);
            if (!x) {
                if (!b) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (((x = r(p)), !x)) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                b = !1;
            }
            const w = A1(d).join(":"),
                v = f ? w + cg : w,
                m = v + x;
            if (i.includes(m)) continue;
            i.push(m);
            const g = o(x, b);
            for (let k = 0; k < g.length; ++k) {
                const C = g[k];
                i.push(v + C);
            }
            a = c + (a.length > 0 ? " " + a : a);
        }
        return a;
    };
function $1() {
    let e = 0,
        t,
        n,
        r = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = dg(t)) && (r && (r += " "), (r += n));
    return r;
}
const dg = (e) => {
    if (typeof e == "string") return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = dg(e[r])) && (n && (n += " "), (n += t));
    return n;
};
function H1(e, ...t) {
    let n,
        r,
        o,
        i = s;
    function s(l) {
        const c = t.reduce((d, f) => f(d), e());
        return (n = I1(c)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
    }
    function a(l) {
        const c = r(l);
        if (c) return c;
        const d = z1(l, n);
        return o(l, d), d;
    }
    return function () {
        return i($1.apply(null, arguments));
    };
}
const ie = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    fg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    B1 = /^\d+\/\d+$/,
    W1 = new Set(["px", "full", "screen"]),
    U1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    V1 =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Q1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Y1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    K1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Ut = (e) => Kr(e) || W1.has(e) || B1.test(e),
    gn = (e) => xo(e, "length", nw),
    Kr = (e) => !!e && !Number.isNaN(Number(e)),
    gl = (e) => xo(e, "number", Kr),
    Do = (e) => !!e && Number.isInteger(Number(e)),
    G1 = (e) => e.endsWith("%") && Kr(e.slice(0, -1)),
    V = (e) => fg.test(e),
    vn = (e) => U1.test(e),
    q1 = new Set(["length", "size", "percentage"]),
    X1 = (e) => xo(e, q1, hg),
    J1 = (e) => xo(e, "position", hg),
    Z1 = new Set(["image", "url"]),
    ew = (e) => xo(e, Z1, ow),
    tw = (e) => xo(e, "", rw),
    Ao = () => !0,
    xo = (e, t, n) => {
        const r = fg.exec(e);
        return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
    },
    nw = (e) => V1.test(e) && !Q1.test(e),
    hg = () => !1,
    rw = (e) => Y1.test(e),
    ow = (e) => K1.test(e),
    iw = () => {
        const e = ie("colors"),
            t = ie("spacing"),
            n = ie("blur"),
            r = ie("brightness"),
            o = ie("borderColor"),
            i = ie("borderRadius"),
            s = ie("borderSpacing"),
            a = ie("borderWidth"),
            l = ie("contrast"),
            c = ie("grayscale"),
            d = ie("hueRotate"),
            f = ie("invert"),
            p = ie("gap"),
            h = ie("gradientColorStops"),
            b = ie("gradientColorStopPositions"),
            x = ie("inset"),
            w = ie("margin"),
            v = ie("opacity"),
            m = ie("padding"),
            g = ie("saturate"),
            k = ie("scale"),
            C = ie("sepia"),
            S = ie("skew"),
            N = ie("space"),
            j = ie("translate"),
            L = () => ["auto", "contain", "none"],
            M = () => ["auto", "hidden", "clip", "visible", "scroll"],
            z = () => ["auto", V, t],
            I = () => [V, t],
            Q = () => ["", Ut, gn],
            _ = () => ["auto", Kr, V],
            G = () => [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
            ],
            $ = () => ["solid", "dashed", "dotted", "double", "none"],
            W = () => [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
            ],
            T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            P = () => ["", "0", V],
            D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            U = () => [Kr, V];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Ao],
                spacing: [Ut, gn],
                blur: ["none", "", vn, V],
                brightness: U(),
                borderColor: [e],
                borderRadius: ["none", "", "full", vn, V],
                borderSpacing: I(),
                borderWidth: Q(),
                contrast: U(),
                grayscale: P(),
                hueRotate: U(),
                invert: P(),
                gap: I(),
                gradientColorStops: [e],
                gradientColorStopPositions: [G1, gn],
                inset: z(),
                margin: z(),
                opacity: U(),
                padding: I(),
                saturate: U(),
                scale: U(),
                sepia: P(),
                skew: U(),
                space: I(),
                translate: I(),
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", V] }],
                container: ["container"],
                columns: [{ columns: [vn] }],
                "break-after": [{ "break-after": D() }],
                "break-before": [{ "break-before": D() }],
                "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                box: [{ box: ["border", "content"] }],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden",
                ],
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                "object-position": [{ object: [...G(), V] }],
                overflow: [{ overflow: M() }],
                "overflow-x": [{ "overflow-x": M() }],
                "overflow-y": [{ "overflow-y": M() }],
                overscroll: [{ overscroll: L() }],
                "overscroll-x": [{ "overscroll-x": L() }],
                "overscroll-y": [{ "overscroll-y": L() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [x] }],
                "inset-x": [{ "inset-x": [x] }],
                "inset-y": [{ "inset-y": [x] }],
                start: [{ start: [x] }],
                end: [{ end: [x] }],
                top: [{ top: [x] }],
                right: [{ right: [x] }],
                bottom: [{ bottom: [x] }],
                left: [{ left: [x] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", Do, V] }],
                basis: [{ basis: z() }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", V] }],
                grow: [{ grow: P() }],
                shrink: [{ shrink: P() }],
                order: [{ order: ["first", "last", "none", Do, V] }],
                "grid-cols": [{ "grid-cols": [Ao] }],
                "col-start-end": [{ col: ["auto", { span: ["full", Do, V] }, V] }],
                "col-start": [{ "col-start": _() }],
                "col-end": [{ "col-end": _() }],
                "grid-rows": [{ "grid-rows": [Ao] }],
                "row-start-end": [{ row: ["auto", { span: [Do, V] }, V] }],
                "row-start": [{ "row-start": _() }],
                "row-end": [{ "row-end": _() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", V] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", V] }],
                gap: [{ gap: [p] }],
                "gap-x": [{ "gap-x": [p] }],
                "gap-y": [{ "gap-y": [p] }],
                "justify-content": [{ justify: ["normal", ...T()] }],
                "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                "align-content": [{ content: ["normal", ...T(), "baseline"] }],
                "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                "place-content": [{ "place-content": [...T(), "baseline"] }],
                "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                p: [{ p: [m] }],
                px: [{ px: [m] }],
                py: [{ py: [m] }],
                ps: [{ ps: [m] }],
                pe: [{ pe: [m] }],
                pt: [{ pt: [m] }],
                pr: [{ pr: [m] }],
                pb: [{ pb: [m] }],
                pl: [{ pl: [m] }],
                m: [{ m: [w] }],
                mx: [{ mx: [w] }],
                my: [{ my: [w] }],
                ms: [{ ms: [w] }],
                me: [{ me: [w] }],
                mt: [{ mt: [w] }],
                mr: [{ mr: [w] }],
                mb: [{ mb: [w] }],
                ml: [{ ml: [w] }],
                "space-x": [{ "space-x": [N] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [N] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t] }],
                "min-w": [{ "min-w": [V, t, "min", "max", "fit"] }],
                "max-w": [{ "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", { screen: [vn] }, vn] }],
                h: [{ h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "min-h": [{ "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "max-h": [{ "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                size: [{ size: [V, t, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", vn, gn] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [
                    {
                        font: [
                            "thin",
                            "extralight",
                            "light",
                            "normal",
                            "medium",
                            "semibold",
                            "bold",
                            "extrabold",
                            "black",
                            gl,
                        ],
                    },
                ],
                "font-family": [{ font: [Ao] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V] }],
                "line-clamp": [{ "line-clamp": ["none", Kr, gl] }],
                leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ut, V] }],
                "list-image": [{ "list-image": ["none", V] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", V] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [e] }],
                "placeholder-opacity": [{ "placeholder-opacity": [v] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "text-color": [{ text: [e] }],
                "text-opacity": [{ "text-opacity": [v] }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: ["auto", "from-font", Ut, gn] }],
                "underline-offset": [{ "underline-offset": ["auto", Ut, V] }],
                "text-decoration-color": [{ decoration: [e] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: I() }],
                "vertical-align": [
                    { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V] },
                ],
                whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", V] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                "bg-opacity": [{ "bg-opacity": [v] }],
                "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                "bg-position": [{ bg: [...G(), J1] }],
                "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                "bg-size": [{ bg: ["auto", "cover", "contain", X1] }],
                "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, ew] }],
                "bg-color": [{ bg: [e] }],
                "gradient-from-pos": [{ from: [b] }],
                "gradient-via-pos": [{ via: [b] }],
                "gradient-to-pos": [{ to: [b] }],
                "gradient-from": [{ from: [h] }],
                "gradient-via": [{ via: [h] }],
                "gradient-to": [{ to: [h] }],
                rounded: [{ rounded: [i] }],
                "rounded-s": [{ "rounded-s": [i] }],
                "rounded-e": [{ "rounded-e": [i] }],
                "rounded-t": [{ "rounded-t": [i] }],
                "rounded-r": [{ "rounded-r": [i] }],
                "rounded-b": [{ "rounded-b": [i] }],
                "rounded-l": [{ "rounded-l": [i] }],
                "rounded-ss": [{ "rounded-ss": [i] }],
                "rounded-se": [{ "rounded-se": [i] }],
                "rounded-ee": [{ "rounded-ee": [i] }],
                "rounded-es": [{ "rounded-es": [i] }],
                "rounded-tl": [{ "rounded-tl": [i] }],
                "rounded-tr": [{ "rounded-tr": [i] }],
                "rounded-br": [{ "rounded-br": [i] }],
                "rounded-bl": [{ "rounded-bl": [i] }],
                "border-w": [{ border: [a] }],
                "border-w-x": [{ "border-x": [a] }],
                "border-w-y": [{ "border-y": [a] }],
                "border-w-s": [{ "border-s": [a] }],
                "border-w-e": [{ "border-e": [a] }],
                "border-w-t": [{ "border-t": [a] }],
                "border-w-r": [{ "border-r": [a] }],
                "border-w-b": [{ "border-b": [a] }],
                "border-w-l": [{ "border-l": [a] }],
                "border-opacity": [{ "border-opacity": [v] }],
                "border-style": [{ border: [...$(), "hidden"] }],
                "divide-x": [{ "divide-x": [a] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [a] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [v] }],
                "divide-style": [{ divide: $() }],
                "border-color": [{ border: [o] }],
                "border-color-x": [{ "border-x": [o] }],
                "border-color-y": [{ "border-y": [o] }],
                "border-color-s": [{ "border-s": [o] }],
                "border-color-e": [{ "border-e": [o] }],
                "border-color-t": [{ "border-t": [o] }],
                "border-color-r": [{ "border-r": [o] }],
                "border-color-b": [{ "border-b": [o] }],
                "border-color-l": [{ "border-l": [o] }],
                "divide-color": [{ divide: [o] }],
                "outline-style": [{ outline: ["", ...$()] }],
                "outline-offset": [{ "outline-offset": [Ut, V] }],
                "outline-w": [{ outline: [Ut, gn] }],
                "outline-color": [{ outline: [e] }],
                "ring-w": [{ ring: Q() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [e] }],
                "ring-opacity": [{ "ring-opacity": [v] }],
                "ring-offset-w": [{ "ring-offset": [Ut, gn] }],
                "ring-offset-color": [{ "ring-offset": [e] }],
                shadow: [{ shadow: ["", "inner", "none", vn, tw] }],
                "shadow-color": [{ shadow: [Ao] }],
                opacity: [{ opacity: [v] }],
                "mix-blend": [{ "mix-blend": [...W(), "plus-lighter", "plus-darker"] }],
                "bg-blend": [{ "bg-blend": W() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [r] }],
                contrast: [{ contrast: [l] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", vn, V] }],
                grayscale: [{ grayscale: [c] }],
                "hue-rotate": [{ "hue-rotate": [d] }],
                invert: [{ invert: [f] }],
                saturate: [{ saturate: [g] }],
                sepia: [{ sepia: [C] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [n] }],
                "backdrop-brightness": [{ "backdrop-brightness": [r] }],
                "backdrop-contrast": [{ "backdrop-contrast": [l] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
                "backdrop-invert": [{ "backdrop-invert": [f] }],
                "backdrop-opacity": [{ "backdrop-opacity": [v] }],
                "backdrop-saturate": [{ "backdrop-saturate": [g] }],
                "backdrop-sepia": [{ "backdrop-sepia": [C] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [s] }],
                "border-spacing-x": [{ "border-spacing-x": [s] }],
                "border-spacing-y": [{ "border-spacing-y": [s] }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V] }],
                duration: [{ duration: U() }],
                ease: [{ ease: ["linear", "in", "out", "in-out", V] }],
                delay: [{ delay: U() }],
                animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", V] }],
                transform: [{ transform: ["", "gpu", "none"] }],
                scale: [{ scale: [k] }],
                "scale-x": [{ "scale-x": [k] }],
                "scale-y": [{ "scale-y": [k] }],
                rotate: [{ rotate: [Do, V] }],
                "translate-x": [{ "translate-x": [j] }],
                "translate-y": [{ "translate-y": [j] }],
                "skew-x": [{ "skew-x": [S] }],
                "skew-y": [{ "skew-y": [S] }],
                "transform-origin": [
                    {
                        origin: [
                            "center",
                            "top",
                            "top-right",
                            "right",
                            "bottom-right",
                            "bottom",
                            "bottom-left",
                            "left",
                            "top-left",
                            V,
                        ],
                    },
                ],
                accent: [{ accent: ["auto", e] }],
                appearance: [{ appearance: ["none", "auto"] }],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            V,
                        ],
                    },
                ],
                "caret-color": [{ caret: [e] }],
                "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                resize: [{ resize: ["none", "y", "x", ""] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": I() }],
                "scroll-mx": [{ "scroll-mx": I() }],
                "scroll-my": [{ "scroll-my": I() }],
                "scroll-ms": [{ "scroll-ms": I() }],
                "scroll-me": [{ "scroll-me": I() }],
                "scroll-mt": [{ "scroll-mt": I() }],
                "scroll-mr": [{ "scroll-mr": I() }],
                "scroll-mb": [{ "scroll-mb": I() }],
                "scroll-ml": [{ "scroll-ml": I() }],
                "scroll-p": [{ "scroll-p": I() }],
                "scroll-px": [{ "scroll-px": I() }],
                "scroll-py": [{ "scroll-py": I() }],
                "scroll-ps": [{ "scroll-ps": I() }],
                "scroll-pe": [{ "scroll-pe": I() }],
                "scroll-pt": [{ "scroll-pt": I() }],
                "scroll-pr": [{ "scroll-pr": I() }],
                "scroll-pb": [{ "scroll-pb": I() }],
                "scroll-pl": [{ "scroll-pl": I() }],
                "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", V] }],
                fill: [{ fill: [e, "none"] }],
                "stroke-w": [{ stroke: [Ut, gn, gl] }],
                stroke: [{ stroke: [e, "none"] }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl",
                ],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": [
                    "border-color-s",
                    "border-color-e",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l",
                ],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
                    "scroll-mt",
                    "scroll-mr",
                    "scroll-mb",
                    "scroll-ml",
                ],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": [
                    "scroll-px",
                    "scroll-py",
                    "scroll-ps",
                    "scroll-pe",
                    "scroll-pt",
                    "scroll-pr",
                    "scroll-pb",
                    "scroll-pl",
                ],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
    },
    sw = H1(iw);
function Gn(...e) {
    return sw(tg(e));
}
const aw = l1,
    mg = y.forwardRef(({ className: e, ...t }, n) =>
        u.jsx(Kp, {
            ref: n,
            className: Gn(
                "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
                e
            ),
            ...t,
        })
    );
mg.displayName = Kp.displayName;
const lw = ng(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
            },
        },
        defaultVariants: { variant: "default" },
    }
    ),
    pg = y.forwardRef(({ className: e, variant: t, ...n }, r) =>
        u.jsx(Gp, { ref: r, className: Gn(lw({ variant: t }), e), ...n })
    );
pg.displayName = Gp.displayName;
const uw = y.forwardRef(({ className: e, ...t }, n) =>
    u.jsx(Jp, {
        ref: n,
        className: Gn(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
            e
        ),
        ...t,
    })
);
uw.displayName = Jp.displayName;
const gg = y.forwardRef(({ className: e, ...t }, n) =>
    u.jsx(Zp, {
        ref: n,
        className: Gn(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
        ),
        "toast-close": "",
        ...t,
        children: u.jsx(Xs, { className: "h-4 w-4" }),
    })
);
gg.displayName = Zp.displayName;
const vg = y.forwardRef(({ className: e, ...t }, n) =>
    u.jsx(qp, { ref: n, className: Gn("text-sm font-semibold", e), ...t })
);
vg.displayName = qp.displayName;
const yg = y.forwardRef(({ className: e, ...t }, n) =>
    u.jsx(Xp, { ref: n, className: Gn("text-sm opacity-90", e), ...t })
);
yg.displayName = Xp.displayName;
function cw() {
    const { toasts: e } = px();
    return u.jsxs(aw, {
        children: [
            e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
                return u.jsxs(
                    pg,
                    {
                        ...i,
                        children: [
                            u.jsxs("div", {
                                className: "grid gap-1",
                                children: [n && u.jsx(vg, { children: n }), r && u.jsx(yg, { children: r })],
                            }),
                            o,
                            u.jsx(gg, {}),
                        ],
                    },
                    t
                );
            }),
            u.jsx(mg, {}),
        ],
    });
}
var Nf = ["light", "dark"],
    dw = "(prefers-color-scheme: dark)",
    fw = y.createContext(void 0),
    hw = { setTheme: (e) => {}, themes: [] },
    mw = () => {
        var e;
        return (e = y.useContext(fw)) != null ? e : hw;
    };
y.memo(
    ({
         forcedTheme: e,
         storageKey: t,
         attribute: n,
         enableSystem: r,
         enableColorScheme: o,
         defaultTheme: i,
         value: s,
         attrs: a,
         nonce: l,
     }) => {
        let c = i === "system",
            d =
                n === "class"
                    ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((b) => `'${b}'`).join(",")})`};`
                    : `var d=document.documentElement,n='${n}',s='setAttribute';`,
            f = o
                ? Nf.includes(i) && i
                    ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
                    : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
            p = (b, x = !1, w = !0) => {
                let v = s ? s[b] : b,
                    m = x ? b + "|| ''" : `'${v}'`,
                    g = "";
                return (
                    o && w && !x && Nf.includes(b) && (g += `d.style.colorScheme = '${b}';`),
                        n === "class" ? (x || v ? (g += `c.add(${m})`) : (g += "null")) : v && (g += `d[s](n,${m})`),
                        g
                );
            },
            h = e
                ? `!function(){${d}${p(e)}}()`
                : r
                    ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${dw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${c ? "" : "else{" + p(i, !1, !1) + "}"}${f}}catch(e){}}()`
                    : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(i, !1, !1)};}${f}}catch(t){}}();`;
        return y.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: h } });
    }
);
var pw = (e) => {
        switch (e) {
            case "success":
                return yw;
            case "info":
                return ww;
            case "warning":
                return xw;
            case "error":
                return bw;
            default:
                return null;
        }
    },
    gw = Array(12).fill(0),
    vw = ({ visible: e, className: t }) =>
        O.createElement(
            "div",
            { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e },
            O.createElement(
                "div",
                { className: "sonner-spinner" },
                gw.map((n, r) => O.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` }))
            )
        ),
    yw = O.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        O.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
        })
    ),
    xw = O.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" },
        O.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
        })
    ),
    ww = O.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        O.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
        })
    ),
    bw = O.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        O.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
        })
    ),
    kw = O.createElement(
        "svg",
        {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ),
    Cw = () => {
        let [e, t] = O.useState(document.hidden);
        return (
            O.useEffect(() => {
                let n = () => {
                    t(document.hidden);
                };
                return (
                    document.addEventListener("visibilitychange", n),
                        () => window.removeEventListener("visibilitychange", n)
                );
            }, []),
                e
        );
    },
    ku = 1,
    Sw = class {
        constructor() {
            (this.subscribe = (e) => (
                this.subscribers.push(e),
                    () => {
                        let t = this.subscribers.indexOf(e);
                        this.subscribers.splice(t, 1);
                    }
            )),
                (this.publish = (e) => {
                    this.subscribers.forEach((t) => t(e));
                }),
                (this.addToast = (e) => {
                    this.publish(e), (this.toasts = [...this.toasts, e]);
                }),
                (this.create = (e) => {
                    var t;
                    let { message: n, ...r } = e,
                        o =
                            typeof (e == null ? void 0 : e.id) == "number" ||
                            ((t = e.id) == null ? void 0 : t.length) > 0
                                ? e.id
                                : ku++,
                        i = this.toasts.find((a) => a.id === o),
                        s = e.dismissible === void 0 ? !0 : e.dismissible;
                    return (
                        this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
                            i
                                ? (this.toasts = this.toasts.map((a) =>
                                    a.id === o
                                        ? (this.publish({ ...a, ...e, id: o, title: n }),
                                            { ...a, ...e, id: o, dismissible: s, title: n })
                                        : a
                                ))
                                : this.addToast({ title: n, ...r, dismissible: s, id: o }),
                            o
                    );
                }),
                (this.dismiss = (e) => (
                    this.dismissedToasts.add(e),
                    e ||
                    this.toasts.forEach((t) => {
                        this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
                    }),
                        this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                        e
                )),
                (this.message = (e, t) => this.create({ ...t, message: e })),
                (this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
                (this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
                (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
                (this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
                (this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
                (this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    t.loading !== void 0 &&
                    (n = this.create({
                        ...t,
                        promise: e,
                        type: "loading",
                        message: t.loading,
                        description: typeof t.description != "function" ? t.description : void 0,
                    }));
                    let r = e instanceof Promise ? e : e(),
                        o = n !== void 0,
                        i,
                        s = r
                            .then(async (l) => {
                                if (((i = ["resolve", l]), O.isValidElement(l)))
                                    (o = !1), this.create({ id: n, type: "default", message: l });
                                else if (Ew(l) && !l.ok) {
                                    o = !1;
                                    let c =
                                            typeof t.error == "function"
                                                ? await t.error(`HTTP error! status: ${l.status}`)
                                                : t.error,
                                        d =
                                            typeof t.description == "function"
                                                ? await t.description(`HTTP error! status: ${l.status}`)
                                                : t.description;
                                    this.create({ id: n, type: "error", message: c, description: d });
                                } else if (t.success !== void 0) {
                                    o = !1;
                                    let c = typeof t.success == "function" ? await t.success(l) : t.success,
                                        d = typeof t.description == "function" ? await t.description(l) : t.description;
                                    this.create({ id: n, type: "success", message: c, description: d });
                                }
                            })
                            .catch(async (l) => {
                                if (((i = ["reject", l]), t.error !== void 0)) {
                                    o = !1;
                                    let c = typeof t.error == "function" ? await t.error(l) : t.error,
                                        d = typeof t.description == "function" ? await t.description(l) : t.description;
                                    this.create({ id: n, type: "error", message: c, description: d });
                                }
                            })
                            .finally(() => {
                                var l;
                                o && (this.dismiss(n), (n = void 0)), (l = t.finally) == null || l.call(t);
                            }),
                        a = () => new Promise((l, c) => s.then(() => (i[0] === "reject" ? c(i[1]) : l(i[1]))).catch(c));
                    return typeof n != "string" && typeof n != "number"
                        ? { unwrap: a }
                        : Object.assign(n, { unwrap: a });
                }),
                (this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || ku++;
                    return this.create({ jsx: e(n), id: n, ...t }), n;
                }),
                (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set());
        }
    },
    $e = new Sw(),
    Nw = (e, t) => {
        let n = (t == null ? void 0 : t.id) || ku++;
        return $e.addToast({ title: e, ...t, id: n }), n;
    },
    Ew = (e) =>
        e &&
        typeof e == "object" &&
        "ok" in e &&
        typeof e.ok == "boolean" &&
        "status" in e &&
        typeof e.status == "number",
    Tw = Nw,
    Pw = () => $e.toasts,
    jw = () => $e.getActiveToasts(),
    Ef = Object.assign(
        Tw,
        {
            success: $e.success,
            info: $e.info,
            warning: $e.warning,
            error: $e.error,
            custom: $e.custom,
            message: $e.message,
            promise: $e.promise,
            dismiss: $e.dismiss,
            loading: $e.loading,
        },
        { getHistory: Pw, getToasts: jw }
    );
function Rw(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    (r.type = "text/css"),
        t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
}
Rw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function is(e) {
    return e.label !== void 0;
}
var Mw = 3,
    Ow = "32px",
    Lw = "16px",
    Tf = 4e3,
    _w = 356,
    Dw = 14,
    Aw = 20,
    Iw = 200;
function gt(...e) {
    return e.filter(Boolean).join(" ");
}
function Fw(e) {
    let [t, n] = e.split("-"),
        r = [];
    return t && r.push(t), n && r.push(n), r;
}
var zw = (e) => {
    var t, n, r, o, i, s, a, l, c, d, f;
    let {
            invert: p,
            toast: h,
            unstyled: b,
            interacting: x,
            setHeights: w,
            visibleToasts: v,
            heights: m,
            index: g,
            toasts: k,
            expanded: C,
            removeToast: S,
            defaultRichColors: N,
            closeButton: j,
            style: L,
            cancelButtonStyle: M,
            actionButtonStyle: z,
            className: I = "",
            descriptionClassName: Q = "",
            duration: _,
            position: G,
            gap: $,
            loadingIcon: W,
            expandByDefault: T,
            classNames: P,
            icons: D,
            closeButtonAriaLabel: U = "Close toast",
            pauseWhenPageIsHidden: F,
        } = e,
        [Y, q] = O.useState(null),
        [ve, Te] = O.useState(null),
        [Z, kr] = O.useState(!1),
        [un, Xn] = O.useState(!1),
        [cn, Cr] = O.useState(!1),
        [dn, Ai] = O.useState(!1),
        [Aa, Ii] = O.useState(!1),
        [Ia, So] = O.useState(0),
        [Sr, Jc] = O.useState(0),
        No = O.useRef(h.duration || _ || Tf),
        Zc = O.useRef(null),
        Jn = O.useRef(null),
        P0 = g === 0,
        j0 = g + 1 <= v,
        nt = h.type,
        Nr = h.dismissible !== !1,
        R0 = h.className || "",
        M0 = h.descriptionClassName || "",
        Fi = O.useMemo(() => m.findIndex((H) => H.toastId === h.id) || 0, [m, h.id]),
        O0 = O.useMemo(() => {
            var H;
            return (H = h.closeButton) != null ? H : j;
        }, [h.closeButton, j]),
        ed = O.useMemo(() => h.duration || _ || Tf, [h.duration, _]),
        Fa = O.useRef(0),
        Er = O.useRef(0),
        td = O.useRef(0),
        Tr = O.useRef(null),
        [L0, _0] = G.split("-"),
        nd = O.useMemo(() => m.reduce((H, re, le) => (le >= Fi ? H : H + re.height), 0), [m, Fi]),
        rd = Cw(),
        D0 = h.invert || p,
        za = nt === "loading";
    (Er.current = O.useMemo(() => Fi * $ + nd, [Fi, nd])),
        O.useEffect(() => {
            No.current = ed;
        }, [ed]),
        O.useEffect(() => {
            kr(!0);
        }, []),
        O.useEffect(() => {
            let H = Jn.current;
            if (H) {
                let re = H.getBoundingClientRect().height;
                return (
                    Jc(re),
                        w((le) => [{ toastId: h.id, height: re, position: h.position }, ...le]),
                        () => w((le) => le.filter((ft) => ft.toastId !== h.id))
                );
            }
        }, [w, h.id]),
        O.useLayoutEffect(() => {
            if (!Z) return;
            let H = Jn.current,
                re = H.style.height;
            H.style.height = "auto";
            let le = H.getBoundingClientRect().height;
            (H.style.height = re),
                Jc(le),
                w((ft) =>
                    ft.find((ht) => ht.toastId === h.id)
                        ? ft.map((ht) => (ht.toastId === h.id ? { ...ht, height: le } : ht))
                        : [{ toastId: h.id, height: le, position: h.position }, ...ft]
                );
        }, [Z, h.title, h.description, w, h.id]);
    let fn = O.useCallback(() => {
        Xn(!0),
            So(Er.current),
            w((H) => H.filter((re) => re.toastId !== h.id)),
            setTimeout(() => {
                S(h);
            }, Iw);
    }, [h, S, w, Er]);
    O.useEffect(() => {
        if ((h.promise && nt === "loading") || h.duration === 1 / 0 || h.type === "loading") return;
        let H;
        return (
            C || x || (F && rd)
                ? (() => {
                    if (td.current < Fa.current) {
                        let re = new Date().getTime() - Fa.current;
                        No.current = No.current - re;
                    }
                    td.current = new Date().getTime();
                })()
                : No.current !== 1 / 0 &&
                ((Fa.current = new Date().getTime()),
                    (H = setTimeout(() => {
                        var re;
                        (re = h.onAutoClose) == null || re.call(h, h), fn();
                    }, No.current))),
                () => clearTimeout(H)
        );
    }, [C, x, h, nt, F, rd, fn]),
        O.useEffect(() => {
            h.delete && fn();
        }, [fn, h.delete]);
    function A0() {
        var H, re, le;
        return D != null && D.loading
            ? O.createElement(
                "div",
                {
                    className: gt(
                        P == null ? void 0 : P.loader,
                        (H = h == null ? void 0 : h.classNames) == null ? void 0 : H.loader,
                        "sonner-loader"
                    ),
                    "data-visible": nt === "loading",
                },
                D.loading
            )
            : W
                ? O.createElement(
                    "div",
                    {
                        className: gt(
                            P == null ? void 0 : P.loader,
                            (re = h == null ? void 0 : h.classNames) == null ? void 0 : re.loader,
                            "sonner-loader"
                        ),
                        "data-visible": nt === "loading",
                    },
                    W
                )
                : O.createElement(vw, {
                    className: gt(
                        P == null ? void 0 : P.loader,
                        (le = h == null ? void 0 : h.classNames) == null ? void 0 : le.loader
                    ),
                    visible: nt === "loading",
                });
    }
    return O.createElement(
        "li",
        {
            tabIndex: 0,
            ref: Jn,
            className: gt(
                I,
                R0,
                P == null ? void 0 : P.toast,
                (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
                P == null ? void 0 : P.default,
                P == null ? void 0 : P[nt],
                (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[nt]
            ),
            "data-sonner-toast": "",
            "data-rich-colors": (r = h.richColors) != null ? r : N,
            "data-styled": !(h.jsx || h.unstyled || b),
            "data-mounted": Z,
            "data-promise": !!h.promise,
            "data-swiped": Aa,
            "data-removed": un,
            "data-visible": j0,
            "data-y-position": L0,
            "data-x-position": _0,
            "data-index": g,
            "data-front": P0,
            "data-swiping": cn,
            "data-dismissible": Nr,
            "data-type": nt,
            "data-invert": D0,
            "data-swipe-out": dn,
            "data-swipe-direction": ve,
            "data-expanded": !!(C || (T && Z)),
            style: {
                "--index": g,
                "--toasts-before": g,
                "--z-index": k.length - g,
                "--offset": `${un ? Ia : Er.current}px`,
                "--initial-height": T ? "auto" : `${Sr}px`,
                ...L,
                ...h.style,
            },
            onDragEnd: () => {
                Cr(!1), q(null), (Tr.current = null);
            },
            onPointerDown: (H) => {
                za ||
                !Nr ||
                ((Zc.current = new Date()),
                    So(Er.current),
                    H.target.setPointerCapture(H.pointerId),
                H.target.tagName !== "BUTTON" && (Cr(!0), (Tr.current = { x: H.clientX, y: H.clientY })));
            },
            onPointerUp: () => {
                var H, re, le, ft;
                if (dn || !Nr) return;
                Tr.current = null;
                let ht = Number(
                    ((H = Jn.current) == null
                        ? void 0
                        : H.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0
                    ),
                    hn = Number(
                        ((re = Jn.current) == null
                            ? void 0
                            : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0
                    ),
                    Zn = new Date().getTime() - ((le = Zc.current) == null ? void 0 : le.getTime()),
                    mt = Y === "x" ? ht : hn,
                    mn = Math.abs(mt) / Zn;
                if (Math.abs(mt) >= Aw || mn > 0.11) {
                    So(Er.current),
                    (ft = h.onDismiss) == null || ft.call(h, h),
                        Te(Y === "x" ? (ht > 0 ? "right" : "left") : hn > 0 ? "down" : "up"),
                        fn(),
                        Ai(!0),
                        Ii(!1);
                    return;
                }
                Cr(!1), q(null);
            },
            onPointerMove: (H) => {
                var re, le, ft, ht;
                if (!Tr.current || !Nr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                    return;
                let hn = H.clientY - Tr.current.y,
                    Zn = H.clientX - Tr.current.x,
                    mt = (le = e.swipeDirections) != null ? le : Fw(G);
                !Y && (Math.abs(Zn) > 1 || Math.abs(hn) > 1) && q(Math.abs(Zn) > Math.abs(hn) ? "x" : "y");
                let mn = { x: 0, y: 0 };
                Y === "y"
                    ? (mt.includes("top") || mt.includes("bottom")) &&
                    ((mt.includes("top") && hn < 0) || (mt.includes("bottom") && hn > 0)) &&
                    (mn.y = hn)
                    : Y === "x" &&
                    (mt.includes("left") || mt.includes("right")) &&
                    ((mt.includes("left") && Zn < 0) || (mt.includes("right") && Zn > 0)) &&
                    (mn.x = Zn),
                (Math.abs(mn.x) > 0 || Math.abs(mn.y) > 0) && Ii(!0),
                (ft = Jn.current) == null || ft.style.setProperty("--swipe-amount-x", `${mn.x}px`),
                (ht = Jn.current) == null || ht.style.setProperty("--swipe-amount-y", `${mn.y}px`);
            },
        },
        O0 && !h.jsx
            ? O.createElement(
            "button",
            {
                "aria-label": U,
                "data-disabled": za,
                "data-close-button": !0,
                onClick:
                    za || !Nr
                        ? () => {}
                        : () => {
                            var H;
                            fn(), (H = h.onDismiss) == null || H.call(h, h);
                        },
                className: gt(
                    P == null ? void 0 : P.closeButton,
                    (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton
                ),
            },
            (i = D == null ? void 0 : D.close) != null ? i : kw
            )
            : null,
        h.jsx || y.isValidElement(h.title)
            ? h.jsx
            ? h.jsx
            : typeof h.title == "function"
                ? h.title()
                : h.title
            : O.createElement(
            O.Fragment,
            null,
            nt || h.icon || h.promise
                ? O.createElement(
                "div",
                {
                    "data-icon": "",
                    className: gt(
                        P == null ? void 0 : P.icon,
                        (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.icon
                    ),
                },
                h.promise || (h.type === "loading" && !h.icon) ? h.icon || A0() : null,
                h.type !== "loading" ? h.icon || (D == null ? void 0 : D[nt]) || pw(nt) : null
                )
                : null,
            O.createElement(
                "div",
                {
                    "data-content": "",
                    className: gt(
                        P == null ? void 0 : P.content,
                        (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content
                    ),
                },
                O.createElement(
                    "div",
                    {
                        "data-title": "",
                        className: gt(
                            P == null ? void 0 : P.title,
                            (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title
                        ),
                    },
                    typeof h.title == "function" ? h.title() : h.title
                ),
                h.description
                    ? O.createElement(
                    "div",
                    {
                        "data-description": "",
                        className: gt(
                            Q,
                            M0,
                            P == null ? void 0 : P.description,
                            (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.description
                        ),
                    },
                    typeof h.description == "function" ? h.description() : h.description
                    )
                    : null
            ),
            y.isValidElement(h.cancel)
                ? h.cancel
                : h.cancel && is(h.cancel)
                ? O.createElement(
                    "button",
                    {
                        "data-button": !0,
                        "data-cancel": !0,
                        style: h.cancelButtonStyle || M,
                        onClick: (H) => {
                            var re, le;
                            is(h.cancel) &&
                            Nr &&
                            ((le = (re = h.cancel).onClick) == null || le.call(re, H), fn());
                        },
                        className: gt(
                            P == null ? void 0 : P.cancelButton,
                            (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.cancelButton
                        ),
                    },
                    h.cancel.label
                )
                : null,
            y.isValidElement(h.action)
                ? h.action
                : h.action && is(h.action)
                ? O.createElement(
                    "button",
                    {
                        "data-button": !0,
                        "data-action": !0,
                        style: h.actionButtonStyle || z,
                        onClick: (H) => {
                            var re, le;
                            is(h.action) &&
                            ((le = (re = h.action).onClick) == null || le.call(re, H),
                            !H.defaultPrevented && fn());
                        },
                        className: gt(
                            P == null ? void 0 : P.actionButton,
                            (f = h == null ? void 0 : h.classNames) == null ? void 0 : f.actionButton
                        ),
                    },
                    h.action.label
                )
                : null
            )
    );
};
function Pf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function $w(e, t) {
    let n = {};
    return (
        [e, t].forEach((r, o) => {
            let i = o === 1,
                s = i ? "--mobile-offset" : "--offset",
                a = i ? Lw : Ow;
            function l(c) {
                ["top", "right", "bottom", "left"].forEach((d) => {
                    n[`${s}-${d}`] = typeof c == "number" ? `${c}px` : c;
                });
            }
            typeof r == "number" || typeof r == "string"
                ? l(r)
                : typeof r == "object"
                ? ["top", "right", "bottom", "left"].forEach((c) => {
                    r[c] === void 0
                        ? (n[`${s}-${c}`] = a)
                        : (n[`${s}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c]);
                })
                : l(a);
        }),
            n
    );
}
var Hw = y.forwardRef(function (e, t) {
    let {
            invert: n,
            position: r = "bottom-right",
            hotkey: o = ["altKey", "KeyT"],
            expand: i,
            closeButton: s,
            className: a,
            offset: l,
            mobileOffset: c,
            theme: d = "light",
            richColors: f,
            duration: p,
            style: h,
            visibleToasts: b = Mw,
            toastOptions: x,
            dir: w = Pf(),
            gap: v = Dw,
            loadingIcon: m,
            icons: g,
            containerAriaLabel: k = "Notifications",
            pauseWhenPageIsHidden: C,
        } = e,
        [S, N] = O.useState([]),
        j = O.useMemo(
            () => Array.from(new Set([r].concat(S.filter((F) => F.position).map((F) => F.position)))),
            [S, r]
        ),
        [L, M] = O.useState([]),
        [z, I] = O.useState(!1),
        [Q, _] = O.useState(!1),
        [G, $] = O.useState(
            d !== "system"
                ? d
                : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
        ),
        W = O.useRef(null),
        T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        P = O.useRef(null),
        D = O.useRef(!1),
        U = O.useCallback((F) => {
            N((Y) => {
                var q;
                return (
                    ((q = Y.find((ve) => ve.id === F.id)) != null && q.delete) || $e.dismiss(F.id),
                        Y.filter(({ id: ve }) => ve !== F.id)
                );
            });
        }, []);
    return (
        O.useEffect(
            () =>
                $e.subscribe((F) => {
                    if (F.dismiss) {
                        N((Y) => Y.map((q) => (q.id === F.id ? { ...q, delete: !0 } : q)));
                        return;
                    }
                    setTimeout(() => {
                        Ep.flushSync(() => {
                            N((Y) => {
                                let q = Y.findIndex((ve) => ve.id === F.id);
                                return q !== -1 ? [...Y.slice(0, q), { ...Y[q], ...F }, ...Y.slice(q + 1)] : [F, ...Y];
                            });
                        });
                    });
                }),
            []
        ),
            O.useEffect(() => {
                if (d !== "system") {
                    $(d);
                    return;
                }
                if (
                    (d === "system" &&
                    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? $("dark")
                        : $("light")),
                    typeof window > "u")
                )
                    return;
                let F = window.matchMedia("(prefers-color-scheme: dark)");
                try {
                    F.addEventListener("change", ({ matches: Y }) => {
                        $(Y ? "dark" : "light");
                    });
                } catch {
                    F.addListener(({ matches: q }) => {
                        try {
                            $(q ? "dark" : "light");
                        } catch (ve) {
                            console.error(ve);
                        }
                    });
                }
            }, [d]),
            O.useEffect(() => {
                S.length <= 1 && I(!1);
            }, [S]),
            O.useEffect(() => {
                let F = (Y) => {
                    var q, ve;
                    o.every((Te) => Y[Te] || Y.code === Te) && (I(!0), (q = W.current) == null || q.focus()),
                    Y.code === "Escape" &&
                    (document.activeElement === W.current ||
                        ((ve = W.current) != null && ve.contains(document.activeElement))) &&
                    I(!1);
                };
                return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
            }, [o]),
            O.useEffect(() => {
                if (W.current)
                    return () => {
                        P.current && (P.current.focus({ preventScroll: !0 }), (P.current = null), (D.current = !1));
                    };
            }, [W.current]),
            O.createElement(
                "section",
                {
                    ref: t,
                    "aria-label": `${k} ${T}`,
                    tabIndex: -1,
                    "aria-live": "polite",
                    "aria-relevant": "additions text",
                    "aria-atomic": "false",
                    suppressHydrationWarning: !0,
                },
                j.map((F, Y) => {
                    var q;
                    let [ve, Te] = F.split("-");
                    return S.length
                        ? O.createElement(
                            "ol",
                            {
                                key: F,
                                dir: w === "auto" ? Pf() : w,
                                tabIndex: -1,
                                ref: W,
                                className: a,
                                "data-sonner-toaster": !0,
                                "data-theme": G,
                                "data-y-position": ve,
                                "data-lifted": z && S.length > 1 && !i,
                                "data-x-position": Te,
                                style: {
                                    "--front-toast-height": `${((q = L[0]) == null ? void 0 : q.height) || 0}px`,
                                    "--width": `${_w}px`,
                                    "--gap": `${v}px`,
                                    ...h,
                                    ...$w(l, c),
                                },
                                onBlur: (Z) => {
                                    D.current &&
                                    !Z.currentTarget.contains(Z.relatedTarget) &&
                                    ((D.current = !1),
                                    P.current && (P.current.focus({ preventScroll: !0 }), (P.current = null)));
                                },
                                onFocus: (Z) => {
                                    (Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false") ||
                                    D.current ||
                                    ((D.current = !0), (P.current = Z.relatedTarget));
                                },
                                onMouseEnter: () => I(!0),
                                onMouseMove: () => I(!0),
                                onMouseLeave: () => {
                                    Q || I(!1);
                                },
                                onDragEnd: () => I(!1),
                                onPointerDown: (Z) => {
                                    (Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false") ||
                                    _(!0);
                                },
                                onPointerUp: () => _(!1),
                            },
                            S.filter((Z) => (!Z.position && Y === 0) || Z.position === F).map((Z, kr) => {
                                var un, Xn;
                                return O.createElement(zw, {
                                    key: Z.id,
                                    icons: g,
                                    index: kr,
                                    toast: Z,
                                    defaultRichColors: f,
                                    duration: (un = x == null ? void 0 : x.duration) != null ? un : p,
                                    className: x == null ? void 0 : x.className,
                                    descriptionClassName: x == null ? void 0 : x.descriptionClassName,
                                    invert: n,
                                    visibleToasts: b,
                                    closeButton: (Xn = x == null ? void 0 : x.closeButton) != null ? Xn : s,
                                    interacting: Q,
                                    position: F,
                                    style: x == null ? void 0 : x.style,
                                    unstyled: x == null ? void 0 : x.unstyled,
                                    classNames: x == null ? void 0 : x.classNames,
                                    cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                                    actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                                    removeToast: U,
                                    toasts: S.filter((cn) => cn.position == Z.position),
                                    heights: L.filter((cn) => cn.position == Z.position),
                                    setHeights: M,
                                    expandByDefault: i,
                                    gap: v,
                                    loadingIcon: m,
                                    expanded: z,
                                    pauseWhenPageIsHidden: C,
                                    swipeDirections: e.swipeDirections,
                                });
                            })
                        )
                        : null;
                })
            )
    );
});
const Bw = ({ ...e }) => {
        const { theme: t = "system" } = mw();
        return u.jsx(Hw, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            },
            ...e,
        });
    },
    Ww = ["top", "right", "bottom", "left"],
    Wn = Math.min,
    Ke = Math.max,
    Js = Math.round,
    ss = Math.floor,
    Ht = (e) => ({ x: e, y: e }),
    Uw = { left: "right", right: "left", bottom: "top", top: "bottom" },
    Vw = { start: "end", end: "start" };
function Cu(e, t, n) {
    return Ke(e, Wn(t, n));
}
function rn(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function on(e) {
    return e.split("-")[0];
}
function wo(e) {
    return e.split("-")[1];
}
function Ac(e) {
    return e === "x" ? "y" : "x";
}
function Ic(e) {
    return e === "y" ? "height" : "width";
}
const Qw = new Set(["top", "bottom"]);
function Ft(e) {
    return Qw.has(on(e)) ? "y" : "x";
}
function Fc(e) {
    return Ac(Ft(e));
}
function Yw(e, t, n) {
    n === void 0 && (n = !1);
    const r = wo(e),
        o = Fc(e),
        i = Ic(o);
    let s = o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Zs(s)), [s, Zs(s)];
}
function Kw(e) {
    const t = Zs(e);
    return [Su(e), t, Su(t)];
}
function Su(e) {
    return e.replace(/start|end/g, (t) => Vw[t]);
}
const jf = ["left", "right"],
    Rf = ["right", "left"],
    Gw = ["top", "bottom"],
    qw = ["bottom", "top"];
function Xw(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? Rf : jf) : t ? jf : Rf;
        case "left":
        case "right":
            return t ? Gw : qw;
        default:
            return [];
    }
}
function Jw(e, t, n, r) {
    const o = wo(e);
    let i = Xw(on(e), n === "start", r);
    return o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Su)))), i;
}
function Zs(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Uw[t]);
}
function Zw(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function xg(e) {
    return typeof e != "number" ? Zw(e) : { top: e, right: e, bottom: e, left: e };
}
function ea(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function Mf(e, t, n) {
    let { reference: r, floating: o } = e;
    const i = Ft(t),
        s = Fc(t),
        a = Ic(s),
        l = on(t),
        c = i === "y",
        d = r.x + r.width / 2 - o.width / 2,
        f = r.y + r.height / 2 - o.height / 2,
        p = r[a] / 2 - o[a] / 2;
    let h;
    switch (l) {
        case "top":
            h = { x: d, y: r.y - o.height };
            break;
        case "bottom":
            h = { x: d, y: r.y + r.height };
            break;
        case "right":
            h = { x: r.x + r.width, y: f };
            break;
        case "left":
            h = { x: r.x - o.width, y: f };
            break;
        default:
            h = { x: r.x, y: r.y };
    }
    switch (wo(t)) {
        case "start":
            h[s] -= p * (n && c ? -1 : 1);
            break;
        case "end":
            h[s] += p * (n && c ? -1 : 1);
            break;
    }
    return h;
}
const eb = async (e, t, n) => {
    const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n,
        a = i.filter(Boolean),
        l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: d, y: f } = Mf(c, r, l),
        p = r,
        h = {},
        b = 0;
    for (let x = 0; x < a.length; x++) {
        const { name: w, fn: v } = a[x],
            {
                x: m,
                y: g,
                data: k,
                reset: C,
            } = await v({
                x: d,
                y: f,
                initialPlacement: r,
                placement: p,
                strategy: o,
                middlewareData: h,
                rects: c,
                platform: s,
                elements: { reference: e, floating: t },
            });
        (d = m ?? d),
            (f = g ?? f),
            (h = { ...h, [w]: { ...h[w], ...k } }),
        C &&
        b <= 50 &&
        (b++,
        typeof C == "object" &&
        (C.placement && (p = C.placement),
        C.rects &&
        (c =
            C.rects === !0
                ? await s.getElementRects({ reference: e, floating: t, strategy: o })
                : C.rects),
            ({ x: d, y: f } = Mf(c, p, l))),
            (x = -1));
    }
    return { x: d, y: f, placement: p, strategy: o, middlewareData: h };
};
async function yi(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
        {
            boundary: c = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: f = "floating",
            altBoundary: p = !1,
            padding: h = 0,
        } = rn(t, e),
        b = xg(h),
        w = a[p ? (f === "floating" ? "reference" : "floating") : f],
        v = ea(
            await i.getClippingRect({
                element:
                    (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n
                        ? w
                        : w.contextElement ||
                        (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
                boundary: c,
                rootBoundary: d,
                strategy: l,
            })
        ),
        m = f === "floating" ? { x: r, y: o, width: s.floating.width, height: s.floating.height } : s.reference,
        g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
        k = (await (i.isElement == null ? void 0 : i.isElement(g)))
            ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        C = ea(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: m,
                    offsetParent: g,
                    strategy: l,
                })
                : m
        );
    return {
        top: (v.top - C.top + b.top) / k.y,
        bottom: (C.bottom - v.bottom + b.bottom) / k.y,
        left: (v.left - C.left + b.left) / k.x,
        right: (C.right - v.right + b.right) / k.x,
    };
}
const tb = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const { x: n, y: r, placement: o, rects: i, platform: s, elements: a, middlewareData: l } = t,
                { element: c, padding: d = 0 } = rn(e, t) || {};
            if (c == null) return {};
            const f = xg(d),
                p = { x: n, y: r },
                h = Fc(o),
                b = Ic(h),
                x = await s.getDimensions(c),
                w = h === "y",
                v = w ? "top" : "left",
                m = w ? "bottom" : "right",
                g = w ? "clientHeight" : "clientWidth",
                k = i.reference[b] + i.reference[h] - p[h] - i.floating[b],
                C = p[h] - i.reference[h],
                S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
            let N = S ? S[g] : 0;
            (!N || !(await (s.isElement == null ? void 0 : s.isElement(S)))) && (N = a.floating[g] || i.floating[b]);
            const j = k / 2 - C / 2,
                L = N / 2 - x[b] / 2 - 1,
                M = Wn(f[v], L),
                z = Wn(f[m], L),
                I = M,
                Q = N - x[b] - z,
                _ = N / 2 - x[b] / 2 + j,
                G = Cu(I, _, Q),
                $ = !l.arrow && wo(o) != null && _ !== G && i.reference[b] / 2 - (_ < I ? M : z) - x[b] / 2 < 0,
                W = $ ? (_ < I ? _ - I : _ - Q) : 0;
            return {
                [h]: p[h] + W,
                data: { [h]: G, centerOffset: _ - G - W, ...($ && { alignmentOffset: W }) },
                reset: $,
            };
        },
    }),
    nb = function (e) {
        return (
            e === void 0 && (e = {}),
                {
                    name: "flip",
                    options: e,
                    async fn(t) {
                        var n, r;
                        const {
                                placement: o,
                                middlewareData: i,
                                rects: s,
                                initialPlacement: a,
                                platform: l,
                                elements: c,
                            } = t,
                            {
                                mainAxis: d = !0,
                                crossAxis: f = !0,
                                fallbackPlacements: p,
                                fallbackStrategy: h = "bestFit",
                                fallbackAxisSideDirection: b = "none",
                                flipAlignment: x = !0,
                                ...w
                            } = rn(e, t);
                        if ((n = i.arrow) != null && n.alignmentOffset) return {};
                        const v = on(o),
                            m = Ft(a),
                            g = on(a) === a,
                            k = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
                            C = p || (g || !x ? [Zs(a)] : Kw(a)),
                            S = b !== "none";
                        !p && S && C.push(...Jw(a, x, b, k));
                        const N = [a, ...C],
                            j = await yi(t, w),
                            L = [];
                        let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                        if ((d && L.push(j[v]), f)) {
                            const _ = Yw(o, s, k);
                            L.push(j[_[0]], j[_[1]]);
                        }
                        if (((M = [...M, { placement: o, overflows: L }]), !L.every((_) => _ <= 0))) {
                            var z, I;
                            const _ = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
                                G = N[_];
                            if (
                                G &&
                                (!(f === "alignment" ? m !== Ft(G) : !1) ||
                                    M.every((T) => T.overflows[0] > 0 && Ft(T.placement) === m))
                            )
                                return { data: { index: _, overflows: M }, reset: { placement: G } };
                            let $ =
                                (I = M.filter((W) => W.overflows[0] <= 0).sort(
                                    (W, T) => W.overflows[1] - T.overflows[1]
                                )[0]) == null
                                    ? void 0
                                    : I.placement;
                            if (!$)
                                switch (h) {
                                    case "bestFit": {
                                        var Q;
                                        const W =
                                            (Q = M.filter((T) => {
                                                if (S) {
                                                    const P = Ft(T.placement);
                                                    return P === m || P === "y";
                                                }
                                                return !0;
                                            })
                                                .map((T) => [
                                                    T.placement,
                                                    T.overflows.filter((P) => P > 0).reduce((P, D) => P + D, 0),
                                                ])
                                                .sort((T, P) => T[1] - P[1])[0]) == null
                                                ? void 0
                                                : Q[0];
                                        W && ($ = W);
                                        break;
                                    }
                                    case "initialPlacement":
                                        $ = a;
                                        break;
                                }
                            if (o !== $) return { reset: { placement: $ } };
                        }
                        return {};
                    },
                }
        );
    };
function Of(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Lf(e) {
    return Ww.some((t) => e[t] >= 0);
}
const rb = function (e) {
        return (
            e === void 0 && (e = {}),
                {
                    name: "hide",
                    options: e,
                    async fn(t) {
                        const { rects: n } = t,
                            { strategy: r = "referenceHidden", ...o } = rn(e, t);
                        switch (r) {
                            case "referenceHidden": {
                                const i = await yi(t, { ...o, elementContext: "reference" }),
                                    s = Of(i, n.reference);
                                return { data: { referenceHiddenOffsets: s, referenceHidden: Lf(s) } };
                            }
                            case "escaped": {
                                const i = await yi(t, { ...o, altBoundary: !0 }),
                                    s = Of(i, n.floating);
                                return { data: { escapedOffsets: s, escaped: Lf(s) } };
                            }
                            default:
                                return {};
                        }
                    },
                }
        );
    },
    wg = new Set(["left", "top"]);
async function ob(e, t) {
    const { placement: n, platform: r, elements: o } = e,
        i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        s = on(n),
        a = wo(n),
        l = Ft(n) === "y",
        c = wg.has(s) ? -1 : 1,
        d = i && l ? -1 : 1,
        f = rn(t, e);
    let {
        mainAxis: p,
        crossAxis: h,
        alignmentAxis: b,
    } = typeof f == "number"
        ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
    return (
        a && typeof b == "number" && (h = a === "end" ? b * -1 : b), l ? { x: h * d, y: p * c } : { x: p * c, y: h * d }
    );
}
const ib = function (e) {
        return (
            e === void 0 && (e = 0),
                {
                    name: "offset",
                    options: e,
                    async fn(t) {
                        var n, r;
                        const { x: o, y: i, placement: s, middlewareData: a } = t,
                            l = await ob(t, e);
                        return s === ((n = a.offset) == null ? void 0 : n.placement) &&
                        (r = a.arrow) != null &&
                        r.alignmentOffset
                            ? {}
                            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
                    },
                }
        );
    },
    sb = function (e) {
        return (
            e === void 0 && (e = {}),
                {
                    name: "shift",
                    options: e,
                    async fn(t) {
                        const { x: n, y: r, placement: o } = t,
                            {
                                mainAxis: i = !0,
                                crossAxis: s = !1,
                                limiter: a = {
                                    fn: (w) => {
                                        let { x: v, y: m } = w;
                                        return { x: v, y: m };
                                    },
                                },
                                ...l
                            } = rn(e, t),
                            c = { x: n, y: r },
                            d = await yi(t, l),
                            f = Ft(on(o)),
                            p = Ac(f);
                        let h = c[p],
                            b = c[f];
                        if (i) {
                            const w = p === "y" ? "top" : "left",
                                v = p === "y" ? "bottom" : "right",
                                m = h + d[w],
                                g = h - d[v];
                            h = Cu(m, h, g);
                        }
                        if (s) {
                            const w = f === "y" ? "top" : "left",
                                v = f === "y" ? "bottom" : "right",
                                m = b + d[w],
                                g = b - d[v];
                            b = Cu(m, b, g);
                        }
                        const x = a.fn({ ...t, [p]: h, [f]: b });
                        return { ...x, data: { x: x.x - n, y: x.y - r, enabled: { [p]: i, [f]: s } } };
                    },
                }
        );
    },
    ab = function (e) {
        return (
            e === void 0 && (e = {}),
                {
                    options: e,
                    fn(t) {
                        const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
                            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = rn(e, t),
                            d = { x: n, y: r },
                            f = Ft(o),
                            p = Ac(f);
                        let h = d[p],
                            b = d[f];
                        const x = rn(a, t),
                            w = typeof x == "number" ? { mainAxis: x, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x };
                        if (l) {
                            const g = p === "y" ? "height" : "width",
                                k = i.reference[p] - i.floating[g] + w.mainAxis,
                                C = i.reference[p] + i.reference[g] - w.mainAxis;
                            h < k ? (h = k) : h > C && (h = C);
                        }
                        if (c) {
                            var v, m;
                            const g = p === "y" ? "width" : "height",
                                k = wg.has(on(o)),
                                C =
                                    i.reference[f] -
                                    i.floating[g] +
                                    ((k && ((v = s.offset) == null ? void 0 : v[f])) || 0) +
                                    (k ? 0 : w.crossAxis),
                                S =
                                    i.reference[f] +
                                    i.reference[g] +
                                    (k ? 0 : ((m = s.offset) == null ? void 0 : m[f]) || 0) -
                                    (k ? w.crossAxis : 0);
                            b < C ? (b = C) : b > S && (b = S);
                        }
                        return { [p]: h, [f]: b };
                    },
                }
        );
    },
    lb = function (e) {
        return (
            e === void 0 && (e = {}),
                {
                    name: "size",
                    options: e,
                    async fn(t) {
                        var n, r;
                        const { placement: o, rects: i, platform: s, elements: a } = t,
                            { apply: l = () => {}, ...c } = rn(e, t),
                            d = await yi(t, c),
                            f = on(o),
                            p = wo(o),
                            h = Ft(o) === "y",
                            { width: b, height: x } = i.floating;
                        let w, v;
                        f === "top" || f === "bottom"
                            ? ((w = f),
                                (v =
                                    p === ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating))) ? "start" : "end")
                                        ? "left"
                                        : "right"))
                            : ((v = f), (w = p === "end" ? "top" : "bottom"));
                        const m = x - d.top - d.bottom,
                            g = b - d.left - d.right,
                            k = Wn(x - d[w], m),
                            C = Wn(b - d[v], g),
                            S = !t.middlewareData.shift;
                        let N = k,
                            j = C;
                        if (
                            ((n = t.middlewareData.shift) != null && n.enabled.x && (j = g),
                            (r = t.middlewareData.shift) != null && r.enabled.y && (N = m),
                            S && !p)
                        ) {
                            const M = Ke(d.left, 0),
                                z = Ke(d.right, 0),
                                I = Ke(d.top, 0),
                                Q = Ke(d.bottom, 0);
                            h
                                ? (j = b - 2 * (M !== 0 || z !== 0 ? M + z : Ke(d.left, d.right)))
                                : (N = x - 2 * (I !== 0 || Q !== 0 ? I + Q : Ke(d.top, d.bottom)));
                        }
                        await l({ ...t, availableWidth: j, availableHeight: N });
                        const L = await s.getDimensions(a.floating);
                        return b !== L.width || x !== L.height ? { reset: { rects: !0 } } : {};
                    },
                }
        );
    };
function Ea() {
    return typeof window < "u";
}
function bo(e) {
    return bg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wt(e) {
    var t;
    return (t = (bg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function bg(e) {
    return Ea() ? e instanceof Node || e instanceof Xe(e).Node : !1;
}
function Tt(e) {
    return Ea() ? e instanceof Element || e instanceof Xe(e).Element : !1;
}
function Bt(e) {
    return Ea() ? e instanceof HTMLElement || e instanceof Xe(e).HTMLElement : !1;
}
function _f(e) {
    return !Ea() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xe(e).ShadowRoot;
}
const ub = new Set(["inline", "contents"]);
function Oi(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Pt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ub.has(o);
}
const cb = new Set(["table", "td", "th"]);
function db(e) {
    return cb.has(bo(e));
}
const fb = [":popover-open", ":modal"];
function Ta(e) {
    return fb.some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
const hb = ["transform", "translate", "scale", "rotate", "perspective"],
    mb = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    pb = ["paint", "layout", "strict", "content"];
function zc(e) {
    const t = $c(),
        n = Tt(e) ? Pt(e) : e;
    return (
        hb.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        mb.some((r) => (n.willChange || "").includes(r)) ||
        pb.some((r) => (n.contain || "").includes(r))
    );
}
function gb(e) {
    let t = Un(e);
    for (; Bt(t) && !ho(t); ) {
        if (zc(t)) return t;
        if (Ta(t)) return null;
        t = Un(t);
    }
    return null;
}
function $c() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const vb = new Set(["html", "body", "#document"]);
function ho(e) {
    return vb.has(bo(e));
}
function Pt(e) {
    return Xe(e).getComputedStyle(e);
}
function Pa(e) {
    return Tt(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Un(e) {
    if (bo(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (_f(e) && e.host) || Wt(e);
    return _f(t) ? t.host : t;
}
function kg(e) {
    const t = Un(e);
    return ho(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Bt(t) && Oi(t) ? t : kg(t);
}
function xi(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = kg(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = Xe(o);
    if (i) {
        const a = Nu(s);
        return t.concat(s, s.visualViewport || [], Oi(o) ? o : [], a && n ? xi(a) : []);
    }
    return t.concat(o, xi(o, [], n));
}
function Nu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Cg(e) {
    const t = Pt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Bt(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        a = Js(n) !== i || Js(r) !== s;
    return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function Hc(e) {
    return Tt(e) ? e : e.contextElement;
}
function Gr(e) {
    const t = Hc(e);
    if (!Bt(t)) return Ht(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: o, $: i } = Cg(t);
    let s = (i ? Js(n.width) : n.width) / r,
        a = (i ? Js(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: s, y: a };
}
const yb = Ht(0);
function Sg(e) {
    const t = Xe(e);
    return !$c() || !t.visualViewport ? yb : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function xb(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== Xe(e)) ? !1 : t;
}
function xr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = Hc(e);
    let s = Ht(1);
    t && (r ? Tt(r) && (s = Gr(r)) : (s = Gr(e)));
    const a = xb(i, n, r) ? Sg(i) : Ht(0);
    let l = (o.left + a.x) / s.x,
        c = (o.top + a.y) / s.y,
        d = o.width / s.x,
        f = o.height / s.y;
    if (i) {
        const p = Xe(i),
            h = r && Tt(r) ? Xe(r) : r;
        let b = p,
            x = Nu(b);
        for (; x && r && h !== b; ) {
            const w = Gr(x),
                v = x.getBoundingClientRect(),
                m = Pt(x),
                g = v.left + (x.clientLeft + parseFloat(m.paddingLeft)) * w.x,
                k = v.top + (x.clientTop + parseFloat(m.paddingTop)) * w.y;
            (l *= w.x), (c *= w.y), (d *= w.x), (f *= w.y), (l += g), (c += k), (b = Xe(x)), (x = Nu(b));
        }
    }
    return ea({ width: d, height: f, x: l, y: c });
}
function Bc(e, t) {
    const n = Pa(e).scrollLeft;
    return t ? t.left + n : xr(Wt(e)).left + n;
}
function Ng(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : Bc(e, r)),
        i = r.top + t.scrollTop;
    return { x: o, y: i };
}
function wb(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = o === "fixed",
        s = Wt(r),
        a = t ? Ta(t.floating) : !1;
    if (r === s || (a && i)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
        c = Ht(1);
    const d = Ht(0),
        f = Bt(r);
    if ((f || (!f && !i)) && ((bo(r) !== "body" || Oi(s)) && (l = Pa(r)), Bt(r))) {
        const h = xr(r);
        (c = Gr(r)), (d.x = h.x + r.clientLeft), (d.y = h.y + r.clientTop);
    }
    const p = s && !f && !i ? Ng(s, l, !0) : Ht(0);
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - l.scrollLeft * c.x + d.x + p.x,
        y: n.y * c.y - l.scrollTop * c.y + d.y + p.y,
    };
}
function bb(e) {
    return Array.from(e.getClientRects());
}
function kb(e) {
    const t = Wt(e),
        n = Pa(e),
        r = e.ownerDocument.body,
        o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Bc(e);
    const a = -n.scrollTop;
    return (
        Pt(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: s, y: a }
    );
}
function Cb(e, t) {
    const n = Xe(e),
        r = Wt(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        l = 0;
    if (o) {
        (i = o.width), (s = o.height);
        const c = $c();
        (!c || (c && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
    }
    return { width: i, height: s, x: a, y: l };
}
const Sb = new Set(["absolute", "fixed"]);
function Nb(e, t) {
    const n = xr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = Bt(e) ? Gr(e) : Ht(1),
        s = e.clientWidth * i.x,
        a = e.clientHeight * i.y,
        l = o * i.x,
        c = r * i.y;
    return { width: s, height: a, x: l, y: c };
}
function Df(e, t, n) {
    let r;
    if (t === "viewport") r = Cb(e, n);
    else if (t === "document") r = kb(Wt(e));
    else if (Tt(t)) r = Nb(t, n);
    else {
        const o = Sg(e);
        r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
    }
    return ea(r);
}
function Eg(e, t) {
    const n = Un(e);
    return n === t || !Tt(n) || ho(n) ? !1 : Pt(n).position === "fixed" || Eg(n, t);
}
function Eb(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = xi(e, [], !1).filter((a) => Tt(a) && bo(a) !== "body"),
        o = null;
    const i = Pt(e).position === "fixed";
    let s = i ? Un(e) : e;
    for (; Tt(s) && !ho(s); ) {
        const a = Pt(s),
            l = zc(s);
        !l && a.position === "fixed" && (o = null),
            (i ? !l && !o : (!l && a.position === "static" && !!o && Sb.has(o.position)) || (Oi(s) && !l && Eg(e, s)))
                ? (r = r.filter((d) => d !== s))
                : (o = a),
            (s = Un(s));
    }
    return t.set(e, r), r;
}
function Tb(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const s = [...(n === "clippingAncestors" ? (Ta(t) ? [] : Eb(t, this._c)) : [].concat(n)), r],
        a = s[0],
        l = s.reduce(
            (c, d) => {
                const f = Df(t, d, o);
                return (
                    (c.top = Ke(f.top, c.top)),
                        (c.right = Wn(f.right, c.right)),
                        (c.bottom = Wn(f.bottom, c.bottom)),
                        (c.left = Ke(f.left, c.left)),
                        c
                );
            },
            Df(t, a, o)
        );
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}
function Pb(e) {
    const { width: t, height: n } = Cg(e);
    return { width: t, height: n };
}
function jb(e, t, n) {
    const r = Bt(t),
        o = Wt(t),
        i = n === "fixed",
        s = xr(e, !0, i, t);
    let a = { scrollLeft: 0, scrollTop: 0 };
    const l = Ht(0);
    function c() {
        l.x = Bc(o);
    }
    if (r || (!r && !i))
        if (((bo(t) !== "body" || Oi(o)) && (a = Pa(t)), r)) {
            const h = xr(t, !0, i, t);
            (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
        } else o && c();
    i && !r && o && c();
    const d = o && !r && !i ? Ng(o, a) : Ht(0),
        f = s.left + a.scrollLeft - l.x - d.x,
        p = s.top + a.scrollTop - l.y - d.y;
    return { x: f, y: p, width: s.width, height: s.height };
}
function vl(e) {
    return Pt(e).position === "static";
}
function Af(e, t) {
    if (!Bt(e) || Pt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Wt(e) === n && (n = n.ownerDocument.body), n;
}
function Tg(e, t) {
    const n = Xe(e);
    if (Ta(e)) return n;
    if (!Bt(e)) {
        let o = Un(e);
        for (; o && !ho(o); ) {
            if (Tt(o) && !vl(o)) return o;
            o = Un(o);
        }
        return n;
    }
    let r = Af(e, t);
    for (; r && db(r) && vl(r); ) r = Af(r, t);
    return r && ho(r) && vl(r) && !zc(r) ? n : r || gb(e) || n;
}
const Rb = async function (e) {
    const t = this.getOffsetParent || Tg,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: jb(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function Mb(e) {
    return Pt(e).direction === "rtl";
}
const Ob = {
    convertOffsetParentRelativeRectToViewportRelativeRect: wb,
    getDocumentElement: Wt,
    getClippingRect: Tb,
    getOffsetParent: Tg,
    getElementRects: Rb,
    getClientRects: bb,
    getDimensions: Pb,
    getScale: Gr,
    isElement: Tt,
    isRTL: Mb,
};
function Pg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Lb(e, t) {
    let n = null,
        r;
    const o = Wt(e);
    function i() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
    }
    function s(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), i();
        const c = e.getBoundingClientRect(),
            { left: d, top: f, width: p, height: h } = c;
        if ((a || t(), !p || !h)) return;
        const b = ss(f),
            x = ss(o.clientWidth - (d + p)),
            w = ss(o.clientHeight - (f + h)),
            v = ss(d),
            g = { rootMargin: -b + "px " + -x + "px " + -w + "px " + -v + "px", threshold: Ke(0, Wn(1, l)) || 1 };
        let k = !0;
        function C(S) {
            const N = S[0].intersectionRatio;
            if (N !== l) {
                if (!k) return s();
                N
                    ? s(!1, N)
                    : (r = setTimeout(() => {
                        s(!1, 1e-7);
                    }, 1e3));
            }
            N === 1 && !Pg(c, e.getBoundingClientRect()) && s(), (k = !1);
        }
        try {
            n = new IntersectionObserver(C, { ...g, root: o.ownerDocument });
        } catch {
            n = new IntersectionObserver(C, g);
        }
        n.observe(e);
    }
    return s(!0), i;
}
function _b(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: s = typeof ResizeObserver == "function",
            layoutShift: a = typeof IntersectionObserver == "function",
            animationFrame: l = !1,
        } = r,
        c = Hc(e),
        d = o || i ? [...(c ? xi(c) : []), ...xi(t)] : [];
    d.forEach((v) => {
        o && v.addEventListener("scroll", n, { passive: !0 }), i && v.addEventListener("resize", n);
    });
    const f = c && a ? Lb(c, n) : null;
    let p = -1,
        h = null;
    s &&
    ((h = new ResizeObserver((v) => {
        let [m] = v;
        m &&
        m.target === c &&
        h &&
        (h.unobserve(t),
            cancelAnimationFrame(p),
            (p = requestAnimationFrame(() => {
                var g;
                (g = h) == null || g.observe(t);
            }))),
            n();
    })),
    c && !l && h.observe(c),
        h.observe(t));
    let b,
        x = l ? xr(e) : null;
    l && w();
    function w() {
        const v = xr(e);
        x && !Pg(x, v) && n(), (x = v), (b = requestAnimationFrame(w));
    }
    return (
        n(),
            () => {
                var v;
                d.forEach((m) => {
                    o && m.removeEventListener("scroll", n), i && m.removeEventListener("resize", n);
                }),
                f == null || f(),
                (v = h) == null || v.disconnect(),
                    (h = null),
                l && cancelAnimationFrame(b);
            }
    );
}
const Db = ib,
    Ab = sb,
    Ib = nb,
    Fb = lb,
    zb = rb,
    If = tb,
    $b = ab,
    Hb = (e, t, n) => {
        const r = new Map(),
            o = { platform: Ob, ...n },
            i = { ...o.platform, _c: r };
        return eb(e, t, { ...o, platform: i });
    };
var Bb = typeof document < "u",
    Wb = function () {},
    Cs = Bb ? y.useLayoutEffect : Wb;
function ta(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!ta(e[r], t[r])) return !1;
            return !0;
        }
        if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
        for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !ta(e[i], t[i])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function jg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ff(e, t) {
    const n = jg(e);
    return Math.round(t * n) / n;
}
function yl(e) {
    const t = y.useRef(e);
    return (
        Cs(() => {
            t.current = e;
        }),
            t
    );
}
function Ub(e) {
    e === void 0 && (e = {});
    const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: o,
            elements: { reference: i, floating: s } = {},
            transform: a = !0,
            whileElementsMounted: l,
            open: c,
        } = e,
        [d, f] = y.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [p, h] = y.useState(r);
    ta(p, r) || h(r);
    const [b, x] = y.useState(null),
        [w, v] = y.useState(null),
        m = y.useCallback((T) => {
            T !== S.current && ((S.current = T), x(T));
        }, []),
        g = y.useCallback((T) => {
            T !== N.current && ((N.current = T), v(T));
        }, []),
        k = i || b,
        C = s || w,
        S = y.useRef(null),
        N = y.useRef(null),
        j = y.useRef(d),
        L = l != null,
        M = yl(l),
        z = yl(o),
        I = yl(c),
        Q = y.useCallback(() => {
            if (!S.current || !N.current) return;
            const T = { placement: t, strategy: n, middleware: p };
            z.current && (T.platform = z.current),
                Hb(S.current, N.current, T).then((P) => {
                    const D = { ...P, isPositioned: I.current !== !1 };
                    _.current &&
                    !ta(j.current, D) &&
                    ((j.current = D),
                        Ri.flushSync(() => {
                            f(D);
                        }));
                });
        }, [p, t, n, z, I]);
    Cs(() => {
        c === !1 && j.current.isPositioned && ((j.current.isPositioned = !1), f((T) => ({ ...T, isPositioned: !1 })));
    }, [c]);
    const _ = y.useRef(!1);
    Cs(
        () => (
            (_.current = !0),
                () => {
                    _.current = !1;
                }
        ),
        []
    ),
        Cs(() => {
            if ((k && (S.current = k), C && (N.current = C), k && C)) {
                if (M.current) return M.current(k, C, Q);
                Q();
            }
        }, [k, C, Q, M, L]);
    const G = y.useMemo(() => ({ reference: S, floating: N, setReference: m, setFloating: g }), [m, g]),
        $ = y.useMemo(() => ({ reference: k, floating: C }), [k, C]),
        W = y.useMemo(() => {
            const T = { position: n, left: 0, top: 0 };
            if (!$.floating) return T;
            const P = Ff($.floating, d.x),
                D = Ff($.floating, d.y);
            return a
                ? {
                    ...T,
                    transform: "translate(" + P + "px, " + D + "px)",
                    ...(jg($.floating) >= 1.5 && { willChange: "transform" }),
                }
                : { position: n, left: P, top: D };
        }, [n, a, $.floating, d.x, d.y]);
    return y.useMemo(() => ({ ...d, update: Q, refs: G, elements: $, floatingStyles: W }), [d, Q, G, $, W]);
}
const Vb = (e) => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current");
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
                return r && t(r)
                    ? r.current != null
                        ? If({ element: r.current, padding: o }).fn(n)
                        : {}
                    : r
                        ? If({ element: r, padding: o }).fn(n)
                        : {};
            },
        };
    },
    Qb = (e, t) => ({ ...Db(e), options: [e, t] }),
    Yb = (e, t) => ({ ...Ab(e), options: [e, t] }),
    Kb = (e, t) => ({ ...$b(e), options: [e, t] }),
    Gb = (e, t) => ({ ...Ib(e), options: [e, t] }),
    qb = (e, t) => ({ ...Fb(e), options: [e, t] }),
    Xb = (e, t) => ({ ...zb(e), options: [e, t] }),
    Jb = (e, t) => ({ ...Vb(e), options: [e, t] });
var Zb = "Arrow",
    Rg = y.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...i } = e;
        return u.jsx(Qe.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : u.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
    });
Rg.displayName = Zb;
var e2 = Rg;
function t2(e) {
    const [t, n] = y.useState(void 0);
    return (
        Bn(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((o) => {
                    if (!Array.isArray(o) || !o.length) return;
                    const i = o[0];
                    let s, a;
                    if ("borderBoxSize" in i) {
                        const l = i.borderBoxSize,
                            c = Array.isArray(l) ? l[0] : l;
                        (s = c.inlineSize), (a = c.blockSize);
                    } else (s = e.offsetWidth), (a = e.offsetHeight);
                    n({ width: s, height: a });
                });
                return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
            } else n(void 0);
        }, [e]),
            t
    );
}
var Mg = "Popper",
    [Og, Lg] = ka(Mg),
    [HN, _g] = Og(Mg),
    Dg = "PopperAnchor",
    Ag = y.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...o } = e,
            i = _g(Dg, n),
            s = y.useRef(null),
            a = Et(t, s);
        return (
            y.useEffect(() => {
                i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
            }),
                r ? null : u.jsx(Qe.div, { ...o, ref: a })
        );
    });
Ag.displayName = Dg;
var Wc = "PopperContent",
    [n2, r2] = Og(Wc),
    Ig = y.forwardRef((e, t) => {
        var Z, kr, un, Xn, cn, Cr;
        const {
                __scopePopper: n,
                side: r = "bottom",
                sideOffset: o = 0,
                align: i = "center",
                alignOffset: s = 0,
                arrowPadding: a = 0,
                avoidCollisions: l = !0,
                collisionBoundary: c = [],
                collisionPadding: d = 0,
                sticky: f = "partial",
                hideWhenDetached: p = !1,
                updatePositionStrategy: h = "optimized",
                onPlaced: b,
                ...x
            } = e,
            w = _g(Wc, n),
            [v, m] = y.useState(null),
            g = Et(t, (dn) => m(dn)),
            [k, C] = y.useState(null),
            S = t2(k),
            N = (S == null ? void 0 : S.width) ?? 0,
            j = (S == null ? void 0 : S.height) ?? 0,
            L = r + (i !== "center" ? "-" + i : ""),
            M = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
            z = Array.isArray(c) ? c : [c],
            I = z.length > 0,
            Q = { padding: M, boundary: z.filter(i2), altBoundary: I },
            {
                refs: _,
                floatingStyles: G,
                placement: $,
                isPositioned: W,
                middlewareData: T,
            } = Ub({
                strategy: "fixed",
                placement: L,
                whileElementsMounted: (...dn) => _b(...dn, { animationFrame: h === "always" }),
                elements: { reference: w.anchor },
                middleware: [
                    Qb({ mainAxis: o + j, alignmentAxis: s }),
                    l && Yb({ mainAxis: !0, crossAxis: !1, limiter: f === "partial" ? Kb() : void 0, ...Q }),
                    l && Gb({ ...Q }),
                    qb({
                        ...Q,
                        apply: ({ elements: dn, rects: Ai, availableWidth: Aa, availableHeight: Ii }) => {
                            const { width: Ia, height: So } = Ai.reference,
                                Sr = dn.floating.style;
                            Sr.setProperty("--radix-popper-available-width", `${Aa}px`),
                                Sr.setProperty("--radix-popper-available-height", `${Ii}px`),
                                Sr.setProperty("--radix-popper-anchor-width", `${Ia}px`),
                                Sr.setProperty("--radix-popper-anchor-height", `${So}px`);
                        },
                    }),
                    k && Jb({ element: k, padding: a }),
                    s2({ arrowWidth: N, arrowHeight: j }),
                    p && Xb({ strategy: "referenceHidden", ...Q }),
                ],
            }),
            [P, D] = $g($),
            U = Hn(b);
        Bn(() => {
            W && (U == null || U());
        }, [W, U]);
        const F = (Z = T.arrow) == null ? void 0 : Z.x,
            Y = (kr = T.arrow) == null ? void 0 : kr.y,
            q = ((un = T.arrow) == null ? void 0 : un.centerOffset) !== 0,
            [ve, Te] = y.useState();
        return (
            Bn(() => {
                v && Te(window.getComputedStyle(v).zIndex);
            }, [v]),
                u.jsx("div", {
                    ref: _.setFloating,
                    "data-radix-popper-content-wrapper": "",
                    style: {
                        ...G,
                        transform: W ? G.transform : "translate(0, -200%)",
                        minWidth: "max-content",
                        zIndex: ve,
                        "--radix-popper-transform-origin": [
                            (Xn = T.transformOrigin) == null ? void 0 : Xn.x,
                            (cn = T.transformOrigin) == null ? void 0 : cn.y,
                        ].join(" "),
                        ...(((Cr = T.hide) == null ? void 0 : Cr.referenceHidden) && {
                            visibility: "hidden",
                            pointerEvents: "none",
                        }),
                    },
                    dir: e.dir,
                    children: u.jsx(n2, {
                        scope: n,
                        placedSide: P,
                        onArrowChange: C,
                        arrowX: F,
                        arrowY: Y,
                        shouldHideArrow: q,
                        children: u.jsx(Qe.div, {
                            "data-side": P,
                            "data-align": D,
                            ...x,
                            ref: g,
                            style: { ...x.style, animation: W ? void 0 : "none" },
                        }),
                    }),
                })
        );
    });
Ig.displayName = Wc;
var Fg = "PopperArrow",
    o2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
    zg = y.forwardRef(function (t, n) {
        const { __scopePopper: r, ...o } = t,
            i = r2(Fg, r),
            s = o2[i.placedSide];
        return u.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0,
            },
            children: u.jsx(e2, { ...o, ref: n, style: { ...o.style, display: "block" } }),
        });
    });
zg.displayName = Fg;
function i2(e) {
    return e !== null;
}
var s2 = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, v, m;
        const { placement: n, rects: r, middlewareData: o } = t,
            s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
            a = s ? 0 : e.arrowWidth,
            l = s ? 0 : e.arrowHeight,
            [c, d] = $g(n),
            f = { start: "0%", center: "50%", end: "100%" }[d],
            p = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2,
            h = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let b = "",
            x = "";
        return (
            c === "bottom"
                ? ((b = s ? f : `${p}px`), (x = `${-l}px`))
                : c === "top"
                ? ((b = s ? f : `${p}px`), (x = `${r.floating.height + l}px`))
                : c === "right"
                    ? ((b = `${-l}px`), (x = s ? f : `${h}px`))
                    : c === "left" && ((b = `${r.floating.width + l}px`), (x = s ? f : `${h}px`)),
                { data: { x: b, y: x } }
        );
    },
});
function $g(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
}
var a2 = Ag,
    l2 = Ig,
    u2 = zg,
    [ja, BN] = ka("Tooltip", [Lg]),
    Uc = Lg(),
    Hg = "TooltipProvider",
    c2 = 700,
    zf = "tooltip.open",
    [d2, Bg] = ja(Hg),
    Wg = (e) => {
        const {
                __scopeTooltip: t,
                delayDuration: n = c2,
                skipDelayDuration: r = 300,
                disableHoverableContent: o = !1,
                children: i,
            } = e,
            s = y.useRef(!0),
            a = y.useRef(!1),
            l = y.useRef(0);
        return (
            y.useEffect(() => {
                const c = l.current;
                return () => window.clearTimeout(c);
            }, []),
                u.jsx(d2, {
                    scope: t,
                    isOpenDelayedRef: s,
                    delayDuration: n,
                    onOpen: y.useCallback(() => {
                        window.clearTimeout(l.current), (s.current = !1);
                    }, []),
                    onClose: y.useCallback(() => {
                        window.clearTimeout(l.current), (l.current = window.setTimeout(() => (s.current = !0), r));
                    }, [r]),
                    isPointerInTransitRef: a,
                    onPointerInTransitChange: y.useCallback((c) => {
                        a.current = c;
                    }, []),
                    disableHoverableContent: o,
                    children: i,
                })
        );
    };
Wg.displayName = Hg;
var Ug = "Tooltip",
    [WN, Ra] = ja(Ug),
    Eu = "TooltipTrigger",
    f2 = y.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = Ra(Eu, n),
            i = Bg(Eu, n),
            s = Uc(n),
            a = y.useRef(null),
            l = Et(t, a, o.onTriggerChange),
            c = y.useRef(!1),
            d = y.useRef(!1),
            f = y.useCallback(() => (c.current = !1), []);
        return (
            y.useEffect(() => () => document.removeEventListener("pointerup", f), [f]),
                u.jsx(a2, {
                    asChild: !0,
                    ...s,
                    children: u.jsx(Qe.button, {
                        "aria-describedby": o.open ? o.contentId : void 0,
                        "data-state": o.stateAttribute,
                        ...r,
                        ref: l,
                        onPointerMove: we(e.onPointerMove, (p) => {
                            p.pointerType !== "touch" &&
                            !d.current &&
                            !i.isPointerInTransitRef.current &&
                            (o.onTriggerEnter(), (d.current = !0));
                        }),
                        onPointerLeave: we(e.onPointerLeave, () => {
                            o.onTriggerLeave(), (d.current = !1);
                        }),
                        onPointerDown: we(e.onPointerDown, () => {
                            o.open && o.onClose(),
                                (c.current = !0),
                                document.addEventListener("pointerup", f, { once: !0 });
                        }),
                        onFocus: we(e.onFocus, () => {
                            c.current || o.onOpen();
                        }),
                        onBlur: we(e.onBlur, o.onClose),
                        onClick: we(e.onClick, o.onClose),
                    }),
                })
        );
    });
f2.displayName = Eu;
var h2 = "TooltipPortal",
    [UN, m2] = ja(h2, { forceMount: void 0 }),
    mo = "TooltipContent",
    Vg = y.forwardRef((e, t) => {
        const n = m2(mo, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
            s = Ra(mo, e.__scopeTooltip);
        return u.jsx(Rc, {
            present: r || s.open,
            children: s.disableHoverableContent
                ? u.jsx(Qg, { side: o, ...i, ref: t })
                : u.jsx(p2, { side: o, ...i, ref: t }),
        });
    }),
    p2 = y.forwardRef((e, t) => {
        const n = Ra(mo, e.__scopeTooltip),
            r = Bg(mo, e.__scopeTooltip),
            o = y.useRef(null),
            i = Et(t, o),
            [s, a] = y.useState(null),
            { trigger: l, onClose: c } = n,
            d = o.current,
            { onPointerInTransitChange: f } = r,
            p = y.useCallback(() => {
                a(null), f(!1);
            }, [f]),
            h = y.useCallback(
                (b, x) => {
                    const w = b.currentTarget,
                        v = { x: b.clientX, y: b.clientY },
                        m = w2(v, w.getBoundingClientRect()),
                        g = b2(v, m),
                        k = k2(x.getBoundingClientRect()),
                        C = S2([...g, ...k]);
                    a(C), f(!0);
                },
                [f]
            );
        return (
            y.useEffect(() => () => p(), [p]),
                y.useEffect(() => {
                    if (l && d) {
                        const b = (w) => h(w, d),
                            x = (w) => h(w, l);
                        return (
                            l.addEventListener("pointerleave", b),
                                d.addEventListener("pointerleave", x),
                                () => {
                                    l.removeEventListener("pointerleave", b), d.removeEventListener("pointerleave", x);
                                }
                        );
                    }
                }, [l, d, h, p]),
                y.useEffect(() => {
                    if (s) {
                        const b = (x) => {
                            const w = x.target,
                                v = { x: x.clientX, y: x.clientY },
                                m = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w)),
                                g = !C2(v, s);
                            m ? p() : g && (p(), c());
                        };
                        return (
                            document.addEventListener("pointermove", b),
                                () => document.removeEventListener("pointermove", b)
                        );
                    }
                }, [l, d, s, c, p]),
                u.jsx(Qg, { ...e, ref: i })
        );
    }),
    [g2, v2] = ja(Ug, { isInside: !1 }),
    y2 = xx("TooltipContent"),
    Qg = y.forwardRef((e, t) => {
        const {
                __scopeTooltip: n,
                children: r,
                "aria-label": o,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                ...a
            } = e,
            l = Ra(mo, n),
            c = Uc(n),
            { onClose: d } = l;
        return (
            y.useEffect(() => (document.addEventListener(zf, d), () => document.removeEventListener(zf, d)), [d]),
                y.useEffect(() => {
                    if (l.trigger) {
                        const f = (p) => {
                            const h = p.target;
                            h != null && h.contains(l.trigger) && d();
                        };
                        return (
                            window.addEventListener("scroll", f, { capture: !0 }),
                                () => window.removeEventListener("scroll", f, { capture: !0 })
                        );
                    }
                }, [l.trigger, d]),
                u.jsx(jc, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: s,
                    onFocusOutside: (f) => f.preventDefault(),
                    onDismiss: d,
                    children: u.jsxs(l2, {
                        "data-state": l.stateAttribute,
                        ...c,
                        ...a,
                        ref: t,
                        style: {
                            ...a.style,
                            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                        },
                        children: [
                            u.jsx(y2, { children: r }),
                            u.jsx(g2, {
                                scope: n,
                                isInside: !0,
                                children: u.jsx(Ux, { id: l.contentId, role: "tooltip", children: o || r }),
                            }),
                        ],
                    }),
                })
        );
    });
Vg.displayName = mo;
var Yg = "TooltipArrow",
    x2 = y.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = Uc(n);
        return v2(Yg, n).isInside ? null : u.jsx(u2, { ...o, ...r, ref: t });
    });
x2.displayName = Yg;
function w2(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function b2(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case "bottom":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case "left":
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case "right":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return r;
}
function k2(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
        { x: o, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: o, y: r },
    ];
}
function C2(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const a = t[i],
            l = t[s],
            c = a.x,
            d = a.y,
            f = l.x,
            p = l.y;
        d > r != p > r && n < ((f - c) * (r - d)) / (p - d) + c && (o = !o);
    }
    return o;
}
function S2(e) {
    const t = e.slice();
    return t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), N2(t);
}
function N2(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break;
        }
        t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break;
        }
        n.push(o);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var E2 = Wg,
    Kg = Vg;
const T2 = E2,
    P2 = y.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        u.jsx(Kg, {
            ref: r,
            sideOffset: t,
            className: Gn(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                e
            ),
            ...n,
        })
    );
P2.displayName = Kg.displayName;
var Ma = class {
        constructor() {
            (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
            return (
                this.listeners.add(e),
                    this.onSubscribe(),
                    () => {
                        this.listeners.delete(e), this.onUnsubscribe();
                    }
            );
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Oa = typeof window > "u" || "Deno" in globalThis;
function yt() {}
function j2(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function R2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function M2(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
}
function Tu(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function O2(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function $f(e, t) {
    const { type: n = "all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: a } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Vc(s, t.options)) return !1;
        } else if (!bi(t.queryKey, s)) return !1;
    }
    if (n !== "all") {
        const l = t.isActive();
        if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
    }
    return !((typeof a == "boolean" && t.isStale() !== a) || (o && o !== t.state.fetchStatus) || (i && !i(t)));
}
function Hf(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: i } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (wi(t.options.mutationKey) !== wi(i)) return !1;
        } else if (!bi(t.options.mutationKey, i)) return !1;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
}
function Vc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || wi)(e);
}
function wi(e) {
    return JSON.stringify(e, (t, n) =>
        Pu(n)
            ? Object.keys(n)
                .sort()
                .reduce((r, o) => ((r[o] = n[o]), r), {})
            : n
    );
}
function bi(e, t) {
    return e === t
        ? !0
        : typeof e != typeof t
            ? !1
            : e && t && typeof e == "object" && typeof t == "object"
                ? Object.keys(t).every((n) => bi(e[n], t[n]))
                : !1;
}
function Gg(e, t) {
    if (e === t) return e;
    const n = Bf(e) && Bf(t);
    if (n || (Pu(e) && Pu(t))) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            a = n ? [] : {},
            l = new Set(r);
        let c = 0;
        for (let d = 0; d < s; d++) {
            const f = n ? d : i[d];
            ((!n && l.has(f)) || n) && e[f] === void 0 && t[f] === void 0
                ? ((a[f] = void 0), c++)
                : ((a[f] = Gg(e[f], t[f])), a[f] === e[f] && e[f] !== void 0 && c++);
        }
        return o === s && c === o ? e : a;
    }
    return t;
}
function Bf(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Pu(e) {
    if (!Wf(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Wf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Wf(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function L2(e) {
    return new Promise((t) => {
        setTimeout(t, e);
    });
}
function _2(e, t, n) {
    return typeof n.structuralSharing == "function"
        ? n.structuralSharing(e, t)
        : n.structuralSharing !== !1
            ? Gg(e, t)
            : t;
}
function D2(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
}
function A2(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
}
var Qc = Symbol();
function qg(e, t) {
    return !e.queryFn && t != null && t.initialPromise
        ? () => t.initialPromise
        : !e.queryFn || e.queryFn === Qc
            ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
            : e.queryFn;
}
var sr,
    Sn,
    Xr,
    ih,
    I2 =
        ((ih = class extends Ma {
            constructor() {
                super();
                J(this, sr);
                J(this, Sn);
                J(this, Xr);
                B(this, Xr, (t) => {
                    if (!Oa && window.addEventListener) {
                        const n = () => t();
                        return (
                            window.addEventListener("visibilitychange", n, !1),
                                () => {
                                    window.removeEventListener("visibilitychange", n);
                                }
                        );
                    }
                });
            }
            onSubscribe() {
                E(this, Sn) || this.setEventListener(E(this, Xr));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = E(this, Sn)) == null || t.call(this), B(this, Sn, void 0));
            }
            setEventListener(t) {
                var n;
                B(this, Xr, t),
                (n = E(this, Sn)) == null || n.call(this),
                    B(
                        this,
                        Sn,
                        t((r) => {
                            typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
                        })
                    );
            }
            setFocused(t) {
                E(this, sr) !== t && (B(this, sr, t), this.onFocus());
            }
            onFocus() {
                const t = this.isFocused();
                this.listeners.forEach((n) => {
                    n(t);
                });
            }
            isFocused() {
                var t;
                return typeof E(this, sr) == "boolean"
                    ? E(this, sr)
                    : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
            }
        }),
            (sr = new WeakMap()),
            (Sn = new WeakMap()),
            (Xr = new WeakMap()),
            ih),
    Xg = new I2(),
    Jr,
    Nn,
    Zr,
    sh,
    F2 =
        ((sh = class extends Ma {
            constructor() {
                super();
                J(this, Jr, !0);
                J(this, Nn);
                J(this, Zr);
                B(this, Zr, (t) => {
                    if (!Oa && window.addEventListener) {
                        const n = () => t(!0),
                            r = () => t(!1);
                        return (
                            window.addEventListener("online", n, !1),
                                window.addEventListener("offline", r, !1),
                                () => {
                                    window.removeEventListener("online", n), window.removeEventListener("offline", r);
                                }
                        );
                    }
                });
            }
            onSubscribe() {
                E(this, Nn) || this.setEventListener(E(this, Zr));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = E(this, Nn)) == null || t.call(this), B(this, Nn, void 0));
            }
            setEventListener(t) {
                var n;
                B(this, Zr, t), (n = E(this, Nn)) == null || n.call(this), B(this, Nn, t(this.setOnline.bind(this)));
            }
            setOnline(t) {
                E(this, Jr) !== t &&
                (B(this, Jr, t),
                    this.listeners.forEach((r) => {
                        r(t);
                    }));
            }
            isOnline() {
                return E(this, Jr);
            }
        }),
            (Jr = new WeakMap()),
            (Nn = new WeakMap()),
            (Zr = new WeakMap()),
            sh),
    na = new F2();
function z2() {
    let e, t;
    const n = new Promise((o, i) => {
        (e = o), (t = i);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject;
    }
    return (
        (n.resolve = (o) => {
            r({ status: "fulfilled", value: o }), e(o);
        }),
            (n.reject = (o) => {
                r({ status: "rejected", reason: o }), t(o);
            }),
            n
    );
}
function $2(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
}
function Jg(e) {
    return (e ?? "online") === "online" ? na.isOnline() : !0;
}
var Zg = class extends Error {
    constructor(e) {
        super("CancelledError"),
            (this.revert = e == null ? void 0 : e.revert),
            (this.silent = e == null ? void 0 : e.silent);
    }
};
function xl(e) {
    return e instanceof Zg;
}
function e0(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const i = z2(),
        s = (x) => {
            var w;
            r || (p(new Zg(x)), (w = e.abort) == null || w.call(e));
        },
        a = () => {
            t = !0;
        },
        l = () => {
            t = !1;
        },
        c = () => Xg.isFocused() && (e.networkMode === "always" || na.isOnline()) && e.canRun(),
        d = () => Jg(e.networkMode) && e.canRun(),
        f = (x) => {
            var w;
            r || ((r = !0), (w = e.onSuccess) == null || w.call(e, x), o == null || o(), i.resolve(x));
        },
        p = (x) => {
            var w;
            r || ((r = !0), (w = e.onError) == null || w.call(e, x), o == null || o(), i.reject(x));
        },
        h = () =>
            new Promise((x) => {
                var w;
                (o = (v) => {
                    (r || c()) && x(v);
                }),
                (w = e.onPause) == null || w.call(e);
            }).then(() => {
                var x;
                (o = void 0), r || (x = e.onContinue) == null || x.call(e);
            }),
        b = () => {
            if (r) return;
            let x;
            const w = n === 0 ? e.initialPromise : void 0;
            try {
                x = w ?? e.fn();
            } catch (v) {
                x = Promise.reject(v);
            }
            Promise.resolve(x)
                .then(f)
                .catch((v) => {
                    var S;
                    if (r) return;
                    const m = e.retry ?? (Oa ? 0 : 3),
                        g = e.retryDelay ?? $2,
                        k = typeof g == "function" ? g(n, v) : g,
                        C = m === !0 || (typeof m == "number" && n < m) || (typeof m == "function" && m(n, v));
                    if (t || !C) {
                        p(v);
                        return;
                    }
                    n++,
                    (S = e.onFail) == null || S.call(e, n, v),
                        L2(k)
                            .then(() => (c() ? void 0 : h()))
                            .then(() => {
                                t ? p(v) : b();
                            });
                });
        };
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(), i),
        cancelRetry: a,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? b() : h().then(b), i),
    };
}
var H2 = (e) => setTimeout(e, 0);
function B2() {
    let e = [],
        t = 0,
        n = (a) => {
            a();
        },
        r = (a) => {
            a();
        },
        o = H2;
    const i = (a) => {
            t
                ? e.push(a)
                : o(() => {
                    n(a);
                });
        },
        s = () => {
            const a = e;
            (e = []),
            a.length &&
            o(() => {
                r(() => {
                    a.forEach((l) => {
                        n(l);
                    });
                });
            });
        };
    return {
        batch: (a) => {
            let l;
            t++;
            try {
                l = a();
            } finally {
                t--, t || s();
            }
            return l;
        },
        batchCalls:
            (a) =>
                (...l) => {
                    i(() => {
                        a(...l);
                    });
                },
        schedule: i,
        setNotifyFunction: (a) => {
            n = a;
        },
        setBatchNotifyFunction: (a) => {
            r = a;
        },
        setScheduler: (a) => {
            o = a;
        },
    };
}
var Ae = B2(),
    ar,
    ah,
    t0 =
        ((ah = class {
            constructor() {
                J(this, ar);
            }
            destroy() {
                this.clearGcTimeout();
            }
            scheduleGc() {
                this.clearGcTimeout(),
                R2(this.gcTime) &&
                B(
                    this,
                    ar,
                    setTimeout(() => {
                        this.optionalRemove();
                    }, this.gcTime)
                );
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (Oa ? 1 / 0 : 5 * 60 * 1e3));
            }
            clearGcTimeout() {
                E(this, ar) && (clearTimeout(E(this, ar)), B(this, ar, void 0));
            }
        }),
            (ar = new WeakMap()),
            ah),
    eo,
    lr,
    rt,
    ur,
    Me,
    Ci,
    cr,
    xt,
    Vt,
    lh,
    W2 =
        ((lh = class extends t0 {
            constructor(t) {
                super();
                J(this, xt);
                J(this, eo);
                J(this, lr);
                J(this, rt);
                J(this, ur);
                J(this, Me);
                J(this, Ci);
                J(this, cr);
                B(this, cr, !1),
                    B(this, Ci, t.defaultOptions),
                    this.setOptions(t.options),
                    (this.observers = []),
                    B(this, ur, t.client),
                    B(this, rt, E(this, ur).getQueryCache()),
                    (this.queryKey = t.queryKey),
                    (this.queryHash = t.queryHash),
                    B(this, eo, V2(this.options)),
                    (this.state = t.state ?? E(this, eo)),
                    this.scheduleGc();
            }
            get meta() {
                return this.options.meta;
            }
            get promise() {
                var t;
                return (t = E(this, Me)) == null ? void 0 : t.promise;
            }
            setOptions(t) {
                (this.options = { ...E(this, Ci), ...t }), this.updateGcTime(this.options.gcTime);
            }
            optionalRemove() {
                !this.observers.length && this.state.fetchStatus === "idle" && E(this, rt).remove(this);
            }
            setData(t, n) {
                const r = _2(this.state.data, t, this.options);
                return (
                    Pe(this, xt, Vt).call(this, {
                        data: r,
                        type: "success",
                        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                        manual: n == null ? void 0 : n.manual,
                    }),
                        r
                );
            }
            setState(t, n) {
                Pe(this, xt, Vt).call(this, { type: "setState", state: t, setStateOptions: n });
            }
            cancel(t) {
                var r, o;
                const n = (r = E(this, Me)) == null ? void 0 : r.promise;
                return (o = E(this, Me)) == null || o.cancel(t), n ? n.then(yt).catch(yt) : Promise.resolve();
            }
            destroy() {
                super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
                this.destroy(), this.setState(E(this, eo));
            }
            isActive() {
                return this.observers.some((t) => O2(t.options.enabled, this) !== !1);
            }
            isDisabled() {
                return this.getObserversCount() > 0
                    ? !this.isActive()
                    : this.options.queryFn === Qc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
            }
            isStatic() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => Tu(t.options.staleTime, this) === "static")
                    : !1;
            }
            isStale() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => t.getCurrentResult().isStale)
                    : this.state.data === void 0 || this.state.isInvalidated;
            }
            isStaleByTime(t = 0) {
                return this.state.data === void 0
                    ? !0
                    : t === "static"
                        ? !1
                        : this.state.isInvalidated
                            ? !0
                            : !M2(this.state.dataUpdatedAt, t);
            }
            onFocus() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = E(this, Me)) == null || n.continue();
            }
            onOnline() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnReconnect());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = E(this, Me)) == null || n.continue();
            }
            addObserver(t) {
                this.observers.includes(t) ||
                (this.observers.push(t),
                    this.clearGcTimeout(),
                    E(this, rt).notify({ type: "observerAdded", query: this, observer: t }));
            }
            removeObserver(t) {
                this.observers.includes(t) &&
                ((this.observers = this.observers.filter((n) => n !== t)),
                this.observers.length ||
                (E(this, Me) && (E(this, cr) ? E(this, Me).cancel({ revert: !0 }) : E(this, Me).cancelRetry()),
                    this.scheduleGc()),
                    E(this, rt).notify({ type: "observerRemoved", query: this, observer: t }));
            }
            getObserversCount() {
                return this.observers.length;
            }
            invalidate() {
                this.state.isInvalidated || Pe(this, xt, Vt).call(this, { type: "invalidate" });
            }
            fetch(t, n) {
                var c, d, f;
                if (this.state.fetchStatus !== "idle") {
                    if (this.state.data !== void 0 && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
                    else if (E(this, Me)) return E(this, Me).continueRetry(), E(this, Me).promise;
                }
                if ((t && this.setOptions(t), !this.options.queryFn)) {
                    const p = this.observers.find((h) => h.options.queryFn);
                    p && this.setOptions(p.options);
                }
                const r = new AbortController(),
                    o = (p) => {
                        Object.defineProperty(p, "signal", { enumerable: !0, get: () => (B(this, cr, !0), r.signal) });
                    },
                    i = () => {
                        const p = qg(this.options, n),
                            b = (() => {
                                const x = { client: E(this, ur), queryKey: this.queryKey, meta: this.meta };
                                return o(x), x;
                            })();
                        return B(this, cr, !1), this.options.persister ? this.options.persister(p, b, this) : p(b);
                    },
                    a = (() => {
                        const p = {
                            fetchOptions: n,
                            options: this.options,
                            queryKey: this.queryKey,
                            client: E(this, ur),
                            state: this.state,
                            fetchFn: i,
                        };
                        return o(p), p;
                    })();
                (c = this.options.behavior) == null || c.onFetch(a, this),
                    B(this, lr, this.state),
                (this.state.fetchStatus === "idle" ||
                    this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) &&
                Pe(this, xt, Vt).call(this, {
                    type: "fetch",
                    meta: (f = a.fetchOptions) == null ? void 0 : f.meta,
                });
                const l = (p) => {
                    var h, b, x, w;
                    (xl(p) && p.silent) || Pe(this, xt, Vt).call(this, { type: "error", error: p }),
                    xl(p) ||
                    ((b = (h = E(this, rt).config).onError) == null || b.call(h, p, this),
                    (w = (x = E(this, rt).config).onSettled) == null || w.call(x, this.state.data, p, this)),
                        this.scheduleGc();
                };
                return (
                    B(
                        this,
                        Me,
                        e0({
                            initialPromise: n == null ? void 0 : n.initialPromise,
                            fn: a.fetchFn,
                            abort: r.abort.bind(r),
                            onSuccess: (p) => {
                                var h, b, x, w;
                                if (p === void 0) {
                                    l(new Error(`${this.queryHash} data is undefined`));
                                    return;
                                }
                                try {
                                    this.setData(p);
                                } catch (v) {
                                    l(v);
                                    return;
                                }
                                (b = (h = E(this, rt).config).onSuccess) == null || b.call(h, p, this),
                                (w = (x = E(this, rt).config).onSettled) == null ||
                                w.call(x, p, this.state.error, this),
                                    this.scheduleGc();
                            },
                            onError: l,
                            onFail: (p, h) => {
                                Pe(this, xt, Vt).call(this, { type: "failed", failureCount: p, error: h });
                            },
                            onPause: () => {
                                Pe(this, xt, Vt).call(this, { type: "pause" });
                            },
                            onContinue: () => {
                                Pe(this, xt, Vt).call(this, { type: "continue" });
                            },
                            retry: a.options.retry,
                            retryDelay: a.options.retryDelay,
                            networkMode: a.options.networkMode,
                            canRun: () => !0,
                        })
                    ),
                        E(this, Me).start()
                );
            }
        }),
            (eo = new WeakMap()),
            (lr = new WeakMap()),
            (rt = new WeakMap()),
            (ur = new WeakMap()),
            (Me = new WeakMap()),
            (Ci = new WeakMap()),
            (cr = new WeakMap()),
            (xt = new WeakSet()),
            (Vt = function (t) {
                const n = (r) => {
                    switch (t.type) {
                        case "failed":
                            return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                        case "pause":
                            return { ...r, fetchStatus: "paused" };
                        case "continue":
                            return { ...r, fetchStatus: "fetching" };
                        case "fetch":
                            return { ...r, ...U2(r.data, this.options), fetchMeta: t.meta ?? null };
                        case "success":
                            return (
                                B(this, lr, void 0),
                                    {
                                        ...r,
                                        data: t.data,
                                        dataUpdateCount: r.dataUpdateCount + 1,
                                        dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success",
                                        ...(!t.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null,
                                        }),
                                    }
                            );
                        case "error":
                            const o = t.error;
                            return xl(o) && o.revert && E(this, lr)
                                ? { ...E(this, lr), fetchStatus: "idle" }
                                : {
                                    ...r,
                                    error: o,
                                    errorUpdateCount: r.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: r.fetchFailureCount + 1,
                                    fetchFailureReason: o,
                                    fetchStatus: "idle",
                                    status: "error",
                                };
                        case "invalidate":
                            return { ...r, isInvalidated: !0 };
                        case "setState":
                            return { ...r, ...t.state };
                    }
                };
                (this.state = n(this.state)),
                    Ae.batch(() => {
                        this.observers.forEach((r) => {
                            r.onQueryUpdate();
                        }),
                            E(this, rt).notify({ query: this, type: "updated", action: t });
                    });
            }),
            lh);
function U2(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Jg(t.networkMode) ? "fetching" : "paused",
        ...(e === void 0 && { error: null, status: "pending" }),
    };
}
function V2(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? (typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? (r ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle",
    };
}
var Ot,
    uh,
    Q2 =
        ((uh = class extends Ma {
            constructor(t = {}) {
                super();
                J(this, Ot);
                (this.config = t), B(this, Ot, new Map());
            }
            build(t, n, r) {
                const o = n.queryKey,
                    i = n.queryHash ?? Vc(o, n);
                let s = this.get(i);
                return (
                    s ||
                    ((s = new W2({
                        client: t,
                        queryKey: o,
                        queryHash: i,
                        options: t.defaultQueryOptions(n),
                        state: r,
                        defaultOptions: t.getQueryDefaults(o),
                    })),
                        this.add(s)),
                        s
                );
            }
            add(t) {
                E(this, Ot).has(t.queryHash) ||
                (E(this, Ot).set(t.queryHash, t), this.notify({ type: "added", query: t }));
            }
            remove(t) {
                const n = E(this, Ot).get(t.queryHash);
                n &&
                (t.destroy(),
                n === t && E(this, Ot).delete(t.queryHash),
                    this.notify({ type: "removed", query: t }));
            }
            clear() {
                Ae.batch(() => {
                    this.getAll().forEach((t) => {
                        this.remove(t);
                    });
                });
            }
            get(t) {
                return E(this, Ot).get(t);
            }
            getAll() {
                return [...E(this, Ot).values()];
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => $f(n, r));
            }
            findAll(t = {}) {
                const n = this.getAll();
                return Object.keys(t).length > 0 ? n.filter((r) => $f(t, r)) : n;
            }
            notify(t) {
                Ae.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            onFocus() {
                Ae.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onFocus();
                    });
                });
            }
            onOnline() {
                Ae.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onOnline();
                    });
                });
            }
        }),
            (Ot = new WeakMap()),
            uh),
    Lt,
    _e,
    dr,
    _t,
    xn,
    ch,
    Y2 =
        ((ch = class extends t0 {
            constructor(t) {
                super();
                J(this, _t);
                J(this, Lt);
                J(this, _e);
                J(this, dr);
                (this.mutationId = t.mutationId),
                    B(this, _e, t.mutationCache),
                    B(this, Lt, []),
                    (this.state = t.state || K2()),
                    this.setOptions(t.options),
                    this.scheduleGc();
            }
            setOptions(t) {
                (this.options = t), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
                return this.options.meta;
            }
            addObserver(t) {
                E(this, Lt).includes(t) ||
                (E(this, Lt).push(t),
                    this.clearGcTimeout(),
                    E(this, _e).notify({ type: "observerAdded", mutation: this, observer: t }));
            }
            removeObserver(t) {
                B(
                    this,
                    Lt,
                    E(this, Lt).filter((n) => n !== t)
                ),
                    this.scheduleGc(),
                    E(this, _e).notify({ type: "observerRemoved", mutation: this, observer: t });
            }
            optionalRemove() {
                E(this, Lt).length || (this.state.status === "pending" ? this.scheduleGc() : E(this, _e).remove(this));
            }
            continue() {
                var t;
                return ((t = E(this, dr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables);
            }
            async execute(t) {
                var i, s, a, l, c, d, f, p, h, b, x, w, v, m, g, k, C, S, N, j;
                const n = () => {
                    Pe(this, _t, xn).call(this, { type: "continue" });
                };
                B(
                    this,
                    dr,
                    e0({
                        fn: () =>
                            this.options.mutationFn
                                ? this.options.mutationFn(t)
                                : Promise.reject(new Error("No mutationFn found")),
                        onFail: (L, M) => {
                            Pe(this, _t, xn).call(this, { type: "failed", failureCount: L, error: M });
                        },
                        onPause: () => {
                            Pe(this, _t, xn).call(this, { type: "pause" });
                        },
                        onContinue: n,
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => E(this, _e).canRun(this),
                    })
                );
                const r = this.state.status === "pending",
                    o = !E(this, dr).canStart();
                try {
                    if (r) n();
                    else {
                        Pe(this, _t, xn).call(this, { type: "pending", variables: t, isPaused: o }),
                            await ((s = (i = E(this, _e).config).onMutate) == null ? void 0 : s.call(i, t, this));
                        const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                        M !== this.state.context &&
                        Pe(this, _t, xn).call(this, { type: "pending", context: M, variables: t, isPaused: o });
                    }
                    const L = await E(this, dr).start();
                    return (
                        await ((d = (c = E(this, _e).config).onSuccess) == null
                            ? void 0
                            : d.call(c, L, t, this.state.context, this)),
                            await ((p = (f = this.options).onSuccess) == null
                                ? void 0
                                : p.call(f, L, t, this.state.context)),
                            await ((b = (h = E(this, _e).config).onSettled) == null
                                ? void 0
                                : b.call(h, L, null, this.state.variables, this.state.context, this)),
                            await ((w = (x = this.options).onSettled) == null
                                ? void 0
                                : w.call(x, L, null, t, this.state.context)),
                            Pe(this, _t, xn).call(this, { type: "success", data: L }),
                            L
                    );
                } catch (L) {
                    try {
                        throw (
                            (await ((m = (v = E(this, _e).config).onError) == null
                                ? void 0
                                : m.call(v, L, t, this.state.context, this)),
                                await ((k = (g = this.options).onError) == null
                                    ? void 0
                                    : k.call(g, L, t, this.state.context)),
                                await ((S = (C = E(this, _e).config).onSettled) == null
                                    ? void 0
                                    : S.call(C, void 0, L, this.state.variables, this.state.context, this)),
                                await ((j = (N = this.options).onSettled) == null
                                    ? void 0
                                    : j.call(N, void 0, L, t, this.state.context)),
                                L)
                        );
                    } finally {
                        Pe(this, _t, xn).call(this, { type: "error", error: L });
                    }
                } finally {
                    E(this, _e).runNext(this);
                }
            }
        }),
            (Lt = new WeakMap()),
            (_e = new WeakMap()),
            (dr = new WeakMap()),
            (_t = new WeakSet()),
            (xn = function (t) {
                const n = (r) => {
                    switch (t.type) {
                        case "failed":
                            return { ...r, failureCount: t.failureCount, failureReason: t.error };
                        case "pause":
                            return { ...r, isPaused: !0 };
                        case "continue":
                            return { ...r, isPaused: !1 };
                        case "pending":
                            return {
                                ...r,
                                context: t.context,
                                data: void 0,
                                failureCount: 0,
                                failureReason: null,
                                error: null,
                                isPaused: t.isPaused,
                                status: "pending",
                                variables: t.variables,
                                submittedAt: Date.now(),
                            };
                        case "success":
                            return {
                                ...r,
                                data: t.data,
                                failureCount: 0,
                                failureReason: null,
                                error: null,
                                status: "success",
                                isPaused: !1,
                            };
                        case "error":
                            return {
                                ...r,
                                data: void 0,
                                error: t.error,
                                failureCount: r.failureCount + 1,
                                failureReason: t.error,
                                isPaused: !1,
                                status: "error",
                            };
                    }
                };
                (this.state = n(this.state)),
                    Ae.batch(() => {
                        E(this, Lt).forEach((r) => {
                            r.onMutationUpdate(t);
                        }),
                            E(this, _e).notify({ mutation: this, type: "updated", action: t });
                    });
            }),
            ch);
function K2() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0,
    };
}
var Kt,
    wt,
    Si,
    dh,
    G2 =
        ((dh = class extends Ma {
            constructor(t = {}) {
                super();
                J(this, Kt);
                J(this, wt);
                J(this, Si);
                (this.config = t), B(this, Kt, new Set()), B(this, wt, new Map()), B(this, Si, 0);
            }
            build(t, n, r) {
                const o = new Y2({
                    mutationCache: this,
                    mutationId: ++zi(this, Si)._,
                    options: t.defaultMutationOptions(n),
                    state: r,
                });
                return this.add(o), o;
            }
            add(t) {
                E(this, Kt).add(t);
                const n = as(t);
                if (typeof n == "string") {
                    const r = E(this, wt).get(n);
                    r ? r.push(t) : E(this, wt).set(n, [t]);
                }
                this.notify({ type: "added", mutation: t });
            }
            remove(t) {
                if (E(this, Kt).delete(t)) {
                    const n = as(t);
                    if (typeof n == "string") {
                        const r = E(this, wt).get(n);
                        if (r)
                            if (r.length > 1) {
                                const o = r.indexOf(t);
                                o !== -1 && r.splice(o, 1);
                            } else r[0] === t && E(this, wt).delete(n);
                    }
                }
                this.notify({ type: "removed", mutation: t });
            }
            canRun(t) {
                const n = as(t);
                if (typeof n == "string") {
                    const r = E(this, wt).get(n),
                        o = r == null ? void 0 : r.find((i) => i.state.status === "pending");
                    return !o || o === t;
                } else return !0;
            }
            runNext(t) {
                var r;
                const n = as(t);
                if (typeof n == "string") {
                    const o = (r = E(this, wt).get(n)) == null ? void 0 : r.find((i) => i !== t && i.state.isPaused);
                    return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
                } else return Promise.resolve();
            }
            clear() {
                Ae.batch(() => {
                    E(this, Kt).forEach((t) => {
                        this.notify({ type: "removed", mutation: t });
                    }),
                        E(this, Kt).clear(),
                        E(this, wt).clear();
                });
            }
            getAll() {
                return Array.from(E(this, Kt));
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => Hf(n, r));
            }
            findAll(t = {}) {
                return this.getAll().filter((n) => Hf(t, n));
            }
            notify(t) {
                Ae.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            resumePausedMutations() {
                const t = this.getAll().filter((n) => n.state.isPaused);
                return Ae.batch(() => Promise.all(t.map((n) => n.continue().catch(yt))));
            }
        }),
            (Kt = new WeakMap()),
            (wt = new WeakMap()),
            (Si = new WeakMap()),
            dh);
function as(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id;
}
function Uf(e) {
    return {
        onFetch: (t, n) => {
            var d, f, p, h, b;
            const r = t.options,
                o =
                    (p = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null
                        ? void 0
                        : p.direction,
                i = ((h = t.state.data) == null ? void 0 : h.pages) || [],
                s = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let a = { pages: [], pageParams: [] },
                l = 0;
            const c = async () => {
                let x = !1;
                const w = (g) => {
                        Object.defineProperty(g, "signal", {
                            enumerable: !0,
                            get: () => (
                                t.signal.aborted
                                    ? (x = !0)
                                    : t.signal.addEventListener("abort", () => {
                                        x = !0;
                                    }),
                                    t.signal
                            ),
                        });
                    },
                    v = qg(t.options, t.fetchOptions),
                    m = async (g, k, C) => {
                        if (x) return Promise.reject();
                        if (k == null && g.pages.length) return Promise.resolve(g);
                        const N = (() => {
                                const z = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: k,
                                    direction: C ? "backward" : "forward",
                                    meta: t.options.meta,
                                };
                                return w(z), z;
                            })(),
                            j = await v(N),
                            { maxPages: L } = t.options,
                            M = C ? A2 : D2;
                        return { pages: M(g.pages, j, L), pageParams: M(g.pageParams, k, L) };
                    };
                if (o && i.length) {
                    const g = o === "backward",
                        k = g ? q2 : Vf,
                        C = { pages: i, pageParams: s },
                        S = k(r, C);
                    a = await m(C, S, g);
                } else {
                    const g = e ?? i.length;
                    do {
                        const k = l === 0 ? (s[0] ?? r.initialPageParam) : Vf(r, a);
                        if (l > 0 && k == null) break;
                        (a = await m(a, k)), l++;
                    } while (l < g);
                }
                return a;
            };
            t.options.persister
                ? (t.fetchFn = () => {
                    var x, w;
                    return (w = (x = t.options).persister) == null
                        ? void 0
                        : w.call(
                            x,
                            c,
                            { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
                            n
                        );
                })
                : (t.fetchFn = c);
        },
    };
}
function Vf(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function q2(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? ((r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)) : void 0;
}
var me,
    En,
    Tn,
    to,
    no,
    Pn,
    ro,
    oo,
    fh,
    X2 =
        ((fh = class {
            constructor(e = {}) {
                J(this, me);
                J(this, En);
                J(this, Tn);
                J(this, to);
                J(this, no);
                J(this, Pn);
                J(this, ro);
                J(this, oo);
                B(this, me, e.queryCache || new Q2()),
                    B(this, En, e.mutationCache || new G2()),
                    B(this, Tn, e.defaultOptions || {}),
                    B(this, to, new Map()),
                    B(this, no, new Map()),
                    B(this, Pn, 0);
            }
            mount() {
                zi(this, Pn)._++,
                E(this, Pn) === 1 &&
                (B(
                    this,
                    ro,
                    Xg.subscribe(async (e) => {
                        e && (await this.resumePausedMutations(), E(this, me).onFocus());
                    })
                ),
                    B(
                        this,
                        oo,
                        na.subscribe(async (e) => {
                            e && (await this.resumePausedMutations(), E(this, me).onOnline());
                        })
                    ));
            }
            unmount() {
                var e, t;
                zi(this, Pn)._--,
                E(this, Pn) === 0 &&
                ((e = E(this, ro)) == null || e.call(this),
                    B(this, ro, void 0),
                (t = E(this, oo)) == null || t.call(this),
                    B(this, oo, void 0));
            }
            isFetching(e) {
                return E(this, me).findAll({ ...e, fetchStatus: "fetching" }).length;
            }
            isMutating(e) {
                return E(this, En).findAll({ ...e, status: "pending" }).length;
            }
            getQueryData(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = E(this, me).get(t.queryHash)) == null ? void 0 : n.state.data;
            }
            ensureQueryData(e) {
                const t = this.defaultQueryOptions(e),
                    n = E(this, me).build(this, t),
                    r = n.state.data;
                return r === void 0
                    ? this.fetchQuery(e)
                    : (e.revalidateIfStale && n.isStaleByTime(Tu(t.staleTime, n)) && this.prefetchQuery(t),
                        Promise.resolve(r));
            }
            getQueriesData(e) {
                return E(this, me)
                    .findAll(e)
                    .map(({ queryKey: t, state: n }) => {
                        const r = n.data;
                        return [t, r];
                    });
            }
            setQueryData(e, t, n) {
                const r = this.defaultQueryOptions({ queryKey: e }),
                    o = E(this, me).get(r.queryHash),
                    i = o == null ? void 0 : o.state.data,
                    s = j2(t, i);
                if (s !== void 0)
                    return E(this, me)
                        .build(this, r)
                        .setData(s, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
                return Ae.batch(() =>
                    E(this, me)
                        .findAll(e)
                        .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
                );
            }
            getQueryState(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = E(this, me).get(t.queryHash)) == null ? void 0 : n.state;
            }
            removeQueries(e) {
                const t = E(this, me);
                Ae.batch(() => {
                    t.findAll(e).forEach((n) => {
                        t.remove(n);
                    });
                });
            }
            resetQueries(e, t) {
                const n = E(this, me);
                return Ae.batch(
                    () => (
                        n.findAll(e).forEach((r) => {
                            r.reset();
                        }),
                            this.refetchQueries({ type: "active", ...e }, t)
                    )
                );
            }
            cancelQueries(e, t = {}) {
                const n = { revert: !0, ...t },
                    r = Ae.batch(() =>
                        E(this, me)
                            .findAll(e)
                            .map((o) => o.cancel(n))
                    );
                return Promise.all(r).then(yt).catch(yt);
            }
            invalidateQueries(e, t = {}) {
                return Ae.batch(
                    () => (
                        E(this, me)
                            .findAll(e)
                            .forEach((n) => {
                                n.invalidate();
                            }),
                            (e == null ? void 0 : e.refetchType) === "none"
                                ? Promise.resolve()
                                : this.refetchQueries(
                                {
                                    ...e,
                                    type:
                                        (e == null ? void 0 : e.refetchType) ??
                                        (e == null ? void 0 : e.type) ??
                                        "active",
                                },
                                t
                                )
                    )
                );
            }
            refetchQueries(e, t = {}) {
                const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
                    r = Ae.batch(() =>
                        E(this, me)
                            .findAll(e)
                            .filter((o) => !o.isDisabled() && !o.isStatic())
                            .map((o) => {
                                let i = o.fetch(void 0, n);
                                return (
                                    n.throwOnError || (i = i.catch(yt)),
                                        o.state.fetchStatus === "paused" ? Promise.resolve() : i
                                );
                            })
                    );
                return Promise.all(r).then(yt);
            }
            fetchQuery(e) {
                const t = this.defaultQueryOptions(e);
                t.retry === void 0 && (t.retry = !1);
                const n = E(this, me).build(this, t);
                return n.isStaleByTime(Tu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(yt).catch(yt);
            }
            fetchInfiniteQuery(e) {
                return (e.behavior = Uf(e.pages)), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(yt).catch(yt);
            }
            ensureInfiniteQueryData(e) {
                return (e.behavior = Uf(e.pages)), this.ensureQueryData(e);
            }
            resumePausedMutations() {
                return na.isOnline() ? E(this, En).resumePausedMutations() : Promise.resolve();
            }
            getQueryCache() {
                return E(this, me);
            }
            getMutationCache() {
                return E(this, En);
            }
            getDefaultOptions() {
                return E(this, Tn);
            }
            setDefaultOptions(e) {
                B(this, Tn, e);
            }
            setQueryDefaults(e, t) {
                E(this, to).set(wi(e), { queryKey: e, defaultOptions: t });
            }
            getQueryDefaults(e) {
                const t = [...E(this, to).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        bi(e, r.queryKey) && Object.assign(n, r.defaultOptions);
                    }),
                        n
                );
            }
            setMutationDefaults(e, t) {
                E(this, no).set(wi(e), { mutationKey: e, defaultOptions: t });
            }
            getMutationDefaults(e) {
                const t = [...E(this, no).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        bi(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
                    }),
                        n
                );
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                const t = { ...E(this, Tn).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
                return (
                    t.queryHash || (t.queryHash = Vc(t.queryKey, t)),
                    t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
                    t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
                    !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                    t.queryFn === Qc && (t.enabled = !1),
                        t
                );
            }
            defaultMutationOptions(e) {
                return e != null && e._defaulted
                    ? e
                    : {
                        ...E(this, Tn).mutations,
                        ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
                        ...e,
                        _defaulted: !0,
                    };
            }
            clear() {
                E(this, me).clear(), E(this, En).clear();
            }
        }),
            (me = new WeakMap()),
            (En = new WeakMap()),
            (Tn = new WeakMap()),
            (to = new WeakMap()),
            (no = new WeakMap()),
            (Pn = new WeakMap()),
            (ro = new WeakMap()),
            (oo = new WeakMap()),
            fh),
    J2 = y.createContext(void 0),
    Z2 = ({ client: e, children: t }) => (
        y.useEffect(
            () => (
                e.mount(),
                    () => {
                        e.unmount();
                    }
            ),
            [e]
        ),
            u.jsx(J2.Provider, { value: e, children: t })
    );
/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Qf = "popstate";
function ek(e = {}) {
    function t(r, o) {
        let { pathname: i, search: s, hash: a } = r.location;
        return ju(
            "",
            { pathname: i, search: s, hash: a },
            (o.state && o.state.usr) || null,
            (o.state && o.state.key) || "default"
        );
    }
    function n(r, o) {
        return typeof o == "string" ? o : ki(o);
    }
    return nk(t, n, null, e);
}
function fe(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function jt(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function tk() {
    return Math.random().toString(36).substring(2, 10);
}
function Yf(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function ju(e, t, n = null, r) {
    return {
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
        ...(typeof t == "string" ? ko(t) : t),
        state: n,
        key: (t && t.key) || r || tk(),
    };
}
function ki({ pathname: e = "/", search: t = "", hash: n = "" }) {
    return (
        t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
        n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
            e
    );
}
function ko(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))), e && (t.pathname = e);
    }
    return t;
}
function nk(e, t, n, r = {}) {
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
        s = o.history,
        a = "POP",
        l = null,
        c = d();
    c == null && ((c = 0), s.replaceState({ ...s.state, idx: c }, ""));
    function d() {
        return (s.state || { idx: null }).idx;
    }
    function f() {
        a = "POP";
        let w = d(),
            v = w == null ? null : w - c;
        (c = w), l && l({ action: a, location: x.location, delta: v });
    }
    function p(w, v) {
        a = "PUSH";
        let m = ju(x.location, w, v);
        c = d() + 1;
        let g = Yf(m, c),
            k = x.createHref(m);
        try {
            s.pushState(g, "", k);
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(k);
        }
        i && l && l({ action: a, location: x.location, delta: 1 });
    }
    function h(w, v) {
        a = "REPLACE";
        let m = ju(x.location, w, v);
        c = d();
        let g = Yf(m, c),
            k = x.createHref(m);
        s.replaceState(g, "", k), i && l && l({ action: a, location: x.location, delta: 0 });
    }
    function b(w) {
        return rk(w);
    }
    let x = {
        get action() {
            return a;
        },
        get location() {
            return e(o, s);
        },
        listen(w) {
            if (l) throw new Error("A history only accepts one active listener");
            return (
                o.addEventListener(Qf, f),
                    (l = w),
                    () => {
                        o.removeEventListener(Qf, f), (l = null);
                    }
            );
        },
        createHref(w) {
            return t(o, w);
        },
        createURL: b,
        encodeLocation(w) {
            let v = b(w);
            return { pathname: v.pathname, search: v.search, hash: v.hash };
        },
        push: p,
        replace: h,
        go(w) {
            return s.go(w);
        },
    };
    return x;
}
function rk(e, t = !1) {
    let n = "http://localhost";
    typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href),
        fe(n, "No window.location.(origin|href) available to create URL");
    let r = typeof e == "string" ? e : ki(e);
    return (r = r.replace(/ $/, "%20")), !t && r.startsWith("//") && (r = n + r), new URL(r, n);
}
function n0(e, t, n = "/") {
    return ok(e, t, n, !1);
}
function ok(e, t, n, r) {
    let o = typeof t == "string" ? ko(t) : t,
        i = sn(o.pathname || "/", n);
    if (i == null) return null;
    let s = r0(e);
    ik(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let c = gk(i);
        a = mk(s[l], c, r);
    }
    return a;
}
function r0(e, t = [], n = [], r = "", o = !1) {
    let i = (s, a, l = o, c) => {
        let d = {
            relativePath: c === void 0 ? s.path || "" : c,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: a,
            route: s,
        };
        if (d.relativePath.startsWith("/")) {
            if (!d.relativePath.startsWith(r) && l) return;
            fe(
                d.relativePath.startsWith(r),
                `Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
            ),
                (d.relativePath = d.relativePath.slice(r.length));
        }
        let f = Jt([r, d.relativePath]),
            p = n.concat(d);
        s.children &&
        s.children.length > 0 &&
        (fe(
            s.index !== !0,
            `Index routes must not have child routes. Please remove all child routes from route path "${f}".`
        ),
            r0(s.children, t, p, f, l)),
        !(s.path == null && !s.index) && t.push({ path: f, score: fk(f, s.index), routesMeta: p });
    };
    return (
        e.forEach((s, a) => {
            var l;
            if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, a);
            else for (let c of o0(s.path)) i(s, a, !0, c);
        }),
            t
    );
}
function o0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith("?"),
        i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = o0(r.join("/")),
        a = [];
    return (
        a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
        o && a.push(...s),
            a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
}
function ik(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : hk(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex)
            )
    );
}
var sk = /^:[\w-]+$/,
    ak = 3,
    lk = 2,
    uk = 1,
    ck = 10,
    dk = -2,
    Kf = (e) => e === "*";
function fk(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(Kf) && (r += dk),
        t && (r += lk),
            n.filter((o) => !Kf(o)).reduce((o, i) => o + (sk.test(i) ? ak : i === "" ? uk : ck), r)
    );
}
function hk(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function mk(e, t, n = !1) {
    let { routesMeta: r } = e,
        o = {},
        i = "/",
        s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            c = a === r.length - 1,
            d = i === "/" ? t : t.slice(i.length) || "/",
            f = ra({ path: l.relativePath, caseSensitive: l.caseSensitive, end: c }, d),
            p = l.route;
        if (
            (!f &&
            c &&
            n &&
            !r[r.length - 1].route.index &&
            (f = ra({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, d)),
                !f)
        )
            return null;
        Object.assign(o, f.params),
            s.push({ params: o, pathname: Jt([i, f.pathname]), pathnameBase: wk(Jt([i, f.pathnameBase])), route: p }),
        f.pathnameBase !== "/" && (i = Jt([i, f.pathnameBase]));
    }
    return s;
}
function ra(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = pk(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((c, { paramName: d, isOptional: f }, p) => {
            if (d === "*") {
                let b = a[p] || "";
                s = i.slice(0, i.length - b.length).replace(/(.)\/+$/, "$1");
            }
            const h = a[p];
            return f && !h ? (c[d] = void 0) : (c[d] = (h || "").replace(/%2F/g, "/")), c;
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e,
    };
}
function pk(e, t = !1, n = !0) {
    jt(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
    );
    let r = [],
        o =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (s, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
                )
                .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
            ? (o += "\\/*$")
            : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
            [new RegExp(o, t ? void 0 : "i"), r]
    );
}
function gk(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            jt(
                !1,
                `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
            ),
                e
        );
    }
}
function sn(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
var i0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    vk = (e) => i0.test(e);
function yk(e, t = "/") {
    let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? ko(e) : e,
        i;
    if (n)
        if (vk(n)) i = n;
        else {
            if (n.includes("//")) {
                let s = n;
                (n = n.replace(/\/\/+/g, "/")),
                    jt(!1, `Pathnames cannot have embedded double slashes - normalizing ${s} -> ${n}`);
            }
            n.startsWith("/") ? (i = Gf(n.substring(1), "/")) : (i = Gf(n, t));
        }
    else i = t;
    return { pathname: i, search: bk(r), hash: kk(o) };
}
function Gf(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((o) => {
            o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
        }),
            n.length > 1 ? n.join("/") : "/"
    );
}
function wl(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function xk(e) {
    return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function s0(e) {
    let t = xk(e);
    return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function a0(e, t, n, r = !1) {
    let o;
    typeof e == "string"
        ? (o = ko(e))
        : ((o = { ...e }),
            fe(!o.pathname || !o.pathname.includes("?"), wl("?", "pathname", "search", o)),
            fe(!o.pathname || !o.pathname.includes("#"), wl("#", "pathname", "hash", o)),
            fe(!o.search || !o.search.includes("#"), wl("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
        s = i ? "/" : o.pathname,
        a;
    if (s == null) a = n;
    else {
        let f = t.length - 1;
        if (!r && s.startsWith("..")) {
            let p = s.split("/");
            for (; p[0] === ".."; ) p.shift(), (f -= 1);
            o.pathname = p.join("/");
        }
        a = f >= 0 ? t[f] : "/";
    }
    let l = yk(o, a),
        c = s && s !== "/" && s.endsWith("/"),
        d = (i || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l;
}
var Jt = (e) => e.join("/").replace(/\/\/+/g, "/"),
    wk = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    bk = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    kk = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
    Ck = class {
        constructor(e, t, n, r = !1) {
            (this.status = e),
                (this.statusText = t || ""),
                (this.internal = r),
                n instanceof Error ? ((this.data = n.toString()), (this.error = n)) : (this.data = n);
        }
    };
function Sk(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
function Nk(e) {
    return (
        e
            .map((t) => t.route.path)
            .filter(Boolean)
            .join("/")
            .replace(/\/\/*/g, "/") || "/"
    );
}
var l0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function u0(e, t) {
    let n = e;
    if (typeof n != "string" || !i0.test(n)) return { absoluteURL: void 0, isExternal: !1, to: n };
    let r = n,
        o = !1;
    if (l0)
        try {
            let i = new URL(window.location.href),
                s = n.startsWith("//") ? new URL(i.protocol + n) : new URL(n),
                a = sn(s.pathname, t);
            s.origin === i.origin && a != null ? (n = a + s.search + s.hash) : (o = !0);
        } catch {
            jt(
                !1,
                `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
            );
        }
    return { absoluteURL: r, isExternal: o, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var c0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(c0);
var Ek = ["GET", ...c0];
new Set(Ek);
var Co = y.createContext(null);
Co.displayName = "DataRouter";
var La = y.createContext(null);
La.displayName = "DataRouterState";
var Tk = y.createContext(!1),
    d0 = y.createContext({ isTransitioning: !1 });
d0.displayName = "ViewTransition";
var Pk = y.createContext(new Map());
Pk.displayName = "Fetchers";
var jk = y.createContext(null);
jk.displayName = "Await";
var ct = y.createContext(null);
ct.displayName = "Navigation";
var Li = y.createContext(null);
Li.displayName = "Location";
var ln = y.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ln.displayName = "Route";
var Yc = y.createContext(null);
Yc.displayName = "RouteError";
var f0 = "REACT_ROUTER_ERROR",
    Rk = "REDIRECT",
    Mk = "ROUTE_ERROR_RESPONSE";
function Ok(e) {
    if (e.startsWith(`${f0}:${Rk}:{`))
        try {
            let t = JSON.parse(e.slice(28));
            if (
                typeof t == "object" &&
                t &&
                typeof t.status == "number" &&
                typeof t.statusText == "string" &&
                typeof t.location == "string" &&
                typeof t.reloadDocument == "boolean" &&
                typeof t.replace == "boolean"
            )
                return t;
        } catch {}
}
function Lk(e) {
    if (e.startsWith(`${f0}:${Mk}:{`))
        try {
            let t = JSON.parse(e.slice(40));
            if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
                return new Ck(t.status, t.statusText, t.data);
        } catch {}
}
function _k(e, { relative: t } = {}) {
    fe(_i(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: n, navigator: r } = y.useContext(ct),
        { hash: o, pathname: i, search: s } = Di(e, { relative: t }),
        a = i;
    return n !== "/" && (a = i === "/" ? n : Jt([n, i])), r.createHref({ pathname: a, search: s, hash: o });
}
function _i() {
    return y.useContext(Li) != null;
}
function qn() {
    return (
        fe(_i(), "useLocation() may be used only in the context of a <Router> component."), y.useContext(Li).location
    );
}
var h0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function m0(e) {
    y.useContext(ct).static || y.useLayoutEffect(e);
}
function Dk() {
    let { isDataRoute: e } = y.useContext(ln);
    return e ? Kk() : Ak();
}
function Ak() {
    fe(_i(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = y.useContext(Co),
        { basename: t, navigator: n } = y.useContext(ct),
        { matches: r } = y.useContext(ln),
        { pathname: o } = qn(),
        i = JSON.stringify(s0(r)),
        s = y.useRef(!1);
    return (
        m0(() => {
            s.current = !0;
        }),
            y.useCallback(
                (l, c = {}) => {
                    if ((jt(s.current, h0), !s.current)) return;
                    if (typeof l == "number") {
                        n.go(l);
                        return;
                    }
                    let d = a0(l, JSON.parse(i), o, c.relative === "path");
                    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Jt([t, d.pathname])),
                        (c.replace ? n.replace : n.push)(d, c.state, c);
                },
                [t, n, i, o, e]
            )
    );
}
y.createContext(null);
function Di(e, { relative: t } = {}) {
    let { matches: n } = y.useContext(ln),
        { pathname: r } = qn(),
        o = JSON.stringify(s0(n));
    return y.useMemo(() => a0(e, JSON.parse(o), r, t === "path"), [e, o, r, t]);
}
function Ik(e, t) {
    return p0(e, t);
}
function p0(e, t, n, r, o) {
    var m;
    fe(_i(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: i } = y.useContext(ct),
        { matches: s } = y.useContext(ln),
        a = s[s.length - 1],
        l = a ? a.params : {},
        c = a ? a.pathname : "/",
        d = a ? a.pathnameBase : "/",
        f = a && a.route;
    {
        let g = (f && f.path) || "";
        v0(
            c,
            !f || g.endsWith("*") || g.endsWith("*?"),
            `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g === "/" ? "*" : `${g}/*`}">.`
        );
    }
    let p = qn(),
        h;
    if (t) {
        let g = typeof t == "string" ? ko(t) : t;
        fe(
            d === "/" || ((m = g.pathname) == null ? void 0 : m.startsWith(d)),
            `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${g.pathname}" was given in the \`location\` prop.`
        ),
            (h = g);
    } else h = p;
    let b = h.pathname || "/",
        x = b;
    if (d !== "/") {
        let g = d.replace(/^\//, "").split("/");
        x = "/" + b.replace(/^\//, "").split("/").slice(g.length).join("/");
    }
    let w = n0(e, { pathname: x });
    jt(f || w != null, `No routes matched location "${h.pathname}${h.search}${h.hash}" `),
        jt(
            w == null ||
            w[w.length - 1].route.element !== void 0 ||
            w[w.length - 1].route.Component !== void 0 ||
            w[w.length - 1].route.lazy !== void 0,
            `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
        );
    let v = Bk(
        w &&
        w.map((g) =>
            Object.assign({}, g, {
                params: Object.assign({}, l, g.params),
                pathname: Jt([
                    d,
                    i.encodeLocation
                        ? i.encodeLocation(g.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname
                        : g.pathname,
                ]),
                pathnameBase:
                    g.pathnameBase === "/"
                        ? d
                        : Jt([
                            d,
                            i.encodeLocation
                                ? i.encodeLocation(g.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23"))
                                    .pathname
                                : g.pathnameBase,
                        ]),
            })
        ),
        s,
        n,
        r,
        o
    );
    return t && v
        ? y.createElement(
            Li.Provider,
            {
                value: {
                    location: { pathname: "/", search: "", hash: "", state: null, key: "default", ...h },
                    navigationType: "POP",
                },
            },
            v
        )
        : v;
}
function Fk() {
    let e = Yk(),
        t = Sk(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = "rgba(200,200,200, 0.5)",
        o = { padding: "0.5rem", backgroundColor: r },
        i = { padding: "2px 4px", backgroundColor: r },
        s = null;
    return (
        console.error("Error handled by React Router default ErrorBoundary:", e),
            (s = y.createElement(
                y.Fragment,
                null,
                y.createElement("p", null, "💿 Hey developer 👋"),
                y.createElement(
                    "p",
                    null,
                    "You can provide a way better UX than this when your app throws errors by providing your own ",
                    y.createElement("code", { style: i }, "ErrorBoundary"),
                    " or",
                    " ",
                    y.createElement("code", { style: i }, "errorElement"),
                    " prop on your route."
                )
            )),
            y.createElement(
                y.Fragment,
                null,
                y.createElement("h2", null, "Unexpected Application Error!"),
                y.createElement("h3", { style: { fontStyle: "italic" } }, t),
                n ? y.createElement("pre", { style: o }, n) : null,
                s
            )
    );
}
var zk = y.createElement(Fk, null),
    g0 = class extends y.Component {
        constructor(e) {
            super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
        }
        static getDerivedStateFromError(e) {
            return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location || (t.revalidation !== "idle" && e.revalidation === "idle")
                ? { error: e.error, location: e.location, revalidation: e.revalidation }
                : {
                    error: e.error !== void 0 ? e.error : t.error,
                    location: t.location,
                    revalidation: e.revalidation || t.revalidation,
                };
        }
        componentDidCatch(e, t) {
            this.props.onError
                ? this.props.onError(e, t)
                : console.error("React Router caught the following error during render", e);
        }
        render() {
            let e = this.state.error;
            if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
                const n = Lk(e.digest);
                n && (e = n);
            }
            let t =
                e !== void 0
                    ? y.createElement(
                    ln.Provider,
                    { value: this.props.routeContext },
                    y.createElement(Yc.Provider, { value: e, children: this.props.component })
                    )
                    : this.props.children;
            return this.context ? y.createElement($k, { error: e }, t) : t;
        }
    };
g0.contextType = Tk;
var bl = new WeakMap();
function $k({ children: e, error: t }) {
    let { basename: n } = y.useContext(ct);
    if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
        let r = Ok(t.digest);
        if (r) {
            let o = bl.get(t);
            if (o) throw o;
            let i = u0(r.location, n);
            if (l0 && !bl.get(t))
                if (i.isExternal || r.reloadDocument) window.location.href = i.absoluteURL || i.to;
                else {
                    const s = Promise.resolve().then(() =>
                        window.__reactRouterDataRouter.navigate(i.to, { replace: r.replace })
                    );
                    throw (bl.set(t, s), s);
                }
            return y.createElement("meta", { httpEquiv: "refresh", content: `0;url=${i.absoluteURL || i.to}` });
        }
    }
    return e;
}
function Hk({ routeContext: e, match: t, children: n }) {
    let r = y.useContext(Co);
    return (
        r &&
        r.static &&
        r.staticContext &&
        (t.route.errorElement || t.route.ErrorBoundary) &&
        (r.staticContext._deepestRenderedBoundaryId = t.route.id),
            y.createElement(ln.Provider, { value: e }, n)
    );
}
function Bk(e, t = [], n = null, r = null, o = null) {
    if (e == null) {
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if (t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null;
    }
    let i = e,
        s = n == null ? void 0 : n.errors;
    if (s != null) {
        let d = i.findIndex((f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0);
        fe(d >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),
            (i = i.slice(0, Math.min(i.length, d + 1)));
    }
    let a = !1,
        l = -1;
    if (n)
        for (let d = 0; d < i.length; d++) {
            let f = i[d];
            if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (l = d), f.route.id)) {
                let { loaderData: p, errors: h } = n,
                    b = f.route.loader && !p.hasOwnProperty(f.route.id) && (!h || h[f.route.id] === void 0);
                if (f.route.lazy || b) {
                    (a = !0), l >= 0 ? (i = i.slice(0, l + 1)) : (i = [i[0]]);
                    break;
                }
            }
        }
    let c =
        n && r
            ? (d, f) => {
                var p, h;
                r(d, {
                    location: n.location,
                    params: ((h = (p = n.matches) == null ? void 0 : p[0]) == null ? void 0 : h.params) ?? {},
                    unstable_pattern: Nk(n.matches),
                    errorInfo: f,
                });
            }
            : void 0;
    return i.reduceRight((d, f, p) => {
        let h,
            b = !1,
            x = null,
            w = null;
        n &&
        ((h = s && f.route.id ? s[f.route.id] : void 0),
            (x = f.route.errorElement || zk),
        a &&
        (l < 0 && p === 0
            ? (v0(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration"
            ),
                (b = !0),
                (w = null))
            : l === p && ((b = !0), (w = f.route.hydrateFallbackElement || null))));
        let v = t.concat(i.slice(0, p + 1)),
            m = () => {
                let g;
                return (
                    h
                        ? (g = x)
                        : b
                        ? (g = w)
                        : f.route.Component
                            ? (g = y.createElement(f.route.Component, null))
                            : f.route.element
                                ? (g = f.route.element)
                                : (g = d),
                        y.createElement(Hk, {
                            match: f,
                            routeContext: { outlet: d, matches: v, isDataRoute: n != null },
                            children: g,
                        })
                );
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
            ? y.createElement(g0, {
                location: n.location,
                revalidation: n.revalidation,
                component: x,
                error: h,
                children: m(),
                routeContext: { outlet: null, matches: v, isDataRoute: !0 },
                onError: c,
            })
            : m();
    }, null);
}
function Kc(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Wk(e) {
    let t = y.useContext(Co);
    return fe(t, Kc(e)), t;
}
function Uk(e) {
    let t = y.useContext(La);
    return fe(t, Kc(e)), t;
}
function Vk(e) {
    let t = y.useContext(ln);
    return fe(t, Kc(e)), t;
}
function Gc(e) {
    let t = Vk(e),
        n = t.matches[t.matches.length - 1];
    return fe(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function Qk() {
    return Gc("useRouteId");
}
function Yk() {
    var r;
    let e = y.useContext(Yc),
        t = Uk("useRouteError"),
        n = Gc("useRouteError");
    return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function Kk() {
    let { router: e } = Wk("useNavigate"),
        t = Gc("useNavigate"),
        n = y.useRef(!1);
    return (
        m0(() => {
            n.current = !0;
        }),
            y.useCallback(
                async (o, i = {}) => {
                    jt(n.current, h0),
                    n.current &&
                    (typeof o == "number" ? await e.navigate(o) : await e.navigate(o, { fromRouteId: t, ...i }));
                },
                [e, t]
            )
    );
}
var qf = {};
function v0(e, t, n) {
    !t && !qf[e] && ((qf[e] = !0), jt(!1, n));
}
y.memo(Gk);
function Gk({ routes: e, future: t, state: n, onError: r }) {
    return p0(e, void 0, n, r, t);
}
function Ru(e) {
    fe(
        !1,
        "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
    );
}
function qk({
                basename: e = "/",
                children: t = null,
                location: n,
                navigationType: r = "POP",
                navigator: o,
                static: i = !1,
                unstable_useTransitions: s,
            }) {
    fe(!_i(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let a = e.replace(/^\/*/, "/"),
        l = y.useMemo(
            () => ({ basename: a, navigator: o, static: i, unstable_useTransitions: s, future: {} }),
            [a, o, i, s]
        );
    typeof n == "string" && (n = ko(n));
    let { pathname: c = "/", search: d = "", hash: f = "", state: p = null, key: h = "default" } = n,
        b = y.useMemo(() => {
            let x = sn(c, a);
            return x == null
                ? null
                : { location: { pathname: x, search: d, hash: f, state: p, key: h }, navigationType: r };
        }, [a, c, d, f, p, h, r]);
    return (
        jt(
            b != null,
            `<Router basename="${a}"> is not able to match the URL "${c}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`
        ),
            b == null
                ? null
                : y.createElement(ct.Provider, { value: l }, y.createElement(Li.Provider, { children: t, value: b }))
    );
}
function Xk({ children: e, location: t }) {
    return Ik(Mu(e), t);
}
function Mu(e, t = []) {
    let n = [];
    return (
        y.Children.forEach(e, (r, o) => {
            if (!y.isValidElement(r)) return;
            let i = [...t, o];
            if (r.type === y.Fragment) {
                n.push.apply(n, Mu(r.props.children, i));
                return;
            }
            fe(
                r.type === Ru,
                `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
            ),
                fe(!r.props.index || !r.props.children, "An index route cannot have child routes.");
            let s = {
                id: r.props.id || i.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                middleware: r.props.middleware,
                loader: r.props.loader,
                action: r.props.action,
                hydrateFallbackElement: r.props.hydrateFallbackElement,
                HydrateFallback: r.props.HydrateFallback,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary:
                    r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (s.children = Mu(r.props.children, i)), n.push(s);
        }),
            n
    );
}
var Ss = "get",
    Ns = "application/x-www-form-urlencoded";
function _a(e) {
    return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Jk(e) {
    return _a(e) && e.tagName.toLowerCase() === "button";
}
function Zk(e) {
    return _a(e) && e.tagName.toLowerCase() === "form";
}
function eC(e) {
    return _a(e) && e.tagName.toLowerCase() === "input";
}
function tC(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function nC(e, t) {
    return e.button === 0 && (!t || t === "_self") && !tC(e);
}
var ls = null;
function rC() {
    if (ls === null)
        try {
            new FormData(document.createElement("form"), 0), (ls = !1);
        } catch {
            ls = !0;
        }
    return ls;
}
var oC = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function kl(e) {
    return e != null && !oC.has(e)
        ? (jt(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ns}"`),
            null)
        : e;
}
function iC(e, t) {
    let n, r, o, i, s;
    if (Zk(e)) {
        let a = e.getAttribute("action");
        (r = a ? sn(a, t) : null),
            (n = e.getAttribute("method") || Ss),
            (o = kl(e.getAttribute("enctype")) || Ns),
            (i = new FormData(e));
    } else if (Jk(e) || (eC(e) && (e.type === "submit" || e.type === "image"))) {
        let a = e.form;
        if (a == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let l = e.getAttribute("formaction") || a.getAttribute("action");
        if (
            ((r = l ? sn(l, t) : null),
                (n = e.getAttribute("formmethod") || a.getAttribute("method") || Ss),
                (o = kl(e.getAttribute("formenctype")) || kl(a.getAttribute("enctype")) || Ns),
                (i = new FormData(a, e)),
                !rC())
        ) {
            let { name: c, type: d, value: f } = e;
            if (d === "image") {
                let p = c ? `${c}.` : "";
                i.append(`${p}x`, "0"), i.append(`${p}y`, "0");
            } else c && i.append(c, f);
        }
    } else {
        if (_a(e))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        (n = Ss), (r = null), (o = Ns), (s = e);
    }
    return (
        i && o === "text/plain" && ((s = i), (i = void 0)),
            { action: r, method: n.toLowerCase(), encType: o, formData: i, body: s }
    );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function qc(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function sC(e, t, n, r) {
    let o =
        typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return (
        n
            ? o.pathname.endsWith("/")
            ? (o.pathname = `${o.pathname}_.${r}`)
            : (o.pathname = `${o.pathname}.${r}`)
            : o.pathname === "/"
            ? (o.pathname = `_root.${r}`)
            : t && sn(o.pathname, t) === "/"
                ? (o.pathname = `${t.replace(/\/$/, "")}/_root.${r}`)
                : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${r}`),
            o
    );
}
async function aC(e, t) {
    if (e.id in t) return t[e.id];
    try {
        let n = await import(e.module);
        return (t[e.id] = n), n;
    } catch (n) {
        return (
            console.error(`Error loading route module \`${e.module}\`, reloading page...`),
                console.error(n),
            window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
                window.location.reload(),
                new Promise(() => {})
        );
    }
}
function lC(e) {
    return e == null
        ? !1
        : e.href == null
            ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string"
            : typeof e.rel == "string" && typeof e.href == "string";
}
async function uC(e, t, n) {
    let r = await Promise.all(
        e.map(async (o) => {
            let i = t.routes[o.route.id];
            if (i) {
                let s = await aC(i, n);
                return s.links ? s.links() : [];
            }
            return [];
        })
    );
    return hC(
        r
            .flat(1)
            .filter(lC)
            .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
            .map((o) => (o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }))
    );
}
function Xf(e, t, n, r, o, i) {
    let s = (l, c) => (n[c] ? l.route.id !== n[c].route.id : !0),
        a = (l, c) => {
            var d;
            return (
                n[c].pathname !== l.pathname ||
                (((d = n[c].route.path) == null ? void 0 : d.endsWith("*")) && n[c].params["*"] !== l.params["*"])
            );
        };
    return i === "assets"
        ? t.filter((l, c) => s(l, c) || a(l, c))
        : i === "data"
            ? t.filter((l, c) => {
                var f;
                let d = r.routes[l.route.id];
                if (!d || !d.hasLoader) return !1;
                if (s(l, c) || a(l, c)) return !0;
                if (l.route.shouldRevalidate) {
                    let p = l.route.shouldRevalidate({
                        currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                        currentParams: ((f = n[0]) == null ? void 0 : f.params) || {},
                        nextUrl: new URL(e, window.origin),
                        nextParams: l.params,
                        defaultShouldRevalidate: !0,
                    });
                    if (typeof p == "boolean") return p;
                }
                return !0;
            })
            : [];
}
function cC(e, t, { includeHydrateFallback: n } = {}) {
    return dC(
        e
            .map((r) => {
                let o = t.routes[r.route.id];
                if (!o) return [];
                let i = [o.module];
                return (
                    o.clientActionModule && (i = i.concat(o.clientActionModule)),
                    o.clientLoaderModule && (i = i.concat(o.clientLoaderModule)),
                    n && o.hydrateFallbackModule && (i = i.concat(o.hydrateFallbackModule)),
                    o.imports && (i = i.concat(o.imports)),
                        i
                );
            })
            .flat(1)
    );
}
function dC(e) {
    return [...new Set(e)];
}
function fC(e) {
    let t = {},
        n = Object.keys(e).sort();
    for (let r of n) t[r] = e[r];
    return t;
}
function hC(e, t) {
    let n = new Set();
    return (
        new Set(t),
            e.reduce((r, o) => {
                let i = JSON.stringify(fC(o));
                return n.has(i) || (n.add(i), r.push({ key: i, link: o })), r;
            }, [])
    );
}
function y0() {
    let e = y.useContext(Co);
    return qc(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function mC() {
    let e = y.useContext(La);
    return qc(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var Xc = y.createContext(void 0);
Xc.displayName = "FrameworkContext";
function x0() {
    let e = y.useContext(Xc);
    return qc(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function pC(e, t) {
    let n = y.useContext(Xc),
        [r, o] = y.useState(!1),
        [i, s] = y.useState(!1),
        { onFocus: a, onBlur: l, onMouseEnter: c, onMouseLeave: d, onTouchStart: f } = t,
        p = y.useRef(null);
    y.useEffect(() => {
        if ((e === "render" && s(!0), e === "viewport")) {
            let x = (v) => {
                    v.forEach((m) => {
                        s(m.isIntersecting);
                    });
                },
                w = new IntersectionObserver(x, { threshold: 0.5 });
            return (
                p.current && w.observe(p.current),
                    () => {
                        w.disconnect();
                    }
            );
        }
    }, [e]),
        y.useEffect(() => {
            if (r) {
                let x = setTimeout(() => {
                    s(!0);
                }, 100);
                return () => {
                    clearTimeout(x);
                };
            }
        }, [r]);
    let h = () => {
            o(!0);
        },
        b = () => {
            o(!1), s(!1);
        };
    return n
        ? e !== "intent"
            ? [i, p, {}]
            : [
                i,
                p,
                {
                    onFocus: Io(a, h),
                    onBlur: Io(l, b),
                    onMouseEnter: Io(c, h),
                    onMouseLeave: Io(d, b),
                    onTouchStart: Io(f, h),
                },
            ]
        : [!1, p, {}];
}
function Io(e, t) {
    return (n) => {
        e && e(n), n.defaultPrevented || t(n);
    };
}
function gC({ page: e, ...t }) {
    let { router: n } = y0(),
        r = y.useMemo(() => n0(n.routes, e, n.basename), [n.routes, e, n.basename]);
    return r ? y.createElement(yC, { page: e, matches: r, ...t }) : null;
}
function vC(e) {
    let { manifest: t, routeModules: n } = x0(),
        [r, o] = y.useState([]);
    return (
        y.useEffect(() => {
            let i = !1;
            return (
                uC(e, t, n).then((s) => {
                    i || o(s);
                }),
                    () => {
                        i = !0;
                    }
            );
        }, [e, t, n]),
            r
    );
}
function yC({ page: e, matches: t, ...n }) {
    let r = qn(),
        { future: o, manifest: i, routeModules: s } = x0(),
        { basename: a } = y0(),
        { loaderData: l, matches: c } = mC(),
        d = y.useMemo(() => Xf(e, t, c, i, r, "data"), [e, t, c, i, r]),
        f = y.useMemo(() => Xf(e, t, c, i, r, "assets"), [e, t, c, i, r]),
        p = y.useMemo(() => {
            if (e === r.pathname + r.search + r.hash) return [];
            let x = new Set(),
                w = !1;
            if (
                (t.forEach((m) => {
                    var k;
                    let g = i.routes[m.route.id];
                    !g ||
                    !g.hasLoader ||
                    ((!d.some((C) => C.route.id === m.route.id) &&
                        m.route.id in l &&
                        (k = s[m.route.id]) != null &&
                        k.shouldRevalidate) ||
                    g.hasClientLoader
                        ? (w = !0)
                        : x.add(m.route.id));
                }),
                x.size === 0)
            )
                return [];
            let v = sC(e, a, o.unstable_trailingSlashAwareDataRequests, "data");
            return (
                w &&
                x.size > 0 &&
                v.searchParams.set(
                    "_routes",
                    t
                        .filter((m) => x.has(m.route.id))
                        .map((m) => m.route.id)
                        .join(",")
                ),
                    [v.pathname + v.search]
            );
        }, [a, o.unstable_trailingSlashAwareDataRequests, l, r, i, d, t, e, s]),
        h = y.useMemo(() => cC(f, i), [f, i]),
        b = vC(f);
    return y.createElement(
        y.Fragment,
        null,
        p.map((x) => y.createElement("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...n })),
        h.map((x) => y.createElement("link", { key: x, rel: "modulepreload", href: x, ...n })),
        b.map(({ key: x, link: w }) => y.createElement("link", { key: x, nonce: n.nonce, ...w }))
    );
}
function xC(...e) {
    return (t) => {
        e.forEach((n) => {
            typeof n == "function" ? n(t) : n != null && (n.current = t);
        });
    };
}
var wC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    wC && (window.__reactRouterVersion = "7.12.0");
} catch {}
function bC({ basename: e, children: t, unstable_useTransitions: n, window: r }) {
    let o = y.useRef();
    o.current == null && (o.current = ek({ window: r, v5Compat: !0 }));
    let i = o.current,
        [s, a] = y.useState({ action: i.action, location: i.location }),
        l = y.useCallback(
            (c) => {
                n === !1 ? a(c) : y.startTransition(() => a(c));
            },
            [n]
        );
    return (
        y.useLayoutEffect(() => i.listen(l), [i, l]),
            y.createElement(qk, {
                basename: e,
                children: t,
                location: s.location,
                navigationType: s.action,
                navigator: i,
                unstable_useTransitions: n,
            })
    );
}
var w0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    b0 = y.forwardRef(function (
        {
            onClick: t,
            discover: n = "render",
            prefetch: r = "none",
            relative: o,
            reloadDocument: i,
            replace: s,
            state: a,
            target: l,
            to: c,
            preventScrollReset: d,
            viewTransition: f,
            unstable_defaultShouldRevalidate: p,
            ...h
        },
        b
    ) {
        let { basename: x, unstable_useTransitions: w } = y.useContext(ct),
            v = typeof c == "string" && w0.test(c),
            m = u0(c, x);
        c = m.to;
        let g = _k(c, { relative: o }),
            [k, C, S] = pC(r, h),
            N = NC(c, {
                replace: s,
                state: a,
                target: l,
                preventScrollReset: d,
                relative: o,
                viewTransition: f,
                unstable_defaultShouldRevalidate: p,
                unstable_useTransitions: w,
            });
        function j(M) {
            t && t(M), M.defaultPrevented || N(M);
        }
        let L = y.createElement("a", {
            ...h,
            ...S,
            href: m.absoluteURL || g,
            onClick: m.isExternal || i ? t : j,
            ref: xC(b, C),
            target: l,
            "data-discover": !v && n === "render" ? "true" : void 0,
        });
        return k && !v ? y.createElement(y.Fragment, null, L, y.createElement(gC, { page: g })) : L;
    });
b0.displayName = "Link";
var kC = y.forwardRef(function (
    {
        "aria-current": t = "page",
        caseSensitive: n = !1,
        className: r = "",
        end: o = !1,
        style: i,
        to: s,
        viewTransition: a,
        children: l,
        ...c
    },
    d
) {
    let f = Di(s, { relative: c.relative }),
        p = qn(),
        h = y.useContext(La),
        { navigator: b, basename: x } = y.useContext(ct),
        w = h != null && RC(f) && a === !0,
        v = b.encodeLocation ? b.encodeLocation(f).pathname : f.pathname,
        m = p.pathname,
        g = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
    n || ((m = m.toLowerCase()), (g = g ? g.toLowerCase() : null), (v = v.toLowerCase())),
    g && x && (g = sn(g, x) || g);
    const k = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
    let C = m === v || (!o && m.startsWith(v) && m.charAt(k) === "/"),
        S = g != null && (g === v || (!o && g.startsWith(v) && g.charAt(v.length) === "/")),
        N = { isActive: C, isPending: S, isTransitioning: w },
        j = C ? t : void 0,
        L;
    typeof r == "function"
        ? (L = r(N))
        : (L = [r, C ? "active" : null, S ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" "));
    let M = typeof i == "function" ? i(N) : i;
    return y.createElement(
        b0,
        { ...c, "aria-current": j, className: L, ref: d, style: M, to: s, viewTransition: a },
        typeof l == "function" ? l(N) : l
    );
});
kC.displayName = "NavLink";
var CC = y.forwardRef(
    (
        {
            discover: e = "render",
            fetcherKey: t,
            navigate: n,
            reloadDocument: r,
            replace: o,
            state: i,
            method: s = Ss,
            action: a,
            onSubmit: l,
            relative: c,
            preventScrollReset: d,
            viewTransition: f,
            unstable_defaultShouldRevalidate: p,
            ...h
        },
        b
    ) => {
        let { unstable_useTransitions: x } = y.useContext(ct),
            w = PC(),
            v = jC(a, { relative: c }),
            m = s.toLowerCase() === "get" ? "get" : "post",
            g = typeof a == "string" && w0.test(a),
            k = (C) => {
                if ((l && l(C), C.defaultPrevented)) return;
                C.preventDefault();
                let S = C.nativeEvent.submitter,
                    N = (S == null ? void 0 : S.getAttribute("formmethod")) || s,
                    j = () =>
                        w(S || C.currentTarget, {
                            fetcherKey: t,
                            method: N,
                            navigate: n,
                            replace: o,
                            state: i,
                            relative: c,
                            preventScrollReset: d,
                            viewTransition: f,
                            unstable_defaultShouldRevalidate: p,
                        });
                x && n !== !1 ? y.startTransition(() => j()) : j();
            };
        return y.createElement("form", {
            ref: b,
            method: m,
            action: v,
            onSubmit: r ? l : k,
            ...h,
            "data-discover": !g && e === "render" ? "true" : void 0,
        });
    }
);
CC.displayName = "Form";
function SC(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function k0(e) {
    let t = y.useContext(Co);
    return fe(t, SC(e)), t;
}
function NC(
    e,
    {
        target: t,
        replace: n,
        state: r,
        preventScrollReset: o,
        relative: i,
        viewTransition: s,
        unstable_defaultShouldRevalidate: a,
        unstable_useTransitions: l,
    } = {}
) {
    let c = Dk(),
        d = qn(),
        f = Di(e, { relative: i });
    return y.useCallback(
        (p) => {
            if (nC(p, t)) {
                p.preventDefault();
                let h = n !== void 0 ? n : ki(d) === ki(f),
                    b = () =>
                        c(e, {
                            replace: h,
                            state: r,
                            preventScrollReset: o,
                            relative: i,
                            viewTransition: s,
                            unstable_defaultShouldRevalidate: a,
                        });
                l ? y.startTransition(() => b()) : b();
            }
        },
        [d, c, f, n, r, t, e, o, i, s, a, l]
    );
}
var EC = 0,
    TC = () => `__${String(++EC)}__`;
function PC() {
    let { router: e } = k0("useSubmit"),
        { basename: t } = y.useContext(ct),
        n = Qk(),
        r = e.fetch,
        o = e.navigate;
    return y.useCallback(
        async (i, s = {}) => {
            let { action: a, method: l, encType: c, formData: d, body: f } = iC(i, t);
            if (s.navigate === !1) {
                let p = s.fetcherKey || TC();
                await r(p, n, s.action || a, {
                    unstable_defaultShouldRevalidate: s.unstable_defaultShouldRevalidate,
                    preventScrollReset: s.preventScrollReset,
                    formData: d,
                    body: f,
                    formMethod: s.method || l,
                    formEncType: s.encType || c,
                    flushSync: s.flushSync,
                });
            } else
                await o(s.action || a, {
                    unstable_defaultShouldRevalidate: s.unstable_defaultShouldRevalidate,
                    preventScrollReset: s.preventScrollReset,
                    formData: d,
                    body: f,
                    formMethod: s.method || l,
                    formEncType: s.encType || c,
                    replace: s.replace,
                    state: s.state,
                    fromRouteId: n,
                    flushSync: s.flushSync,
                    viewTransition: s.viewTransition,
                });
        },
        [r, o, t, n]
    );
}
function jC(e, { relative: t } = {}) {
    let { basename: n } = y.useContext(ct),
        r = y.useContext(ln);
    fe(r, "useFormAction must be used inside a RouteContext");
    let [o] = r.matches.slice(-1),
        i = { ...Di(e || ".", { relative: t }) },
        s = qn();
    if (e == null) {
        i.search = s.search;
        let a = new URLSearchParams(i.search),
            l = a.getAll("index");
        if (l.some((d) => d === "")) {
            a.delete("index"), l.filter((f) => f).forEach((f) => a.append("index", f));
            let d = a.toString();
            i.search = d ? `?${d}` : "";
        }
    }
    return (
        (!e || e === ".") && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"),
        n !== "/" && (i.pathname = i.pathname === "/" ? n : Jt([n, i.pathname])),
            ki(i)
    );
}
function RC(e, { relative: t } = {}) {
    let n = y.useContext(d0);
    fe(
        n != null,
        "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename: r } = k0("useViewTransitionState"),
        o = Di(e, { relative: t });
    if (!n.isTransitioning) return !1;
    let i = sn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        s = sn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return ra(o.pathname, s) != null || ra(o.pathname, i) != null;
}
const MC = ng(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-body font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-border bg-transparent text-foreground hover:border-gold hover:text-gold",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                gold: "bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                goldOutline:
                    "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-primary-foreground",
            },
            size: {
                default: "h-10 px-4 py-2 rounded-sm",
                sm: "h-9 rounded-sm px-3",
                lg: "h-12 rounded-sm px-8 text-base tracking-wider uppercase",
                xl: "h-14 rounded-sm px-10 text-base tracking-widest uppercase",
                icon: "h-10 w-10 rounded-sm",
            },
        },
        defaultVariants: { variant: "default", size: "default" },
    }
    ),
    Ze = y.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
        const s = r ? vx : "button";
        return u.jsx(s, { className: Gn(MC({ variant: t, size: n, className: e })), ref: i, ...o });
    });
Ze.displayName = "Button";
const OC = () => {
        const [e, t] = y.useState(!1),
            n = [
                { name: "Trang Chủ", href: "#home" },
                { name: "Dịch Vụ", href: "#services" },
                { name: "Về Chúng Tôi", href: "#about" },
                { name: "Gallery", href: "#gallery" },
                { name: "Liên Hệ", href: "#contact" },
            ];
        return u.jsx("nav", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50",
            children: u.jsxs("div", {
                className: "container mx-auto px-4",
                children: [
                    u.jsxs("div", {
                        className: "flex items-center justify-between h-20",
                        children: [
                            u.jsxs("a", {
                                href: "#home",
                                className: "flex items-center gap-3 group",
                                children: [
                                    u.jsx(Na, {
                                        className:
                                            "w-8 h-8 text-gold transition-transform duration-300 group-hover:rotate-45",
                                    }),
                                    u.jsxs("div", {
                                        className: "flex flex-col",
                                        children: [
                                            u.jsx("span", {
                                                className:
                                                    "font-display text-xl font-semibold tracking-wider text-foreground",
                                                children: "CHÚ BÔN",
                                            }),
                                            u.jsx("span", {
                                                className: "font-accent text-xs tracking-[0.3em] text-gold uppercase",
                                                children: "Barberhouse",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            u.jsxs("div", {
                                className: "hidden md:flex items-center gap-8",
                                children: [
                                    n.map((r) =>
                                        u.jsx(
                                            "a",
                                            {
                                                href: r.href,
                                                className:
                                                    "font-body text-sm tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300 uppercase",
                                                children: r.name,
                                            },
                                            r.name
                                        )
                                    ),
                                    u.jsx(Ze, { variant: "gold", size: "default", children: "Đặt Lịch" }),
                                ],
                            }),
                            u.jsx("button", {
                                className: "md:hidden text-foreground p-2",
                                onClick: () => t(!e),
                                children: e ? u.jsx(Xs, { className: "w-6 h-6" }) : u.jsx(C1, { className: "w-6 h-6" }),
                            }),
                        ],
                    }),
                    e &&
                    u.jsx("div", {
                        className: "md:hidden pb-6 animate-fade-up",
                        children: u.jsxs("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                n.map((r) =>
                                    u.jsx(
                                        "a",
                                        {
                                            href: r.href,
                                            className:
                                                "font-body text-sm tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300 uppercase py-2",
                                            onClick: () => t(!1),
                                            children: r.name,
                                        },
                                        r.name
                                    )
                                ),
                                u.jsx(Ze, { variant: "gold", size: "lg", className: "mt-2", children: "Đặt Lịch" }),
                            ],
                        }),
                    }),
                ],
            }),
        });
    },
    Ou = "/assets/hero-barbershop-BOWI9D_q.jpg",
    LC = () =>
        u.jsxs("section", {
            id: "home",
            className: "relative min-h-screen flex items-center justify-center overflow-hidden",
            children: [
                u.jsxs("div", {
                    className: "absolute inset-0",
                    children: [
                        u.jsx("img", {
                            src: Ou,
                            alt: "Luxury barbershop interior",
                            className: "w-full h-full object-cover",
                        }),
                        u.jsx("div", {
                            className:
                                "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40",
                        }),
                        u.jsx("div", {
                            className:
                                "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50",
                        }),
                    ],
                }),
                u.jsx("div", {
                    className: "relative container mx-auto px-4 py-32",
                    children: u.jsxs("div", {
                        className: "max-w-2xl",
                        children: [
                            u.jsxs("div", {
                                className: "flex items-center gap-4 mb-6 opacity-0 animate-fade-up",
                                children: [
                                    u.jsx("div", { className: "line-decorative" }),
                                    u.jsx("span", {
                                        className: "font-accent text-gold text-lg tracking-[0.3em] uppercase",
                                        children: "Đẳng Cấp & Phong Cách",
                                    }),
                                ],
                            }),
                            u.jsxs("h1", {
                                className:
                                    "font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-up delay-100",
                                children: [
                                    "Nghệ Thuật",
                                    u.jsx("br", {}),
                                    u.jsx("span", { className: "text-gradient-gold", children: "Cắt Tóc Nam" }),
                                ],
                            }),
                            u.jsx("p", {
                                className:
                                    "font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-up delay-200",
                                children:
                                    "Trải nghiệm dịch vụ cắt tóc cao cấp với đội ngũ thợ lành nghề, không gian sang trọng và phong cách phục vụ chuyên nghiệp nhất.",
                            }),
                            u.jsxs("div", {
                                className: "flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300",
                                children: [
                                    u.jsx(Ze, { variant: "gold", size: "xl", children: "Đặt Lịch Ngay" }),
                                    u.jsx(Ze, { variant: "goldOutline", size: "xl", children: "Xem Dịch Vụ" }),
                                ],
                            }),
                            u.jsxs("div", {
                                className:
                                    "grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-border/30 opacity-0 animate-fade-up delay-400",
                                children: [
                                    u.jsxs("div", {
                                        className: "text-center",
                                        children: [
                                            u.jsx("span", {
                                                className: "font-display text-3xl md:text-4xl font-semibold text-gold",
                                                children: "15+",
                                            }),
                                            u.jsx("p", {
                                                className: "font-body text-sm text-muted-foreground mt-1",
                                                children: "Năm Kinh Nghiệm",
                                            }),
                                        ],
                                    }),
                                    u.jsxs("div", {
                                        className: "text-center",
                                        children: [
                                            u.jsx("span", {
                                                className: "font-display text-3xl md:text-4xl font-semibold text-gold",
                                                children: "10K+",
                                            }),
                                            u.jsx("p", {
                                                className: "font-body text-sm text-muted-foreground mt-1",
                                                children: "Khách Hài Lòng",
                                            }),
                                        ],
                                    }),
                                    u.jsxs("div", {
                                        className: "text-center",
                                        children: [
                                            u.jsx("span", {
                                                className: "font-display text-3xl md:text-4xl font-semibold text-gold",
                                                children: "5",
                                            }),
                                            u.jsx("p", {
                                                className: "font-body text-sm text-muted-foreground mt-1",
                                                children: "Thợ Chuyên Nghiệp",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                u.jsx("div", {
                    className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-float",
                    children: u.jsx("div", {
                        className: "w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2",
                        children: u.jsx("div", { className: "w-1 h-2 bg-gold rounded-full animate-pulse" }),
                    }),
                }),
            ],
        }),
    _C = "https://www.facebook.com/theanfbcom.vn",
    DC = () => {
        const e = () => {
                window.open(_C, "_blank");
            },
            t = () => {
                window.open("https://m.me/theanfbcom.vn", "_blank");
            };
        return u.jsxs("section", {
            className: "py-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 relative overflow-hidden",
            children: [
                u.jsx("div", {
                    className: "absolute inset-0 opacity-10",
                    children: u.jsx("div", {
                        className:
                            "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)),transparent_70%)]",
                    }),
                }),
                u.jsx("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: u.jsxs("div", {
                        className: "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8",
                        children: [
                            u.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    u.jsx("div", {
                                        className:
                                            "w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse",
                                        children: u.jsx(_c, { className: "w-6 h-6 text-primary-foreground" }),
                                    }),
                                    u.jsxs("div", {
                                        className: "text-center md:text-left",
                                        children: [
                                            u.jsx("p", {
                                                className:
                                                    "font-display text-lg md:text-xl font-semibold text-foreground",
                                                children: "Theo dõi chúng tôi trên Facebook",
                                            }),
                                            u.jsx("p", {
                                                className: "font-body text-sm text-muted-foreground",
                                                children: "Cập nhật xu hướng mới nhất & ưu đãi đặc biệt",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            u.jsxs("div", {
                                className: "flex gap-3",
                                children: [
                                    u.jsxs(Ze, {
                                        variant: "gold",
                                        size: "lg",
                                        onClick: e,
                                        className: "gap-2",
                                        children: [u.jsx(y1, { className: "w-4 h-4" }), "Xem Facebook"],
                                    }),
                                    u.jsxs(Ze, {
                                        variant: "goldOutline",
                                        size: "lg",
                                        onClick: t,
                                        className: "gap-2",
                                        children: [u.jsx(vi, { className: "w-4 h-4" }), "Nhắn Tin"],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    AC = [
        {
            icon: Na,
            name: "Cắt Tóc Nam",
            description: "Kiểu tóc phù hợp với khuôn mặt và phong cách riêng",
            price: "30.000đ",
            duration: "30 phút",
        },
        {
            icon: g1,
            name: "Gội Đầu",
            description: "Gội đầu thư giãn kết hợp massage da đầu chuyên sâu",
            price: "30.000đ",
            duration: "15 phút",
        },
        {
            icon: v1,
            name: "Ráy Tai Tỉa Râu",
            description: "Ráy tai sạch sẽ kết hợp tỉa râu gọn gàng",
            price: "30.000đ",
            duration: "20 phút",
        },
        {
            icon: N1,
            name: "Nhuộm Tóc",
            description: "Nhuộm tóc với các màu thời trang, thuốc nhuộm an toàn",
            price: "300.000đ",
            duration: "60 phút",
        },
        {
            icon: wu,
            name: "Tẩy Trắng",
            description: "Tẩy trắng tóc chuyên nghiệp, không hại tóc",
            price: "499.000đ",
            duration: "90 phút",
        },
        {
            icon: w1,
            name: "Móc Like",
            description: "Móc highlight đẹp, tạo điểm nhấn cho mái tóc",
            price: "199.000đ",
            duration: "60 phút",
        },
        {
            icon: S1,
            name: "Nhuộm Đen",
            description: "Nhuộm đen tóc bóng mượt, che phủ tóc bạc",
            price: "99.000đ",
            duration: "45 phút",
        },
        {
            icon: T1,
            name: "Ép Size",
            description: "Ép duỗi tóc thẳng mượt, giữ nếp lâu",
            price: "149.000đ",
            duration: "60 phút",
        },
    ],
    IC = [
        {
            icon: _o,
            name: "Uốn Phồng",
            description: "Uốn phồng tự nhiên, tạo độ bồng bềnh cho tóc",
            price: "200.000đ",
            duration: "60 phút",
        },
        {
            icon: _o,
            name: "Uốn Chidorri",
            description: "Kiểu uốn Hàn Quốc hiện đại, xoăn nhẹ tự nhiên",
            price: "300.000đ",
            duration: "90 phút",
        },
        {
            icon: _o,
            name: "Uốn Ruffled",
            description: "Uốn sóng lơi, phong cách trẻ trung năng động",
            price: "300.000đ",
            duration: "90 phút",
        },
        {
            icon: _o,
            name: "Uốn Con Sâu",
            description: "Uốn xoăn nhỏ đa dạng kiểu, từ nhẹ đến đậm",
            price: "200K - 700K",
            duration: "60-120 phút",
        },
        {
            icon: _o,
            name: "Uốn Layer Ngắn",
            description: "Uốn layer cho tóc ngắn, tạo form đẹp tự nhiên",
            price: "199.000đ",
            duration: "60 phút",
        },
        {
            icon: og,
            name: "Uốn Trẻ Em",
            description: "Uốn nhẹ nhàng, an toàn cho bé yêu của bạn",
            price: "149.000đ",
            duration: "45 phút",
        },
    ],
    FC = () =>
        u.jsxs("section", {
            id: "services",
            className: "py-24 bg-gradient-dark relative overflow-hidden",
            children: [
                u.jsx("div", {
                    className: "absolute inset-0 opacity-5",
                    children: u.jsx("div", {
                        className: "absolute top-0 left-0 w-full h-full",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A55C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        },
                    }),
                }),
                u.jsxs("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: [
                        u.jsxs("div", {
                            className: "text-center mb-16",
                            children: [
                                u.jsxs("div", {
                                    className: "flex items-center justify-center gap-4 mb-4",
                                    children: [
                                        u.jsx("div", { className: "line-decorative" }),
                                        u.jsx("span", {
                                            className: "font-accent text-gold text-lg tracking-[0.3em] uppercase",
                                            children: "Dịch Vụ",
                                        }),
                                        u.jsx("div", { className: "line-decorative" }),
                                    ],
                                }),
                                u.jsxs("h2", {
                                    className:
                                        "font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6",
                                    children: [
                                        "Dịch Vụ ",
                                        u.jsx("span", { className: "text-gradient-gold", children: "Cao Cấp" }),
                                    ],
                                }),
                                u.jsx("p", {
                                    className: "font-body text-muted-foreground text-lg max-w-2xl mx-auto",
                                    children:
                                        "Chúng tôi mang đến những dịch vụ chăm sóc tóc và râu chất lượng nhất, giúp quý ông luôn tự tin và phong độ",
                                }),
                            ],
                        }),
                        u.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: AC.map((e, t) =>
                                u.jsxs(
                                    "div",
                                    {
                                        className:
                                            "group bg-card border border-border/50 p-8 hover:border-gold/50 transition-all duration-500 hover:shadow-gold relative overflow-hidden",
                                        style: { animationDelay: `${t * 100}ms` },
                                        children: [
                                            u.jsx("div", {
                                                className:
                                                    "absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                            }),
                                            u.jsxs("div", {
                                                className: "relative z-10",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-14 h-14 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300",
                                                        children: u.jsx(e.icon, { className: "w-6 h-6 text-gold" }),
                                                    }),
                                                    u.jsx("h3", {
                                                        className:
                                                            "font-display text-xl font-semibold text-foreground mb-3",
                                                        children: e.name,
                                                    }),
                                                    u.jsx("p", {
                                                        className:
                                                            "font-body text-sm text-muted-foreground mb-6 leading-relaxed",
                                                        children: e.description,
                                                    }),
                                                    u.jsxs("div", {
                                                        className:
                                                            "flex items-center justify-between pt-4 border-t border-border/30",
                                                        children: [
                                                            u.jsx("span", {
                                                                className:
                                                                    "font-display text-2xl font-semibold text-gold",
                                                                children: e.price,
                                                            }),
                                                            u.jsx("span", {
                                                                className:
                                                                    "font-body text-xs text-muted-foreground uppercase tracking-wider",
                                                                children: e.duration,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    e.name
                                )
                            ),
                        }),
                        u.jsxs("div", {
                            className: "text-center my-16",
                            children: [
                                u.jsxs("h3", {
                                    className: "font-display text-3xl md:text-4xl font-semibold text-foreground mb-4",
                                    children: [
                                        "Dịch Vụ ",
                                        u.jsx("span", { className: "text-gradient-gold", children: "Uốn Tóc" }),
                                    ],
                                }),
                                u.jsx("p", {
                                    className: "font-body text-muted-foreground max-w-xl mx-auto",
                                    children: "Đa dạng kiểu uốn phù hợp với mọi phong cách và độ tuổi",
                                }),
                            ],
                        }),
                        u.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: IC.map((e, t) =>
                                u.jsxs(
                                    "div",
                                    {
                                        className:
                                            "group bg-card border border-border/50 p-8 hover:border-gold/50 transition-all duration-500 hover:shadow-gold relative overflow-hidden",
                                        style: { animationDelay: `${t * 100}ms` },
                                        children: [
                                            u.jsx("div", {
                                                className:
                                                    "absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                            }),
                                            u.jsxs("div", {
                                                className: "relative z-10",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-14 h-14 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300",
                                                        children: u.jsx(e.icon, { className: "w-6 h-6 text-gold" }),
                                                    }),
                                                    u.jsx("h3", {
                                                        className:
                                                            "font-display text-xl font-semibold text-foreground mb-3",
                                                        children: e.name,
                                                    }),
                                                    u.jsx("p", {
                                                        className:
                                                            "font-body text-sm text-muted-foreground mb-6 leading-relaxed",
                                                        children: e.description,
                                                    }),
                                                    u.jsxs("div", {
                                                        className:
                                                            "flex items-center justify-between pt-4 border-t border-border/30",
                                                        children: [
                                                            u.jsx("span", {
                                                                className:
                                                                    "font-display text-2xl font-semibold text-gold",
                                                                children: e.price,
                                                            }),
                                                            u.jsx("span", {
                                                                className:
                                                                    "font-body text-xs text-muted-foreground uppercase tracking-wider",
                                                                children: e.duration,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    e.name
                                )
                            ),
                        }),
                    ],
                }),
            ],
        }),
    zC = [
        {
            icon: og,
            title: "Cắt Tóc Trẻ Em 1 Tuổi",
            description: "MIỄN PHÍ cắt tóc cho bé 1 tuổi",
            highlight: "MIỄN PHÍ",
            color: "from-green-500/20 to-green-600/10",
        },
        {
            icon: P1,
            title: "Đi 5 Tính Tiền 4",
            description: "Cắt 5 lần chỉ trả tiền 4 lần",
            highlight: "TIẾT KIỆM 20%",
            color: "from-blue-500/20 to-blue-600/10",
        },
        {
            icon: x1,
            title: "Đi 10 Có Quà",
            description: "Tích lũy 10 lần cắt nhận quà tặng đặc biệt",
            highlight: "QUÀ TẶNG",
            color: "from-purple-500/20 to-purple-600/10",
        },
    ],
    $C = () =>
        u.jsxs("section", {
            className: "py-16 bg-charcoal-light relative overflow-hidden",
            children: [
                u.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" }),
                u.jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" }),
                u.jsxs("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: [
                        u.jsxs("div", {
                            className: "text-center mb-12",
                            children: [
                                u.jsxs("div", {
                                    className: "flex items-center justify-center gap-4 mb-4",
                                    children: [
                                        u.jsx("div", { className: "line-decorative" }),
                                        u.jsx("span", {
                                            className: "font-accent text-gold text-lg tracking-[0.3em] uppercase",
                                            children: "Ưu Đãi",
                                        }),
                                        u.jsx("div", { className: "line-decorative" }),
                                    ],
                                }),
                                u.jsxs("h2", {
                                    className: "font-display text-4xl md:text-5xl font-semibold text-foreground mb-4",
                                    children: [
                                        "Khuyến Mãi ",
                                        u.jsx("span", { className: "text-gradient-gold", children: "Đặc Biệt" }),
                                    ],
                                }),
                                u.jsx("p", {
                                    className: "font-body text-muted-foreground text-lg max-w-xl mx-auto",
                                    children: "Những ưu đãi hấp dẫn dành riêng cho khách hàng thân thiết",
                                }),
                            ],
                        }),
                        u.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: zC.map((e, t) =>
                                u.jsxs(
                                    "div",
                                    {
                                        className:
                                            "group relative bg-card border border-border/50 p-8 hover:border-gold/50 transition-all duration-500 hover:shadow-gold overflow-hidden",
                                        style: { animationDelay: `${t * 100}ms` },
                                        children: [
                                            u.jsx("div", {
                                                className: `absolute inset-0 bg-gradient-to-br ${e.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`,
                                            }),
                                            u.jsxs("div", {
                                                className: "relative z-10",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-16 h-16 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300",
                                                        children: u.jsx(e.icon, { className: "w-8 h-8 text-gold" }),
                                                    }),
                                                    u.jsx("div", {
                                                        className:
                                                            "inline-block px-3 py-1 bg-gold/20 border border-gold/30 mb-4",
                                                        children: u.jsx("span", {
                                                            className:
                                                                "font-accent text-gold text-sm font-semibold tracking-wider",
                                                            children: e.highlight,
                                                        }),
                                                    }),
                                                    u.jsx("h3", {
                                                        className:
                                                            "font-display text-xl font-semibold text-foreground mb-2",
                                                        children: e.title,
                                                    }),
                                                    u.jsx("p", {
                                                        className: "font-body text-muted-foreground",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            u.jsx("div", {
                                                className:
                                                    "absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/20 group-hover:border-gold/50 transition-colors duration-300",
                                            }),
                                        ],
                                    },
                                    e.title
                                )
                            ),
                        }),
                        u.jsx("div", {
                            className: "mt-8 text-center",
                            children: u.jsxs("p", {
                                className:
                                    "font-body text-sm text-muted-foreground flex items-center justify-center gap-2",
                                children: [
                                    u.jsx(wu, { className: "w-4 h-4 text-gold" }),
                                    "Áp dụng cho tất cả khách hàng đến tiệm",
                                    u.jsx(wu, { className: "w-4 h-4 text-gold" }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
function dt(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || (typeof e == "object" && t === "[object Date]")
        ? new e.constructor(+e)
        : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]"
            ? new Date(e)
            : new Date(NaN);
}
function Vn(e, t) {
    return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Cl(e, t) {
    const n = dt(e);
    return isNaN(t) ? Vn(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
const C0 = 6048e5,
    HC = 864e5;
let BC = {};
function Da() {
    return BC;
}
function po(e, t) {
    var a, l, c, d;
    const n = Da(),
        r =
            (t == null ? void 0 : t.weekStartsOn) ??
            ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null
                ? void 0
                : l.weekStartsOn) ??
            n.weekStartsOn ??
            ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ??
            0,
        o = dt(e),
        i = o.getDay(),
        s = (i < r ? 7 : 0) + i - r;
    return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function oa(e) {
    return po(e, { weekStartsOn: 1 });
}
function S0(e) {
    const t = dt(e),
        n = t.getFullYear(),
        r = Vn(e, 0);
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
    const o = oa(r),
        i = Vn(e, 0);
    i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
    const s = oa(i);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function ia(e) {
    const t = dt(e);
    return t.setHours(0, 0, 0, 0), t;
}
function Jf(e) {
    const t = dt(e),
        n = new Date(
            Date.UTC(
                t.getFullYear(),
                t.getMonth(),
                t.getDate(),
                t.getHours(),
                t.getMinutes(),
                t.getSeconds(),
                t.getMilliseconds()
            )
        );
    return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function WC(e, t) {
    const n = ia(e),
        r = ia(t),
        o = +n - Jf(n),
        i = +r - Jf(r);
    return Math.round((o - i) / HC);
}
function UC(e) {
    const t = S0(e),
        n = Vn(e, 0);
    return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), oa(n);
}
function Zf(e, t) {
    const n = ia(e),
        r = ia(t);
    return +n == +r;
}
function VC(e) {
    return e instanceof Date || (typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]");
}
function QC(e) {
    if (!VC(e) && typeof e != "number") return !1;
    const t = dt(e);
    return !isNaN(Number(t));
}
function YC(e) {
    const t = dt(e),
        n = Vn(e, 0);
    return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const KC = {
        lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    },
    GC = (e, t, n) => {
        let r;
        const o = KC[e];
        return (
            typeof o == "string" ? (r = o) : t === 1 ? (r = o.one) : (r = o.other.replace("{{count}}", t.toString())),
                n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? "in " + r : r + " ago") : r
        );
    };
function qr(e) {
    return (t = {}) => {
        const n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth];
    };
}
const qC = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" },
    XC = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
    JC = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}",
    },
    ZC = {
        date: qr({ formats: qC, defaultWidth: "full" }),
        time: qr({ formats: XC, defaultWidth: "full" }),
        dateTime: qr({ formats: JC, defaultWidth: "full" }),
    },
    eS = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
    },
    tS = (e, t, n, r) => eS[e];
function At(e) {
    return (t, n) => {
        const r = n != null && n.context ? String(n.context) : "standalone";
        let o;
        if (r === "formatting" && e.formattingValues) {
            const s = e.defaultFormattingWidth || e.defaultWidth,
                a = n != null && n.width ? String(n.width) : s;
            o = e.formattingValues[a] || e.formattingValues[s];
        } else {
            const s = e.defaultWidth,
                a = n != null && n.width ? String(n.width) : e.defaultWidth;
            o = e.values[a] || e.values[s];
        }
        const i = e.argumentCallback ? e.argumentCallback(t) : t;
        return o[i];
    };
}
const nS = { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] },
    rS = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    },
    oS = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    iS = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    sS = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
    },
    aS = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
    },
    lS = (e, t) => {
        const n = Number(e),
            r = n % 100;
        if (r > 20 || r < 10)
            switch (r % 10) {
                case 1:
                    return n + "st";
                case 2:
                    return n + "nd";
                case 3:
                    return n + "rd";
            }
        return n + "th";
    },
    uS = {
        ordinalNumber: lS,
        era: At({ values: nS, defaultWidth: "wide" }),
        quarter: At({ values: rS, defaultWidth: "wide", argumentCallback: (e) => e - 1 }),
        month: At({ values: oS, defaultWidth: "wide" }),
        day: At({ values: iS, defaultWidth: "wide" }),
        dayPeriod: At({ values: sS, defaultWidth: "wide", formattingValues: aS, defaultFormattingWidth: "wide" }),
    };
function It(e) {
    return (t, n = {}) => {
        const r = n.width,
            o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            i = t.match(o);
        if (!i) return null;
        const s = i[0],
            a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            l = Array.isArray(a) ? dS(a, (f) => f.test(s)) : cS(a, (f) => f.test(s));
        let c;
        (c = e.valueCallback ? e.valueCallback(l) : l), (c = n.valueCallback ? n.valueCallback(c) : c);
        const d = t.slice(s.length);
        return { value: c, rest: d };
    };
}
function cS(e, t) {
    for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function dS(e, t) {
    for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function N0(e) {
    return (t, n = {}) => {
        const r = t.match(e.matchPattern);
        if (!r) return null;
        const o = r[0],
            i = t.match(e.parsePattern);
        if (!i) return null;
        let s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
        s = n.valueCallback ? n.valueCallback(s) : s;
        const a = t.slice(o.length);
        return { value: s, rest: a };
    };
}
const fS = /^(\d+)(th|st|nd|rd)?/i,
    hS = /\d+/i,
    mS = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
    },
    pS = { any: [/^b/i, /^(a|c)/i] },
    gS = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
    vS = { any: [/1/i, /2/i, /3/i, /4/i] },
    yS = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
    },
    xS = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
    },
    wS = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
    },
    bS = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
    },
    kS = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
    },
    CS = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
        },
    },
    SS = {
        ordinalNumber: N0({ matchPattern: fS, parsePattern: hS, valueCallback: (e) => parseInt(e, 10) }),
        era: It({ matchPatterns: mS, defaultMatchWidth: "wide", parsePatterns: pS, defaultParseWidth: "any" }),
        quarter: It({
            matchPatterns: gS,
            defaultMatchWidth: "wide",
            parsePatterns: vS,
            defaultParseWidth: "any",
            valueCallback: (e) => e + 1,
        }),
        month: It({ matchPatterns: yS, defaultMatchWidth: "wide", parsePatterns: xS, defaultParseWidth: "any" }),
        day: It({ matchPatterns: wS, defaultMatchWidth: "wide", parsePatterns: bS, defaultParseWidth: "any" }),
        dayPeriod: It({ matchPatterns: kS, defaultMatchWidth: "any", parsePatterns: CS, defaultParseWidth: "any" }),
    },
    NS = {
        code: "en-US",
        formatDistance: GC,
        formatLong: ZC,
        formatRelative: tS,
        localize: uS,
        match: SS,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
function ES(e) {
    const t = dt(e);
    return WC(t, YC(t)) + 1;
}
function TS(e) {
    const t = dt(e),
        n = +oa(t) - +UC(t);
    return Math.round(n / C0) + 1;
}
function E0(e, t) {
    var d, f, p, h;
    const n = dt(e),
        r = n.getFullYear(),
        o = Da(),
        i =
            (t == null ? void 0 : t.firstWeekContainsDate) ??
            ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null
                ? void 0
                : f.firstWeekContainsDate) ??
            o.firstWeekContainsDate ??
            ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ??
            1,
        s = Vn(e, 0);
    s.setFullYear(r + 1, 0, i), s.setHours(0, 0, 0, 0);
    const a = po(s, t),
        l = Vn(e, 0);
    l.setFullYear(r, 0, i), l.setHours(0, 0, 0, 0);
    const c = po(l, t);
    return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function PS(e, t) {
    var a, l, c, d;
    const n = Da(),
        r =
            (t == null ? void 0 : t.firstWeekContainsDate) ??
            ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null
                ? void 0
                : l.firstWeekContainsDate) ??
            n.firstWeekContainsDate ??
            ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ??
            1,
        o = E0(e, t),
        i = Vn(e, 0);
    return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), po(i, t);
}
function jS(e, t) {
    const n = dt(e),
        r = +po(n, t) - +PS(n, t);
    return Math.round(r / C0) + 1;
}
function ee(e, t) {
    const n = e < 0 ? "-" : "",
        r = Math.abs(e).toString().padStart(t, "0");
    return n + r;
}
const yn = {
        y(e, t) {
            const n = e.getFullYear(),
                r = n > 0 ? n : 1 - n;
            return ee(t === "yy" ? r % 100 : r, t.length);
        },
        M(e, t) {
            const n = e.getMonth();
            return t === "M" ? String(n + 1) : ee(n + 1, 2);
        },
        d(e, t) {
            return ee(e.getDate(), t.length);
        },
        a(e, t) {
            const n = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                    return n.toUpperCase();
                case "aaa":
                    return n;
                case "aaaaa":
                    return n[0];
                case "aaaa":
                default:
                    return n === "am" ? "a.m." : "p.m.";
            }
        },
        h(e, t) {
            return ee(e.getHours() % 12 || 12, t.length);
        },
        H(e, t) {
            return ee(e.getHours(), t.length);
        },
        m(e, t) {
            return ee(e.getMinutes(), t.length);
        },
        s(e, t) {
            return ee(e.getSeconds(), t.length);
        },
        S(e, t) {
            const n = t.length,
                r = e.getMilliseconds(),
                o = Math.trunc(r * Math.pow(10, n - 3));
            return ee(o, t.length);
        },
    },
    jr = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
    },
    eh = {
        G: function (e, t, n) {
            const r = e.getFullYear() > 0 ? 1 : 0;
            switch (t) {
                case "G":
                case "GG":
                case "GGG":
                    return n.era(r, { width: "abbreviated" });
                case "GGGGG":
                    return n.era(r, { width: "narrow" });
                case "GGGG":
                default:
                    return n.era(r, { width: "wide" });
            }
        },
        y: function (e, t, n) {
            if (t === "yo") {
                const r = e.getFullYear(),
                    o = r > 0 ? r : 1 - r;
                return n.ordinalNumber(o, { unit: "year" });
            }
            return yn.y(e, t);
        },
        Y: function (e, t, n, r) {
            const o = E0(e, r),
                i = o > 0 ? o : 1 - o;
            if (t === "YY") {
                const s = i % 100;
                return ee(s, 2);
            }
            return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : ee(i, t.length);
        },
        R: function (e, t) {
            const n = S0(e);
            return ee(n, t.length);
        },
        u: function (e, t) {
            const n = e.getFullYear();
            return ee(n, t.length);
        },
        Q: function (e, t, n) {
            const r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
                case "Q":
                    return String(r);
                case "QQ":
                    return ee(r, 2);
                case "Qo":
                    return n.ordinalNumber(r, { unit: "quarter" });
                case "QQQ":
                    return n.quarter(r, { width: "abbreviated", context: "formatting" });
                case "QQQQQ":
                    return n.quarter(r, { width: "narrow", context: "formatting" });
                case "QQQQ":
                default:
                    return n.quarter(r, { width: "wide", context: "formatting" });
            }
        },
        q: function (e, t, n) {
            const r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
                case "q":
                    return String(r);
                case "qq":
                    return ee(r, 2);
                case "qo":
                    return n.ordinalNumber(r, { unit: "quarter" });
                case "qqq":
                    return n.quarter(r, { width: "abbreviated", context: "standalone" });
                case "qqqqq":
                    return n.quarter(r, { width: "narrow", context: "standalone" });
                case "qqqq":
                default:
                    return n.quarter(r, { width: "wide", context: "standalone" });
            }
        },
        M: function (e, t, n) {
            const r = e.getMonth();
            switch (t) {
                case "M":
                case "MM":
                    return yn.M(e, t);
                case "Mo":
                    return n.ordinalNumber(r + 1, { unit: "month" });
                case "MMM":
                    return n.month(r, { width: "abbreviated", context: "formatting" });
                case "MMMMM":
                    return n.month(r, { width: "narrow", context: "formatting" });
                case "MMMM":
                default:
                    return n.month(r, { width: "wide", context: "formatting" });
            }
        },
        L: function (e, t, n) {
            const r = e.getMonth();
            switch (t) {
                case "L":
                    return String(r + 1);
                case "LL":
                    return ee(r + 1, 2);
                case "Lo":
                    return n.ordinalNumber(r + 1, { unit: "month" });
                case "LLL":
                    return n.month(r, { width: "abbreviated", context: "standalone" });
                case "LLLLL":
                    return n.month(r, { width: "narrow", context: "standalone" });
                case "LLLL":
                default:
                    return n.month(r, { width: "wide", context: "standalone" });
            }
        },
        w: function (e, t, n, r) {
            const o = jS(e, r);
            return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ee(o, t.length);
        },
        I: function (e, t, n) {
            const r = TS(e);
            return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ee(r, t.length);
        },
        d: function (e, t, n) {
            return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : yn.d(e, t);
        },
        D: function (e, t, n) {
            const r = ES(e);
            return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ee(r, t.length);
        },
        E: function (e, t, n) {
            const r = e.getDay();
            switch (t) {
                case "E":
                case "EE":
                case "EEE":
                    return n.day(r, { width: "abbreviated", context: "formatting" });
                case "EEEEE":
                    return n.day(r, { width: "narrow", context: "formatting" });
                case "EEEEEE":
                    return n.day(r, { width: "short", context: "formatting" });
                case "EEEE":
                default:
                    return n.day(r, { width: "wide", context: "formatting" });
            }
        },
        e: function (e, t, n, r) {
            const o = e.getDay(),
                i = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "e":
                    return String(i);
                case "ee":
                    return ee(i, 2);
                case "eo":
                    return n.ordinalNumber(i, { unit: "day" });
                case "eee":
                    return n.day(o, { width: "abbreviated", context: "formatting" });
                case "eeeee":
                    return n.day(o, { width: "narrow", context: "formatting" });
                case "eeeeee":
                    return n.day(o, { width: "short", context: "formatting" });
                case "eeee":
                default:
                    return n.day(o, { width: "wide", context: "formatting" });
            }
        },
        c: function (e, t, n, r) {
            const o = e.getDay(),
                i = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "c":
                    return String(i);
                case "cc":
                    return ee(i, t.length);
                case "co":
                    return n.ordinalNumber(i, { unit: "day" });
                case "ccc":
                    return n.day(o, { width: "abbreviated", context: "standalone" });
                case "ccccc":
                    return n.day(o, { width: "narrow", context: "standalone" });
                case "cccccc":
                    return n.day(o, { width: "short", context: "standalone" });
                case "cccc":
                default:
                    return n.day(o, { width: "wide", context: "standalone" });
            }
        },
        i: function (e, t, n) {
            const r = e.getDay(),
                o = r === 0 ? 7 : r;
            switch (t) {
                case "i":
                    return String(o);
                case "ii":
                    return ee(o, t.length);
                case "io":
                    return n.ordinalNumber(o, { unit: "day" });
                case "iii":
                    return n.day(r, { width: "abbreviated", context: "formatting" });
                case "iiiii":
                    return n.day(r, { width: "narrow", context: "formatting" });
                case "iiiiii":
                    return n.day(r, { width: "short", context: "formatting" });
                case "iiii":
                default:
                    return n.day(r, { width: "wide", context: "formatting" });
            }
        },
        a: function (e, t, n) {
            const o = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                    return n.dayPeriod(o, { width: "abbreviated", context: "formatting" });
                case "aaa":
                    return n.dayPeriod(o, { width: "abbreviated", context: "formatting" }).toLowerCase();
                case "aaaaa":
                    return n.dayPeriod(o, { width: "narrow", context: "formatting" });
                case "aaaa":
                default:
                    return n.dayPeriod(o, { width: "wide", context: "formatting" });
            }
        },
        b: function (e, t, n) {
            const r = e.getHours();
            let o;
            switch ((r === 12 ? (o = jr.noon) : r === 0 ? (o = jr.midnight) : (o = r / 12 >= 1 ? "pm" : "am"), t)) {
                case "b":
                case "bb":
                    return n.dayPeriod(o, { width: "abbreviated", context: "formatting" });
                case "bbb":
                    return n.dayPeriod(o, { width: "abbreviated", context: "formatting" }).toLowerCase();
                case "bbbbb":
                    return n.dayPeriod(o, { width: "narrow", context: "formatting" });
                case "bbbb":
                default:
                    return n.dayPeriod(o, { width: "wide", context: "formatting" });
            }
        },
        B: function (e, t, n) {
            const r = e.getHours();
            let o;
            switch (
                (r >= 17 ? (o = jr.evening) : r >= 12 ? (o = jr.afternoon) : r >= 4 ? (o = jr.morning) : (o = jr.night),
                    t)
                ) {
                case "B":
                case "BB":
                case "BBB":
                    return n.dayPeriod(o, { width: "abbreviated", context: "formatting" });
                case "BBBBB":
                    return n.dayPeriod(o, { width: "narrow", context: "formatting" });
                case "BBBB":
                default:
                    return n.dayPeriod(o, { width: "wide", context: "formatting" });
            }
        },
        h: function (e, t, n) {
            if (t === "ho") {
                let r = e.getHours() % 12;
                return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
            }
            return yn.h(e, t);
        },
        H: function (e, t, n) {
            return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : yn.H(e, t);
        },
        K: function (e, t, n) {
            const r = e.getHours() % 12;
            return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ee(r, t.length);
        },
        k: function (e, t, n) {
            let r = e.getHours();
            return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ee(r, t.length);
        },
        m: function (e, t, n) {
            return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : yn.m(e, t);
        },
        s: function (e, t, n) {
            return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : yn.s(e, t);
        },
        S: function (e, t) {
            return yn.S(e, t);
        },
        X: function (e, t, n) {
            const r = e.getTimezoneOffset();
            if (r === 0) return "Z";
            switch (t) {
                case "X":
                    return nh(r);
                case "XXXX":
                case "XX":
                    return nr(r);
                case "XXXXX":
                case "XXX":
                default:
                    return nr(r, ":");
            }
        },
        x: function (e, t, n) {
            const r = e.getTimezoneOffset();
            switch (t) {
                case "x":
                    return nh(r);
                case "xxxx":
                case "xx":
                    return nr(r);
                case "xxxxx":
                case "xxx":
                default:
                    return nr(r, ":");
            }
        },
        O: function (e, t, n) {
            const r = e.getTimezoneOffset();
            switch (t) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + th(r, ":");
                case "OOOO":
                default:
                    return "GMT" + nr(r, ":");
            }
        },
        z: function (e, t, n) {
            const r = e.getTimezoneOffset();
            switch (t) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + th(r, ":");
                case "zzzz":
                default:
                    return "GMT" + nr(r, ":");
            }
        },
        t: function (e, t, n) {
            const r = Math.trunc(e.getTime() / 1e3);
            return ee(r, t.length);
        },
        T: function (e, t, n) {
            const r = e.getTime();
            return ee(r, t.length);
        },
    };
function th(e, t = "") {
    const n = e > 0 ? "-" : "+",
        r = Math.abs(e),
        o = Math.trunc(r / 60),
        i = r % 60;
    return i === 0 ? n + String(o) : n + String(o) + t + ee(i, 2);
}
function nh(e, t) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + ee(Math.abs(e) / 60, 2) : nr(e, t);
}
function nr(e, t = "") {
    const n = e > 0 ? "-" : "+",
        r = Math.abs(e),
        o = ee(Math.trunc(r / 60), 2),
        i = ee(r % 60, 2);
    return n + o + t + i;
}
const rh = (e, t) => {
        switch (e) {
            case "P":
                return t.date({ width: "short" });
            case "PP":
                return t.date({ width: "medium" });
            case "PPP":
                return t.date({ width: "long" });
            case "PPPP":
            default:
                return t.date({ width: "full" });
        }
    },
    T0 = (e, t) => {
        switch (e) {
            case "p":
                return t.time({ width: "short" });
            case "pp":
                return t.time({ width: "medium" });
            case "ppp":
                return t.time({ width: "long" });
            case "pppp":
            default:
                return t.time({ width: "full" });
        }
    },
    RS = (e, t) => {
        const n = e.match(/(P+)(p+)?/) || [],
            r = n[1],
            o = n[2];
        if (!o) return rh(e, t);
        let i;
        switch (r) {
            case "P":
                i = t.dateTime({ width: "short" });
                break;
            case "PP":
                i = t.dateTime({ width: "medium" });
                break;
            case "PPP":
                i = t.dateTime({ width: "long" });
                break;
            case "PPPP":
            default:
                i = t.dateTime({ width: "full" });
                break;
        }
        return i.replace("{{date}}", rh(r, t)).replace("{{time}}", T0(o, t));
    },
    MS = { p: T0, P: RS },
    OS = /^D+$/,
    LS = /^Y+$/,
    _S = ["D", "DD", "YY", "YYYY"];
function DS(e) {
    return OS.test(e);
}
function AS(e) {
    return LS.test(e);
}
function IS(e, t, n) {
    const r = FS(e, t, n);
    if ((console.warn(r), _S.includes(e))) throw new RangeError(r);
}
function FS(e, t, n) {
    const r = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const zS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    $S = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    HS = /^'([^]*?)'?$/,
    BS = /''/g,
    WS = /[a-zA-Z]/;
function Fo(e, t, n) {
    var d, f, p, h, b, x, w, v;
    const r = Da(),
        o = (n == null ? void 0 : n.locale) ?? r.locale ?? NS,
        i =
            (n == null ? void 0 : n.firstWeekContainsDate) ??
            ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null
                ? void 0
                : f.firstWeekContainsDate) ??
            r.firstWeekContainsDate ??
            ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ??
            1,
        s =
            (n == null ? void 0 : n.weekStartsOn) ??
            ((x = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null
                ? void 0
                : x.weekStartsOn) ??
            r.weekStartsOn ??
            ((v = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : v.weekStartsOn) ??
            0,
        a = dt(e);
    if (!QC(a)) throw new RangeError("Invalid time value");
    let l = t
        .match($S)
        .map((m) => {
            const g = m[0];
            if (g === "p" || g === "P") {
                const k = MS[g];
                return k(m, o.formatLong);
            }
            return m;
        })
        .join("")
        .match(zS)
        .map((m) => {
            if (m === "''") return { isToken: !1, value: "'" };
            const g = m[0];
            if (g === "'") return { isToken: !1, value: US(m) };
            if (eh[g]) return { isToken: !0, value: m };
            if (g.match(WS))
                throw new RangeError("Format string contains an unescaped latin alphabet character `" + g + "`");
            return { isToken: !1, value: m };
        });
    o.localize.preprocessor && (l = o.localize.preprocessor(a, l));
    const c = { firstWeekContainsDate: i, weekStartsOn: s, locale: o };
    return l
        .map((m) => {
            if (!m.isToken) return m.value;
            const g = m.value;
            ((!(n != null && n.useAdditionalWeekYearTokens) && AS(g)) ||
                (!(n != null && n.useAdditionalDayOfYearTokens) && DS(g))) &&
            IS(g, t, String(e));
            const k = eh[g[0]];
            return k(a, g, o.localize, c);
        })
        .join("");
}
function US(e) {
    const t = e.match(HS);
    return t ? t[1].replace(BS, "'") : e;
}
const VS = {
        lessThanXSeconds: { one: "dưới 1 giây", other: "dưới {{count}} giây" },
        xSeconds: { one: "1 giây", other: "{{count}} giây" },
        halfAMinute: "nửa phút",
        lessThanXMinutes: { one: "dưới 1 phút", other: "dưới {{count}} phút" },
        xMinutes: { one: "1 phút", other: "{{count}} phút" },
        aboutXHours: { one: "khoảng 1 giờ", other: "khoảng {{count}} giờ" },
        xHours: { one: "1 giờ", other: "{{count}} giờ" },
        xDays: { one: "1 ngày", other: "{{count}} ngày" },
        aboutXWeeks: { one: "khoảng 1 tuần", other: "khoảng {{count}} tuần" },
        xWeeks: { one: "1 tuần", other: "{{count}} tuần" },
        aboutXMonths: { one: "khoảng 1 tháng", other: "khoảng {{count}} tháng" },
        xMonths: { one: "1 tháng", other: "{{count}} tháng" },
        aboutXYears: { one: "khoảng 1 năm", other: "khoảng {{count}} năm" },
        xYears: { one: "1 năm", other: "{{count}} năm" },
        overXYears: { one: "hơn 1 năm", other: "hơn {{count}} năm" },
        almostXYears: { one: "gần 1 năm", other: "gần {{count}} năm" },
    },
    QS = (e, t, n) => {
        let r;
        const o = VS[e];
        return (
            typeof o == "string" ? (r = o) : t === 1 ? (r = o.one) : (r = o.other.replace("{{count}}", String(t))),
                n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? r + " nữa" : r + " trước") : r
        );
    },
    YS = {
        full: "EEEE, 'ngày' d MMMM 'năm' y",
        long: "'ngày' d MMMM 'năm' y",
        medium: "d MMM 'năm' y",
        short: "dd/MM/y",
    },
    KS = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
    GS = {
        full: "{{date}} {{time}}",
        long: "{{date}} {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}",
    },
    qS = {
        date: qr({ formats: YS, defaultWidth: "full" }),
        time: qr({ formats: KS, defaultWidth: "full" }),
        dateTime: qr({ formats: GS, defaultWidth: "full" }),
    },
    XS = {
        lastWeek: "eeee 'tuần trước vào lúc' p",
        yesterday: "'hôm qua vào lúc' p",
        today: "'hôm nay vào lúc' p",
        tomorrow: "'ngày mai vào lúc' p",
        nextWeek: "eeee 'tới vào lúc' p",
        other: "P",
    },
    JS = (e, t, n, r) => XS[e],
    ZS = {
        narrow: ["TCN", "SCN"],
        abbreviated: ["trước CN", "sau CN"],
        wide: ["trước Công Nguyên", "sau Công Nguyên"],
    },
    eN = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["Quý 1", "Quý 2", "Quý 3", "Quý 4"],
    },
    tN = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["quý I", "quý II", "quý III", "quý IV"],
    },
    nN = {
        narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        abbreviated: [
            "Thg 1",
            "Thg 2",
            "Thg 3",
            "Thg 4",
            "Thg 5",
            "Thg 6",
            "Thg 7",
            "Thg 8",
            "Thg 9",
            "Thg 10",
            "Thg 11",
            "Thg 12",
        ],
        wide: [
            "Tháng Một",
            "Tháng Hai",
            "Tháng Ba",
            "Tháng Tư",
            "Tháng Năm",
            "Tháng Sáu",
            "Tháng Bảy",
            "Tháng Tám",
            "Tháng Chín",
            "Tháng Mười",
            "Tháng Mười Một",
            "Tháng Mười Hai",
        ],
    },
    rN = {
        narrow: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        abbreviated: [
            "thg 1",
            "thg 2",
            "thg 3",
            "thg 4",
            "thg 5",
            "thg 6",
            "thg 7",
            "thg 8",
            "thg 9",
            "thg 10",
            "thg 11",
            "thg 12",
        ],
        wide: [
            "tháng 01",
            "tháng 02",
            "tháng 03",
            "tháng 04",
            "tháng 05",
            "tháng 06",
            "tháng 07",
            "tháng 08",
            "tháng 09",
            "tháng 10",
            "tháng 11",
            "tháng 12",
        ],
    },
    oN = {
        narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
        abbreviated: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
        wide: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
    },
    iN = {
        narrow: {
            am: "am",
            pm: "pm",
            midnight: "nửa đêm",
            noon: "tr",
            morning: "sg",
            afternoon: "ch",
            evening: "tối",
            night: "đêm",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "nửa đêm",
            noon: "trưa",
            morning: "sáng",
            afternoon: "chiều",
            evening: "tối",
            night: "đêm",
        },
        wide: {
            am: "SA",
            pm: "CH",
            midnight: "nửa đêm",
            noon: "trưa",
            morning: "sáng",
            afternoon: "chiều",
            evening: "tối",
            night: "đêm",
        },
    },
    sN = {
        narrow: {
            am: "am",
            pm: "pm",
            midnight: "nửa đêm",
            noon: "tr",
            morning: "sg",
            afternoon: "ch",
            evening: "tối",
            night: "đêm",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "nửa đêm",
            noon: "trưa",
            morning: "sáng",
            afternoon: "chiều",
            evening: "tối",
            night: "đêm",
        },
        wide: {
            am: "SA",
            pm: "CH",
            midnight: "nửa đêm",
            noon: "giữa trưa",
            morning: "vào buổi sáng",
            afternoon: "vào buổi chiều",
            evening: "vào buổi tối",
            night: "vào ban đêm",
        },
    },
    aN = (e, t) => {
        const n = Number(e),
            r = t == null ? void 0 : t.unit;
        if (r === "quarter")
            switch (n) {
                case 1:
                    return "I";
                case 2:
                    return "II";
                case 3:
                    return "III";
                case 4:
                    return "IV";
            }
        else if (r === "day")
            switch (n) {
                case 1:
                    return "thứ 2";
                case 2:
                    return "thứ 3";
                case 3:
                    return "thứ 4";
                case 4:
                    return "thứ 5";
                case 5:
                    return "thứ 6";
                case 6:
                    return "thứ 7";
                case 7:
                    return "chủ nhật";
            }
        else {
            if (r === "week") return n === 1 ? "thứ nhất" : "thứ " + n;
            if (r === "dayOfYear") return n === 1 ? "đầu tiên" : "thứ " + n;
        }
        return String(n);
    },
    lN = {
        ordinalNumber: aN,
        era: At({ values: ZS, defaultWidth: "wide" }),
        quarter: At({
            values: eN,
            defaultWidth: "wide",
            formattingValues: tN,
            defaultFormattingWidth: "wide",
            argumentCallback: (e) => e - 1,
        }),
        month: At({ values: nN, defaultWidth: "wide", formattingValues: rN, defaultFormattingWidth: "wide" }),
        day: At({ values: oN, defaultWidth: "wide" }),
        dayPeriod: At({ values: iN, defaultWidth: "wide", formattingValues: sN, defaultFormattingWidth: "wide" }),
    },
    uN = /^(\d+)/i,
    cN = /\d+/i,
    dN = { narrow: /^(tcn|scn)/i, abbreviated: /^(trước CN|sau CN)/i, wide: /^(trước Công Nguyên|sau Công Nguyên)/i },
    fN = { any: [/^t/i, /^s/i] },
    hN = { narrow: /^([1234]|i{1,3}v?)/i, abbreviated: /^q([1234]|i{1,3}v?)/i, wide: /^quý ([1234]|i{1,3}v?)/i },
    mN = { any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i] },
    pN = {
        narrow: /^(0?[2-9]|10|11|12|0?1)/i,
        abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
        wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i,
    },
    gN = {
        narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
        abbreviated: [
            /^thg[ _]?0?1(?!\d)/i,
            /^thg[ _]?0?2/i,
            /^thg[ _]?0?3/i,
            /^thg[ _]?0?4/i,
            /^thg[ _]?0?5/i,
            /^thg[ _]?0?6/i,
            /^thg[ _]?0?7/i,
            /^thg[ _]?0?8/i,
            /^thg[ _]?0?9/i,
            /^thg[ _]?10/i,
            /^thg[ _]?11/i,
            /^thg[ _]?12/i,
        ],
        wide: [
            /^tháng ?(Một|0?1(?!\d))/i,
            /^tháng ?(Hai|0?2)/i,
            /^tháng ?(Ba|0?3)/i,
            /^tháng ?(Tư|0?4)/i,
            /^tháng ?(Năm|0?5)/i,
            /^tháng ?(Sáu|0?6)/i,
            /^tháng ?(Bảy|0?7)/i,
            /^tháng ?(Tám|0?8)/i,
            /^tháng ?(Chín|0?9)/i,
            /^tháng ?(Mười|10)/i,
            /^tháng ?(Mười ?Một|11)/i,
            /^tháng ?(Mười ?Hai|12)/i,
        ],
    },
    vN = {
        narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
        short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
        abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
        wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i,
    },
    yN = {
        narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
        short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
        abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
        wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i],
    },
    xN = {
        narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
        abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
        wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
    },
    wN = {
        any: {
            am: /^(a|sa)/i,
            pm: /^(p|ch[^i]*)/i,
            midnight: /nửa đêm/i,
            noon: /trưa/i,
            morning: /sáng/i,
            afternoon: /chiều/i,
            evening: /tối/i,
            night: /^đêm/i,
        },
    },
    bN = {
        ordinalNumber: N0({ matchPattern: uN, parsePattern: cN, valueCallback: (e) => parseInt(e, 10) }),
        era: It({ matchPatterns: dN, defaultMatchWidth: "wide", parsePatterns: fN, defaultParseWidth: "any" }),
        quarter: It({
            matchPatterns: hN,
            defaultMatchWidth: "wide",
            parsePatterns: mN,
            defaultParseWidth: "any",
            valueCallback: (e) => e + 1,
        }),
        month: It({ matchPatterns: pN, defaultMatchWidth: "wide", parsePatterns: gN, defaultParseWidth: "wide" }),
        day: It({ matchPatterns: vN, defaultMatchWidth: "wide", parsePatterns: yN, defaultParseWidth: "wide" }),
        dayPeriod: It({ matchPatterns: xN, defaultMatchWidth: "wide", parsePatterns: wN, defaultParseWidth: "any" }),
    },
    oh = {
        code: "vi",
        formatDistance: QS,
        formatLong: qS,
        formatRelative: JS,
        localize: lN,
        match: bN,
        options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
    },
    kN = [
        { name: "Cắt Tóc Nam", price: "30.000đ", duration: "30 phút" },
        { name: "Gội Đầu", price: "30.000đ", duration: "15 phút" },
        { name: "Cắt + Gội Combo", price: "50.000đ", duration: "45 phút" },
        { name: "Nhuộm Tóc", price: "300.000đ", duration: "60 phút" },
        { name: "Tẩy Trắng", price: "499.000đ", duration: "90 phút" },
        { name: "Móc Like", price: "199.000đ", duration: "60 phút" },
        { name: "Nhuộm Đen", price: "99.000đ", duration: "45 phút" },
        { name: "Ép Size", price: "149.000đ", duration: "60 phút" },
        { name: "Uốn Phồng", price: "200.000đ", duration: "60 phút" },
        { name: "Uốn Chidorri", price: "300.000đ", duration: "90 phút" },
    ],
    CN = [
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
    ],
    SN = () => {
        const [e, t] = y.useState(null),
            [n, r] = y.useState(null),
            [o, i] = y.useState(null),
            [s, a] = y.useState(po(new Date(), { weekStartsOn: 1 })),
            l = Array.from({ length: 7 }, (d, f) => Cl(s, f)),
            c = () => {
                if (!e || !n || !o) return;
                const d = Fo(n, "dd/MM/yyyy"),
                    f = encodeURIComponent(`Xin chào! Tôi muốn đặt lịch:
- Dịch vụ: ${e}
- Ngày: ${d}
- Giờ: ${o}`);
                window.open(`https://m.me/theanfbcom.vn?text=${f}`, "_blank");
            };
        return u.jsxs("section", {
            id: "booking",
            className: "py-24 bg-charcoal relative overflow-hidden",
            children: [
                u.jsxs("div", {
                    className: "absolute top-0 left-0 w-full h-full",
                    children: [
                        u.jsx("div", {
                            className:
                                "absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float",
                        }),
                        u.jsx("div", {
                            className: "absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl",
                        }),
                    ],
                }),
                u.jsxs("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: [
                        u.jsxs("div", {
                            className: "text-center mb-16",
                            children: [
                                u.jsxs("div", {
                                    className: "flex items-center justify-center gap-4 mb-4",
                                    children: [
                                        u.jsx("div", { className: "line-decorative" }),
                                        u.jsx("span", {
                                            className: "font-accent text-gold text-lg tracking-[0.3em] uppercase",
                                            children: "Đặt Lịch",
                                        }),
                                        u.jsx("div", { className: "line-decorative" }),
                                    ],
                                }),
                                u.jsxs("h2", {
                                    className: "font-display text-4xl md:text-5xl font-semibold text-foreground mb-4",
                                    children: [
                                        "Đặt Lịch ",
                                        u.jsx("span", { className: "text-gradient-gold", children: "Hẹn" }),
                                    ],
                                }),
                                u.jsx("p", {
                                    className: "font-body text-muted-foreground max-w-2xl mx-auto",
                                    children: "Chọn dịch vụ, ngày và giờ phù hợp để đặt lịch hẹn",
                                }),
                            ],
                        }),
                        u.jsxs("div", {
                            className: "max-w-4xl mx-auto",
                            children: [
                                u.jsxs("div", {
                                    className: "mb-10",
                                    children: [
                                        u.jsxs("div", {
                                            className: "flex items-center gap-3 mb-6",
                                            children: [
                                                u.jsx("div", {
                                                    className:
                                                        "w-8 h-8 bg-gradient-gold flex items-center justify-center",
                                                    children: u.jsx(Na, {
                                                        className: "w-4 h-4 text-primary-foreground",
                                                    }),
                                                }),
                                                u.jsx("h3", {
                                                    className: "font-display text-xl font-semibold text-foreground",
                                                    children: "1. Chọn Dịch Vụ",
                                                }),
                                            ],
                                        }),
                                        u.jsx("div", {
                                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3",
                                            children: kN.map((d) =>
                                                u.jsxs(
                                                    "button",
                                                    {
                                                        onClick: () => t(d.name),
                                                        className: `p-4 border transition-all duration-300 text-left ${e === d.name ? "border-gold bg-gold/10" : "border-border/50 hover:border-gold/50 bg-card"}`,
                                                        children: [
                                                            u.jsx("h4", {
                                                                className:
                                                                    "font-display text-sm font-medium text-foreground mb-1 truncate",
                                                                children: d.name,
                                                            }),
                                                            u.jsx("p", {
                                                                className:
                                                                    "font-display text-gold text-sm font-semibold",
                                                                children: d.price,
                                                            }),
                                                            u.jsx("p", {
                                                                className: "font-body text-xs text-muted-foreground",
                                                                children: d.duration,
                                                            }),
                                                        ],
                                                    },
                                                    d.name
                                                )
                                            ),
                                        }),
                                    ],
                                }),
                                u.jsxs("div", {
                                    className: "mb-10",
                                    children: [
                                        u.jsxs("div", {
                                            className: "flex items-center gap-3 mb-6",
                                            children: [
                                                u.jsx("div", {
                                                    className:
                                                        "w-8 h-8 bg-gradient-gold flex items-center justify-center",
                                                    children: u.jsx(f1, {
                                                        className: "w-4 h-4 text-primary-foreground",
                                                    }),
                                                }),
                                                u.jsx("h3", {
                                                    className: "font-display text-xl font-semibold text-foreground",
                                                    children: "2. Chọn Ngày",
                                                }),
                                            ],
                                        }),
                                        u.jsxs("div", {
                                            className: "bg-card border border-border/50 p-6",
                                            children: [
                                                u.jsxs("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        u.jsx("button", {
                                                            onClick: () => a(Cl(s, -7)),
                                                            className:
                                                                "p-2 text-muted-foreground hover:text-gold transition-colors",
                                                            children: u.jsx(m1, { className: "w-5 h-5" }),
                                                        }),
                                                        u.jsx("span", {
                                                            className: "font-display text-foreground",
                                                            children: Fo(s, "MMMM yyyy", { locale: oh }),
                                                        }),
                                                        u.jsx("button", {
                                                            onClick: () => a(Cl(s, 7)),
                                                            className:
                                                                "p-2 text-muted-foreground hover:text-gold transition-colors",
                                                            children: u.jsx(ig, { className: "w-5 h-5" }),
                                                        }),
                                                    ],
                                                }),
                                                u.jsx("div", {
                                                    className: "grid grid-cols-7 gap-2",
                                                    children: l.map((d) => {
                                                        const f = Zf(d, new Date()),
                                                            p = d < new Date() && !f,
                                                            h = n && Zf(d, n);
                                                        return u.jsxs(
                                                            "button",
                                                            {
                                                                onClick: () => !p && r(d),
                                                                disabled: p,
                                                                className: `p-3 flex flex-col items-center transition-all duration-300 ${p ? "opacity-30 cursor-not-allowed" : h ? "bg-gradient-gold text-primary-foreground" : "border border-border/50 hover:border-gold/50"}`,
                                                                children: [
                                                                    u.jsx("span", {
                                                                        className: "font-body text-xs uppercase",
                                                                        children: Fo(d, "EEE", { locale: oh }),
                                                                    }),
                                                                    u.jsx("span", {
                                                                        className: "font-display text-lg font-semibold",
                                                                        children: Fo(d, "d"),
                                                                    }),
                                                                ],
                                                            },
                                                            d.toISOString()
                                                        );
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                u.jsxs("div", {
                                    className: "mb-10",
                                    children: [
                                        u.jsxs("div", {
                                            className: "flex items-center gap-3 mb-6",
                                            children: [
                                                u.jsx("div", {
                                                    className:
                                                        "w-8 h-8 bg-gradient-gold flex items-center justify-center",
                                                    children: u.jsx(sg, {
                                                        className: "w-4 h-4 text-primary-foreground",
                                                    }),
                                                }),
                                                u.jsx("h3", {
                                                    className: "font-display text-xl font-semibold text-foreground",
                                                    children: "3. Chọn Giờ",
                                                }),
                                            ],
                                        }),
                                        u.jsx("div", {
                                            className: "grid grid-cols-4 md:grid-cols-7 lg:grid-cols-11 gap-2",
                                            children: CN.map((d) =>
                                                u.jsx(
                                                    "button",
                                                    {
                                                        onClick: () => i(d),
                                                        className: `p-3 font-body text-sm transition-all duration-300 ${o === d ? "bg-gradient-gold text-primary-foreground" : "border border-border/50 hover:border-gold/50 bg-card text-foreground"}`,
                                                        children: d,
                                                    },
                                                    d
                                                )
                                            ),
                                        }),
                                    ],
                                }),
                                u.jsxs("div", {
                                    className: "bg-card border border-gold/30 p-6",
                                    children: [
                                        u.jsx("h4", {
                                            className: "font-display text-lg font-semibold text-foreground mb-4",
                                            children: "Thông Tin Đặt Lịch",
                                        }),
                                        u.jsxs("div", {
                                            className: "grid md:grid-cols-3 gap-4 mb-6",
                                            children: [
                                                u.jsxs("div", {
                                                    children: [
                                                        u.jsx("span", {
                                                            className: "font-body text-sm text-muted-foreground",
                                                            children: "Dịch vụ:",
                                                        }),
                                                        u.jsx("p", {
                                                            className: "font-display text-gold font-semibold",
                                                            children: e || "Chưa chọn",
                                                        }),
                                                    ],
                                                }),
                                                u.jsxs("div", {
                                                    children: [
                                                        u.jsx("span", {
                                                            className: "font-body text-sm text-muted-foreground",
                                                            children: "Ngày:",
                                                        }),
                                                        u.jsx("p", {
                                                            className: "font-display text-gold font-semibold",
                                                            children: n ? Fo(n, "dd/MM/yyyy") : "Chưa chọn",
                                                        }),
                                                    ],
                                                }),
                                                u.jsxs("div", {
                                                    children: [
                                                        u.jsx("span", {
                                                            className: "font-body text-sm text-muted-foreground",
                                                            children: "Giờ:",
                                                        }),
                                                        u.jsx("p", {
                                                            className: "font-display text-gold font-semibold",
                                                            children: o || "Chưa chọn",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        u.jsxs(Ze, {
                                            onClick: c,
                                            disabled: !e || !n || !o,
                                            className:
                                                "w-full bg-gradient-gold text-primary-foreground hover:opacity-90 gap-2 disabled:opacity-50",
                                            size: "lg",
                                            children: [
                                                u.jsx(vi, { className: "w-5 h-5" }),
                                                "Xác Nhận Đặt Lịch Qua Messenger",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    Lu = "/assets/barber-portrait-BwO2X1cb.jpg",
    _u = "/assets/barber-tools-SWJ6KUIq.jpg",
    NN = () =>
        u.jsx("section", {
            id: "about",
            className: "py-24 bg-background relative overflow-hidden",
            children: u.jsx("div", {
                className: "container mx-auto px-4",
                children: u.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    children: [
                        u.jsxs("div", {
                            className: "relative",
                            children: [
                                u.jsxs("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        u.jsx("div", {
                                            className: "space-y-4",
                                            children: u.jsx("div", {
                                                className: "aspect-[3/4] overflow-hidden border border-border/30",
                                                children: u.jsx("img", {
                                                    src: Lu,
                                                    alt: "Professional barber",
                                                    className:
                                                        "w-full h-full object-cover hover:scale-105 transition-transform duration-700",
                                                }),
                                            }),
                                        }),
                                        u.jsxs("div", {
                                            className: "space-y-4 pt-8",
                                            children: [
                                                u.jsx("div", {
                                                    className: "aspect-square overflow-hidden border border-border/30",
                                                    children: u.jsx("img", {
                                                        src: _u,
                                                        alt: "Barber tools",
                                                        className:
                                                            "w-full h-full object-cover hover:scale-105 transition-transform duration-700",
                                                    }),
                                                }),
                                                u.jsxs("div", {
                                                    className: "bg-card border border-gold/30 p-6 text-center",
                                                    children: [
                                                        u.jsx("span", {
                                                            className: "font-display text-4xl font-semibold text-gold",
                                                            children: "15+",
                                                        }),
                                                        u.jsx("p", {
                                                            className:
                                                                "font-accent text-sm text-muted-foreground mt-1 tracking-wider uppercase",
                                                            children: "Năm Kinh Nghiệm",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                u.jsx("div", {
                                    className: "absolute -bottom-6 -left-6 w-32 h-32 border border-gold/20 -z-10",
                                }),
                                u.jsx("div", {
                                    className: "absolute -top-6 -right-6 w-32 h-32 border border-gold/20 -z-10",
                                }),
                            ],
                        }),
                        u.jsxs("div", {
                            className: "lg:pl-8",
                            children: [
                                u.jsxs("div", {
                                    className: "flex items-center gap-4 mb-4",
                                    children: [
                                        u.jsx("div", { className: "line-decorative" }),
                                        u.jsx("span", {
                                            className: "font-accent text-gold text-lg tracking-[0.3em] uppercase",
                                            children: "Về Chúng Tôi",
                                        }),
                                    ],
                                }),
                                u.jsxs("h2", {
                                    className:
                                        "font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight",
                                    children: [
                                        "Nơi Phong Cách",
                                        u.jsx("br", {}),
                                        u.jsx("span", {
                                            className: "text-gradient-gold",
                                            children: "Gặp Gỡ Truyền Thống",
                                        }),
                                    ],
                                }),
                                u.jsx("p", {
                                    className: "font-body text-muted-foreground leading-relaxed mb-6",
                                    children:
                                        "Chú Bôn Barberhouse được thành lập với mong muốn mang đến cho quý ông một không gian thư giãn đẳng cấp, nơi nghệ thuật cắt tóc truyền thống được kết hợp hoàn hảo với phong cách hiện đại.",
                                }),
                                u.jsx("p", {
                                    className: "font-body text-muted-foreground leading-relaxed mb-8",
                                    children:
                                        "Với đội ngũ thợ có hơn 15 năm kinh nghiệm, được đào tạo bài bản tại các học viện hàng đầu, chúng tôi cam kết mang đến những kiểu tóc phù hợp nhất với khuôn mặt và phong cách của từng khách hàng.",
                                }),
                                u.jsxs("div", {
                                    className: "grid grid-cols-2 gap-6 mb-10",
                                    children: [
                                        u.jsxs("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                u.jsx("div", { className: "w-2 h-2 bg-gold rounded-full mt-2" }),
                                                u.jsxs("div", {
                                                    children: [
                                                        u.jsx("h4", {
                                                            className: "font-display text-foreground font-medium mb-1",
                                                            children: "Thợ Lành Nghề",
                                                        }),
                                                        u.jsx("p", {
                                                            className: "font-body text-sm text-muted-foreground",
                                                            children: "Đội ngũ thợ giàu kinh nghiệm",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        u.jsxs("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                u.jsx("div", { className: "w-2 h-2 bg-gold rounded-full mt-2" }),
                                                u.jsxs("div", {
                                                    children: [
                                                        u.jsx("h4", {
                                                            className: "font-display text-foreground font-medium mb-1",
                                                            children: "Dụng Cụ Cao Cấp",
                                                        }),
                                                        u.jsx("p", {
                                                            className: "font-body text-sm text-muted-foreground",
                                                            children: "Sử dụng dụng cụ nhập khẩu",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        u.jsxs("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                u.jsx("div", { className: "w-2 h-2 bg-gold rounded-full mt-2" }),
                                                u.jsxs("div", {
                                                    children: [
                                                        u.jsx("h4", {
                                                            className: "font-display text-foreground font-medium mb-1",
                                                            children: "Không Gian Sang",
                                                        }),
                                                        u.jsx("p", {
                                                            className: "font-body text-sm text-muted-foreground",
                                                            children: "Thiết kế cổ điển hiện đại",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        u.jsxs("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                u.jsx("div", { className: "w-2 h-2 bg-gold rounded-full mt-2" }),
                                                u.jsxs("div", {
                                                    children: [
                                                        u.jsx("h4", {
                                                            className: "font-display text-foreground font-medium mb-1",
                                                            children: "Phục Vụ Tận Tâm",
                                                        }),
                                                        u.jsx("p", {
                                                            className: "font-body text-sm text-muted-foreground",
                                                            children: "Khách hàng là trên hết",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                u.jsxs("div", {
                                    className: "flex items-center gap-4 pt-6 border-t border-border/30",
                                    children: [
                                        u.jsx("div", {
                                            className:
                                                "w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center",
                                            children: u.jsx("span", {
                                                className: "font-display text-2xl text-gold",
                                                children: "A",
                                            }),
                                        }),
                                        u.jsxs("div", {
                                            children: [
                                                u.jsx("p", {
                                                    className: "font-display text-foreground font-medium",
                                                    children: "Nguyễn Thế Anh",
                                                }),
                                                u.jsx("p", {
                                                    className: "font-accent text-sm text-muted-foreground italic",
                                                    children: "Founder & Master Barber",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    EN = [
        {
            name: "Sáp Vuốt Tóc Cơ Bản",
            description: "Giữ nếp tốt, phù hợp mọi kiểu tóc",
            price: "200.000đ",
            rating: 4.5,
        },
        {
            name: "Sáp Vuốt Tóc Cao Cấp",
            description: "Giữ nếp cả ngày, không bết dính",
            price: "350.000đ",
            rating: 4.8,
        },
        { name: "Pomade Bóng Mượt", description: "Tạo độ bóng tự nhiên, dễ gội sạch", price: "400.000đ", rating: 4.7 },
        {
            name: "Clay Matte Finish",
            description: "Tạo form cứng, lì mờ chuyên nghiệp",
            price: "450.000đ",
            rating: 4.9,
        },
        { name: "Sáp Vuốt Tóc Premium", description: "Dòng cao cấp nhất, giữ nếp 24h", price: "600.000đ", rating: 5 },
        {
            name: "Bộ Sưu Tập Limited",
            description: "Phiên bản giới hạn, hương thơm độc đáo",
            price: "1.000.000đ",
            rating: 5,
        },
    ],
    TN = () => {
        const [e, t] = y.useState(null),
            n = () => {
                const r = encodeURIComponent("Xin chào! Tôi muốn mua sáp vuốt tóc.");
                window.open(`https://m.me/theanfbcom.vn?text=${r}`, "_blank");
            };
        return u.jsxs("section", {
            className: "py-24 bg-gradient-dark relative overflow-hidden",
            children: [
                u.jsx("div", {
                    className: "absolute inset-0 opacity-5",
                    children: u.jsx("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A55C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        },
                    }),
                }),
                u.jsxs("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: [
                        u.jsxs("div", {
                            className: "text-center mb-16",
                            children: [
                                u.jsxs("div", {
                                    className: "flex items-center justify-center gap-4 mb-4",
                                    children: [
                                        u.jsx("div", { className: "line-decorative" }),
                                        u.jsx("span", {
                                            className: "font-accent text-gold text-lg tracking-[0.3em] uppercase",
                                            children: "Sản Phẩm",
                                        }),
                                        u.jsx("div", { className: "line-decorative" }),
                                    ],
                                }),
                                u.jsxs("h2", {
                                    className:
                                        "font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6",
                                    children: [
                                        "Sáp Vuốt Tóc ",
                                        u.jsx("span", { className: "text-gradient-gold", children: "Cao Cấp" }),
                                    ],
                                }),
                                u.jsx("p", {
                                    className: "font-body text-muted-foreground text-lg max-w-2xl mx-auto",
                                    children: "Sản phẩm chất lượng cao, giúp tóc giữ nếp hoàn hảo cả ngày dài",
                                }),
                            ],
                        }),
                        u.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: EN.map((r, o) =>
                                u.jsxs(
                                    "div",
                                    {
                                        className:
                                            "group bg-card border border-border/50 p-6 hover:border-gold/50 transition-all duration-500 hover:shadow-gold relative overflow-hidden cursor-pointer",
                                        onMouseEnter: () => t(o),
                                        onMouseLeave: () => t(null),
                                        children: [
                                            u.jsx("div", {
                                                className:
                                                    "absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                            }),
                                            u.jsxs("div", {
                                                className: "relative z-10",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-all duration-300",
                                                        children: u.jsx(kf, { className: "w-10 h-10 text-gold" }),
                                                    }),
                                                    u.jsxs("div", {
                                                        className: "flex items-center gap-1 mb-3",
                                                        children: [
                                                            [...Array(5)].map((i, s) =>
                                                                u.jsx(
                                                                    lg,
                                                                    {
                                                                        className: `w-4 h-4 ${s < Math.floor(r.rating) ? "text-gold fill-gold" : "text-muted-foreground"}`,
                                                                    },
                                                                    s
                                                                )
                                                            ),
                                                            u.jsxs("span", {
                                                                className:
                                                                    "font-body text-sm text-muted-foreground ml-2",
                                                                children: ["(", r.rating, ")"],
                                                            }),
                                                        ],
                                                    }),
                                                    u.jsx("h3", {
                                                        className:
                                                            "font-display text-xl font-semibold text-foreground mb-2",
                                                        children: r.name,
                                                    }),
                                                    u.jsx("p", {
                                                        className: "font-body text-sm text-muted-foreground mb-4",
                                                        children: r.description,
                                                    }),
                                                    u.jsxs("div", {
                                                        className:
                                                            "flex items-center justify-between pt-4 border-t border-border/30",
                                                        children: [
                                                            u.jsx("span", {
                                                                className:
                                                                    "font-display text-2xl font-semibold text-gold",
                                                                children: r.price,
                                                            }),
                                                            u.jsx(ig, {
                                                                className: `w-5 h-5 text-gold transition-transform duration-300 ${e === o ? "translate-x-1" : ""}`,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    r.name
                                )
                            ),
                        }),
                        u.jsxs("div", {
                            className: "mt-12 text-center",
                            children: [
                                u.jsxs(Ze, {
                                    variant: "gold",
                                    size: "xl",
                                    onClick: n,
                                    className: "gap-2",
                                    children: [u.jsx(kf, { className: "w-5 h-5" }), "Liên Hệ Mua Hàng"],
                                }),
                                u.jsx("p", {
                                    className: "font-body text-sm text-muted-foreground mt-4",
                                    children: "Nhắn tin Messenger để được tư vấn và đặt mua",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    PN = [
        { src: Ou, alt: "Barbershop interior", category: "Không Gian" },
        { src: Lu, alt: "Barber at work", category: "Đội Ngũ" },
        { src: _u, alt: "Professional tools", category: "Dụng Cụ" },
        { src: Ou, alt: "Barbershop ambiance", category: "Không Gian" },
        { src: Lu, alt: "Haircut service", category: "Dịch Vụ" },
        { src: _u, alt: "Grooming essentials", category: "Dụng Cụ" },
    ],
    jN = () => {
        const [e, t] = y.useState(null);
        return u.jsx("section", {
            id: "gallery",
            className: "py-24 bg-charcoal-light relative",
            children: u.jsxs("div", {
                className: "container mx-auto px-4",
                children: [
                    u.jsxs("div", {
                        className: "text-center mb-16",
                        children: [
                            u.jsxs("div", {
                                className: "flex items-center justify-center gap-4 mb-4",
                                children: [
                                    u.jsx("div", { className: "line-decorative" }),
                                    u.jsx("span", {
                                        className: "font-accent text-gold text-lg tracking-[0.3em] uppercase",
                                        children: "Hình Ảnh",
                                    }),
                                    u.jsx("div", { className: "line-decorative" }),
                                ],
                            }),
                            u.jsx("h2", {
                                className:
                                    "font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6",
                                children: u.jsx("span", { className: "text-gradient-gold", children: "Gallery" }),
                            }),
                            u.jsx("p", {
                                className: "font-body text-muted-foreground text-lg max-w-2xl mx-auto",
                                children: "Khám phá không gian và phong cách của Chú Bôn Barberhouse",
                            }),
                        ],
                    }),
                    u.jsx("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                        children: PN.map((n, r) =>
                            u.jsxs(
                                "div",
                                {
                                    className: `relative overflow-hidden group cursor-pointer ${r === 0 ? "md:col-span-2 md:row-span-2" : ""}`,
                                    onMouseEnter: () => t(r),
                                    onMouseLeave: () => t(null),
                                    children: [
                                        u.jsx("div", {
                                            className: "aspect-square overflow-hidden",
                                            children: u.jsx("img", {
                                                src: n.src,
                                                alt: n.alt,
                                                className: `w-full h-full object-cover transition-all duration-700 ${e === r ? "scale-110" : "scale-100"}`,
                                            }),
                                        }),
                                        u.jsx("div", {
                                            className: `absolute inset-0 bg-background/60 flex items-center justify-center transition-opacity duration-300 ${e === r ? "opacity-100" : "opacity-0"}`,
                                            children: u.jsxs("div", {
                                                className: "text-center",
                                                children: [
                                                    u.jsx("span", {
                                                        className:
                                                            "font-accent text-gold text-sm tracking-wider uppercase",
                                                        children: n.category,
                                                    }),
                                                    u.jsx("div", { className: "w-8 h-px bg-gold mx-auto mt-2" }),
                                                ],
                                            }),
                                        }),
                                        u.jsx("div", {
                                            className: `absolute inset-0 border-2 transition-colors duration-300 ${e === r ? "border-gold" : "border-transparent"}`,
                                        }),
                                    ],
                                },
                                r
                            )
                        ),
                    }),
                ],
            }),
        });
    },
    zo = [
        {
            name: "Minh Hoàng",
            content: "Dịch vụ tuyệt vời, anh Bôn cắt rất đẹp và tư vấn kiểu tóc phù hợp. Sẽ quay lại nhiều lần nữa!",
            rating: 5,
        },
        {
            name: "Văn Tùng",
            content: "Tiệm sạch sẽ, giá cả hợp lý. Cắt tóc xong còn được gội đầu massage rất sảng khoái.",
            rating: 5,
        },
        {
            name: "Đức Anh",
            content: "Lần đầu đến nhưng rất hài lòng. Anh Bôn thân thiện, cắt tóc kỹ và đẹp. Recommend cho anh em!",
            rating: 5,
        },
        {
            name: "Thanh Phong",
            content: "Nhuộm tóc ở đây rất đẹp, màu lên chuẩn và giá rẻ hơn nhiều tiệm khác. 10 điểm!",
            rating: 5,
        },
        {
            name: "Quốc Bảo",
            content: "Fade chuẩn từng đường, tay nghề anh Tony cao lắm. Giá sinh viên lại còn rẻ nữa!",
            rating: 5,
        },
        {
            name: "Hữu Nghĩa",
            content: "Cắt tóc ở đây 3 năm rồi, chưa bao giờ thất vọng. Anh Bôn hiểu ý khách rất nhanh.",
            rating: 5,
        },
        { name: "Tuấn Kiệt", content: "Kiểu undercut cắt cực kỳ sắc nét, gọn gàng. Bạn bè khen hoài luôn!", rating: 5 },
        { name: "Hoàng Nam", content: "Dịch vụ gội đầu dưỡng sinh quá đã, vừa cắt đẹp vừa được thư giãn.", rating: 5 },
        {
            name: "Công Minh",
            content: "Tiệm nhỏ nhưng chất lượng không nhỏ. Anh chủ vui tính, cắt tóc nhanh và đẹp.",
            rating: 5,
        },
        {
            name: "Bình An",
            content: "Uốn tóc ở đây rất tự nhiên, không bị cứng như mấy tiệm khác. Rất ưng!",
            rating: 5,
        },
        {
            name: "Trọng Nhân",
            content: "Cắt combo gội massage chỉ có 80k mà chất lượng như spa 5 sao luôn!",
            rating: 5,
        },
        {
            name: "Thiên Phú",
            content: "Anh Bôn tư vấn kiểu tóc hợp với khuôn mặt mình lắm. Cảm ơn anh nhiều!",
            rating: 5,
        },
        {
            name: "Đình Khoa",
            content: "Lần đầu nhuộm tóc, lo lắng lắm nhưng anh Tony làm rất cẩn thận và đẹp.",
            rating: 5,
        },
        {
            name: "Quang Huy",
            content: "Tiệm mở giờ linh hoạt, tối muộn vẫn cắt được. Rất tiện cho dân văn phòng!",
            rating: 5,
        },
        { name: "Minh Đức", content: "Cắt tóc layer nam ở đây rất đẹp, tóc bay bay tự nhiên lắm!", rating: 5 },
        {
            name: "Anh Khôi",
            content: "Giá rẻ hơn nhiều tiệm trong khu vực mà chất lượng lại tốt hơn. 5 sao!",
            rating: 5,
        },
        {
            name: "Phúc Thịnh",
            content: "Anh chủ nhiệt tình, còn hướng dẫn cách chăm sóc tóc sau khi uốn nữa.",
            rating: 5,
        },
        { name: "Hải Đăng", content: "Cắt tóc trẻ con ở đây anh Bôn rất kiên nhẫn, bé nhà mình thích lắm!", rating: 5 },
        { name: "Nhật Minh", content: "Đặt lịch qua Messenger rất tiện, không phải chờ đợi lâu.", rating: 5 },
        { name: "Việt Hùng", content: "Tóc mình khó cắt lắm nhưng anh Tony xử lý gọn gàng. Tay nghề cao!", rating: 5 },
        { name: "Trung Kiên", content: "Dịch vụ cạo mặt ở đây rất sảng khoái, da mặt sạch sẽ và mịn màng.", rating: 5 },
        { name: "Đức Trung", content: "Cắt tóc premlock cực đỉnh, đúng trend mà vẫn phù hợp với mặt mình.", rating: 5 },
        { name: "Thành Đạt", content: "Không gian tiệm thoáng mát, có điều hòa mát lạnh. Rất dễ chịu!", rating: 5 },
        { name: "Bá Thành", content: "Gội đầu 2 nước + massage vai cổ cực kỳ thư giãn. Stress bay hết!", rating: 5 },
        { name: "Hoàng Phúc", content: "Cắt tóc side part chuẩn từng milimet, cực kỳ hài lòng!", rating: 5 },
        { name: "Duy Khang", content: "Tiệm có wifi mạnh, vừa cắt tóc vừa làm việc được luôn.", rating: 5 },
        { name: "Quốc Toàn", content: "Lần nào cắt cũng được anh Bôn mời uống nước. Dịch vụ tận tâm!", rating: 5 },
        { name: "Văn Lâm", content: "Cắt mullet ở đây rất đẹp, đúng kiểu Hàn Quốc mà mình muốn.", rating: 5 },
        { name: "Ngọc Sơn", content: "Anh Tony cắt tóc rất nhanh mà vẫn đẹp, phù hợp cho ai bận rộn.", rating: 5 },
        { name: "Hữu Lộc", content: "Giá cả minh bạch, không phát sinh phí ẩn. Rất đáng tin cậy!", rating: 5 },
        { name: "Minh Trí", content: "Cạo râu styling ở đây rất chuyên nghiệp, sạch sẽ và an toàn.", rating: 5 },
        { name: "Khánh Duy", content: "Tóc highlight nhuộm ở đây rất tự nhiên, không bị vàng khè.", rating: 5 },
        {
            name: "Thanh Tùng",
            content: "Anh Bôn rất am hiểu các kiểu tóc hot trend, cắt kiểu nào cũng đẹp!",
            rating: 5,
        },
        { name: "Hoàng Long", content: "Tiệm có parking xe máy rộng rãi, đỗ xe rất tiện.", rating: 5 },
        { name: "Đình Toàn", content: "Cắt tóc textured crop cực đẹp, tóc dày lên hẳn!", rating: 5 },
        { name: "Viết Thành", content: "Dịch vụ wax tóc sau cắt rất tỉ mỉ, về nhà không cần vuốt lại.", rating: 5 },
        {
            name: "Quang Vinh",
            content: "Anh chủ còn cho xem kiểu tóc trên điện thoại trước khi cắt. Rất chuyên nghiệp!",
            rating: 5,
        },
        { name: "Tấn Phát", content: "Cắt tóc two block ở đây rất chuẩn Hàn, ai cũng khen đẹp!", rating: 5 },
        { name: "Nguyên Khang", content: "Tiệm sạch sẽ, dụng cụ được khử trùng cẩn thận. Rất yên tâm!", rating: 5 },
        { name: "Bảo Khánh", content: "Massage đầu sau gội rất sảng khoái, muốn ngủ luôn tại chỗ!", rating: 5 },
        { name: "Hữu Phước", content: "Đã giới thiệu cho cả công ty đến cắt ở đây. Ai cũng hài lòng!", rating: 5 },
        { name: "Đức Huy", content: "Tẩy trắng ở đây rất đẹp, không bị hư tóc. Giá lại rẻ nữa!", rating: 5 },
        { name: "Nguyễn Khải", content: "Uốn chidorri cực kỳ tự nhiên, đúng style Hàn Quốc mình muốn.", rating: 5 },
        { name: "Lê Hùng", content: "Ép size ở đây giá chỉ 149k mà tóc thẳng mượt như salon 5 sao!", rating: 5 },
        { name: "Trần Nam", content: "Móc like đẹp lắm, highlight tự nhiên không bị lộ chân tóc.", rating: 5 },
        { name: "Phạm Tú", content: "Nhuộm đen 99k thôi mà bóng mượt lắm, che phủ hết tóc bạc.", rating: 5 },
        { name: "Võ Đức", content: "Cắt tóc + uốn phồng combo quá đẹp, bồng bềnh tự nhiên.", rating: 5 },
        { name: "Lý Minh", content: "Anh Bôn cắt fade skin cực kỳ sắc nét, sạch sẽ từng đường.", rating: 5 },
        {
            name: "Đặng Khôi",
            content: "Dịch vụ massage sau gội rất chuyên nghiệp, đau vai mấy ngày hết luôn.",
            rating: 5,
        },
        { name: "Huỳnh Tân", content: "Tiệm mở cửa sớm lúc 7h sáng, rất tiện đi cắt trước giờ làm.", rating: 5 },
        { name: "Phan Vinh", content: "Uốn ruffled ở đây đẹp lắm, sóng lơi tự nhiên không bị cứng.", rating: 5 },
        { name: "Ngô Hải", content: "Cắt tóc cho con trai, bé ngồi yên vì anh Bôn rất kiên nhẫn.", rating: 5 },
        { name: "Đỗ Quân", content: "Giá cả phải chăng, chất lượng cao. Không có gì phải phàn nàn!", rating: 5 },
        { name: "Bùi Phong", content: "Tay nghề cao, cắt kiểu nào cũng đẹp. 5 sao tuyệt đối!", rating: 5 },
        { name: "Hồ Đăng", content: "Tiệm trang trí đẹp, chụp ảnh check-in rất ổn. Highly recommend!", rating: 5 },
        { name: "Cao Thắng", content: "Uốn con sâu ở đây xoăn đều, không bị rối. Giữ nếp rất lâu.", rating: 5 },
        { name: "Lương Anh", content: "Cắt tóc xong được tạo kiểu miễn phí, về nhà ai cũng khen đẹp.", rating: 5 },
        { name: "Mai Sơn", content: "Đặt lịch online rất tiện, không phải đợi lâu. Dịch vụ 5 sao!", rating: 5 },
        { name: "Đinh Hoàng", content: "Anh Tony rất vui tính, vừa cắt tóc vừa kể chuyện hay lắm.", rating: 5 },
        { name: "Dương Hải", content: "Tiệm có không gian riêng tư, không ồn ào. Rất dễ chịu!", rating: 5 },
        { name: "Vũ Trường", content: "Cắt tóc layer ngắn rất đẹp, tạo form mặt cực kỳ gọn gàng.", rating: 5 },
        { name: "Tạ Quang", content: "Dịch vụ gội đầu thảo mộc thơm lắm, da đầu sạch sẽ không ngứa.", rating: 5 },
        { name: "Lưu Đức", content: "Tiệm gần nhà, giá rẻ mà chất lượng tốt. Không cần đi xa nữa!", rating: 5 },
        { name: "Trịnh Nam", content: "Cắt tóc xong được styling bằng sáp xịn. Về nhà vẫn đẹp!", rating: 5 },
        { name: "Kiều Phong", content: "Anh Bôn cắt tóc rất tỉ mỉ, từng chi tiết đều được chăm chút.", rating: 5 },
        { name: "Tô Huy", content: "Giá cắt tóc trẻ em miễn phí dưới 1 tuổi. Quá tuyệt vời!", rating: 5 },
        { name: "Hà Minh", content: "Uốn layer ngắn 199k thôi mà đẹp như 500k bên tiệm khác.", rating: 5 },
        { name: "Chu Đình", content: "Nhuộm tóc không hại da đầu, không ngứa rát. Rất an toàn!", rating: 5 },
        { name: "La Thành", content: "Tiệm có máy lạnh mát lắm, mùa hè đến cắt tóc rất sướng.", rating: 5 },
        { name: "Quách Sơn", content: "Cắt tóc Caesar style đẹp lắm, đúng kiểu châu Âu cổ điển.", rating: 5 },
        { name: "Doãn Hùng", content: "Dịch vụ ráy tai rất nhẹ nhàng, không đau. Sạch sẽ lắm!", rating: 5 },
        { name: "Thái Long", content: "Anh chủ tư vấn rất tận tình, chọn được kiểu tóc ưng ý.", rating: 5 },
        { name: "Mạc Văn", content: "Tiệm mở cửa đến 9h tối, đi làm về vẫn kịp cắt tóc.", rating: 5 },
        { name: "Từ Đức", content: "Cắt pompadour cực đẹp, bồng cao mà vẫn tự nhiên.", rating: 5 },
        { name: "Lâm Hoàng", content: "Uốn trẻ em 149k thôi mà bé nhà mình cute lên hẳn!", rating: 5 },
        { name: "An Phú", content: "Tẩy + nhuộm combo rất đẹp, màu lên chuẩn không bị ố.", rating: 5 },
        { name: "Khương Duy", content: "Tiệm có nhạc nhẹ, không gian thư giãn. Cắt tóc rất thoải mái.", rating: 5 },
        { name: "Triệu Nam", content: "Giá combo đi 5 tính tiền 4 rất hời. Rủ bạn bè đi chung!", rating: 5 },
        { name: "Sơn Tùng", content: "Cắt tóc quiff rất đẹp, phía trước cao, phía sau gọn gàng.", rating: 5 },
        { name: "Tuấn Anh", content: "Dịch vụ nhuộm tóc rất nhanh, chỉ 45 phút là xong.", rating: 5 },
        { name: "Đức Việt", content: "Anh Bôn cắt tóc cho ba mình, ông rất hài lòng và khen mãi.", rating: 5 },
        { name: "Hùng Cường", content: "Tiệm sạch sẽ, ghế ngồi êm, đợi cắt mà ngủ luôn!", rating: 5 },
        { name: "Thế Anh", content: "Cắt combover đẹp lắm, lịch sự mà không bị già.", rating: 5 },
        { name: "Tùng Lâm", content: "Gội đầu massage 30 phút mà chỉ 30k. Rẻ quá!", rating: 5 },
        { name: "Văn Phú", content: "Uốn phồng tự nhiên, không bị xù như nấm. Rất ưng!", rating: 5 },
        { name: "Đình Dũng", content: "Anh Tony rất giỏi cắt tóc dày, không bị nặng đầu.", rating: 5 },
        { name: "Nhật Duy", content: "Tiệm có parking rộng, đỗ xe thoải mái không lo mất.", rating: 5 },
        { name: "Quốc Hùng", content: "Cắt tóc slick back cực kỳ gọn gàng, lịch sự. 10 điểm!", rating: 5 },
        { name: "Trường Giang", content: "Đi 10 lần có quà tặng. Chương trình khuyến mãi hay!", rating: 5 },
        { name: "Gia Huy", content: "Nhuộm màu ash grey rất đẹp, không bị xanh hay vàng.", rating: 5 },
        { name: "Viết Dũng", content: "Anh Bôn rất hiền, cắt tóc cho con mình không khóc.", rating: 5 },
        { name: "Xuân Thành", content: "Dịch vụ tỉa râu styling rất đẹp, đường nét rõ ràng.", rating: 5 },
        { name: "Bình Minh", content: "Cắt tóc buzz cut rất nhanh, chỉ 15 phút là xong.", rating: 5 },
        { name: "Thiện Nhân", content: "Tiệm có nước uống miễn phí, phục vụ rất chu đáo.", rating: 5 },
        { name: "Hữu Đạt", content: "Ép size tóc ở đây không bị khô xơ, vẫn mềm mượt.", rating: 5 },
    ],
    RN = () => {
        const [e, t] = y.useState(!1),
            n = e ? zo : zo.slice(0, 8);
        return u.jsxs("section", {
            id: "testimonials",
            className: "py-24 bg-charcoal relative overflow-hidden",
            children: [
                u.jsxs("div", {
                    className: "absolute top-0 left-0 w-full h-full",
                    children: [
                        u.jsx("div", {
                            className:
                                "absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float",
                        }),
                        u.jsx("div", {
                            className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl",
                        }),
                        u.jsx("div", {
                            className:
                                "absolute top-1/2 right-1/3 w-48 h-48 bg-gold/3 rounded-full blur-2xl animate-float",
                            style: { animationDelay: "2s" },
                        }),
                    ],
                }),
                u.jsxs("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: [
                        u.jsxs("div", {
                            className: "text-center mb-16",
                            children: [
                                u.jsxs("div", {
                                    className: "flex items-center justify-center gap-4 mb-4",
                                    children: [
                                        u.jsx("div", { className: "line-decorative" }),
                                        u.jsx("span", {
                                            className: "font-accent text-gold text-lg tracking-[0.3em] uppercase",
                                            children: "Đánh Giá",
                                        }),
                                        u.jsx("div", { className: "line-decorative" }),
                                    ],
                                }),
                                u.jsxs("h2", {
                                    className: "font-display text-4xl md:text-5xl font-semibold text-foreground mb-4",
                                    children: [
                                        u.jsxs("span", { className: "text-gradient-gold", children: [zo.length, "+"] }),
                                        " Khách Hàng Hài Lòng",
                                    ],
                                }),
                                u.jsx("p", {
                                    className: "font-body text-muted-foreground max-w-2xl mx-auto",
                                    children:
                                        "Phản hồi chân thực từ khách hàng đã trải nghiệm dịch vụ tại Chú Bôn Barberhouse",
                                }),
                            ],
                        }),
                        u.jsxs("div", {
                            className: "grid grid-cols-3 gap-4 mb-12 max-w-xl mx-auto",
                            children: [
                                u.jsxs("div", {
                                    className: "text-center p-4 bg-card border border-border/30",
                                    children: [
                                        u.jsxs("span", {
                                            className: "font-display text-3xl font-bold text-gradient-gold",
                                            children: [zo.length, "+"],
                                        }),
                                        u.jsx("p", {
                                            className: "font-body text-sm text-muted-foreground mt-1",
                                            children: "Đánh giá",
                                        }),
                                    ],
                                }),
                                u.jsxs("div", {
                                    className: "text-center p-4 bg-card border border-border/30",
                                    children: [
                                        u.jsx("span", {
                                            className: "font-display text-3xl font-bold text-gradient-gold",
                                            children: "5.0",
                                        }),
                                        u.jsx("p", {
                                            className: "font-body text-sm text-muted-foreground mt-1",
                                            children: "Sao trung bình",
                                        }),
                                    ],
                                }),
                                u.jsxs("div", {
                                    className: "text-center p-4 bg-card border border-border/30",
                                    children: [
                                        u.jsx("span", {
                                            className: "font-display text-3xl font-bold text-gradient-gold",
                                            children: "100%",
                                        }),
                                        u.jsx("p", {
                                            className: "font-body text-sm text-muted-foreground mt-1",
                                            children: "Hài lòng",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        u.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                            children: n.map((r, o) =>
                                u.jsxs(
                                    "div",
                                    {
                                        className:
                                            "bg-card border border-border/30 p-5 relative group hover:border-gold/50 transition-all duration-300 hover:shadow-gold",
                                        style: { animationDelay: `${o * 50}ms` },
                                        children: [
                                            u.jsx(E1, {
                                                className:
                                                    "absolute top-3 right-3 w-6 h-6 text-gold/20 group-hover:text-gold/40 transition-colors",
                                            }),
                                            u.jsx("div", {
                                                className: "flex gap-0.5 mb-2",
                                                children: Array.from({ length: r.rating }).map((i, s) =>
                                                    u.jsx(lg, { className: "w-3 h-3 fill-gold text-gold" }, s)
                                                ),
                                            }),
                                            u.jsxs("p", {
                                                className:
                                                    "font-body text-muted-foreground leading-relaxed mb-3 italic text-xs line-clamp-3",
                                                children: ['"', r.content, '"'],
                                            }),
                                            u.jsxs("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center",
                                                        children: u.jsx("span", {
                                                            className: "font-display text-gold font-semibold text-xs",
                                                            children: r.name.charAt(0),
                                                        }),
                                                    }),
                                                    u.jsxs("div", {
                                                        children: [
                                                            u.jsx("h4", {
                                                                className:
                                                                    "font-display text-foreground font-medium text-xs",
                                                                children: r.name,
                                                            }),
                                                            u.jsx("p", {
                                                                className:
                                                                    "font-body text-[10px] text-muted-foreground",
                                                                children: "Khách hàng",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    o
                                )
                            ),
                        }),
                        u.jsx("div", {
                            className: "text-center mt-10",
                            children: u.jsx(Ze, {
                                variant: "outline",
                                onClick: () => t(!e),
                                className: "border-gold/50 text-gold hover:bg-gold/10 hover:text-gold gap-2",
                                children: e
                                    ? u.jsxs(u.Fragment, { children: [u.jsx(p1, { className: "w-4 h-4" }), "Ẩn bớt"] })
                                    : u.jsxs(u.Fragment, {
                                        children: [
                                            u.jsx(h1, { className: "w-4 h-4" }),
                                            "Xem thêm ",
                                            zo.length - 8,
                                            " đánh giá",
                                        ],
                                    }),
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    MN = "https://www.facebook.com/theanfbcom.vn",
    ON = () => {
        const [e, t] = y.useState({ name: "", phone: "", date: "", time: "", service: "", note: "" }),
            n = (o) => {
                const { name: i, value: s } = o.target;
                t((a) => ({ ...a, [i]: s }));
            },
            r = (o) => {
                if ((o.preventDefault(), !e.name || !e.phone || !e.date || !e.time || !e.service)) {
                    Ef.error("Vui lòng điền đầy đủ thông tin!");
                    return;
                }
                const i = {
                        haircut: "Cắt Tóc Nam - 30.000đ",
                        wash: "Gội Đầu - 30.000đ",
                        shave: "Ráy Tai Tỉa Râu - 30.000đ",
                        dye: "Nhuộm Tóc - 300.000đ",
                    },
                    s = `📅 ĐẶT LỊCH CHÚ BÔN BARBERHOUSE

👤 Họ tên: ${e.name}
📱 SĐT: ${e.phone}
📆 Ngày: ${e.date}
⏰ Giờ: ${e.time}
💇 Dịch vụ: ${i[e.service] || e.service}
${e.note ? `📝 Ghi chú: ${e.note}` : ""}`,
                    a = `https://m.me/theanfbcom.vn?text=${encodeURIComponent(s)}`;
                window.open(a, "_blank"), Ef.success("Đang chuyển đến Messenger để xác nhận đặt lịch!");
            };
        return u.jsxs("section", {
            id: "contact",
            className: "py-24 bg-background relative overflow-hidden",
            children: [
                u.jsx("div", {
                    className: "absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent",
                }),
                u.jsx("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: u.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
                        children: [
                            u.jsxs("div", {
                                children: [
                                    u.jsxs("div", {
                                        className: "flex items-center gap-4 mb-4",
                                        children: [
                                            u.jsx("div", { className: "line-decorative" }),
                                            u.jsx("span", {
                                                className: "font-accent text-gold text-lg tracking-[0.3em] uppercase",
                                                children: "Liên Hệ",
                                            }),
                                        ],
                                    }),
                                    u.jsxs("h2", {
                                        className:
                                            "font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight",
                                        children: [
                                            "Ghé Thăm",
                                            u.jsx("br", {}),
                                            u.jsx("span", { className: "text-gradient-gold", children: "Chú Bôn" }),
                                        ],
                                    }),
                                    u.jsx("p", {
                                        className: "font-body text-muted-foreground leading-relaxed mb-10 max-w-md",
                                        children:
                                            "Chúng tôi luôn sẵn sàng phục vụ quý khách. Hãy đến trải nghiệm dịch vụ tại Chú Bôn Barberhouse.",
                                    }),
                                    u.jsx("div", {
                                        className: "mb-10 border border-border/30 overflow-hidden",
                                        children: u.jsx("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.123456789!2d108.123456!3d11.789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVsOibiBI4bqhbmgsIEhvw6BpIMSQ4bupYywgTMOibSBIw6AsIEzDom0gxJDhu5NuZw!5e0!3m2!1svi!2s!4v1234567890",
                                            width: "100%",
                                            height: "200",
                                            style: { border: 0 },
                                            allowFullScreen: !0,
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer-when-downgrade",
                                            title: "Chú Bôn Barberhouse Location",
                                        }),
                                    }),
                                    u.jsxs("div", {
                                        className: "space-y-6 mb-10",
                                        children: [
                                            u.jsxs("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0",
                                                        children: u.jsx(k1, { className: "w-5 h-5 text-gold" }),
                                                    }),
                                                    u.jsxs("div", {
                                                        children: [
                                                            u.jsx("h4", {
                                                                className:
                                                                    "font-display text-foreground font-medium mb-1",
                                                                children: "Địa Chỉ",
                                                            }),
                                                            u.jsx("p", {
                                                                className: "font-body text-muted-foreground",
                                                                children:
                                                                    "Thôn Vân Khánh, Xã Hoài Đức, Huyện Lâm Hà, Tỉnh Lâm Đồng",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            u.jsxs("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0",
                                                        children: u.jsx(ag, { className: "w-5 h-5 text-gold" }),
                                                    }),
                                                    u.jsxs("div", {
                                                        children: [
                                                            u.jsx("h4", {
                                                                className:
                                                                    "font-display text-foreground font-medium mb-1",
                                                                children: "Hotline",
                                                            }),
                                                            u.jsx("p", {
                                                                className: "font-body text-muted-foreground",
                                                                children: "0366 882 484",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            u.jsxs("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0",
                                                        children: u.jsx(sg, { className: "w-5 h-5 text-gold" }),
                                                    }),
                                                    u.jsxs("div", {
                                                        children: [
                                                            u.jsx("h4", {
                                                                className:
                                                                    "font-display text-foreground font-medium mb-1",
                                                                children: "Giờ Mở Cửa",
                                                            }),
                                                            u.jsx("p", {
                                                                className: "font-body text-muted-foreground",
                                                                children: "Thứ 2 - Chủ Nhật: 8:00 - 21:30",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            u.jsxs("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0",
                                                        children: u.jsx(b1, { className: "w-5 h-5 text-gold" }),
                                                    }),
                                                    u.jsxs("div", {
                                                        children: [
                                                            u.jsx("h4", {
                                                                className:
                                                                    "font-display text-foreground font-medium mb-1",
                                                                children: "Email",
                                                            }),
                                                            u.jsx("p", {
                                                                className: "font-body text-muted-foreground",
                                                                children: "anhtony1032006@gmail.com",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            u.jsxs("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    u.jsx("div", {
                                                        className:
                                                            "w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0",
                                                        children: u.jsx(_c, { className: "w-5 h-5 text-gold" }),
                                                    }),
                                                    u.jsxs("div", {
                                                        children: [
                                                            u.jsx("h4", {
                                                                className:
                                                                    "font-display text-foreground font-medium mb-1",
                                                                children: "Facebook",
                                                            }),
                                                            u.jsx("a", {
                                                                href: MN,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className:
                                                                    "font-body text-muted-foreground hover:text-gold transition-colors",
                                                                children: "Anh Tony",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            u.jsxs("div", {
                                className: "bg-card border border-border/50 p-8 md:p-10",
                                children: [
                                    u.jsx("h3", {
                                        className: "font-display text-2xl font-semibold text-foreground mb-6",
                                        children: "Đặt Lịch Hẹn",
                                    }),
                                    u.jsxs("form", {
                                        className: "space-y-5",
                                        onSubmit: r,
                                        children: [
                                            u.jsxs("div", {
                                                children: [
                                                    u.jsx("label", {
                                                        className: "font-body text-sm text-muted-foreground block mb-2",
                                                        children: "Họ và Tên",
                                                    }),
                                                    u.jsx("input", {
                                                        type: "text",
                                                        name: "name",
                                                        value: e.name,
                                                        onChange: n,
                                                        placeholder: "Nhập họ tên của bạn",
                                                        className:
                                                            "w-full bg-background border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors",
                                                    }),
                                                ],
                                            }),
                                            u.jsxs("div", {
                                                children: [
                                                    u.jsx("label", {
                                                        className: "font-body text-sm text-muted-foreground block mb-2",
                                                        children: "Số Điện Thoại",
                                                    }),
                                                    u.jsx("input", {
                                                        type: "tel",
                                                        name: "phone",
                                                        value: e.phone,
                                                        onChange: n,
                                                        placeholder: "Nhập số điện thoại",
                                                        className:
                                                            "w-full bg-background border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors",
                                                    }),
                                                ],
                                            }),
                                            u.jsxs("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    u.jsxs("div", {
                                                        children: [
                                                            u.jsx("label", {
                                                                className:
                                                                    "font-body text-sm text-muted-foreground block mb-2",
                                                                children: "Ngày",
                                                            }),
                                                            u.jsx("input", {
                                                                type: "date",
                                                                name: "date",
                                                                value: e.date,
                                                                onChange: n,
                                                                className:
                                                                    "w-full bg-background border border-border/50 px-4 py-3 font-body text-foreground focus:outline-none focus:border-gold transition-colors",
                                                            }),
                                                        ],
                                                    }),
                                                    u.jsxs("div", {
                                                        children: [
                                                            u.jsx("label", {
                                                                className:
                                                                    "font-body text-sm text-muted-foreground block mb-2",
                                                                children: "Giờ",
                                                            }),
                                                            u.jsxs("select", {
                                                                name: "time",
                                                                value: e.time,
                                                                onChange: n,
                                                                className:
                                                                    "w-full bg-background border border-border/50 px-4 py-3 font-body text-foreground focus:outline-none focus:border-gold transition-colors",
                                                                children: [
                                                                    u.jsx("option", {
                                                                        value: "",
                                                                        children: "Chọn giờ",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "8:00",
                                                                        children: "8:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "9:00",
                                                                        children: "9:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "10:00",
                                                                        children: "10:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "11:00",
                                                                        children: "11:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "14:00",
                                                                        children: "14:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "15:00",
                                                                        children: "15:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "16:00",
                                                                        children: "16:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "17:00",
                                                                        children: "17:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "18:00",
                                                                        children: "18:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "19:00",
                                                                        children: "19:00",
                                                                    }),
                                                                    u.jsx("option", {
                                                                        value: "20:00",
                                                                        children: "20:00",
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            u.jsxs("div", {
                                                children: [
                                                    u.jsx("label", {
                                                        className: "font-body text-sm text-muted-foreground block mb-2",
                                                        children: "Dịch Vụ",
                                                    }),
                                                    u.jsxs("select", {
                                                        name: "service",
                                                        value: e.service,
                                                        onChange: n,
                                                        className:
                                                            "w-full bg-background border border-border/50 px-4 py-3 font-body text-foreground focus:outline-none focus:border-gold transition-colors",
                                                        children: [
                                                            u.jsx("option", { value: "", children: "Chọn dịch vụ" }),
                                                            u.jsx("option", {
                                                                value: "haircut",
                                                                children: "Cắt Tóc Nam - 30.000đ",
                                                            }),
                                                            u.jsx("option", {
                                                                value: "wash",
                                                                children: "Gội Đầu - 30.000đ",
                                                            }),
                                                            u.jsx("option", {
                                                                value: "shave",
                                                                children: "Ráy Tai Tỉa Râu - 30.000đ",
                                                            }),
                                                            u.jsx("option", {
                                                                value: "dye",
                                                                children: "Nhuộm Tóc - 300.000đ",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            u.jsxs("div", {
                                                children: [
                                                    u.jsx("label", {
                                                        className: "font-body text-sm text-muted-foreground block mb-2",
                                                        children: "Ghi Chú (Tùy chọn)",
                                                    }),
                                                    u.jsx("textarea", {
                                                        rows: 3,
                                                        name: "note",
                                                        value: e.note,
                                                        onChange: n,
                                                        placeholder: "Yêu cầu đặc biệt...",
                                                        className:
                                                            "w-full bg-background border border-border/50 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors resize-none",
                                                    }),
                                                ],
                                            }),
                                            u.jsxs(Ze, {
                                                variant: "gold",
                                                size: "lg",
                                                className: "w-full",
                                                type: "submit",
                                                children: [
                                                    u.jsx(vi, { className: "w-5 h-5 mr-2" }),
                                                    "Đặt Lịch Qua Messenger",
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    LN = () =>
        u.jsx("footer", {
            className: "bg-charcoal border-t border-border/30 py-12",
            children: u.jsxs("div", {
                className: "container mx-auto px-4",
                children: [
                    u.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-10 mb-10",
                        children: [
                            u.jsxs("div", {
                                children: [
                                    u.jsxs("a", {
                                        href: "#home",
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            u.jsx(Na, { className: "w-8 h-8 text-gold" }),
                                            u.jsxs("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    u.jsx("span", {
                                                        className:
                                                            "font-display text-xl font-semibold tracking-wider text-foreground",
                                                        children: "CHÚ BÔN",
                                                    }),
                                                    u.jsx("span", {
                                                        className:
                                                            "font-accent text-xs tracking-[0.3em] text-gold uppercase",
                                                        children: "Barberhouse",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    u.jsx("p", {
                                        className: "font-body text-sm text-muted-foreground leading-relaxed",
                                        children: "Nơi nghệ thuật cắt tóc truyền thống gặp gỡ phong cách hiện đại.",
                                    }),
                                ],
                            }),
                            u.jsxs("div", {
                                children: [
                                    u.jsx("h4", {
                                        className: "font-display text-foreground font-medium mb-4",
                                        children: "Liên Kết",
                                    }),
                                    u.jsx("ul", {
                                        className: "space-y-2",
                                        children: [
                                            "Trang Chủ",
                                            "Dịch Vụ",
                                            "Về Chúng Tôi",
                                            "Gallery",
                                            "Đánh Giá",
                                            "Liên Hệ",
                                        ].map((e) =>
                                            u.jsx(
                                                "li",
                                                {
                                                    children: u.jsx("a", {
                                                        href: `#${e.toLowerCase().replace(/\s+/g, "")}`,
                                                        className:
                                                            "font-body text-sm text-muted-foreground hover:text-gold transition-colors",
                                                        children: e,
                                                    }),
                                                },
                                                e
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            u.jsxs("div", {
                                children: [
                                    u.jsx("h4", {
                                        className: "font-display text-foreground font-medium mb-4",
                                        children: "Giờ Hoạt Động",
                                    }),
                                    u.jsx("ul", {
                                        className: "space-y-2 font-body text-sm text-muted-foreground",
                                        children: u.jsxs("li", {
                                            className: "flex justify-between",
                                            children: [
                                                u.jsx("span", { children: "Thứ 2 - Chủ Nhật" }),
                                                u.jsx("span", {
                                                    className: "text-foreground",
                                                    children: "8:00 - 21:30",
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    u.jsxs("div", {
                        className:
                            "border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                        children: [
                            u.jsx("p", {
                                className: "font-body text-sm text-muted-foreground",
                                children: "© 2024 Chú Bôn Barberhouse. All rights reserved.",
                            }),
                            u.jsx("div", {
                                className: "flex gap-6",
                                children: u.jsxs("a", {
                                    href: "https://www.facebook.com/theanfbcom.vn",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                        "flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-gold transition-colors",
                                    children: [u.jsx(_c, { className: "w-4 h-4" }), "Anh Tony"],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    _N = () => {
        const [e, t] = y.useState(!1),
            n = () => {
                const o = encodeURIComponent("Xin chào! Tôi cần hỗ trợ tư vấn.");
                window.open(`https://m.me/theanfbcom.vn?text=${o}`, "_blank");
            },
            r = () => {
                window.location.href = "tel:0366882484";
            };
        return u.jsx(u.Fragment, {
            children: u.jsxs("div", {
                className: "fixed bottom-6 right-6 z-50 flex flex-col gap-3",
                children: [
                    e &&
                    u.jsxs("div", {
                        className: "animate-fade-up bg-card border border-border/50 shadow-elegant p-4 mb-2 w-72",
                        children: [
                            u.jsxs("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    u.jsx("h3", {
                                        className: "font-display text-lg font-semibold text-foreground",
                                        children: "Hỗ Trợ Khách Hàng",
                                    }),
                                    u.jsx("button", {
                                        onClick: () => t(!1),
                                        className: "text-muted-foreground hover:text-foreground transition-colors",
                                        children: u.jsx(Xs, { className: "w-5 h-5" }),
                                    }),
                                ],
                            }),
                            u.jsx("p", {
                                className: "font-body text-sm text-muted-foreground mb-4",
                                children: "Xin chào! Chúng tôi sẵn sàng hỗ trợ bạn 24/7",
                            }),
                            u.jsxs("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    u.jsxs(Ze, {
                                        onClick: n,
                                        className:
                                            "w-full bg-gradient-gold text-primary-foreground hover:opacity-90 gap-2",
                                        children: [u.jsx(vi, { className: "w-4 h-4" }), "Chat Messenger"],
                                    }),
                                    u.jsxs(Ze, {
                                        onClick: r,
                                        variant: "outline",
                                        className: "w-full border-gold/50 text-gold hover:bg-gold/10 gap-2",
                                        children: [u.jsx(ag, { className: "w-4 h-4" }), "Gọi: 036.688.2484"],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    u.jsxs("button", {
                        onClick: () => t(!e),
                        className:
                            "relative w-14 h-14 bg-gradient-gold shadow-gold flex items-center justify-center hover:scale-110 transition-transform duration-300 group",
                        children: [
                            u.jsx("span", { className: "absolute inset-0 bg-gradient-gold animate-ping opacity-30" }),
                            e
                                ? u.jsx(Xs, { className: "w-6 h-6 text-primary-foreground relative z-10" })
                                : u.jsx(vi, { className: "w-6 h-6 text-primary-foreground relative z-10" }),
                        ],
                    }),
                ],
            }),
        });
    },
    DN = () =>
        u.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                u.jsx(OC, {}),
                u.jsx(LC, {}),
                u.jsx(DC, {}),
                u.jsx(FC, {}),
                u.jsx($C, {}),
                u.jsx(SN, {}),
                u.jsx(NN, {}),
                u.jsx(TN, {}),
                u.jsx(jN, {}),
                u.jsx(RN, {}),
                u.jsx(ON, {}),
                u.jsx(LN, {}),
                u.jsx(_N, {}),
            ],
        }),
    AN = () => {
        const e = qn();
        return (
            y.useEffect(() => {
                console.error("404 Error: User attempted to access non-existent route:", e.pathname);
            }, [e.pathname]),
                u.jsx("div", {
                    className: "flex min-h-screen items-center justify-center bg-muted",
                    children: u.jsxs("div", {
                        className: "text-center",
                        children: [
                            u.jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
                            u.jsx("p", {
                                className: "mb-4 text-xl text-muted-foreground",
                                children: "Oops! Page not found",
                            }),
                            u.jsx("a", {
                                href: "/",
                                className: "text-primary underline hover:text-primary/90",
                                children: "Return to Home",
                            }),
                        ],
                    }),
                })
        );
    },
    IN = new X2(),
    FN = () =>
        u.jsx(Z2, {
            client: IN,
            children: u.jsxs(T2, {
                children: [
                    u.jsx(cw, {}),
                    u.jsx(Bw, {}),
                    u.jsx(bC, {
                        children: u.jsxs(Xk, {
                            children: [
                                u.jsx(Ru, { path: "/", element: u.jsx(DN, {}) }),
                                u.jsx(Ru, { path: "*", element: u.jsx(AN, {}) }),
                            ],
                        }),
                    }),
                ],
            }),
        });
Tp(document.getElementById("root")).render(u.jsx(FN, {}));
