"use strict";
var tslib_1 = require("tslib");
var wk_jsx_to_idom_1 = require("wk-jsx-to-idom");
var wk_smart_elements_1 = require("wk-smart-elements");
var iDom = require("incremental-dom");
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