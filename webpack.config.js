var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    // TODO: Add common Configuration
    module: {},
};

var moduleConf = {
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
            test: /\.(png|jpg|jpeg|svg|ico|gif)$/,
            loader: 'file-loader?name=/assets/img/[name]-[hash].[ext]'
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        {
            test: /\.(pdf)$/,
            loader: 'file-loader?name=/assets/pdf/[name].[ext]'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ["babel-preset-es2015"].map(require.resolve)
                    //presets: ['es2015']
            }
        }
    ]
};

var indexConfig = Object.assign({}, config, {
    name: "index",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '.',
        filename: "bundle-home.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),
        new ExtractTextPlugin("styles-home.css")
    ],
    module: moduleConf
});


var cvPageConfig = Object.assign({}, config, {
    name: "cvpage",
    entry: "./src/cvpage.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '.',
        filename: "bundle-cv.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            filename: 'fr.html',
            template: './src/fr.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'en.html',
            template: './src/en.html',
            inject: true
        }),
        new ExtractTextPlugin("styles-cvpage.css")
    ],
    module: moduleConf

});




module.exports = [indexConfig, cvPageConfig];