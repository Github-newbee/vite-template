// 不需要鉴权的业务路由
import { AppRouteModule } from './helper/types';

const commonRoutes: Array<AppRouteModule> = [
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
];

export default commonRoutes;
