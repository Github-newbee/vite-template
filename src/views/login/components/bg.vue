<template>
  <canvas id="bg"></canvas>
</template>
<script lang="ts" setup>
const setupToDom = () => {
  const cvs: any = document.getElementById('bg');
  const ctx = cvs.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;
  // 设置cvs 宽高为界面宽高
  cvs.width = width;
  cvs.height = height;

  // 列宽
  const columnWith = 20;
  // 列数
  const columnCount = Math.floor(window.innerWidth / columnWith);
  // 记录每列写到了第几个文字
  const columnNextIndexes = new Array(columnCount);
  columnNextIndexes.fill(1);
  // 随机颜色
  function getRandomColor() {
    const fontColors = [
      '#33B5E5',
      '#0099CC',
      '#AA66CC',
      '#9933CC',
      '#99CC00',
      '#FFBB33',
      '#FF8800',
      '#CC0000',
    ];
    return fontColors[Math.floor(Math.random() * fontColors.length)];
  }

  function getRandomChar() {
    const str = 'console.log("hello world")';
    return str[Math.floor(Math.random() * str.length)];
  }
  // 绘画的函数
  function draw() {
    ctx.fillStyle = 'rgba(240,240,240,0.1)';
    ctx.fillRect(0, 0, width, height);
    const fz = 20;
    ctx.fillStyle = getRandomColor();
    ctx.font = `${fz}px "Roboto Mono"`;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < columnCount; i++) {
      const x = i * columnWith;
      const y = fz * columnNextIndexes[i];
      ctx.fillText(getRandomChar(), x, y);
      if (y > height && Math.random() > 0.99) {
        columnNextIndexes[i] = 0;
      } else {
        // eslint-disable-next-line no-plusplus
        columnNextIndexes[i]++;
      }
    }
  }
  draw();
  setInterval(draw, 40);
};

onMounted(() => {
  setupToDom();
});
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
#bg {
  position: absolute;
  z-index: -1;
}
</style>
