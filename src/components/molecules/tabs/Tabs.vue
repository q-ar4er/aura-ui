<template>
  <div :class="wrapper">
    <div class="relative flex gap-2 rounded-[var(--radius-active)] bg-white/5 p-1 shadow-[var(--shadow-neo-inset)]">
      <Motion
        v-if="activeIndex !== -1"
        tag="span"
        class="absolute inset-y-1 rounded-[var(--radius-active)] bg-[var(--gradient-accent-soft)] shadow-[var(--shadow-neo-accent)]"
        :style="indicatorStyle"
        :animate="{ x: `${activeIndex * 100}%` }"
        :transition="transition"
      />
      <button
        v-for="item in items"
        :key="item.value"
        type="button"
        :class="tabClass(item.value)"
        @click="select(item.value)"
      >
        <Icon v-if="item.icon" :icon="item.icon" class="h-4 w-4" />
        <span>{{ item.label }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'AuraTabs',
})
import { computed, type PropType } from 'vue'
import { Motion } from '@motionone/vue'
import { Icon, type IconifyIcon } from '@iconify/vue'

import { cn } from '@/utils/cn'

export interface TabItem {
  value: string
  label: string
  icon?: IconifyIcon | string
}

type Placement = 'top' | 'bottom'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  items: {
    type: Array as PropType<TabItem[]>,
    default: () => [],
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'top',
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const wrapper = computed(() =>
  cn('w-full', props.placement === 'bottom' ? 'pb-4' : 'pt-4')
)

const activeIndex = computed(() => props.items.findIndex((item) => item.value === props.modelValue))

const indicatorStyle = computed(() => {
  const width = props.items.length ? 100 / props.items.length : 0
  return {
    width: `${width}%`,
  }
})

const tabClass = (value: string) =>
  cn(
    'relative z-[1] flex-1 select-none items-center justify-center gap-2 rounded-[var(--radius-active)] px-4 py-2 text-sm font-medium transition',
    'inline-flex',
    value === props.modelValue ? 'text-[color:var(--text)]' : 'text-[color:var(--muted)]'
  )

const select = (value: string) => {
  if (value === props.modelValue) return
  emit('update:modelValue', value)
  emit('change', value)
}

const transition = { type: 'spring', stiffness: 250, damping: 20 }
</script>
