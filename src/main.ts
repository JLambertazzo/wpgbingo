import './assets/main.scss';

import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import { createGtm } from '@gtm-support/vue-gtm';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(createHead());
app.use(
  createGtm({
    id: 'GTM-577DCV5D',
    vueRouter: router,
  }),
);

app.mount('#app');
