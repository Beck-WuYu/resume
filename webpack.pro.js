const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin") 

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash:6].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@css': path.resolve(__dirname, './css'),
            '@component': path.resolve(__dirname, './src/component'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                //exclude: /(node_modules|bower_components)/,//某些CSS在node_modules
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
        ]
    }, 
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            // inject: true,
            template: path.resolve(__dirname, 'public/index.html'),
            minify: {}
        })
    ]
   


}