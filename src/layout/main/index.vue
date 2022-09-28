<template>
  <el-main class="layout-main">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <suspense>
          <template #default>
            <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
          </template>
          <template #fallback> Loading... </template>
        </suspense>
      </keep-alive>
    </router-view>
  </el-main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.layout-main {
  background: #f0f2f5;
}
</style>
