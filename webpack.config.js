var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            hash: true,
            inject: true
        }),
        new ExtractTextPlugin("styles.css")
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '.'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: "."
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader?interpolate']
            },

            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'file-loader?name=/assets/img/[name]-[hash].[ext]'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};