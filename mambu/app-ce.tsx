import { h, render } from 'wk-jsx-to-idom'
import {SmartElement, property, customElement} from 'wk-smart-elements';

import * as iDom from 'incremental-dom';
let counter = 0;
(iDom as any).notifications.nodesCreated = function(nodes: Array<any>) {
    counter += nodes.length;
    console.log('TOTAL NODES CREATED: ', counter);
};

declare let ENV: any;
declare let Monitoring: any;

let ccc = 0;

@customElement('m-db')
class Database extends SmartElement {

    // @property({quiet: true})
    samples: any ;

    // @property({quiet: true})
    lastSample: any;

    @property({attribute: true, quiet: true})
    dbname: any ;

    @property({attribute: true})
    lastMutationId: any ;

	renderQuery(query: any) {
		return (

        <span className={'Query '+query.elapsedClassName}>
                <span>{ query.formatElapsed || ' ' }</span>
				<div className="popover left">
					<div className="popover-content">{ query.query }</div>
					<div className="arrow" />
				</div>
			</span>
		);
	}

    renderCallback() {
	    if (this.dbname && this.lastSample) {
            return (
                <div>
                    <span className="dbname">
                        {this.dbname}
                    </span>
                    <span className="query-count">
					<span className={this.lastSample.countClassName}>
						{this.lastSample.nbQueries}
					</span>
                    </span>
                    {this.lastSample.topFiveQueries.map(this.renderQuery) }
                </div>
            );
        }
	}
}

@customElement('m-dbmon')
class DBMon extends SmartElement {
    databases: any = [];

	loadSamples() {
		this.databases = ENV.generateData(true).toArray();
		Monitoring.renderRate.ping();
        this.render();
        setTimeout(this.loadSamples.bind(this), ENV.timeout);
	}

    connectedCallback() {
	    super.connectedCallback();
        this.loadSamples();
    }

    renderDatabase(database: any) {
	    if (database) {
            return (
                <m-db
                    lastMutationId={database.lastMutationId}
                    dbname={database.dbname}
                    samples={database.samples}
                    lastSample={database.lastSample}
                />
            );
        }
	}

    renderCallback() {
		return (
			<div>
                {this.databases.map(this.renderDatabase)}
			</div>
		);
	}
}


document.getElementById('dbmon').innerHTML = '<m-dbmon></m-dbmon>';

declare global {
    module JSX {
        interface IntrinsicElements {
            [key: string]: any
        }
    }
}
