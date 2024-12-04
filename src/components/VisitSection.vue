<script setup lang="ts">
import { PATHS, VISIT_PIC_PATH } from '@/data';
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="visit">
    <div class="info">
      <div class="title">Get your favourites plant on our shop now</div>
      <RouterLink :to="PATHS.ABOUT" class="link _hover">Visit Shop</RouterLink>
    </div>
    <div class="image">
      <img :src="VISIT_PIC_PATH" alt="visit section pic" />
    </div>
  </section>
</template>

<style scoped>
.visit {
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  gap: 30px;
  padding: 0 0 0 100px;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: var(--line-height);
  color: var(--color-brown);
}
.link {
  display: inline-block;
  padding: 10px 40px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: var(--fz-text-medium);
  line-height: var(--line-height);
}
</style>
