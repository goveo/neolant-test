import Vue from 'vue';
import App from './App.vue';
import List from './components/List.vue';
import VueRouter from 'vue-router';

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
            component: List
		}
    ]
});

new Vue({
	el: '#app',
	router: router
	// render: h => h(App)
})
