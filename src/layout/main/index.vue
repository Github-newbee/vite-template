<template>
  <Tabs></Tabs>
  <el-main class="layout-main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <suspense>
          <template #default>
            <component :is="Component" :key="key" />
          </template>
          <template #fallback> Loading... </template>
        </suspense>
      </keep-alive>
    </router-view>
  </el-main>
</template>

<script lang="ts" setup>
import Tabs from '../tabs/index.vue';

const route = useRoute();
const key = computed(() => route.path);
</script>

<style lang="scss" scoped>
.layout-main {
  background: #f0f2f5;
}
</style>
