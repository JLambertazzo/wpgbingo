<script setup lang="ts">
import { ref } from 'vue';
import type { tChallenge, tCard, tRoute, tRouteId } from '@/types';
import ChallengeCardComponent from './ChallengeCardComponent.vue';
import ChallengeButtonComponent from './ChallengeButtonComponent.vue';
import PoppedCardComponent from './PoppedCardComponent.vue';
import MapItComponent from './MapItComponent.vue';
import ModalComponent from './ModalComponent.vue';

const props = defineProps<{
  challenge: tChallenge;
}>();

const challenge = props.challenge;
const cards = challenge.cards;
const routes = challenge.routes;
const navRoutes = routes.filter((e) => e.button);
const buttonRoutes = routes.filter((e) => !e.button);
const hasDiagonals = routes.filter((e) => e.id.startsWith('d')).length > 0;

const rows = Math.ceil(cards.length / 5);

// going to assume we'll only ever have columns a-e
let gridTemplateAreas = `"bd1 bc1 bc2 bc3 bc4 bc5 bd2"\n`;
for (let i = 1; i <= rows; i++) {
  gridTemplateAreas += `"br${i} a${i} b${i} c${i} d${i} e${i} ."\n`;
}

const selectedRoute = ref(undefined as tRoute | undefined);
const poppedCard = ref(undefined as tCard | undefined);

function popupCard(card: tCard) {
  poppedCard.value = card;
}
function unpopCard() {
  poppedCard.value = undefined;
}

function selectRoutes(id: tRouteId) {
  if (selectedRoute.value?.id === id) {
    selectedRoute.value = undefined;
  } else {
    const route = routes.find((e) => e.id === id);
    if (route) {
      selectedRoute.value = route;
    }
  }
}

function isRouteSelected(route: tRoute) {
  return selectedRoute.value?.id === route.id;
}

function isCardInSelectedRoute(card: tCard) {
  return selectedRoute.value?.cards?.includes('*') || selectedRoute.value?.cards?.includes(card.id) || false;
}
</script>

<template>
  <section>
    <p>
      Click a row, column,
      <template v-if="hasDiagonals">diagonal, </template>
      or one of the pre-defined routes.
    </p>
    <nav>
      <a
        :class="['btn btn-wide', isRouteSelected(route) ? 'selected' : '']"
        href="#"
        v-for="route in navRoutes"
        :key="route.id"
        :title="route.name ?? route.button"
        @click="selectRoutes(route.id)"
      >
        {{ route.button }}
      </a>
    </nav>

    <div class="grid">
      <ChallengeCardComponent
        v-for="card in cards"
        :key="card.id"
        :challenge-id="challenge.id"
        :card="card"
        :selected="isCardInSelectedRoute(card)"
        @popup="popupCard"
      />
      <ChallengeButtonComponent
        v-for="route in buttonRoutes"
        :key="route.id"
        :route="route"
        :selected="isRouteSelected(route)"
        @click="selectRoutes(route.id)"
      />
    </div>

    <svg style="display: none">
      <symbol id="arrow" style="fill-rule: evenodd" viewBox="0 0 32 32">
        <path
          d="M16 2c7.727 0 14 6.273 14 14s-6.273 14-14 14S2 23.727 2 16 8.273 2 16 2m-3.451 5.016L18.838 16l-6.289 8.984a1.774 1.774 0 0 0 .435 2.467c.801.56 1.906.365 2.467-.435l7-10a1.77 1.77 0 0 0 0-2.032l-7-10a1.774 1.774 0 0 0-2.467-.435 1.774 1.774 0 0 0-.435 2.467"
        />
      </symbol>
    </svg>
  </section>

  <ModalComponent v-if="poppedCard" @unpop="unpopCard">
    <PoppedCardComponent :challenge-id="challenge.id" :card="poppedCard" />
  </ModalComponent>

  <MapItComponent v-if="selectedRoute" :dist="selectedRoute.dist" :url="selectedRoute.url" />
</template>

<style scoped>
p {
  font-size: 0.875rem;
  color: var(--gray);
}

nav {
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;

  .btn {
    padding: 0.25rem 0.5rem;
    &.selected {
      background-color: var(--secondary-light);
      color: var(--secondary-lightest);
    }
  }
  /*
  .btn:last-child {
    margin-left: auto;
  }
  */
}

.grid {
  display: grid;
  grid-template-columns: 1.5rem repeat(5, 1fr) 1.5rem;
  grid-template-rows: 1.5rem 1fr;
  grid-auto-rows: 1fr;
  gap: 0;
  background-color: var(--gray-lightest);
  grid-template-areas: v-bind(gridTemplateAreas);
  padding: 0.25rem;
  border-radius: var(--radius-md);
}
</style>
