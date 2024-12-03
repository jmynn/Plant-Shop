<script setup lang="ts">
import { ABOUT_CARDS } from '@/data';
import AboutItem from './AboutItem.vue';
</script>

<template>
  <section class="about">
    <AboutItem v-for="(item, i) in ABOUT_CARDS" :key="i" v-bind="item" />
  </section>
</template>

<style scoped>
.about {
  --gap: 30px;
  display: flex;
  align-items: stretch;
  gap: var(--gap);

  & > * {
    flex: 0 0 calc(25% - (var(--gap) * 3 / 4));
  }
}
</style>
