const path = require("path")
const webpack = require('webpack')
const webpackServ = require('webpack-dev-server')
const HtmlWebpack = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MaterialUi = require('material-ui')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
   entry: {
       index: './index.jsx'
   },
   context: path.resolve(__dirname, "src"),
   devtool: 'inline-source-map',
   devServer: {
       contentBase: './dist',
       historyApiFallback: {
           index: 'index.html'
       }
   },
   output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
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
              plugins:['@babel/plugin-proposal-class-properties', "@babel/plugin-transform-async-to-generator", "@babel/plugin-transform-runtime"]
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]},
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpack({
            template: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
              { from: "api", to: "api" },
            ],
          }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}