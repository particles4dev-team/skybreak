/**
 * Stability: 1 - Experimental
 */
var gulp                = require('gulp');
var webpack             = require('webpack');
var WebpackDevServer    = require('webpack-dev-server');
var config              = require('../../config/webpack.client');
var configWatch         = require('../../config/webpack.client-watch');

gulp.task('build:client', function(done) {
    // node ./node_modules/webpack/bin/webpack.js --verbose --colors --display-error-details --config config/webpack.client.js
    // http://webpack.github.io/docs/node.js-api.html
    // https://github.com/webpack/webpack/blob/master/bin/webpack.js
    // --verbose <=> outputOptions.reasons
    // --colors  <=> .outputOptionscolors
    // --display-error-details <=> 
    var outputOptions = Object.create(config.stats || {});
    outputOptions.reasons = true;
    outputOptions.colors = true;
    outputOptions.errorDetails = true;
    outputOptions.exclude = ["node_modules", "bower_components", "jam", "components"];
    webpack(config).run(function(err, stats) {
        console.log(stats.toString(outputOptions));
        done();
    });
});

// NOT DONE YET
gulp.task('watch:client', function(done) {
    // node ./node_modules/webpack/bin/webpack.js --verbose --colors --display-error-details --config config/webpack.client-watch.js
    // node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config config/webpack.client-watch.js
    // https://github.com/webpack/webpack-dev-server/blob/master/bin/webpack-dev-server.js
    var outputOptions = Object.create(configWatch.stats || {});
    outputOptions.reasons = true;
    outputOptions.colors = true;
    outputOptions.errorDetails = true;
    outputOptions.exclude = ["node_modules", "bower_components", "jam", "components"];
    outputOptions.port = 8080;
    outputOptions.host = "localhost";
    var protocol = configWatch.https ? "https" : "http";

    if(!outputOptions.publicPath) {
        outputOptions.publicPath = configWatch.output && configWatch.output.publicPath || "";
        if(!/^(https?:)?\/\//.test(outputOptions.publicPath) && outputOptions.publicPath[0] !== "/")
            outputOptions.publicPath = "/" + outputOptions.publicPath;
    }
    new WebpackDevServer(webpack(configWatch), {
        stats: outputOptions
    }).listen(outputOptions.port, outputOptions.host, function (err, result) {
        if(err) throw err;
        if(configWatch.devServer.inline)
            console.log(protocol + "://" + outputOptions.host + ":" + outputOptions.port + "/");
        else
            console.log(protocol + "://" + outputOptions.host + ":" + outputOptions.port + "/webpack-dev-server/");
        console.log("webpack result is served from " + outputOptions.publicPath);
        if(typeof configWatch.devServer.contentBase === "object")
            console.log("requests are proxied to " + configWatch.devServer.contentBase.target);
        else
            console.log("content is served from " + configWatch.devServer.contentBase);
        if(configWatch.devServer.historyApiFallback)
            console.log("404s will fallback to /index.html");
    });
});