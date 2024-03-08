<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { useHead, useSeoMeta } from '@unhead/vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import PoppedWarningComponent from '@/components/PoppedWarningComponent.vue';

const canonical = 'https://wpgcyclebingo.com/';

useHead({
  titleTemplate: (title?: string) =>
    !title ? 'Winnipeg Bicycle Bingo' : `${title} - Winnipeg Bicycle Bingo`,
  link: [
    {
      rel: 'canonical',
      href: canonical,
    },
  ],
});
useSeoMeta({
  description: 'A bingo game that encourages people to discover different areas of Winnipeg on bicycle.',
  ogDescription: 'A bingo game that encourages people to discover different areas of Winnipeg on bicycle.',
  ogUrl: canonical,
  ogType: 'website',
  ogImage: '/images/map.jpg',
});


// can change all this to use Pinia store if/when there are new persistent features
const seenWarning = ref(true);
const sessionKey = 'wpgbingo-warning';

function closeWarning() {
  sessionStorage.setItem(sessionKey, 'true');
  seenWarning.value = true;
}

onBeforeMount(() => {
  if (sessionStorage.getItem(sessionKey)) {
    seenWarning.value = true;
  } else {
    seenWarning.value = false;
  }
});
</script>

<template>
  <HeaderComponent v-if="$route.name !== 'home' && $route.name !== 'not-found'" />
  <RouterView />
  <ModalComponent v-if="!seenWarning" :closeText="'I agree'" @unpop="closeWarning">
    <PoppedWarningComponent />
  </ModalComponent>
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
