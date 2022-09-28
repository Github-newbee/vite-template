<template>
  <el-scrollbar class="flex-1" max-height="400px">
    <el-menu :default-active="defaultActive" router>
      <MenuItem :menu="menu" v-for="menu in asyncRoutes" :key="menu.path"></MenuItem>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import asyncRoutes from '@/router/route.async';
import MenuItem from './MenuItem.vue';

const route = useRoute();
const defaultActive = computed(() => {
  const { path } = route;
  console.log('path: ', path);
  return path;
});
</script>

<style lang="scss" scoped></style>
