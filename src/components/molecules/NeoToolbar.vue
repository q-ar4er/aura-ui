<template>
  <div class="flex flex-wrap items-center justify-between gap-4">
    <div class="min-w-0">
      <slot name="title" />
      <slot name="subtitle" />
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'NeoToolbar' })
</script>
