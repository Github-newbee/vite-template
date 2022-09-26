import { localStorage } from './storage';
import { CacheKey } from '@/enums';

class Cache {
  getToken = (): string => localStorage.getItem(CacheKey.TOKEN_KEY) || '';

  setToken = (val: string) => localStorage.setItem(CacheKey.TOKEN_KEY, val);

  getLanguage = (): string => localStorage.getItem(CacheKey.LANG_KEY) || 'zh';

  setLanguage = (val: string) => localStorage.setItem(CacheKey.LANG_KEY, val);

  clearCache = () => localStorage.clear();
}

export default new Cache();