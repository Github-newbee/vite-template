<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
  <!-- <TheFooter></TheFooter> -->
</template>

<script setup lang="ts">
import { messages } from '@/i18n';
import { appStoreFun } from '@/store/modules/app';

const store = appStoreFun();
const locale = computed(() => messages[store.language].el);
</script>
