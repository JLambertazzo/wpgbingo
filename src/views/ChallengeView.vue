<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useHead } from '@unhead/vue';
import type { tChallenge, tChallengeId } from '@/types';
import ChallengeComponent from '@/components/ChallengeComponent.vue';
import { challenges } from '@/data/challenges';

const route = useRoute();
const challengeId = route.params.id;
const challenge = challenges.find((e) => e.id === challengeId);
if (!challenge) {
  const router = useRouter();
  router.replace({
    name: 'not-found',
    params: { pathMatch: route.path.substring(1).split('/') },
    query: route.query,
    hash: route.hash,
  });
} else {
  useHead({
    title: `${challenge.name} Challenge`,
  });
}
</script>

<template>
  <main v-if="challenge">
    <h1>{{ challenge.name }} Challenge</h1>
    <ChallengeComponent :challenge="challenge" />
  </main>
</template>

<style scoped></style>
