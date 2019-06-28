import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "about" */ './views/List.vue'),
    },
    {
      path: '/detial',
      name: 'detail',
      component: () => import(/* webpackChunkName: "about" */ './views/Detial.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue'),
    },
    {
      path: '/car',
      name: 'car',
      component: () => import(/* webpackChunkName: "about" */ './views/Car.vue'),
    },
    {
      path:"/*",
      redirect:"/",
    }
  ],
});
