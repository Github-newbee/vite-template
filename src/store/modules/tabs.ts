import store from '@/store';
import cache from '@/store/helper/cacheFun';

export const tabsStore = defineStore('tabs-store', {
  state: () => ({
    tabsList: [{ title: '首页', path: '/home/dashboard' }],
  }),
  actions: {
    async addTabsToList(tab: any) {
      const tabItem = {
        title: tab.title,
        path: tab.path,
      };
      // 判断当前路由是否已缓存
      if (this.tabsList.every((item) => item.path !== tab.path)) {
        this.tabsList.push(tabItem);
      }
      cache.setTabsList(this.tabsList);
    },
  },
});

export const tabsStoreFun = () => tabsStore(store);
