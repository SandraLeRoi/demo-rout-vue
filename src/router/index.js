import Vue from 'vue';
import VueRouter from 'vue-router';
import Contacts from '@/views/Contacts.vue';
import Home from '../views/Home.vue';
import Product from '@/views/Product.vue';
import Films from '@/views/Films.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
  },
  {
    path: '/films/:id',
    name: 'Films',
    component: Films,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
