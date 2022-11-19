import UilCell from '~icons/uil/cell';
import { AppRouteModule } from '../helper/types';

const comp: AppRouteModule = {
  path: '/comp',
  name: 'Comp',
  component: () => import('@/layout/index.vue'),
  redirect: '/comp/pwdStrength',
  meta: {
    sort: 20,
    title: 'menu.comps',
    icon: UilCell,
  },
  children: [
    {
      path: '/comp/pwdStrength',
      name: 'Pwd',
      component: () => import('@/views/comp/pwd/index.vue'),
      meta: {
        title: '密码强度',
      },
    },
    {
      path: '/comp/scrolling',
      name: 'Scrolling',
      component: () => import('@/views/comp/scrolling/index.vue'),
      meta: {
        title: '无缝滚动',
      },
    },
    {
      path: '/comp/tableComp',
      name: 'TabelComp',
      component: () => import('@/views/comp/table/index.vue'),
      meta: {
        title: '表格组件',
      },
    },
  ],
};

export default comp;
