<script setup lang="ts" generic="T">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    items: readonly T[]
    itemHeight: number
    overscan?: number
    height?: string
    keyFor?: (item: T, index: number) => string | number
  }>(),
  {
    overscan: 6,
    height: '320px',
  },
)

const scrollerRef = ref<HTMLElement | null>(null)
const scrollTop = ref(0)
const viewportHeight = ref(0)
let ro: ResizeObserver | null = null

const totalHeight = computed(() => props.items.length * props.itemHeight)

const startIndex = computed(() => {
  const raw = Math.floor(scrollTop.value / props.itemHeight) - props.overscan
  return Math.max(0, raw)
})

const endIndex = computed(() => {
  const raw = Math.ceil((scrollTop.value + viewportHeight.value) / props.itemHeight) + props.overscan
  return Math.min(props.items.length - 1, raw)
})

const visibleItems = computed(() => props.items.slice(startIndex.value, endIndex.value + 1))
const offsetY = computed(() => startIndex.value * props.itemHeight)

const onScroll = (e: Event) => {
  const el = e.target as HTMLElement
  scrollTop.value = el.scrollTop
}

onMounted(() => {
  const el = scrollerRef.value
  if (!el) return

  const update = () => {
    viewportHeight.value = el.clientHeight
  }
  update()
  ro = new ResizeObserver(update)
  ro.observe(el)
})

onBeforeUnmount(() => {
  ro?.disconnect()
  ro = null
})

const keyForItem = (item: T, index: number) => {
  return props.keyFor?.(item, index) ?? index
}
</script>

<template>
  <div ref="scrollerRef" class="overflow-auto" :style="{ height }" @scroll="onScroll">
    <div class="relative" :style="{ height: `${totalHeight}px` }">
      <div class="absolute left-0 right-0" :style="{ transform: `translateY(${offsetY}px)` }">
        <div
          v-for="(item, localIndex) in visibleItems"
          :key="keyForItem(item, startIndex + localIndex)"
          :style="{ height: `${itemHeight}px` }"
        >
          <slot :item="item" :index="startIndex + localIndex" />
        </div>
      </div>
    </div>
  </div>
</template>
