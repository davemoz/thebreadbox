(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/ssr/029y_next_dist_0zc07-a._.js",
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react.react-server.development.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react.react-server.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function noop() {}
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, oldElement.props, oldElement._owner, oldElement._debugStack, oldElement._debugTask);
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var resolveDebugValue = null, rejectDebugValue = null, ioInfo = payload._ioInfo;
            null != ioInfo && (ioInfo.start = ioInfo.end = performance.now(), ioInfo.value = new Promise(function(resolve, reject) {
                resolveDebugValue = resolve;
                rejectDebugValue = reject;
            }));
            ioInfo = payload._result;
            var thenable = ioInfo();
            thenable.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 1;
                    payload._result = moduleObject;
                    var _ioInfo = payload._ioInfo;
                    if (null != _ioInfo) {
                        _ioInfo.end = performance.now();
                        var debugValue = null == moduleObject ? void 0 : moduleObject.default;
                        resolveDebugValue(debugValue);
                        _ioInfo.value.status = "fulfilled";
                        _ioInfo.value.value = debugValue;
                    }
                    void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
                }
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 2;
                    payload._result = error;
                    var _ioInfo2 = payload._ioInfo;
                    null != _ioInfo2 && (_ioInfo2.end = performance.now(), _ioInfo2.value.then(noop, noop), rejectDebugValue(error), _ioInfo2.value.status = "rejected", _ioInfo2.value.reason = error);
                    void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
            });
            ioInfo = payload._ioInfo;
            if (null != ioInfo) {
                var displayName = thenable.displayName;
                "string" === typeof displayName && (ioInfo.name = displayName);
            }
            -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status) return ioInfo = payload._result, void 0 === ioInfo && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ioInfo), "default" in ioInfo || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ioInfo), ioInfo.default;
        throw payload._result;
    }
    function createCacheRoot() {
        return new WeakMap();
    }
    function createCacheNode() {
        return {
            s: 0,
            v: void 0,
            o: null,
            p: null
        };
    }
    var ReactSharedInternals = {
        H: null,
        A: null,
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
    }, isArrayImpl = Array.isArray, REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, createTask = console.createTask ? console.createTask : function() {
        return null;
    }, createFakeCallStack = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    }, specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = createFakeCallStack.react_stack_bottom_frame.bind(createFakeCallStack, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g;
    createFakeCallStack = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = createFakeCallStack;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.ViewTransition = REACT_VIEW_TRANSITION_TYPE;
    exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.cache = function(fn) {
        return function() {
            var dispatcher = ReactSharedInternals.A;
            if (!dispatcher) return fn.apply(null, arguments);
            var fnMap = dispatcher.getCacheForType(createCacheRoot);
            dispatcher = fnMap.get(fn);
            void 0 === dispatcher && (dispatcher = createCacheNode(), fnMap.set(fn, dispatcher));
            fnMap = 0;
            for(var l = arguments.length; fnMap < l; fnMap++){
                var arg = arguments[fnMap];
                if ("function" === typeof arg || "object" === typeof arg && null !== arg) {
                    var objectCache = dispatcher.o;
                    null === objectCache && (dispatcher.o = objectCache = new WeakMap());
                    dispatcher = objectCache.get(arg);
                    void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
                } else objectCache = dispatcher.p, null === objectCache && (dispatcher.p = objectCache = new Map()), dispatcher = objectCache.get(arg), void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
            }
            if (1 === dispatcher.s) return dispatcher.v;
            if (2 === dispatcher.s) throw dispatcher.v;
            try {
                var result = fn.apply(null, arguments);
                fnMap = dispatcher;
                fnMap.s = 1;
                return fnMap.v = result;
            } catch (error) {
                throw result = dispatcher, result.s = 2, result.v = error, error;
            }
        };
    };
    exports.cacheSignal = function() {
        var dispatcher = ReactSharedInternals.A;
        return dispatcher ? dispatcher.cacheSignal() : null;
    };
    exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, props, owner, element._debugStack, element._debugTask);
        for(key = 2; key < arguments.length; key++)validateChildKeys(arguments[key]);
        return props;
    };
    exports.createElement = function(type, config, children) {
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i]);
        var propName;
        i = {};
        var key = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        (propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++) ? (childArray = Error.stackTraceLimit, Error.stackTraceLimit = 10, childrenLength = Error("react-stack-top-frame"), Error.stackTraceLimit = childArray) : childrenLength = unknownOwnerDebugStack;
        return ReactElement(type, key, i, getOwner(), childrenLength, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        ctor = {
            _status: -1,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer
        }, ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [
            {
                awaited: ioInfo
            }
        ];
        return lazyType;
    };
    exports.memo = function(type, compare) {
        null == type && console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.version = "19.3.0-canary-3f0b9e61-20260317";
}();
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/react.react-server.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react.react-server.development.js [app-edge-rsc] (ecmascript)");
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.react-server.development.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-dom.react-server.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function noop() {}
    function getCrossOriginStringAs(as, input) {
        if ("font" === as) return "";
        if ("string" === typeof input) return "use-credentials" === input ? input : "";
    }
    function getValueDescriptorExpectingObjectForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
    }
    function getValueDescriptorExpectingEnumForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
    }
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/react.react-server.js [app-edge-rsc] (ecmascript)"), Internals = {
        d: {
            f: noop,
            r: function() {
                throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
            },
            D: noop,
            C: noop,
            L: noop,
            m: noop,
            X: noop,
            S: noop,
            M: noop
        },
        p: 0,
        findDOMNode: null
    };
    if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
    "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.preconnect = function(href, options) {
        "string" === typeof href && href ? null != options && "object" !== typeof options ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", getValueDescriptorExpectingEnumForWarning(options)) : null != options && "string" !== typeof options.crossOrigin && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", getValueDescriptorExpectingObjectForWarning(options.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
        "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
    };
    exports.prefetchDNS = function(href) {
        if ("string" !== typeof href || !href) console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
        else if (1 < arguments.length) {
            var options = arguments[1];
            "object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options));
        }
        "string" === typeof href && Internals.d.D(href);
    };
    exports.preinit = function(href, options) {
        "string" === typeof href && href ? null == options || "object" !== typeof options ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", getValueDescriptorExpectingEnumForWarning(options)) : "style" !== options.as && "script" !== options.as && console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', getValueDescriptorExpectingEnumForWarning(options.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
        if ("string" === typeof href && options && "string" === typeof options.as) {
            var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
            "style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
                crossOrigin: crossOrigin,
                integrity: integrity,
                fetchPriority: fetchPriority
            }) : "script" === as && Internals.d.X(href, {
                crossOrigin: crossOrigin,
                integrity: integrity,
                fetchPriority: fetchPriority,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
        }
    };
    exports.preinitModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
        if (encountered) console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", encountered);
        else switch(encountered = options && "string" === typeof options.as ? options.as : "script", encountered){
            case "script":
                break;
            default:
                encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)', encountered, href);
        }
        if ("string" === typeof href) if ("object" === typeof options && null !== options) {
            if (null == options.as || "script" === options.as) encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.M(href, {
                crossOrigin: encountered,
                integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
        } else null == options && Internals.d.M(href);
    };
    exports.preload = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', encountered);
        if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
            encountered = options.as;
            var crossOrigin = getCrossOriginStringAs(encountered, options.crossOrigin);
            Internals.d.L(href, encountered, {
                crossOrigin: crossOrigin,
                integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0,
                type: "string" === typeof options.type ? options.type : void 0,
                fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
                referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
                imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
                imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
                media: "string" === typeof options.media ? options.media : void 0
            });
        }
    };
    exports.preloadModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', encountered);
        "string" === typeof href && (options ? (encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.m(href, {
            as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
            crossOrigin: encountered,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0
        })) : Internals.d.m(href));
    };
    exports.version = "19.3.0-canary-3f0b9e61-20260317";
}();
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/react-dom.react-server.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/cjs/react-dom.react-server.development.js [app-edge-rsc] (ecmascript)");
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-server.edge.development.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-server-dom-turbopack-server.edge.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function voidHandler() {}
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function _defineProperty(obj, key, value) {
        a: if ("object" == typeof key && key) {
            var e = key[Symbol.toPrimitive];
            if (void 0 !== e) {
                key = e.call(key, "string");
                if ("object" != typeof key) break a;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            key = String(key);
        }
        key = "symbol" == typeof key ? key : key + "";
        key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value;
        return obj;
    }
    function handleErrorInNextTick(error) {
        setTimeout(function() {
            throw error;
        });
    }
    function writeChunkAndReturn(destination, chunk) {
        if (0 !== chunk.byteLength) if (4096 < chunk.byteLength) 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = new Uint8Array(4096), writtenBytes = 0), destination.enqueue(chunk);
        else {
            var allowableBytes = currentView.length - writtenBytes;
            allowableBytes < chunk.byteLength && (0 === allowableBytes ? destination.enqueue(currentView) : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), chunk = chunk.subarray(allowableBytes)), currentView = new Uint8Array(4096), writtenBytes = 0);
            currentView.set(chunk, writtenBytes);
            writtenBytes += chunk.byteLength;
        }
        return !0;
    }
    function completeWriting(destination) {
        currentView && 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
    }
    function stringToChunk(content) {
        return textEncoder.encode(content);
    }
    function byteLengthOfChunk(chunk) {
        return chunk.byteLength;
    }
    function closeWithError(destination, error) {
        "function" === typeof destination.error ? destination.error(error) : destination.close();
    }
    function isClientReference(reference) {
        return reference.$$typeof === CLIENT_REFERENCE_TAG$1;
    }
    function registerClientReferenceImpl(proxyImplementation, id, async) {
        return Object.defineProperties(proxyImplementation, {
            $$typeof: {
                value: CLIENT_REFERENCE_TAG$1
            },
            $$id: {
                value: id
            },
            $$async: {
                value: async
            }
        });
    }
    function bind() {
        var newFn = FunctionBind.apply(this, arguments);
        if (this.$$typeof === SERVER_REFERENCE_TAG) {
            null != arguments[0] && console.error('Cannot bind "this" of a Server Action. Pass null or undefined as the first argument to .bind().');
            var args = ArraySlice.call(arguments, 1), $$typeof = {
                value: SERVER_REFERENCE_TAG
            }, $$id = {
                value: this.$$id
            };
            args = {
                value: this.$$bound ? this.$$bound.concat(args) : args
            };
            return Object.defineProperties(newFn, {
                $$typeof: $$typeof,
                $$id: $$id,
                $$bound: args,
                $$location: {
                    value: this.$$location,
                    configurable: !0
                },
                bind: {
                    value: bind,
                    configurable: !0
                }
            });
        }
        return newFn;
    }
    function getReference(target, name) {
        switch(name){
            case "$$typeof":
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            case "defaultProps":
                return;
            case "_debugInfo":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case Symbol.toStringTag:
                return Object.prototype[Symbol.toStringTag];
            case "__esModule":
                var moduleId = target.$$id;
                target.default = registerClientReferenceImpl(function() {
                    throw Error("Attempted to call the default export of " + moduleId + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
                }, target.$$id + "#", target.$$async);
                return !0;
            case "then":
                if (target.then) return target.then;
                if (target.$$async) return;
                var clientReference = registerClientReferenceImpl({}, target.$$id, !0), proxy = new Proxy(clientReference, proxyHandlers$1);
                target.status = "fulfilled";
                target.value = proxy;
                return target.then = registerClientReferenceImpl(function(resolve) {
                    return Promise.resolve(resolve(proxy));
                }, target.$$id + "#then", !1);
        }
        if ("symbol" === typeof name) throw Error("Cannot read Symbol exports. Only named exports are supported on a client module imported on the server.");
        clientReference = target[name];
        clientReference || (clientReference = registerClientReferenceImpl(function() {
            throw Error("Attempted to call " + String(name) + "() from the server but " + String(name) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
        }, target.$$id + "#" + name, target.$$async), Object.defineProperty(clientReference, "name", {
            value: name
        }), clientReference = target[name] = new Proxy(clientReference, deepProxyHandlers));
        return clientReference;
    }
    function resolveClientReferenceMetadata(config, clientReference) {
        var modulePath = clientReference.$$id, name = "", resolvedModuleData = config[modulePath];
        if (resolvedModuleData) name = resolvedModuleData.name;
        else {
            var idx = modulePath.lastIndexOf("#");
            -1 !== idx && (name = modulePath.slice(idx + 1), resolvedModuleData = config[modulePath.slice(0, idx)]);
            if (!resolvedModuleData) throw Error('Could not find the module "' + modulePath + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
        }
        if (!0 === resolvedModuleData.async && !0 === clientReference.$$async) throw Error('The module "' + modulePath + '" is marked as an async ESM module but was loaded as a CJS proxy. This is probably a bug in the React Server Components bundler.');
        return !0 === resolvedModuleData.async || !0 === clientReference.$$async ? [
            resolvedModuleData.id,
            resolvedModuleData.chunks,
            name,
            1
        ] : [
            resolvedModuleData.id,
            resolvedModuleData.chunks,
            name
        ];
    }
    function preload(href, as, options) {
        if ("string" === typeof href) {
            var request = resolveRequest();
            if (request) {
                var hints = request.hints, key = "L";
                if ("image" === as && options) {
                    var imageSrcSet = options.imageSrcSet, imageSizes = options.imageSizes, uniquePart = "";
                    "string" === typeof imageSrcSet && "" !== imageSrcSet ? (uniquePart += "[" + imageSrcSet + "]", "string" === typeof imageSizes && (uniquePart += "[" + imageSizes + "]")) : uniquePart += "[][]" + href;
                    key += "[image]" + uniquePart;
                } else key += "[" + as + "]" + href;
                hints.has(key) || (hints.add(key), (options = trimOptions(options)) ? emitHint(request, "L", [
                    href,
                    as,
                    options
                ]) : emitHint(request, "L", [
                    href,
                    as
                ]));
            } else previousDispatcher.L(href, as, options);
        }
    }
    function preloadModule$1(href, options) {
        if ("string" === typeof href) {
            var request = resolveRequest();
            if (request) {
                var hints = request.hints, key = "m|" + href;
                if (hints.has(key)) return;
                hints.add(key);
                return (options = trimOptions(options)) ? emitHint(request, "m", [
                    href,
                    options
                ]) : emitHint(request, "m", href);
            }
            previousDispatcher.m(href, options);
        }
    }
    function trimOptions(options) {
        if (null == options) return null;
        var hasProperties = !1, trimmed = {}, key;
        for(key in options)null != options[key] && (hasProperties = !0, trimmed[key] = options[key]);
        return hasProperties ? trimmed : null;
    }
    function getChildFormatContext(parentContext, type, props) {
        switch(type){
            case "img":
                type = props.src;
                var srcSet = props.srcSet;
                if (!("lazy" === props.loading || !type && !srcSet || "string" !== typeof type && null != type || "string" !== typeof srcSet && null != srcSet || "low" === props.fetchPriority || parentContext & 3) && ("string" !== typeof type || ":" !== type[4] || "d" !== type[0] && "D" !== type[0] || "a" !== type[1] && "A" !== type[1] || "t" !== type[2] && "T" !== type[2] || "a" !== type[3] && "A" !== type[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
                    var sizes = "string" === typeof props.sizes ? props.sizes : void 0;
                    var input = props.crossOrigin;
                    preload(type || "", "image", {
                        imageSrcSet: srcSet,
                        imageSizes: sizes,
                        crossOrigin: "string" === typeof input ? "use-credentials" === input ? input : "" : void 0,
                        integrity: props.integrity,
                        type: props.type,
                        fetchPriority: props.fetchPriority,
                        referrerPolicy: props.referrerPolicy
                    });
                }
                return parentContext;
            case "link":
                type = props.rel;
                srcSet = props.href;
                if (!(parentContext & 1 || null != props.itemProp || "string" !== typeof type || "string" !== typeof srcSet || "" === srcSet)) switch(type){
                    case "preload":
                        preload(srcSet, props.as, {
                            crossOrigin: props.crossOrigin,
                            integrity: props.integrity,
                            nonce: props.nonce,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.referrerPolicy,
                            imageSrcSet: props.imageSrcSet,
                            imageSizes: props.imageSizes,
                            media: props.media
                        });
                        break;
                    case "modulepreload":
                        preloadModule$1(srcSet, {
                            as: props.as,
                            crossOrigin: props.crossOrigin,
                            integrity: props.integrity,
                            nonce: props.nonce
                        });
                        break;
                    case "stylesheet":
                        preload(srcSet, "style", {
                            crossOrigin: props.crossOrigin,
                            integrity: props.integrity,
                            nonce: props.nonce,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.referrerPolicy,
                            media: props.media
                        });
                }
                return parentContext;
            case "picture":
                return parentContext | 2;
            case "noscript":
                return parentContext | 1;
            default:
                return parentContext;
        }
    }
    function collectStackTracePrivate(error, structuredStackTrace) {
        error = [];
        for(var i = framesToSkip; i < structuredStackTrace.length; i++){
            var callSite = structuredStackTrace[i], name = callSite.getFunctionName() || "<anonymous>";
            if (name.includes("react_stack_bottom_frame")) break;
            else if (callSite.isNative()) callSite = callSite.isAsync(), error.push([
                name,
                "",
                0,
                0,
                0,
                0,
                callSite
            ]);
            else {
                if (callSite.isConstructor()) name = "new " + name;
                else if (!callSite.isToplevel()) {
                    var callSite$jscomp$0 = callSite;
                    name = callSite$jscomp$0.getTypeName();
                    var methodName = callSite$jscomp$0.getMethodName();
                    callSite$jscomp$0 = callSite$jscomp$0.getFunctionName();
                    var result = "";
                    callSite$jscomp$0 ? (name && identifierRegExp.test(callSite$jscomp$0) && callSite$jscomp$0 !== name && (result += name + "."), result += callSite$jscomp$0, !methodName || callSite$jscomp$0 === methodName || callSite$jscomp$0.endsWith("." + methodName) || callSite$jscomp$0.endsWith(" " + methodName) || (result += " [as " + methodName + "]")) : (name && (result += name + "."), result = methodName ? result + methodName : result + "<anonymous>");
                    name = result;
                }
                "<anonymous>" === name && (name = "");
                methodName = callSite.getScriptNameOrSourceURL() || "<anonymous>";
                "<anonymous>" === methodName && (methodName = "", callSite.isEval() && (callSite$jscomp$0 = callSite.getEvalOrigin()) && (methodName = callSite$jscomp$0.toString() + ", <anonymous>"));
                callSite$jscomp$0 = callSite.getLineNumber() || 0;
                result = callSite.getColumnNumber() || 0;
                var enclosingLine = "function" === typeof callSite.getEnclosingLineNumber ? callSite.getEnclosingLineNumber() || 0 : 0, enclosingCol = "function" === typeof callSite.getEnclosingColumnNumber ? callSite.getEnclosingColumnNumber() || 0 : 0;
                callSite = callSite.isAsync();
                error.push([
                    name,
                    methodName,
                    callSite$jscomp$0,
                    result,
                    enclosingLine,
                    enclosingCol,
                    callSite
                ]);
            }
        }
        collectedStackTrace = error;
        return "";
    }
    function collectStackTrace(error, structuredStackTrace) {
        collectStackTracePrivate(error, structuredStackTrace);
        error = (error.name || "Error") + ": " + (error.message || "");
        for(var i = 0; i < structuredStackTrace.length; i++)error += "\n    at " + structuredStackTrace[i].toString();
        return error;
    }
    function parseStackTrace(error, skipFrames) {
        var existing = stackTraceCache.get(error);
        if (void 0 !== existing) return existing;
        collectedStackTrace = null;
        framesToSkip = skipFrames;
        existing = Error.prepareStackTrace;
        Error.prepareStackTrace = collectStackTrace;
        try {
            var stack = String(error.stack);
        } finally{
            Error.prepareStackTrace = existing;
        }
        if (null !== collectedStackTrace) return stack = collectedStackTrace, collectedStackTrace = null, stackTraceCache.set(error, stack), stack;
        stack.startsWith("Error: react-stack-top-frame\n") && (stack = stack.slice(29));
        existing = stack.indexOf("react_stack_bottom_frame");
        -1 !== existing && (existing = stack.lastIndexOf("\n", existing));
        -1 !== existing && (stack = stack.slice(0, existing));
        stack = stack.split("\n");
        for(existing = []; skipFrames < stack.length; skipFrames++){
            var parsed = frameRegExp.exec(stack[skipFrames]);
            if (parsed) {
                var name = parsed[1] || "", isAsync = "async " === parsed[8];
                "<anonymous>" === name ? name = "" : name.startsWith("async ") && (name = name.slice(5), isAsync = !0);
                var filename = parsed[2] || parsed[5] || "";
                "<anonymous>" === filename && (filename = "");
                existing.push([
                    name,
                    filename,
                    +(parsed[3] || parsed[6]),
                    +(parsed[4] || parsed[7]),
                    0,
                    0,
                    isAsync
                ]);
            }
        }
        stackTraceCache.set(error, existing);
        return existing;
    }
    function createTemporaryReference(temporaryReferences, id) {
        var reference = Object.defineProperties(function() {
            throw Error("Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
        }, {
            $$typeof: {
                value: TEMPORARY_REFERENCE_TAG
            }
        });
        reference = new Proxy(reference, proxyHandlers);
        temporaryReferences.set(reference, id);
        return reference;
    }
    function noop() {}
    function trackUsedThenable(thenableState, thenable, index) {
        index = thenableState[index];
        void 0 === index ? (thenableState.push(thenable), (thenableState._stacks || (thenableState._stacks = [])).push(Error())) : index !== thenable && (thenable.then(noop, noop), thenable = index);
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                "string" === typeof thenable.status ? thenable.then(noop, noop) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
                    if ("pending" === thenable.status) {
                        var fulfilledThenable = thenable;
                        fulfilledThenable.status = "fulfilled";
                        fulfilledThenable.value = fulfilledValue;
                    }
                }, function(error) {
                    if ("pending" === thenable.status) {
                        var rejectedThenable = thenable;
                        rejectedThenable.status = "rejected";
                        rejectedThenable.reason = error;
                    }
                }));
                switch(thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
                suspendedThenable = thenable;
                throw SuspenseException;
        }
    }
    function getSuspendedThenable() {
        if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        var thenable = suspendedThenable;
        suspendedThenable = null;
        return thenable;
    }
    function getThenableStateAfterSuspending() {
        var state = thenableState || [];
        state._componentDebugInfo = currentComponentDebugInfo;
        thenableState = currentComponentDebugInfo = null;
        return state;
    }
    function unsupportedHook() {
        throw Error("This Hook is not supported in Server Components.");
    }
    function unsupportedRefresh() {
        throw Error("Refreshing the cache is not supported in Server Components.");
    }
    function unsupportedContext() {
        throw Error("Cannot read a Client Context from a Server Component.");
    }
    function resolveOwner() {
        if (currentOwner) return currentOwner;
        if (supportsComponentStorage) {
            var owner = componentStorage.getStore();
            if (owner) return owner;
        }
        return null;
    }
    function prepareStackTrace(error, structuredStackTrace) {
        error = (error.name || "Error") + ": " + (error.message || "");
        for(var i = 0; i < structuredStackTrace.length; i++)error += "\n    at " + structuredStackTrace[i].toString();
        return error;
    }
    function resetOwnerStackLimit() {
        var now = getCurrentTime();
        1e3 < now - lastResetTime && (ReactSharedInternalsServer.recentlyCreatedOwnerStacks = 0, lastResetTime = now);
    }
    function isObjectPrototype(object) {
        if (!object) return !1;
        var ObjectPrototype = Object.prototype;
        if (object === ObjectPrototype) return !0;
        if (getPrototypeOf(object)) return !1;
        object = Object.getOwnPropertyNames(object);
        for(var i = 0; i < object.length; i++)if (!(object[i] in ObjectPrototype)) return !1;
        return !0;
    }
    function isGetter(object, name) {
        if (object === Object.prototype || null === object) return !1;
        var descriptor = Object.getOwnPropertyDescriptor(object, name);
        return void 0 === descriptor ? isGetter(getPrototypeOf(object), name) : "function" === typeof descriptor.get;
    }
    function isSimpleObject(object) {
        if (!isObjectPrototype(getPrototypeOf(object))) return !1;
        for(var names = Object.getOwnPropertyNames(object), i = 0; i < names.length; i++){
            var descriptor = Object.getOwnPropertyDescriptor(object, names[i]);
            if (!descriptor || !descriptor.enumerable && ("key" !== names[i] && "ref" !== names[i] || "function" !== typeof descriptor.get)) return !1;
        }
        return !0;
    }
    function objectName(object) {
        object = Object.prototype.toString.call(object);
        return object.slice(8, object.length - 1);
    }
    function describeKeyForErrorMessage(key) {
        var encodedKey = JSON.stringify(key);
        return '"' + key + '"' === encodedKey ? key : encodedKey;
    }
    function describeValueForErrorMessage(value) {
        switch(typeof value){
            case "string":
                return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
            case "object":
                if (isArrayImpl(value)) return "[...]";
                if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
                value = objectName(value);
                return "Object" === value ? "{...}" : value;
            case "function":
                return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
            default:
                return String(value);
        }
    }
    function describeElementType(type) {
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeElementType(type.render);
            case REACT_MEMO_TYPE:
                return describeElementType(type.type);
            case REACT_LAZY_TYPE:
                var payload = type._payload;
                type = type._init;
                try {
                    return describeElementType(type(payload));
                } catch (x) {}
        }
        return "";
    }
    function describeObjectForErrorMessage(objectOrArray, expandedName) {
        var objKind = objectName(objectOrArray);
        if ("Object" !== objKind && "Array" !== objKind) return objKind;
        var start = -1, length = 0;
        if (isArrayImpl(objectOrArray)) if (jsxChildrenParents.has(objectOrArray)) {
            var type = jsxChildrenParents.get(objectOrArray);
            objKind = "<" + describeElementType(type) + ">";
            for(var i = 0; i < objectOrArray.length; i++){
                var value = objectOrArray[i];
                value = "string" === typeof value ? value : "object" === typeof value && null !== value ? "{" + describeObjectForErrorMessage(value) + "}" : "{" + describeValueForErrorMessage(value) + "}";
                "" + i === expandedName ? (start = objKind.length, length = value.length, objKind += value) : objKind = 15 > value.length && 40 > objKind.length + value.length ? objKind + value : objKind + "{...}";
            }
            objKind += "</" + describeElementType(type) + ">";
        } else {
            objKind = "[";
            for(type = 0; type < objectOrArray.length; type++)0 < type && (objKind += ", "), i = objectOrArray[type], i = "object" === typeof i && null !== i ? describeObjectForErrorMessage(i) : describeValueForErrorMessage(i), "" + type === expandedName ? (start = objKind.length, length = i.length, objKind += i) : objKind = 10 > i.length && 40 > objKind.length + i.length ? objKind + i : objKind + "...";
            objKind += "]";
        }
        else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) objKind = "<" + describeElementType(objectOrArray.type) + "/>";
        else {
            if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
            if (jsxPropsParents.has(objectOrArray)) {
                objKind = jsxPropsParents.get(objectOrArray);
                objKind = "<" + (describeElementType(objKind) || "...");
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++){
                    objKind += " ";
                    value = type[i];
                    objKind += describeKeyForErrorMessage(value) + "=";
                    var _value2 = objectOrArray[value];
                    var _substr2 = value === expandedName && "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2);
                    "string" !== typeof _value2 && (_substr2 = "{" + _substr2 + "}");
                    value === expandedName ? (start = objKind.length, length = _substr2.length, objKind += _substr2) : objKind = 10 > _substr2.length && 40 > objKind.length + _substr2.length ? objKind + _substr2 : objKind + "...";
                }
                objKind += ">";
            } else {
                objKind = "{";
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++)0 < i && (objKind += ", "), value = type[i], objKind += describeKeyForErrorMessage(value) + ": ", _value2 = objectOrArray[value], _value2 = "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2), value === expandedName ? (start = objKind.length, length = _value2.length, objKind += _value2) : objKind = 10 > _value2.length && 40 > objKind.length + _value2.length ? objKind + _value2 : objKind + "...";
                objKind += "}";
            }
        }
        return void 0 === expandedName ? objKind : -1 < start && 0 < length ? (objectOrArray = " ".repeat(start) + "^".repeat(length), "\n  " + objKind + "\n  " + objectOrArray) : "\n  " + objKind;
    }
    function defaultFilterStackFrame(filename) {
        return "" !== filename && !filename.startsWith("node:") && !filename.includes("node_modules");
    }
    function filterStackTrace(request, stack) {
        request = request.filterStackFrame;
        for(var filteredStack = [], i = 0; i < stack.length; i++){
            var callsite = stack[i], functionName = callsite[0];
            var url = callsite[1];
            if (url.startsWith("about://React/")) {
                var envIdx = url.indexOf("/", 14), suffixIdx = url.lastIndexOf("?");
                -1 < envIdx && -1 < suffixIdx && (url = decodeURI(url.slice(envIdx + 1, suffixIdx)));
            }
            request(url, functionName, callsite[2], callsite[3]) && (callsite = callsite.slice(0), callsite[1] = url, filteredStack.push(callsite));
        }
        return filteredStack;
    }
    function patchConsole(consoleInst, methodName) {
        var descriptor = Object.getOwnPropertyDescriptor(consoleInst, methodName);
        if (descriptor && (descriptor.configurable || descriptor.writable) && "function" === typeof descriptor.value) {
            var originalMethod = descriptor.value;
            descriptor = Object.getOwnPropertyDescriptor(originalMethod, "name");
            var wrapperMethod = function() {
                var request = resolveRequest();
                if (("assert" !== methodName || !arguments[0]) && null !== request) {
                    a: {
                        var error = Error("react-stack-top-frame");
                        collectedStackTrace = null;
                        framesToSkip = 1;
                        var previousPrepare = Error.prepareStackTrace;
                        Error.prepareStackTrace = collectStackTracePrivate;
                        try {
                            if ("" !== error.stack) {
                                var JSCompiler_inline_result = null;
                                break a;
                            }
                        } finally{
                            Error.prepareStackTrace = previousPrepare;
                        }
                        JSCompiler_inline_result = collectedStackTrace;
                    }
                    JSCompiler_inline_result = filterStackTrace(request, JSCompiler_inline_result || []);
                    request.pendingDebugChunks++;
                    error = resolveOwner();
                    previousPrepare = Array.from(arguments);
                    a: {
                        var env = 0;
                        switch(methodName){
                            case "dir":
                            case "dirxml":
                            case "groupEnd":
                            case "table":
                                env = null;
                                break a;
                            case "assert":
                                env = 1;
                        }
                        var format = previousPrepare[env], style = previousPrepare[env + 1], badge = previousPrepare[env + 2];
                        "string" === typeof format && format.startsWith("\u001b[0m\u001b[7m%c%s\u001b[0m%c") && "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px" === style && "string" === typeof badge ? (format = format.slice(18), " " === format[0] && (format = format.slice(1)), previousPrepare.splice(env, 4, format), env = badge.slice(1, badge.length - 1)) : env = null;
                    }
                    null === env && (env = (0, request.environmentName)());
                    null != error && outlineComponentInfo(request, error);
                    badge = [
                        methodName,
                        JSCompiler_inline_result,
                        error,
                        env
                    ];
                    badge.push.apply(badge, previousPrepare);
                    previousPrepare = serializeDebugModel(request, (null === request.deferredDebugObjects ? 500 : 10) + JSCompiler_inline_result.length, badge);
                    "[" !== previousPrepare[0] && (previousPrepare = serializeDebugModel(request, 10 + JSCompiler_inline_result.length, [
                        methodName,
                        JSCompiler_inline_result,
                        error,
                        env,
                        "Unknown Value: React could not send it from the server."
                    ]));
                    JSCompiler_inline_result = stringToChunk(":W" + previousPrepare + "\n");
                    request.completedDebugChunks.push(JSCompiler_inline_result);
                }
                return originalMethod.apply(this, arguments);
            };
            descriptor && Object.defineProperty(wrapperMethod, "name", descriptor);
            Object.defineProperty(consoleInst, methodName, {
                value: wrapperMethod
            });
        }
    }
    function getCurrentStackInDEV() {
        var owner = resolveOwner();
        if (null === owner) return "";
        try {
            var info = "";
            if (owner.owner || "string" !== typeof owner.name) {
                for(; owner;){
                    var ownerStack = owner.debugStack;
                    if (null != ownerStack) {
                        if (owner = owner.owner) {
                            var JSCompiler_temp_const = info;
                            var error = ownerStack, prevPrepareStackTrace = Error.prepareStackTrace;
                            Error.prepareStackTrace = prepareStackTrace;
                            var stack = error.stack;
                            Error.prepareStackTrace = prevPrepareStackTrace;
                            stack.startsWith("Error: react-stack-top-frame\n") && (stack = stack.slice(29));
                            var idx = stack.indexOf("\n");
                            -1 !== idx && (stack = stack.slice(idx + 1));
                            idx = stack.indexOf("react_stack_bottom_frame");
                            -1 !== idx && (idx = stack.lastIndexOf("\n", idx));
                            var JSCompiler_inline_result = -1 !== idx ? stack = stack.slice(0, idx) : "";
                            info = JSCompiler_temp_const + ("\n" + JSCompiler_inline_result);
                        }
                    } else break;
                }
                var JSCompiler_inline_result$jscomp$0 = info;
            } else {
                JSCompiler_temp_const = owner.name;
                if (void 0 === prefix) try {
                    throw Error();
                } catch (x) {
                    prefix = (error = x.stack.trim().match(/\n( *(at )?)/)) && error[1] || "", suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
                }
                JSCompiler_inline_result$jscomp$0 = "\n" + prefix + JSCompiler_temp_const + suffix;
            }
        } catch (x) {
            JSCompiler_inline_result$jscomp$0 = "\nError generating stack: " + x.message + "\n" + x.stack;
        }
        return JSCompiler_inline_result$jscomp$0;
    }
    function defaultErrorHandler(error) {
        console.error(error);
    }
    function RequestInstance(type, model, bundlerConfig, onError, onAllReady, onFatalError, identifierPrefix, temporaryReferences, debugStartTime, environmentName, filterStackFrame, keepDebugAlive) {
        if (null !== ReactSharedInternalsServer.A && ReactSharedInternalsServer.A !== DefaultAsyncDispatcher) throw Error("Currently React only supports one RSC renderer at a time.");
        ReactSharedInternalsServer.A = DefaultAsyncDispatcher;
        ReactSharedInternalsServer.getCurrentStack = getCurrentStackInDEV;
        var abortSet = new Set(), pingedTasks = [], hints = new Set();
        this.type = type;
        this.status = OPENING;
        this.flushScheduled = !1;
        this.destination = this.fatalError = null;
        this.bundlerConfig = bundlerConfig;
        this.cache = new Map();
        this.cacheController = new AbortController();
        this.pendingChunks = this.nextChunkId = 0;
        this.hints = hints;
        this.abortableTasks = abortSet;
        this.pingedTasks = pingedTasks;
        this.completedImportChunks = [];
        this.completedHintChunks = [];
        this.completedRegularChunks = [];
        this.completedErrorChunks = [];
        this.writtenSymbols = new Map();
        this.writtenClientReferences = new Map();
        this.writtenServerReferences = new Map();
        this.writtenObjects = new WeakMap();
        this.temporaryReferences = temporaryReferences;
        this.identifierPrefix = identifierPrefix || "";
        this.identifierCount = 1;
        this.taintCleanupQueue = [];
        this.onError = void 0 === onError ? defaultErrorHandler : onError;
        this.onAllReady = onAllReady;
        this.onFatalError = onFatalError;
        this.pendingDebugChunks = 0;
        this.completedDebugChunks = [];
        this.debugDestination = null;
        this.environmentName = void 0 === environmentName ? function() {
            return "Server";
        } : "function" !== typeof environmentName ? function() {
            return environmentName;
        } : environmentName;
        this.filterStackFrame = void 0 === filterStackFrame ? defaultFilterStackFrame : filterStackFrame;
        this.didWarnForKey = null;
        this.writtenDebugObjects = new WeakMap();
        this.deferredDebugObjects = keepDebugAlive ? {
            retained: new Map(),
            existing: new Map()
        } : null;
        type = "number" === typeof debugStartTime ? this.timeOrigin = debugStartTime - performance.timeOrigin : this.timeOrigin = performance.now();
        emitTimeOriginChunk(this, type + performance.timeOrigin);
        this.abortTime = -0;
        model = createTask(this, model, null, !1, 0, abortSet, type, null, null, null);
        pingedTasks.push(model);
    }
    function createRequest(model, bundlerConfig, onError, identifierPrefix, temporaryReferences, debugStartTime, environmentName, filterStackFrame, keepDebugAlive) {
        resetOwnerStackLimit();
        return new RequestInstance(20, model, bundlerConfig, onError, noop, noop, identifierPrefix, temporaryReferences, debugStartTime, environmentName, filterStackFrame, keepDebugAlive);
    }
    function createPrerenderRequest(model, bundlerConfig, onAllReady, onFatalError, onError, identifierPrefix, temporaryReferences, debugStartTime, environmentName, filterStackFrame, keepDebugAlive) {
        resetOwnerStackLimit();
        return new RequestInstance(PRERENDER, model, bundlerConfig, onError, onAllReady, onFatalError, identifierPrefix, temporaryReferences, debugStartTime, environmentName, filterStackFrame, keepDebugAlive);
    }
    function resolveRequest() {
        if (currentRequest) return currentRequest;
        if (supportsRequestStorage) {
            var store = requestStorage.getStore();
            if (store) return store;
        }
        return null;
    }
    function serializeDebugThenable(request, counter, thenable) {
        request.pendingDebugChunks++;
        var id = request.nextChunkId++, ref = "$@" + id.toString(16);
        request.writtenDebugObjects.set(thenable, ref);
        switch(thenable.status){
            case "fulfilled":
                return emitOutlinedDebugModelChunk(request, id, counter, thenable.value), ref;
            case "rejected":
                return emitErrorChunk(request, id, "", thenable.reason, !0, null), ref;
        }
        if (request.status === ABORTING) return emitDebugHaltChunk(request, id), ref;
        var deferredDebugObjects = request.deferredDebugObjects;
        if (null !== deferredDebugObjects) return deferredDebugObjects.retained.set(id, thenable), ref = "$Y@" + id.toString(16), request.writtenDebugObjects.set(thenable, ref), ref;
        var cancelled = !1;
        thenable.then(function(value) {
            cancelled || (cancelled = !0, request.status === ABORTING ? emitDebugHaltChunk(request, id) : isArrayImpl(value) && 200 < value.length || (value instanceof ArrayBuffer || value instanceof Int8Array || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int16Array || value instanceof Uint16Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Float32Array || value instanceof Float64Array || value instanceof BigInt64Array || value instanceof BigUint64Array || value instanceof DataView) && 1e3 < value.byteLength ? emitDebugHaltChunk(request, id) : emitOutlinedDebugModelChunk(request, id, counter, value), enqueueFlush(request));
        }, function(reason) {
            cancelled || (cancelled = !0, request.status === ABORTING ? emitDebugHaltChunk(request, id) : emitErrorChunk(request, id, "", reason, !0, null), enqueueFlush(request));
        });
        Promise.resolve().then(function() {
            cancelled || (cancelled = !0, emitDebugHaltChunk(request, id), enqueueFlush(request), counter = request = null);
        });
        return ref;
    }
    function emitRequestedDebugThenable(request, id, counter, thenable) {
        thenable.then(function(value) {
            request.status === ABORTING ? emitDebugHaltChunk(request, id) : emitOutlinedDebugModelChunk(request, id, counter, value);
            enqueueFlush(request);
        }, function(reason) {
            request.status === ABORTING ? emitDebugHaltChunk(request, id) : emitErrorChunk(request, id, "", reason, !0, null);
            enqueueFlush(request);
        });
    }
    function serializeThenable(request, task, thenable) {
        var newTask = createTask(request, thenable, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks, task.time, task.debugOwner, task.debugStack, task.debugTask);
        switch(thenable.status){
            case "fulfilled":
                return forwardDebugInfoFromThenable(request, newTask, thenable, null, null), newTask.model = thenable.value, pingTask(request, newTask), newTask.id;
            case "rejected":
                return forwardDebugInfoFromThenable(request, newTask, thenable, null, null), erroredTask(request, newTask, thenable.reason), newTask.id;
            default:
                if (request.status === ABORTING) return request.abortableTasks.delete(newTask), request.type === PRERENDER ? (haltTask(newTask), finishHaltedTask(newTask, request)) : (task = request.fatalError, abortTask(newTask), finishAbortedTask(newTask, request, task)), newTask.id;
                "string" !== typeof thenable.status && (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }));
        }
        thenable.then(function(value) {
            forwardDebugInfoFromCurrentContext(request, newTask, thenable);
            newTask.model = value;
            pingTask(request, newTask);
        }, function(reason) {
            newTask.status === PENDING$1 && (newTask.timed = !0, erroredTask(request, newTask, reason), enqueueFlush(request));
        });
        return newTask.id;
    }
    function serializeReadableStream(request, task, stream) {
        function progress(entry) {
            if (streamTask.status === PENDING$1) if (entry.done) streamTask.status = COMPLETED, entry = streamTask.id.toString(16) + ":C\n", request.completedRegularChunks.push(stringToChunk(entry)), request.abortableTasks.delete(streamTask), request.cacheController.signal.removeEventListener("abort", abortStream), enqueueFlush(request), callOnAllReadyIfReady(request);
            else try {
                request.pendingChunks++, streamTask.model = entry.value, isByteStream ? emitTypedArrayChunk(request, streamTask.id, "b", streamTask.model, !1) : tryStreamTask(request, streamTask), enqueueFlush(request), reader.read().then(progress, error);
            } catch (x$0) {
                error(x$0);
            }
        }
        function error(reason) {
            streamTask.status === PENDING$1 && (request.cacheController.signal.removeEventListener("abort", abortStream), erroredTask(request, streamTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
        }
        function abortStream() {
            if (streamTask.status === PENDING$1) {
                var signal = request.cacheController.signal;
                signal.removeEventListener("abort", abortStream);
                signal = signal.reason;
                request.type === PRERENDER ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal), enqueueFlush(request));
                reader.cancel(signal).then(error, error);
            }
        }
        var supportsBYOB = stream.supportsBYOB;
        if (void 0 === supportsBYOB) try {
            stream.getReader({
                mode: "byob"
            }).releaseLock(), supportsBYOB = !0;
        } catch (x) {
            supportsBYOB = !1;
        }
        var isByteStream = supportsBYOB, reader = stream.getReader(), streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks, task.time, task.debugOwner, task.debugStack, task.debugTask);
        request.pendingChunks++;
        task = streamTask.id.toString(16) + ":" + (isByteStream ? "r" : "R") + "\n";
        request.completedRegularChunks.push(stringToChunk(task));
        request.cacheController.signal.addEventListener("abort", abortStream);
        reader.read().then(progress, error);
        return serializeByValueID(streamTask.id);
    }
    function serializeAsyncIterable(request, task, iterable, iterator) {
        function progress(entry) {
            if (streamTask.status === PENDING$1) if (entry.done) {
                streamTask.status = COMPLETED;
                if (void 0 === entry.value) var endStreamRow = streamTask.id.toString(16) + ":C\n";
                else try {
                    var chunkId = outlineModel(request, entry.value);
                    endStreamRow = streamTask.id.toString(16) + ":C" + stringify(serializeByValueID(chunkId)) + "\n";
                } catch (x) {
                    error(x);
                    return;
                }
                request.completedRegularChunks.push(stringToChunk(endStreamRow));
                request.abortableTasks.delete(streamTask);
                request.cacheController.signal.removeEventListener("abort", abortIterable);
                enqueueFlush(request);
                callOnAllReadyIfReady(request);
            } else try {
                streamTask.model = entry.value, request.pendingChunks++, tryStreamTask(request, streamTask), enqueueFlush(request), callIteratorInDEV(iterator, progress, error);
            } catch (x$1) {
                error(x$1);
            }
        }
        function error(reason) {
            streamTask.status === PENDING$1 && (request.cacheController.signal.removeEventListener("abort", abortIterable), erroredTask(request, streamTask, reason), enqueueFlush(request), "function" === typeof iterator.throw && iterator.throw(reason).then(error, error));
        }
        function abortIterable() {
            if (streamTask.status === PENDING$1) {
                var signal = request.cacheController.signal;
                signal.removeEventListener("abort", abortIterable);
                var reason = signal.reason;
                request.type === PRERENDER ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal.reason), enqueueFlush(request));
                "function" === typeof iterator.throw && iterator.throw(reason).then(error, error);
            }
        }
        var isIterator = iterable === iterator, streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks, task.time, task.debugOwner, task.debugStack, task.debugTask);
        (task = iterable._debugInfo) && forwardDebugInfo(request, streamTask, task);
        request.pendingChunks++;
        isIterator = streamTask.id.toString(16) + ":" + (isIterator ? "x" : "X") + "\n";
        request.completedRegularChunks.push(stringToChunk(isIterator));
        request.cacheController.signal.addEventListener("abort", abortIterable);
        callIteratorInDEV(iterator, progress, error);
        return serializeByValueID(streamTask.id);
    }
    function emitHint(request, code, model) {
        model = stringify(model);
        code = stringToChunk(":H" + code + model + "\n");
        request.completedHintChunks.push(code);
        enqueueFlush(request);
    }
    function readThenable(thenable) {
        if ("fulfilled" === thenable.status) return thenable.value;
        if ("rejected" === thenable.status) throw thenable.reason;
        throw thenable;
    }
    function createLazyWrapperAroundWakeable(request, task, wakeable) {
        switch(wakeable.status){
            case "fulfilled":
                return forwardDebugInfoFromThenable(request, task, wakeable, null, null), wakeable.value;
            case "rejected":
                forwardDebugInfoFromThenable(request, task, wakeable, null, null);
                break;
            default:
                "string" !== typeof wakeable.status && (wakeable.status = "pending", wakeable.then(function(fulfilledValue) {
                    forwardDebugInfoFromCurrentContext(request, task, wakeable);
                    "pending" === wakeable.status && (wakeable.status = "fulfilled", wakeable.value = fulfilledValue);
                }, function(error) {
                    forwardDebugInfoFromCurrentContext(request, task, wakeable);
                    "pending" === wakeable.status && (wakeable.status = "rejected", wakeable.reason = error);
                }));
        }
        return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: wakeable,
            _init: readThenable
        };
    }
    function callWithDebugContextInDEV(request, task, callback, arg) {
        var componentDebugInfo = {
            name: "",
            env: task.environmentName,
            key: null,
            owner: task.debugOwner
        };
        componentDebugInfo.stack = null === task.debugStack ? null : filterStackTrace(request, parseStackTrace(task.debugStack, 1));
        componentDebugInfo.debugStack = task.debugStack;
        request = componentDebugInfo.debugTask = task.debugTask;
        currentOwner = componentDebugInfo;
        try {
            return request ? request.run(callback.bind(null, arg)) : callback(arg);
        } finally{
            currentOwner = null;
        }
    }
    function processServerComponentReturnValue(request, task, Component, result) {
        if ("object" !== typeof result || null === result || isClientReference(result)) return result;
        if ("function" === typeof result.then) return result.then(function(resolvedValue) {
            "object" === typeof resolvedValue && null !== resolvedValue && resolvedValue.$$typeof === REACT_ELEMENT_TYPE && (resolvedValue._store.validated = 1);
        }, voidHandler), createLazyWrapperAroundWakeable(request, task, result);
        result.$$typeof === REACT_ELEMENT_TYPE && (result._store.validated = 1);
        var iteratorFn = getIteratorFn(result);
        if (iteratorFn) {
            var multiShot = _defineProperty({}, Symbol.iterator, function() {
                var iterator = iteratorFn.call(result);
                iterator !== result || "[object GeneratorFunction]" === Object.prototype.toString.call(Component) && "[object Generator]" === Object.prototype.toString.call(result) || callWithDebugContextInDEV(request, task, function() {
                    console.error("Returning an Iterator from a Server Component is not supported since it cannot be looped over more than once. ");
                });
                return iterator;
            });
            multiShot._debugInfo = result._debugInfo;
            return multiShot;
        }
        return "function" !== typeof result[ASYNC_ITERATOR] || "function" === typeof ReadableStream && result instanceof ReadableStream ? result : (multiShot = _defineProperty({}, ASYNC_ITERATOR, function() {
            var iterator = result[ASYNC_ITERATOR]();
            iterator !== result || "[object AsyncGeneratorFunction]" === Object.prototype.toString.call(Component) && "[object AsyncGenerator]" === Object.prototype.toString.call(result) || callWithDebugContextInDEV(request, task, function() {
                console.error("Returning an AsyncIterator from a Server Component is not supported since it cannot be looped over more than once. ");
            });
            return iterator;
        }), multiShot._debugInfo = result._debugInfo, multiShot);
    }
    function renderFunctionComponent(request, task, key, Component, props, validated) {
        var prevThenableState = task.thenableState;
        task.thenableState = null;
        if (canEmitDebugInfo) if (null !== prevThenableState) var componentDebugInfo = prevThenableState._componentDebugInfo;
        else {
            var componentDebugID = task.id;
            componentDebugInfo = Component.displayName || Component.name || "";
            var componentEnv = (0, request.environmentName)();
            request.pendingChunks++;
            componentDebugInfo = {
                name: componentDebugInfo,
                env: componentEnv,
                key: key,
                owner: task.debugOwner
            };
            componentDebugInfo.stack = null === task.debugStack ? null : filterStackTrace(request, parseStackTrace(task.debugStack, 1));
            componentDebugInfo.props = props;
            componentDebugInfo.debugStack = task.debugStack;
            componentDebugInfo.debugTask = task.debugTask;
            outlineComponentInfo(request, componentDebugInfo);
            var timestamp = performance.now();
            timestamp > task.time ? (emitTimingChunk(request, task.id, timestamp), task.time = timestamp) : task.timed || emitTimingChunk(request, task.id, task.time);
            task.timed = !0;
            emitDebugChunk(request, componentDebugID, componentDebugInfo);
            task.environmentName = componentEnv;
            2 === validated && warnForMissingKey(request, key, componentDebugInfo, task.debugTask);
        }
        else return outlineTask(request, task);
        thenableIndexCounter = 0;
        thenableState = prevThenableState;
        currentComponentDebugInfo = componentDebugInfo;
        props = supportsComponentStorage ? task.debugTask ? task.debugTask.run(componentStorage.run.bind(componentStorage, componentDebugInfo, callComponentInDEV, Component, props, componentDebugInfo)) : componentStorage.run(componentDebugInfo, callComponentInDEV, Component, props, componentDebugInfo) : task.debugTask ? task.debugTask.run(callComponentInDEV.bind(null, Component, props, componentDebugInfo)) : callComponentInDEV(Component, props, componentDebugInfo);
        if (request.status === ABORTING) throw "object" !== typeof props || null === props || "function" !== typeof props.then || isClientReference(props) || props.then(voidHandler, voidHandler), null;
        validated = thenableState;
        if (null !== validated) for(prevThenableState = validated._stacks || (validated._stacks = []), componentDebugID = 0; componentDebugID < validated.length; componentDebugID++)forwardDebugInfoFromThenable(request, task, validated[componentDebugID], componentDebugInfo, prevThenableState[componentDebugID]);
        props = processServerComponentReturnValue(request, task, Component, props);
        task.debugOwner = componentDebugInfo;
        task.debugStack = null;
        task.debugTask = null;
        Component = task.keyPath;
        componentDebugInfo = task.implicitSlot;
        null !== key ? task.keyPath = key === REACT_OPTIMISTIC_KEY || Component === REACT_OPTIMISTIC_KEY ? REACT_OPTIMISTIC_KEY : null === Component ? key : Component + "," + key : null === Component && (task.implicitSlot = !0);
        request = renderModelDestructive(request, task, emptyRoot, "", props);
        task.keyPath = Component;
        task.implicitSlot = componentDebugInfo;
        return request;
    }
    function warnForMissingKey(request, key, componentDebugInfo, debugTask) {
        function logKeyError() {
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', "", "");
        }
        key = request.didWarnForKey;
        null == key && (key = request.didWarnForKey = new WeakSet());
        request = componentDebugInfo.owner;
        if (null != request) {
            if (key.has(request)) return;
            key.add(request);
        }
        supportsComponentStorage ? debugTask ? debugTask.run(componentStorage.run.bind(componentStorage, componentDebugInfo, callComponentInDEV, logKeyError, null, componentDebugInfo)) : componentStorage.run(componentDebugInfo, callComponentInDEV, logKeyError, null, componentDebugInfo) : debugTask ? debugTask.run(callComponentInDEV.bind(null, logKeyError, null, componentDebugInfo)) : callComponentInDEV(logKeyError, null, componentDebugInfo);
    }
    function renderFragment(request, task, children) {
        for(var i = 0; i < children.length; i++){
            var child = children[i];
            null === child || "object" !== typeof child || child.$$typeof !== REACT_ELEMENT_TYPE || null !== child.key || child._store.validated || (child._store.validated = 2);
        }
        if (null !== task.keyPath) return request = [
            REACT_ELEMENT_TYPE,
            REACT_FRAGMENT_TYPE,
            task.keyPath,
            {
                children: children
            },
            null,
            null,
            0
        ], task.implicitSlot ? [
            request
        ] : request;
        if (i = children._debugInfo) {
            if (canEmitDebugInfo) forwardDebugInfo(request, task, i);
            else return outlineTask(request, task);
            children = Array.from(children);
        }
        return children;
    }
    function renderAsyncFragment(request, task, children, getAsyncIterator) {
        if (null !== task.keyPath) return request = [
            REACT_ELEMENT_TYPE,
            REACT_FRAGMENT_TYPE,
            task.keyPath,
            {
                children: children
            },
            null,
            null,
            0
        ], task.implicitSlot ? [
            request
        ] : request;
        getAsyncIterator = getAsyncIterator.call(children);
        return serializeAsyncIterable(request, task, children, getAsyncIterator);
    }
    function deferTask(request, task) {
        task = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks, task.time, task.debugOwner, task.debugStack, task.debugTask);
        pingTask(request, task);
        return serializeLazyID(task.id);
    }
    function outlineTask(request, task) {
        task = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks, task.time, task.debugOwner, task.debugStack, task.debugTask);
        retryTask(request, task);
        return task.status === COMPLETED ? serializeByValueID(task.id) : serializeLazyID(task.id);
    }
    function renderElement(request, task, type, key, ref, props, validated) {
        if (null !== ref && void 0 !== ref) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
        jsxPropsParents.set(props, type);
        "object" === typeof props.children && null !== props.children && jsxChildrenParents.set(props.children, type);
        if ("function" !== typeof type || isClientReference(type) || type.$$typeof === TEMPORARY_REFERENCE_TAG) {
            if (type === REACT_FRAGMENT_TYPE && null === key) return 2 === validated && (validated = {
                name: "Fragment",
                env: (0, request.environmentName)(),
                key: key,
                owner: task.debugOwner,
                stack: null === task.debugStack ? null : filterStackTrace(request, parseStackTrace(task.debugStack, 1)),
                props: props,
                debugStack: task.debugStack,
                debugTask: task.debugTask
            }, warnForMissingKey(request, key, validated, task.debugTask)), validated = task.implicitSlot, null === task.keyPath && (task.implicitSlot = !0), request = renderModelDestructive(request, task, emptyRoot, "", props.children), task.implicitSlot = validated, request;
            if (null != type && "object" === typeof type && !isClientReference(type)) switch(type.$$typeof){
                case REACT_LAZY_TYPE:
                    type = callLazyInitInDEV(type);
                    if (request.status === ABORTING) throw null;
                    return renderElement(request, task, type, key, ref, props, validated);
                case REACT_FORWARD_REF_TYPE:
                    return renderFunctionComponent(request, task, key, type.render, props, validated);
                case REACT_MEMO_TYPE:
                    return renderElement(request, task, type.type, key, ref, props, validated);
                case REACT_ELEMENT_TYPE:
                    type._store.validated = 1;
            }
            else if ("string" === typeof type) {
                ref = task.formatContext;
                var newFormatContext = getChildFormatContext(ref, type, props);
                ref !== newFormatContext && null != props.children && outlineModelWithFormatContext(request, props.children, newFormatContext);
            }
        } else return renderFunctionComponent(request, task, key, type, props, validated);
        ref = task.keyPath;
        null === key ? key = ref : null !== ref && (key = ref === REACT_OPTIMISTIC_KEY || key === REACT_OPTIMISTIC_KEY ? REACT_OPTIMISTIC_KEY : ref + "," + key);
        newFormatContext = null;
        ref = task.debugOwner;
        null !== ref && outlineComponentInfo(request, ref);
        if (null !== task.debugStack) {
            newFormatContext = filterStackTrace(request, parseStackTrace(task.debugStack, 1));
            var id = outlineDebugModel(request, {
                objectLimit: 2 * newFormatContext.length + 1
            }, newFormatContext);
            request.writtenObjects.set(newFormatContext, serializeByValueID(id));
        }
        request = [
            REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            ref,
            newFormatContext,
            validated
        ];
        task = task.implicitSlot && null !== key ? [
            request
        ] : request;
        return task;
    }
    function pingTask(request, task) {
        task.timed = !0;
        var pingedTasks = request.pingedTasks;
        pingedTasks.push(task);
        1 === pingedTasks.length && (request.flushScheduled = null !== request.destination, request.type === PRERENDER || request.status === OPENING ? scheduleMicrotask(function() {
            return performWork(request);
        }) : setTimeout(function() {
            return performWork(request);
        }, 0));
    }
    function createTask(request, model, keyPath, implicitSlot, formatContext, abortSet, lastTimestamp, debugOwner, debugStack, debugTask) {
        request.pendingChunks++;
        var id = request.nextChunkId++;
        "object" !== typeof model || null === model || null !== keyPath || implicitSlot || request.writtenObjects.set(model, serializeByValueID(id));
        var task = {
            id: id,
            status: PENDING$1,
            model: model,
            keyPath: keyPath,
            implicitSlot: implicitSlot,
            formatContext: formatContext,
            ping: function() {
                return pingTask(request, task);
            },
            toJSON: function(parentPropertyName, value) {
                var parent = this, originalValue = parent[parentPropertyName];
                "object" !== typeof originalValue || originalValue === value || originalValue instanceof Date || callWithDebugContextInDEV(request, task, function() {
                    "Object" !== objectName(originalValue) ? "string" === typeof jsxChildrenParents.get(parent) ? console.error("%s objects cannot be rendered as text children. Try formatting it using toString().%s", objectName(originalValue), describeObjectForErrorMessage(parent, parentPropertyName)) : console.error("Only plain objects can be passed to Client Components from Server Components. %s objects are not supported.%s", objectName(originalValue), describeObjectForErrorMessage(parent, parentPropertyName)) : console.error("Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.%s", describeObjectForErrorMessage(parent, parentPropertyName));
                });
                return renderModel(request, task, parent, parentPropertyName, value);
            },
            thenableState: null,
            timed: !1
        };
        task.time = lastTimestamp;
        task.environmentName = request.environmentName();
        task.debugOwner = debugOwner;
        task.debugStack = debugStack;
        task.debugTask = debugTask;
        abortSet.add(task);
        return task;
    }
    function serializeByValueID(id) {
        return "$" + id.toString(16);
    }
    function serializeLazyID(id) {
        return "$L" + id.toString(16);
    }
    function serializeDeferredObject(request, value) {
        var deferredDebugObjects = request.deferredDebugObjects;
        return null !== deferredDebugObjects ? (request.pendingDebugChunks++, request = request.nextChunkId++, deferredDebugObjects.existing.set(value, request), deferredDebugObjects.retained.set(request, value), "$Y" + request.toString(16)) : "$Y";
    }
    function serializeNumber(number) {
        return Number.isFinite(number) ? 0 === number && -Infinity === 1 / number ? "$-0" : number : Infinity === number ? "$Infinity" : -Infinity === number ? "$-Infinity" : "$NaN";
    }
    function encodeReferenceChunk(request, id, reference) {
        request = stringify(reference);
        id = id.toString(16) + ":" + request + "\n";
        return stringToChunk(id);
    }
    function serializeClientReference(request, parent, parentPropertyName, clientReference) {
        var clientReferenceKey = clientReference.$$async ? clientReference.$$id + "#async" : clientReference.$$id, writtenClientReferences = request.writtenClientReferences, existingId = writtenClientReferences.get(clientReferenceKey);
        if (void 0 !== existingId) return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(existingId) : serializeByValueID(existingId);
        try {
            var clientReferenceMetadata = resolveClientReferenceMetadata(request.bundlerConfig, clientReference);
            request.pendingChunks++;
            var importId = request.nextChunkId++;
            emitImportChunk(request, importId, clientReferenceMetadata, !1);
            writtenClientReferences.set(clientReferenceKey, importId);
            return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(importId) : serializeByValueID(importId);
        } catch (x) {
            return request.pendingChunks++, parent = request.nextChunkId++, parentPropertyName = logRecoverableError(request, x, null), emitErrorChunk(request, parent, parentPropertyName, x, !1, null), serializeByValueID(parent);
        }
    }
    function serializeDebugClientReference(request, parent, parentPropertyName, clientReference) {
        var existingId = request.writtenClientReferences.get(clientReference.$$async ? clientReference.$$id + "#async" : clientReference.$$id);
        if (void 0 !== existingId) return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(existingId) : serializeByValueID(existingId);
        try {
            var clientReferenceMetadata = resolveClientReferenceMetadata(request.bundlerConfig, clientReference);
            request.pendingDebugChunks++;
            var importId = request.nextChunkId++;
            emitImportChunk(request, importId, clientReferenceMetadata, !0);
            return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(importId) : serializeByValueID(importId);
        } catch (x) {
            return request.pendingDebugChunks++, parent = request.nextChunkId++, parentPropertyName = logRecoverableError(request, x, null), emitErrorChunk(request, parent, parentPropertyName, x, !0, null), serializeByValueID(parent);
        }
    }
    function outlineModel(request, value) {
        return outlineModelWithFormatContext(request, value, 0);
    }
    function outlineModelWithFormatContext(request, value, formatContext) {
        value = createTask(request, value, null, !1, formatContext, request.abortableTasks, performance.now(), null, null, null);
        retryTask(request, value);
        return value.id;
    }
    function serializeServerReference(request, serverReference) {
        var writtenServerReferences = request.writtenServerReferences, existingId = writtenServerReferences.get(serverReference);
        if (void 0 !== existingId) return "$h" + existingId.toString(16);
        existingId = serverReference.$$bound;
        existingId = null === existingId ? null : Promise.resolve(existingId);
        var id = serverReference.$$id, location = null, error = serverReference.$$location;
        error && (error = parseStackTrace(error, 1), 0 < error.length && (location = error[0], location = [
            location[0],
            location[1],
            location[2],
            location[3]
        ]));
        existingId = null !== location ? {
            id: id,
            bound: existingId,
            name: "function" === typeof serverReference ? serverReference.name : "",
            env: (0, request.environmentName)(),
            location: location
        } : {
            id: id,
            bound: existingId
        };
        request = outlineModel(request, existingId);
        writtenServerReferences.set(serverReference, request);
        return "$h" + request.toString(16);
    }
    function serializeLargeTextString(request, text) {
        request.pendingChunks++;
        var textId = request.nextChunkId++;
        emitTextChunk(request, textId, text, !1);
        return serializeByValueID(textId);
    }
    function serializeMap(request, map) {
        map = Array.from(map);
        return "$Q" + outlineModel(request, map).toString(16);
    }
    function serializeFormData(request, formData) {
        formData = Array.from(formData.entries());
        return "$K" + outlineModel(request, formData).toString(16);
    }
    function serializeSet(request, set) {
        set = Array.from(set);
        return "$W" + outlineModel(request, set).toString(16);
    }
    function serializeTypedArray(request, tag, typedArray) {
        request.pendingChunks++;
        var bufferId = request.nextChunkId++;
        emitTypedArrayChunk(request, bufferId, tag, typedArray, !1);
        return serializeByValueID(bufferId);
    }
    function serializeDebugTypedArray(request, tag, typedArray) {
        if (1e3 < typedArray.byteLength && !doNotLimit.has(typedArray)) return serializeDeferredObject(request, typedArray);
        request.pendingDebugChunks++;
        var bufferId = request.nextChunkId++;
        emitTypedArrayChunk(request, bufferId, tag, typedArray, !0);
        return serializeByValueID(bufferId);
    }
    function serializeDebugBlob(request, blob) {
        function progress(entry) {
            if (entry.done) emitOutlinedDebugModelChunk(request, id, {
                objectLimit: model.length + 2
            }, model), enqueueFlush(request);
            else return model.push(entry.value), reader.read().then(progress).catch(error);
        }
        function error(reason) {
            emitErrorChunk(request, id, "", reason, !0, null);
            enqueueFlush(request);
            reader.cancel(reason).then(noop, noop);
        }
        var model = [
            blob.type
        ], reader = blob.stream().getReader();
        request.pendingDebugChunks++;
        var id = request.nextChunkId++;
        reader.read().then(progress).catch(error);
        return "$B" + id.toString(16);
    }
    function serializeBlob(request, blob) {
        function progress(entry) {
            if (newTask.status === PENDING$1) if (entry.done) request.cacheController.signal.removeEventListener("abort", abortBlob), pingTask(request, newTask);
            else return model.push(entry.value), reader.read().then(progress).catch(error);
        }
        function error(reason) {
            newTask.status === PENDING$1 && (request.cacheController.signal.removeEventListener("abort", abortBlob), erroredTask(request, newTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
        }
        function abortBlob() {
            if (newTask.status === PENDING$1) {
                var signal = request.cacheController.signal;
                signal.removeEventListener("abort", abortBlob);
                signal = signal.reason;
                request.type === PRERENDER ? (request.abortableTasks.delete(newTask), haltTask(newTask), finishHaltedTask(newTask, request)) : (erroredTask(request, newTask, signal), enqueueFlush(request));
                reader.cancel(signal).then(error, error);
            }
        }
        var model = [
            blob.type
        ], newTask = createTask(request, model, null, !1, 0, request.abortableTasks, performance.now(), null, null, null), reader = blob.stream().getReader();
        request.cacheController.signal.addEventListener("abort", abortBlob);
        reader.read().then(progress).catch(error);
        return "$B" + newTask.id.toString(16);
    }
    function renderModel(request, task, parent, key, value) {
        serializedSize += key.length;
        var prevKeyPath = task.keyPath, prevImplicitSlot = task.implicitSlot;
        try {
            return renderModelDestructive(request, task, parent, key, value);
        } catch (thrownValue) {
            parent = task.model;
            parent = "object" === typeof parent && null !== parent && (parent.$$typeof === REACT_ELEMENT_TYPE || parent.$$typeof === REACT_LAZY_TYPE);
            if (request.status === ABORTING) {
                task.status = ABORTED;
                if (request.type === PRERENDER) return task = request.nextChunkId++, task = parent ? serializeLazyID(task) : serializeByValueID(task), task;
                task = request.fatalError;
                return parent ? serializeLazyID(task) : serializeByValueID(task);
            }
            key = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
            if ("object" === typeof key && null !== key && "function" === typeof key.then) return request = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks, task.time, task.debugOwner, task.debugStack, task.debugTask), value = request.ping, key.then(value, value), request.thenableState = getThenableStateAfterSuspending(), task.keyPath = prevKeyPath, task.implicitSlot = prevImplicitSlot, parent ? serializeLazyID(request.id) : serializeByValueID(request.id);
            task.keyPath = prevKeyPath;
            task.implicitSlot = prevImplicitSlot;
            request.pendingChunks++;
            prevKeyPath = request.nextChunkId++;
            prevImplicitSlot = logRecoverableError(request, key, task);
            emitErrorChunk(request, prevKeyPath, prevImplicitSlot, key, !1, task.debugOwner);
            return parent ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath);
        }
    }
    function renderModelDestructive(request, task, parent, parentPropertyName, value) {
        task.model = value;
        parentPropertyName === __PROTO__$1 && callWithDebugContextInDEV(request, task, function() {
            console.error("Expected not to serialize an object with own property `__proto__`. When parsed this property will be omitted.%s", describeObjectForErrorMessage(parent, parentPropertyName));
        });
        if (value === REACT_ELEMENT_TYPE) return "$";
        if (null === value) return null;
        if ("object" === typeof value) {
            switch(value.$$typeof){
                case REACT_ELEMENT_TYPE:
                    var elementReference = null, _writtenObjects = request.writtenObjects;
                    if (null === task.keyPath && !task.implicitSlot) {
                        var _existingReference = _writtenObjects.get(value);
                        if (void 0 !== _existingReference) if (modelRoot === value) modelRoot = null;
                        else return _existingReference;
                        else -1 === parentPropertyName.indexOf(":") && (_existingReference = _writtenObjects.get(parent), void 0 !== _existingReference && (elementReference = _existingReference + ":" + parentPropertyName, _writtenObjects.set(value, elementReference)));
                    }
                    if (serializedSize > MAX_ROW_SIZE) return deferTask(request, task);
                    if (_existingReference = value._debugInfo) if (canEmitDebugInfo) forwardDebugInfo(request, task, _existingReference);
                    else return outlineTask(request, task);
                    _existingReference = value.props;
                    var refProp = _existingReference.ref;
                    refProp = void 0 !== refProp ? refProp : null;
                    task.debugOwner = value._owner;
                    task.debugStack = value._debugStack;
                    task.debugTask = value._debugTask;
                    if (void 0 === value._owner || void 0 === value._debugStack || void 0 === value._debugTask) {
                        var key = "";
                        null !== value.key && value.key !== REACT_OPTIMISTIC_KEY && (key = ' key="' + value.key + '"');
                        console.error("Attempted to render <%s%s> without development properties. This is not supported. It can happen if:\n- The element is created with a production version of React but rendered in development.\n- The element was cloned with a custom function instead of `React.cloneElement`.\nThe props of this element may help locate this element: %o", value.type, key, value.props);
                    }
                    request = renderElement(request, task, value.type, value.key, refProp, _existingReference, value._store.validated);
                    "object" === typeof request && null !== request && null !== elementReference && (_writtenObjects.has(request) || _writtenObjects.set(request, elementReference));
                    return request;
                case REACT_LAZY_TYPE:
                    if (serializedSize > MAX_ROW_SIZE) return deferTask(request, task);
                    task.thenableState = null;
                    elementReference = callLazyInitInDEV(value);
                    if (request.status === ABORTING) throw null;
                    if (_writtenObjects = value._debugInfo) if (canEmitDebugInfo) forwardDebugInfo(request, task, _writtenObjects);
                    else return outlineTask(request, task);
                    return renderModelDestructive(request, task, parent, parentPropertyName, elementReference);
                case REACT_LEGACY_ELEMENT_TYPE:
                    throw Error('A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.');
            }
            if (isClientReference(value)) return serializeClientReference(request, parent, parentPropertyName, value);
            if (void 0 !== request.temporaryReferences && (elementReference = request.temporaryReferences.get(value), void 0 !== elementReference)) return "$T" + elementReference;
            elementReference = request.writtenObjects;
            _writtenObjects = elementReference.get(value);
            if ("function" === typeof value.then) {
                if (void 0 !== _writtenObjects) {
                    if (null !== task.keyPath || task.implicitSlot) return "$@" + serializeThenable(request, task, value).toString(16);
                    if (modelRoot === value) modelRoot = null;
                    else return _writtenObjects;
                }
                request = "$@" + serializeThenable(request, task, value).toString(16);
                elementReference.set(value, request);
                return request;
            }
            if (void 0 !== _writtenObjects) if (modelRoot === value) {
                if (_writtenObjects !== serializeByValueID(task.id)) return _writtenObjects;
                modelRoot = null;
            } else return _writtenObjects;
            else if (-1 === parentPropertyName.indexOf(":") && (_writtenObjects = elementReference.get(parent), void 0 !== _writtenObjects)) {
                _existingReference = parentPropertyName;
                if (isArrayImpl(parent) && parent[0] === REACT_ELEMENT_TYPE) switch(parentPropertyName){
                    case "1":
                        _existingReference = "type";
                        break;
                    case "2":
                        _existingReference = "key";
                        break;
                    case "3":
                        _existingReference = "props";
                        break;
                    case "4":
                        _existingReference = "_owner";
                }
                elementReference.set(value, _writtenObjects + ":" + _existingReference);
            }
            if (isArrayImpl(value)) return renderFragment(request, task, value);
            if (value instanceof Map) return serializeMap(request, value);
            if (value instanceof Set) return serializeSet(request, value);
            if ("function" === typeof FormData && value instanceof FormData) return serializeFormData(request, value);
            if (value instanceof Error) return serializeErrorValue(request, value);
            if (value instanceof ArrayBuffer) return serializeTypedArray(request, "A", new Uint8Array(value));
            if (value instanceof Int8Array) return serializeTypedArray(request, "O", value);
            if (value instanceof Uint8Array) return serializeTypedArray(request, "o", value);
            if (value instanceof Uint8ClampedArray) return serializeTypedArray(request, "U", value);
            if (value instanceof Int16Array) return serializeTypedArray(request, "S", value);
            if (value instanceof Uint16Array) return serializeTypedArray(request, "s", value);
            if (value instanceof Int32Array) return serializeTypedArray(request, "L", value);
            if (value instanceof Uint32Array) return serializeTypedArray(request, "l", value);
            if (value instanceof Float32Array) return serializeTypedArray(request, "G", value);
            if (value instanceof Float64Array) return serializeTypedArray(request, "g", value);
            if (value instanceof BigInt64Array) return serializeTypedArray(request, "M", value);
            if (value instanceof BigUint64Array) return serializeTypedArray(request, "m", value);
            if (value instanceof DataView) return serializeTypedArray(request, "V", value);
            if ("function" === typeof Blob && value instanceof Blob) return serializeBlob(request, value);
            if (elementReference = getIteratorFn(value)) return elementReference = elementReference.call(value), elementReference === value ? "$i" + outlineModel(request, Array.from(elementReference)).toString(16) : renderFragment(request, task, Array.from(elementReference));
            if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(request, task, value);
            elementReference = value[ASYNC_ITERATOR];
            if ("function" === typeof elementReference) return renderAsyncFragment(request, task, value, elementReference);
            if (value instanceof Date) return "$D" + value.toJSON();
            elementReference = getPrototypeOf(value);
            if (elementReference !== ObjectPrototype$1 && (null === elementReference || null !== getPrototypeOf(elementReference))) throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported." + describeObjectForErrorMessage(parent, parentPropertyName));
            if ("Object" !== objectName(value)) callWithDebugContextInDEV(request, task, function() {
                console.error("Only plain objects can be passed to Client Components from Server Components. %s objects are not supported.%s", objectName(value), describeObjectForErrorMessage(parent, parentPropertyName));
            });
            else if (!isSimpleObject(value)) callWithDebugContextInDEV(request, task, function() {
                console.error("Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.%s", describeObjectForErrorMessage(parent, parentPropertyName));
            });
            else if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(value);
                0 < symbols.length && callWithDebugContextInDEV(request, task, function() {
                    console.error("Only plain objects can be passed to Client Components from Server Components. Objects with symbol properties like %s are not supported.%s", symbols[0].description, describeObjectForErrorMessage(parent, parentPropertyName));
                });
            }
            return value;
        }
        if ("string" === typeof value) return serializedSize += value.length, "Z" === value[value.length - 1] && parent[parentPropertyName] instanceof Date ? "$D" + value : 1024 <= value.length && null !== byteLengthOfChunk ? serializeLargeTextString(request, value) : "$" === value[0] ? "$" + value : value;
        if ("boolean" === typeof value) return value;
        if ("number" === typeof value) return serializeNumber(value);
        if ("undefined" === typeof value) return "$undefined";
        if ("function" === typeof value) {
            if (isClientReference(value)) return serializeClientReference(request, parent, parentPropertyName, value);
            if (value.$$typeof === SERVER_REFERENCE_TAG) return serializeServerReference(request, value);
            if (void 0 !== request.temporaryReferences && (request = request.temporaryReferences.get(value), void 0 !== request)) return "$T" + request;
            if (value.$$typeof === TEMPORARY_REFERENCE_TAG) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
            if (/^on[A-Z]/.test(parentPropertyName)) throw Error("Event handlers cannot be passed to Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
            if (jsxChildrenParents.has(parent) || jsxPropsParents.has(parent) && "children" === parentPropertyName) throw request = value.displayName || value.name || "Component", Error("Functions are not valid as a child of Client Components. This may happen if you return " + request + " instead of <" + request + " /> from render. Or maybe you meant to call this function rather than return it." + describeObjectForErrorMessage(parent, parentPropertyName));
            throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.' + describeObjectForErrorMessage(parent, parentPropertyName));
        }
        if ("symbol" === typeof value) {
            task = request.writtenSymbols;
            elementReference = task.get(value);
            if (void 0 !== elementReference) return serializeByValueID(elementReference);
            elementReference = value.description;
            if (Symbol.for(elementReference) !== value) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (value.description + ") cannot be found among global symbols.") + describeObjectForErrorMessage(parent, parentPropertyName));
            request.pendingChunks++;
            _writtenObjects = request.nextChunkId++;
            emitSymbolChunk(request, _writtenObjects, elementReference);
            task.set(value, _writtenObjects);
            return serializeByValueID(_writtenObjects);
        }
        if ("bigint" === typeof value) return "$n" + value.toString(10);
        throw Error("Type " + typeof value + " is not supported in Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName));
    }
    function logRecoverableError(request, error, task) {
        var prevRequest = currentRequest;
        currentRequest = null;
        try {
            var onError = request.onError;
            var errorDigest = null !== task ? supportsRequestStorage ? requestStorage.run(void 0, callWithDebugContextInDEV, request, task, onError, error) : callWithDebugContextInDEV(request, task, onError, error) : supportsRequestStorage ? requestStorage.run(void 0, onError, error) : onError(error);
        } finally{
            currentRequest = prevRequest;
        }
        if (null != errorDigest && "string" !== typeof errorDigest) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
        return errorDigest || "";
    }
    function fatalError(request, error) {
        var onFatalError = request.onFatalError;
        onFatalError(error);
        null !== request.destination ? (request.status = CLOSED, closeWithError(request.destination, error)) : (request.status = CLOSING, request.fatalError = error);
        request.cacheController.abort(Error("The render was aborted due to a fatal error.", {
            cause: error
        }));
    }
    function serializeErrorValue(request, error) {
        var name = "Error", env = (0, request.environmentName)();
        try {
            name = error.name;
            var message = String(error.message);
            var stack = filterStackTrace(request, parseStackTrace(error, 0));
            var errorEnv = error.environmentName;
            "string" === typeof errorEnv && (env = errorEnv);
        } catch (x) {
            message = "An error occurred but serializing the error message failed.", stack = [];
        }
        name = {
            name: name,
            message: message,
            stack: stack,
            env: env
        };
        "cause" in error && (error = outlineModel(request, error.cause), name.cause = serializeByValueID(error));
        return "$Z" + outlineModel(request, name).toString(16);
    }
    function emitErrorChunk(request, id, digest, error, debug, owner) {
        var name = "Error", env = (0, request.environmentName)(), causeReference = null;
        try {
            if (error instanceof Error) {
                name = error.name;
                var message = String(error.message);
                var stack = filterStackTrace(request, parseStackTrace(error, 0));
                var errorEnv = error.environmentName;
                "string" === typeof errorEnv && (env = errorEnv);
                if ("cause" in error) {
                    var cause = error.cause, causeId = debug ? outlineDebugModel(request, {
                        objectLimit: 5
                    }, cause) : outlineModel(request, cause);
                    causeReference = serializeByValueID(causeId);
                }
            } else message = "object" === typeof error && null !== error ? describeObjectForErrorMessage(error) : String(error), stack = [];
        } catch (x) {
            message = "An error occurred but serializing the error message failed.", stack = [];
        }
        error = null == owner ? null : outlineComponentInfo(request, owner);
        digest = {
            digest: digest,
            name: name,
            message: message,
            stack: stack,
            env: env,
            owner: error
        };
        null !== causeReference && (digest.cause = causeReference);
        id = id.toString(16) + ":E" + stringify(digest) + "\n";
        id = stringToChunk(id);
        debug ? request.completedDebugChunks.push(id) : request.completedErrorChunks.push(id);
    }
    function emitImportChunk(request, id, clientReferenceMetadata, debug) {
        clientReferenceMetadata = stringify(clientReferenceMetadata);
        id = id.toString(16) + ":I" + clientReferenceMetadata + "\n";
        id = stringToChunk(id);
        debug ? request.completedDebugChunks.push(id) : request.completedImportChunks.push(id);
    }
    function emitSymbolChunk(request, id, name) {
        id = encodeReferenceChunk(request, id, "$S" + name);
        request.completedImportChunks.push(id);
    }
    function emitModelChunk(request, id, json) {
        id = id.toString(16) + ":" + json + "\n";
        id = stringToChunk(id);
        request.completedRegularChunks.push(id);
    }
    function emitDebugHaltChunk(request, id) {
        id = id.toString(16) + ":\n";
        id = stringToChunk(id);
        request.completedDebugChunks.push(id);
    }
    function emitDebugChunk(request, id, debugInfo) {
        var json = serializeDebugModel(request, 500, debugInfo);
        null !== request.debugDestination ? '"' === json[0] && "$" === json[1] ? (id = id.toString(16) + ":D" + json + "\n", request.completedRegularChunks.push(stringToChunk(id))) : (debugInfo = request.nextChunkId++, json = debugInfo.toString(16) + ":" + json + "\n", request.pendingDebugChunks++, request.completedDebugChunks.push(stringToChunk(json)), id = id.toString(16) + ':D"$' + debugInfo.toString(16) + '"\n', request.completedRegularChunks.push(stringToChunk(id))) : (id = id.toString(16) + ":D" + json + "\n", request.completedRegularChunks.push(stringToChunk(id)));
    }
    function outlineComponentInfo(request, componentInfo) {
        var existingRef = request.writtenDebugObjects.get(componentInfo);
        if (void 0 !== existingRef) return existingRef;
        null != componentInfo.owner && outlineComponentInfo(request, componentInfo.owner);
        existingRef = 10;
        null != componentInfo.stack && (existingRef += componentInfo.stack.length);
        existingRef = {
            objectLimit: existingRef
        };
        var componentDebugInfo = {
            name: componentInfo.name,
            key: componentInfo.key
        };
        null != componentInfo.env && (componentDebugInfo.env = componentInfo.env);
        null != componentInfo.owner && (componentDebugInfo.owner = componentInfo.owner);
        null == componentInfo.stack && null != componentInfo.debugStack ? componentDebugInfo.stack = filterStackTrace(request, parseStackTrace(componentInfo.debugStack, 1)) : null != componentInfo.stack && (componentDebugInfo.stack = componentInfo.stack);
        componentDebugInfo.props = componentInfo.props;
        existingRef = outlineDebugModel(request, existingRef, componentDebugInfo);
        existingRef = serializeByValueID(existingRef);
        request.writtenDebugObjects.set(componentInfo, existingRef);
        request.writtenObjects.set(componentInfo, existingRef);
        return existingRef;
    }
    function emitTypedArrayChunk(request, id, tag, typedArray, debug) {
        debug ? request.pendingDebugChunks++ : request.pendingChunks++;
        typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
        var binaryLength = typedArray.byteLength;
        id = id.toString(16) + ":" + tag + binaryLength.toString(16) + ",";
        id = stringToChunk(id);
        debug ? request.completedDebugChunks.push(id, typedArray) : request.completedRegularChunks.push(id, typedArray);
    }
    function emitTextChunk(request, id, text, debug) {
        if (null === byteLengthOfChunk) throw Error("Existence of byteLengthOfChunk should have already been checked. This is a bug in React.");
        debug ? request.pendingDebugChunks++ : request.pendingChunks++;
        text = stringToChunk(text);
        var binaryLength = text.byteLength;
        id = id.toString(16) + ":T" + binaryLength.toString(16) + ",";
        id = stringToChunk(id);
        debug ? request.completedDebugChunks.push(id, text) : request.completedRegularChunks.push(id, text);
    }
    function renderDebugModel(request, counter, parent, parentPropertyName, value) {
        if (null === value) return null;
        if (value === REACT_ELEMENT_TYPE) return "$";
        if ("object" === typeof value) {
            if (isClientReference(value)) return serializeDebugClientReference(request, parent, parentPropertyName, value);
            if (value.$$typeof === CONSTRUCTOR_MARKER) {
                value = value.constructor;
                var ref = request.writtenDebugObjects.get(value);
                void 0 === ref && (request = outlineDebugModel(request, counter, value), ref = serializeByValueID(request));
                return "$P" + ref.slice(1);
            }
            if (void 0 !== request.temporaryReferences) {
                var tempRef = request.temporaryReferences.get(value);
                if (void 0 !== tempRef) return "$T" + tempRef;
            }
            tempRef = request.writtenDebugObjects;
            var existingDebugReference = tempRef.get(value);
            if (void 0 !== existingDebugReference) if (debugModelRoot === value) debugModelRoot = null;
            else return existingDebugReference;
            else if (-1 === parentPropertyName.indexOf(":")) {
                if (existingDebugReference = tempRef.get(parent), void 0 !== existingDebugReference) {
                    if (0 >= counter.objectLimit && !doNotLimit.has(value)) return serializeDeferredObject(request, value);
                    var propertyName = parentPropertyName;
                    if (isArrayImpl(parent) && parent[0] === REACT_ELEMENT_TYPE) switch(parentPropertyName){
                        case "1":
                            propertyName = "type";
                            break;
                        case "2":
                            propertyName = "key";
                            break;
                        case "3":
                            propertyName = "props";
                            break;
                        case "4":
                            propertyName = "_owner";
                    }
                    tempRef.set(value, existingDebugReference + ":" + propertyName);
                } else if (debugNoOutline !== value) {
                    if ("function" === typeof value.then) return serializeDebugThenable(request, counter, value);
                    request = outlineDebugModel(request, counter, value);
                    return serializeByValueID(request);
                }
            }
            parent = request.writtenObjects.get(value);
            if (void 0 !== parent) return parent;
            if (0 >= counter.objectLimit && !doNotLimit.has(value)) return serializeDeferredObject(request, value);
            counter.objectLimit--;
            parent = request.deferredDebugObjects;
            if (null !== parent && (parentPropertyName = parent.existing.get(value), void 0 !== parentPropertyName)) return parent.existing.delete(value), parent.retained.delete(parentPropertyName), emitOutlinedDebugModelChunk(request, parentPropertyName, counter, value), serializeByValueID(parentPropertyName);
            switch(value.$$typeof){
                case REACT_ELEMENT_TYPE:
                    null != value._owner && outlineComponentInfo(request, value._owner);
                    "object" === typeof value.type && null !== value.type && doNotLimit.add(value.type);
                    "object" === typeof value.key && null !== value.key && doNotLimit.add(value.key);
                    doNotLimit.add(value.props);
                    null !== value._owner && doNotLimit.add(value._owner);
                    counter = null;
                    if (null != value._debugStack) for(counter = filterStackTrace(request, parseStackTrace(value._debugStack, 1)), doNotLimit.add(counter), request = 0; request < counter.length; request++)doNotLimit.add(counter[request]);
                    return [
                        REACT_ELEMENT_TYPE,
                        value.type,
                        value.key,
                        value.props,
                        value._owner,
                        counter,
                        value._store.validated
                    ];
                case REACT_LAZY_TYPE:
                    value = value._payload;
                    if (null !== value && "object" === typeof value) {
                        switch(value._status){
                            case 1:
                                return request = outlineDebugModel(request, counter, value._result), serializeLazyID(request);
                            case 2:
                                return counter = request.nextChunkId++, emitErrorChunk(request, counter, "", value._result, !0, null), serializeLazyID(counter);
                        }
                        switch(value.status){
                            case "fulfilled":
                                return request = outlineDebugModel(request, counter, value.value), serializeLazyID(request);
                            case "rejected":
                                return counter = request.nextChunkId++, emitErrorChunk(request, counter, "", value.reason, !0, null), serializeLazyID(counter);
                        }
                    }
                    request.pendingDebugChunks++;
                    value = request.nextChunkId++;
                    emitDebugHaltChunk(request, value);
                    return serializeLazyID(value);
            }
            if ("function" === typeof value.then) return serializeDebugThenable(request, counter, value);
            if (isArrayImpl(value)) return 200 < value.length && !doNotLimit.has(value) ? serializeDeferredObject(request, value) : value;
            if (value instanceof Date) return "$D" + value.toJSON();
            if (value instanceof Map) {
                value = Array.from(value);
                counter.objectLimit++;
                for(ref = 0; ref < value.length; ref++){
                    var entry = value[ref];
                    doNotLimit.add(entry);
                    var key = entry[0];
                    entry = entry[1];
                    "object" === typeof key && null !== key && doNotLimit.add(key);
                    "object" === typeof entry && null !== entry && doNotLimit.add(entry);
                }
                return "$Q" + outlineDebugModel(request, counter, value).toString(16);
            }
            if (value instanceof Set) {
                value = Array.from(value);
                counter.objectLimit++;
                for(ref = 0; ref < value.length; ref++)key = value[ref], "object" === typeof key && null !== key && doNotLimit.add(key);
                return "$W" + outlineDebugModel(request, counter, value).toString(16);
            }
            if ("function" === typeof FormData && value instanceof FormData) return value = Array.from(value.entries()), "$K" + outlineDebugModel(request, {
                objectLimit: 2 * value.length + 1
            }, value).toString(16);
            if (value instanceof Error) {
                var name = "Error";
                parent = (0, request.environmentName)();
                try {
                    name = value.name, key = String(value.message), ref = filterStackTrace(request, parseStackTrace(value, 0)), entry = value.environmentName, "string" === typeof entry && (parent = entry);
                } catch (x) {
                    key = "An error occurred but serializing the error message failed.", ref = [];
                }
                key = {
                    name: name,
                    message: key,
                    stack: ref,
                    env: parent
                };
                "cause" in value && (counter.objectLimit--, value = outlineDebugModel(request, counter, value.cause), key.cause = serializeByValueID(value));
                request = "$Z" + outlineDebugModel(request, {
                    objectLimit: 2 * ref.length + 1
                }, key).toString(16);
                return request;
            }
            if (value instanceof ArrayBuffer) return serializeDebugTypedArray(request, "A", new Uint8Array(value));
            if (value instanceof Int8Array) return serializeDebugTypedArray(request, "O", value);
            if (value instanceof Uint8Array) return serializeDebugTypedArray(request, "o", value);
            if (value instanceof Uint8ClampedArray) return serializeDebugTypedArray(request, "U", value);
            if (value instanceof Int16Array) return serializeDebugTypedArray(request, "S", value);
            if (value instanceof Uint16Array) return serializeDebugTypedArray(request, "s", value);
            if (value instanceof Int32Array) return serializeDebugTypedArray(request, "L", value);
            if (value instanceof Uint32Array) return serializeDebugTypedArray(request, "l", value);
            if (value instanceof Float32Array) return serializeDebugTypedArray(request, "G", value);
            if (value instanceof Float64Array) return serializeDebugTypedArray(request, "g", value);
            if (value instanceof BigInt64Array) return serializeDebugTypedArray(request, "M", value);
            if (value instanceof BigUint64Array) return serializeDebugTypedArray(request, "m", value);
            if (value instanceof DataView) return serializeDebugTypedArray(request, "V", value);
            if ("function" === typeof Blob && value instanceof Blob) return serializeDebugBlob(request, value);
            if (getIteratorFn(value)) return Array.from(value);
            request = getPrototypeOf(value);
            if (request !== ObjectPrototype$1 && null !== request) {
                counter = Object.create(null);
                for(name in value)if (hasOwnProperty.call(value, name) || isGetter(request, name)) counter[name] = value[name];
                ref = request.constructor;
                "function" !== typeof ref || ref.prototype !== request || hasOwnProperty.call(value, "") || isGetter(request, "") || (counter[""] = {
                    $$typeof: CONSTRUCTOR_MARKER,
                    constructor: ref
                });
                return counter;
            }
            return value;
        }
        if ("string" === typeof value) {
            if (1024 <= value.length) {
                if (0 >= counter.objectLimit) return serializeDeferredObject(request, value);
                counter.objectLimit--;
                request.pendingDebugChunks++;
                counter = request.nextChunkId++;
                emitTextChunk(request, counter, value, !0);
                return serializeByValueID(counter);
            }
            return "$" === value[0] ? "$" + value : value;
        }
        if ("boolean" === typeof value) return value;
        if ("number" === typeof value) return serializeNumber(value);
        if ("undefined" === typeof value) return "$undefined";
        if ("function" === typeof value) {
            if (isClientReference(value)) return serializeDebugClientReference(request, parent, parentPropertyName, value);
            if (void 0 !== request.temporaryReferences && (counter = request.temporaryReferences.get(value), void 0 !== counter)) return "$T" + counter;
            counter = request.writtenDebugObjects;
            ref = counter.get(value);
            if (void 0 !== ref) return ref;
            ref = Function.prototype.toString.call(value);
            key = value.name;
            key = "$E" + ("string" === typeof key ? "Object.defineProperty(" + ref + ',"name",{value:' + JSON.stringify(key) + "})" : "(" + ref + ")");
            request.pendingDebugChunks++;
            ref = request.nextChunkId++;
            key = encodeReferenceChunk(request, ref, key);
            request.completedDebugChunks.push(key);
            request = serializeByValueID(ref);
            counter.set(value, request);
            return request;
        }
        if ("symbol" === typeof value) {
            counter = request.writtenSymbols.get(value);
            if (void 0 !== counter) return serializeByValueID(counter);
            value = value.description;
            request.pendingChunks++;
            counter = request.nextChunkId++;
            emitSymbolChunk(request, counter, value);
            return serializeByValueID(counter);
        }
        return "bigint" === typeof value ? "$n" + value.toString(10) : "unknown type " + typeof value;
    }
    function serializeDebugModel(request, objectLimit, model) {
        function replacer(parentPropertyName) {
            try {
                return renderDebugModel(request, counter, this, parentPropertyName, this[parentPropertyName]);
            } catch (x) {
                return "Unknown Value: React could not send it from the server.\n" + x.message;
            }
        }
        var counter = {
            objectLimit: objectLimit
        };
        objectLimit = debugNoOutline;
        debugNoOutline = model;
        try {
            return stringify(model, replacer);
        } catch (x) {
            return stringify("Unknown Value: React could not send it from the server.\n" + x.message);
        } finally{
            debugNoOutline = objectLimit;
        }
    }
    function emitOutlinedDebugModelChunk(request, id, counter, model) {
        function replacer(parentPropertyName) {
            try {
                return renderDebugModel(request, counter, this, parentPropertyName, this[parentPropertyName]);
            } catch (x) {
                return "Unknown Value: React could not send it from the server.\n" + x.message;
            }
        }
        "object" === typeof model && null !== model && doNotLimit.add(model);
        var prevModelRoot = debugModelRoot;
        debugModelRoot = model;
        "object" === typeof model && null !== model && request.writtenDebugObjects.set(model, serializeByValueID(id));
        try {
            var json = stringify(model, replacer);
        } catch (x) {
            json = stringify("Unknown Value: React could not send it from the server.\n" + x.message);
        } finally{
            debugModelRoot = prevModelRoot;
        }
        id = id.toString(16) + ":" + json + "\n";
        id = stringToChunk(id);
        request.completedDebugChunks.push(id);
    }
    function outlineDebugModel(request, counter, model) {
        var id = request.nextChunkId++;
        request.pendingDebugChunks++;
        emitOutlinedDebugModelChunk(request, id, counter, model);
        return id;
    }
    function emitTimeOriginChunk(request, timeOrigin) {
        request.pendingDebugChunks++;
        timeOrigin = stringToChunk(":N" + timeOrigin + "\n");
        request.completedDebugChunks.push(timeOrigin);
    }
    function forwardDebugInfo(request$jscomp$1, task, debugInfo) {
        for(var id = task.id, i = 0; i < debugInfo.length; i++){
            var info = debugInfo[i];
            if ("number" === typeof info.time) markOperationEndTime(request$jscomp$1, task, info.time);
            else if ("string" === typeof info.name) outlineComponentInfo(request$jscomp$1, info), request$jscomp$1.pendingChunks++, emitDebugChunk(request$jscomp$1, id, info);
            else if (info.awaited) {
                var ioInfo = info.awaited;
                if (!(ioInfo.end <= request$jscomp$1.timeOrigin)) {
                    var request = request$jscomp$1, ioInfo$jscomp$0 = ioInfo;
                    if (!request.writtenObjects.has(ioInfo$jscomp$0)) {
                        request.pendingDebugChunks++;
                        var id$jscomp$0 = request.nextChunkId++, owner = ioInfo$jscomp$0.owner;
                        null != owner && outlineComponentInfo(request, owner);
                        var debugStack = null == ioInfo$jscomp$0.stack && null != ioInfo$jscomp$0.debugStack ? filterStackTrace(request, parseStackTrace(ioInfo$jscomp$0.debugStack, 1)) : ioInfo$jscomp$0.stack;
                        var env = ioInfo$jscomp$0.env;
                        null == env && (env = (0, request.environmentName)());
                        var request$jscomp$0 = request, id$jscomp$1 = id$jscomp$0, value = ioInfo$jscomp$0.value, objectLimit = 10;
                        debugStack && (objectLimit += debugStack.length);
                        var debugIOInfo = {
                            name: ioInfo$jscomp$0.name,
                            start: ioInfo$jscomp$0.start - request$jscomp$0.timeOrigin,
                            end: ioInfo$jscomp$0.end - request$jscomp$0.timeOrigin
                        };
                        null != env && (debugIOInfo.env = env);
                        null != debugStack && (debugIOInfo.stack = debugStack);
                        null != owner && (debugIOInfo.owner = owner);
                        void 0 !== value && (debugIOInfo.value = value);
                        env = serializeDebugModel(request$jscomp$0, objectLimit, debugIOInfo);
                        id$jscomp$1 = id$jscomp$1.toString(16) + ":J" + env + "\n";
                        id$jscomp$1 = stringToChunk(id$jscomp$1);
                        request$jscomp$0.completedDebugChunks.push(id$jscomp$1);
                        request.writtenDebugObjects.set(ioInfo$jscomp$0, serializeByValueID(id$jscomp$0));
                    }
                    null != info.owner && outlineComponentInfo(request$jscomp$1, info.owner);
                    request = null == info.stack && null != info.debugStack ? filterStackTrace(request$jscomp$1, parseStackTrace(info.debugStack, 1)) : info.stack;
                    ioInfo = {
                        awaited: ioInfo
                    };
                    ioInfo.env = null != info.env ? info.env : (0, request$jscomp$1.environmentName)();
                    null != info.owner && (ioInfo.owner = info.owner);
                    null != request && (ioInfo.stack = request);
                    request$jscomp$1.pendingChunks++;
                    emitDebugChunk(request$jscomp$1, id, ioInfo);
                }
            } else request$jscomp$1.pendingChunks++, emitDebugChunk(request$jscomp$1, id, info);
        }
    }
    function forwardDebugInfoFromThenable(request, task, thenable) {
        (thenable = thenable._debugInfo) && forwardDebugInfo(request, task, thenable);
    }
    function forwardDebugInfoFromCurrentContext(request, task, thenable) {
        (thenable = thenable._debugInfo) && forwardDebugInfo(request, task, thenable);
    }
    function forwardDebugInfoFromAbortedTask(request, task) {
        var model = task.model;
        "object" === typeof model && null !== model && (model = model._debugInfo) && forwardDebugInfo(request, task, model);
    }
    function emitTimingChunk(request, id, timestamp) {
        request.pendingChunks++;
        var json = '{"time":' + (timestamp - request.timeOrigin) + "}";
        null !== request.debugDestination ? (timestamp = request.nextChunkId++, json = timestamp.toString(16) + ":" + json + "\n", request.pendingDebugChunks++, request.completedDebugChunks.push(stringToChunk(json)), id = id.toString(16) + ':D"$' + timestamp.toString(16) + '"\n', request.completedRegularChunks.push(stringToChunk(id))) : (id = id.toString(16) + ":D" + json + "\n", request.completedRegularChunks.push(stringToChunk(id)));
    }
    function markOperationEndTime(request, task, timestamp) {
        request.status === ABORTING && timestamp > request.abortTime || (timestamp > task.time ? (emitTimingChunk(request, task.id, timestamp), task.time = timestamp) : emitTimingChunk(request, task.id, task.time));
    }
    function emitChunk(request, task, value) {
        var id = task.id;
        "string" === typeof value && null !== byteLengthOfChunk ? emitTextChunk(request, id, value, !1) : value instanceof ArrayBuffer ? emitTypedArrayChunk(request, id, "A", new Uint8Array(value), !1) : value instanceof Int8Array ? emitTypedArrayChunk(request, id, "O", value, !1) : value instanceof Uint8Array ? emitTypedArrayChunk(request, id, "o", value, !1) : value instanceof Uint8ClampedArray ? emitTypedArrayChunk(request, id, "U", value, !1) : value instanceof Int16Array ? emitTypedArrayChunk(request, id, "S", value, !1) : value instanceof Uint16Array ? emitTypedArrayChunk(request, id, "s", value, !1) : value instanceof Int32Array ? emitTypedArrayChunk(request, id, "L", value, !1) : value instanceof Uint32Array ? emitTypedArrayChunk(request, id, "l", value, !1) : value instanceof Float32Array ? emitTypedArrayChunk(request, id, "G", value, !1) : value instanceof Float64Array ? emitTypedArrayChunk(request, id, "g", value, !1) : value instanceof BigInt64Array ? emitTypedArrayChunk(request, id, "M", value, !1) : value instanceof BigUint64Array ? emitTypedArrayChunk(request, id, "m", value, !1) : value instanceof DataView ? emitTypedArrayChunk(request, id, "V", value, !1) : (value = stringify(value, task.toJSON), emitModelChunk(request, task.id, value));
    }
    function erroredTask(request, task, error) {
        task.timed && markOperationEndTime(request, task, performance.now());
        task.status = ERRORED$1;
        var digest = logRecoverableError(request, error, task);
        emitErrorChunk(request, task.id, digest, error, !1, task.debugOwner);
        request.abortableTasks.delete(task);
        callOnAllReadyIfReady(request);
    }
    function retryTask(request, task) {
        if (task.status === PENDING$1) {
            var prevCanEmitDebugInfo = canEmitDebugInfo;
            task.status = RENDERING;
            var parentSerializedSize = serializedSize;
            try {
                modelRoot = task.model;
                canEmitDebugInfo = !0;
                var resolvedModel = renderModelDestructive(request, task, emptyRoot, "", task.model);
                canEmitDebugInfo = !1;
                modelRoot = resolvedModel;
                task.keyPath = null;
                task.implicitSlot = !1;
                var currentEnv = (0, request.environmentName)();
                currentEnv !== task.environmentName && (request.pendingChunks++, emitDebugChunk(request, task.id, {
                    env: currentEnv
                }));
                task.timed && markOperationEndTime(request, task, performance.now());
                if ("object" === typeof resolvedModel && null !== resolvedModel) request.writtenObjects.set(resolvedModel, serializeByValueID(task.id)), emitChunk(request, task, resolvedModel);
                else {
                    var json = stringify(resolvedModel);
                    emitModelChunk(request, task.id, json);
                }
                task.status = COMPLETED;
                request.abortableTasks.delete(task);
                callOnAllReadyIfReady(request);
            } catch (thrownValue) {
                if (request.status === ABORTING) if (request.abortableTasks.delete(task), task.status = PENDING$1, request.type === PRERENDER) haltTask(task), finishHaltedTask(task, request);
                else {
                    var errorId = request.fatalError;
                    abortTask(task);
                    finishAbortedTask(task, request, errorId);
                }
                else {
                    var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                    if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                        task.status = PENDING$1;
                        task.thenableState = getThenableStateAfterSuspending();
                        var ping = task.ping;
                        x.then(ping, ping);
                    } else erroredTask(request, task, x);
                }
            } finally{
                canEmitDebugInfo = prevCanEmitDebugInfo, serializedSize = parentSerializedSize;
            }
        }
    }
    function tryStreamTask(request, task) {
        var prevCanEmitDebugInfo = canEmitDebugInfo;
        canEmitDebugInfo = !1;
        var parentSerializedSize = serializedSize;
        try {
            emitChunk(request, task, task.model);
        } finally{
            serializedSize = parentSerializedSize, canEmitDebugInfo = prevCanEmitDebugInfo;
        }
    }
    function performWork(request) {
        var prevDispatcher = ReactSharedInternalsServer.H;
        ReactSharedInternalsServer.H = HooksDispatcher;
        var prevRequest = currentRequest;
        currentRequest$1 = currentRequest = request;
        try {
            var pingedTasks = request.pingedTasks;
            request.pingedTasks = [];
            for(var i = 0; i < pingedTasks.length; i++)retryTask(request, pingedTasks[i]);
            flushCompletedChunks(request);
        } catch (error) {
            logRecoverableError(request, error, null), fatalError(request, error);
        } finally{
            ReactSharedInternalsServer.H = prevDispatcher, currentRequest$1 = null, currentRequest = prevRequest;
        }
    }
    function abortTask(task) {
        task.status === PENDING$1 && (task.status = ABORTED);
    }
    function finishAbortedTask(task, request, errorId) {
        task.status === ABORTED && (forwardDebugInfoFromAbortedTask(request, task), task.timed && markOperationEndTime(request, task, request.abortTime), errorId = serializeByValueID(errorId), task = encodeReferenceChunk(request, task.id, errorId), request.completedErrorChunks.push(task));
    }
    function haltTask(task) {
        task.status === PENDING$1 && (task.status = ABORTED);
    }
    function finishHaltedTask(task, request) {
        task.status === ABORTED && (forwardDebugInfoFromAbortedTask(request, task), request.pendingChunks--);
    }
    function flushCompletedChunks(request) {
        if (null !== request.debugDestination) {
            var debugDestination = request.debugDestination;
            currentView = new Uint8Array(4096);
            writtenBytes = 0;
            try {
                for(var debugChunks = request.completedDebugChunks, i = 0; i < debugChunks.length; i++)request.pendingDebugChunks--, writeChunkAndReturn(debugDestination, debugChunks[i]);
                debugChunks.splice(0, i);
            } finally{
                completeWriting(debugDestination);
            }
        }
        debugDestination = request.destination;
        if (null !== debugDestination) {
            currentView = new Uint8Array(4096);
            writtenBytes = 0;
            try {
                var importsChunks = request.completedImportChunks;
                for(debugChunks = 0; debugChunks < importsChunks.length; debugChunks++)if (request.pendingChunks--, !writeChunkAndReturn(debugDestination, importsChunks[debugChunks])) {
                    request.destination = null;
                    debugChunks++;
                    break;
                }
                importsChunks.splice(0, debugChunks);
                var hintChunks = request.completedHintChunks;
                for(debugChunks = 0; debugChunks < hintChunks.length; debugChunks++)if (!writeChunkAndReturn(debugDestination, hintChunks[debugChunks])) //TURBOPACK unreachable
                ;
                hintChunks.splice(0, debugChunks);
                if (null === request.debugDestination) {
                    var _debugChunks = request.completedDebugChunks;
                    for(debugChunks = 0; debugChunks < _debugChunks.length; debugChunks++)if (request.pendingDebugChunks--, !writeChunkAndReturn(debugDestination, _debugChunks[debugChunks])) {
                        request.destination = null;
                        debugChunks++;
                        break;
                    }
                    _debugChunks.splice(0, debugChunks);
                }
                var regularChunks = request.completedRegularChunks;
                for(debugChunks = 0; debugChunks < regularChunks.length; debugChunks++)if (request.pendingChunks--, !writeChunkAndReturn(debugDestination, regularChunks[debugChunks])) {
                    request.destination = null;
                    debugChunks++;
                    break;
                }
                regularChunks.splice(0, debugChunks);
                var errorChunks = request.completedErrorChunks;
                for(debugChunks = 0; debugChunks < errorChunks.length; debugChunks++)if (request.pendingChunks--, !writeChunkAndReturn(debugDestination, errorChunks[debugChunks])) {
                    request.destination = null;
                    debugChunks++;
                    break;
                }
                errorChunks.splice(0, debugChunks);
            } finally{
                request.flushScheduled = !1, completeWriting(debugDestination);
            }
        }
        0 === request.pendingChunks && (importsChunks = request.debugDestination, 0 === request.pendingDebugChunks ? (null !== importsChunks && (importsChunks.close(), request.debugDestination = null), request.status < ABORTING && request.cacheController.abort(Error("This render completed successfully. All cacheSignals are now aborted to allow clean up of any unused resources.")), null !== request.destination && (request.status = CLOSED, request.destination.close(), request.destination = null), null !== request.debugDestination && (request.debugDestination.close(), request.debugDestination = null)) : null !== importsChunks && null !== request.destination && (request.status = CLOSED, request.destination.close(), request.destination = null));
    }
    function startWork(request) {
        request.flushScheduled = null !== request.destination;
        supportsRequestStorage ? scheduleMicrotask(function() {
            requestStorage.run(request, performWork, request);
        }) : scheduleMicrotask(function() {
            return performWork(request);
        });
        setTimeout(function() {
            request.status === OPENING && (request.status = 11);
        }, 0);
    }
    function enqueueFlush(request) {
        !1 !== request.flushScheduled || 0 !== request.pingedTasks.length || null === request.destination && null === request.debugDestination || (request.flushScheduled = !0, setTimeout(function() {
            request.flushScheduled = !1;
            flushCompletedChunks(request);
        }, 0));
    }
    function callOnAllReadyIfReady(request) {
        0 === request.abortableTasks.size && (request = request.onAllReady, request());
    }
    function startFlowing(request, destination) {
        if (request.status === CLOSING) request.status = CLOSED, closeWithError(destination, request.fatalError);
        else if (request.status !== CLOSED && null === request.destination) {
            request.destination = destination;
            try {
                flushCompletedChunks(request);
            } catch (error) {
                logRecoverableError(request, error, null), fatalError(request, error);
            }
        }
    }
    function finishHalt(request, abortedTasks) {
        try {
            abortedTasks.forEach(function(task) {
                return finishHaltedTask(task, request);
            });
            var onAllReady = request.onAllReady;
            onAllReady();
            flushCompletedChunks(request);
        } catch (error) {
            logRecoverableError(request, error, null), fatalError(request, error);
        }
    }
    function finishAbort(request, abortedTasks, errorId) {
        try {
            abortedTasks.forEach(function(task) {
                return finishAbortedTask(task, request, errorId);
            });
            var onAllReady = request.onAllReady;
            onAllReady();
            flushCompletedChunks(request);
        } catch (error) {
            logRecoverableError(request, error, null), fatalError(request, error);
        }
    }
    function abort(request, reason) {
        if (!(11 < request.status)) try {
            request.status = ABORTING;
            request.abortTime = performance.now();
            request.cacheController.abort(reason);
            var abortableTasks = request.abortableTasks;
            if (0 < abortableTasks.size) if (request.type === PRERENDER) abortableTasks.forEach(function(task) {
                return haltTask(task, request);
            }), setTimeout(function() {
                return finishHalt(request, abortableTasks);
            }, 0);
            else {
                var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason, digest = logRecoverableError(request, error, null), errorId = request.nextChunkId++;
                request.fatalError = errorId;
                request.pendingChunks++;
                emitErrorChunk(request, errorId, digest, error, !1, null);
                abortableTasks.forEach(function(task) {
                    return abortTask(task, request, errorId);
                });
                setTimeout(function() {
                    return finishAbort(request, abortableTasks, errorId);
                }, 0);
            }
            else {
                var onAllReady = request.onAllReady;
                onAllReady();
                flushCompletedChunks(request);
            }
        } catch (error$2) {
            logRecoverableError(request, error$2, null), fatalError(request, error$2);
        }
    }
    function fromHex(str) {
        return parseInt(str, 16);
    }
    function closeDebugChannel(request) {
        var deferredDebugObjects = request.deferredDebugObjects;
        if (null === deferredDebugObjects) throw Error("resolveDebugMessage/closeDebugChannel should not be called for a Request that wasn't kept alive. This is a bug in React.");
        deferredDebugObjects.retained.forEach(function(value, id) {
            request.pendingDebugChunks--;
            deferredDebugObjects.retained.delete(id);
            deferredDebugObjects.existing.delete(value);
        });
        enqueueFlush(request);
    }
    function resolveServerReference(bundlerConfig, id) {
        var name = "", resolvedModuleData = bundlerConfig[id];
        if (resolvedModuleData) name = resolvedModuleData.name;
        else {
            var idx = id.lastIndexOf("#");
            -1 !== idx && (name = id.slice(idx + 1), resolvedModuleData = bundlerConfig[id.slice(0, idx)]);
            if (!resolvedModuleData) throw Error('Could not find the module "' + id + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
        }
        return resolvedModuleData.async ? [
            resolvedModuleData.id,
            resolvedModuleData.chunks,
            name,
            1
        ] : [
            resolvedModuleData.id,
            resolvedModuleData.chunks,
            name
        ];
    }
    function requireAsyncModule(id) {
        var promise = globalThis.__next_require__(id);
        if ("function" !== typeof promise.then || "fulfilled" === promise.status) return null;
        promise.then(function(value) {
            promise.status = "fulfilled";
            promise.value = value;
        }, function(reason) {
            promise.status = "rejected";
            promise.reason = reason;
        });
        return promise;
    }
    function ignoreReject() {}
    function preloadModule(metadata) {
        for(var chunks = metadata[1], promises = [], i = 0; i < chunks.length; i++){
            var thenable = globalThis.__next_chunk_load__(chunks[i]);
            loadedChunks.has(thenable) || promises.push(thenable);
            if (!instrumentedChunks.has(thenable)) {
                var resolve = loadedChunks.add.bind(loadedChunks, thenable);
                thenable.then(resolve, ignoreReject);
                instrumentedChunks.add(thenable);
            }
        }
        return 4 === metadata.length ? 0 === promises.length ? requireAsyncModule(metadata[0]) : Promise.all(promises).then(function() {
            return requireAsyncModule(metadata[0]);
        }) : 0 < promises.length ? Promise.all(promises) : null;
    }
    function requireModule(metadata) {
        var moduleExports = globalThis.__next_require__(metadata[0]);
        if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
        else throw moduleExports.reason;
        if ("*" === metadata[2]) return moduleExports;
        if ("" === metadata[2]) return moduleExports.__esModule ? moduleExports.default : moduleExports;
        if (hasOwnProperty.call(moduleExports, metadata[2])) return moduleExports[metadata[2]];
    }
    function appendBackingEntry(backingStore, key, value) {
        backingStore.data.append(key, value);
        value = backingStore.keys;
        null === value ? (backingStore.keys = Array.from(backingStore.data.keys()), backingStore.keyPointer = 0) : value.push(key);
    }
    function ReactPromise(status, value, reason) {
        this.status = status;
        this.value = value;
        this.reason = reason;
    }
    function wakeChunk(response, listeners, value, chunk) {
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            "function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, chunk.reason);
        }
    }
    function rejectChunk(response, listeners, error) {
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            "function" === typeof listener ? listener(error) : rejectReference(response, listener.handler, error);
        }
    }
    function triggerErrorOnChunk(response, chunk, error) {
        if ("pending" !== chunk.status && "blocked" !== chunk.status) chunk.reason.error(error);
        else {
            var listeners = chunk.reason;
            chunk.status = "rejected";
            chunk.reason = error;
            null !== listeners && rejectChunk(response, listeners, error);
        }
    }
    function resolveModelChunk(response, chunk, value, id) {
        if ("pending" !== chunk.status) chunk = chunk.reason, "C" === value[0] ? chunk.close("C" === value ? '"$undefined"' : value.slice(1)) : chunk.enqueueModel(value);
        else {
            var resolveListeners = chunk.value, rejectListeners = chunk.reason;
            chunk.status = "resolved_model";
            chunk.value = value;
            chunk.reason = _defineProperty({
                id: id
            }, RESPONSE_SYMBOL, response);
            if (null !== resolveListeners) switch(initializeModelChunk(chunk), chunk.status){
                case "fulfilled":
                    wakeChunk(response, resolveListeners, chunk.value, chunk);
                    break;
                case "blocked":
                case "pending":
                    if (chunk.value) for(value = 0; value < resolveListeners.length; value++)chunk.value.push(resolveListeners[value]);
                    else chunk.value = resolveListeners;
                    if (chunk.reason) {
                        if (rejectListeners) for(value = 0; value < rejectListeners.length; value++)chunk.reason.push(rejectListeners[value]);
                    } else chunk.reason = rejectListeners;
                    break;
                case "rejected":
                    rejectListeners && rejectChunk(response, rejectListeners, chunk.reason);
            }
        }
    }
    function createResolvedIteratorResultChunk(response, value, done) {
        return new ReactPromise("resolved_model", (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}", _defineProperty({
            id: -1
        }, RESPONSE_SYMBOL, response));
    }
    function resolveIteratorResultChunk(response, chunk, value, done) {
        resolveModelChunk(response, chunk, (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}", -1);
    }
    function loadServerReference$1(response, metaData, parentObject, key) {
        function reject(error) {
            var rejectListeners = blockedPromise.reason, erroredPromise = blockedPromise;
            erroredPromise.status = "rejected";
            erroredPromise.value = null;
            erroredPromise.reason = error;
            null !== rejectListeners && rejectChunk(response, rejectListeners, error);
            rejectReference(response, handler, error);
        }
        var id = metaData.id;
        if ("string" !== typeof id || "then" === key) return null;
        var cachedPromise = metaData.$$promise;
        if (void 0 !== cachedPromise) {
            if ("fulfilled" === cachedPromise.status) return cachedPromise = cachedPromise.value, "__proto__" === key ? null : parentObject[key] = cachedPromise;
            initializingHandler ? (id = initializingHandler, id.deps++) : id = initializingHandler = {
                chunk: null,
                value: null,
                reason: null,
                deps: 1,
                errored: !1
            };
            cachedPromise.then(resolveReference.bind(null, response, id, parentObject, key), rejectReference.bind(null, response, id));
            return null;
        }
        var blockedPromise = new ReactPromise("blocked", null, null);
        metaData.$$promise = blockedPromise;
        var serverReference = resolveServerReference(response._bundlerConfig, id);
        cachedPromise = metaData.bound;
        if (id = preloadModule(serverReference)) cachedPromise instanceof ReactPromise && (id = Promise.all([
            id,
            cachedPromise
        ]));
        else if (cachedPromise instanceof ReactPromise) id = Promise.resolve(cachedPromise);
        else return cachedPromise = requireModule(serverReference), id = blockedPromise, id.status = "fulfilled", id.value = cachedPromise, id.reason = null, cachedPromise;
        if (initializingHandler) {
            var handler = initializingHandler;
            handler.deps++;
        } else handler = initializingHandler = {
            chunk: null,
            value: null,
            reason: null,
            deps: 1,
            errored: !1
        };
        id.then(function() {
            var resolvedValue = requireModule(serverReference);
            if (metaData.bound) {
                var promiseValue = metaData.bound.value;
                promiseValue = isArrayImpl(promiseValue) ? promiseValue.slice(0) : [];
                if (promiseValue.length > MAX_BOUND_ARGS) {
                    reject(Error("Server Function has too many bound arguments. Received " + promiseValue.length + " but the limit is " + MAX_BOUND_ARGS + "."));
                    return;
                }
                promiseValue.unshift(null);
                resolvedValue = resolvedValue.bind.apply(resolvedValue, promiseValue);
            }
            promiseValue = blockedPromise.value;
            var initializedPromise = blockedPromise;
            initializedPromise.status = "fulfilled";
            initializedPromise.value = resolvedValue;
            initializedPromise.reason = null;
            null !== promiseValue && wakeChunk(response, promiseValue, resolvedValue, initializedPromise);
            resolveReference(response, handler, parentObject, key, resolvedValue);
        }, reject);
        return null;
    }
    function reviveModel(response, parentObj, parentKey, value, reference, arrayRoot) {
        if ("string" === typeof value) return parseModelString(response, parentObj, parentKey, value, reference, arrayRoot);
        if ("object" === typeof value && null !== value) if (void 0 !== reference && void 0 !== response._temporaryReferences && response._temporaryReferences.set(value, reference), isArrayImpl(value)) {
            if (null === arrayRoot) {
                var childContext = {
                    count: 0,
                    fork: !1
                };
                response._rootArrayContexts.set(value, childContext);
            } else childContext = arrayRoot;
            1 < value.length && (childContext.fork = !0);
            bumpArrayCount(childContext, value.length + 1, response);
            for(parentObj = 0; parentObj < value.length; parentObj++)value[parentObj] = reviveModel(response, value, "" + parentObj, value[parentObj], void 0 !== reference ? reference + ":" + parentObj : void 0, childContext);
        } else for(childContext in value)hasOwnProperty.call(value, childContext) && ("__proto__" === childContext ? delete value[childContext] : (parentObj = void 0 !== reference && -1 === childContext.indexOf(":") ? reference + ":" + childContext : void 0, parentObj = reviveModel(response, value, childContext, value[childContext], parentObj, null), void 0 !== parentObj ? value[childContext] = parentObj : delete value[childContext]));
        return value;
    }
    function bumpArrayCount(arrayContext, slots, response) {
        if ((arrayContext.count += slots) > response._arraySizeLimit && arrayContext.fork) throw Error("Maximum array nesting exceeded. Large nested arrays can be dangerous. Try adding intermediate objects.");
    }
    function initializeModelChunk(chunk) {
        var prevHandler = initializingHandler;
        initializingHandler = null;
        var _chunk$reason = chunk.reason, response = _chunk$reason[RESPONSE_SYMBOL];
        _chunk$reason = _chunk$reason.id;
        _chunk$reason = -1 === _chunk$reason ? void 0 : _chunk$reason.toString(16);
        var resolvedModel = chunk.value;
        chunk.status = "blocked";
        chunk.value = null;
        chunk.reason = null;
        try {
            var rawModel = JSON.parse(resolvedModel);
            resolvedModel = {
                count: 0,
                fork: !1
            };
            var value = reviveModel(response, {
                "": rawModel
            }, "", rawModel, _chunk$reason, resolvedModel), resolveListeners = chunk.value;
            if (null !== resolveListeners) for(chunk.value = null, chunk.reason = null, rawModel = 0; rawModel < resolveListeners.length; rawModel++){
                var listener = resolveListeners[rawModel];
                "function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, resolvedModel);
            }
            if (null !== initializingHandler) {
                if (initializingHandler.errored) throw initializingHandler.reason;
                if (0 < initializingHandler.deps) {
                    initializingHandler.value = value;
                    initializingHandler.reason = resolvedModel;
                    initializingHandler.chunk = chunk;
                    return;
                }
            }
            chunk.status = "fulfilled";
            chunk.value = value;
            chunk.reason = resolvedModel;
        } catch (error) {
            chunk.status = "rejected", chunk.reason = error;
        } finally{
            initializingHandler = prevHandler;
        }
    }
    function reportGlobalError(response, error) {
        response._closed = !0;
        response._closedReason = error;
        response._chunks.forEach(function(chunk) {
            "pending" === chunk.status ? triggerErrorOnChunk(response, chunk, error) : "fulfilled" === chunk.status && null !== chunk.reason && (chunk = chunk.reason, "function" === typeof chunk.error && chunk.error(error));
        });
    }
    function getChunk(response, id) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk || (chunk = response._formData.data.get(response._prefix + id), chunk = "string" === typeof chunk ? new ReactPromise("resolved_model", chunk, _defineProperty({
            id: id
        }, RESPONSE_SYMBOL, response)) : response._closed ? new ReactPromise("rejected", null, response._closedReason) : new ReactPromise("pending", null, null), chunks.set(id, chunk));
        return chunk;
    }
    function fulfillReference(response, reference, value, arrayRoot) {
        var handler = reference.handler, parentObject = reference.parentObject, key = reference.key, map = reference.map, path = reference.path;
        try {
            for(var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < path.length; i++){
                var name = path[i];
                if ("object" !== typeof value || null === value || getPrototypeOf(value) !== ObjectPrototype && getPrototypeOf(value) !== ArrayPrototype || !hasOwnProperty.call(value, name)) throw Error("Invalid reference.");
                value = value[name];
                if (isArrayImpl(value)) localLength = 0, arrayRoot = rootArrayContexts.get(value) || arrayRoot;
                else if (arrayRoot = null, "string" === typeof value) localLength = value.length;
                else if ("bigint" === typeof value) {
                    var n = Math.abs(Number(value));
                    localLength = 0 === n ? 1 : Math.floor(Math.log10(n)) + 1;
                } else localLength = ArrayBuffer.isView(value) ? value.byteLength : 0;
            }
            var resolvedValue = map(response, value, parentObject, key);
            var referenceArrayRoot = reference.arrayRoot;
            null !== referenceArrayRoot && (null !== arrayRoot ? (arrayRoot.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, arrayRoot.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
        } catch (error) {
            rejectReference(response, handler, error);
            return;
        }
        resolveReference(response, handler, parentObject, key, resolvedValue);
    }
    function resolveReference(response, handler, parentObject, key, resolvedValue) {
        "__proto__" !== key && (parentObject[key] = resolvedValue);
        "" === key && null === handler.value && (handler.value = resolvedValue);
        handler.deps--;
        0 === handler.deps && (parentObject = handler.chunk, null !== parentObject && "blocked" === parentObject.status && (key = parentObject.value, parentObject.status = "fulfilled", parentObject.value = handler.value, parentObject.reason = handler.reason, null !== key && wakeChunk(response, key, handler.value, parentObject)));
    }
    function rejectReference(response, handler, error) {
        handler.errored || (handler.errored = !0, handler.value = null, handler.reason = error, handler = handler.chunk, null !== handler && "blocked" === handler.status && triggerErrorOnChunk(response, handler, error));
    }
    function getOutlinedModel(response, reference, parentObject, key, referenceArrayRoot, map) {
        reference = reference.split(":");
        var id = parseInt(reference[0], 16), chunk = getChunk(response, id);
        switch(chunk.status){
            case "resolved_model":
                initializeModelChunk(chunk);
        }
        switch(chunk.status){
            case "fulfilled":
                id = chunk.value;
                chunk = chunk.reason;
                if (null !== chunk && "error" in chunk) throw Error("Expected an initialized chunk but got an initialized stream chunk instead. This payload may have been submitted by an older version of React.");
                for(var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < reference.length; i++){
                    localLength = reference[i];
                    if ("object" !== typeof id || null === id || getPrototypeOf(id) !== ObjectPrototype && getPrototypeOf(id) !== ArrayPrototype || !hasOwnProperty.call(id, localLength)) throw Error("Invalid reference.");
                    id = id[localLength];
                    isArrayImpl(id) ? (localLength = 0, chunk = rootArrayContexts.get(id) || chunk) : (chunk = null, "string" === typeof id ? localLength = id.length : "bigint" === typeof id ? (localLength = Math.abs(Number(id)), localLength = 0 === localLength ? 1 : Math.floor(Math.log10(localLength)) + 1) : localLength = ArrayBuffer.isView(id) ? id.byteLength : 0);
                }
                parentObject = map(response, id, parentObject, key);
                null !== referenceArrayRoot && (null !== chunk ? (chunk.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, chunk.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
                return parentObject;
            case "blocked":
                return initializingHandler ? (response = initializingHandler, response.deps++) : response = initializingHandler = {
                    chunk: null,
                    value: null,
                    reason: null,
                    deps: 1,
                    errored: !1
                }, referenceArrayRoot = {
                    handler: response,
                    parentObject: parentObject,
                    key: key,
                    map: map,
                    path: reference,
                    arrayRoot: referenceArrayRoot
                }, null === chunk.value ? chunk.value = [
                    referenceArrayRoot
                ] : chunk.value.push(referenceArrayRoot), null === chunk.reason ? chunk.reason = [
                    referenceArrayRoot
                ] : chunk.reason.push(referenceArrayRoot), null;
            case "pending":
                throw Error("Invalid forward reference.");
            default:
                return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = null, initializingHandler.reason = chunk.reason) : initializingHandler = {
                    chunk: null,
                    value: null,
                    reason: chunk.reason,
                    deps: 0,
                    errored: !0
                }, null;
        }
    }
    function createMap(response, model) {
        if (!isArrayImpl(model)) throw Error("Invalid Map initializer.");
        if (!0 === model.$$consumed) throw Error("Already initialized Map.");
        model.$$consumed = !0;
        return new Map(model);
    }
    function createSet(response, model) {
        if (!isArrayImpl(model)) throw Error("Invalid Set initializer.");
        if (!0 === model.$$consumed) throw Error("Already initialized Set.");
        model.$$consumed = !0;
        return new Set(model);
    }
    function extractIterator(response, model) {
        if (!isArrayImpl(model)) throw Error("Invalid Iterator initializer.");
        if (!0 === model.$$consumed) throw Error("Already initialized Iterator.");
        model.$$consumed = !0;
        return model[Symbol.iterator]();
    }
    function createModel(response, model, parentObject, key) {
        return "then" === key && "function" === typeof model ? null : model;
    }
    function parseTypedArray(response, reference, constructor, bytesPerElement, parentObject, parentKey, referenceArrayRoot) {
        function reject(error) {
            if (!handler.errored) {
                handler.errored = !0;
                handler.value = null;
                handler.reason = error;
                var chunk = handler.chunk;
                null !== chunk && "blocked" === chunk.status && triggerErrorOnChunk(response, chunk, error);
            }
        }
        reference = parseInt(reference.slice(2), 16);
        var key = response._prefix + reference;
        bytesPerElement = response._chunks;
        if (bytesPerElement.has(reference)) throw Error("Already initialized typed array.");
        bytesPerElement.set(reference, new ReactPromise("rejected", null, Error("Already initialized typed array.")));
        reference = response._formData.data.get(key).arrayBuffer();
        if (initializingHandler) {
            var handler = initializingHandler;
            handler.deps++;
        } else handler = initializingHandler = {
            chunk: null,
            value: null,
            reason: null,
            deps: 1,
            errored: !1
        };
        reference.then(function(buffer) {
            try {
                null !== referenceArrayRoot && bumpArrayCount(referenceArrayRoot, buffer.byteLength, response);
                var resolvedValue = constructor === ArrayBuffer ? buffer : new constructor(buffer);
                "__proto__" !== key && (parentObject[parentKey] = resolvedValue);
                "" === parentKey && null === handler.value && (handler.value = resolvedValue);
            } catch (x) {
                reject(x);
                return;
            }
            handler.deps--;
            0 === handler.deps && (buffer = handler.chunk, null !== buffer && "blocked" === buffer.status && (resolvedValue = buffer.value, buffer.status = "fulfilled", buffer.value = handler.value, buffer.reason = null, null !== resolvedValue && wakeChunk(response, resolvedValue, handler.value, buffer)));
        }, reject);
        return null;
    }
    function resolveStream(response, id, stream, controller) {
        var chunks = response._chunks;
        stream = new ReactPromise("fulfilled", stream, controller);
        chunks.set(id, stream);
        response = response._formData.data.getAll(response._prefix + id);
        for(id = 0; id < response.length; id++)chunks = response[id], "string" === typeof chunks && ("C" === chunks[0] ? controller.close("C" === chunks ? '"$undefined"' : chunks.slice(1)) : controller.enqueueModel(chunks));
    }
    function parseReadableStream(response, reference, type) {
        function enqueue(value) {
            "bytes" !== type || ArrayBuffer.isView(value) ? controller.enqueue(value) : flightController.error(Error("Invalid data for bytes stream."));
        }
        reference = parseInt(reference.slice(2), 16);
        if (response._chunks.has(reference)) throw Error("Already initialized stream.");
        var controller = null, closed = !1, stream = new ReadableStream({
            type: type,
            start: function(c) {
                controller = c;
            }
        }), previousBlockedChunk = null, flightController = {
            enqueueModel: function(json) {
                if (null === previousBlockedChunk) {
                    var chunk = new ReactPromise("resolved_model", json, _defineProperty({
                        id: -1
                    }, RESPONSE_SYMBOL, response));
                    initializeModelChunk(chunk);
                    "fulfilled" === chunk.status ? enqueue(chunk.value) : (chunk.then(enqueue, flightController.error), previousBlockedChunk = chunk);
                } else {
                    chunk = previousBlockedChunk;
                    var _chunk = new ReactPromise("pending", null, null);
                    _chunk.then(enqueue, flightController.error);
                    previousBlockedChunk = _chunk;
                    chunk.then(function() {
                        previousBlockedChunk === _chunk && (previousBlockedChunk = null);
                        resolveModelChunk(response, _chunk, json, -1);
                    });
                }
            },
            close: function() {
                if (!closed) if (closed = !0, null === previousBlockedChunk) controller.close();
                else {
                    var blockedChunk = previousBlockedChunk;
                    previousBlockedChunk = null;
                    blockedChunk.then(function() {
                        return controller.close();
                    });
                }
            },
            error: function(error) {
                if (!closed) if (closed = !0, null === previousBlockedChunk) controller.error(error);
                else {
                    var blockedChunk = previousBlockedChunk;
                    previousBlockedChunk = null;
                    blockedChunk.then(function() {
                        return controller.error(error);
                    });
                }
            }
        };
        resolveStream(response, reference, stream, flightController);
        return stream;
    }
    function FlightIterator(next) {
        this.next = next;
    }
    function parseAsyncIterable(response, reference, iterator) {
        reference = parseInt(reference.slice(2), 16);
        if (response._chunks.has(reference)) throw Error("Already initialized stream.");
        var buffer = [], closed = !1, nextWriteIndex = 0, iterable = _defineProperty({}, ASYNC_ITERATOR, function() {
            var nextReadIndex = 0;
            return new FlightIterator(function(arg) {
                if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
                if (nextReadIndex === buffer.length) {
                    if (closed) return new ReactPromise("fulfilled", {
                        done: !0,
                        value: void 0
                    }, null);
                    buffer[nextReadIndex] = new ReactPromise("pending", null, null);
                }
                return buffer[nextReadIndex++];
            });
        });
        iterator = iterator ? iterable[ASYNC_ITERATOR]() : iterable;
        resolveStream(response, reference, iterator, {
            enqueueModel: function(value) {
                nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !1) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !1);
                nextWriteIndex++;
            },
            close: function(value) {
                if (!closed) for(closed = !0, nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !0) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !0), nextWriteIndex++; nextWriteIndex < buffer.length;)resolveIteratorResultChunk(response, buffer[nextWriteIndex++], '"$undefined"', !0);
            },
            error: function(error) {
                if (!closed) for(closed = !0, nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = new ReactPromise("pending", null, null)); nextWriteIndex < buffer.length;)triggerErrorOnChunk(response, buffer[nextWriteIndex++], error);
            }
        });
        return iterator;
    }
    function parseModelString(response, obj, key, value, reference, arrayRoot) {
        if ("$" === value[0]) {
            switch(value[1]){
                case "$":
                    return null !== arrayRoot && bumpArrayCount(arrayRoot, value.length - 1, response), value.slice(1);
                case "@":
                    return obj = parseInt(value.slice(2), 16), getChunk(response, obj);
                case "h":
                    return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, loadServerReference$1);
                case "T":
                    if (void 0 === reference || void 0 === response._temporaryReferences) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
                    return createTemporaryReference(response._temporaryReferences, reference);
                case "Q":
                    return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createMap);
                case "W":
                    return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createSet);
                case "K":
                    key = value.slice(2);
                    obj = response._prefix + "_";
                    key = obj + key + "_";
                    arrayRoot = new FormData();
                    for(response = response._formData;;){
                        value = response;
                        reference = value.keys;
                        null === reference && (reference = value.keys = Array.from(value.data.keys()), value.keyPointer = 0);
                        value = reference[value.keyPointer];
                        if (void 0 === value) break;
                        if (value.startsWith(key)) {
                            reference = response.data.getAll(value);
                            for(var referencedFormDataKey = value.slice(key.length), i = 0; i < reference.length; i++)arrayRoot.append(referencedFormDataKey, reference[i]);
                            reference = response;
                            reference.data.delete(value);
                            reference.keyPointer++;
                        } else if (value.startsWith(obj)) break;
                        else response.keyPointer++;
                    }
                    return arrayRoot;
                case "i":
                    return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, extractIterator);
                case "I":
                    return Infinity;
                case "-":
                    return "$-0" === value ? -0 : -Infinity;
                case "N":
                    return NaN;
                case "u":
                    return;
                case "D":
                    return new Date(Date.parse(value.slice(2)));
                case "n":
                    obj = value.slice(2);
                    if (obj.length > MAX_BIGINT_DIGITS) throw Error("BigInt is too large. Received " + obj.length + " digits but the limit is " + MAX_BIGINT_DIGITS + ".");
                    null !== arrayRoot && bumpArrayCount(arrayRoot, obj.length, response);
                    return BigInt(obj);
                case "A":
                    return parseTypedArray(response, value, ArrayBuffer, 1, obj, key, arrayRoot);
                case "O":
                    return parseTypedArray(response, value, Int8Array, 1, obj, key, arrayRoot);
                case "o":
                    return parseTypedArray(response, value, Uint8Array, 1, obj, key, arrayRoot);
                case "U":
                    return parseTypedArray(response, value, Uint8ClampedArray, 1, obj, key, arrayRoot);
                case "S":
                    return parseTypedArray(response, value, Int16Array, 2, obj, key, arrayRoot);
                case "s":
                    return parseTypedArray(response, value, Uint16Array, 2, obj, key, arrayRoot);
                case "L":
                    return parseTypedArray(response, value, Int32Array, 4, obj, key, arrayRoot);
                case "l":
                    return parseTypedArray(response, value, Uint32Array, 4, obj, key, arrayRoot);
                case "G":
                    return parseTypedArray(response, value, Float32Array, 4, obj, key, arrayRoot);
                case "g":
                    return parseTypedArray(response, value, Float64Array, 8, obj, key, arrayRoot);
                case "M":
                    return parseTypedArray(response, value, BigInt64Array, 8, obj, key, arrayRoot);
                case "m":
                    return parseTypedArray(response, value, BigUint64Array, 8, obj, key, arrayRoot);
                case "V":
                    return parseTypedArray(response, value, DataView, 1, obj, key, arrayRoot);
                case "B":
                    obj = parseInt(value.slice(2), 16);
                    response = response._formData.data.get(response._prefix + obj);
                    if (!(response instanceof Blob)) throw Error("Referenced Blob is not a Blob.");
                    return response;
                case "R":
                    return parseReadableStream(response, value, void 0);
                case "r":
                    return parseReadableStream(response, value, "bytes");
                case "X":
                    return parseAsyncIterable(response, value, !1);
                case "x":
                    return parseAsyncIterable(response, value, !0);
            }
            value = value.slice(1);
            return getOutlinedModel(response, value, obj, key, arrayRoot, createModel);
        }
        null !== arrayRoot && bumpArrayCount(arrayRoot, value.length, response);
        return value;
    }
    function createResponse(bundlerConfig, formFieldPrefix, temporaryReferences) {
        var backingFormData = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new FormData(), arraySizeLimit = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1e6, chunks = new Map();
        return {
            _bundlerConfig: bundlerConfig,
            _prefix: formFieldPrefix,
            _formData: {
                data: backingFormData,
                keyPointer: -1,
                keys: null
            },
            _chunks: chunks,
            _closed: !1,
            _closedReason: null,
            _temporaryReferences: temporaryReferences,
            _rootArrayContexts: new WeakMap(),
            _arraySizeLimit: arraySizeLimit
        };
    }
    function close(response) {
        reportGlobalError(response, Error("Connection closed."));
    }
    function loadServerReference(bundlerConfig, metaData) {
        var id = metaData.id;
        if ("string" !== typeof id) return null;
        var serverReference = resolveServerReference(bundlerConfig, id);
        bundlerConfig = preloadModule(serverReference);
        metaData = metaData.bound;
        return metaData instanceof Promise ? Promise.all([
            metaData,
            bundlerConfig
        ]).then(function(_ref) {
            _ref = _ref[0];
            var fn = requireModule(serverReference);
            if (_ref.length > MAX_BOUND_ARGS) throw Error("Server Function has too many bound arguments. Received " + _ref.length + " but the limit is " + MAX_BOUND_ARGS + ".");
            return fn.bind.apply(fn, [
                null
            ].concat(_ref));
        }) : bundlerConfig ? Promise.resolve(bundlerConfig).then(function() {
            return requireModule(serverReference);
        }) : Promise.resolve(requireModule(serverReference));
    }
    function decodeBoundActionMetaData(body, serverManifest, formFieldPrefix, arraySizeLimit) {
        body = createResponse(serverManifest, formFieldPrefix, void 0, body, arraySizeLimit);
        close(body);
        body = getChunk(body, 0);
        body.then(function() {});
        if ("fulfilled" !== body.status) throw body.reason;
        return body.value;
    }
    function startReadingFromDebugChannelReadableStream(request$jscomp$0, stream) {
        function progress(_ref) {
            var done = _ref.done, buffer = _ref.value;
            _ref = stringBuffer;
            done ? (buffer = new Uint8Array(0), buffer = stringDecoder.decode(buffer)) : buffer = stringDecoder.decode(buffer, decoderOptions);
            stringBuffer = _ref + buffer;
            _ref = stringBuffer.split("\n");
            for(buffer = 0; buffer < _ref.length - 1; buffer++){
                var request = request$jscomp$0, message = _ref[buffer], deferredDebugObjects = request.deferredDebugObjects;
                if (null === deferredDebugObjects) throw Error("resolveDebugMessage/closeDebugChannel should not be called for a Request that wasn't kept alive. This is a bug in React.");
                if ("" === message) closeDebugChannel(request);
                else {
                    var command = message.charCodeAt(0);
                    message = message.slice(2).split(",").map(fromHex);
                    switch(command){
                        case 82:
                            for(command = 0; command < message.length; command++){
                                var id = message[command], retainedValue = deferredDebugObjects.retained.get(id);
                                void 0 !== retainedValue && (request.pendingDebugChunks--, deferredDebugObjects.retained.delete(id), deferredDebugObjects.existing.delete(retainedValue), enqueueFlush(request));
                            }
                            break;
                        case 81:
                            for(command = 0; command < message.length; command++)id = message[command], retainedValue = deferredDebugObjects.retained.get(id), void 0 !== retainedValue && (deferredDebugObjects.retained.delete(id), deferredDebugObjects.existing.delete(retainedValue), emitOutlinedDebugModelChunk(request, id, {
                                objectLimit: 10
                            }, retainedValue), enqueueFlush(request));
                            break;
                        case 80:
                            for(command = 0; command < message.length; command++)id = message[command], retainedValue = deferredDebugObjects.retained.get(id), void 0 !== retainedValue && (deferredDebugObjects.retained.delete(id), emitRequestedDebugThenable(request, id, {
                                objectLimit: 10
                            }, retainedValue));
                            break;
                        default:
                            throw Error("Unknown command. The debugChannel was not wired up properly.");
                    }
                }
            }
            stringBuffer = _ref[_ref.length - 1];
            if (done) closeDebugChannel(request$jscomp$0);
            else return reader.read().then(progress).catch(error);
        }
        function error(e) {
            abort(request$jscomp$0, Error("Lost connection to the Debug Channel.", {
                cause: e
            }));
        }
        var reader = stream.getReader(), stringDecoder = new TextDecoder(), stringBuffer = "";
        reader.read().then(progress).catch(error);
    }
    var ReactDOM = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/react-dom.react-server.js [app-edge-rsc] (ecmascript)"), React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/react.react-server.js [app-edge-rsc] (ecmascript)"), REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, ASYNC_ITERATOR = Symbol.asyncIterator, REACT_OPTIMISTIC_KEY = Symbol.for("react.optimistic_key"), LocalPromise = Promise, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : function(callback) {
        LocalPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
    }, currentView = null, writtenBytes = 0, textEncoder = new TextEncoder(), CLIENT_REFERENCE_TAG$1 = Symbol.for("react.client.reference"), SERVER_REFERENCE_TAG = Symbol.for("react.server.reference"), FunctionBind = Function.prototype.bind, ArraySlice = Array.prototype.slice, serverReferenceToString = {
        value: function() {
            return "function () { [omitted code] }";
        },
        configurable: !0,
        writable: !0
    }, PROMISE_PROTOTYPE = Promise.prototype, deepProxyHandlers = {
        get: function(target, name, receiver) {
            switch(name){
                case "$$typeof":
                    return target.$$typeof;
                case "$$id":
                    return target.$$id;
                case "$$async":
                    return target.$$async;
                case "name":
                    return target.name;
                case "displayName":
                    return;
                case "defaultProps":
                    return;
                case "_debugInfo":
                    return;
                case "toJSON":
                    return;
                case Symbol.toPrimitive:
                    return Object.prototype[Symbol.toPrimitive];
                case Symbol.toStringTag:
                    return Object.prototype[Symbol.toStringTag];
                case "Provider":
                    return receiver;
                case "then":
                    throw Error("Cannot await or return from a thenable. You cannot await a client module from a server component.");
            }
            throw Error("Cannot access " + (String(target.name) + "." + String(name)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
        },
        set: function() {
            throw Error("Cannot assign to a client module from a server module.");
        }
    }, proxyHandlers$1 = {
        get: function(target, name) {
            return getReference(target, name);
        },
        getOwnPropertyDescriptor: function(target, name) {
            var descriptor = Object.getOwnPropertyDescriptor(target, name);
            descriptor || (descriptor = {
                value: getReference(target, name),
                writable: !1,
                configurable: !1,
                enumerable: !1
            }, Object.defineProperty(target, name, descriptor));
            return descriptor;
        },
        getPrototypeOf: function() {
            return PROMISE_PROTOTYPE;
        },
        set: function() {
            throw Error("Cannot assign to a client module from a server module.");
        }
    }, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
        f: previousDispatcher.f,
        r: previousDispatcher.r,
        D: function(href) {
            if ("string" === typeof href && href) {
                var request = resolveRequest();
                if (request) {
                    var hints = request.hints, key = "D|" + href;
                    hints.has(key) || (hints.add(key), emitHint(request, "D", href));
                } else previousDispatcher.D(href);
            }
        },
        C: function(href, crossOrigin) {
            if ("string" === typeof href) {
                var request = resolveRequest();
                if (request) {
                    var hints = request.hints, key = "C|" + (null == crossOrigin ? "null" : crossOrigin) + "|" + href;
                    hints.has(key) || (hints.add(key), "string" === typeof crossOrigin ? emitHint(request, "C", [
                        href,
                        crossOrigin
                    ]) : emitHint(request, "C", href));
                } else previousDispatcher.C(href, crossOrigin);
            }
        },
        L: preload,
        m: preloadModule$1,
        X: function(src, options) {
            if ("string" === typeof src) {
                var request = resolveRequest();
                if (request) {
                    var hints = request.hints, key = "X|" + src;
                    if (hints.has(key)) return;
                    hints.add(key);
                    return (options = trimOptions(options)) ? emitHint(request, "X", [
                        src,
                        options
                    ]) : emitHint(request, "X", src);
                }
                previousDispatcher.X(src, options);
            }
        },
        S: function(href, precedence, options) {
            if ("string" === typeof href) {
                var request = resolveRequest();
                if (request) {
                    var hints = request.hints, key = "S|" + href;
                    if (hints.has(key)) return;
                    hints.add(key);
                    return (options = trimOptions(options)) ? emitHint(request, "S", [
                        href,
                        "string" === typeof precedence ? precedence : 0,
                        options
                    ]) : "string" === typeof precedence ? emitHint(request, "S", [
                        href,
                        precedence
                    ]) : emitHint(request, "S", href);
                }
                previousDispatcher.S(href, precedence, options);
            }
        },
        M: function(src, options) {
            if ("string" === typeof src) {
                var request = resolveRequest();
                if (request) {
                    var hints = request.hints, key = "M|" + src;
                    if (hints.has(key)) return;
                    hints.add(key);
                    return (options = trimOptions(options)) ? emitHint(request, "M", [
                        src,
                        options
                    ]) : emitHint(request, "M", src);
                }
                previousDispatcher.M(src, options);
            }
        }
    };
    var framesToSkip = 0, collectedStackTrace = null, identifierRegExp = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/, frameRegExp = /^ {3} at (?:(.+) \((?:(.+):(\d+):(\d+)|<anonymous>)\)|(?:async )?(.+):(\d+):(\d+)|<anonymous>)$/, stackTraceCache = new WeakMap(), supportsRequestStorage = "function" === typeof AsyncLocalStorage, requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null, supportsComponentStorage = supportsRequestStorage, componentStorage = supportsComponentStorage ? new AsyncLocalStorage() : null, TEMPORARY_REFERENCE_TAG = Symbol.for("react.temporary.reference"), proxyHandlers = {
        get: function(target, name, receiver) {
            switch(name){
                case "$$typeof":
                    return target.$$typeof;
                case "name":
                    return;
                case "displayName":
                    return;
                case "defaultProps":
                    return;
                case "_debugInfo":
                    return;
                case "toJSON":
                    return;
                case Symbol.toPrimitive:
                    return Object.prototype[Symbol.toPrimitive];
                case Symbol.toStringTag:
                    return Object.prototype[Symbol.toStringTag];
                case "Provider":
                    return receiver;
                case "then":
                    return;
            }
            throw Error("Cannot access " + String(name) + " on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.");
        },
        set: function() {
            throw Error("Cannot assign to a temporary client reference from a server module.");
        }
    }, SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), suspendedThenable = null, currentRequest$1 = null, thenableIndexCounter = 0, thenableState = null, currentComponentDebugInfo = null, HooksDispatcher = {
        readContext: unsupportedContext,
        use: function(usable) {
            if (null !== usable && "object" === typeof usable || "function" === typeof usable) {
                if ("function" === typeof usable.then) {
                    var index = thenableIndexCounter;
                    thenableIndexCounter += 1;
                    null === thenableState && (thenableState = []);
                    return trackUsedThenable(thenableState, usable, index);
                }
                usable.$$typeof === REACT_CONTEXT_TYPE && unsupportedContext();
            }
            if (isClientReference(usable)) {
                if (null != usable.value && usable.value.$$typeof === REACT_CONTEXT_TYPE) throw Error("Cannot read a Client Context from a Server Component.");
                throw Error("Cannot use() an already resolved Client Reference.");
            }
            throw Error("An unsupported type was passed to use(): " + String(usable));
        },
        useCallback: function(callback) {
            return callback;
        },
        useContext: unsupportedContext,
        useEffect: unsupportedHook,
        useImperativeHandle: unsupportedHook,
        useLayoutEffect: unsupportedHook,
        useInsertionEffect: unsupportedHook,
        useMemo: function(nextCreate) {
            return nextCreate();
        },
        useReducer: unsupportedHook,
        useRef: unsupportedHook,
        useState: unsupportedHook,
        useDebugValue: function() {},
        useDeferredValue: unsupportedHook,
        useTransition: unsupportedHook,
        useSyncExternalStore: unsupportedHook,
        useId: function() {
            if (null === currentRequest$1) throw Error("useId can only be used while React is rendering");
            var id = currentRequest$1.identifierCount++;
            return "_" + currentRequest$1.identifierPrefix + "S_" + id.toString(32) + "_";
        },
        useHostTransitionStatus: unsupportedHook,
        useFormState: unsupportedHook,
        useActionState: unsupportedHook,
        useOptimistic: unsupportedHook,
        useMemoCache: function(size) {
            for(var data = Array(size), i = 0; i < size; i++)data[i] = REACT_MEMO_CACHE_SENTINEL;
            return data;
        },
        useCacheRefresh: function() {
            return unsupportedRefresh;
        },
        useEffectEvent: unsupportedHook
    }, currentOwner = null, DefaultAsyncDispatcher = {
        getCacheForType: function(resourceType) {
            var cache = (cache = resolveRequest()) ? cache.cache : new Map();
            var entry = cache.get(resourceType);
            void 0 === entry && (entry = resourceType(), cache.set(resourceType, entry));
            return entry;
        },
        cacheSignal: function() {
            var request = resolveRequest();
            return request ? request.cacheController.signal : null;
        }
    };
    DefaultAsyncDispatcher.getOwner = resolveOwner;
    var ReactSharedInternalsServer = React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    if (!ReactSharedInternalsServer) throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
    var prefix, suffix;
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var lastResetTime = 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        var getCurrentTime = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date;
        getCurrentTime = function() {
            return localDate.now();
        };
    }
    var callComponent = {
        react_stack_bottom_frame: function(Component, props, componentDebugInfo) {
            currentOwner = componentDebugInfo;
            try {
                return Component(props, void 0);
            } finally{
                currentOwner = null;
            }
        }
    }, callComponentInDEV = callComponent.react_stack_bottom_frame.bind(callComponent), callLazyInit = {
        react_stack_bottom_frame: function(lazy) {
            var init = lazy._init;
            return init(lazy._payload);
        }
    }, callLazyInitInDEV = callLazyInit.react_stack_bottom_frame.bind(callLazyInit), callIterator = {
        react_stack_bottom_frame: function(iterator, progress, error) {
            iterator.next().then(progress, error);
        }
    }, callIteratorInDEV = callIterator.react_stack_bottom_frame.bind(callIterator), isArrayImpl = Array.isArray, getPrototypeOf = Object.getPrototypeOf, jsxPropsParents = new WeakMap(), jsxChildrenParents = new WeakMap(), CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference"), hasOwnProperty = Object.prototype.hasOwnProperty, doNotLimit = new WeakSet();
    "object" === typeof console && null !== console && (patchConsole(console, "assert"), patchConsole(console, "debug"), patchConsole(console, "dir"), patchConsole(console, "dirxml"), patchConsole(console, "error"), patchConsole(console, "group"), patchConsole(console, "groupCollapsed"), patchConsole(console, "groupEnd"), patchConsole(console, "info"), patchConsole(console, "log"), patchConsole(console, "table"), patchConsole(console, "trace"), patchConsole(console, "warn"));
    var ObjectPrototype$1 = Object.prototype, stringify = JSON.stringify, PENDING$1 = 0, COMPLETED = 1, ABORTED = 3, ERRORED$1 = 4, RENDERING = 5, __PROTO__$1 = "__proto__", OPENING = 10, ABORTING = 12, CLOSING = 13, CLOSED = 14, PRERENDER = 21, currentRequest = null, canEmitDebugInfo = !1, serializedSize = 0, MAX_ROW_SIZE = 3200, modelRoot = !1, CONSTRUCTOR_MARKER = Symbol(), debugModelRoot = null, debugNoOutline = null, emptyRoot = {}, decoderOptions = {
        stream: !0
    }, instrumentedChunks = new WeakSet(), loadedChunks = new WeakSet(), RESPONSE_SYMBOL = Symbol();
    ReactPromise.prototype = Object.create(Promise.prototype);
    ReactPromise.prototype.then = function(resolve, reject) {
        switch(this.status){
            case "resolved_model":
                initializeModelChunk(this);
        }
        switch(this.status){
            case "fulfilled":
                if ("function" === typeof resolve) {
                    for(var inspectedValue = this.value, cycleProtection = 0, visited = new Set(); inspectedValue instanceof ReactPromise;){
                        cycleProtection++;
                        if (inspectedValue === this || visited.has(inspectedValue) || 1e3 < cycleProtection) {
                            "function" === typeof reject && reject(Error("Cannot have cyclic thenables."));
                            return;
                        }
                        visited.add(inspectedValue);
                        if ("fulfilled" === inspectedValue.status) inspectedValue = inspectedValue.value;
                        else break;
                    }
                    resolve(this.value);
                }
                break;
            case "pending":
            case "blocked":
                "function" === typeof resolve && (null === this.value && (this.value = []), this.value.push(resolve));
                "function" === typeof reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
                break;
            default:
                "function" === typeof reject && reject(this.reason);
        }
    };
    var ObjectPrototype = Object.prototype, ArrayPrototype = Array.prototype, initializingHandler = null;
    FlightIterator.prototype = {};
    FlightIterator.prototype[ASYNC_ITERATOR] = function() {
        return this;
    };
    var MAX_BIGINT_DIGITS = 300, MAX_BOUND_ARGS = 1e3;
    exports.createClientModuleProxy = function(moduleId) {
        moduleId = registerClientReferenceImpl({}, moduleId, !1);
        return new Proxy(moduleId, proxyHandlers$1);
    };
    exports.createTemporaryReferenceSet = function() {
        return new WeakMap();
    };
    exports.decodeAction = function(body, serverManifest) {
        var formData = new FormData(), action = null, seenActions = new Set();
        body.forEach(function(value, key) {
            key.startsWith("$ACTION_") ? key.startsWith("$ACTION_REF_") ? seenActions.has(key) || (seenActions.add(key), value = "$ACTION_" + key.slice(12) + ":", value = decodeBoundActionMetaData(body, serverManifest, value), action = loadServerReference(serverManifest, value)) : key.startsWith("$ACTION_ID_") && !seenActions.has(key) && (seenActions.add(key), value = key.slice(11), action = loadServerReference(serverManifest, {
                id: value,
                bound: null
            })) : formData.append(key, value);
        });
        return null === action ? null : action.then(function(fn) {
            return fn.bind(null, formData);
        });
    };
    exports.decodeFormState = function(actionResult, body, serverManifest) {
        var keyPath = body.get("$ACTION_KEY");
        if ("string" !== typeof keyPath) return Promise.resolve(null);
        var metaData = null;
        body.forEach(function(value, key) {
            key.startsWith("$ACTION_REF_") && (value = "$ACTION_" + key.slice(12) + ":", metaData = decodeBoundActionMetaData(body, serverManifest, value));
        });
        if (null === metaData) return Promise.resolve(null);
        var referenceId = metaData.id;
        return Promise.resolve(metaData.bound).then(function(bound) {
            return null === bound ? null : [
                actionResult,
                keyPath,
                referenceId,
                bound.length - 1
            ];
        });
    };
    exports.decodeReply = function(body, turbopackMap, options) {
        if ("string" === typeof body) {
            var form = new FormData();
            form.append("0", body);
            body = form;
        }
        body = createResponse(turbopackMap, "", options ? options.temporaryReferences : void 0, body, options ? options.arraySizeLimit : void 0);
        turbopackMap = getChunk(body, 0);
        close(body);
        return turbopackMap;
    };
    exports.decodeReplyFromAsyncIterable = function(iterable, turbopackMap, options) {
        function progress(entry) {
            if (entry.done) close(response$jscomp$0);
            else {
                entry = entry.value;
                var name = entry[0];
                entry = entry[1];
                if ("string" === typeof entry) {
                    var response = response$jscomp$0;
                    appendBackingEntry(response._formData, name, entry);
                    var prefix = response._prefix;
                    if (name.startsWith(prefix)) {
                        var chunks = response._chunks;
                        name = +name.slice(prefix.length);
                        (chunks = chunks.get(name)) && resolveModelChunk(response, chunks, entry, name);
                    }
                } else appendBackingEntry(response$jscomp$0._formData, name, entry);
                iterator.next().then(progress, error);
            }
        }
        function error(reason) {
            reportGlobalError(response$jscomp$0, reason);
            "function" === typeof iterator.throw && iterator.throw(reason).then(error, error);
        }
        var iterator = iterable[ASYNC_ITERATOR](), response$jscomp$0 = createResponse(turbopackMap, "", options ? options.temporaryReferences : void 0, void 0, options ? options.arraySizeLimit : void 0);
        iterator.next().then(progress, error);
        return getChunk(response$jscomp$0, 0);
    };
    exports.prerender = function(model, turbopackMap, options) {
        return new Promise(function(resolve, reject) {
            var request = createPrerenderRequest(model, turbopackMap, function() {
                var stream = new ReadableStream({
                    type: "bytes",
                    pull: function(controller) {
                        startFlowing(request, controller);
                    },
                    cancel: function(reason) {
                        request.destination = null;
                        abort(request, reason);
                    }
                }, {
                    highWaterMark: 0
                });
                resolve({
                    prelude: stream
                });
            }, reject, options ? options.onError : void 0, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0, options ? options.startTime : void 0, options ? options.environmentName : void 0, options ? options.filterStackFrame : void 0, !1);
            if (options && options.signal) {
                var signal = options.signal;
                if (signal.aborted) abort(request, signal.reason);
                else {
                    var listener = function() {
                        abort(request, signal.reason);
                        signal.removeEventListener("abort", listener);
                    };
                    signal.addEventListener("abort", listener);
                }
            }
            startWork(request);
        });
    };
    exports.registerClientReference = function(proxyImplementation, id, exportName) {
        return registerClientReferenceImpl(proxyImplementation, id + "#" + exportName, !1);
    };
    exports.registerServerReference = function(reference, id, exportName) {
        return Object.defineProperties(reference, {
            $$typeof: {
                value: SERVER_REFERENCE_TAG
            },
            $$id: {
                value: null === exportName ? id : id + "#" + exportName,
                configurable: !0
            },
            $$bound: {
                value: null,
                configurable: !0
            },
            $$location: {
                value: Error("react-stack-top-frame"),
                configurable: !0
            },
            bind: {
                value: bind,
                configurable: !0
            },
            toString: serverReferenceToString
        });
    };
    exports.renderToReadableStream = function(model, turbopackMap, options) {
        var debugChannelReadable = options && options.debugChannel ? options.debugChannel.readable : void 0, debugChannelWritable = options && options.debugChannel ? options.debugChannel.writable : void 0, request = createRequest(model, turbopackMap, options ? options.onError : void 0, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0, options ? options.startTime : void 0, options ? options.environmentName : void 0, options ? options.filterStackFrame : void 0, void 0 !== debugChannelReadable);
        if (options && options.signal) {
            var signal = options.signal;
            if (signal.aborted) abort(request, signal.reason);
            else {
                var listener = function() {
                    abort(request, signal.reason);
                    signal.removeEventListener("abort", listener);
                };
                signal.addEventListener("abort", listener);
            }
        }
        void 0 !== debugChannelWritable && new ReadableStream({
            type: "bytes",
            pull: function(controller) {
                if (request.status === CLOSING) request.status = CLOSED, closeWithError(controller, request.fatalError);
                else if (request.status !== CLOSED && null === request.debugDestination) {
                    request.debugDestination = controller;
                    try {
                        flushCompletedChunks(request);
                    } catch (error) {
                        logRecoverableError(request, error, null), fatalError(request, error);
                    }
                }
            }
        }, {
            highWaterMark: 0
        }).pipeTo(debugChannelWritable);
        void 0 !== debugChannelReadable && startReadingFromDebugChannelReadableStream(request, debugChannelReadable);
        return new ReadableStream({
            type: "bytes",
            start: function() {
                startWork(request);
            },
            pull: function(controller) {
                startFlowing(request, controller);
            },
            cancel: function(reason) {
                request.destination = null;
                abort(request, reason);
            }
        }, {
            highWaterMark: 0
        });
    };
}();
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-server-dom-turbopack/server.edge.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var s;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    s = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-server.edge.development.js [app-edge-rsc] (ecmascript)");
}
exports.renderToReadableStream = s.renderToReadableStream;
exports.decodeReply = s.decodeReply;
exports.decodeReplyFromAsyncIterable = s.decodeReplyFromAsyncIterable;
exports.decodeAction = s.decodeAction;
exports.decodeFormState = s.decodeFormState;
exports.registerServerReference = s.registerServerReference;
exports.registerClientReference = s.registerClientReference;
exports.createClientModuleProxy = s.createClientModuleProxy;
exports.createTemporaryReferenceSet = s.createTemporaryReferenceSet;
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/build/webpack/loaders/next-flight-loader/server-reference.js [app-edge-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/* eslint-disable import/no-extraneous-dependencies */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-server-dom-turbopack/server.edge.js [app-edge-rsc] (ecmascript)");
;
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/readonly-url-search-params.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadonlyURLSearchParams",
    ()=>ReadonlyURLSearchParams
]);
/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RedirectStatusCode",
    ()=>RedirectStatusCode
]);
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/redirect-error.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REDIRECT_ERROR_CODE",
    ()=>REDIRECT_ERROR_CODE,
    "isRedirectError",
    ()=>isRedirectError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-edge-rsc] (ecmascript)");
;
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"];
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/async-local-storage.js [app-edge-shared] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bindSnapshot",
    ()=>bindSnapshot,
    "createAsyncLocalStorage",
    ()=>createAsyncLocalStorage,
    "createSnapshot",
    ()=>createSnapshot
]);
const sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: false,
    configurable: true
});
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    static bind(fn) {
        return fn;
    }
}
const maybeGlobalAsyncLocalStorage = typeof globalThis !== 'undefined' && globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
function bindSnapshot(fn) {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
    }
    return FakeAsyncLocalStorage.bind(fn);
}
function createSnapshot() {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
    }
    return function(fn, ...args) {
        return fn(...args);
    };
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/action-async-storage-instance.js [app-edge-shared] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actionAsyncStorageInstance",
    ()=>actionAsyncStorageInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/async-local-storage.js [app-edge-shared] (ecmascript)");
;
const actionAsyncStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])();
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/action-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Share the instance module in the next-shared layer
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/action-async-storage-instance.js [app-edge-shared] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/action-async-storage.external.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__["actionAsyncStorageInstance"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/action-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/action-async-storage-instance.js [app-edge-shared] (ecmascript)");
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/redirect.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRedirectError",
    ()=>getRedirectError,
    "getRedirectStatusCodeFromError",
    ()=>getRedirectStatusCodeFromError,
    "getRedirectTypeFromError",
    ()=>getRedirectTypeFromError,
    "getURLFromRedirectError",
    ()=>getURLFromRedirectError,
    "permanentRedirect",
    ()=>permanentRedirect,
    "redirect",
    ()=>redirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/redirect-error.js [app-edge-rsc] (ecmascript)");
;
;
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/action-async-storage.external.js [app-edge-rsc] (ecmascript)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].TemporaryRedirect) {
    const error = Object.defineProperty(new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["REDIRECT_ERROR_CODE"]), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["REDIRECT_ERROR_CODE"]};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? 'push' : 'replace';
    throw getRedirectError(url, type, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = 'replace') {
    throw getRedirectError(url, type, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isRedirectError"])(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isRedirectError"])(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isRedirectError"])(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTTPAccessErrorStatus",
    ()=>HTTPAccessErrorStatus,
    "HTTP_ERROR_FALLBACK_ERROR_CODE",
    ()=>HTTP_ERROR_FALLBACK_ERROR_CODE,
    "getAccessFallbackErrorTypeByStatus",
    ()=>getAccessFallbackErrorTypeByStatus,
    "getAccessFallbackHTTPStatus",
    ()=>getAccessFallbackHTTPStatus,
    "isHTTPAccessFallbackError",
    ()=>isHTTPAccessFallbackError
]);
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/not-found.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notFound",
    ()=>notFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-edge-rsc] (ecmascript)");
;
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["HTTP_ERROR_FALLBACK_ERROR_CODE"]};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1041",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/forbidden.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forbidden",
    ()=>forbidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-edge-rsc] (ecmascript)");
;
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["HTTP_ERROR_FALLBACK_ERROR_CODE"]};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1019",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/unauthorized.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unauthorized",
    ()=>unauthorized
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-edge-rsc] (ecmascript)");
;
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["HTTP_ERROR_FALLBACK_ERROR_CODE"]};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1002",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvariantError",
    ()=>InvariantError
]);
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/promise-with-resolvers.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPromiseWithResolvers",
    ()=>createPromiseWithResolvers
]);
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/staged-rendering.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenderStage",
    ()=>RenderStage,
    "StagedRenderingController",
    ()=>StagedRenderingController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$promise$2d$with$2d$resolvers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/promise-with-resolvers.js [app-edge-rsc] (ecmascript)");
;
;
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Before"] = 1] = "Before";
    RenderStage[RenderStage["EarlyStatic"] = 2] = "EarlyStatic";
    RenderStage[RenderStage["Static"] = 3] = "Static";
    RenderStage[RenderStage["EarlyRuntime"] = 4] = "EarlyRuntime";
    RenderStage[RenderStage["Runtime"] = 5] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 6] = "Dynamic";
    RenderStage[RenderStage["Abandoned"] = 7] = "Abandoned";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal, abandonController, shouldTrackSyncIO){
        this.abortSignal = abortSignal;
        this.abandonController = abandonController;
        this.shouldTrackSyncIO = shouldTrackSyncIO;
        this.currentStage = 1;
        this.syncInterruptReason = null;
        this.staticStageEndTime = Infinity;
        this.runtimeStageEndTime = Infinity;
        this.staticStageListeners = [];
        this.earlyRuntimeStageListeners = [];
        this.runtimeStageListeners = [];
        this.dynamicStageListeners = [];
        this.staticStagePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$promise$2d$with$2d$resolvers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createPromiseWithResolvers"])();
        this.earlyRuntimeStagePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$promise$2d$with$2d$resolvers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createPromiseWithResolvers"])();
        this.runtimeStagePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$promise$2d$with$2d$resolvers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createPromiseWithResolvers"])();
        this.dynamicStagePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$promise$2d$with$2d$resolvers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createPromiseWithResolvers"])();
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                // Reject all stage promises that haven't already been resolved.
                // If a promise was already resolved via advanceStage, the reject
                // is a no-op. The ignoreReject handler suppresses unhandled
                // rejection warnings for promises that no one is awaiting.
                const { reason } = abortSignal;
                this.staticStagePromise.promise.catch(ignoreReject);
                this.staticStagePromise.reject(reason);
                this.earlyRuntimeStagePromise.promise.catch(ignoreReject);
                this.earlyRuntimeStagePromise.reject(reason);
                this.runtimeStagePromise.promise.catch(ignoreReject);
                this.runtimeStagePromise.reject(reason);
                this.dynamicStagePromise.promise.catch(ignoreReject);
                this.dynamicStagePromise.reject(reason);
            }, {
                once: true
            });
        }
        if (abandonController) {
            abandonController.signal.addEventListener('abort', ()=>{
                this.abandonRender();
            }, {
                once: true
            });
        }
    }
    onStage(stage, callback) {
        if (this.currentStage >= stage) {
            callback();
        } else if (stage === 3) {
            this.staticStageListeners.push(callback);
        } else if (stage === 4) {
            this.earlyRuntimeStageListeners.push(callback);
        } else if (stage === 5) {
            this.runtimeStageListeners.push(callback);
        } else if (stage === 6) {
            this.dynamicStageListeners.push(callback);
        } else {
            // This should never happen
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                value: "E881",
                enumerable: false,
                configurable: true
            });
        }
    }
    shouldTrackSyncInterrupt() {
        if (!this.shouldTrackSyncIO) {
            return false;
        }
        switch(this.currentStage){
            case 1:
                // If we haven't started the render yet, it can't be interrupted.
                return false;
            case 2:
            case 3:
                return true;
            case 4:
                // EarlyRuntime is for runtime-prefetchable segments. Sync IO
                // should error because it would abort a runtime prefetch.
                return true;
            case 5:
                // Runtime is for non-prefetchable segments. Sync IO is fine there
                // because in practice this segment will never be runtime prefetched
                return false;
            case 6:
            case 7:
                return false;
            default:
                return false;
        }
    }
    syncInterruptCurrentStageWithReason(reason) {
        if (this.currentStage === 1) {
            return;
        }
        // If the render has already been abandoned, there's nothing to interrupt.
        if (this.currentStage === 7) {
            return;
        }
        // If Sync IO occurs during an abandonable render, we trigger the abandon.
        // The abandon listener will call abandonRender which advances through
        // stages to let caches fill before marking as Abandoned.
        if (this.abandonController) {
            this.abandonController.abort();
            return;
        }
        if (this.abortSignal) {
            // If this is an abortable render, we capture the interruption reason and stop advancing.
            // We don't release any more promises.
            // The caller is expected to abort the signal.
            this.syncInterruptReason = reason;
            this.currentStage = 7;
            return;
        }
        // If we're in a non-abandonable & non-abortable render,
        // we need to advance to the Dynamic stage and capture the interruption reason.
        // (in dev, this will be the restarted render)
        switch(this.currentStage){
            case 2:
            case 3:
            case 4:
                {
                    // EarlyRuntime is for runtime-prefetchable segments. Sync IO here
                    // means the prefetch would be aborted too early.
                    this.syncInterruptReason = reason;
                    this.advanceStage(6);
                    return;
                }
            case 5:
                {
                    // canSyncInterrupt returns false for Runtime, so we should
                    // never get here. Defensive no-op.
                    return;
                }
            case 6:
            default:
        }
    }
    getSyncInterruptReason() {
        return this.syncInterruptReason;
    }
    getStaticStageEndTime() {
        return this.staticStageEndTime;
    }
    getRuntimeStageEndTime() {
        return this.runtimeStageEndTime;
    }
    abandonRender() {
        // In staged rendering, only the initial render is abandonable.
        // We can abandon the initial render if
        //   1. We notice a cache miss, and need to wait for caches to fill
        //   2. A sync IO error occurs, and the render should be interrupted
        //      (this might be a lazy intitialization of a module,
        //       so we still want to restart in this case and see if it still occurs)
        // In either case, we'll be doing another render after this one,
        // so we only want to unblock the next stage, not Dynamic, because
        // unblocking the dynamic stage would likely lead to wasted (uncached) IO.
        const { currentStage } = this;
        switch(currentStage){
            case 2:
                {
                    this.resolveStaticStage();
                }
            // intentional fallthrough
            case 3:
                {
                    this.resolveEarlyRuntimeStage();
                }
            // intentional fallthrough
            case 4:
                {
                    this.resolveRuntimeStage();
                }
            // intentional fallthrough
            case 5:
                {
                    this.currentStage = 7;
                    return;
                }
            case 6:
            case 1:
            case 7:
                break;
            default:
                {
                    currentStage;
                }
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (stage <= this.currentStage) {
            return;
        }
        let currentStage = this.currentStage;
        this.currentStage = stage;
        if (currentStage < 3 && stage >= 3) {
            this.resolveStaticStage();
        }
        if (currentStage < 4 && stage >= 4) {
            this.resolveEarlyRuntimeStage();
        }
        if (currentStage < 5 && stage >= 5) {
            this.staticStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveRuntimeStage();
        }
        if (currentStage < 6 && stage >= 6) {
            this.runtimeStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveDynamicStage();
            return;
        }
    }
    /** Fire the `onStage` listeners for the static stage and unblock any promises waiting for it. */ resolveStaticStage() {
        const staticListeners = this.staticStageListeners;
        for(let i = 0; i < staticListeners.length; i++){
            staticListeners[i]();
        }
        staticListeners.length = 0;
        this.staticStagePromise.resolve();
    }
    /** Fire the `onStage` listeners for the early runtime stage and unblock any promises waiting for it. */ resolveEarlyRuntimeStage() {
        const earlyRuntimeListeners = this.earlyRuntimeStageListeners;
        for(let i = 0; i < earlyRuntimeListeners.length; i++){
            earlyRuntimeListeners[i]();
        }
        earlyRuntimeListeners.length = 0;
        this.earlyRuntimeStagePromise.resolve();
    }
    /** Fire the `onStage` listeners for the runtime stage and unblock any promises waiting for it. */ resolveRuntimeStage() {
        const runtimeListeners = this.runtimeStageListeners;
        for(let i = 0; i < runtimeListeners.length; i++){
            runtimeListeners[i]();
        }
        runtimeListeners.length = 0;
        this.runtimeStagePromise.resolve();
    }
    /** Fire the `onStage` listeners for the dynamic stage and unblock any promises waiting for it. */ resolveDynamicStage() {
        const dynamicListeners = this.dynamicStageListeners;
        for(let i = 0; i < dynamicListeners.length; i++){
            dynamicListeners[i]();
        }
        dynamicListeners.length = 0;
        this.dynamicStagePromise.resolve();
    }
    getStagePromise(stage) {
        switch(stage){
            case 3:
                {
                    return this.staticStagePromise.promise;
                }
            case 4:
                {
                    return this.earlyRuntimeStagePromise.promise;
                }
            case 5:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 6:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "delayUntilRuntimeStage",
    ()=>delayUntilRuntimeStage,
    "getRuntimeStage",
    ()=>getRuntimeStage,
    "isHangingPromiseRejectionError",
    ()=>isHangingPromiseRejectionError,
    "makeDevtoolsIOAwarePromise",
    ()=>makeDevtoolsIOAwarePromise,
    "makeHangingPromise",
    ()=>makeHangingPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/staged-rendering.js [app-edge-rsc] (ecmascript)");
;
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
}
function getRuntimeStage(stagedRendering) {
    if (stagedRendering.currentStage === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RenderStage"].EarlyStatic || stagedRendering.currentStage === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RenderStage"].EarlyRuntime) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RenderStage"].EarlyRuntime;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RenderStage"].Runtime;
}
function delayUntilRuntimeStage(prerenderStore, result) {
    const { stagedRendering } = prerenderStore;
    if (!stagedRendering) {
        return result;
    }
    return stagedRendering.waitForStage(getRuntimeStage(stagedRendering)).then(()=>result);
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/router-utils/is-postpone.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPostpone",
    ()=>isPostpone
]);
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BailoutToCSRError",
    ()=>BailoutToCSRError,
    "isBailoutToCSRError",
    ()=>isBailoutToCSRError
]);
// This has to be a shared module which is shared between client component error boundary and dynamic component
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/is-next-router-error.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNextRouterError",
    ()=>isNextRouterError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/redirect-error.js [app-edge-rsc] (ecmascript)");
;
;
function isNextRouterError(error) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isRedirectError"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isHTTPAccessFallbackError"])(error);
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicServerError",
    ()=>DynamicServerError,
    "isDynamicServerError",
    ()=>isDynamicServerError
]);
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaticGenBailoutError",
    ()=>StaticGenBailoutError,
    "isStaticGenBailoutError",
    ()=>isStaticGenBailoutError
]);
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [app-edge-shared] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "workUnitAsyncStorageInstance",
    ()=>workUnitAsyncStorageInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/async-local-storage.js [app-edge-shared] (ecmascript)");
;
const workUnitAsyncStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])();
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/app-router-headers.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_HEADER",
    ()=>ACTION_HEADER,
    "FLIGHT_HEADERS",
    ()=>FLIGHT_HEADERS,
    "NEXT_ACTION_NOT_FOUND_HEADER",
    ()=>NEXT_ACTION_NOT_FOUND_HEADER,
    "NEXT_ACTION_REVALIDATED_HEADER",
    ()=>NEXT_ACTION_REVALIDATED_HEADER,
    "NEXT_DID_POSTPONE_HEADER",
    ()=>NEXT_DID_POSTPONE_HEADER,
    "NEXT_HMR_REFRESH_HASH_COOKIE",
    ()=>NEXT_HMR_REFRESH_HASH_COOKIE,
    "NEXT_HMR_REFRESH_HEADER",
    ()=>NEXT_HMR_REFRESH_HEADER,
    "NEXT_HTML_REQUEST_ID_HEADER",
    ()=>NEXT_HTML_REQUEST_ID_HEADER,
    "NEXT_INSTANT_PREFETCH_HEADER",
    ()=>NEXT_INSTANT_PREFETCH_HEADER,
    "NEXT_INSTANT_TEST_COOKIE",
    ()=>NEXT_INSTANT_TEST_COOKIE,
    "NEXT_IS_PRERENDER_HEADER",
    ()=>NEXT_IS_PRERENDER_HEADER,
    "NEXT_REQUEST_ID_HEADER",
    ()=>NEXT_REQUEST_ID_HEADER,
    "NEXT_REWRITTEN_PATH_HEADER",
    ()=>NEXT_REWRITTEN_PATH_HEADER,
    "NEXT_REWRITTEN_QUERY_HEADER",
    ()=>NEXT_REWRITTEN_QUERY_HEADER,
    "NEXT_ROUTER_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_PREFETCH_HEADER,
    "NEXT_ROUTER_SEGMENT_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_SEGMENT_PREFETCH_HEADER,
    "NEXT_ROUTER_STALE_TIME_HEADER",
    ()=>NEXT_ROUTER_STALE_TIME_HEADER,
    "NEXT_ROUTER_STATE_TREE_HEADER",
    ()=>NEXT_ROUTER_STATE_TREE_HEADER,
    "NEXT_RSC_UNION_QUERY",
    ()=>NEXT_RSC_UNION_QUERY,
    "NEXT_URL",
    ()=>NEXT_URL,
    "RSC_CONTENT_TYPE_HEADER",
    ()=>RSC_CONTENT_TYPE_HEADER,
    "RSC_HEADER",
    ()=>RSC_HEADER
]);
const RSC_HEADER = 'rsc';
const ACTION_HEADER = 'next-action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
const NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'next-url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const NEXT_INSTANT_PREFETCH_HEADER = 'next-instant-navigation-testing-prefetch';
const NEXT_INSTANT_TEST_COOKIE = 'next-instant-navigation-testing';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
const NEXT_REQUEST_ID_HEADER = 'x-nextjs-request-id';
const NEXT_HTML_REQUEST_ID_HEADER = 'x-nextjs-html-request-id';
const NEXT_ACTION_REVALIDATED_HEADER = 'x-action-revalidated';
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheSignal",
    ()=>getCacheSignal,
    "getDraftModeProviderForCacheScope",
    ()=>getDraftModeProviderForCacheScope,
    "getHmrRefreshHash",
    ()=>getHmrRefreshHash,
    "getPrerenderResumeDataCache",
    ()=>getPrerenderResumeDataCache,
    "getRenderResumeDataCache",
    ()=>getRenderResumeDataCache,
    "getServerComponentsHmrCache",
    ()=>getServerComponentsHmrCache,
    "getStagedRenderingController",
    ()=>getStagedRenderingController,
    "isHmrRefresh",
    ()=>isHmrRefresh,
    "isInEarlyRenderStage",
    ()=>isInEarlyRenderStage,
    "throwForMissingRequestStore",
    ()=>throwForMissingRequestStore,
    "throwInvariantForMissingStore",
    ()=>throwInvariantForMissingStore
]);
// Share the instance module in the next-shared layer
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [app-edge-shared] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/app-router-headers.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/staged-rendering.js [app-edge-rsc] (ecmascript)");
;
;
;
;
function isInEarlyRenderStage(requestStore) {
    const stagedRendering = requestStore.stagedRendering;
    if (stagedRendering) {
        return stagedRendering.currentStage === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RenderStage"].EarlyStatic || stagedRendering.currentStage === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RenderStage"].EarlyRuntime;
    }
    return false;
}
;
function throwForMissingRequestStore(callingExpression) {
    throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: false,
        configurable: true
    });
}
function throwInvariantForMissingStore() {
    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected workUnitAsyncStorage to have a store.'), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: false,
        configurable: true
    });
}
function getPrerenderResumeDataCache(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-ppr':
            return workUnitStore.prerenderResumeDataCache;
        case 'prerender-client':
        case 'validation-client':
            // TODO eliminate fetch caching in client scope and stop exposing this data
            // cache during SSR.
            return workUnitStore.prerenderResumeDataCache;
        case 'request':
            {
                // In dev, we might fill caches even during a dynamic request.
                if (workUnitStore.prerenderResumeDataCache) {
                    return workUnitStore.prerenderResumeDataCache;
                }
            // fallthrough
            }
        case 'prerender-legacy':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'generate-static-params':
            return null;
        default:
            return workUnitStore;
    }
}
function getRenderResumeDataCache(workUnitStore) {
    switch(workUnitStore.type){
        case 'request':
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-client':
        case 'validation-client':
            if (workUnitStore.renderResumeDataCache) {
                // If we are in a prerender, we might have a render resume data cache
                // that is used to read from prefilled caches.
                return workUnitStore.renderResumeDataCache;
            }
        // fallthrough
        case 'prerender-ppr':
            // Otherwise we return the mutable resume data cache here as an immutable
            // version of the cache as it can also be used for reading.
            return workUnitStore.prerenderResumeDataCache ?? null;
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'prerender-legacy':
        case 'generate-static-params':
            return null;
        default:
            return workUnitStore;
    }
}
function getHmrRefreshHash(workUnitStore) {
    if ("TURBOPACK compile-time truthy", 1) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'prerender':
            case 'prerender-runtime':
                return workUnitStore.hmrRefreshHash;
            case 'request':
                var _workUnitStore_cookies_get;
                return (_workUnitStore_cookies_get = workUnitStore.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_HMR_REFRESH_HASH_COOKIE"])) == null ? void 0 : _workUnitStore_cookies_get.value;
            case 'prerender-client':
            case 'validation-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'unstable-cache':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return undefined;
}
function isHmrRefresh(workUnitStore) {
    if ("TURBOPACK compile-time truthy", 1) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'request':
                return workUnitStore.isHmrRefresh ?? false;
            case 'prerender':
            case 'prerender-client':
            case 'validation-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'unstable-cache':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return false;
}
function getServerComponentsHmrCache(workUnitStore) {
    if ("TURBOPACK compile-time truthy", 1) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'request':
                return workUnitStore.serverComponentsHmrCache;
            case 'prerender':
            case 'prerender-client':
            case 'validation-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'unstable-cache':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return undefined;
}
function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
    if (workStore.isDraftMode) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
            case 'prerender-runtime':
            case 'request':
                return workUnitStore.draftMode;
            case 'prerender':
            case 'prerender-client':
            case 'validation-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return undefined;
}
function getStagedRenderingController(workUnitStore) {
    switch(workUnitStore.type){
        case 'request':
        case 'prerender-runtime':
            return workUnitStore.stagedRendering ?? null;
        case 'prerender':
        case 'prerender-client':
        case 'validation-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'generate-static-params':
            return null;
        default:
            return workUnitStore;
    }
}
function getCacheSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-client':
        case 'validation-client':
        case 'prerender-runtime':
            return workUnitStore.cacheSignal;
        case 'request':
            {
                // In dev, we might fill caches even during a dynamic request.
                if (workUnitStore.cacheSignal) {
                    return workUnitStore.cacheSignal;
                }
            // fallthrough
            }
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'generate-static-params':
            return null;
        default:
            return workUnitStore;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [app-edge-shared] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "workUnitAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__["workUnitAsyncStorageInstance"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [app-edge-shared] (ecmascript)");
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [app-edge-shared] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "workAsyncStorageInstance",
    ()=>workAsyncStorageInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/async-local-storage.js [app-edge-shared] (ecmascript)");
;
const workAsyncStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])();
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Share the instance module in the next-shared layer
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [app-edge-shared] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [app-edge-shared] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "workAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__["workAsyncStorageInstance"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [app-edge-shared] (ecmascript)");
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/framework/boundary-constants.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "METADATA_BOUNDARY_NAME",
    ()=>METADATA_BOUNDARY_NAME,
    "OUTLET_BOUNDARY_NAME",
    ()=>OUTLET_BOUNDARY_NAME,
    "ROOT_LAYOUT_BOUNDARY_NAME",
    ()=>ROOT_LAYOUT_BOUNDARY_NAME,
    "VIEWPORT_BOUNDARY_NAME",
    ()=>VIEWPORT_BOUNDARY_NAME
]);
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__';
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/scheduler.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Schedules a function to be called on the next tick after the other promises
 * have been resolved.
 *
 * @param cb the function to schedule
 */ __turbopack_context__.s([
    "atLeastOneTask",
    ()=>atLeastOneTask,
    "scheduleImmediate",
    ()=>scheduleImmediate,
    "scheduleOnNextTick",
    ()=>scheduleOnNextTick,
    "waitAtLeastOneReactRenderTask",
    ()=>waitAtLeastOneReactRenderTask
]);
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            setTimeout(cb, 0);
        } else //TURBOPACK unreachable
        ;
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        setTimeout(cb, 0);
    } else //TURBOPACK unreachable
    ;
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time truthy", 1) {
        return new Promise((r)=>setTimeout(r, 0));
    } else //TURBOPACK unreachable
    ;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/instant-validation/boundary-constants.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INSTANT_VALIDATION_BOUNDARY_NAME",
    ()=>INSTANT_VALIDATION_BOUNDARY_NAME
]);
const INSTANT_VALIDATION_BOUNDARY_NAME = '__next_instant_validation_boundary__';
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicHoleKind",
    ()=>DynamicHoleKind,
    "Postpone",
    ()=>Postpone,
    "PreludeState",
    ()=>PreludeState,
    "abortAndThrowOnSynchronousRequestDataAccess",
    ()=>abortAndThrowOnSynchronousRequestDataAccess,
    "abortOnSynchronousPlatformIOAccess",
    ()=>abortOnSynchronousPlatformIOAccess,
    "accessedDynamicData",
    ()=>accessedDynamicData,
    "annotateDynamicAccess",
    ()=>annotateDynamicAccess,
    "consumeDynamicAccess",
    ()=>consumeDynamicAccess,
    "createDynamicTrackingState",
    ()=>createDynamicTrackingState,
    "createDynamicValidationState",
    ()=>createDynamicValidationState,
    "createHangingInputAbortSignal",
    ()=>createHangingInputAbortSignal,
    "createInstantValidationState",
    ()=>createInstantValidationState,
    "createRenderInBrowserAbortSignal",
    ()=>createRenderInBrowserAbortSignal,
    "formatDynamicAPIAccesses",
    ()=>formatDynamicAPIAccesses,
    "getFirstDynamicReason",
    ()=>getFirstDynamicReason,
    "getNavigationDisallowedDynamicReasons",
    ()=>getNavigationDisallowedDynamicReasons,
    "getStaticShellDisallowedDynamicReasons",
    ()=>getStaticShellDisallowedDynamicReasons,
    "isDynamicPostpone",
    ()=>isDynamicPostpone,
    "isPrerenderInterruptedError",
    ()=>isPrerenderInterruptedError,
    "logDisallowedDynamicError",
    ()=>logDisallowedDynamicError,
    "markCurrentScopeAsDynamic",
    ()=>markCurrentScopeAsDynamic,
    "postponeWithTracking",
    ()=>postponeWithTracking,
    "throwIfDisallowedDynamic",
    ()=>throwIfDisallowedDynamic,
    "throwToInterruptStaticGeneration",
    ()=>throwToInterruptStaticGeneration,
    "trackAllowedDynamicAccess",
    ()=>trackAllowedDynamicAccess,
    "trackDynamicDataInDynamicRender",
    ()=>trackDynamicDataInDynamicRender,
    "trackDynamicHoleInNavigation",
    ()=>trackDynamicHoleInNavigation,
    "trackDynamicHoleInRuntimeShell",
    ()=>trackDynamicHoleInRuntimeShell,
    "trackDynamicHoleInStaticShell",
    ()=>trackDynamicHoleInStaticShell,
    "trackThrownErrorInNavigation",
    ()=>trackThrownErrorInNavigation,
    "useDynamicRouteParams",
    ()=>useDynamicRouteParams,
    "useDynamicSearchParams",
    ()=>useDynamicSearchParams
]);
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/react.react-server.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [app-edge-shared] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [app-edge-shared] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/framework/boundary-constants.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/scheduler.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$instant$2d$validation$2f$boundary$2d$constants$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/instant-validation/boundary-constants.js [app-edge-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const hasPostpone = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"].unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
        case 'validation-client':
        case 'generate-static-params':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"].unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["BailoutToCSRError"]('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                if (workUnitStore.type === 'prerender-runtime' && workUnitStore.stagedRendering) {
                    const { stagedRendering } = workUnitStore;
                    stagedRendering.waitForStage((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["getRuntimeStage"])(stagedRendering)).then(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"])(()=>controller.abort()));
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"])(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'validation-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'generate-static-params':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'validation-client':
                {
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called in \`generateStaticParams\`. Next.js should be preventing ${expression} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E1130",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["throwForMissingRequestStore"])(expression);
    }
    switch(workUnitStore.type){
        case 'validation-client':
            // During instant validation we try to behave as close to client as possible,
            // so this shouldn't hang during SSR.
            return;
        case 'prerender-client':
            {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["BailoutToCSRError"](expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'generate-static-params':
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called in \`generateStaticParams\`. Next.js should be preventing ${expression} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E1130",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ROOT_LAYOUT_BOUNDARY_NAME"]} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["METADATA_BOUNDARY_NAME"]}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["VIEWPORT_BOUNDARY_NAME"]}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["OUTLET_BOUNDARY_NAME"]}[\\n\\s]`);
const hasInstantValidationBoundaryRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$instant$2d$validation$2f$boundary$2d$constants$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["INSTANT_VALIDATION_BOUNDARY_NAME"]}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1079",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
var DynamicHoleKind = /*#__PURE__*/ function(DynamicHoleKind) {
    /** We know that this hole is caused by runtime data. */ DynamicHoleKind[DynamicHoleKind["Runtime"] = 1] = "Runtime";
    /** We know that this hole is caused by dynamic data. */ DynamicHoleKind[DynamicHoleKind["Dynamic"] = 2] = "Dynamic";
    return DynamicHoleKind;
}({});
function createInstantValidationState(createInstantStack) {
    return {
        hasDynamicMetadata: false,
        hasAllowedClientDynamicAboveBoundary: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: [],
        validationPreventingErrors: [],
        thrownErrorsOutsideBoundary: [],
        createInstantStack
    };
}
function trackDynamicHoleInNavigation(workStore, componentStack, dynamicValidation, clientDynamic, kind, boundaryState) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    }
    if (hasMetadataRegex.test(componentStack)) {
        const usageDescription = kind === 1 ? `Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments.` : `Uncached data or \`connection()\` was accessed inside \`generateMetadata\`.`;
        const message = `Route "${workStore.route}": ${usageDescription} Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1076",
            enumerable: false,
            configurable: true
        }), componentStack, dynamicValidation.createInstantStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    }
    if (hasViewportRegex.test(componentStack)) {
        const usageDescription = kind === 1 ? `Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`.` : `Uncached data or \`connection()\` was accessed inside \`generateViewport\`.`;
        const message = `Route "${workStore.route}": ${usageDescription} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1086",
            enumerable: false,
            configurable: true
        }), componentStack, dynamicValidation.createInstantStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
    const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
    if (!boundaryLocation) {
        // We don't see the validation boundary in the component stack,
        // so this hole must be coming from a shared parent.
        // Shared parents are fully resolved and don't have RSC holes,
        // but they can still suspend in a client component during SSR.
        // If we managed to render all the validation boundaries, that means
        // that the client holes aren't blocking validation and we can disregard them.
        // Note that we don't even care whether they have suspense or not.
        if (boundaryState.expectedIds.size === boundaryState.renderedIds.size) {
            dynamicValidation.hasAllowedClientDynamicAboveBoundary = true;
            dynamicValidation.hasAllowedDynamic = true // Holes outside the boundary contribute to allowing dynamic metadata
            ;
            return;
        } else {
            // TODO(instant-validation) TODO(NAR-787)
            // If shared parents blocked us from validating, we should only log
            // the errors from the innermost (segments), i.e. omit layouts whose
            // slots managed to render (because clearly they didn't block validation)
            const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because a Client Component in a parent segment prevented the page from rendering.`;
            const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1082",
                enumerable: false,
                configurable: true
            }), componentStack, dynamicValidation.createInstantStack);
            dynamicValidation.validationPreventingErrors.push(error);
            return;
        }
    } else {
        // The hole originates inside the validation boundary.
        //
        // Check if we have a Suspense above the hole, but below the validation boundary.
        // If we do, then this dynamic usage wouldn't block a navigation to this subtree.
        // Conversely, if the nearest suspense is above the validation boundary, then this subtree would block.
        //
        // Note that in the component stack, children come before parents.
        //
        // Valid:
        //   ...
        //   at Suspense
        //   ...
        //   at __next_prefetch_validation_boundary__
        //
        // Invalid:
        //   ...
        //   at __next_prefetch_validation_boundary__
        //   ...
        //   at Suspense
        //
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
            if (suspenseLocation.index < boundaryLocation.index) {
                dynamicValidation.hasAllowedDynamic = true;
                return;
            } else {
            // invalid - fallthrough
            }
        }
    }
    if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        const syncError = clientDynamic.syncDynamicErrorWithStack;
        if (dynamicValidation.createInstantStack !== null && syncError.cause === undefined) {
            syncError.cause = dynamicValidation.createInstantStack();
        }
        dynamicValidation.dynamicErrors.push(syncError);
        return;
    }
    const usageDescription = kind === 1 ? `Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`.` : `Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`.`;
    const message = `Route "${workStore.route}": ${usageDescription} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
    const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E1078",
        enumerable: false,
        configurable: true
    }), componentStack, dynamicValidation.createInstantStack);
    dynamicValidation.dynamicErrors.push(error);
    return;
}
function trackThrownErrorInNavigation(workStore, dynamicValidation, thrownValue, componentStack) {
    const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
    if (!boundaryLocation) {
        // There's no validation boundary on the component stack.
        // This error may have blocked a boundary from rendering.
        // Wrap the error to provide component context.
        // This helps for errors from node_modules which would otherwise
        // have no useful stack information due to ignore-listing,
        // e.g. next/dynamic with `ssr: false`.
        const error = addErrorContext(Object.defineProperty(new Error('An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.', {
            cause: thrownValue
        }), "__NEXT_ERROR_CODE", {
            value: "E1118",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.thrownErrorsOutsideBoundary.push(error);
    } else {
        // There's validation boundary on the component stack,
        // so we know this error didn't block a validation boundary from rendering.
        // However, this error might be hiding be hiding dynamic content that would
        // cause validation to fail.
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
            if (suspenseLocation.index < boundaryLocation.index) {
                // There's a Suspense below the validation boundary but above this error's location.
                // This subtree can't fail instant validation because any potential
                // dynamic holes would be guarded by the Suspense anyway,
                // so we can allow this.
                return;
            } else {
            // invalid - fallthrough
            }
        }
        const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because an error prevented the target segment from rendering.`;
        const error = addErrorContext(Object.defineProperty(new Error(message, {
            cause: thrownValue
        }), "__NEXT_ERROR_CODE", {
            value: "E1112",
            enumerable: false,
            configurable: true
        }), componentStack, null // TODO(instant-validation-build): conflicting use of cause
        );
        dynamicValidation.validationPreventingErrors.push(error);
    }
}
function trackDynamicHoleInRuntimeShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1080",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        // TODO(instant-validation): If the page only has holes caused by runtime data,
        // we won't find out if there's a suspense-above-body and error for dynamic viewport
        // even if there is in fact a suspense-above-body
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1077",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    }
    const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
    const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E1084",
        enumerable: false,
        configurable: true
    }), componentStack, null);
    dynamicValidation.dynamicErrors.push(error);
    return;
}
function trackDynamicHoleInStaticShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1085",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1081",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1083",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 *
 * Accepts an already-created Error so the SWC error-code plugin can see the
 * `new Error(...)` call at each call site and auto-assign error codes.
 */ function addErrorContext(error, componentStack, createInstantStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"].captureOwnerStack ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"].captureOwnerStack() : null;
    if (createInstantStack !== null) {
        error.cause = createInstantStack();
    }
    // TODO go back to owner stack here if available. This is temporarily using componentStack to get the right
    //
    error.stack = error.name + ': ' + error.message + (ownerStack || componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
        }
    }
}
function getStaticShellDisallowedDynamicReasons(workStore, prelude, dynamicValidation, configAllowsBlocking) {
    if (configAllowsBlocking || dynamicValidation.hasSuspenseAboveBody) {
        // This route has opted into allowing fully dynamic rendering
        // by including a Suspense boundary above the body. In this case
        // a lack of a shell is not considered disallowed so we simply return
        return [];
    }
    if (prelude !== 0) {
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            return [
                Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
                    value: "E936",
                    enumerable: false,
                    configurable: true
                })
            ];
        }
    } else {
        // We have a prelude but we might still have dynamic metadata without any other dynamic access
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicErrors.length === 0 && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
function getNavigationDisallowedDynamicReasons(workStore, prelude, dynamicValidation, validationSampleTracking, boundaryState) {
    // If we have errors related to missing samples, those should take precedence over everything else.
    if (validationSampleTracking) {
        const { missingSampleErrors } = validationSampleTracking;
        if (missingSampleErrors.length > 0) {
            return missingSampleErrors;
        }
    }
    const { validationPreventingErrors } = dynamicValidation;
    if (validationPreventingErrors.length > 0) {
        return validationPreventingErrors;
    }
    if (boundaryState.renderedIds.size < boundaryState.expectedIds.size) {
        const { thrownErrorsOutsideBoundary, createInstantStack } = dynamicValidation;
        if (thrownErrorsOutsideBoundary.length === 0) {
            const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering for an unknown reason.`;
            const error = createInstantStack !== null ? createInstantStack() : new Error();
            error.name = 'Error';
            error.message = message;
            return [
                error
            ];
        } else if (thrownErrorsOutsideBoundary.length === 1) {
            const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to the following error.`;
            const error = createInstantStack !== null ? createInstantStack() : new Error();
            error.name = 'Error';
            error.message = message;
            return [
                error,
                thrownErrorsOutsideBoundary[0]
            ];
        } else {
            const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`;
            const error = createInstantStack !== null ? createInstantStack() : new Error();
            error.name = 'Error';
            error.message = message;
            return [
                error,
                ...thrownErrorsOutsideBoundary
            ];
        }
    }
    // NOTE: We don't care about Suspense above body here,
    // we're only concerned with the validation boundary
    if (prelude !== 0) {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If a client component suspended prevented us from rendering a shell
            // but didn't block validation, we don't require a prelude.
            if (dynamicValidation.hasAllowedClientDynamicAboveBoundary) {
                return [];
            }
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            return [
                Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Route "${workStore.route}" failed to render during instant validation and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
                    value: "E1055",
                    enumerable: false,
                    configurable: true
                })
            ];
        }
    } else {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/unstable-rethrow.server.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_rethrow",
    ()=>unstable_rethrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$router$2d$utils$2f$is$2d$postpone$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/router-utils/is-postpone.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/is-next-router-error.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-edge-rsc] (ecmascript)");
;
;
;
;
;
;
function unstable_rethrow(error) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isNextRouterError"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isBailoutToCSRError"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isDynamicServerError"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isDynamicPostpone"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$router$2d$utils$2f$is$2d$postpone$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isPostpone"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isHangingPromiseRejectionError"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isPrerenderInterruptedError"])(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/unstable-rethrow.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ __turbopack_context__.s([
    "unstable_rethrow",
    ()=>unstable_rethrow
]);
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/unstable-rethrow.server.js [app-edge-rsc] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/navigation.react-server.js [app-edge-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RedirectType",
    ()=>RedirectType,
    "unstable_isUnrecognizedActionError",
    ()=>unstable_isUnrecognizedActionError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$readonly$2d$url$2d$search$2d$params$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/readonly-url-search-params.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/redirect.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$not$2d$found$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/not-found.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$forbidden$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/forbidden.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$unauthorized$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/unauthorized.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$unstable$2d$rethrow$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/unstable-rethrow.js [app-edge-rsc] (ecmascript)");
;
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
;
;
;
;
;
;
const RedirectType = {
    push: 'push',
    replace: 'replace'
};
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/api/navigation.react-server.js [app-edge-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/navigation.react-server.js [app-edge-rsc] (ecmascript) <locals>");
;
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase().replace(/-/g, ""),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, options] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0]
        ];
        return this.set({
            ...options,
            name,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-edge-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-edge-rsc] (ecmascript)");
;
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReflectAdapter",
    ()=>ReflectAdapter
]);
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/action-revalidation-kind.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionDidNotRevalidate",
    ()=>ActionDidNotRevalidate,
    "ActionDidRevalidateDynamicOnly",
    ()=>ActionDidRevalidateDynamicOnly,
    "ActionDidRevalidateStaticAndDynamic",
    ()=>ActionDidRevalidateStaticAndDynamic
]);
const ActionDidNotRevalidate = 0;
const ActionDidRevalidateStaticAndDynamic = 1;
const ActionDidRevalidateDynamicOnly = 2;
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MutableRequestCookiesAdapter",
    ()=>MutableRequestCookiesAdapter,
    "ReadonlyRequestCookiesError",
    ()=>ReadonlyRequestCookiesError,
    "RequestCookiesAdapter",
    ()=>RequestCookiesAdapter,
    "appendMutableCookies",
    ()=>appendMutableCookies,
    "areCookiesMutableInCurrentPhase",
    ()=>areCookiesMutableInCurrentPhase,
    "createCookiesWithMutableAccessCheck",
    ()=>createCookiesWithMutableAccessCheck,
    "getModifiedCookieValues",
    ()=>getModifiedCookieValues,
    "responseCookiesToRequestCookies",
    ()=>responseCookiesToRequestCookies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [app-edge-shared] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$action$2d$revalidation$2d$kind$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/action-revalidation-kind.js [app-edge-rsc] (ecmascript)");
;
;
;
;
;
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
            if (workStore) {
                workStore.pathWasRevalidated = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$action$2d$revalidation$2d$kind$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ActionDidRevalidateStaticAndDynamic"];
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function createCookiesWithMutableAccessCheck(requestStore) {
    const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RequestCookies"](new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDedupedByCallsiteServerErrorLoggerDev",
    ()=>createDedupedByCallsiteServerErrorLoggerDev
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/react.react-server.js [app-edge-rsc] (ecmascript)");
;
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["cache"] === 'function' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["cache"] : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [app-edge-shared] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "afterTaskAsyncStorageInstance",
    ()=>afterTaskAsyncStorageInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/async-local-storage.js [app-edge-shared] (ecmascript)");
;
const afterTaskAsyncStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])();
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/after-task-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Share the instance module in the next-shared layer
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [app-edge-shared] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [app-edge-shared] (ecmascript) <export afterTaskAsyncStorageInstance as afterTaskAsyncStorage>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "afterTaskAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__["afterTaskAsyncStorageInstance"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [app-edge-shared] (ecmascript)");
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/utils.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRequestAPICallableInsideAfter",
    ()=>isRequestAPICallableInsideAfter,
    "throwForSearchParamsAccessInUseCache",
    ()=>throwForSearchParamsAccessInUseCache,
    "throwWithStaticGenerationBailoutErrorWithDynamicError",
    ()=>throwWithStaticGenerationBailoutErrorWithDynamicError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/after-task-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__afterTaskAsyncStorageInstance__as__afterTaskAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [app-edge-shared] (ecmascript) <export afterTaskAsyncStorageInstance as afterTaskAsyncStorage>");
;
;
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    workStore.invalidDynamicUsageError ??= error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__afterTaskAsyncStorageInstance__as__afterTaskAsyncStorage$3e$__["afterTaskAsyncStorage"].getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/cookies.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cookies",
    ()=>cookies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [app-edge-shared] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [app-edge-shared] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/utils.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/staged-rendering.js [app-edge-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function cookies() {
    const callingExpression = 'cookies';
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isRequestAPICallableInsideAfter"])()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`cookies()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E843",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // cookies object without tracking
            const underlyingCookies = createEmptyCookies();
            return makeUntrackedCookies(underlyingCookies);
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E849",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                        value: "E831",
                        enumerable: false,
                        configurable: true
                    });
                    Error.captureStackTrace(error, cookies);
                    workStore.invalidDynamicUsageError ??= error;
                    throw error;
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E846",
                        enumerable: false,
                        configurable: true
                    });
                case 'generate-static-params':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
                        value: "E1123",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                    return makeHangingCookies(workStore, workUnitStore);
                case 'prerender-client':
                case 'validation-client':
                    const exportName = '`cookies`';
                    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E1037",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // We need track dynamic access here eagerly to keep continuity with
                    // how cookies has worked in PPR without cacheComponents.
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // We track dynamic access here so we don't need to wrap the cookies
                    // in individual property access tracking.
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["delayUntilRuntimeStage"])(workUnitStore, makeUntrackedCookies(workUnitStore.cookies));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedCookies(workUnitStore.cookies);
                case 'request':
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["trackDynamicDataInDynamicRender"])(workUnitStore);
                    let underlyingCookies;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["areCookiesMutableInCurrentPhase"])(workUnitStore)) {
                        // We can't conditionally return different types here based on the context.
                        // To avoid confusion, we always return the readonly type here.
                        underlyingCookies = workUnitStore.userspaceMutableCookies;
                    } else {
                        underlyingCookies = workUnitStore.cookies;
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedCookiesWithDevWarnings(workUnitStore, underlyingCookies, workStore == null ? void 0 : workStore.route);
                    } else //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["throwForMissingRequestStore"])(callingExpression);
}
function createEmptyCookies() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RequestCookies"](new Headers({})));
}
const CachedCookies = new WeakMap();
function makeHangingCookies(workStore, prerenderStore) {
    const cachedPromise = CachedCookies.get(prerenderStore);
    if (cachedPromise) {
        return cachedPromise;
    }
    const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, workStore.route, '`cookies()`');
    CachedCookies.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedCookies(underlyingCookies) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    return promise;
}
function makeUntrackedCookiesWithDevWarnings(requestStore, underlyingCookies, route) {
    if (requestStore.asyncApiPromises) {
        const early = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isInEarlyRenderStage"])(requestStore);
        let promise;
        if (underlyingCookies === requestStore.mutableCookies) {
            promise = early ? requestStore.asyncApiPromises.earlyMutableCookies : requestStore.asyncApiPromises.mutableCookies;
        } else if (underlyingCookies === requestStore.cookies) {
            promise = early ? requestStore.asyncApiPromises.earlyCookies : requestStore.asyncApiPromises.cookies;
        } else {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Received an underlying cookies object that does not match either `cookies` or `mutableCookies`'), "__NEXT_ERROR_CODE", {
                value: "E890",
                enumerable: false,
                configurable: true
            });
        }
        return instrumentCookiesPromiseWithDevWarnings(promise, route);
    }
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["makeDevtoolsIOAwarePromise"])(underlyingCookies, requestStore, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RenderStage"].Runtime);
    const proxiedPromise = instrumentCookiesPromiseWithDevWarnings(promise, route);
    CachedCookies.set(underlyingCookies, proxiedPromise);
    return proxiedPromise;
}
const warnForSyncAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createCookiesAccessError);
function instrumentCookiesPromiseWithDevWarnings(promise, route) {
    Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        size: replaceableWarningDescriptor(promise, 'size', route),
        get: replaceableWarningDescriptor(promise, 'get', route),
        getAll: replaceableWarningDescriptor(promise, 'getAll', route),
        has: replaceableWarningDescriptor(promise, 'has', route),
        set: replaceableWarningDescriptor(promise, 'set', route),
        delete: replaceableWarningDescriptor(promise, 'delete', route),
        clear: replaceableWarningDescriptor(promise, 'clear', route),
        toString: replaceableWarningDescriptor(promise, 'toString', route)
    });
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, `\`cookies().${prop}\``);
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, prop, {
                value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, '`...cookies()` or similar iteration');
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, Symbol.iterator, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createCookiesAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`cookies()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E830",
        enumerable: false,
        configurable: true
    });
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-edge-rsc] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/headers.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "headers",
    ()=>headers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [app-edge-shared] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [app-edge-shared] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/utils.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/staged-rendering.js [app-edge-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function headers() {
    const callingExpression = 'headers';
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["isRequestAPICallableInsideAfter"])()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`headers()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E839",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            const underlyingHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["HeadersAdapter"].seal(new Headers({}));
            return makeUntrackedHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E833",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, headers);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E838",
                        enumerable: false,
                        configurable: true
                    });
                case 'generate-static-params':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
                        value: "E1134",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-client':
                case 'validation-client':
                case 'private-cache':
                case 'prerender-runtime':
                case 'prerender-ppr':
                case 'prerender-legacy':
                case 'request':
                    break;
                default:
                    workUnitStore;
            }
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E828",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'prerender':
                    return makeHangingHeaders(workStore, workUnitStore);
                case 'prerender-client':
                case 'validation-client':
                    const exportName = '`headers`';
                    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E1017",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // PPR Prerender (no cacheComponents)
                    // We are prerendering with PPR. We need track dynamic access here eagerly
                    // to keep continuity with how headers has worked in PPR without cacheComponents.
                    // TODO consider switching the semantic to throw on property access instead
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // Legacy Prerender
                    // We are in a legacy static generation mode while prerendering
                    // We track dynamic access here so we don't need to wrap the headers in
                    // individual property access tracking.
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["delayUntilRuntimeStage"])(workUnitStore, makeUntrackedHeaders(workUnitStore.headers));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedHeaders(workUnitStore.headers);
                case 'request':
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["trackDynamicDataInDynamicRender"])(workUnitStore);
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedHeadersWithDevWarnings(workUnitStore.headers, workStore == null ? void 0 : workStore.route, workUnitStore);
                    } else //TURBOPACK unreachable
                    ;
                    //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["throwForMissingRequestStore"])(callingExpression);
}
const CachedHeaders = new WeakMap();
function makeHangingHeaders(workStore, prerenderStore) {
    const cachedHeaders = CachedHeaders.get(prerenderStore);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, workStore.route, '`headers()`');
    CachedHeaders.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedHeaders(underlyingHeaders) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    return promise;
}
function makeUntrackedHeadersWithDevWarnings(underlyingHeaders, route, requestStore) {
    if (requestStore.asyncApiPromises) {
        const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isInEarlyRenderStage"])(requestStore) ? requestStore.asyncApiPromises.earlyHeaders : requestStore.asyncApiPromises.headers;
        return instrumentHeadersPromiseWithDevWarnings(promise, route);
    }
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["makeDevtoolsIOAwarePromise"])(underlyingHeaders, requestStore, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$staged$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["RenderStage"].Runtime);
    const proxiedPromise = instrumentHeadersPromiseWithDevWarnings(promise, route);
    CachedHeaders.set(underlyingHeaders, proxiedPromise);
    return proxiedPromise;
}
const warnForSyncAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createHeadersAccessError);
function instrumentHeadersPromiseWithDevWarnings(promise, route) {
    Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        append: replaceableWarningDescriptor(promise, 'append', route),
        delete: replaceableWarningDescriptor(promise, 'delete', route),
        get: replaceableWarningDescriptor(promise, 'get', route),
        has: replaceableWarningDescriptor(promise, 'has', route),
        set: replaceableWarningDescriptor(promise, 'set', route),
        getSetCookie: replaceableWarningDescriptor(promise, 'getSetCookie', route),
        forEach: replaceableWarningDescriptor(promise, 'forEach', route),
        keys: replaceableWarningDescriptor(promise, 'keys', route),
        values: replaceableWarningDescriptor(promise, 'values', route),
        entries: replaceableWarningDescriptor(promise, 'entries', route)
    });
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, `\`headers().${prop}\``);
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, prop, {
                value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, '`...headers()` or similar iteration');
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, Symbol.iterator, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createHeadersAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`headers()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E836",
        enumerable: false,
        configurable: true
    });
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/draft-mode.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "draftMode",
    ()=>draftMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [app-edge-shared] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [app-edge-shared] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-edge-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function draftMode() {
    const callingExpression = 'draftMode';
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    if (!workStore || !workUnitStore) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["throwForMissingRequestStore"])(callingExpression);
    }
    switch(workUnitStore.type){
        case 'prerender-runtime':
            // TODO(runtime-ppr): does it make sense to delay this? normally it's always microtasky
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["delayUntilRuntimeStage"])(workUnitStore, createOrGetCachedDraftMode(workUnitStore.draftMode, workStore));
        case 'request':
            return createOrGetCachedDraftMode(workUnitStore.draftMode, workStore);
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            // Inside of `"use cache"` or `unstable_cache`, draft mode is available if
            // the outmost work unit store is a request store (or a runtime prerender),
            // and if draft mode is enabled.
            const draftModeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDraftModeProviderForCacheScope"])(workStore, workUnitStore);
            if (draftModeProvider) {
                return createOrGetCachedDraftMode(draftModeProvider, workStore);
            }
        // Otherwise, we fall through to providing an empty draft mode.
        // eslint-disable-next-line no-fallthrough
        case 'prerender':
        case 'prerender-ppr':
        case 'prerender-legacy':
            // Return empty draft mode
            return createOrGetCachedDraftMode(null, workStore);
        case 'prerender-client':
        case 'validation-client':
            {
                const exportName = '`draftMode`';
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E1046",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'generate-static-params':
            throw Object.defineProperty(new Error(`Route ${workStore.route} used \`${callingExpression}()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
                value: "E1132",
                enumerable: false,
                configurable: true
            });
        default:
            return workUnitStore;
    }
}
function createOrGetCachedDraftMode(draftModeProvider, workStore) {
    const cacheKey = draftModeProvider ?? NullDraftMode;
    const cachedDraftMode = CachedDraftModes.get(cacheKey);
    if (cachedDraftMode) {
        return cachedDraftMode;
    }
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        const route = workStore == null ? void 0 : workStore.route;
        return createDraftModeWithDevWarnings(draftModeProvider, route);
    } else {
        return Promise.resolve(new DraftMode(draftModeProvider));
    }
}
const NullDraftMode = {};
const CachedDraftModes = new WeakMap();
function createDraftModeWithDevWarnings(underlyingProvider, route) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            switch(prop){
                case 'isEnabled':
                    warnForSyncAccess(route, `\`draftMode().${prop}\``);
                    break;
                case 'enable':
                case 'disable':
                    {
                        warnForSyncAccess(route, `\`draftMode().${prop}()\``);
                        break;
                    }
                default:
                    {
                    // We only warn for well-defined properties of the draftMode object.
                    }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
        }
    });
    return proxiedPromise;
}
class DraftMode {
    constructor(provider){
        this._provider = provider;
    }
    get isEnabled() {
        if (this._provider !== null) {
            return this._provider.isEnabled;
        }
        return false;
    }
    enable() {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        trackDynamicDraftMode('draftMode().enable()', this.enable);
        if (this._provider !== null) {
            this._provider.enable();
        }
    }
    disable() {
        trackDynamicDraftMode('draftMode().disable()', this.disable);
        if (this._provider !== null) {
            this._provider.disable();
        }
    }
}
const warnForSyncAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createDraftModeAccessError);
function createDraftModeAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`draftMode()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E835",
        enumerable: false,
        configurable: true
    });
}
function trackDynamicDraftMode(expression, constructorOpt) {
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$app$2d$edge$2d$shared$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    if (workStore) {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        if ((workUnitStore == null ? void 0 : workUnitStore.phase) === 'after') {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside \`after()\`. The enabled status of \`draftMode()\` can be read inside \`after()\` but you cannot enable or disable \`draftMode()\`. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E845",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E553",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                case 'private-cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside "use cache". The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E829",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, constructorOpt);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside a function cached with \`unstable_cache()\`. The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E844",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-runtime':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
                            value: "E126",
                            enumerable: false,
                            configurable: true
                        });
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(workStore.route, expression, error, workUnitStore);
                    }
                case 'prerender-client':
                case 'validation-client':
                    const exportName = '`draftMode`';
                    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E1046",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, expression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    workUnitStore.revalidate = 0;
                    const err = Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${workStore.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                        value: "E558",
                        enumerable: false,
                        configurable: true
                    });
                    workStore.dynamicUsageDescription = expression;
                    workStore.dynamicUsageStack = err.stack;
                    throw err;
                case 'request':
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["trackDynamicDataInDynamicRender"])(workUnitStore);
                    break;
                case 'generate-static-params':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`${expression}\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
                        value: "E1121",
                        enumerable: false,
                        configurable: true
                    });
                default:
                    workUnitStore;
            }
        }
    }
}
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/api/headers.js [app-edge-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/cookies.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$headers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/headers.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$draft$2d$mode$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/draft-mode.js [app-edge-rsc] (ecmascript)");
;
;
;
}),
"[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/build/webpack/loaders/next-flight-loader/action-validate.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
__turbopack_context__.s([
    "ensureServerEntryExports",
    ()=>ensureServerEntryExports
]);
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
}
}),
]);

//# sourceMappingURL=029y_next_dist_0zc07-a._.js.map