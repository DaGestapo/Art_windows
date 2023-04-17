const WebpackCleanPlugin = require('webpack-clean');

module.exports = {
    entry: "./src/js/index.js",
    plugins: [
        new WebpackCleanPlugin([
            './dist'
        ])
    ],
    module: {
        rules:[
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    esModule:false
                }
            },
            {
                test: /\.scss$/i,
                use:[
                    "style-loader",
                    {
                        loader:"css-loader",
                        options: {
                            esModule:false
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|gif|svg|png)$/i,
                use:[{
                    loader: "file-loader",
                    options: {
                        esModule:false,
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs'
                    }
                }]
            },
        ]
    }
}