var gulp            = require('gulp');
var environment     = require('../util/environment');
var runSequence     = require('run-sequence');

gulp.task('default', function (cb) {

  runSequence(
  'webpack:backend',
  'server',
  cb);

  var message =
  '---- iojs-vi website ----\n' +
  'gulp tasks available:\n'   +
  '- develop // Runs the `build` and `server` tasks and also keeps a watcher running\n' +
  '- build   // build the HTML and CSS files\n'   +
  '- server  // start the local dev server\n'  +
  '- clean   // clean out directory\n';

  console.log(message);
});