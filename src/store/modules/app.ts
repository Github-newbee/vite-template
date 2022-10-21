import store from '@/store';
import cache from '@/store/helper/cacheFun';

export const appStore = defineStore('app-store', {
  state: () => ({
    // 侧边栏状态
    asideStatus: cache.getAsideStatus(),
    // 国际化
    language: cache.getLanguage(),
  }),
  actions: {
    setAsideStatus() {
      this.asideStatus = !this.asideStatus;
      cache.setAsideStatus(this.asideStatus);
    },
    setLanguage(locale: string) {
      this.language = locale;
      cache.setLanguage(locale);
    },
  },
});

export const appStoreFun = () => appStore(store);
