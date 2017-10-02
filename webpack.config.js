const path = require('path');
const webpackBaseBabel = require('./webpack.base.babel');

const entry = [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './src/index.js',
];
const output = {
  path: path.join(__dirname, '/build'),
  publicPath: '/',
  filename: 'app.js',
};
const devServer = {
  contentBase: './build',
  hot: true,
  publicPath: '/',
  host: '0.0.0.0',
  port: 8080,
  historyApiFallback: true,
}

module.exports = webpackBaseBabel({
  entry,
  output,
  devServer,
});
