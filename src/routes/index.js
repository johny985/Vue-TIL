import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//component => code spliting. 해당 페이지에 갈 때만 정보 받아오도록.

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: () => import('@/views/LoginPage.vue') },
    { path: '/signup', component: () => import('@/views/SignupPage.vue') },
    { path: '*', component: () => import('@/views/NotFoundPage.vue') },
  ],
});
