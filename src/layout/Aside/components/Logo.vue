<template>
  <div class="border-r border-b">
    <div v-if="!store.asideStatus" class="logo">
      <span class="text-18px font-bold text-black">{{ $t('app.title') }}</span>
    </div>
    <div v-else class="logo">
      <span>Logo</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { appStoreFun } from '@/store/modules/app';

const store = appStoreFun();
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-logo-color);
  height: var(--theme-header-height);
}
</style>
