var gulp                = require('gulp');
var fm                  = require('gulp-front-matter');
var fs                  = require('fs');

var handleErrors = require('../util/handleErrors');

gulp.task('yaml', function () {
  // gulp.src(__rootPath + '/posts/*.yml')
  // .pipe(fm({property: 'meta'})
  // .on('error', handleErrors))
  // .pipe(gulp.dest(__rootPath + '/_content/'));
});

gulp.task('yaml:watch', function () {
  // gulp.watch(config.src, ['yaml']);
});