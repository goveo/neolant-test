import Vue from 'vue';
import App from './App.vue';
import AppList from './components/List.vue';
import AppFilter from './components/Filter.vue';
import AppAbout from './components/About.vue';
import AppNavbar from './components/Navbar.vue';

import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import TextHighlight from 'vue-text-highlight';
Vue.component('text-highlight', TextHighlight);

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faFilter, faLightbulb);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component('AppNavbar', AppNavbar);
Vue.component('AppList', AppList);
Vue.component('AppFilter', AppFilter);
Vue.component('AppAbout', AppAbout);

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [{
            path: '/',
            name: 'Index',
            component: App
		},
		{
            path: '/list',
            name: 'List',
            component: AppList
		},
		{
            path: '/filter',
            name: 'Filter',
            component: AppFilter
		},
		{
            path: '/about',
            name: 'About',
            component: AppAbout
		}
    ]
});

new Vue({
	el: '#app',
	router: router
	// render: h => h(App)
})
