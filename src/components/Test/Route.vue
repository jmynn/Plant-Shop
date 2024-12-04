<script setup lang="ts">
import { useRoute } from 'vue-router';
import Template from './Template.vue';
const route = useRoute();
</script>

<template>
  <Template title="useRoute">
    <div>fullPath - {{ route.fullPath }}</div>
    <div>hash - {{ route.hash }}</div>
    <div>name - {{ route.name }}</div>
    <div>params - {{ route.params }}</div>
    <div>path - {{ route.path }}</div>
    <div>query - {{ route.query }}</div>
    <div>redirectedFrom - {{ route.redirectedFrom }}</div>
  </Template>
</template>

<style scoped></style>
