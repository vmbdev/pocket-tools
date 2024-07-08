<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home">
    <img src="@/assets/logo/pockettools-256.png" alt="Pocket Tools" />
    <section class="menu">
      <header class="title">Pocket Tools</header>
      <ul>
        <li><RouterLink to="/ruler">Ruler</RouterLink></li>
        <li><RouterLink to="/level">Level</RouterLink></li>
        <li><RouterLink to="/compass">Compass</RouterLink></li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  background-color: #6a994e;
  border-color: #386641;
  border-width: 5px 1px;
  border-radius: 10px;
  border-style: solid;
  margin: 1rem;
  padding: 1rem;
  font-weight: 500;
}

.menu {
  width: fit-content;

  ul {
    list-style-type: none;
    padding: 0.4rem;

    li {
      text-align: center;
      background-color: #ffd60a;
      border-width: 5px 5px 1px 1px;
      border-style: solid;
      border-color: #001d3d;
      margin: 3rem;
      width: 11rem;
      height: 3rem;

      &:hover {
        background-color: #ffc300;
        border-color: #000814;
      }

      a {
        width: 100%;
        height: fit-content;
        display: block;
        line-height: 3rem;
      }
    }
  }
}
</style>
