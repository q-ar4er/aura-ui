<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description?: string
    actionLabel?: string
  }>(),
  {
    description: undefined,
    actionLabel: undefined,
  },
)

const emit = defineEmits<{ (e: 'action'): void }>()
</script>

<template>
  <section class="neo-surface neo-ring flex flex-col items-center gap-4 px-6 py-10 text-center">
    <div class="space-y-2">
      <h2 class="text-lg font-semibold text-[color:var(--text)]">{{ title }}</h2>
      <p v-if="description" class="text-sm text-[color:var(--muted)]">{{ description }}</p>
    </div>

    <button
      v-if="actionLabel"
      type="button"
      class="inline-flex items-center rounded-full bg-[color:color-mix(in_srgb,var(--accent)_45%,transparent)] px-4 py-2 text-sm font-medium text-bg shadow-neo-accent transition-transform hover:translate-y-0.5"
      @click="emit('action')"
    >
      {{ actionLabel }}
    </button>

    <slot />
  </section>
</template>
