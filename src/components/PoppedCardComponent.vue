<script setup lang="ts">
import type { tCard, tChallengeId } from '@/types';

const props = defineProps<{
  challengeId: tChallengeId;
  card: tCard;
}>();

const card = props.card;
const imagePath = `/images-md/${props.challengeId}/${card.img}`;
</script>

<template>
  <section>
    <img :src="imagePath" :alt="card.name" :title="card.name" width="960" height="720" loading="lazy" />
    <div class="details">
      <h2>{{ card.name }}</h2>
      <p>{{ card.desc }}</p>
    </div>
  </section>
</template>

<style scoped>
img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
}

div {
  margin: 1rem;
}

@media (min-width: 768px) {
  div {
    margin: 2rem;
  }
}
</style>
