<script setup lang="ts">
import Route from '@/components/Test/Route.vue';
import { PATHS } from '@/data';
</script>

<template>
  <div class="test">
    <h1>This is a Test page</h1>
    <Route />
    <div class="body">
      <div class="links">
        <RouterLink :to="PATHS.TEST">test</RouterLink>
        <RouterLink :to="PATHS.TEST_NESTED">test nested</RouterLink>
        <RouterLink to="/test/1975/nested">test ID nested</RouterLink>
        <RouterLink :to="PATHS.TEST_NONEXISTENT">test nonexistent</RouterLink>
        <RouterLink :to="PATHS.PARENT">parent</RouterLink>
        <RouterLink :to="PATHS.PARENT_NESTED">parent nested</RouterLink>
        <RouterLink :to="{ name: 'nested id', params: { id: 1975 } }"
          >to name 1975 route</RouterLink
        >
        <RouterLink :to="{ name: 'nested' }">to name nested route</RouterLink>
      </div>
      <RouterView />
      <RouterView name="secondView" />
    </div>
  </div>
</template>

<style scoped>
.test {
  margin: auto 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100% - 120px);

  & * {
    color: var(--color-brown);
    line-height: var(--line-height);
  }

  h1 {
    font-size: var(--fz-headline-2);
    font-weight: 700;
  }
}

.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
}

.links {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  & > a {
    text-decoration: underline;
  }
}
</style>
