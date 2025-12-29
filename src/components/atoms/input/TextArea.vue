<template>
  <label class="block space-y-2">
    <span v-if="label" class="text-sm font-medium text-muted">{{ label }}</span>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :class="inputClasses"
      :disabled="disabled"
      v-bind="$attrs"
      @input="onInput"
    />
    <p v-if="message" :class="messageClasses">{{ message }}</p>
  </label>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'

import { cn } from '@/utils/cn'

type TextAreaState = 'default' | 'error' | 'success'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  state: {
    type: String as PropType<TextAreaState>,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 4,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const stateClasses: Record<TextAreaState, string> = {
  default: '',
  error:
    'border-red-500/70 text-red-200 placeholder:text-red-200 caret-red-300 focus-visible:ring-red-400/50 focus-visible:ring-offset-red-400/10 focus-visible:border-red-400/60 selection:bg-red-500/20 selection:text-red-100',
  success:
    'border-emerald-500/70 text-emerald-100 placeholder:text-emerald-100 caret-emerald-300 focus-visible:ring-emerald-400/40 focus-visible:ring-offset-emerald-400/10 focus-visible:border-emerald-400/60 selection:bg-emerald-500/20 selection:text-emerald-50',
}

const inputClasses = computed(() =>
  cn('neo-field resize-y', stateClasses[props.state])
)

const messageClasses = computed(() =>
  cn('text-xs', {
    'text-muted': props.state === 'default',
    'text-red-300': props.state === 'error',
    'text-emerald-300': props.state === 'success',
  })
)

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
  emit('change', target.value)
}
</script>
