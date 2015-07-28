var gulp                = require('gulp');
var webpack             = require('webpack');
var WebpackDevServer    = require('webpack-dev-server');
var path                = require('path');
var nodemon             = require('nodemon');
var runSequence         = require('run-sequence');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var backend             = require('../../config/webpack.server');

gulp.task('develop', function (done) {
  runSequence(
    'webpack:backend-watch',
    'server'
  );
});

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

gulp.task('webpack:backend-watch', function (done) {

  console.log('Backend warming up...');
  var firedDone = false;

  // http://webpack.github.io/docs/configuration.html#watch
  // Enter watch mode, which rebuilds on file change.
  // Delay the rebuilt after the first change. Value is a time in ms.

  webpack(backend).watch(100, function(err, stats) {
    if(!firedDone) { done(); firedDone = true; }
    onBuild(err, stats);
    // nodemon.restart();
  });
});

gulp.task('backend', function (done) {
  webpack(backend).run(function(err, stats) {
    onBuild(err, stats);
    done();
  });
});

gulp.task('server', function() {
  // https://github.com/remy/nodemon
  nodemon({
    // Using nodejs for nodemon
    execMap: {
      js: 'node'
    },

    // your node app
    script: path.join(__rootPath, 'build/backend'),
    
    // Note that by default, nodemon will ignore the .git, node_modules, bower_components and .sass-cache directories.
    // ignore everthing
    ignore: ['*'],
    
    // Now nodemon will only restart if there are changes in the ./foo directory.
    watch: ['foo/'],

    // Running non-node scripts
    // Ex. nodemon --exec "python -v" ./app.py
    ext: 'noop',

    verbose: true
  }).on('restart', function() {
    console.log('Patched!');
  });
});