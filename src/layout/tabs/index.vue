<template>
  <div class="bg-white border-t h-42px">
    <el-tabs
      v-model="tabActive"
      type="card"
      tab-position="top"
      @tab-click="handleClick"
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="item in tabList"
        :key="item.path"
        :label="$t(item.title)"
        :name="item.path"
        :closable="item.close"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { tabsStoreFun } from '@/store/modules/tabs';

const tabsStore = tabsStoreFun();
const router = useRouter();
const route = useRoute();
const tabActive = computed(() => {
  return route.path;
});
const tabList = computed(() => tabsStore.getTabList() as any);
// 监听路由
watch(
  () => route.path,
  (val) => {
    const params = {
      title: route.meta.title as string,
      path: val,
      close: true,
    };
    tabsStore.addTabsToList(params);
  },
  { immediate: true },
);

// 点击tab跳转路由
const handleClick = (pane: any) => {
  router.push({ path: pane.props.name });
};
// 删除tabs
const removeTab = (tab: any) => {
  tabsStore.removeTab(tab);
  router.push(unref(tabList).slice(-1)[0].path);
};
</script>

<style lang="scss" scoped>
::v-deep(.el-tabs) {
  .el-tabs__header {
    border: none;

    .el-tabs__nav,
    .el-tabs__item {
      border: none;
      .is-active {
        border-bottom: 2px solid var(--el-color-primary);
      }
    }
  }
}
</style>
