import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import Main from './pages/Main.vue';
import Send from './pages/Send.vue';
import Deploy from './pages/Deploy.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Main },
	{ path: '/send', component: Send },
	{ path: '/deploy', component: Deploy },
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

new Vue({
	router,
	el: '#app',
	render: h => h(App),
});
