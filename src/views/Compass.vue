<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HomeButton from '../components/HomeButton.vue';

const canvas = ref<HTMLCanvasElement | null>(null);
const alpha = ref<number>(45);
let ctx: CanvasRenderingContext2D | null | undefined;
const rose = new Image();
const dimm = 380;
const roseW = dimm - 20;
const roseH = dimm - 20;

onMounted(() => {
  window.addEventListener('deviceorientationabsolute', handleOrientation, true);

  ctx = canvas.value?.getContext('2d');

  if (canvas.value && ctx) {
    canvas.value.width = dimm;
    canvas.value.height = dimm;

    drawRose(roseW, roseH);
    rose.src = canvas.value.toDataURL();
    paintRose();
  }
});

const paintRose = () => {
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.fillStyle = '#000814';
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.rotate((alpha.value * Math.PI) / 180);
    ctx.drawImage(rose, -roseW / 2, -roseH / 2, roseW, roseH);
    ctx.restore();
  }
};

const handleOrientation = (event: DeviceOrientationEvent) => {
  if (event && event.alpha && alpha.value !== event.alpha) {
    alpha.value = event.alpha;
    paintRose();
  }
};

const drawRose = (w: number, h: number) => {
  if (ctx) {
    drawCircle(w / 2, h / 2, 140);

    drawLine(w / 2, 40, w / 2, h - 40);
    drawLine(40, h / 2, w - 40, h / 2);
    drawLine(80, 80, w - 80, h - 80);
    drawLine(w - 80, 80, 80, h - 80);

    ctx.fillStyle = '#ffd60a';
    ctx.font = '38px Rubik';
    ctx.fillText('N', w / 2 - 13, 30);
    ctx.fillText('S', w / 2 - 13, h - 5);
    ctx.fillText('W', 5, h / 2 + 13);
    ctx.fillText('E', w - 30, h / 2 + 13);

    ctx.fillStyle = '#ffc300';
    ctx.font = '24px Rubik';
    ctx.fillText('NW', 30, h / 4 - 10);
    ctx.fillText('NE', w - 65, h / 4 - 10);
    ctx.fillText('SE', w - 65, h / 2 + 120);
    ctx.fillText('SW', 30, h / 2 + 120);
  }
};

const drawCircle = (x: number, y: number, radius: number) => {
  if (ctx) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffd60a';
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
</script>

<template>
  <HomeButton />
  <div class="table">
    <canvas ref="canvas" :width="dimm" :height="dimm"></canvas>
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
