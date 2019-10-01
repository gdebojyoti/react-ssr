var path = require('path')

var sourceDirectory = path.resolve(__dirname, '../src')
var buildDirectory = path.resolve(__dirname, '../build')

var config = {
  target: 'node',
  entry: sourceDirectory + '/server/index.js',
  output: {
    filename: 'bundle.js',
    path: buildDirectory
  },
  mode: 'development',
  resolve: { extensions: ['.jsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.js?$/,
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
