const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/",
    filename: "app.[hash].js"
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      { 
        test: /\.js?$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env","react","stage-0",
            "stage-1",
            "stage-2"],
            plugins: ["transform-decorators-legacy"]
          }
        }
      },
      { test: /\S+\/core\/images\/\S+.(png|jpg|jpeg)$/, loader: "url-loader" },
      { test: /\S+\/core\/data\/\S+.json$/, loader: "json-loader" }
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true
    })
  ]
};
