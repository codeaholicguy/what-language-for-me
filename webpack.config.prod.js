const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseBabel = require('./webpack.base.babel');

const entry = './src/index.js';
const output = {
  path: path.join(__dirname, '/build'),
  publicPath: '/',
  filename: 'app.[hash].js',
}
const rules = [
  {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
  }
];
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,
    },
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: true,
  }),
]
module.exports = webpackBaseBabel({
  entry,
  output,
  rules,
  plugins
});
