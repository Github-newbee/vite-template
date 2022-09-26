<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
  <!-- <TheFooter></TheFooter> -->
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

const appTitle = import.meta.env.VITE_API_BASEURL;

const locale = zhCn;
useTitle(appTitle);
</script>
