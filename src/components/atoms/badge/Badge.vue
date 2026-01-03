<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'AuraBadge',
})
import { computed, type PropType } from 'vue'

import { cn } from '@/utils/cn'

type BadgeTone = 'default' | 'accent' | 'muted'

const props = defineProps({
  tone: {
    type: String as PropType<BadgeTone>,
    default: 'default',
  },
})

const toneClass: Record<BadgeTone, string> = {
  default:
    'bg-white/5 text-[color:var(--text)]/90 shadow-[var(--shadow-neo)] border border-white/5',
  accent:
    'bg-[var(--gradient-accent-soft)] text-[color:var(--text)] shadow-[var(--shadow-neo-accent)]',
  muted: 'bg-white/5 text-[color:var(--muted)] border border-white/10',
}

const classes = computed(() =>
  cn(
    'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs uppercase tracking-wide',
    toneClass[props.tone]
  )
)
</script>
