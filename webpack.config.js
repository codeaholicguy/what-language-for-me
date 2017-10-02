const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],

  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/",
    filename: "app.js"
  },

  devServer: {
    contentBase: "./build",
    hot: true,
    publicPath: "/",
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true
  },

  module: {
    loaders: [
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
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true
    })
  ]
};
