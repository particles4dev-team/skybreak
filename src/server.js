var express         = require('express');
var bodyParser      = require('body-parser');
var React           = require('react');

var ReactApp = React.createFactory(require('./components/ReactApp'));
var ReactApp2 = React.createFactory(require('./components/ReactApp2'));

var app = express();
app.use(bodyParser.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  // React.renderToString takes your component and generates the markup
  var reactHtml = React.renderToString(ReactApp({}));
  var reactHtml2 = React.renderToString(ReactApp2({
  	name: 'le hoang'
  }));
  res.send(reactHtml2);
});
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);