<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Logo from './icons/Logo.vue';
import { PATHS } from '../data';
import IconCart from './icons/IconCart.vue';
import IconSearch from './icons/IconSearch.vue';
import Container from './Container.vue';
</script>

<template>
  <header class="header">
    <Container>
      <RouterLink :to="PATHS.HOME" class="logo _hover">
        <Logo />
      </RouterLink>
      <nav class="nav">
        <RouterLink to="/" class="_hover"><IconSearch /></RouterLink>
        <RouterLink to="/" class="_hover"><IconCart /></RouterLink>
        <RouterLink to="/" class="signUp _hover">Sign Up</RouterLink>
        <RouterLink to="/" class="signIn _hover">Sign In</RouterLink>
      </nav>
    </Container>
  </header>
</template>

<style scoped>
.header {
  background-color: transparent;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  & > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.nav {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px 0;
}
.signUp,
.signIn {
  font-weight: 500;
  line-height: var(--line-height);
}
.signUp {
  color: var(--color-primary);
}
.signIn {
  display: block;
  color: var(--color-white);
  background-color: var(--color-primary);
  padding: 8px 30px;
}
</style>
