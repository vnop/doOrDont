var webpac = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/dist');

var APP_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: APP_DIR + '/App.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;