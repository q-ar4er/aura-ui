<template>
  <textarea
    ref="el"
    :value="modelValue"
    :placeholder="placeholder"
    :rows="rows"
    :disabled="disabled"
    :class="classes"
    v-bind="$attrs"
    @input="onInput"
  />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import { cn } from '@/utils/cn'

defineOptions({
  name: 'NeoTextAreaControl',
  inheritAttrs: false,
})

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 4,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const el = ref<HTMLTextAreaElement | null>(null)

const classes = computed(() =>
  cn('neo-field resize-y', {
    'opacity-60 pointer-events-none': props.disabled,
  })
)

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
  emit('change', target.value)
}

const focus = () => el.value?.focus()

defineExpose({
  get el() {
    return el.value
  },
  focus,
})
</script>
