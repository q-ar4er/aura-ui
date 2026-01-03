<template>
  <div :class="['relative flex items-center justify-center', sizeClass]">
    <svg class="h-full w-full" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--accent)" />
          <stop offset="100%" stop-color="var(--accent-2)" />
        </linearGradient>
      </defs>
      <circle
        class="opacity-30"
        cx="60"
        cy="60"
        r="54"
        stroke="var(--accent)"
        stroke-width="10"
        fill="none"
      />
      <circle
        :stroke="`url(#${gradientId})`"
        cx="60"
        cy="60"
        r="54"
        stroke-width="10"
        stroke-linecap="round"
        fill="none"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        transform="rotate(-90 60 60)"
      />
    </svg>
    <div v-if="showLabel" class="absolute text-center">
      <slot :value="percentage">{{ percentage }}%</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
  },
  showLabel: {
    type: Boolean,
    default: true,
  },
  gradientId: {
    type: String,
    default: 'progress-radial',
  },
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-12 w-12'
    case 'lg':
      return 'h-32 w-32'
    default:
      return 'h-24 w-24'
  }
})

const circumference = 2 * Math.PI * 54

const clampedValue = computed(() => Math.min(1, Math.max(0, props.value)))
const percentage = computed(() => Math.round(clampedValue.value * 100))
const dashOffset = computed(() => circumference * (1 - clampedValue.value))
</script>
