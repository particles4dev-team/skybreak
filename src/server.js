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
const { range, seq, compose, map, filter, take } = t;
const routes = require('./components/Routes');
const api = require('./api');
const PROD = process.env.NODE_ENV === 'production';

// convert .md to .json
require.context(
  "../posts", // context folder
  true, // include subdirectories
  /\.md$/ // RegExp
);

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;

nconf.argv().env().file({
  file: relativePath('../config/config.json')
}).defaults({

});

let app = express();
app.use(bodyParser.json());

app.use(cors());

// TEMPLATE
// =============================================================================
function relativePath(p) {
  return path.join(__dirname, p);
}

function read(filename) {
  return fs.readFileSync(path.join(relativePath('../'), filename), 'utf8');
}

var appTemplate = handlebars.compile(read( nconf.get("template:file") ));


// hand STATIC REQUEST
// http://expressjs.com/starter/static-files.html
app.use('/public', express.static(path.join(relativePath('../build/public'))));
// =============================================================================

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', api);

app.get('/api/*', function(req, res) {
  res.send('bad API request');
});

app.use('*', function(req, res) {
  Router.run(routes, req.originalUrl, function(Handler, state) {
    let data = [];

    var { params, query } = state;

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

    requests.map(function (a) {
      data.push(a.request(a.name, params, query));
    });

    Promise.all(data)
    .then(values => {
      if(!values || values.length == 0){
        var html = React.renderToString(<Handler data={{}} />);
        var result = appTemplate({
          content: html,
          payload: JSON.stringify(data),
          // bodyClass: bodyClass,
          configClient: JSON.stringify(nconf.get('public')),
          title: nconf.get('public:general:title'),
          webpackURL: PROD ? nconf.get('url') + '/public/' : nconf.get('webpackURL') + '/dist/'
        });
        res.send(result);
        return;
      }
      let data = {};
      values.map((d) => {
        data[d.routerName] = d.data;

        var html = React.renderToString(<Handler data={data} />);
        var result = appTemplate({
          content: html,
          payload: JSON.stringify(data),
          // bodyClass: bodyClass,
          configClient: JSON.stringify(nconf.get('public')),
          title: nconf.get('public:general:title'),
          webpackURL: PROD ? nconf.get('url') + '/public/' : nconf.get('webpackURL') + '/dist/'
        });
        res.send(result);

      });
    });

  });
});

var port = nconf.get('http:port');
app.listen(port);
console.log("Listening on port " + port);