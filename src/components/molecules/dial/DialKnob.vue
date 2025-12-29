<template>
  <Motion
    tag="div"
    class="relative flex h-40 w-40 select-none flex-col items-center justify-center gap-3 rounded-[var(--radius-active)] bg-[color:var(--panel)]/80 p-6 text-center shadow-[var(--shadow-neo)]"
    :while-hover="{ scale: 1.02 }"
    :while-tap="{ scale: 0.98 }"
  >
    <div
      class="relative flex h-28 w-28 items-center justify-center rounded-full bg-[color:var(--panel)]/70 shadow-[var(--shadow-neo-inset)]"
      role="slider"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="modelValue"
      tabindex="0"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointerleave="onPointerUp"
      @wheel.prevent="onWheel"
      @keydown.prevent="onKey"
    >
      <div class="absolute h-24 w-24 rounded-full border border-white/10" aria-hidden="true"></div>
      <div
        class="absolute h-3 w-3 rounded-full bg-[var(--accent)] shadow-[var(--shadow-neo-accent)]"
        :style="pointerStyle"
        aria-hidden="true"
      ></div>
      <span class="text-3xl font-semibold text-[color:var(--text)]">{{ modelValue }}</span>
    </div>
    <div class="space-y-1">
      <p class="text-sm uppercase tracking-wide text-[color:var(--muted)]">{{ label }}</p>
      <p class="text-xs text-[color:var(--muted)]">{{ hint }}</p>
    </div>
  </Motion>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Motion } from '@motionone/vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 10,
  },
  step: {
    type: Number,
    default: 1,
  },
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()

const dragging = ref(false)
let baseValue = 0
let pointerId: number | null = null

const clamp = (value: number) => Math.min(props.max, Math.max(props.min, value))

const normalized = computed(() => (props.modelValue - props.min) / (props.max - props.min || 1))

const pointerStyle = computed(() => {
  const radius = 48
  const angle = normalized.value * 270 - 135
  const radians = (angle * Math.PI) / 180
  const x = Math.cos(radians) * radius
  const y = Math.sin(radians) * radius
  return {
    transform: `translate(${x}px, ${y}px)`
  }
})

const updateValue = (next: number) => {
  const value = clamp(Math.round(next / props.step) * props.step)
  if (value !== props.modelValue) {
    emit('update:modelValue', value)
    emit('change', value)
  }
}

const onPointerDown = (event: PointerEvent) => {
  dragging.value = true
  baseValue = props.modelValue
  pointerId = event.pointerId
  ;(event.target as HTMLElement).setPointerCapture(event.pointerId)
}

const onPointerMove = (event: PointerEvent) => {
  if (!dragging.value || pointerId !== event.pointerId) return
  const range = props.max - props.min || 1
  baseValue += (event.movementY ?? 0) * -0.05 * range
  updateValue(baseValue)
}

const onPointerUp = (event: PointerEvent) => {
  if (pointerId !== null && event.pointerId !== pointerId) return
  dragging.value = false
  const target = event.target as HTMLElement
  if (pointerId !== null) {
    try {
      target.releasePointerCapture(pointerId)
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn(error)
      }
    }
  }
  pointerId = null
}

const onWheel = (event: WheelEvent) => {
  const direction = event.deltaY > 0 ? -1 : 1
  updateValue(props.modelValue + direction * props.step)
}

const onKey = (event: KeyboardEvent) => {
  if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
    updateValue(props.modelValue + props.step)
  } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
    updateValue(props.modelValue - props.step)
  }
}
</script>
