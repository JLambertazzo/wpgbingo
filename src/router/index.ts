import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes,
});

export default router;
