import UilDesktop from '~icons/uil/desktop';
import { AppRouteModule } from '../helper/types';

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: () => import('@/layout/index.vue'),
  redirect: '/home/dashboard',
  meta: {
    sort: 2,
    title: '业务监控',
    icon: UilDesktop,
  },
  children: [
    {
      path: '/home/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '业务监控',
      },
    },
  ],
};

export default home;
