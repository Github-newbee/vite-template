<template>
  <bg></bg>
  <div class="login">
    <div class="login-container">
      <div class="text-28px text-center mt-10 mb-10 text-black">
        <span style="color: black">{{ title }}</span>
      </div>
      <el-form :model="state.form" ref="formRef" :rules="rules" label-position="top">
        <el-form-item class="input-item" prop="username">
          <el-input v-model="state.form.username" autocomplete="off" placeholder="输入账号"></el-input>
        </el-form-item>
        <el-form-item class="input-item" prop="password">
          <el-input
            :show-password="true"
            v-model="state.form.password"
            autocomplete="off"
            @keyup.enter="onSubmit"
            placeholder="输入密码"
          />
        </el-form-item>
        <el-form-item class="mt-10">
          <el-button class="w-full min-h-50px" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { userStoreFun } from '@/store/modules/user';
import bg from './components/bg.vue';

const title = import.meta.env.VITE_APP_TITLE;
const router = useRouter();
const store = userStoreFun();
const formRef = ref();
const state = reactive({
  form: {
    username: '',
    password: '',
  },
});
const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }],
};
const onSubmit = () => {
  formRef.value.validate((valid: any) => {
    if (valid) {
      store.login(state.form).then((res) => {
        if (res) {
          router.push({ path: '/home' });
        }
      });
    }
  });
};
</script>

<style lang="scss" scoped>
@import './css/index.scss';
</style>
