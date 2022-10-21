import { localStorage } from './storage';
import { CacheKey } from '@/enums';

class Cache {
  getToken = (): string => localStorage.getItem(CacheKey.TOKEN_KEY) || '';

  setToken = (val: string) => localStorage.setItem(CacheKey.TOKEN_KEY, val);

  getUserInfo = (): any => localStorage.getItem(CacheKey.USERINFO_KEY);

  setUserInfo = (val: any) => localStorage.setItem(CacheKey.USERINFO_KEY, val);

  getLanguage = (): string => localStorage.getItem(CacheKey.LANG_KEY) || 'zh-CN';

  setLanguage = (val: string) => localStorage.setItem(CacheKey.LANG_KEY, val);

  getAsideStatus = (): boolean => localStorage.getItem(CacheKey.ASIDE_KEY) || false;

  setAsideStatus = (val: boolean) => localStorage.setItem(CacheKey.ASIDE_KEY, val);

  clearCache = () => localStorage.clear();
}

export default new Cache();
