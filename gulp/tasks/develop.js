/**
 * Stability: 1 - Experimental
 */
var gulp                = require('gulp');
var webpack             = require('webpack');
var WebpackDevServer    = require('webpack-dev-server');
var path                = require('path');
var nodemon             = require('nodemon');
var runSequence         = require('run-sequence');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var backend             = require('../../config/webpack.server');
var configWatch         = require('../../config/webpack.client-watch');

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

gulp.task('develop', ['watch:server', 'watch:client']);

gulp.task('watch:server', ['watch:backend'], function(done) {
    // https://github.com/remy/nodemon
    nodemon({
        // Using nodejs for nodemon
        execMap: {
          js: 'node'
        },

        // your node app
        script: path.join(__dirname, '../build/backend'),
        
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
    done();
});

gulp.task('watch:backend', function (done) {
    console.log('Backend warming up...');
    var firedDone = false;

    // http://webpack.github.io/docs/configuration.html#watch
    // Enter watch mode, which rebuilds on file change.
    // Delay the rebuilt after the first change. Value is a time in ms.

    webpack(backend).watch(100, function(err, stats) {
        if(!firedDone) { done(); firedDone = true; }
        onBuild(err, stats);
        nodemon.restart();
    });
});

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
    
    var options = configWatch.devServer || {};
    options.stats = outputOptions;

    if(!outputOptions.publicPath) {
        outputOptions.publicPath = configWatch.output && configWatch.output.publicPath || "";
        if(!/^(https?:)?\/\//.test(outputOptions.publicPath) && outputOptions.publicPath[0] !== "/")
            outputOptions.publicPath = "/" + outputOptions.publicPath;
    }
    new WebpackDevServer(webpack(configWatch), options)
    .listen(outputOptions.port, outputOptions.host, function (err, result) {
        if(err) throw err;
        if(options.inline)
            console.log(protocol + "://" + outputOptions.host + ":" + outputOptions.port + "/");
        else
            console.log(protocol + "://" + outputOptions.host + ":" + outputOptions.port + "/webpack-dev-server/");
        console.log("webpack result is served from " + outputOptions.publicPath);
        if(typeof options.contentBase === "object")
            console.log("requests are proxied to " + options.contentBase.target);
        else
            console.log("content is served from " + options.contentBase);
        if(options.historyApiFallback)
            console.log("404s will fallback to /index.html");
        done();
    });
});