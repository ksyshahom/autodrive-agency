// window.Vue = require('vue');
import Vue from 'vue'
import calc from "./components/calc";

let app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!',
    },
    components: {
        calc,
    }
});

// alert('hello world');

