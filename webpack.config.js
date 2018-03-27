const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: { test: /[\\/]node_modules[\\/]/, name: "vendor", chunks: "all" }
        }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
};
