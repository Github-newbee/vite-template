import UilAngry from '~icons/uil/angry';
import { AppRouteModule } from '../helper/types';

const roles: AppRouteModule = {
  path: '/roles',
  name: 'Roles',
  component: () => import('@/layout/index.vue'),
  redirect: '/roles/rolesManage',
  meta: {
    sort: 30,
    title: '角色管理',
    icon: UilAngry,
  },
  children: [
    {
      path: '/roles/rolesManage',
      name: 'RolesManage',
      component: () => import('@/views/system/roles/index.vue'),
      meta: {
        title: '角色管理',
      },
    },
  ],
};

export default roles;
