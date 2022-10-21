<template>
  <el-input
    v-model="pwdStrengthValue"
    type="password"
    placeholder="输入密码"
    :show-password="true"
    clearable
    @change="handleChange"
  ></el-input>
  <div class="strength-bar">
    <div class="strength-bar-fill" :data-score="checkPwdStrengeth"></div>
  </div>
</template>

<script lang="ts" setup name="PwdStrength">
import { zxcvbn } from '@zxcvbn-ts/core';

const pwdStrengthValue = ref('');
const emit = defineEmits(['strength']);
const props = defineProps({
  value: {
    type: String,
  },
});
const checkPwdStrengeth = computed(() => {
  const value = unref(pwdStrengthValue);
  const res = value ? zxcvbn(unref(pwdStrengthValue)).score : -1;
  console.log('res: ', res); // 返回密码强度值 0-4
  emit('strength', res);
  return res;
});

const handleChange = (val: string) => {
  pwdStrengthValue.value = val;
};
// 立即执行一个函数，同时响应式追踪其依赖
watchEffect(() => {
  pwdStrengthValue.value = props.value || '';
});
</script>

<style lang="scss" scoped>
.strength {
  &-bar {
    position: relative;
    height: 6px;
    margin: 10px 6px;
    background-color: grey;
    border-radius: 6px;

    &::before,
    &::after {
      position: absolute;
      z-index: 10;
      display: block;
      width: 20%;
      height: inherit;
      background-color: transparent;
      border-color: white;
      border-style: solid;
      border-width: 0 5px;
      content: '';
    }

    &::before {
      left: 20%;
    }

    &::after {
      right: 20%;
    }

    &-fill {
      position: absolute;
      width: 0;
      height: inherit;
      background-color: transparent;
      border-radius: inherit;
      transition: width 0.5s ease-in-out, background 0.25s;

      &[data-score='0'] {
        width: 20%;
        background-color: #ed6f6f;
      }

      &[data-score='1'] {
        width: 40%;
        background-color: #ed6f6f;
      }

      &[data-score='2'] {
        width: 60%;
        background-color: #efbd47;
      }

      &[data-score='3'] {
        width: 80%;
        background-color: #efbd47;
      }

      &[data-score='4'] {
        width: 100%;
        background-color: #5cca5c;
      }
    }
  }
}
</style>
