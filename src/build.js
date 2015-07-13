const webpack     = require('webpack');
const path        = require('path');

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

webpack({
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, '../src')
    }]
  }
}).run(function(err, stats) {
  onBuild(err, stats);
});