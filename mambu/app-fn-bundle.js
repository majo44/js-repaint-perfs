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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var render_1 = __webpack_require__(2);
exports.render = render_1.render;
exports.h = render_1.h;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wk_jsx_to_idom_1 = __webpack_require__(1);
var iDom = __webpack_require__(0);
var counter = 0;
iDom.notifications.nodesCreated = function (nodes) {
    counter += nodes.length;
    console.log('TOTAL NODES CREATED: ', counter);
};
var host = document.getElementById('dbmon');
function renderQuery(query) {
    return (wk_jsx_to_idom_1.h("td", { className: 'Query ' + query.elapsedClassName },
        query.formatElapsed || ' ',
        wk_jsx_to_idom_1.h("div", { className: "popover left" },
            wk_jsx_to_idom_1.h("div", { className: "popover-content" }, query.query),
            wk_jsx_to_idom_1.h("div", { className: "arrow" }))));
}
function renderDb(dbname, lastSample) {
    if (dbname && lastSample) {
        return (wk_jsx_to_idom_1.h("tr", null,
            wk_jsx_to_idom_1.h("td", { className: "dbname" }, dbname),
            wk_jsx_to_idom_1.h("td", { className: "query-count" },
                wk_jsx_to_idom_1.h("span", { className: lastSample.countClassName }, lastSample.nbQueries)),
            lastSample.topFiveQueries.map(renderQuery)));
    }
}
function renderDatabase(database) {
    if (database) {
        return renderDb(database.dbname, database.lastSample);
    }
}
function renderTable(databases) {
    return (wk_jsx_to_idom_1.h("div", null,
        wk_jsx_to_idom_1.h("table", { className: "table table-striped latest-data" },
            wk_jsx_to_idom_1.h("tbody", null, databases.map(renderDatabase)))));
}
function loadSamples() {
    var databases = ENV.generateData(true).toArray();
    Monitoring.renderRate.ping();
    setTimeout(loadSamples, ENV.timeout);
    wk_jsx_to_idom_1.render(host, renderTable(databases));
}
loadSamples();
//# sourceMappingURL=app-fn.js.map

/***/ }),

/***/ 2:
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

/***/ 3:
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

/***/ })

/******/ });
//# sourceMappingURL=app-fn-bundle.js.map