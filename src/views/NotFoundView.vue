<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue';

useHead({
  title: 'Not Found',
});
useSeoMeta({
  robots: { noindex: true, nofollow: true },
});
</script>

<template>
  <main>
    <h1><span>404</span> Not Found</h1>
    <p><RouterLink :to="{ name: 'home' }" class="link-header">Time to head home…?</RouterLink></p>
  </main>
</template>

<style scoped>
main {
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 2rem;
  span {
    font-weight: var(--weight-thin);
    padding-right: 0.5rem;
    border-right: 1px solid var(--gray-light);
    margin-right: 0.5rem;
  }
}
</style>
