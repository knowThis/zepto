const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    devServer: {
        host: '127.0.0.1',
        port: '3000'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        })
    ]
});