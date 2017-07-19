var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');

module.exports = {
    entry: [
        './js/build.js'
        // './js/loadersList.js',
        // './js/circleLoader.js',
        // './js/spinLoader.js',
        // './js/store.js',
        //'./js/loaderActions.js'
    ],
    output: {
        // filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        filename: 'loaders.js',
        library: 'loaders',
        libraryTarget: 'umd'
    },
    devtool: 'inline-source-map',

    plugins: [
        //new HtmlWebpackPlugin({ title: 'Development' })
        // new ConcatPlugin({
        //     uglify: true, // uglify js or set process.env.NODE_ENV = 'production'
        //     useHash: true, // md5 file
        //     sourceMap: true, // generate sourceMap
        //     name: 'flexible', // used in html-webpack-plugin
        //     fileName: 'dist/bundle.js',
        //     filesToConcat: [
        //         './js/actionsList.js',
        //         './js/loadersList.js',
        //         './js/circleLoader.js',
        //         './js/spinLoader.js',
        //         './js/store.js',
        //         './js/loaderActions.js'
        //     ]
        // })
    ]
};
