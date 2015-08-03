/**
 * Stability: 1 - Experimental
 */
var gulp                = require('gulp');
var child_process       = require('child_process');

gulp.task('build:client', function(done) {
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

gulp.task('build:server', function (done) {
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
