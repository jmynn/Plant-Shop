<script setup lang="ts">
type Props = {
  condition: boolean;
};

const { condition } = defineProps<Props>();
</script>

<template>
  <div class="empty" v-if="!condition">Empty!</div>
</template>

<style scoped>
.empty {
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-brown);
  font-size: 16px;
}
</style>
