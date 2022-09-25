import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import exceptionRoutes from '@/router/route.exception';
import asyncRoutes from '@/router/route.async';
import commonRoutes from '@/router/route.common';
import { hasToken } from './helper';

const routes: Array<RouteRecordRaw> = [
  // 无鉴权的业务路由 ex:登录
  ...commonRoutes,
  // 带鉴权的业务路由
  ...asyncRoutes,
  // 异常页必须放在路由匹配规则的最后
  ...exceptionRoutes,
];
const whiteList = ['/login'];
const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
});

/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */
router.beforeEach(async (to, from, next) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
  console.log('全局路由前置守卫：to,from\n', to, from);
  console.log('hasToken: ', hasToken());
  // 设置页面标题
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;
  if (hasToken()) {
    // token存在时，浏览器返回上一页时为登录页时
    if (to.path === '/login') {
      next('/home');
    }
    // token存在时，正常进入路由
    next();
  } else if (whiteList.indexOf(to.path) > -1) {
    next();
  } else {
    next('/login');
  }
});

router.afterEach((to, from) => {
  console.log('全局路由后置守卫：to,from\n', to, from);
  NProgress.done();
});
export default router;
