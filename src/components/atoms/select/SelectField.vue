<template>
  <label class="block space-y-2">
    <span v-if="label" class="text-sm font-medium text-[color:var(--muted)]">{{ label }}</span>
    <div class="relative">
      <select
        v-bind="attrs"
        :value="modelValue"
        :class="selectClasses"
        :disabled="disabled"
        @change="onChange"
      >
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <span
        class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[color:var(--muted)]"
        aria-hidden="true"
      >
        ▾
      </span>
    </div>
    <p v-if="message" :class="messageClasses">{{ message }}</p>
  </label>
</template>

<script lang="ts" setup>
import { computed, type PropType, useAttrs } from 'vue'

import { cn } from '@/utils/cn'

interface SelectOption {
  value: string
  label: string
}

type SelectState = 'default' | 'error'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  state: {
    type: String as PropType<SelectState>,
    default: 'default',
  },
})

const attrs = useAttrs()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const baseClasses =
  'w-full appearance-none rounded-[var(--radius-active)] border bg-[color:var(--panel)]/80 px-4 py-3 text-sm text-[color:var(--text)] shadow-[var(--shadow-neo-inset)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]'

const stateClasses: Record<SelectState, string> = {
  default: 'border-white/10',
  error: 'border-red-500/60 text-red-200',
}

const selectClasses = computed(() =>
  cn(baseClasses, stateClasses[props.state], {
    'opacity-60 cursor-not-allowed': props.disabled,
  })
)

const messageClasses = computed(() =>
  cn('text-xs', {
    'text-[color:var(--muted)]': props.state === 'default',
    'text-red-300': props.state === 'error',
  })
)

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
  emit('change', target.value)
}
</script>
