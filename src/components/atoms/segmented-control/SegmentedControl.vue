<template>
  <div :class="wrapperClasses">
    <Motion
      v-if="options.length > 0 && activeIndex !== -1"
      tag="span"
      class="absolute inset-y-1 rounded-full bg-[color:var(--gradient-accent-soft)] shadow-[var(--shadow-neo-accent)]"
      :style="indicatorStyle"
      :animate="{ x: `${activeIndex * 100}%` }"
      :transition="transition"
    />
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      :class="optionClasses(option.value)"
      :aria-pressed="option.value === modelValue"
      @click="onSelect(option.value)"
    >
      <Icon
        v-if="option.icon"
        :icon="option.icon"
        class="h-4 w-4"
      />
      <span>{{ option.label }}</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import { Motion } from '@motionone/vue'
import { Icon, type IconifyIcon } from '@iconify/vue'

import { cn } from '@/utils/cn'

export interface SegmentedOption {
  value: string
  label: string
  icon?: IconifyIcon | string
}

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<SegmentedOption[]>,
    default: () => [],
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const wrapperClasses = computed(() =>
  cn(
    'relative isolate flex w-full gap-1 rounded-full border border-white/10 bg-[color:color-mix(in_srgb,var(--panel)_94%,transparent)]/80 p-1 text-sm text-[color:var(--muted)] shadow-[var(--shadow-neo-inset)] backdrop-blur-[14px]'
  )
)

const activeIndex = computed(() => props.options.findIndex((opt) => opt.value === props.modelValue))

const indicatorStyle = computed(() => {
  const width = props.options.length ? 100 / props.options.length : 0
  return {
    width: `${width}%`,
  }
})

const optionClasses = (value: string) =>
  cn(
    'relative z-[1] inline-flex flex-1 select-none items-center justify-center gap-2 rounded-full px-3 py-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
    {
      'text-[color:var(--text)] drop-shadow-[0_6px_18px_rgba(95,159,245,0.25)]': value === props.modelValue,
      'text-[color:var(--muted)] hover:text-[color:var(--text)]/80': value !== props.modelValue,
    }
  )

const onSelect = (value: string) => {
  if (props.modelValue === value) return
  emit('update:modelValue', value)
  emit('change', value)
}

const transition = { type: 'spring', stiffness: 260, damping: 22 }
</script>
