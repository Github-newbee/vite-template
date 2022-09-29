import store from '@/store';
import loginApi from '@/api/modules/login';
import cache from '@/store/helper/cacheFun';

export const userStore = defineStore('user-store', {
  state: () => ({
    token: cache.getToken(),
  }),
  actions: {
    // 用户信息
    // eslint-disable-next-line consistent-return
    async login(params: any) {
      try {
        const { token } = await loginApi.postVerification(params);
        cache.setToken(token);
        return token;
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },

    logout() {
      cache.clearCache();
      window.location.reload();
    },
  },
});

export const userStoreFun = () => userStore(store);
