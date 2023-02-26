const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const Nunjucks = require('nunjucks'); // for multiple pages better to use this templating engine from Mozila

module.exports = {
    stats: 'minimal',
    output: {
        path: path.resolve(__dirname, 'dist'),
        /* assetModuleFilename: 'images/[name][ext]', */
        // to set the path for ALL asset file types 
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        //open: true, // open app in browser
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
    module: {
        rules: [
            // templates
            {
                test: /\.html$/,
                loader: HtmlBundlerPlugin.loader, //  HTML template loader
                options: {
                    // render template with page-specific variables defined in entry
                    preprocessor: (template, { data }) => Nunjucks.renderString(template, data),
                },
            },
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
                // output filename of extracted JS from source script loaded in HTML via `<script>` tag
                filename: 'js/[name].[contenthash:8].js',
            },
            css: {
                // output filename of extracted CSS from source style loaded in HTML via `<link>` tag
                filename: 'css/[name].[contenthash:8].css',
            },
        }),
    ],
}