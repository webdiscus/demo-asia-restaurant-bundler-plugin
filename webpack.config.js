const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
    stats: 'minimal',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                // define all your templates here, the syntax is the same as Webpack entry
                index: { // => dist/index.html (key is output filename w/o '.html')
                    import: 'src/views/home.html',
                    data: { title: 'Home' },
                },
                menu: { // => dist/menu.html
                    import: 'src/views/menu.html',
                    data: { title: 'Menu' },
                },
                owners: { // => dist/owners.html
                    import: 'src/views/owners.html',
                    data: { title: 'Owners' },
                },
            },
            js: {
                // JS output filename
                filename: 'js/[name].[contenthash:8].js',
            },
            css: {
                // CSS output filename
                filename: 'css/[name].[contenthash:8].css',
            },
            // use Nunjucks templating engine to render *.html template files
            preprocessor: 'nunjucks',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: ['css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash:8][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[name].[hash][ext]'
                }
            },
            {
                test: /\.(mov|mp4)$/,
                type: "asset/resource",
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
    devServer: {
        open: true,
        compress: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: {
            paths: ['src/**/*.*'],
            options: {
                usePolling: true,
            },
        },
    },
}
