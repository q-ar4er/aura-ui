<template>
  <input
    ref="el"
    type="range"
    :value="normalizedValue"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    v-bind="$attrs"
    @input="onInput"
    @change="onChange"
  />
</template>

<script lang="ts" setup>
import { computed, ref, type PropType } from 'vue'

defineOptions({
  name: 'NeoRange',
  inheritAttrs: false,
})

type NumberLike = number | string

const props = defineProps({
  modelValue: {
    type: Number as PropType<number>,
    default: 0,
  },
  min: {
    type: [Number, String] as PropType<NumberLike>,
    default: 0,
  },
  max: {
    type: [Number, String] as PropType<NumberLike>,
    default: 100,
  },
  step: {
    type: [Number, String] as PropType<NumberLike>,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()

const el = ref<HTMLInputElement | null>(null)

const normalizedValue = computed(() => {
  const value = props.modelValue
  return Number.isFinite(value) ? value : 0
})

const readValue = (event: Event): number => {
  const target = event.target as HTMLInputElement
  const asNumber = target.valueAsNumber
  return Number.isFinite(asNumber) ? asNumber : Number(target.value)
}

const onInput = (event: Event) => {
  emit('update:modelValue', readValue(event))
}

const onChange = (event: Event) => {
  emit('change', readValue(event))
}

const focus = () => el.value?.focus()

defineExpose({
  get el() {
    return el.value
  },
  focus,
})
</script>