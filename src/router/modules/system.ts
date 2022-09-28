import EpSetting from '~icons/ep/setting';

const system = {
  path: '/system',
  name: 'System',
  // hidden: true,
  component: () => import('@/layout/index.vue'),
  redirect: '/system/setting',
  meta: {
    title: '系统设置',
    icon: EpSetting,
  },
  children: [
    {
      path: 'setting',
      name: 'Setting',
      component: () => import('@/views/example/MarkdownPage.vue'),
      meta: {
        title: '系统设置',
      },
    },
  ],
};

export default system;
