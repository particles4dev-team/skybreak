var webpack             = require("webpack");
var path                = require("path");

// https://github.com/webpack/extract-text-webpack-plugin
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

module.exports = {
    // http://webpack.github.io/docs/configuration.html#target
    // "web" Compile for usage in a browser-like environment (default)
    // "webworker" Compile as WebWorker
    // "node" Compile for usage in a node.js-like environment (use require to load chunks)
    // "async-node" Compile for usage in a node.js-like environment (use fs and vm to load chunks async)
    // "node-webkit" Compile for usage in webkit, uses jsonp chunk loading but also supports builtin node.js modules plus require(“nw.gui”) (experimental)
    // "atom" Compile for usage in electron (formerly known as atom-shell), supports require for modules necessary to run Electron.
    target:  "web",
    // http://webpack.github.io/docs/configuration.html#entry
    // The entry point for the bundle.
    entry: [
        '../src/client.js'
    ],
    // http://webpack.github.io/docs/configuration.html#output
    output: {
        // The output directory as absolute path (required).
        path: path.join(__dirname, '../build/public/'),
        // The filename of the entry chunk as relative path inside the output.path directory.
        filename: 'client.js',
        // The filename of non-entry chunks as relative path inside the output.path directory.
        // [id] is replaced by the id of the chunk.
        // [name] is replaced by the name of the chunk (or with the id when the chunk has no name).
        // [hash] is replaced by the hash of the compilation.
        // [chunkhash] is replaced by the hash of the chunk.
        chunkFilename: "[name].[id].js",
        // The output.path from the view of the Javascript / HTML page.
        publicPath:    "build/"
    },
    // http://webpack.github.io/docs/configuration.html#output
    // Choose a developer tool to enhance debugging.
    devtool: false,
    // http://webpack.github.io/docs/configuration.html#cache
    // Cache generated modules and chunks to improve performance for multiple incremental builds.
    // This is enabled by default in watch mode.
    // You can pass false to disable it.
    // You can pass an object to enable it and let webpack use the passed object as cache. This way you can share the cache object between multiple compiler calls. Note: Don’t share the cache between calls with different options.
    cache: false,
    // http://webpack.github.io/docs/configuration.html#context
    // The base directory (absolute path!) for resolving the entry option. If output.pathinfo is set, the included pathinfo is shortened to this directory.
    context: __dirname,
    // plugins
    // Add additional plugins to the compiler.
    plugins: [
        // https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin
        // Define free variables. Useful for having development builds with debug logging or adding global constants.
        new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
        // https://github.com/webpack/docs/wiki/list-of-plugins#dedupeplugin
        // Search for equal or similar files and deduplicate them in the output. This comes with some overhead for the entry chunk, but can reduce file size effectively.
        new webpack.optimize.DedupePlugin(),
        // https://github.com/webpack/docs/wiki/list-of-plugins#occurenceorderplugin
        // Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids. This make ids predictable, reduces to total file size and is recommended.
        // preferEntry (boolean) give entry chunks higher priority. This make entry chunks smaller but increases the overall size. (recommended)
        new webpack.optimize.OccurenceOrderPlugin(),
        // https://github.com/webpack/docs/wiki/list-of-plugins#uglifyjsplugin
        // Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode. You can pass an object containing UglifyJs options.
        new webpack.optimize.UglifyJsPlugin(),

        new ExtractTextPlugin('public/style/main.css', {
            allChunks: true
        })
    ],
    // http://webpack.github.io/docs/configuration.html#module
    // Options affecting the normal modules (NormalModuleFactory)
    module:  {
        // module.loaders
        // A array of automatically applied loaders.
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js?$/,
                loaders: ['babel'],
                include: path.join(__dirname, '../src')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass?sourceMap')
            }
        ]
    },
    // resolve
    // Options affecting the resolving of modules.
    resolve: {
        // http://webpack.github.io/docs/configuration.html#resolve-modulesdirectories
        // resolve.modulesDirectories
        // An array of directory names to be resolved to the current directory as well as its ancestors, and searched for modules. This functions similarly to how node finds “node_modules” directories. For example, if the value is ["mydir"], webpack will look in “./mydir”, “../mydir”, “../../mydir”, etc.
        modulesDirectories: [
            "src",
            "node_modules",
            "web_modules"
        ],
        // resolve.extensions
        // An array of extensions that should be used to resolve modules. For example, in order to discover CoffeeScript files, your array should contain the string ".coffee".
        // Default: ["", ".webpack.js", ".web.js", ".js"]
        // IMPORTANT: Setting this option will override the default, meaning that webpack will no longer try to resolve modules using the default extensions. If you want modules that were required with their extension (e.g. require('./somefile.ext')) to be properly resolved, you must include an empty string in your array. Similarly, if you want modules that were required without extensions (e.g. require('underscore')) to be resolved to files with “.js” extensions, you must include ".js" in your array.
        extensions: ["", ".json", ".js"]
    },
    // http://webpack.github.io/docs/configuration.html#node
    // Include polyfills or mocks for various node stuff:
    // console: true or false
    // global: true or false
    // process: true, "mock" or false
    // Buffer: true or false
    // __filename: true (real filename), "mock" ("/index.js") or false
    // __dirname: true (real dirname), "mock" ("/") or false
    // <node buildin>: true, "mock", "empty" or false
    node:    {
        __dirname: true,
        fs:        'empty'
    }
};