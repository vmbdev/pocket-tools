<script setup lang="ts">
import { ref, computed } from 'vue';
import HomeButton from '../components/HomeButton.vue';

const inchSize = ref<number>(96 * window.devicePixelRatio);
const cmSize = computed<number>(() => Math.ceil(inchSize.value / 2.54));
const mmSize = computed<number>(() => Math.ceil(cmSize.value / 10));
const rulerLength = computed<number>(() => Math.ceil(screen.height / inchSize.value));
const rulerLengthInCM = computed<number>(() => Math.ceil(screen.height / cmSize.value));
const rulerLengthInMM = computed<number>(() => Math.ceil(screen.height / mmSize.value));
</script>

<template>
  <HomeButton />
  <div class="rulers">
    <div class="ruler">
      <div
        v-for="_ in rulerLengthInMM"
        class="measure measure-mm"
        :style="{ width: mmSize + 'px', height: mmSize + 'px' }"
      ></div>
    </div>

    <div class="ruler">
      <div
        v-for="(_, measure) in rulerLengthInCM"
        class="measure measure-cm"
        :style="{ width: cmSize + 'px', height: cmSize + 'px' }"
      >
        {{ measure }}
      </div>
    </div>

    <div class="ruler">
      <div
        v-for="(_, measure) in rulerLength"
        class="measure measure-inch"
        :style="{ width: inchSize + 'px', height: inchSize + 'px' }"
      >
        {{ measure }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$ruler-width: calc(1in + 2rem);

.rulers {
  position: fixed;
  top: 2rem;
  left: 0;
  background-color: #ffd60a;
  width: $ruler-width;
  height: 100vh;
}

.ruler {
  position: fixed;
  top: 2rem;
  left: 0;
  width: $ruler-width;
  height: 100%;
  border-right: 1px solid #000814;
  box-sizing: border-box;
  overflow: hidden;
}

.measure {
  box-sizing: border-box;
  border-top-width: 1px;
  border-top-style: solid;
  text-align: right;
  font-size: 1rem;

  &:first-of-type {
    width: $ruler-width;
    color: transparent;
  }

  &-inch {
    border-color: #000814;
    border-top-style: dashed;
    color: #000814;

    &:first-of-type:before {
      content: 'IN';
      color: #000814;
      position: absolute;
      font-weight: 500;
      left: 0.9in;
    }
  }

  &-cm {
    border-color: #000814;
    color: #000814;

    &:first-of-type:before {
      content: 'CM';
      color: #000814;
      font-weight: 500;
      position: absolute;
      left: 0.4cm;
    }
  }

  &-mm {
    border-color: #000814;
  }
}
</style>
