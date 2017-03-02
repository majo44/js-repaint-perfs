/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(t,e){ true?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.IncrementalDOM={})}(this,function(t){"use strict";function e(){}function n(t,e){this.attrs=o(),this.attrsArr=[],this.newAttrs=o(),this.staticsApplied=!1,this.key=e,this.keyMap=o(),this.keyMapValid=!0,this.focused=!1,this.nodeName=t,this.text=null}function r(){this.created=p.nodesCreated&&[],this.deleted=p.nodesDeleted&&[]}var i=Object.prototype.hasOwnProperty;e.prototype=Object.create(null);var a=function(t,e){return i.call(t,e)},o=function(){return new e},u=function(t,e,r){var i=new n(e,r);return t.__incrementalDOMData=i,i},l=function(t){return f(t),t.__incrementalDOMData},f=function(t){if(!t.__incrementalDOMData){var e=t instanceof Element,n=e?t.localName:t.nodeName,r=e?t.getAttribute("key"):null,i=u(t,n,r);if(r&&(l(t.parentNode).keyMap[r]=t),e)for(var a=t.attributes,o=i.attrs,c=i.newAttrs,s=i.attrsArr,d=0;d<a.length;d+=1){var p=a[d],h=p.name,v=p.value;o[h]=v,c[h]=void 0,s.push(h),s.push(v)}for(var m=t.firstChild;m;m=m.nextSibling)f(m)}},c=function(t,e){return"svg"===t?"http://www.w3.org/2000/svg":"foreignObject"===l(e).nodeName?null:e.namespaceURI},s=function(t,e,n,r){var i=c(n,e),a=void 0;return a=i?t.createElementNS(i,n):t.createElement(n),u(a,n,r),a},d=function(t){var e=t.createTextNode("");return u(e,"#text",null),e},p={nodesCreated:null,nodesDeleted:null};r.prototype.markCreated=function(t){this.created&&this.created.push(t)},r.prototype.markDeleted=function(t){this.deleted&&this.deleted.push(t)},r.prototype.notifyChanges=function(){this.created&&this.created.length>0&&p.nodesCreated(this.created),this.deleted&&this.deleted.length>0&&p.nodesDeleted(this.deleted)};var h=function(t){return t instanceof Document||t instanceof DocumentFragment},v=function(t,e){for(var n=[],r=t;r!==e;)n.push(r),r=r.parentNode;return n},m=function(t){for(var e=t,n=e;e;)n=e,e=e.parentNode;return n},y=function(t){var e=m(t);return h(e)?e.activeElement:null},g=function(t,e){var n=y(t);return n&&t.contains(n)?v(n,e):[]},k=function(t,e,n){for(var r=e.nextSibling,i=n;i!==e;){var a=i.nextSibling;t.insertBefore(i,r),i=a}},x=null,w=null,b=null,D=null,N=function(t,e){for(var n=0;n<t.length;n+=1)l(t[n]).focused=e},C=function(t){var e=function(e,n,i){var a=x,o=D,u=w,l=b;x=new r,D=e.ownerDocument,b=e.parentNode;var f=g(e,b);N(f,!0);var c=t(e,n,i);return N(f,!1),x.notifyChanges(),x=a,D=o,w=u,b=l,c};return e},O=C(function(t,e,n){return w=t,j(),e(n),P(),t}),A=C(function(t,e,n){var r={nextSibling:t};return w=r,e(n),t!==w&&t.parentNode&&_(b,t,l(b).keyMap),r===w?null:w}),M=function(t,e,n){var r=l(t);return e===r.nodeName&&n==r.key},S=function(t,e){if(!w||!M(w,t,e)){var n=l(b),r=w&&l(w),i=n.keyMap,a=void 0;if(e){var o=i[e];o&&(M(o,t,e)?a=o:o===w?x.markDeleted(o):_(b,o,i))}a||(a="#text"===t?d(D):s(D,b,t,e),e&&(i[e]=a),x.markCreated(a)),l(a).focused?k(b,a,w):r&&r.key&&!r.focused?(b.replaceChild(a,w),n.keyMapValid=!1):b.insertBefore(a,w),w=a}},_=function(t,e,n){t.removeChild(e),x.markDeleted(e);var r=l(e).key;r&&delete n[r]},E=function(){var t=b,e=l(t),n=e.keyMap,r=e.keyMapValid,i=t.lastChild,a=void 0;if(i!==w||!r){for(;i!==w;)_(t,i,n),i=t.lastChild;if(!r){for(a in n)i=n[a],i.parentNode!==t&&(x.markDeleted(i),delete n[a]);e.keyMapValid=!0}}},j=function(){b=w,w=null},I=function(){return w?w.nextSibling:b.firstChild},V=function(){w=I()},P=function(){E(),w=b,b=b.parentNode},T=function(t,e){return V(),S(t,e),j(),b},B=function(){return P(),w},F=function(){return V(),S("#text",null),w},L=function(){return b},R=function(){return I()},U=function(){w=b.lastChild},X=V,q={"default":"__default"},z=function(t){return 0===t.lastIndexOf("xml:",0)?"http://www.w3.org/XML/1998/namespace":0===t.lastIndexOf("xlink:",0)?"http://www.w3.org/1999/xlink":void 0},G=function(t,e,n){if(null==n)t.removeAttribute(e);else{var r=z(e);r?t.setAttributeNS(r,e,n):t.setAttribute(e,n)}},H=function(t,e,n){t[e]=n},J=function(t,e,n){e.indexOf("-")>=0?t.setProperty(e,n):t[e]=n},K=function(t,e,n){if("string"==typeof n)t.style.cssText=n;else{t.style.cssText="";var r=t.style,i=n;for(var o in i)a(i,o)&&J(r,o,i[o])}},Q=function(t,e,n){var r=typeof n;"object"===r||"function"===r?H(t,e,n):G(t,e,n)},W=function(t,e,n){var r=l(t),i=r.attrs;if(i[e]!==n){var a=Y[e]||Y[q["default"]];a(t,e,n),i[e]=n}},Y=o();Y[q["default"]]=Q,Y.style=K;var Z=3,$=[],tt=function(t,e,n){var r=T(t,e),i=l(r);if(!i.staticsApplied){if(n)for(var a=0;a<n.length;a+=2){var o=n[a],u=n[a+1];W(r,o,u)}i.staticsApplied=!0}for(var f=i.attrsArr,c=i.newAttrs,s=!f.length,d=Z,p=0;d<arguments.length;d+=2,p+=2){var h=arguments[d];if(s)f[p]=h,c[h]=void 0;else if(f[p]!==h)break;var u=arguments[d+1];(s||f[p+1]!==u)&&(f[p+1]=u,W(r,h,u))}if(d<arguments.length||p<f.length){for(;d<arguments.length;d+=1,p+=1)f[p]=arguments[d];for(p<f.length&&(f.length=p),d=0;d<f.length;d+=2){var o=f[d],u=f[d+1];c[o]=u}for(var v in c)W(r,v,c[v]),c[v]=void 0}return r},et=function(t,e,n){$[0]=t,$[1]=e,$[2]=n},nt=function(t,e){$.push(t),$.push(e)},rt=function(){var t=tt.apply(null,$);return $.length=0,t},it=function(){var t=B();return t},at=function(t){return tt.apply(null,arguments),it(t)},ot=function(t){var e=F(),n=l(e);if(n.text!==t){n.text=t;for(var r=t,i=1;i<arguments.length;i+=1){var a=arguments[i];r=a(r)}e.data=r}return e};t.patch=O,t.patchInner=O,t.patchOuter=A,t.currentElement=L,t.currentPointer=R,t.skip=U,t.skipNode=X,t.elementVoid=at,t.elementOpenStart=et,t.elementOpenEnd=rt,t.elementOpen=tt,t.elementClose=it,t.text=ot,t.attr=nt,t.symbols=q,t.attributes=Y,t.applyAttr=G,t.applyProp=H,t.notifications=p,t.importNode=f});

//# sourceMappingURL=incremental-dom-min.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var render_1 = __webpack_require__(2);
exports.render = render_1.render;
exports.h = render_1.h;
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var iDom = __webpack_require__(0);
var styles_1 = __webpack_require__(3);
function parseAttributesObject(attributesObj) {
    var attributes = [];
    var events;
    var key = null;
    var ref;
    var innerHTML;
    Object.keys(attributesObj).forEach(function (attributeName) {
        var value = attributesObj[attributeName];
        if (value === false) {
            value = undefined;
        }
        else if (value === true) {
            value = "";
        }
        if (attributeName === 'dangerouslySetInnerHTML') {
            innerHTML = value.__html;
        }
        else if (attributeName === 'key') {
            // key attribute is used by incremental-dom
            key = value;
        }
        else if (attributeName === 'ref') {
            // ref is used for referencing children
            ref = value;
        }
        else if (attributeName.startsWith('on')) {
            // events
            attributeName = attributeName.toLowerCase();
            if (typeof value !== 'string') {
                if (!events) {
                    events = {};
                }
                events[attributeName] = value;
            }
            else {
                attributes.push(attributeName, value);
            }
        }
        else {
            if (attributeName === 'className') {
                // class rename
                attributeName = 'class';
            }
            else if (attributeName === 'style') {
                value = styles_1.parseStyles(value);
            }
            attributes.push(attributeName, value);
        }
    });
    return { attributes: attributes, key: key, ref: ref, innerHTML: innerHTML, events: events };
}
function processChildren(dom, children, afterSet) {
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (Array.isArray(child)) {
            // for array we are rendering each of it
            processChildren(dom, child, afterSet);
        }
        else if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
            // for all primitives we just rendering them as text
            iDom.text(child);
        }
        else if (typeof child === "function") {
            // for single we just calling it
            child(afterSet);
        }
        else if (child !== null && child !== undefined) {
            throw new Error('Unsuported type of child');
        }
    }
}
/**
 * JSX Pragma.
 */
function h(tagName, attrs) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return function (afterSet) {
        // preparing attributes
        var parsedAttributes = attrs ? parseAttributesObject(attrs) : {};
        var dom;
        var ceCtor = window.customElements.get(tagName);
        if (ceCtor) {
            var props = {};
            iDom.elementOpenStart(tagName, parsedAttributes.key);
            for (var i = 0; i < parsedAttributes.attributes.length; i = i + 2) {
                var key = parsedAttributes.attributes[i];
                var value = parsedAttributes.attributes[i + 1];
                if (key in ceCtor.prototype) {
                    props[key] = value;
                }
                else {
                    iDom.attr(key, value);
                }
            }
            dom = iDom.elementOpenEnd();
            Object.assign(dom, props);
        }
        else {
            dom = iDom.elementOpen.apply(iDom, [tagName, parsedAttributes.key, null].concat(parsedAttributes.attributes));
        }
        // apply events handlers
        if (parsedAttributes.events) {
            var oldEvents_1 = dom['__events'] || {};
            dom['__events'] = parsedAttributes.events;
            Object.keys(parsedAttributes.events).forEach(function (type) {
                // adding handler only for new events, this prevents to attach handlers more the once
                // if element is rerendered multiple times
                if (!oldEvents_1[type]) {
                    // for prevent the memory leaks we will proxing the handlers
                    dom.addEventListener(type.substr(2), function () {
                        this['__events'][type].apply(this, arguments);
                    }, false);
                }
            });
        }
        else {
            delete dom['__events'];
        }
        if (parsedAttributes.ref) {
            parsedAttributes.ref(dom);
        }
        if (parsedAttributes.innerHTML) {
            // if there is innerHTML attribute
            // we will stop processing children
            iDom.skip();
            afterSet.push(function () { return dom.innerHTML = parsedAttributes.innerHTML; });
        }
        else if (dom.childrenAttachedCallback) {
            // if custom element contains childrenAttachedCallback
            // we will not process children and component will do this by self
            iDom.skip();
            // we are postpone this because childrenAttachedCallback can trigger
            // next render cycle , but this have to be done after current cycle ends
            afterSet.push(function () { return dom.childrenAttachedCallback(children); });
        }
        else if (dom.idomSkip) {
            iDom.skip();
        }
        else {
            processChildren(dom, children, afterSet);
        }
        iDom.elementClose(tagName);
        return dom;
    };
}
exports.h = h;
/**
 * Rendering the content in provided parent.
 *
 * @param parent where to render
 * @param element what to render
 * @return map of referenced children
 *      eg. for render(element, <a ref='myA'/>) will return {myA: HTMLAnchorElement}
 *      eg. for render(element, <div><a ref='myA'/><a ref='myA'/></div>) will return {myA: Array<HTMLAnchorElement>}
 */
function render(parent, element) {
    // postponed operations, we cant use setTimeout, render should be synchronous
    var afterSet = [];
    iDom.patch(parent, element, afterSet);
    if (afterSet.length > 0) {
        afterSet.forEach(function (x) { return x(); });
    }
}
exports.render = render;
//# sourceMappingURL=render.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Parse style value to string.
 * Base on code from https://github.com/OpenJSX/jsx-to-html
 * @see https://github.com/OpenJSX/jsx-to-html/blob/master/index.js#L80
 */
function parseStyles(style) {
    if (typeof style === 'string')
        return style;
    var value = '';
    for (var key in style) {
        if (!Object.prototype.hasOwnProperty.call(style, key))
            continue;
        var val = style[key];
        key = key.replace(/[A-Z]/g, function (m) {
            return '-' + m.toLowerCase();
        });
        if (key.search(/moz-|webkit-|o-|ms-/) === 0) {
            key = '-' + key;
        }
        value += (value ? ' ' : '') + key + ': ' + val + ';';
    }
    return value;
}
exports.parseStyles = parseStyles;
//# sourceMappingURL=styles.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.ownPropertiesSymbol = createSymbol('___smartOwnProperties');
exports.allPropertiesSymbol = createSymbol('___smartAllProperties');
exports.propertiesValuesSymbol = createSymbol('___smartPropertiesValues');
exports.attributePropertyMapSymbol = createSymbol('___smartPropertiesMap');
function createSymbol(description) {
    /* istanbul ignore next */
    return typeof Symbol === 'function' ? Symbol(description) : description;
}
exports.createSymbol = createSymbol;
//# sourceMappingURL=symbol.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), q = [], c, i;
        return i = { next: verb("next"), "throw": verb("throw"), "return": verb("return") }, i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { return function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]), next(); }); }; }
        function next() { if (!c && q.length) resume((c = q.shift())[0], c[1]); }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(c[3], e); } }
        function step(r) { r.done ? settle(c[2], r) : r.value[0] === "yield" ? settle(c[2], { value: r.value[1], done: false }) : Promise.resolve(r.value[1]).then(r.value[0] === "delegate" ? delegate : fulfill, reject); }
        function delegate(r) { step(r.done ? r : { value: ["yield", r.value], done: false }); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { c = void 0, f(v), next(); }
    };

    __asyncDelegator = function (o) {
        var i = { next: verb("next"), "throw": verb("throw", function (e) { throw e; }), "return": verb("return", function (v) { return { value: v, done: true }; }) };
        return o = __asyncValues(o), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { return function (v) { return { value: ["delegate", (o[n] || f).call(o, v)], done: false }; }; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator];
        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wk_jsx_to_idom_1 = __webpack_require__(1);
__webpack_require__(12);
var eventEmitter_1 = __webpack_require__(11);
var stack = [];
var rendering = false;
var renderEventsEmitter = new eventEmitter_1.EventEmitter();
/**
 * This function is used to avoid multiple rendering of component.
 * If parent component is rendering subcomponent, the component will be rendered after parent component rendering ends
 * We can't use debounce based on setTimeout because we need to render components synchronously.
 * @param element
 */
function smartRender(element) {
    var toRender = element.renderCallback();
    if (toRender) {
        if (!rendering) {
            rendering = true;
            renderEventsEmitter.trigger({ element: element });
            try {
                wk_jsx_to_idom_1.render(element, toRender);
            }
            finally {
                rendering = false;
                if (stack.length > 0) {
                    smartRender(stack.shift());
                }
            }
        }
        else {
            var index = stack.indexOf(element);
            if (index > -1) {
                stack.splice(index, 1);
            }
            stack.unshift(element);
        }
    }
}
exports.smartRender = smartRender;
/**
 * Event source for eg. logging rendering events
 */
exports.renderEvent = renderEventsEmitter;
//# sourceMappingURL=smartRender.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var smartElement_1 = __webpack_require__(10);
exports.SmartElement = smartElement_1.SmartElement;
__export(__webpack_require__(9));
__export(__webpack_require__(8));
var smartRender_1 = __webpack_require__(6);
exports.renderEvent = smartRender_1.renderEvent;
//# sourceMappingURL=index.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var symbol_1 = __webpack_require__(4);
function getPropertiesValuesStorage(target) {
    if (!target[symbol_1.propertiesValuesSymbol]) {
        Object.defineProperty(target, symbol_1.propertiesValuesSymbol, {
            value: {},
            configurable: false,
            enumerable: false,
            writable: false
        });
    }
    return target[symbol_1.propertiesValuesSymbol];
}
/**
 *
 */
function getPropertyDescriptor(key, setter, getter) {
    return {
        configurable: false,
        enumerable: false,
        set: function (v) {
            var old = this[key];
            if (old !== v) {
                if (setter) {
                    setter.call(this, v);
                    if (!getter) {
                        getPropertiesValuesStorage(this)[key] = v;
                    }
                }
                else {
                    getPropertiesValuesStorage(this)[key] = v;
                }
                if (this.propertyChangedCallback) {
                    this.propertyChangedCallback(key, old, v);
                }
            }
        },
        get: function () {
            if (getter) {
                return getter.call(this);
            }
            else {
                return getPropertiesValuesStorage(this)[key];
            }
        }
    };
}
/**
 * Calculate the name od attribute base on property description.
 */
function getAttributeName(propName, prop) {
    var attr = prop.attribute;
    var attrName;
    if (typeof attr === 'string') {
        attrName = attr;
    }
    else if (typeof attr === 'object') {
        if (attr.hasOwnProperty('name')) {
            attrName = attr.name;
        }
        else {
            attrName = propName;
        }
    }
    else if (attr) {
        attrName = propName;
    }
    if (attrName) {
        attrName = attrName.toLowerCase();
    }
    return attrName;
}
/**
 * Custom elements decorator.
 * @param selector
 * @param options
 * @return {(target:any)=>any}
 */
function customElement(selector, options) {
    return function (target) {
        // all binded properties we have to expose as observedAttributes
        // and also we need to know how to map attribute names to property names
        // so we will collect the array and map and expose
        var allProperties = target.prototype[symbol_1.allPropertiesSymbol];
        if (allProperties) {
            var attrPropMap_1 = {};
            var observedAttributes_1 = [];
            Object.keys(allProperties).forEach(function (key) {
                var prop = allProperties[key];
                // some properties are configured without options
                if (prop) {
                    // for properties witch are mapped to attributes
                    var attrName = getAttributeName(key, prop);
                    if (attrName) {
                        // we are remember the mapping between names
                        attrPropMap_1[attrName] = key;
                        // we will add attribute to observable set
                        observedAttributes_1.push(attrName);
                    }
                }
            });
            if (observedAttributes_1.length > 0) {
                Object.defineProperty(target.prototype, symbol_1.attributePropertyMapSymbol, {
                    enumerable: false,
                    configurable: true,
                    writable: false,
                    value: attrPropMap_1
                });
                Object.defineProperty(target, 'observedAttributes', {
                    enumerable: false,
                    configurable: true,
                    writable: false,
                    value: observedAttributes_1
                });
            }
        }
        // for own properties we will create setter ang getter
        // the setter will call render if poperty is not set to 'quiet'
        // setter and getter will be proxy for oryginal one if it exists
        if (target.prototype.hasOwnProperty(symbol_1.ownPropertiesSymbol)) {
            var ownProperties = target.prototype[symbol_1.ownPropertiesSymbol];
            Object.keys(ownProperties).forEach(function (key) {
                // for properties we have to made them observable so
                // change of them will trigger the render
                var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
                var getter;
                var setter;
                if (descriptor) {
                    getter = descriptor.get;
                    setter = descriptor.set;
                }
                Object.defineProperty(target.prototype, key, getPropertyDescriptor(key, setter, getter));
            });
        }
        if (typeof window !== 'undefined') {
            window.customElements.define(selector, target);
        }
        else {
            var domino = __webpack_require__(13);
            domino.customElements.define(selector, target);
        }
        return target;
    };
}
exports.customElement = customElement;
//# sourceMappingURL=customElement.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var symbol_1 = __webpack_require__(4);
exports.boolean = {
    deserialize: function (value) {
        return !!value || value == '';
    },
    serialize: function (value) {
        return value ? '' : undefined;
    }
};
exports.int = {
    deserialize: function (value) {
        return value ? parseInt(value, 10) : undefined;
    },
    serialize: function (value) {
        return value ? '' + value : undefined;
    }
};
/**
 * Property decorator.
 * Storing the properties options in type.
 * @param options options of property
 */
function property(options) {
    return function (target, propertyKey) {
        var ownProperties;
        var allProperties;
        if (target.hasOwnProperty(symbol_1.ownPropertiesSymbol)) {
            ownProperties = target[symbol_1.ownPropertiesSymbol];
            allProperties = target[symbol_1.allPropertiesSymbol];
        }
        else {
            ownProperties = {};
            allProperties = Object.assign({}, target[symbol_1.allPropertiesSymbol]);
            Object.defineProperty(target, symbol_1.ownPropertiesSymbol, {
                value: ownProperties,
                enumerable: false,
                writable: false,
                configurable: true,
            });
            Object.defineProperty(target, symbol_1.allPropertiesSymbol, {
                value: allProperties,
                enumerable: false,
                writable: false,
                configurable: true,
            });
        }
        ownProperties[propertyKey] = options;
        allProperties[propertyKey] = options;
    };
}
exports.property = property;
//# sourceMappingURL=property.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(5);
var smartRender_1 = __webpack_require__(6);
var symbol_1 = __webpack_require__(4);
var SmartElement = (function (_super) {
    tslib_1.__extends(SmartElement, _super);
    function SmartElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idomSkip = true;
        return _this;
    }
    Object.defineProperty(SmartElement.prototype, "connected", {
        /**
         * Is element connected to dom or not.
         */
        get: function () {
            return this._connected;
        },
        enumerable: true,
        configurable: true
    });
    SmartElement.prototype.triggerEvent = function (eventOrName, detail) {
        var _this = this;
        // we will do this async
        setTimeout(function () {
            var event;
            var name;
            if (typeof eventOrName === 'string') {
                name = eventOrName;
                if (typeof CustomEvent !== 'undefined') {
                    event = new CustomEvent(eventOrName, { detail: detail });
                }
                else {
                    event = _this.ownerDocument.createEvent('CustomEvent');
                    if (event.initCustomEvent) {
                        event.initCustomEvent(eventOrName, true, false, detail);
                    }
                    else {
                        event.initEvent(eventOrName, true, false);
                        event.detail = detail;
                    }
                }
            }
            else {
                name = eventOrName.type;
                event = eventOrName;
            }
            if (_this.hasAttribute('on' + name.toLowerCase())) {
                try {
                    _this.getEval(_this.getAttribute('on' + name.toLowerCase()), event).apply(_this);
                }
                catch (e) {
                    console.log('Exception on evaluating expression on on' + name + ' attribute. : ' + e.message);
                }
            }
            _this.dispatchEvent(event);
        }, 1);
    };
    /**
     * Called with the nested content.
     */
    SmartElement.prototype.childrenAttachedCallback = function (children) {
    };
    /**
     * Called when the element is inserted into a document.
     * If overwrite, please remember to call super.
     */
    SmartElement.prototype.connectedCallback = function () {
        var _this = this;
        var attrs = this.constructor['observedAttributes'];
        if (attrs) {
            attrs.forEach(function (attr) {
                if (_this.hasAttribute(attr)) {
                    _this.setPropertyFromAttribute(attr, _this.getAttribute(attr));
                }
            });
        }
        this._connected = true;
        this.render();
    };
    /**
     * Called when the element is removed from a document.
     * If overwrite, please remember to call super.
     */
    SmartElement.prototype.disconnectedCallback = function () {
        this._connected = false;
    };
    /**
     * Called when an attribute is changed, appended, removed, or replaced on the element.
     * Only called for observed attributes.
     * If overwrite, please remember to call super.
     */
    SmartElement.prototype.attributeChangedCallback = function (attrName, oldVal, newVal) {
        if (newVal !== oldVal) {
            this.setPropertyFromAttribute(attrName, newVal);
        }
    };
    /**
     * Called when an property is changed.
     * Only called for decorated @properties.
     * If overwrite, please remember to call super.
     */
    SmartElement.prototype.propertyChangedCallback = function (propName, oldVal, newVal) {
        // do not rerender on quiet props
        if (!this[symbol_1.allPropertiesSymbol] ||
            !this[symbol_1.allPropertiesSymbol][propName] ||
            !this[symbol_1.allPropertiesSymbol][propName].quiet) {
            this.render();
        }
    };
    /**
     * Please try to do not call this by self.
     */
    SmartElement.prototype.render = function () {
        if (this.connected) {
            smartRender_1.smartRender(this);
        }
    };
    SmartElement.prototype.setPropertyFromAttribute = function (attrName, value) {
        if (!this[symbol_1.attributePropertyMapSymbol] || !this[symbol_1.allPropertiesSymbol]) {
            return;
        }
        var propName = this[symbol_1.attributePropertyMapSymbol][attrName];
        if (propName) {
            var propOptions = this[symbol_1.allPropertiesSymbol][propName];
            if (propOptions && propOptions.attribute) {
                var attr = propOptions.attribute;
                if (typeof attr === "object") {
                    if (attr.hasOwnProperty('type')) {
                        this[propName] = attr.type.deserialize(value);
                    }
                    else if (attr.hasOwnProperty('deserialize')) {
                        this[propName] = attr.deserialize(value);
                    }
                    else {
                        this[propName] = value;
                    }
                }
                else {
                    this[propName] = value;
                }
            }
        }
    };
    SmartElement.prototype.getEval = function (exp, event) {
        return function fn() {
            /* tslint:disable:no-eval */
            return eval(exp);
        };
    };
    return SmartElement;
}(HTMLElement));
exports.SmartElement = SmartElement;
//# sourceMappingURL=smartElement.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

;
/**
 * Base event emitter
 *
 * @usage
 *  import { EventEmitter } from 'wk-events/common/eventEmitter';
 *
 *  // create new emitter
 *  evtLoggedIn = new EventEmitter<string>;
 *
 *  // add listeners
 *  const unsubscribe = evtLoggedIn.on(updateUserInfo);
 *
 *  // notify all listeners with specific parameter
 *  evtLoggedIn.trigger('OK');
 *
 *  updateUserInfo(status: string): void {
 *      // unsubscribe listener with off method
 *      evtLogeddIn.off(updateUserInfo)
 *      // or with unsubscribe function
 *      unsubscribe()
 *  }
 */
var EventEmitter = (function () {
    function EventEmitter() {
        /**
         * the array of handlers
         */
        this.targets = [];
    }
    /**
     * Subscribes any handler for this event
     */
    EventEmitter.prototype.on = function (target) {
        var _this = this;
        this.targets.push(target);
        return function () {
            _this.off(target);
        };
    };
    /**
     * Unsubscribes a specific handler from the event
     */
    EventEmitter.prototype.off = function (target) {
        var targetIndex = this.targets.indexOf(target);
        if (targetIndex >= 0) {
            this.targets.splice(targetIndex, 1);
        }
    };
    /**
     * Runs all subscribed handlers
     * @param args
     */
    EventEmitter.prototype.trigger = function (args) {
        for (var _i = 0, _a = this.targets; _i < _a.length; _i++) {
            var target = _a[_i];
            target(args);
        }
    };
    /**
     * Returns new emitter which is triggered when
     * event satisfies condition of predicate
     *
     * {@usage}
     * const emitter = new EventEmitter<number>;
     * const filtered = emitter.filter(x => x%2 == 0)
     * filtered.on(e => console.log(e));
     *
     * emitter.trigger(1) // nothing
     * emitter.trigger(2) // => logs 2
     */
    EventEmitter.prototype.filter = function (predicate) {
        return this.chain(function (input, output) {
            if (predicate(input)) {
                output.trigger(input);
            }
        });
    };
    /**
     * Returns new emitter by mapping events of this events through
     * a transformation function
     *
     * @{usage}
     * const emitter = new EventEmitter<number>
     * const mapped = emitter.map(x => String(x*2))
     * mapped.on(e => console.log(e))
     *
     * emitter.trigger(5) // => logs '10'
     */
    EventEmitter.prototype.map = function (transform) {
        return this.chain(function (input, output) {
            output.trigger(transform(input));
        });
    };
    /**
     * Retuns new emitter which starts listen to this
     * when someone subscribes to the new emitter
     * and stops listen to this when everyone unsubscribed from it
     * {@param} Chain<T, O> function which decides whether and how to trigger
     *                     output emitter depends on value of input event
     *
     * {@usage}
     * // do not propagate null values downstream
     * // and convert strings to numbers
     * const emitter = new EventEmitter<string>
     * const chained = emitter.chain((input: string, output: EventEmitter<number>) => {
     *     if(input !== null) output.trigger(Number(input))
     * })
     * chained.on(e => console.log(e))
     *
     * emitter.trigger(null) // nothing
     * emitter.trigger('10') // => logs 10
     */
    EventEmitter.prototype.chain = function (chain) {
        return new ChainedEmitter(chain, this);
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
var ChainedEmitter = (function (_super) {
    __extends(ChainedEmitter, _super);
    function ChainedEmitter(chain, source) {
        var _this = this;
        _super.call(this);
        this.source = source;
        this.triggerWith = function (input) { return chain(input, _this); };
    }
    ChainedEmitter.prototype.on = function (target) {
        // if there is no connection between this and source
        // then create it
        if (this.targets.length === 0) {
            this.source.on(this.triggerWith);
        }
        return _super.prototype.on.call(this, target);
    };
    ChainedEmitter.prototype.off = function (target) {
        _super.prototype.off.call(this, target);
        // if there is no targets left in chained emitter
        // then unsubscribe from source
        if (this.targets.length === 0) {
            this.source.off(this.triggerWith);
        }
    };
    return ChainedEmitter;
}(EventEmitter));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Applying helpers to some context.
 * @param context where helpers will be definied
 */
function applyToContext(context) {

    // this code is copied from typescript 1.8.0 code

    context.__extends = context.__extends || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            function __() {
                this.constructor = d;
            }

            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    context.__decorate = context.__decorate || function (decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
    context.__metadata = context.__metadata || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };
    context.__param = context.__param || function (paramIndex, decorator) {
            return function (target, key) {
                decorator(target, key, paramIndex);
            }
        };
    context.__awaiter = context.__awaiter || function (thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function (resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function step(result) {
                    result.done ? resolve(result.value) : new P(function (resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
                }

                step((generator = generator.apply(thisArg, _arguments)).next());
            });
        };
}

// To browser globals
if (typeof window !== "undefined") {
    applyToContext(window);
}

// To new style node globals
if (typeof global !== "undefined") {
    applyToContext(global);
}

// To old style node globals
if (typeof GLOBAL !== "undefined") {
    applyToContext(GLOBAL);
}

// Export helpers
if (true) {
    applyToContext(module.exports);
} else if (typeof exports === 'object') {
    applyToContext(exports);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = null;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(5);
var wk_jsx_to_idom_1 = __webpack_require__(1);
var wk_smart_elements_1 = __webpack_require__(7);
var iDom = __webpack_require__(0);
var counter = 0;
iDom.notifications.nodesCreated = function (nodes) {
    counter += nodes.length;
    console.log('TOTAL NODES CREATED: ', counter);
};
var ccc = 0;
var Database = (function (_super) {
    tslib_1.__extends(Database, _super);
    function Database() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Database.prototype.renderQuery = function (query) {
        return (wk_jsx_to_idom_1.h("span", { className: 'Query ' + query.elapsedClassName },
            wk_jsx_to_idom_1.h("span", null, query.formatElapsed || ' '),
            wk_jsx_to_idom_1.h("div", { className: "popover left" },
                wk_jsx_to_idom_1.h("div", { className: "popover-content" }, query.query),
                wk_jsx_to_idom_1.h("div", { className: "arrow" }))));
    };
    Database.prototype.renderCallback = function () {
        if (this.dbname && this.lastSample) {
            return (wk_jsx_to_idom_1.h("div", null,
                wk_jsx_to_idom_1.h("span", { className: "dbname" }, this.dbname),
                wk_jsx_to_idom_1.h("span", { className: "query-count" },
                    wk_jsx_to_idom_1.h("span", { className: this.lastSample.countClassName }, this.lastSample.nbQueries)),
                this.lastSample.topFiveQueries.map(this.renderQuery)));
        }
    };
    return Database;
}(wk_smart_elements_1.SmartElement));
tslib_1.__decorate([
    wk_smart_elements_1.property({ attribute: true, quiet: true })
], Database.prototype, "dbname", void 0);
tslib_1.__decorate([
    wk_smart_elements_1.property({ attribute: true })
], Database.prototype, "lastMutationId", void 0);
Database = tslib_1.__decorate([
    wk_smart_elements_1.customElement('m-db')
], Database);
var DBMon = (function (_super) {
    tslib_1.__extends(DBMon, _super);
    function DBMon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.databases = [];
        return _this;
    }
    DBMon.prototype.loadSamples = function () {
        this.databases = ENV.generateData(true).toArray();
        Monitoring.renderRate.ping();
        this.render();
        setTimeout(this.loadSamples.bind(this), ENV.timeout);
    };
    DBMon.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.loadSamples();
    };
    DBMon.prototype.renderDatabase = function (database) {
        if (database) {
            return (wk_jsx_to_idom_1.h("m-db", { lastMutationId: database.lastMutationId, dbname: database.dbname, samples: database.samples, lastSample: database.lastSample }));
        }
    };
    DBMon.prototype.renderCallback = function () {
        return (wk_jsx_to_idom_1.h("div", null, this.databases.map(this.renderDatabase)));
    };
    return DBMon;
}(wk_smart_elements_1.SmartElement));
DBMon = tslib_1.__decorate([
    wk_smart_elements_1.customElement('m-dbmon')
], DBMon);
document.getElementById('dbmon').innerHTML = '<m-dbmon></m-dbmon>';
//# sourceMappingURL=app-ce.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=app-ce-bundle.js.map