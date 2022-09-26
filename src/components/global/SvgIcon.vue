<template>
  <svg-icon>
    <use :xlink:href="iconName" />
  </svg-icon>
</template>

<script lang="ts" setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    requeried: true,
  },
  size: {
    type: [Number, String],
    default: 16,
  },
});
const iconName = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style lang="scss" scoped></style>
