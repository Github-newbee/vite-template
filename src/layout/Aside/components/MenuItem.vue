<template>
  <div v-if="!menu.hidden">
    <el-sub-menu v-if="menu.children?.length > 0" :key="menu.path" :index="menu.path">
      <template #title>
        <component :is="menu.meta.icon" />
        <p class="ml-2">{{ menu.meta.title }}</p>
      </template>
      <menu-item v-for="sub in menu.children" :key="sub.path" :menu="sub" />
    </el-sub-menu>
    <el-menu-item v-else :key="menu.name" :index="menu.path">
      <template #title>
        <component :is="menu.meta.icon" />
        {{ menu.meta.title }}
      </template>
    </el-menu-item>
  </div>
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
