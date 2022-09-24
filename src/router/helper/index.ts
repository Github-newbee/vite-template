// 判断是否登录
import Cache from '@/store/helper/cacheFun';

export function hasToken(): boolean {
  const token = Cache.getToken();
  return !!token;
}

export function isWhiteList(): boolean {
  return false;
}
