import './assets/main.scss';

import { createHead } from '@unhead/vue';
import { InferSeoMetaPlugin } from '@unhead/addons';
import { createGtm } from '@gtm-support/vue-gtm';
import { ViteSSG } from 'vite-ssg';

import App from './App.vue';
import routes from './router/routes';
import { cChallengeIds } from './constants';
import type { RouteRecordRaw } from 'vue-router';

export const createApp = ViteSSG(App, { routes }, ({ app, router }) => {
  app.use(
    createHead({
      plugins: [InferSeoMetaPlugin()],
    }),
  );
  app.use(
    createGtm({
      id: 'GTM-577DCV5D',
      vueRouter: router,
    }),
  );
});

export async function includedRoutes(paths: any, routes: RouteRecordRaw[]) {
  return (
    routes
      .flatMap((route) => {
        // don't render the catch-all route
        if (route.path.startsWith('/:pathMatch')) {
          return;
        }
        // render all the dynamic challenge routes
        return route.name === 'challenge'
          ? cChallengeIds.map((id) => route.path.replace(':id', id))
          : route.path;
      })
      // remove undefined entries from array
      .filter(Boolean)
  );
}
