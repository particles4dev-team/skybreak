'use strict';

var gulp        = require('gulp');
var webpack     = require('webpack');
var nodemon     = require('nodemon');
var gutil       = require('gulp-util');
var config      = require('../config').webpack;

var handleErrors = require('../util/handleErrors');

var outputOptions = {
  cached: false,
  cachedAssets: false,
  exclude: ['node_modules', 'components']
};
function onBuild(err, stats) {
  if(err) {
    throw new Error(err);
  }
  console.log(stats.toString(outputOptions));
}

gulp.task('webpack:frontend', function () {
    
});

gulp.task('webpack:backend', function (done) {

  gutil.log('Backend warming up...');
  var firedDone = false;

  // http://webpack.github.io/docs/configuration.html#watch
  // Enter watch mode, which rebuilds on file change.
  // Delay the rebuilt after the first change. Value is a time in ms.

  webpack(config.backend).watch(100, function(err, stats) {
    if(!firedDone) { done(); firedDone = true; }
    onBuild(err, stats);
    nodemon.restart();
  });
});