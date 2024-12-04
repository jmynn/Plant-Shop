<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue';
import AdSection from '@/components/AdSection.vue';
import MainSection from '@/components/MainSection.vue';
import PlantsSection from '@/components/PlantsSection.vue';
import VisitSection from '@/components/VisitSection.vue';
</script>

<template>
  <MainSection />
  <div class="content">
    <AboutSection />
    <PlantsSection />
    <AdSection />
    <VisitSection />
  </div>
</template>

<style scoped>
.content {
  --gap: 80px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  margin: 0 0 var(--gap) 0;
}
</style>
