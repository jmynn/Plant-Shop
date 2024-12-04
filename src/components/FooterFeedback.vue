<script setup lang="ts">
const handleSubmit = () => console.log('Submitted!');
</script>

<template>
  <form @submit.prevent="handleSubmit" class="feedback">
    <div class="title">Berlangganan Email Kami</div>
    <input type="email" name="email" placeholder="Masukan Alamat Email" />
    <button type="submit" class="_hover">Submit</button>
  </form>
</template>

<style scoped>
.feedback {
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  gap: 15px;

  input {
    font-size: 12px;
    line-height: var(--line-height);
    width: 100%;

    &::placeholder {
      color: color-mix(in srgb, var(--color-black), transparent 50%);
    }

    padding: 8px 13px;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
  }

  button {
    background-color: var(--color-primary);
    border-radius: 2px;
    font-weight: 500;
    font-size: 12px;
    color: var(--color-white);
    padding: 4px 12px;
    display: inline-block;
    line-height: var(--line-height);
  }
}

.title {
  font-weight: 500;
  line-height: 1;
}
</style>
