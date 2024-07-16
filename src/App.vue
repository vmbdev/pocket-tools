<script setup lang="ts">
import { App as CapacitorApp } from '@capacitor/app';
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();

CapacitorApp.addListener('backButton', () => {
  if (router.currentRoute.value.path !== '/') router.back();
  else CapacitorApp.exitApp();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
