import Vue from 'vue';
import VueRouter from 'vue-router';
import UrlMatcher from './UrlMatcher';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/:name', component: UrlMatcher }
    ]
})