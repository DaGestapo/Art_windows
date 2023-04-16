const path = require('path');

const config = require('./webpack.config');
const {merge} = require('webpack-merge');
const TersertPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.join(__dirname, 'prod')
    },

    optimization: {
        minimizer: [
            new TersertPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    }
});