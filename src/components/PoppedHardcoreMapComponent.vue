<script setup lang="ts">
import type { tChallengeId } from '@/types';

const props = defineProps<{
  challengeId: tChallengeId;
}>();

const imagePath = `/images-md/${props.challengeId}/hardcore-map.jpg`;
</script>

<template>
  <section>
    <img :src="imagePath" :alt="`${props.challengeId} hardcore map`" />
  </section>
</template>

<style scoped>
img {
  display: block;
  width: 100%;
  max-height: calc(100% - 5rem);
}
</style>
