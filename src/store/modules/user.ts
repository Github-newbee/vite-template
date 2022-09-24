import store from '@/store';
import loginApi from '@/api/modules/login';
import Cache from '@/store/helper/cacheFun';

export const userStore = defineStore('user-store', {
  state: () => ({}),
  actions: {
    // 用户信息
    // eslint-disable-next-line consistent-return
    async login(params: any) {
      try {
        const { Result } = await loginApi.postVerification(params);
        console.log('user: ', Result);
        Cache.setToken(Result);
        return Result;
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },

    logout() {
      Cache.clearCache();
      window.location.reload();
    },
  },
});

export const userStoreFun = () => userStore(store);
