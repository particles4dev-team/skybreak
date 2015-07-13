/**
 * Stability: 1 - Experimental
 */
var gulp    = require('gulp');
var del     = require('del');
var config  = require('../config');

gulp.task('clean', function(done) {
    // clean out directory before build
    del(config.del.files, done);
});