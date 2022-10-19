<template>
  <el-menu-item v-if="hasMoreChildren(menu)" :key="menu.name" :index="menu.path">
    <el-icon v-if="menu.meta.icon">
      <component :is="menu.meta.icon" />
    </el-icon>
    <template #title>
      <span>{{ menu.meta.title }}</span>
    </template>
  </el-menu-item>
  <el-sub-menu v-else :key="menu.path" :index="menu.path">
    <template #title>
      <el-icon v-if="menu.meta.icon">
        <component :is="menu.meta.icon" />
      </el-icon>
      <span>{{ menu.meta.title }}</span>
    </template>
    <MenuItem v-for="sub in menu.children" :key="sub.path" :menu="sub" />
  </el-sub-menu>
</template>

<script lang="ts" setup name="MenuItem">
defineProps({
  menu: {
    type: Object,
    default: () => {},
  },
});
const hasMoreChildren = (menu: any) => {
  if (!menu.children || menu.children.length === 1) {
    return true;
  }
  return false;
};
</script>

<style lang="scss" scoped></style>
