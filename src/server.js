const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nconf = require('nconf');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const React = require('react');
const Router = require('react-router');
const t = require('transducers.js');
const { seq, compose, map, filter } = t;
const PROD = process.env.NODE_ENV === 'production';
const DocMeta = require("react-doc-meta");

require('./loadJsonFiles');
require('../_config');
// convert .md to .json
require.context(
    '../posts', // context folder
    true, // include subdirectories
    /\.md$/ // RegExp
);

/**
 * Define isomorphic constants.
 */
nconf.argv().env().file({
    file: relativePath('./_config.skybreak.json')
}).defaults({

});

const routes = require('../_themes/' + nconf.get('public:layouts') + '/components/Routes');

let app = express();
app.use(bodyParser.json());

app.use(cors());

// TEMPLATE
// =============================================================================
function relativePath (p) {
    return path.join(__dirname, p);
}

function read (filename) {
    return fs.readFileSync(path.join(relativePath('./'), filename), 'utf8');
}

let appTemplate = handlebars.compile(read( nconf.get('template:file') ));

// hand STATIC REQUEST
// http://expressjs.com/starter/static-files.html
app.use('/public', express.static(path.join(relativePath('../build/public'))));
// =============================================================================

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// define the versions
// let VERSIONS = {'Pre-Production': '/v0', 'Version 1': '/v1'};
let VERSIONS = { 'Version 0': 'v0' };
let api = require('./api');

app.get('/api', function (req, res) {
    res.json(VERSIONS);
});

// versioned routes go in the api/ directory
// import the routes
for (let k in VERSIONS) {
    app.use('/api/' + VERSIONS[k], api[VERSIONS[k]]);
}

app.get('/api/*', function (req, res) {
    res.send('bad API request');
});

// =============================================================================
app.use('*', function (req, res) {
    Router.run(routes, req.originalUrl, function (Handler, state) {
        let results = [];

        let { params, query } = state;

        let requests = seq(state.routes, compose(
            filter(x => x.handler.fetchData),
            map(x => {
                let handler = x.handler;
                return {
                    name: x.name,
                    request: handler.fetchData,
                    params: params
                };
            }),
            // filter(x => !!x.request)
        ));

        requests.map( function (a) {
            results.push(a.request(a.name, params, query));
        });
        Promise.all(results)
        .then(values => {
            let data = {};
            values.map((d) => {
                data[d.routerName] = d.data;
            });
            parseHTML(res, data, Handler);
        });
    });
});

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '="' + obj[p] + '" ';
        }
    }
    return str;
}

function parseHTML (res, data, Handler) {
    let html = React.renderToString(<Handler data={data} />);
    let metaTags = '';
    DocMeta.rewind().map((tag, index) =>
        metaTags += (`<meta data-doc-meta="true" key="${index}" ${ objToString(tag) }/>`))

    let result = appTemplate({
        content: html,
        payload: JSON.stringify(data),
        metaTags: metaTags,
        // bodyClass: bodyClass,
        configClient: JSON.stringify(nconf.get('public')),
        title: nconf.get('public:general:title') + ' | ' + nconf.get('public:layouts'),
        webpackURL: PROD ? '/public/' : nconf.get('webpackURL') + '/dist/',
        publicURL: PROD ? '/public/' : nconf.get('url') + '/public/'
    });
    res.send(result);
}

let port = nconf.get('http:port');
app.listen(port);
console.log('Listening on port ' + port);
