/*global document, window*/
// https://github.com/rackt/react-router-mega-demo/blob/master/app/client.js
import React from 'react';
import Router from 'react-router';
import nconf from 'nconf';

function decodeTextContent (str) {
    return str.replace(/(&lt;|&gt;|&amp;|&quot;)/g, function (s) {
        return {
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&quot;': '"'
        }[s];
    });
}

let config = JSON.parse(
    decodeTextContent(document.getElementById('config').textContent)
);

nconf.defaults(config);

// import css
require('../_themes/' + nconf.get('layouts') + '/sass/main.scss');

const routes = require('../_themes/' + nconf.get('layouts') + '/components/Routes');

let payload = JSON.parse(
    document.getElementById('payload').textContent
);

function getData (routerState, cb, initialData) {
    if(initialData) {
        cb(initialData);
        return;
    }
    let { params, query } = routerState;

    let list = routerState.routes.filter((route) => {
        return route.handler.fetchData;
    }).reduce((promises, route) => {
    promises.push(route.handler.fetchData(route.name, params, query));
        return promises;
    }, []);

    Promise.all(list)
    .then(values => {
        let data = {};
        values.map((d) => {
            data[d.routerName] = d.data;
        });
        return cb(data);
    });
}

Router.run(routes, Router.HistoryLocation, (Root, state) => {
    getData(state, (d) => {
        React.render(<Root data={d}/>, document.getElementById('mount'));
    }, payload);
    payload = null;
});
