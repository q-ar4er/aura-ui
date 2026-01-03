<script setup lang="ts">
import { computed } from 'vue'
import AuraSkeleton from './Skeleton.vue'

const props = defineProps<{ height?: string }>()

const height = computed(() => props.height ?? '180px')
</script>

<template>
  <AuraSkeleton :height="height" />
</template>
