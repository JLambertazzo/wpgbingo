import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import { challenges } from '@/data/challenges';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/go/:id',
    name: 'challenge',
    beforeEnter: (to) => {
      const id = to.params.id as string;
      if (!Object.keys(challenges).includes(id)) {
        return {
          name: 'not-found',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash,
        };
      }
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/ChallengeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/wall-of-fame',
    name: 'wall-of-fame',
    component: () => import('@/views/WallView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
];

export default routes;
