<script setup lang="ts"></script>

<template>
  <div class="wrapper"><slot /></div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  width: inherit;
}
</style>
