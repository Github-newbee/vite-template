import store from '@/store';
import cache from '@/store/helper/cacheFun';

export const tabsStore = defineStore('tabs-store', {
  state: () => ({
    tabsList: [{ title: '首页', path: '/home/dashboard', close: false }],
  }),
  actions: {
    getTabList() {
      if (cache.getTabsList().length > 1) {
        this.tabsList = cache.getTabsList() as any;
      }
      return this.tabsList;
    },
    async addTabsToList(tab: any) {
      const temp = this.getTabList();
      const tabItem = {
        title: tab.title,
        path: tab.path,
        close: true,
      };
      // 判断当前路由是否已缓存
      if (temp.every((item) => item.path !== tab.path)) {
        temp.push(tabItem);
      }
      this.setTabsListToCache(this.tabsList);
    },
    async setTabsListToCache(list: any) {
      this.tabsList = list;
      cache.setTabsList(list);
    },
    async removeTab(tabPath: string) {
      const temp = JSON.parse(JSON.stringify(this.tabsList));
      const resArr = temp.filter((i: any) => i.path !== tabPath);
      this.setTabsListToCache(resArr);
    },
  },
});

export const tabsStoreFun = () => tabsStore(store);
