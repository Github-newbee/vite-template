import UilCog from '~icons/uil/cog';
import { AppRouteModule } from '../helper/types';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  // hidden: true,
  component: () => import('@/layout/index.vue'),
  redirect: '/system/systemSetting',
  meta: {
    sort: 100,
    title: '系统设置',
    icon: UilCog,
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
      path: '/system/MenuSetting',
      name: 'MenuSetting',
      redirect: '/system/systemSetting/charts',
      component: () => import('@/App.vue'),
      meta: {
        title: '多级菜单',
      },
      children: [
        {
          path: '/system/MenuSetting/menu1',
          name: 'SystemMenu1',
          component: () => import('@/views/menu/menu1/index.vue'),
          meta: {
            title: '菜单1',
          },
        },
        {
          path: '/system/MenuSetting/menu2',
          name: 'SystemMenu2',
          component: () => import('@/App.vue'),
          meta: {
            title: '菜单2',
          },
          children: [
            {
              path: '/system/MenuSetting/menu2-1',
              name: 'SystemMenu2-1',
              component: () => import('@/views/menu/menu2-1/index.vue'),
              meta: {
                title: '菜单2-1',
              },
            },
            {
              path: '/system/MenuSetting/menu2-2',
              name: 'SystemMenu2-2',
              component: () => import('@/views/menu/menu2-2/index.vue'),
              meta: {
                title: '菜单2-1',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default system;
