<script setup lang="ts">
interface Props {
  width?: string;
  closeText?: string;
}
const props = withDefaults(defineProps<Props>(), {
  width: '30rem',
  closeText: 'Close',
});

const modalWidth = props.width;

const emit = defineEmits<{
  unpop: [];
}>();
</script>

<template>
  <aside class="modal">
    <div class="slot">
      <slot></slot>
    </div>
    <div class="close">
      <a class="btn btn-primary" @click="emit('unpop')">{{ props.closeText }}</a>
    </div>
  </aside>
  <div class="modal-bg" @click="emit('unpop')"></div>
</template>

<style scoped>
.modal-bg,
aside {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.modal-bg {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: var(--color-modal-background);
  z-index: 1;
}

aside {
  margin: 1rem auto;
  width: v-bind(modalWidth);
  max-width: calc(100% - 2rem);
  max-height: calc(100% - 2rem);
  background-color: var(--gray-lightest);
  border-radius: var(--radius-lg);
  overflow: hidden scroll;
  display: flex;
  flex-direction: column;
  place-self: center;
  z-index: 100;
  box-shadow: 0 0 1rem var(--color-modal-background);
  animation: pop-in 0.5s;
}

.slot {
  flex-grow: 1;
}
.close {
  margin: 1rem;
  flex-grow: 0;
  text-align: right;
}

@media (min-width: 768px) {
  .close {
    margin: 2rem;
  }
}
</style>
