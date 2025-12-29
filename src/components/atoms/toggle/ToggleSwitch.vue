<template>
  <label :class="wrapperClasses">
    <input
      ref="inputRef"
      type="checkbox"
      class="sr-only"
      :checked="modelValue"
      @change="onInput"
      :disabled="disabled"
    />
    <span :class="trackClasses" aria-hidden="true">
      <span :class="thumbClasses"></span>
    </span>
    <span v-if="label" class="ml-3 text-sm text-[color:var(--text)]">
      {{ label }}
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'

import { cn } from '@/utils/cn'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)

const wrapperClasses = computed(() =>
  cn('inline-flex cursor-pointer select-none items-center', {
    'opacity-40 cursor-not-allowed': props.disabled,
  })
)

const trackClasses = computed(() =>
  cn(
    'relative h-7 w-12 rounded-full border border-white/10 bg-white/5 transition-all shadow-[var(--shadow-neo-inset)]',
    props.modelValue ? 'bg-[var(--gradient-accent-soft)]' : 'bg-white/5'
  )
)

const thumbClasses = computed(() =>
  cn(
    'absolute top-1 left-1 h-5 w-5 rounded-full bg-[color:var(--panel)] shadow-[var(--shadow-neo)] transition-transform',
    props.modelValue ? 'translate-x-5 bg-[var(--gradient-accent)] shadow-[var(--shadow-neo-accent)]' : ''
  )
)

const onInput = (event: Event) => {
  if (props.disabled) return
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
  emit('change', target.checked)
}

watchEffect(() => {
  if (inputRef.value && inputRef.value.checked !== props.modelValue) {
    inputRef.value.checked = props.modelValue
  }
})
</script>
