<script setup lang="ts"></script>

<template>
  <div class="container"><slot /></div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: var(--container);
  height: inherit;
}
</style>
