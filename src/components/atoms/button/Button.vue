<template>
  <Motion
    tag="button"
    :class="classes"
    :disabled="disabled || loading"
    :while-hover="hoverState"
    :while-tap="tapState"
    v-bind="attrs"
  >
    <span v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <svg
        class="h-5 w-5 animate-spin text-[color:var(--text)]/70"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          class="opacity-20"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="3"
          fill="none"
        />
        <path
          d="M22 12a10 10 0 0 1-10 10"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          fill="none"
        />
      </svg>
    </span>

    <span class="flex w-full items-center justify-center gap-2" :class="contentOpacity">
      <Icon
        v-if="icon && !loading"
        :icon="icon"
        class="h-5 w-5"
        aria-hidden="true"
      />
      <slot />
    </span>
  </Motion>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'AuraButton',
})
import { computed, useAttrs, type PropType } from 'vue'
import { Motion } from '@motionone/vue'
import { Icon, type IconifyIcon } from '@iconify/vue'

import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'ghost' | 'subtle' | 'pill'
type ButtonSize = 'sm' | 'md' | 'lg'
type AuraIcon = IconifyIcon | string

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
  },
  block: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: [Object, String] as PropType<AuraIcon>,
    default: undefined,
  },
})

const attrs = useAttrs()

const base =
  'relative inline-flex select-none items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)] will-change-transform'

const sizeClass: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--gradient-accent)] text-[color:var(--text)] shadow-[var(--shadow-neo-accent)] hover:shadow-[var(--shadow-glow)] focus-visible:shadow-[var(--shadow-glow)]',
  ghost:
    'border border-white/10 bg-transparent text-[color:var(--text)] backdrop-blur-[var(--blur)] hover:border-white/20 hover:bg-white/8',
  subtle:
    'bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)] text-[color:var(--text)]/90 shadow-[var(--shadow-neo)] hover:shadow-[var(--shadow-neo-accent)]',
  pill:
    'bg-[var(--gradient-accent-soft)] text-[color:var(--text)]/95 shadow-[var(--shadow-neo)] hover:shadow-[var(--shadow-neo-accent)]',
}

const classes = computed(() =>
  cn(base, sizeClass[props.size], variantClass[props.variant], {
    'w-full': props.block,
    'opacity-60 pointer-events-none': props.disabled || props.loading,
  })
)

const contentOpacity = computed(() => (props.loading ? 'opacity-0' : 'opacity-100'))

const hoverState = computed(() => (props.disabled || props.loading ? undefined : { scale: 1.02 }))
const tapState = computed(() => (props.disabled || props.loading ? undefined : { scale: 0.97 }))
</script>
