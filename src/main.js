import Vue from 'vue';
import App from './App.vue';
import AppList from './components/List.vue';
import AppFilter from './components/Filter.vue';
import AppAbout from './components/About.vue';
import AppNavbar from './components/Navbar.vue';

import VueRouter from 'vue-router';

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
