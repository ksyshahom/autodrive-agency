// webpack.mix.js

let mix = require('laravel-mix');

mix.setPublicPath('dist');
mix.js('src/js/vue.js', './dist').vue();
mix.sass('src/scss/main.scss', './dist');

mix.webpackConfig({
    resolve: {
        // alias: {vue: 'vue/dist/vue.esm.js'}
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
});