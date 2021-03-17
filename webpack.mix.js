// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/vue.js', 'dist')
    .vue()
    .setPublicPath('dist');

mix.webpackConfig({
    resolve: {
        // alias: {vue: 'vue/dist/vue.esm.js'}
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
});