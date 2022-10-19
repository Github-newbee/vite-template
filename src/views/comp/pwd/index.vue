<template>
  <div>密码强度:{{ txt }}</div>
  <PwdStrength @strength="getStrength"></PwdStrength>
</template>

<script lang="ts" setup>
import PwdStrength from '@/components/PwdStrength/PwdStrength.vue';

const txt = ref('');
const getStrength = (val: any) => {
  if ([0, 1].includes(val)) {
    txt.value = '弱';
  } else if ([2, 3].includes(val)) {
    txt.value = '中';
  } else if ([4].includes(val)) {
    txt.value = '强';
  }
};
</script>

<style lang="scss" scoped></style>
