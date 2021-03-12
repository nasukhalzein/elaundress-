import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './router'


Vue.component('navigation', require('./components/Navigation.vue').default);
Vue.component('sidebar', require('./components/Sidebar.vue').default);

const app = new Vue({
    el: '#nasukha',
    router: new VueRouter(routes),
});
