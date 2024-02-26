<script setup lang="ts">
const props = defineProps<{
  dist: number;
  url: string;
}>();
</script>

<template>
  <aside>
    <a :href="props.url" target="_blank">
      <div class="dist">{{ props.dist }} km</div>
      <div class="mapit">Map It</div>
    </a>
  </aside>
</template>

<style scoped>
aside {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1rem;
  animation: pop-in 0.2s ease-in-out;
}

a {
  width: 6rem;
  height: 6rem;
  border: 0;
  border-radius: 5rem;
  border-bottom-right-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--primary-lighter);
  background-color: var(--primary);
  box-shadow: var(--shadow-dark);
  text-decoration: none;

  &:hover {
    color: var(--primary-lightest);
    background-color: var(--primary-dark);
  }
}
.dist {
  font-weight: var(--weight-black);
}
.mapit {
  font-size: 0.875rem;
  line-height: 1rem;
}

@media (min-width: 768px) {
  .dist {
    font-size: 1.2rem;
  }
}
</style>
