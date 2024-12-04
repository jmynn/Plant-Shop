<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue';
import AdSection from '@/components/AdSection.vue';
import MainSection from '@/components/MainSection.vue';
import PlantsSection from '@/components/PlantsSection.vue';
</script>

<template>
  <MainSection />
  <div class="content">
    <AboutSection />
    <PlantsSection />
    <AdSection />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 80px;
}
</style>
