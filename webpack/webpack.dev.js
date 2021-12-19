const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

const ROOT_PATH = path.resolve(__dirname, '..')
const SRC_PATH = path.resolve(ROOT_PATH, 'src')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'], include: SRC_PATH },
    ]
  }
});
