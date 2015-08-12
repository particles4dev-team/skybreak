/**
 * Stability: 1 - Experimental
 */
var gulp                = require('gulp');
var child_process       = require('child_process');
var ejs                 = require('gulp-ejs');
var gutil               = require('gulp-util');
var concat              = require('gulp-concat');
var fs                  = require('fs');
var yaml                = require('js-yaml');

gulp.task('build:client', ['build:client_boilerplate'], function(done) {
    // node ./node_modules/webpack/bin/webpack.js --verbose --colors --display-error-details --config config/webpack.client.js
    var child = child_process.exec('node ./node_modules/webpack/bin/webpack.js --verbose --colors --display-error-details --config config/webpack.client.js',
        function (error, stdout, stderr) {
            // console.log(error, stdout, stderr);
        done();
    });
    child.stdout.on('data', function(buf) {
        console.log('%s', String(buf));
    });
    child.stderr.on('data', function (buf) {
        console.error('%s', String(buf));
    });
});

gulp.task('build:server', ['build:server_boilerplate'], function (done) {
    var child = child_process.exec('node ./node_modules/webpack/bin/webpack.js --verbose --colors --display-error-details --config config/webpack.server.js',
        function (error, stdout, stderr) {
            // console.log(error, stdout, stderr);
        done();
    });
    child.stdout.on('data', function(buf) {
        console.log('%s', String(buf));
    });
    child.stderr.on('data', function (buf) {
        console.error('%s', String(buf));
    });
});

gulp.task('build:server_boilerplate', function () {
    // load config
    var _config = yaml.load(fs.readFileSync('_config.yml', 'utf8'));
    gulp.src('./src/server.boilerplate.js')
    .pipe(ejs({
        layouts: _config.public.layouts
    }).on('error', gutil.log))
    .pipe(concat('server.js'))    
    .pipe(gulp.dest('./src'));
});

gulp.task('build:client_boilerplate', function () {
    // load config
    var _config = yaml.load(fs.readFileSync('_config.yml', 'utf8'));
    gulp.src('./src/client.boilerplate.js')
    .pipe(ejs({
        layouts: _config.public.layouts
    }).on('error', gutil.log))
    .pipe(concat('client.js'))    
    .pipe(gulp.dest('./src'));
});