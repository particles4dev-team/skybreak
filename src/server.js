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
require('../posts/2015-07-27-weekly-update.md');

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;

nconf.argv().env().file({
  file: relativePath('../config/config.json')
}).defaults({

});

const PROD = process.env.NODE_ENV === 'production';

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

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:4000/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/posts', function(req, res) {
  res.json(JSON.parse(fs.readFileSync(path.join(__dirname, './_content/posts.json'), 'utf8')));
});

router.get('/post/:id', function(req, res) {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, './_content/posts.json'), 'utf8')).data; 
  for(var i = 0; i < posts.length; i ++) {
    if(posts[i]._id == req.params.id){
      res.json(posts[i]);
      break;
    }
  }
});

router.get('/category/:id', function(req, res) {
  res.json({data: [
    {
      "_id": "134",
      "title": "A great story never told",
      "description": "It was a cold December morning, as I sat out on my porch I decided today was the day.",
      "category": "Storytime",
      "tags": ["Storytime"],
      "author": {
        "name": "Le Hoang"
      }
    }
  ]
  });
});

// =============================================================================

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

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