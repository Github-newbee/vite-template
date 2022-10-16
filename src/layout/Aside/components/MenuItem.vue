<template>
  <el-sub-menu v-if="menu.children && menu.children.length > 1" :key="menu.path" :index="menu.path">
    <template #title>
      <el-icon>
        <component :is="menu.meta.icon" />
      </el-icon>
      <span>{{ menu.meta.title }}</span>
    </template>

    <menu-item v-for="sub in menu.children" :key="sub.path" :menu="sub" />
  </el-sub-menu>
  <el-menu-item v-else :key="menu.name" :index="menu.path">
    <el-icon v-if="menu.meta.icon">
      <component :is="menu.meta.icon" />
    </el-icon>
    <template #title>
      <span>{{ menu.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
const props = defineProps({
  menu: {
    type: Object,
    default: () => {},
  },
});
console.log('props:', props.menu);
</script>

<style lang="scss" scoped></style>
