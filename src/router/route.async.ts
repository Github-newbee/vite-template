// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home',
    meta: {
      title: 'Root',
    },
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/process',
    name: 'process',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('@/views/example/MarkdownPage.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
  },
];

export default asyncRoutes;
