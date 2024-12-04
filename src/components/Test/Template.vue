<script setup lang="ts">
type Props = {
  title: string;
};
const { title } = defineProps<Props>();
</script>

<template>
  <div class="info">
    <h2 class="title">{{ title }}</h2>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-weight: 700;
}
</style>
