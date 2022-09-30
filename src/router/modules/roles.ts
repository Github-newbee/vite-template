import EpMonitor from '~icons/ep/monitor';

const roles = {
  path: '/roles',
  name: 'Roles',
  component: () => import('@/layout/index.vue'),
  redirect: '/roles/rolesManage',
  meta: {
    title: '角色管理',
    icon: EpMonitor,
  },
  children: [
    {
      path: '/roles/rolesManage',
      name: 'RolesManage',
      component: () => import('@/views/system/roles/index.vue'),
      meta: {
        title: '角色管理',
        icon: EpMonitor,
      },
    },
  ],
};

export default roles;
