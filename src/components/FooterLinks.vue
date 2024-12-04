<script setup lang="ts">
import { FOOTER_LINKS } from '@/data';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="links">
    <div class="column" v-for="({ title, links }, i) in FOOTER_LINKS" :key="`${i}_${title}`">
      <h5 class="title">{{ title }}</h5>
      <div class="body">
        <RouterLink
          :to="path"
          class="link"
          v-for="({ label, path }, i) of links"
          :key="`${i}_${path}`"
          >{{ label }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  align-items: stretch;
  gap: 80px;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.body {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.title {
  font-weight: 500;
  line-height: 1;
}
.link {
  font-size: var(--fz-text-medium);
  line-height: var(--line-height);
  color: var(--color-blavk);
}
</style>
