<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue';

import { useHead } from '@unhead/vue';

useHead({
  titleTemplate: (title?: string) =>
    !title ? 'Winnipeg Bicycle Bingo' : `${title} - Winnipeg Bicycle Bingo`,
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
