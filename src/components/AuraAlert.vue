<template>
  <div
    :class="[
      'rounded-[calc(var(--radius-active)_-_12px)] border px-4 py-3 text-sm',
      toneClasses,
    ]"
    :role="role"
    :aria-live="ariaLive || undefined"
    data-test="aura-alert"
  >
    <p
      v-if="title"
      class="mb-1 text-xs font-semibold uppercase tracking-[0.18em] opacity-90"
      data-test="aura-alert-title"
    >
      {{ title }}
    </p>

    <div class="leading-5" data-test="aura-alert-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    tone?: 'error' | 'success' | 'info'
    title?: string
    role?: 'alert' | 'status'
    ariaLive?: 'polite' | 'assertive' | 'off' | ''
  }>(),
  {
    tone: 'info',
    role: 'alert',
    ariaLive: '',
  },
)

const toneClasses = computed(() => {
  switch (props.tone) {
    case 'success':
      return 'border-emerald-500/35 bg-emerald-500/10 text-emerald-100'
    case 'error':
      return 'border-red-500/40 bg-red-500/10 text-red-200'
    case 'info':
    default:
      return 'border-white/10 bg-white/5 text-[color:var(--text)]'
  }
})

const title = computed(() => props.title)
const role = computed(() => props.role)
const ariaLive = computed(() => props.ariaLive)
</script>
