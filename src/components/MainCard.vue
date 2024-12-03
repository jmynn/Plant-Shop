<script setup lang="ts">
import type { TypeMainCard } from '@/types';

type Props = TypeMainCard;

const { image, text, title } = defineProps<Props>();
</script>

<template>
  <div class="card">
    <div class="image">
      <img :src="image" alt="main pic" v-if="image" />
      <div class="empty" v-if="!image">empty!</div>
    </div>
    <div class="body">
      <div class="info">
        <div>
          <h1 class="title">{{ title }}</h1>
          <div class="text">{{ text }}</div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: stretch;
  gap: 75px;
}
.image {
  flex: 0 0 47.5vw;
  aspect-ratio: 1 / 1.217;
  overflow: hidden;
  img {
    max-width: 100%;
  }
}
.body {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.info {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  div {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 0 calc(var(--container-undo) * -1) 0 0;
  }
}
.title {
  color: var(--color-primary);
  font-weight: 500;
  font-size: var(--fz-headline-1);
  line-height: var(--line-height);
}
.text {
  font-size: var(--fz-text-large);
  line-height: var(--line-height);
  color: var(--color-brown);
}
.empty {
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-brown);
  font-size: 32px;
}
</style>
