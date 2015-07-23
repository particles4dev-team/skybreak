import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './components/Routes';

const t = require('transducers.js');
const { range, seq, compose, map, filter, take } = t;

import fs from 'fs';
import path from 'path';
import handlebars  from 'handlebars';

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;

let app = express();
app.use(bodyParser.json());

app.use(cors());

// TEMPLATE
// =============================================================================
function relativePath(p) {
  return path.join(__dirname, p);
}

function read(filename) {
  return fs.readFileSync(path.join(relativePath('../src'), filename), 'utf8');
}

var appTemplate = handlebars.compile(read('template.html'));

// =============================================================================

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:4000/test)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/posts', function(req, res) {
  res.json(JSON.parse(fs.readFileSync(path.join(__dirname, '../_content/posts.json'), 'utf8')));
});

// =============================================================================

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.get('/api/*', function(req, res) {
  res.send('bad API request');
});

const React             = require('react');
const Router            = require('react-router');

app.use('*', function(req, res) {
  Router.run(routes, req.originalUrl, function(Handler, state) {
    let data = {};
    let requests = seq(state.routes, compose(
        filter(x => x.handler.fetchData),
        map(x => {
          let handler = x.handler;
          return {
            name: x.name,
            request: handler.fetchData
          };
        }),
        // filter(x => !!x.request)
    ));

    requests.map(function (a) {
        data[a.name] = a.request();
    });

    var html = React.renderToString(<Handler data={data} path={req.path} />);
    var result = appTemplate({
      content: html,
      // payload: encodeTextContent(JSON.stringify(payload)),
      // bodyClass: bodyClass,
      title: 'iojs vietnam community',
      // webpackURL: nconf.get('webpackURL')
    });
    res.send(result);
  });
});

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port " + port);