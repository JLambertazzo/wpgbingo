<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue';

import { useHead, useSeoMeta } from '@unhead/vue';

const canonical = 'https://wpgcyclebingo.com/';

useHead({
  titleTemplate: (title?: string) =>
    !title ? 'Winnipeg Bicycle Bingo' : `${title} - Winnipeg Bicycle Bingo`,
  meta: [
    {
      name: 'description',
      content: 'A bingo game that encourages people to discover different areas of Winnipeg on bicycle.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: canonical,
    },
  ],
});
useSeoMeta({
  ogUrl: canonical,
  ogType: 'website',
  ogImage: '/images/map.jpg',
});
</script>

<template>
  <HeaderComponent v-if="$route.path !== '/'" />
  <RouterView />
</template>

<style>
main {
  padding: 0 1rem;
  max-width: 50rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  main {
    padding: 0 2rem 4rem 2rem;
  }
}
</style>
