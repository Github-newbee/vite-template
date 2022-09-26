<template>
  <el-sub-menu v-if="menu.children?.length > 0" :key="menu.path" :index="menu.path">
    <template #title>
      <svg-icon :icon="menu.meta.icon"></svg-icon>
      <span>{{ menu.meta.title }}</span>
    </template>
    <menu-item v-for="sub in menu.children" :key="sub.path" :menu="sub"></menu-item>
  </el-sub-menu>
  <el-menu-item v-else :key="menu.name" :index="menu.path">
    <svg-icon :icon="menu.meta.icon"></svg-icon>
    <template #title>{{ menu.meta.title }}</template>
  </el-menu-item>
</template>

<script lang="ts" setup>
defineProps({
  menu: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped></style>
