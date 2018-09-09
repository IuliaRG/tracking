const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const appVersion = require('./package.json').version;
const staticFolder = path.resolve('dist');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        'tether',
        'whatwg-fetch',
        './src/index.jsx',
    ],
    output: {
        filename: `app.${appVersion}.js`,
        path: staticFolder,
    },
    //devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: [
            path.resolve('./'),
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [
            { test: /(\.jsx|\.js)$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: { presets: ['react', 'es2015', 'stage-3'] } },
            {
                test: /(\.css|\.scss)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            hash: false,
            appVersion
        }),
        new ExtractTextPlugin({ filename: `style.${appVersion}.css`, allChunks: true }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false,
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            tether: 'tether',
            Tether: 'tether',
            'window.Tether': 'tether',
            Popper: ['popper.js', 'default'],
            'window.Tether': 'tether',
            Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
            Button: 'exports-loader?Button!bootstrap/js/dist/button',
            Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
            Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
            Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
            Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
            Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
            Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
            Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        }),
        new CopyWebpackPlugin([
            { from: 'public', to: 'public' },
        ]),
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3001
    }
}