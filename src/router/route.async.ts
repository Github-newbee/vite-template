// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [];
const modules = import.meta.glob('./modules/**/*.ts', { eager: true }) as any;

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  asyncRoutes.push(...modList);
});

export default asyncRoutes;
