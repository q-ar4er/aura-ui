<template>
  <Motion
    tag="button"
    :class="classes"
    :while-hover="hoverState"
    :while-tap="tapState"
    :disabled="disabled"
    v-bind="attrs"
  >
    <Icon :icon="icon" class="h-5 w-5" aria-hidden="true" />
    <slot name="overlay" />
    <span class="sr-only">
      <slot />
    </span>
  </Motion>
</template>

<script lang="ts" setup>
import { computed, useAttrs, type PropType } from 'vue'
import { Motion } from '@motionone/vue'
import { Icon, type IconifyIcon } from '@iconify/vue'

import { cn } from '@/utils/cn'

type AuraIcon = IconifyIcon | string

const props = defineProps({
  icon: {
    type: [Object, String] as PropType<AuraIcon>,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const attrs = useAttrs()

const classes = computed(() =>
  cn(
    'relative flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)] text-[color:var(--text)] shadow-[var(--shadow-neo)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)] hover:shadow-[var(--shadow-neo-accent)]',
    {
      'opacity-40 pointer-events-none': props.disabled,
    }
  )
)

const hoverState = computed(() => (props.disabled ? undefined : { scale: 1.08 }))
const tapState = computed(() => (props.disabled ? undefined : { scale: 0.94 }))
</script>
