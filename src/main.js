import Vue from 'vue';
import App from './App.vue';
import AppList from './components/List.vue';
import AppFilter from './components/Filter.vue';
import AppAbout from './components/About.vue';
import AppNavbar from './components/Navbar.vue';

import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import TextHighlight from 'vue-text-highlight';
Vue.component('text-highlight', TextHighlight);

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faFilter, faLightbulb, faPencilAlt, faSave, faUser, faList, faThumbtack);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;


Vue.component('AppNavbar', AppNavbar);
Vue.component('AppList', AppList);
Vue.component('AppFilter', AppFilter);
Vue.component('AppAbout', AppAbout);

Vue.use(VueResource);
Vue.use(BootstrapVue);
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
