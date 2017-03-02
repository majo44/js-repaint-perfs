"use strict";
var tslib_1 = require("tslib");
var skate = require("skatejs");
var h = skate.h;
var customElements = window.customElements;
var ccc = 0;
customElements.define('m-db', (function (_super) {
    tslib_1.__extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(class_1, "props", {
        get: function () {
            return {
                lastMutationId: { attribute: true },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "shadowRoot", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.renderQuery = function (query) {
        return (h("span", { class: 'Query ' + query.elapsedClassName },
            h("span", null, query.formatElapsed || ' '),
            h("div", { class: "popover left" },
                h("div", { class: "popover-content" }, query.query),
                h("div", { class: "arrow" }))));
    };
    class_1.prototype.renderCallback = function () {
        if (this.dbname && this.lastSample) {
            return (h("div", null,
                h("span", { class: "dbname" }, this.dbname),
                h("span", { class: "query-count" },
                    h("span", { class: this.lastSample.countClassName }, this.lastSample.nbQueries)),
                this.lastSample.topFiveQueries.map(this.renderQuery)));
        }
    };
    return class_1;
}(skate.Component)));
customElements.define('m-dbmon', (function (_super) {
    tslib_1.__extends(class_2, _super);
    function class_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(class_2, "props", {
        get: function () {
            return {
                databases: true,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2.prototype, "shadowRoot", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    class_2.prototype.loadSamples = function () {
        this.databases = ENV.generateData(true).toArray().slice();
        Monitoring.renderRate.ping();
        setTimeout(this.loadSamples.bind(this), ENV.timeout);
    };
    class_2.prototype.connectedCallback = function () {
        this.loadSamples();
        _super.prototype.connectedCallback.call(this);
    };
    class_2.prototype.renderDatabase = function (database) {
        if (database) {
            return (h("m-db", { lastMutationId: database.lastMutationId, dbname: database.dbname, samples: database.samples, lastSample: database.lastSample }));
        }
    };
    class_2.prototype.renderCallback = function () {
        return (h("div", null, this.databases.map(this.renderDatabase)));
    };
    return class_2;
}(skate.Component)));
document.getElementById('dbmon').innerHTML = '<m-dbmon></m-dbmon>';
//# sourceMappingURL=app.js.map