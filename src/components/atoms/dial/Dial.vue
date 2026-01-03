<script setup lang="ts">
import AuraProgressRadial from '@/components/atoms/progress/ProgressRadial.vue'

const props = withDefaults(
  defineProps<{
    /** Progress ratio in range [0..1]. */
    value: number
    /** Visual size of the dial. */
    size?: 'sm' | 'md' | 'lg'
    /** Show percentage label inside the dial. */
    showLabel?: boolean
  }>(),
  {
    size: 'sm',
    showLabel: false,
  },
)
</script>

<template>
  <AuraProgressRadial :value="value" :size="size" :show-label="showLabel" />
</template>
