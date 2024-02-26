<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }" class="link-header">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }" class="link-header">About</RouterLink>
      <RouterLink :to="{ name: 'wall-of-fame' }" class="link-header">Wall Of Fame</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  .link-header:first-child {
    margin-right: auto;
  }
}

@media (min-width: 768px) {
  header {
    padding: 1rem 2rem;
  }
  nav {
    gap: 2rem;
  }
}
</style>
