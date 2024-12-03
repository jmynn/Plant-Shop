<script setup lang="ts">
import About from '@/components/About.vue';
import Main from '@/components/Main.vue';
</script>

<template>
  <Main />
  <div class="content">
    <About />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 80px;
}
</style>
