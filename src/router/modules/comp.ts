import UilChart from '~icons/uil/chart';
import { AppRouteModule } from '../helper/types';

const comp: AppRouteModule = {
  path: '/comp',
  name: 'Comp',
  component: () => import('@/layout/index.vue'),
  redirect: '/comp/pwdStrength',
  meta: {
    sort: 20,
    title: '组件',
    icon: UilChart,
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
  ],
};

export default comp;
