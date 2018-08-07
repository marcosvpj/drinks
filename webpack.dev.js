const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require("path");

const common = require('./webpack.config.js');

module.exports = merge(common, {

  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
        ]
    }]
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3210,
    publicPath: "http://localhost:3210/dist"
  },
  // devtool: 'inline-source-map',
  devtool: 'eval-cheap-module-source-map',
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
