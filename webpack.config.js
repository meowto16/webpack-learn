const path = require('path')

const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * Webpack's configuration.
 * Don't remove @type
 * Used for VSCode autocomplete
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: {
    peopleRollCall: './src/people-roll-call.js',
    departmentRollCall: './src/department-roll-call.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
          delimitersToGuess: [';', ',', '\t', '|']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
      },
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: `webpack.${new Date().toISOString().split('.')[0]}.bundle.html`
    })
  ],
  resolve: {
    alias: {
      '@models': path.resolve(__dirname, 'src', 'models'),
    }
  },
}
