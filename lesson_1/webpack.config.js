const path = require("path")
const webpack = require('webpack')
const webpackServ = require('webpack-dev-server')

module.exports = {
   entry: {
       app: './index.jsx'
   },
   context: path.resolve(__dirname, "src"),
   output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'app.js',
        publicPath: path.resolve(__dirname, "static", "build")
   },
   watch: true,
   module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: ['@babel/env', '@babel/react'],
            }
        }
    ]}
}