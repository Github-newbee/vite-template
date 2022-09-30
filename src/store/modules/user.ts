import store from '@/store';
import loginApi from '@/api/modules/login';
import cache from '@/store/helper/cacheFun';

export const userStore = defineStore('user-store', {
  state: () => ({
    token: cache.getToken(),
    userInfo: cache.getUserInfo(),
  }),
  actions: {
    // 用户信息
    // eslint-disable-next-line consistent-return
    async login(params: any) {
      try {
        const { token, user } = await loginApi.postVerification(params);
        this.setToken(token);
        this.setUser(user);
        return token;
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
    setToken(token: string) {
      this.token = token;
      cache.setToken(token);
    },
    setUser(userInfo: any) {
      this.userInfo = userInfo;
      cache.setUserInfo(userInfo);
    },

    logout() {
      cache.clearCache();
      window.location.reload();
    },
  },
});

export const userStoreFun = () => userStore(store);
