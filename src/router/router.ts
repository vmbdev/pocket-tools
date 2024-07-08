import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/ruler',
      name: 'ruler',
      component: () => import('../views/Ruler.vue'),
    },
    {
      path: '/level',
      name: 'level',
      component: () => import('../views/Level.vue'),
    },
    {
      path: '/compass',
      name: 'compass',
      component: () => import('../views/Compass.vue'),
    },
  ],
});

export default router;
