"use strict";
var wk_jsx_to_idom_1 = require("wk-jsx-to-idom");
var iDom = require("incremental-dom");
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