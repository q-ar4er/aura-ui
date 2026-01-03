<template>
  <Motion
    tag="button"
    :class="classes"
    :disabled="disabled"
    :while-hover="hoverState"
    :while-tap="tapState"
    v-bind="attrs"
  >
    <slot />
  </Motion>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'AuraSurfaceButton',
})

import { computed, useAttrs } from 'vue'
import { Motion } from '@motionone/vue'

import { cn } from '@/utils/cn'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})

const attrs = useAttrs()

const classes = computed(() =>
  cn(
    'relative inline-flex select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)]',
    {
      'opacity-60 pointer-events-none': props.disabled,
    },
  ),
)

const hoverState = computed(() => (props.disabled ? undefined : { scale: 1.01 }))
const tapState = computed(() => (props.disabled ? undefined : { scale: 0.99 }))
</script>
