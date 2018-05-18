const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js",
    crossOriginLoading: "anonymous"
  },
};
