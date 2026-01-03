<script setup lang="ts">
import AuraCardSurface from '@/components/atoms/card/CardSurface.vue'

withDefaults(
  defineProps<{
    title: string
    description?: string
  }>(),
  {
    description: undefined,
  },
)
</script>

<template>
  <AuraCardSurface class="w-full p-6">
    <div class="mb-4">
      <div class="text-xl font-semibold">{{ title }}</div>
      <div v-if="description" class="text-sm opacity-70 mt-1">{{ description }}</div>
    </div>
    <div>
      <slot />
    </div>
  </AuraCardSurface>
</template>
