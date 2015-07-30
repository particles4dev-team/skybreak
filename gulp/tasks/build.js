/**
 * Stability: 1 - Experimental
 */
var gulp                = require('gulp');
var webpack             = require('webpack');
var frontend            = require('../../config/webpack.client');
var backend             = require('../../config/webpack.server');

gulp.task('build:client', function(done) {
    // node ./node_modules/webpack/bin/webpack.js --verbose --colors --display-error-details --config config/webpack.client.js
    // http://webpack.github.io/docs/node.js-api.html
    // https://github.com/webpack/webpack/blob/master/bin/webpack.js
    // --verbose <=> outputOptions.reasons
    // --colors  <=> .outputOptionscolors
    // --display-error-details <=> 
    var outputOptions = Object.create(frontend.stats || {});
    outputOptions.reasons = true;
    outputOptions.colors = true;
    outputOptions.errorDetails = true;
    outputOptions.exclude = ["node_modules", "bower_components", "jam", "components"];
    webpack(frontend).run(function(err, stats) {
        console.log(stats.toString(outputOptions));
        done();
    });
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

gulp.task('build:server', function (done) {
    webpack(backend).run(function(err, stats) {
        onBuild(err, stats);
        done();
    });
});