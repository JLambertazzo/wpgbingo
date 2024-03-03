<script setup lang="ts">
import type { tChallengeId } from '@/types';

const props = defineProps<{
  challengeId: tChallengeId;
}>();

const imagePath = `/images-md/${props.challengeId}/hardcore-map.jpg`;
</script>

<template>
  <section>
    <img
      :src="imagePath"
      :alt="`${props.challengeId} hardcore map`"
      :title="`${props.challengeId} hardcore map`"
      width="960"
      height="720"
      loading="lazy"
    />
  </section>
</template>

<style scoped>
img {
  display: block;
  width: 100%;
  height: auto;
  max-height: calc(100% - 5rem);
  aspect-ratio: 4/3;
}
</style>
