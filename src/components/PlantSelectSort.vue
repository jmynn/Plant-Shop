<script setup lang="ts">
import type { TypeReadonly, TypeSortPlants } from '@/types';

type TypeOption = {
  value: TypeSortPlants;
  label: string;
};
type Emits = {
  changeOption: [sort: TypeSortPlants];
};
defineEmits<Emits>();

const options = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Cheaper First',
    value: 'cheaper'
  },
  {
    label: 'Expensive First',
    value: 'expensive'
  }
] as TypeReadonly<TypeOption, 'array'>;
</script>

<template>
  <select
    class="menu"
    @change="$emit('changeOption', ($event.target as HTMLSelectElement).value as TypeSortPlants)"
  >
    <template v-for="option in options" :key="option.value">
      <option :value="option.value" :selected="option.value === 'all'">
        {{ option.label }}
      </option>
    </template>
  </select>
</template>

<style scoped>
.menu {
  border: 1px solid var(--color-light-gray);
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 500;
}
</style>
