const webpack = require('webpack');
const packageJson = require('../package.json');
const path = require('path');
const version = packageJson.version;

module.exports = {
    entry: {
        zepto: path.resolve(__dirname, '../src/index'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {

    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: () => `hash:[hash] version :${version}`
        })
    ]
};