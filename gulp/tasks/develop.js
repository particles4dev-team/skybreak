var gulp                = require('gulp');
var webpack             = require('webpack');
var WebpackDevServer    = require('webpack-dev-server');
var config              = require('../webpack.config');

gulp.task('develop', function (done) {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    done();
    console.log('Listening at localhost:3000');
  });
});