import Vue from 'vue'

// plugins

import VueMask from 'v-mask'
Vue.use(VueMask);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)




// components
import calc from "./components/calc/calc";
import blog_mp from "./components/blog/blog_mp";
import cases from "./components/cases/cases"
// import btn from "./components/common/btn";

let app = new Vue({
    el: '#app',
    data: {
        //
    },
    components: {
        calc,
        blog_mp,
        cases,
        // btn,
    }
});