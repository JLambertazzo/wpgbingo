<script setup lang="ts">
import type { tRoute } from '@/types';
import { computed } from 'vue';

const props = defineProps<{
  route: tRoute;
  selected: boolean;
}>();

const route = props.route;
const gridArea = `b${route.id}`;

const iconRotation = computed((): string => {
  if (route.id === 'd1') {
    return '45deg';
  }
  if (route.id === 'd2') {
    return '135deg';
  }
  if (route.id.startsWith('c')) {
    return '90deg';
  }
  return '0';
});
</script>

<template>
  <div :class="['grid-button', selected ? 'selected' : '']">
    <a>
      <svg>
        <use xlink:href="#arrow"></use>
      </svg>
    </a>
  </div>
</template>

<style scoped>
.grid-button {
  grid-area: v-bind(gridArea);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 0;
  }

  svg {
    margin: 0.25rem;
    width: 1rem;
    height: 1rem;
    transform: rotate(v-bind(iconRotation));
    fill: var(--gray-light);
  }

  &:hover {
    background-color: var(--gray-light);
    border-radius: var(--radius-sm);
    svg {
      fill: var(--gray-lighter);
    }
  }

  &.selected {
    background-color: var(--secondary-light);
    border-radius: 0;
    svg {
      fill: var(--secondary-lighter);
    }
  }
}
</style>
