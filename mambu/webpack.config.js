let webpack = require('webpack');
let path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        'app-ce-bundle.js': "./app-ce.js",
        'app-fn-bundle.js': "./app-fn.js"
    },
    externals: [
        {
            'domino' : 'var null'
        }
    ],
    devtool: "#source-map",
    output: {
        path: __dirname,
        filename: "[name]"
    },
    node : {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
        setImmediate: false
    },
    resolve: {
        alias : {
            "incremental-dom": __dirname + "/node_modules/incremental-dom/dist/incremental-dom-min.js",
            "tslib" :   __dirname + "/node_modules/tslib/tslib.js",
        }
    }
};
