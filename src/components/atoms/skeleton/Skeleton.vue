<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    height?: string
    width?: string
    rounded?: boolean
  }>(),
  {
    height: '1rem',
    width: '100%',
    rounded: false,
  },
)

const style = computed(() => ({
  height: props.height,
  width: props.width,
  borderRadius: props.rounded ? '9999px' : 'calc(var(--radius-active) - 12px)',
}))
</script>

<template>
  <div class="aura-skeleton" :style="style" />
</template>

<style scoped>
.aura-skeleton {
  background: linear-gradient(
    120deg,
    rgba(148, 163, 184, 0.12) 25%,
    rgba(148, 163, 184, 0.18) 37%,
    rgba(148, 163, 184, 0.12) 63%
  );
  background-size: 400% 100%;
  animation: aura-shimmer 1.4s ease-in-out infinite;
}

@keyframes aura-shimmer {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
