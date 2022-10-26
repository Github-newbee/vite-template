import UilChart from '~icons/uil/chart';
import { AppRouteModule } from '../helper/types';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: () => import('@/layout/index.vue'),
  redirect: '/charts/echarts',
  meta: {
    sort: 20,
    title: 'menu.charts',
    icon: UilChart,
  },
  children: [
    {
      path: '/charts/echarts',
      name: 'ECharts',
      component: () => import('@/views/charts/index.vue'),
      meta: {
        title: 'menu.charts',
      },
    },
  ],
};

export default charts;
