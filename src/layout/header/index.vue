<template>
  <el-header class="flex items-center justify-between header-logo">
    <div>
      <IPrimeAlignLeft class="text-25px cursor-pointer" @click="foldMenu"></IPrimeAlignLeft>
    </div>
    <div>
      <el-dropdown trigger="click">
        <div class="header-logo flex items-center">
          <span class="mr-3 text-18px">{{ username }}</span>
          <IEpArrowDownBold />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import { appStoreFun } from '@/store/modules/app';
import { userStoreFun } from '@/store/modules/user';

const store = appStoreFun();
const userStore = userStoreFun();
const username = computed(() => userStore.userInfo?.username);
const foldMenu = () => {
  store.setAsideStatus();
};
const logout = () => {
  userStore.logout();
};
</script>

<style lang="scss" scoped>
.header-logo {
  height: var(--theme-header-height);
}
</style>
