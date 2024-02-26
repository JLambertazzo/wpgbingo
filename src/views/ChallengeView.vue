<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';
import { challenges } from '@/data/challenges';
import type { tChallengeId } from '@/types';
import ChallengeComponent from '@/components/ChallengeComponent.vue';

const route = useRoute();

// the route guard enforces we are getting valid challengeIds here
const challengeId = route.params.id as tChallengeId;
const challenge = challenges[challengeId];

useHead({
  title: `${challenge.name} Challenge`,
});
</script>

<template>
  <main>
    <h1>{{ challenge.name }} Challenge</h1>

    <Suspense>
      <ChallengeComponent :challengeId="challengeId" />
    </Suspense>
  </main>
</template>

<style scoped></style>
