<script setup lang="ts">
import { PLANTS } from '@/data';
import PlantItem from './PlantItem.vue';
import PlantSelectSort from './PlantSelectSort.vue';
import { ref, watchEffect } from 'vue';
import type { TypeSortPlants } from '@/types';

const sortPlants = ref<TypeSortPlants>('all');
const plants = ref(PLANTS);
const handleChangeSort = (sort: TypeSortPlants): void => {
  sortPlants.value = sort;
};

watchEffect(() => {
  if (sortPlants.value === 'all') plants.value = PLANTS;
  const arr = [...plants.value];
  if (sortPlants.value === 'cheaper') {
    arr.sort((a, b) => (a.cost.value > b.cost.value ? 1 : -1));
  }
  if (sortPlants.value === 'expensive') {
    arr.sort((a, b) => (a.cost.value > b.cost.value ? -1 : 1));
  }
  plants.value = arr;
});
</script>

<template>
  <section class="plants">
    <div class="row">
      <h2 class="title">Featured Plants</h2>
      <PlantSelectSort @change-option="handleChangeSort" />
    </div>
    <div class="body">
      <PlantItem v-for="(plant, i) in plants" v-bind="plant" :key="i" />
    </div>
  </section>
</template>

<style scoped>
.plants {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.row {
  padding: 0 0 15px 0;
  border-bottom: 1px solid var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-weight: 500;
  font-size: var(--fz-headline-2);
}

.body {
  --gap: 20px;
  display: flex;
  align-items: stretch;
  gap: var(--gap);
  flex-wrap: wrap;

  & > * {
    flex: 0 0 calc(20% - (var(--gap) * 4) / 5);
  }
}
</style>
