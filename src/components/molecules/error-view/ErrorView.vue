<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description?: string
    details?: readonly string[]
    detailsLabel?: string
    actionLabel?: string
  }>(),
  {
    description: undefined,
    details: () => [],
    detailsLabel: 'Details',
    actionLabel: undefined,
  },
)

const emit = defineEmits<{ (e: 'action'): void }>()
</script>

<template>
  <div class="flex flex-col gap-4" role="alert" aria-live="assertive">
    <div>
      <h2 class="text-xl font-semibold text-[color:var(--text)]">{{ title }}</h2>
      <p v-if="description" class="mt-1 text-sm text-[color:var(--muted)]">{{ description }}</p>
    </div>

    <div v-if="details?.length" class="space-y-2 text-sm text-[color:var(--muted)]">
      <p class="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]/80">{{ detailsLabel }}</p>
      <ul class="list-disc space-y-1 pl-5">
        <li v-for="detail in details" :key="detail">{{ detail }}</li>
      </ul>
    </div>

    <button
      v-if="actionLabel"
      type="button"
      class="inline-flex items-center self-start rounded-full bg-[color:color-mix(in_srgb,var(--accent)_45%,transparent)] px-4 py-2 text-sm font-medium text-bg shadow-neo-accent transition-transform hover:translate-y-0.5"
      @click="emit('action')"
    >
      {{ actionLabel }}
    </button>
  </div>
</template>
