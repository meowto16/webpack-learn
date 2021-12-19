const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const ROOT_PATH = path.resolve(__dirname, '..')
const SRC_PATH = path.resolve(ROOT_PATH, 'src')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
});
