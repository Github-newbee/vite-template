<template>
  <div class="bg-white border-t h-38px">
    <el-tabs
      v-model="tabsValue"
      type="card"
      tab-position="top"
      @tab-click="handleClick"
      @tab-remove="removeTab"
    >
      <el-tab-pane v-for="item in tabsStore.tabsList" :key="item.path" :label="item.title" :name="item.path">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { tabsStoreFun } from '@/store/modules/tabs';

const tabsValue = ref('/home/dashboard');
const tabsStore = tabsStoreFun();
console.log('tabsStore: ', tabsStore);
</script>

<style lang="scss" scoped>
::v-deep(.el-tabs) {
  .el-tabs__header {
    border-bottom: none;
  }
}
</style>
