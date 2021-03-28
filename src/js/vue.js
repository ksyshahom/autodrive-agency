import Vue from 'vue'

// plugins

import VueMask from 'v-mask'
Vue.use(VueMask);

// // Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from 'swiper/vue';
//
// // Import Swiper styles
// // import 'swiper/swiper.scss';


// components
import calc from "./components/calc/calc";
import blog_mp from "./components/blog/blog_mp";

let app = new Vue({
    el: '#app',
    data: {
        //
    },
    components: {
        calc,
        blog_mp,
    }
});