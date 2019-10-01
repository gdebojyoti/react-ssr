var path = require('path')

var sourceDirectory = path.resolve(__dirname, '../src')
var publicDirectory = path.resolve(__dirname, '../public')

var config = {
  entry: sourceDirectory + '/client/index.js',
  mode: 'development',
  output: {
    path: publicDirectory,
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: { extensions: ['.jsx', '.js', '.json', '.scss'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
