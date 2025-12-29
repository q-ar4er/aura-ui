<template>
  <div class="space-y-2">
    <div class="flex items-center justify-between text-xs text-[color:var(--muted)]">
      <span v-if="label">{{ label }}</span>
      <span>{{ percentage }}%</span>
    </div>
    <div class="h-2 w-full overflow-hidden rounded-full bg-white/5 shadow-[var(--shadow-neo-inset)]">
      <div
        class="h-full rounded-full bg-[var(--gradient-accent)]"
        :style="{ width: `${percentage}%` }"
      ></div>
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
  label: {
    type: String,
    default: '',
  },
})

const percentage = computed(() => Math.min(100, Math.max(0, Math.round(props.value * 100))))
</script>
