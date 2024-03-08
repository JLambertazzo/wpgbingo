<script setup lang="ts">
import { challenges } from '@/data/challenges';
import { wallOfFame } from '@/data/wall';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Wall of Fame',
});

const challengeNames = new Map(
  challenges.map((e) => {
    return [e.id, e.name];
  }),
);
</script>

<template>
  <main>
    <h1>Wall of Fame</h1>

    <h2>The Best Players of the Game</h2>
    <p>
      Want to be on the wall of fame? Complete the hardcore route on any of the challenges, and send your
      name, date of completion, link to a map tracking your ride (eg. Strava), and a picture of you on the
      ride to
      <a href="email:chuckycanuck@gmail.com">Steve Lambert - chuckycanuck@gmail.com</a>.
    </p>

    <div class="wall-grid">
      <template v-for="(wall, ckey) in wallOfFame" :key="ckey">
        <h3>{{ challengeNames.get(ckey) }} Challenge</h3>
        <div v-for="(wallCard, wkey) in wall" :key="wkey" class="wall-card">
          <figure>
            <img
              :src="`/images-sm/wall/${wallCard.img}`"
              :alt="`picture of ${wallCard.name}`"
              :title="`${wallCard.name} completed the ${challengeNames.get(ckey)} Challenge on ${wallCard.date}`"
              width="240"
              height="240"
              loading="eager"
            />
            <figcaption>{{ wallCard.name }}</figcaption>
          </figure>
          <div class="details">
            <span>{{ wallCard.date }}</span>
            <a class="btn btn-sm" :href="wallCard.url" target="_blank">map</a>
          </div>
        </div>
        <div class="wall-card cby">
          <i>＊</i>
          <div>This could be you!</div>
        </div>
      </template>
    </div>

    <h2>Super Hardcore Challenge</h2>
    <p>
      Want an extra challenge? Try our secret hardcore challenge: complete both the easier and harder versions
      of our hardcore challenge in the same bike ride.
    </p>
    <ul>
      <li>
        Super-Hardcore Challenge
        <a class="btn btn-sm" href="https://bit.ly/wpg-bingo-double-hardcore-map" target="_blank">map</a>
        <a class="btn btn-sm" href="/gpx/WPGBingo-super-hardcore-easier-harder.gpx" target="_blank">gpx</a>
      </li>
    </ul>
  </main>
</template>

<style>
.wall-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-template-rows: auto;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: var(--radius-md);
  background-color: var(--gray-lightest);
}
h3 {
  grid-column-start: 1;
  grid-column-end: -1;
  height: auto;
}
.wall-card {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  min-height: 13rem;
  box-shadow: var(--shadow-light);

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    border-radius: var(--radius-sm);
    object-fit: cover;
  }
  figcaption {
    line-height: 1.2;
    margin: 0.5rem 0;
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    font-size: 0.75rem;
    color: var(--gray);
  }

  &.cby {
    color: var(--gray-light);
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1.2;
    font-size: 0.875rem;

    i {
      font-style: normal;
      display: block;
      width: 2rem;
      height: 2rem;
      background-color: var(--gray-light);
      color: var(--gray-lightest);
      font-size: 2rem;
      line-height: 1;
      font-weight: var(--weight-black);
      border-radius: 100%;
      margin-bottom: 1rem;
      text-align: center;
    }
  }
}
</style>
