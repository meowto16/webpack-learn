const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '..')
const SRC_PATH = path.resolve(ROOT_PATH, 'src')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    clean: true,
  },
  module: {
    rules: [
      { test: /\.js/i, use: [{ loader: 'babel-loader', options: { cwd: ROOT_PATH }}], include: SRC_PATH},
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource', include: SRC_PATH },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', include: SRC_PATH }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: './src/index.html'
    }),
  ],
};
