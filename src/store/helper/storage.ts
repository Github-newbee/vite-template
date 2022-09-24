/**
 * 浏览器永久存储 window.localStorage
 * @method setItem 设置缓存
 * @method getItem 获取缓存
 * @method removeItem 移除缓存
 * @method clear 移除全部缓存
 */

export const localStorage = {
  setItem(key: string, value: any) {
    if (value === undefined) {
      return;
    }
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  getItem(key: string) {
    const json: any = window.localStorage.getItem(key);
    return JSON.parse(json);
  },
  removeItem(key: string) {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  },
};

/**
 * 浏览器会话存储 window.sessionStorage
 * @method setItem 设置缓存
 * @method getItem 获取缓存
 * @method removeItem 移除缓存
 * @method clear 移除全部缓存
 */
export const sessionStorage = {
  setItem(key: string, value: any) {
    if (value === undefined) {
      return;
    }
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  getItem(key: string) {
    const json: any = window.sessionStorage.getItem(key);
    return JSON.parse(json);
  },
  removeItem(key: string) {
    window.sessionStorage.removeItem(key);
  },
  clear() {
    window.sessionStorage.clear();
  },
};
