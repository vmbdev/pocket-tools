<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import HomeButton from '../components/HomeButton.vue';

const canvas = ref<HTMLCanvasElement | null>(null);
const beta = ref<number>(0);
const gamma = ref<number>(0);
let ctx: CanvasRenderingContext2D | null | undefined;

onMounted(() => {
  window.addEventListener('deviceorientation', handleOrientation, true);

  ctx = canvas.value?.getContext('2d');
  drawTable();
});

watch([beta, gamma], ([beta, gamma]) => {
  if (ctx) {
    drawLevelMeasure(gamma + ctx.canvas.width / 2, beta + ctx.canvas.height / 2);
  }
});

const handleOrientation = (event: DeviceOrientationEvent) => {
  if (event && event.beta && event.gamma) {
    beta.value = Math.round(event.beta);
    gamma.value = Math.round(event.gamma);
  }
};

const drawTable = () => {
  if (ctx) {
    const wLimit = ctx.canvas.width;
    const hLimit = ctx.canvas.height;

    ctx.clearRect(0, 0, wLimit, hLimit);

    drawCircle(wLimit / 2, hLimit / 2, 160);
    drawCircle(wLimit / 2, hLimit / 2, 120);
    drawCircle(wLimit / 2, hLimit / 2, 80);
    drawCircle(wLimit / 2, hLimit / 2, 40);

    // drawLine(0, 0, wLimit, hLimit);
    // drawLine(wLimit, 0, 0, hLimit);
    drawLine(wLimit / 2, 0, wLimit / 2, hLimit);
    drawLine(0, wLimit / 2, wLimit, hLimit / 2);
  }
};

const drawCircle = (x: number, y: number, radius: number) => {
  if (ctx) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffc300';
    ctx.fill();
    ctx.stroke();
  }
};

const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
};

const drawLevelMeasure = (x: number, y: number) => {
  if (ctx) {
    drawTable();
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#001D3D';
    ctx.fill();
  }
};
</script>

<template>
  <HomeButton />
  <div class="table">
    <canvas ref="canvas" width="320" height="320"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.table {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
