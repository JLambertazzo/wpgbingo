<script setup lang="ts">
import type { tCard, tChallengeId } from '@/types';

const props = defineProps<{
  card: tCard;
  challengeId: tChallengeId;
  selected: boolean;
}>();

const emit = defineEmits<{
  popup: [card: tCard];
}>();

const card = props.card;
const gridArea = card.id;
const imageURL = `/images-sm/${props.challengeId}/${card.img}`;
</script>

<template>
  <div :class="['grid-card', selected ? 'selected' : '']">
    <figure @click="emit('popup', card)">
      <img :src="imageURL" :alt="card.name" :title="card.name" width="240" height="240" loading="eager" />
      <figcaption>
        {{ card.name }}
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.grid-card {
  padding: 0.25rem;
  grid-area: v-bind(gridArea);
  &.selected {
    background-color: var(--secondary-light);
  }
}

figure {
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-light);
}

img {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

figcaption {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  font-size: 0;
  line-height: 1.2;
  color: var(--gray-lightest);
  text-overflow: ellipsis;
  font-weight: var(--weight-semibold);
}

@media (hover) {
  figcaption {
    opacity: 0;
    top: 0;
    bottom: auto;
    height: 120%;
    background: var(--color-modal-background-light);
    transition: all 0.3s ease-in-out;
  }
  figure:hover figcaption {
    opacity: 1;
    background: var(--color-modal-background-light);
    height: 100%;
  }
}

@media (min-width: 550px) {
  figcaption {
    font-size: 0.75rem;
    background: linear-gradient(0deg, var(--color-modal-background-light) 80%, transparent);
  }
}

@media (min-width: 768px) {
  .grid-card {
    padding: 0.5rem;
  }
  figcaption {
    font-size: 1rem;
  }
}
</style>
