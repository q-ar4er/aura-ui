<template>
  <input
    ref="el"
    type="file"
    :multiple="multiple"
    :accept="accept"
    :disabled="disabled"
    v-bind="$attrs"
    @change="onChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'AuraFileInput',
  inheritAttrs: false,
})

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  accept: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'change', event: Event): void
}>()

const el = ref<HTMLInputElement | null>(null)

const open = () => {
  el.value?.click()
}

const reset = () => {
  if (!el.value) return
  el.value.value = ''
}

const onChange = (event: Event) => {
  emit('change', event)
}

defineExpose({
  get el() {
    return el.value
  },
  open,
  reset,
})
</script>
