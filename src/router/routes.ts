import AboutView from '@/views/AboutView.vue';
import ChallengeView from '@/views/ChallengeView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import WallView from '@/views/WallView.vue';
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
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ChallengeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/wall-of-fame',
    name: 'wall-of-fame',
    component: WallView,
  },
  // this entry builds the static 404.html page for Netlify
  {
    path: '/404',
    name: 'not-found',
    component: NotFoundView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
];

export default routes;
