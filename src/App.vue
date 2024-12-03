<script setup lang="ts">
import { RouterView } from 'vue-router';
import Container from './components/Container.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Wrapper from './components/Wrapper.vue';
</script>

<template>
  <Container>
    <Wrapper>
      <Header />
      <Content>
        <RouterView />
      </Content>
      <Footer />
    </Wrapper>
  </Container>
</template>

<style scoped></style>
