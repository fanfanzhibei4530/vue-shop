import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: '首页',
    component: () => import('@/views/home/index')
  },
  {
    path: '/shop',
    name: '商城',
    component: () => import('@/views/shop/index')
  },
  {
    path: '/cart',
    name: '购物车',
    component: () => import('@/views/cart/index')
  },
  {
    path: '/my',
    name: '个人中心',
    component: () => import('@/views/my/index')
  }
];

const router = new Router({
  routes: routes,
});

export default router
