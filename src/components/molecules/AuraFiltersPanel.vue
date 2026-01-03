<template>
  <div class="grid gap-4" :class="mdColsClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'AuraFiltersPanel' })

const props = withDefaults(
  defineProps<{
    mdCols?: 2 | 3 | 4
  }>(),
  {
    mdCols: 2,
  },
)

const mdColsClass = computed(() => {
  switch (props.mdCols) {
    case 4:
      return 'md:grid-cols-4'
    case 3:
      return 'md:grid-cols-3'
    default:
      return 'md:grid-cols-2'
  }
})
</script>
