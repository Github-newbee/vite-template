import { AppRouteModule } from './types';
// 判断是否登录
import Cache from '@/store/helper/cacheFun';

export function hasToken(): boolean {
  const token = Cache.getToken();
  return !!token;
}

export function isWhiteList(): boolean {
  return false;
}

// 路由排序
export function sortRouter(routes: AppRouteModule[]) {
  return routes.sort((a, b) => {
    const aNo = a.meta.sort as number;
    const bNo = b.meta.sort as number;

    return aNo - bNo;
  });
}
