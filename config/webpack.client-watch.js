// http://webpack.github.io/docs/webpack-dev-server.html
// http://webpack.github.io/docs/webpack-dev-middleware.html
var webpack             = require("webpack");
var path                = require("path");
var config              = require("./webpack.client.js");

config.cache = true;
config.debug = true;
config.devtool = "eval";

config.entry.unshift(
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
);

config.output.publicPath = "http://localhost:8080/dist/";
config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

config.module = {
    loaders: [
        {
            test: /\.json$/,
            loader: "json"
        },
        {
            test: /\.js?$/,
            loaders: ['react-hot', 'babel'],
            include: [path.join(__dirname, '../src'), path.join(__dirname, '../_includes'), path.join(__dirname, '../_themes')]
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }
    ]
};

config.devServer = {
    // --content-base <file/directory/url>: base path for the content;
    contentBase: "../build",
    // --hot: adds the HotModuleReplacementPlugin and switch the server to hot mode. Note: make sure you don’t add HotModuleReplacementPlugin twice;
    hot:         true,
    // --inline: embed the webpack-dev-server runtime into the bundle;
    inline:      true,

    // webpack-dev-middleware options
    // Display nothing to the console
    quiet:       true,
    // --no-info: suppress boring information;
    noInfo:      false,
    // Switch into lazy mode. The compiler compiles on every request to the entry point.
    lazy:        false,
    // Add custom headers. i. e. { "X-Custom-Header": "yes" }
    headers:     {"Access-Control-Allow-Origin": "*"},
    publicPath:  "http://localhost:8080/dist/",
    stats:       {colors: true},

    // --host <hostname/ip>: hostname or IP;
    host:        "0.0.0.0"
};

module.exports = config;