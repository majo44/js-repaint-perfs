import * as skate from 'skatejs';
let h = skate.h;

let customElements: any = (window as any).customElements;

let ccc = 0;
declare let ENV: any;
declare let Monitoring: any;

customElements.define('m-db', class extends skate.Component<{dbname: any, lastMutationId: any}> {

    static get props () {
        return {
            lastMutationId: { attribute: true },
        };
    }

    get shadowRoot () {
        return this;
    }
    samples: any ;
    lastSample: any;
    dbname: any ;
    lastMutationId: any ;

	renderQuery(query: any) {
		return (
            <span class={'Query '+query.elapsedClassName}>
                <span>{ query.formatElapsed || ' ' }</span>
				<div class="popover left">
					<div class="popover-content">{ query.query }</div>
					<div class="arrow" />
				</div>
			</span>
		);
	}

    renderCallback() {
	    if (this.dbname && this.lastSample) {
            return (
                <div>
                    <span class="dbname">
                        {this.dbname}
                    </span>
                    <span class="query-count">
					<span class={this.lastSample.countClassName}>
						{this.lastSample.nbQueries}
					</span>
                    </span>
                    {this.lastSample.topFiveQueries.map(this.renderQuery) }
                </div>
            );
        }
	}
});


customElements.define('m-dbmon', class extends skate.Component<{}> {

    databases: any;

    static get props () {
        return {
            databases: true,
        };
    }

    get shadowRoot () {
        return this;
    }

    loadSamples() {
        this.databases = ENV.generateData(true).toArray().slice();
        Monitoring.renderRate.ping();
        setTimeout(this.loadSamples.bind(this), ENV.timeout);
    }

    connectedCallback () {
        this.loadSamples();
        super.connectedCallback();
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

    renderCallback () {
        return (
            <div>
                { this.databases.map(this.renderDatabase) }
            </div>
        );
    }
});


document.getElementById('dbmon').innerHTML = '<m-dbmon></m-dbmon>';

declare global {
    module JSX {
        interface IntrinsicElements {
            [key: string]: any
        }
    }
}
