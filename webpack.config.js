const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
var mode = process.env.NODE_ENV || 'development';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["babel-plugin-styled-components"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 3000,
        compress: true
    },
    mode: mode,
    devtool: (mode === 'development') ? 'eval-cheap-module-source-map' : 'source-map',
}