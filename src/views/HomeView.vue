<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { challenges } from '@/data/challenges';
import ModalComponent from '@/components/ModalComponent.vue';
import PoppedWarningComponent from '@/components/PoppedWarningComponent.vue';
import { onBeforeMount, ref } from 'vue';

// can change all this to use Pinia store if/when there are new persistent features
const seenWarning = ref(false);
const sessionKey = 'wpgbingo-warning';

function closeWarning() {
  sessionStorage.setItem(sessionKey, 'true');
  seenWarning.value = true;
}

onBeforeMount(() => {
  if (sessionStorage.getItem(sessionKey)) {
    seenWarning.value = true;
  }
});
</script>

<template>
  <main>
    <section class="welcome">
      <h1>
        <div class="surtitle">Welcome to</div>
        Winnipeg Bike Bingo!
      </h1>
      <nav class="challenges">
        <template v-for="(item, key) in challenges" :key="key">
          <RouterLink :to="{ name: 'challenge', params: { id: key } }" class="btn btn-primary">
            {{ item.name }}
          </RouterLink>
        </template>
      </nav>
    </section>
    <section class="map">
      <img
        src="/images/map.jpg"
        width="636"
        height="792"
        alt="map of The Forks"
        loading="eager"
        title="map of The Forks"
      />
    </section>
    <nav class="header">
      <RouterLink :to="{ name: 'about' }" class="link-header">About</RouterLink>
      <RouterLink :to="{ name: 'wall-of-fame' }" class="link-header">Wall Of Fame</RouterLink>
    </nav>
  </main>

  <ModalComponent v-if="!seenWarning" :closeText="'I agree'" @unpop="closeWarning">
    <PoppedWarningComponent />
  </ModalComponent>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  max-width: initial;
  margin: 0;

  padding: 0;
  display: flex;
  flex-direction: column;
}

section {
  width: 100%;
}
nav {
  display: flex;
}

.welcome {
  align-self: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  font-size: 3rem;
  line-height: 3rem;
  color: var(--color-heading);

  .surtitle {
    font-size: 2rem;
    color: var(--color-heading-muted);
  }
}

nav.challenges {
  padding: 1rem 0;
  gap: 0.5rem;
  flex-flow: wrap;
}

nav.header {
  order: -1;
  gap: 2rem;
  padding: 1rem 2rem;
  justify-content: flex-end;
}

.map {
  flex-grow: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (min-width: 768px) {
  main {
    display: grid;
    grid-template-columns: minmax(25rem, 40%) 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header map'
      'welcome map';
  }
  .welcome {
    grid-area: welcome;
  }
  .map {
    grid-area: map;
  }
  .header {
    grid-area: header;
  }
}
</style>
