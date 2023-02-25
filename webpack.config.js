const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        home: './src/components/home.js',
        menu: './src/components/menu.js',
        owners: './src/components/owners.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        /* assetModuleFilename: 'images/[name][ext]', */
        // to set the path for ALL asset file types 
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[name][hash][ext]'
                }
            },
            {
                test: /\.(mov|mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
                generator: {
                    filename: 'videos/[name][ext]'
                }
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Home',
            template: './src/views/home.html',
            filename: 'home.html',
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            title: 'Menu',
            template: './src/views/menu.html',
            filename: 'menu.html',
            chunks: ['menu'],
        }),
        new HtmlWebpackPlugin({
            title: 'Owners',
            template: './src/views/owners.html',
            filename: 'owners.html',
            chunks: ['owners'],
        }),
    ]
}