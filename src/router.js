import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: '/krpano',
		},
		{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue'),
			children: [
				{
					path: '/krpano',
					name: 'krpano',
					component: () => import('./views/Krpano.vue')
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
});
