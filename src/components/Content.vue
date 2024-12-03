<script setup lang="ts"></script>

<template>
  <div class="content"><slot /></div>
</template>

<style scoped>
.content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: inherit;
}
</style>
