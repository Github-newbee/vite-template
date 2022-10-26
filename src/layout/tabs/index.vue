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
        v-for="item in tabsStore.tabsList"
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
const tabsValue = ref('/home/dashboard');
const router = useRouter();
const route = useRoute();
const tabActive = computed(() => {
  return route.path;
});
// 监听路由
watch(
  () => route.path,
  () => {
    const params = {
      title: route.meta.title as string,
      path: route.path,
      close: true,
    };
    tabsStore.addTabsToList(params);
  },
  { immediate: true },
);

// 点击tab跳转路由
const handleClick = (pane: any) => {
  console.log('pane: ', pane);
  router.push({ path: pane.props.name });
};
console.log('tabsValue.value: ', tabsValue.value);
console.log('tabsStore: ', tabsStore);
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
