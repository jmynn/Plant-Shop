<script setup lang="ts">
import type { TypePlantItem } from '@/types';
import EmptyItem from './EmptyItem.vue';

type Props = TypePlantItem;

const { title, cost, src } = defineProps<Props>();
</script>

<template>
  <div class="item">
    <div class="image">
      <img :src="src" alt="plant item pic" v-if="!!src" />
      <EmptyItem :condition="!!src" />
    </div>
    <div class="info">
      <h3 class="title">{{ title }}</h3>
      <div class="cost">{{ cost.literal }}</div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.image {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.cost {
  font-weight: 600;
}
</style>
