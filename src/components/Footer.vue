<script setup lang="ts">
import FooterFeedback from './FooterFeedback.vue';
import FooterLinks from './FooterLinks.vue';
</script>

<template>
  <footer class="footer">
    <div class="info">
      <h4 class="title">plantku</h4>
      <div class="address">
        <span>Plantku House</span>
        <p>
          Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa
          Yogyakarta 55282
        </p>
      </div>
    </div>
    <FooterLinks />
    <FooterFeedback />
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: stretch;
  gap: 80px;
  padding: 60px 100px;
  & > * {
    flex: 0 0 calc(33.333% - 53px);
  }
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    left: var(--container-undo);
    top: 0;
    height: 1px;
    background-color: var(--color-primary);
    opacity: 0.3;
  }
}
.info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.title {
  font-size: 24px;
  line-height: 1;
  font-weight: 500;
  color: var(--color-primary);
  text-transform: uppercase;
}
.address {
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-weight: 500;
    color: #333333;
  }
  p {
    font-size: var(--fz-text-medium);
    line-height: var(--line-height);
    color: #4f4f4f;
  }
}
</style>
