import { PATHS } from '@/data';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PATHS.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: PATHS.HOME,
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
});

export default router;
