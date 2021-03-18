// webpack.mix.js

let mix = require('laravel-mix');

mix.setPublicPath('dist');
mix.js('src/js/vue.js', './dist').vue();
mix.sass('src/scss/main.scss', './dist');

const path = require('path');

mix.options({ processCssUrls: false });
mix.webpackConfig({
    resolve: {
        // alias: {vue: 'vue/dist/vue.esm.js'}
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    output: {
        // filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        // loaders: [
        //     {
        //         test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //         use: [
        //             {
        //                 loader: 'file-loader',
        //                 options: {
        //                     name: '[name].[ext]',
        //                     outputPath: 'fonts/'
        //                 }
        //             }
        //         ]
        //     }
        // ]
        // output: {
        //     // filename: 'bundle.js',
        //     path: path.resolve(__dirname, 'dist'),
        // },
        // rules: [
        //     {
        //         test: /\.(ttf|eot|woff|woff2)$/,
        //         use : {
        //             loader : "file-loader",
        //             options: {
        //                 name: "../fonts/[name].[ext]",
        //                 // context: path.resolve(__dirname, 'src2/'),
        //                 // useRelativePaths: true,
        //                 // publicPath: "./dist/",
        //                 // outputPath: './fonts23/[name].[ext]',
        //                 // outputPath: 'fonts2/',
        //             },
        //         }
        //         // test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //         // use: {
        //         //     loader: 'file-loader',
        //         //     options: {
        //         //         name: '[name].[ext]',
        //         //         outputPath: 'fonts/'
        //         //     }
        //         // }
        //
        //     },
        //     // {
        //     //     test: /\.(scss)$/,
        //     //     loaders: [
        //     //         "style-loader",
        //     //         {
        //     //             loader:'css-loader',
        //     //             options: {
        //     //                 url: false
        //     //             }
        //     //         },
        //     //         "sass-loader"],
        //     // }
        // ]
    }
});