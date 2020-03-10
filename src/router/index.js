import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Design1 from '../views/Design1.vue';
import Design2 from '../views/Design2.vue';
import Design3 from '../views/Design3.vue';
import Design4 from '../views/Design4.vue';
import Design5 from '../views/Design5.vue';
import Design6 from '../views/Design6.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/design1',
    name: 'design1',
    component: Design1,
  },
  {
    path: '/design2',
    name: 'design2',
    component: Design2,
  },
  {
    path: '/design3',
    name: 'design3',
    component: Design3,
  },
  {
    path: '/design4',
    name: 'design4',
    component: Design4,
  },
  {
    path: '/design5',
    name: 'design5',
    component: Design5,
  },
  {
    path: '/design6',
    name: 'design6',
    component: Design6,
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
