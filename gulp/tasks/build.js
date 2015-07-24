/**
 * Stability: 1 - Experimental
 */
var gulp                = require('gulp');
var path                = require('path');
var webpack             = require('webpack');

var isProduction        = require('../util/environment');

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
var z = {};

if(isProduction()) {
  z = {
    // start point
    entry: [path.join(__rootPath, '/src/index.js')],
    // http://webpack.github.io/docs/configuration.html#target
    // "web" Compile for usage in a browser-like environment (default)
    // "webworker" Compile as WebWorker
    // "node" Compile for usage in a node.js-like environment (use require to load chunks)
    // "async-node" Compile for usage in a node.js-like environment (use fs and vm to load chunks async)
    // "node-webkit" Compile for usage in webkit, uses jsonp chunk loading but also supports builtin node.js modules plus require(“nw.gui”) (experimental)
    // "atom" Compile for usage in electron (formerly known as atom-shell), supports require for modules necessary to run Electron.
    //target: 'node',

    // http://webpack.github.io/docs/configuration.html#module
    // Options affecting the normal modules (NormalModuleFactory)
    module: {
      // module.loaders
      // A array of automatically applied loaders.
      // Each item can have these properties:
      //   test: A condition that must be met
      //   exclude: A condition that must not be met
      //   include: A condition that must be met
      //   loader: A string of “!” separated loaders
      //   loaders: A array of loaders as string
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(__rootPath, 'src')
        }
      ]
    },
    plugins: [],
    // http://webpack.github.io/docs/configuration.html#output
    output: {
      // The output directory as absolute path (required).
      path: path.join(__rootPath, 'build'),
      // The filename of the entry chunk as relative path inside the output.path directory.
      filename: 'bundle.js'
    },

    // http://webpack.github.io/docs/configuration.html#node
    // Include polyfills or mocks for various node stuff:
    // node: {
      // __filename: true, // __filename: true (real filename), "mock" ("/index.js") or false
      // __dirname: false // true (real dirname), "mock" ("/") or false
    // },

    // http://webpack.github.io/docs/configuration.html#resolve
    // Options affecting the resolving of modules.
    // alias:                   require("xyz")    require("xyz/file.js")
    // { xyz: "./dir/file.js" } /abc/dir/file.js  /abc/node_modules/xyz/file.js
    resolve: {
      // resolve.extensions
      // An array of extensions that should be used to resolve modules. For example, in order to discover CoffeeScript files, your array should contain the string ".coffee".
      // Default: ["", ".webpack.js", ".web.js", ".js"]
      // IMPORTANT: Setting this option will override the default, meaning that webpack will no longer try to resolve modules using the default extensions. If you want modules that were required with their extension (e.g. require('./somefile.ext')) to be properly resolved, you must include an empty string in your array. Similarly, if you want modules that were required without extensions (e.g. require('underscore')) to be resolved to files with “.js” extensions, you must include ".js" in your array.
      extensions: ["", ".js", ".jsx", ".scss"]
    },

    // http://webpack.github.io/docs/configuration.html#externals
    // Specify dependencies that shouldn’t be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on output.libraryTarget.
    // externals: node_modules,
  }
}

gulp.task('build', function(done) {
  webpack(z).run(function(err, stats) {
    onBuild(err, stats);
    done();
  });
});