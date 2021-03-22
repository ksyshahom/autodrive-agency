import Vue from 'vue'

// plugins
// const VueInputMask = require('vue-inputmask').default
// Vue.use(VueInputMask)

import VueMask from 'v-mask'
Vue.use(VueMask);

// components
import calc from "./components/calc/calc";

let app = new Vue({
    el: '#app',
    data: {
        //
    },
    components: {
        calc,
    }
});