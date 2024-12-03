<script setup lang="ts">
import type { TypeAboutItem } from '@/types';
import { defineAsyncComponent } from 'vue';

type Props = TypeAboutItem;

const { icon, text, title } = defineProps<Props>();
const IconComponent = defineAsyncComponent(() => import(icon));
</script>

<template>
  <div class="item">
    <div class="row">
      <IconComponent />
      <div class="title">{{ title }}</div>
    </div>
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.item {
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 22px 16px;
  gap: 15px;
}
.row {
  display: flex;
  align-items: center;
  gap: 15px;
}
.title {
  line-height: var(--line-height);
  color: var(--color-primary);
  font-weight: 700;
  white-space: pre-line;
}
.text {
  font-size: var(--fz-text-small);
  line-height: var(--line-height);
  color: var(--color-brown);
}
</style>
