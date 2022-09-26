<template>
  <el-container class="layout">
    <Aside />
    <el-container>
      <el-header>Header</el-header>
      <el-scrollbar>
        <el-main>
          <router-view v-slot="{ Component, route }">
            <keep-alive>
              <component :is="Component" :key="route.name"></component>
            </keep-alive>
          </router-view>
        </el-main>
      </el-scrollbar>
      <Footer />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from './Aside/index.vue';
import Footer from './Footer/index.vue';
</script>

<style lang="scss" scoped></style>
