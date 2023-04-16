const config = require('./webpack.config');
const {merge} = require('webpack-merge');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode: 'development',
    output: {
        filename: "[name].js",
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
});