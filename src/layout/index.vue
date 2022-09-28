<template>
  <el-container class="layout">
    <Aside />
    <el-container direction="vertical">
      <!-- <el-scrollbar> -->
      <Header />
      <Main />
      <Footer />
      <!-- </el-scrollbar> -->
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from './aside/index.vue';
import Footer from './footer/index.vue';
import Header from './header/index.vue';
import Main from './main/index.vue';
</script>

<style lang="scss">
// .layout {
//   width: 100%;
//   &-main {
//     background: #f0f2f5;
//   }
// }
</style>
