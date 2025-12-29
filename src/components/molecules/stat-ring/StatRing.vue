<template>
  <div
    class="group flex flex-col items-center gap-4 rounded-[calc(var(--radius-active)_-_10px)] border border-white/5 bg-[color:color-mix(in_srgb,var(--panel)_90%,transparent)]/85 p-5 text-center shadow-[var(--shadow-neo)] transition-transform duration-200 hover:-translate-y-0.5"
  >
    <NeoProgressRadial :value="value" :gradient-id="gradientId">
      <template #default="slotProps">
        <span
          class="font-display font-semibold text-[color:var(--text)]"
          style="font-size: calc(2.05rem * var(--font-scale));"
        >
          {{ slotProps.value }}%
        </span>
      </template>
    </NeoProgressRadial>
    <div class="space-y-1">
      <p class="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]/80">{{ label }}</p>
      <p class="text-sm text-[color:var(--text)]/80">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { NeoProgressRadial } from '@/components/atoms'
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: 'stat-ring',
  },
})

const gradientId = computed(() => `${props.id}-gradient`)
</script>
