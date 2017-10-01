const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'app.[hash].js'
  },

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'react-hot!babel' },
      { test: /\S+\/core\/images\/\S+.(png|jpg|jpeg)$/, loader: 'url-loader' },
      { test: /\S+\/core\/data\/\S+.json$/, loader: 'json-loader' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ]
}
