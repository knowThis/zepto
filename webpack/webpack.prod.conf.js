const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

module.exports = merge(
    baseWebpackConfig, {
        mode: 'production',
        devtool: false,
    }
);
