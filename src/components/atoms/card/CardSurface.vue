<template>
  <section :class="classes">
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'

import { cn } from '@/utils/cn'

type CardTone = 'default' | 'accent' | 'translucent' | 'muted' | 'strong'

const props = defineProps({
  tone: {
    type: String as PropType<CardTone>,
    default: 'default',
  },
  padded: {
    type: Boolean,
    default: true,
  },
})

const toneClass: Record<CardTone, string> = {
  default:
    'bg-[color:var(--panel)]/95 shadow-[var(--shadow-neo)] text-[color:var(--text)]',
  accent: 'bg-[var(--gradient-accent-soft)] shadow-[var(--shadow-neo-accent)] text-[color:var(--text)]',
  translucent:
    'backdrop-blur-[var(--blur)] bg-white/5 border border-white/10 text-[color:var(--text)]',
  muted:
    'bg-[color:var(--panel)]/60 shadow-[var(--shadow-neo-soft)] text-[color:var(--text)]',
  strong:
    'bg-[color:var(--panel)] shadow-[var(--shadow-neo-strong)] text-[color:var(--text)]',
}

const classes = computed(() =>
  cn(
    'rounded-[var(--radius-active)] transition-shadow',
    toneClass[props.tone],
    props.padded ? 'p-6' : ''
  )
)
</script>
