<script setup lang="ts"></script>

<template>
  <section>
    <div class="warning">!</div>
    <h1>Warning</h1>
    <p>
      I understand that cycling in Winnipeg includes areas where cyclists are not separated from traffic, that
      suggested routes may not reflect current conditions and that I am responsible for planning a route that
      suits current infrastructure and road conditions as well as my personal health and ability.
    </p>
  </section>
</template>

<style scoped>
section {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.warning {
  width: 4rem;
  height: 4rem;
  background-color: var(--secondary);
  color: var(--secondary-lightest);
  font-size: 4rem;
  line-height: 1;
  font-weight: var(--weight-black);
  border-radius: 100%;
  text-align: center;
}
h1 {
  margin: 1rem 0;
}
</style>
