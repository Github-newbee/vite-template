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
    {
      path: 'systemSetting',
      name: 'SystemSetting',
      component: () => import('@/views/system/index.vue'),
      meta: {
        title: '系统配置',
      },
    },
  ],
};

export default home;
