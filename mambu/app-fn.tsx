import { h, render } from 'wk-jsx-to-idom'

import * as iDom from 'incremental-dom';
let counter = 0;
(iDom as any).notifications.nodesCreated = function(nodes: Array<any>) {
    counter += nodes.length;
    console.log('TOTAL NODES CREATED: ', counter);
};

declare let ENV: any;
declare let Monitoring: any;


let host = document.getElementById('dbmon');

function renderQuery(query: any) {
    return (
        <td className={'Query '+query.elapsedClassName}>
            { query.formatElapsed || ' ' }
            <div className="popover left">
                <div className="popover-content">{ query.query }</div>
                <div className="arrow" />
            </div>
        </td>
    );
}

function renderDb(dbname: any, lastSample: any) {
    if (dbname && lastSample) {
        return (
            <tr>
                <td className="dbname">
                    {dbname}
                </td>
                <td className="query-count">
					<span className={lastSample.countClassName}>
						{lastSample.nbQueries}
					</span>
                </td>
                {lastSample.topFiveQueries.map(renderQuery) }
            </tr>
        );
    }
}

function renderDatabase(database: any) {
    if (database) {
        return renderDb(database.dbname, database.lastSample);
    }
}

function renderTable(databases: any) {
    return (
        <div>
            <table className="table table-striped latest-data">
                <tbody>
                { databases.map(renderDatabase) }
                </tbody>
            </table>
        </div>
    );
}

function loadSamples() {
    let databases = ENV.generateData(true).toArray();
    Monitoring.renderRate.ping();
    setTimeout(loadSamples, ENV.timeout);
    render(host, renderTable(databases));
}
loadSamples();

declare global {
    module JSX {
        interface IntrinsicElements {
            [key: string]: any
        }
    }
}
