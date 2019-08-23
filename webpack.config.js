const path = require('path');

const config = {
  entry: ['babel-polyfill','./lib/components/Index.js'],
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/
        , use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/react']
          }
        } }
    ]
  }
};

module.exports = config;
