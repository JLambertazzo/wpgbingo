<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  titleTemplate: null,
  title: 'Not Found',
});
</script>

<template>
  <main>
    <h1><span>404</span> Not Found</h1>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 4rem);
  display: flex;
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
