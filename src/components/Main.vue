<script setup lang="ts">
import { MAIN_CARDS } from '@/data';
import type { TypeMainCard, TypeReadonly } from '@/types';
import { reactive, ref, watchEffect } from 'vue';
import MainButtonCards from './MainButtonCards.vue';
import MainCard from './MainCard.vue';

const cards = reactive<TypeReadonly<TypeMainCard, 'array'>>(MAIN_CARDS);
const initialPosition = ref<number>(1);

// OK
// const isVisiblePrev = computed<boolean>(() => initialPosition.value !== 0)
// const isVisibleNext = computed<boolean>(() => initialPosition.value !== cards.length - 1);
// const isVisible = reactive({
//   prev: isVisiblePrev,
//   next: isVisibleNext
// });

const isVisible = reactive({
  prev: false,
  next: true
});
const prevTitle = ref<string>('');
const nextTitle = ref<string>('');

const handlePrev = () => {
  if (initialPosition.value - 1 < 0) return;
  initialPosition.value -= 1;
};
const handleNext = () => {
  if (initialPosition.value + 1 > cards.length - 1) return;
  initialPosition.value += 1;
};

// OK
watchEffect(() => {
  const value = initialPosition.value;
  isVisible.prev = value !== 0;
  isVisible.next = value !== cards.length - 1;

  nextTitle.value = value + 1 > cards.length - 1 ? '' : cards[value + 1].title;
  prevTitle.value = value - 1 < 0 ? '' : cards[value - 1].title;
});
</script>

<template>
  <main class="main">
    <MainCard
      :image="cards[initialPosition].image"
      :text="cards[initialPosition].text"
      :title="cards[initialPosition].title"
    >
      <div class="buttons">
        <MainButtonCards v-show="isVisible.prev" @click="handlePrev" direction="left">{{
          prevTitle
        }}</MainButtonCards>
        <MainButtonCards v-show="isVisible.next" @click="handleNext" direction="right">{{
          nextTitle
        }}</MainButtonCards>
      </div>
    </MainCard>
  </main>
</template>

<style scoped>
.main {
  width: 100vw;
  translate: var(--container-undo) 0;
}

.buttons {
  display: flex;
  align-items: stretch;
}
</style>
