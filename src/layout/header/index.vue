<template>
  <el-header class="flex items-center justify-between header-logo">
    <div>
      <IPrimeAlignLeft class="text-25px cursor-pointer" @click="foldMenu"></IPrimeAlignLeft>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import { appStoreFun } from '@/store/modules/app';

const store = appStoreFun();
const foldMenu = () => {
  store.setAsideStatus();
};
</script>

<style lang="scss" scoped>
.header-logo {
  height: var(--theme-header-height);
}
</style>
