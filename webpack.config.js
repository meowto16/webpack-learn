const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    static: './dist',
    client: {
      logging: 'error',
      overlay: true
    },
    server: 'http'
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      { test: /\.js/i, use: ['babel-loader'], include: path.resolve(__dirname, 'src')},
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: './src/index.html'
    }),
  ],
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
  stats: 'errors-warnings'
}
