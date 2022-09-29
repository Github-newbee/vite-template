import store from '@/store';
import cache from '@/store/helper/cacheFun';

export const appStore = defineStore('app-store', {
  state: () => ({
    // 侧边栏状态
    asideStatus: cache.getAsideStatus(),
  }),
  actions: {
    setAsideStatus() {
      this.asideStatus = !this.asideStatus;
      cache.setAsideStatus(this.asideStatus);
    },
  },
});

export const appStoreFun = () => appStore(store);
