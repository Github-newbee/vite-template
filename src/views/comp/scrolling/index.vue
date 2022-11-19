<template>
  <div class="bg-white h-full">
    <div class="h-90px bg-red-200 relative w-full overflow-hidden">
      <ul :class="animateRef" class="stop">
        <li v-for="item in tableData" :key="item.date">
          {{ `姓名：${item.name} - 地址：${item.address} - 时间：${item.date}` }}
        </li>
      </ul>
    </div>
    <el-button type="primary" size="default" @click="scrollToBottom">向下滚动</el-button>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-05',
    name: 'Jary',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Amy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-05',
    name: 'Jary',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Amy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
const animateRef = ref('scroll-animate');
const scrollToBottom = () => {
  animateRef.value = 'scroll-animate-to-bottom';
};
</script>

<style lang="scss" scoped>
.stop:hover {
  animation-play-state: paused;
  cursor: pointer;
}
.scroll-animate {
  top: 0;
  position: absolute;
  animation: moveToTop 5s 1s infinite linear;

  li {
    height: 30px;
    line-height: 30px;
  }
}
.scroll-animate-to-bottom {
  bottom: 0;
  position: absolute;
  animation: moveToBottom 5s 1s infinite linear;

  li {
    height: 30px;
    line-height: 30px;
  }
}
@keyframes moveToTop {
  from {
    top: 0px;
  }
  to {
    top: -150px;
  }
}
@keyframes moveToBottom {
  from {
    bottom: 0px;
  }
  to {
    bottom: -150px;
  }
}
</style>
