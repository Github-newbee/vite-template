import EpMonitor from '~icons/ep/monitor';

const home = {
  path: '/home',
  name: 'Home',
  component: () => import('@/layout/index.vue'),
  redirect: '/home/dashboard',
  meta: {
    title: '业务监控',
    icon: EpMonitor,
  },
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '业务监控',
      },
    },
  ],
};

export default home;
