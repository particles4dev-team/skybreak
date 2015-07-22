import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './components/Routes';

const t = require('transducers.js');
const { range, seq, compose, map, filter, take } = t;

let app = express();
app.use(bodyParser.json());

app.use(cors());

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:4000/test)
router.get('/', function(req, res) {
  console.log('hello');
  res.json({ message: 'hooray! welcome to our api!' });   
});

// =============================================================================

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);


// app.get('/api/*', function(req, res) {
//   res.send('bad API request');
// });


var fs                  = require('fs');
var path                = require('path');
const React             = require('react');
const Router            = require('react-router');

// var obj = JSON.parse(fs.readFileSync(path.join(__dirname, '../_content/posts.json'), 'utf8'));
// console.log(obj);
// app.use('/about', function(req, res) {
//     console.log('hello', req.path);
// });
app.use('*', function(req, res) {
  Router.run(routes, req.originalUrl, function(Handler, state) {
    console.log('===================================================');

    seq(
    state.routes,
    map(function(x) { console.log(x.name); })
    )
    
    console.log('===================================================');
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
    res.send(html);
  });
});


var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port " + port);


console.log('===================================================');

let requests = seq(
    [1, 2, 3],
    // map(function(x) { return x; }),
    map(x => x + 1)
);
console.log(requests, 'requests');

var transform = compose(
  map(x => x * 3),
  filter(x => x % 2 === 0),
  take(1)
);

console.log(seq([1, 2, 3, 4, 5], transform), 'seq([1, 2, 3, 4, 5], transform)');

console.log('===================================================');