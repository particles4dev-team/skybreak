'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var sourcemaps  = require('gulp-sourcemaps');
var config      = require('../config').sass;

var handleErrors = require('../util/handleErrors');
// http://alfanso.com/concatinating-all-css-files-into-a-single-css-file-using-gulp-js/

gulp.task('sass', function () {
    gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync(config.settings)
    .on('error', handleErrors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(config.dest));
});