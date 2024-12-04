<script setup lang="ts">
import { AD_SECTION_PICS } from '@/data';
</script>

<template>
  <section class="ad">
    <div class="left">
      <div class="info">
        <div class="title">{{ 'Buy more plants, it\n helps you to be relaxed' }}</div>
        <div class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam.
          Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus
          dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.
        </div>
      </div>
      <div class="image">
        <img :src="AD_SECTION_PICS.small" alt="Advertisement Image" />
      </div>
    </div>
    <div class="right">
      <div class="image">
        <img :src="AD_SECTION_PICS.big" alt="Advertisement Image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.ad {
  display: flex;
  align-items: stretch;
  gap: 85px;
}
.left {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1 1 auto;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: var(--line-height);
  color: var(--color-brown);
  white-space: pre-line;
}
.text {
  line-height: 170%;
  color: var(--color-brown);
}

.right {
  flex: 0 0 40.08%;
}
</style>
