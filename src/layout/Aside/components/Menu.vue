<template>
  <el-scrollbar class="flex-1">
    <el-menu
      :collapse="store.asideStatus"
      class="el-menu-container"
      :unique-opened="true"
      :default-active="defaultActive"
      :collapse-transition="false"
      mode="vertical"
      :router="true"
    >
      <MenuItem :menu="menu" v-for="menu in asyncRoutes" :key="menu.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import asyncRoutes from '@/router/route.async';
import MenuItem from './MenuItem.vue';
// import handleRouter from '@/utils/utils';
import { appStoreFun } from '@/store/modules/app';
import { sortRouter } from '@/router/helper';
// 路由根据sort字段排序

console.log('res: ', sortRouter(asyncRoutes));
// console.log('handleRouter(asyncRoutes): ', handleRouter(asyncRoutes));
const store = appStoreFun();
const defaultActive = asyncRoutes[0].path;
</script>

<style lang="scss" scoped>
::v-deep(.el-menu-container:not(.el-menu--collapse)) {
  width: 200px;
  height: calc(100vh);
}
</style>
