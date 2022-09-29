<template>
  <el-scrollbar class="flex-1">
    <el-menu
      :collapse="store.asideStatus"
      class="el-menu-container"
      :unique-opened="true"
      :default-active="defaultActive"
      router
      mode="vertical"
      :collapse-transition="false"
    >
      <MenuItem :menu="menu" v-for="menu in asyncRoutes" :key="menu.path"></MenuItem>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import asyncRoutes from '@/router/route.async';
import MenuItem from './MenuItem.vue';
import { appStoreFun } from '@/store/modules/app';

const store = appStoreFun();
const route = useRoute();
const defaultActive = computed(() => {
  const { path } = route;
  console.log('path: ', path);
  return path;
});
</script>

<style lang="scss" scoped>
::v-deep(.el-menu-container:not(.el-menu--collapse)) {
  width: 200px;
  height: calc(100vh);
}
</style>
