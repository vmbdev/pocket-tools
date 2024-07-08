<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="back">
    <RouterLink to="/">&#60; Home</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
.back {
  position: absolute;
  right: 2rem;
  top: 2rem;
  text-transform: uppercase;
  width: 7rem;
  height: 2rem;
  background-color: #000814;
  border-width: 5px 5px 1px 1px;
  border-style: solid;
  border-color: #ffd60a;
  color: white;

  &:hover {
    background-color: #ffc300;
    border-color: #ffc300;
  }

  a {
    display: block;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 2rem;
  }
}
</style>
