const CompressionPlugin = require('compression-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  // [devServer] configuration for the live server including port
  plugins: [new CompressionPlugin()],
  devServer: {
    historyApiFallback: {
      index: '/',
    },
    // [static] config for how what to serve
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: 3000,
  },
});
