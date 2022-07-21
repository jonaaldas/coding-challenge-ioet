const path = require('path')
const basePath = __dirname 
const distPath = 'dist'
const HtmlWebPackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  entry: {
      app: './src/app.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use:['babel-loader']
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ]
  },
  output:{
    path: path.join(basePath, distPath),
    filename: "bundle.js"
  }, 
  plugins: [new HtmlWebpackPlugin()]
}