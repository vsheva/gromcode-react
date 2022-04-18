const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    module: {
        rules: [
            {
                test:/.js$/,
                use: ['babel-loader'],
            },
            {
                test:/.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/.(jpg|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};