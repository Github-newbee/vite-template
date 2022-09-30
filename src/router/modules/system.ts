import EpSetting from '~icons/ep/setting';

const system = {
  path: '/system',
  name: 'System',
  // hidden: true,
  component: () => import('@/layout/index.vue'),
  redirect: '/system/systemSetting',
  meta: {
    title: '系统设置',
    icon: EpSetting,
  },
  children: [
    {
      path: '/system/systemSetting',
      name: 'SystemSetting',
      component: () => import('@/views/system/config/index.vue'),
      meta: {
        title: '系统配置',
      },
    },
    {
      path: '/system/rolesSetting',
      name: 'RolesSetting',
      component: () => import('@/views/system/roles/index.vue'),
      meta: {
        title: '角色配置',
      },
    },
  ],
};

export default system;
