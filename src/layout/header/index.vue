<template>
  <el-header class="flex items-center justify-between header-logo">
    <div>
      <IPrimeAlignLeft class="text-25px cursor-pointer" @click="foldMenu"></IPrimeAlignLeft>
    </div>
    <div>
      <el-dropdown trigger="click" class="mr-3" @command="languageChange">
        <div class="header-logo flex items-center">
          <IUilEnglishToChinese class="text-xl" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="lan in languages" :key="lan" :disabled="locale === lan" :command="lan">
              {{ messages[lan].langName }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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
import { messages } from '@/i18n';

const store = appStoreFun();
const userStore = userStoreFun();
const username = computed(() => userStore.userInfo?.username);
const foldMenu = () => {
  store.setAsideStatus();
};
const logout = () => {
  userStore.logout();
};
const { locale } = useI18n();
const languages = Object.keys(messages);
const languageChange = async (language: string) => {
  await store.setLanguage(language);
  locale.value = language;
};
</script>

<style lang="scss" scoped>
.header-logo {
  height: var(--theme-header-height);
}
</style>
