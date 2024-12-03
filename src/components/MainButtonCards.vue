<script setup lang="ts">
import type { TypeDirection } from '@/types';
import IconArrow from './icons/IconArrow.vue';
import { computed } from 'vue';

type Props = {
  direction: TypeDirection;
  onClick: () => void;
};

const { direction, onClick } = defineProps<Props>();

const buttonDirection = computed(() => (direction === 'left' ? 'Prev' : 'Next'));
</script>

<template>
  <button class="_hover" :class="direction" @click="onClick">
    <div class="body">
      <div class="direction">
        <IconArrow :direction="direction" />
        {{ buttonDirection }}
      </div>
      <span><slot /></span>
    </div>
  </button>
</template>

<style scoped>
button {
  flex: 0 0 50%;
  padding: 40px;
  font-weight: 500;
  user-select: none;
}
.direction {
  font-size: 24px;
  line-height: var(--line-height);
  display: flex;
  align-items: center;
  gap: 10px;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}
.body span {
  font-size: var(--fz-text-large);
  text-wrap: balance;
  line-height: 1;
  text-align: start;
}

.left {
  background-color: var(--color-white);
  margin: 0 auto 0 0;
  span {
    color: var(--color-primary);
  }
  .direction {
    color: #333333;
  }
}

.right {
  background-color: var(--color-primary);
  margin: 0 0 0 auto;
  span {
    color: var(--color-white);
  }
  .direction {
    color: #f2f2f2;
    svg {
      order: 2;
    }
  }
}
</style>
