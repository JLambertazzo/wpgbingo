<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import type { tChallengeId } from '@/types';
import { challenges } from '@/data/challenges';
import ModalComponent from '@/components/ModalComponent.vue';
import PoppedHardcoreMapComponent from '@/components/PoppedHardcoreMapComponent.vue';

useHead({
  title: 'About',
});

const poppedChallenge = ref(undefined as tChallengeId | undefined);

function popChallenge(challenge: tChallengeId) {
  poppedChallenge.value = challenge;
}
function unpopChallenge() {
  poppedChallenge.value = undefined;
}
</script>

<template>
  <main>
    <h1>About Winnipeg Bicycle Bingo</h1>
    <p>
      Welcome to this web site, where we hope to show you that there are ways to explore Winnipeg on bicycle
      via trails, separated paths and speed-reduced residential streets (although there are some areas where
      the cycling infrastructure leaves a lot to be desired).
    </p>
    <p>
      There are three bingo cards: an
      <RouterLink :to="{ name: 'challenge', params: { id: 'easier' } }">easier</RouterLink> one that features
      more protected infrastructure and direct travel, a
      <RouterLink :to="{ name: 'challenge', params: { id: 'harder' } }">harder</RouterLink> one that is more
      on-road and has some hard-to-find spots, and a
      <RouterLink :to="{ name: 'challenge', params: { id: 'history' } }">historical tour</RouterLink>
      bringing you to historically significant places in Winnipeg.
    </p>
    <p>
      Each bingo card has 25 or more landmarks. You can click on buttons to be shown a row, column or loop of
      landmarks, which will be highlighted. Click until you find one you like. Some are relatively short
      (15-20 km) lines of five landmarks. Others are longer.
    </p>
    <p>
      Once you decide on a row, column, or loop, you can click on the “Map it” button and a suggested route
      will pop up, showing you one potential way to reach all of the selected landmarks.
    </p>
    <p>
      There is also a “hardcore” challenge which requires you to visit all landmarks on the bingo card in one
      day. If you do that and can provide evidence via a publicly available tracker (such as Strava), you can
      be added to our <RouterLink :to="{ name: 'wall-of-fame' }">Wall of Fame</RouterLink>. See the full map
      for our hardcore challenges below, and download some helpful .gpx files to keep you on track during your
      ride:
    </p>
    <ul>
      <li v-for="(challenge, key) in challenges" :key="key">
        {{ challenge.name }} Hardcore Challenge:
        <a class="btn btn-sm" @click="popChallenge(challenge.id)">map</a>
        <a class="btn btn-sm" :href="`/gpx/WPGBingo-hardcore-${challenge.id}.gpx`">gpx</a>
      </li>
    </ul>
    <p>
      If you have enabled location tracking on your phone, you should be able to see your location compared to
      the map you are given as you go. This is especially helpful in some areas of the city where our routes
      go through a complex web of residential streets or twisty park paths.
    </p>
    <p><strong>Good luck and safe travels!</strong></p>
    <p>
      <a class="btn btn-primary back" @click="$router.back()">Go Back</a>
    </p>
    <ModalComponent v-if="poppedChallenge" @unpop="unpopChallenge" :width="'45rem'">
      <PoppedHardcoreMapComponent :challenge-id="poppedChallenge" />
    </ModalComponent>
  </main>
</template>

<style scoped>
a.back {
  margin-top: 1rem;
}
</style>
