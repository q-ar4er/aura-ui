<template>
  <Motion
    tag="button"
    class="group relative flex w-full items-center gap-4 rounded-[var(--r-2xl)] border border-white/5 bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)]/90 px-6 py-5 text-left shadow-[var(--shadow-neo)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)] hover:shadow-[var(--shadow-neo-accent)]"
    :while-hover="{ scale: 1.03 }"
    :while-tap="{ scale: 0.97 }"
    v-bind="attrs"
  >
    <div class="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[var(--gradient-accent-soft)] text-[color:var(--text)] shadow-[var(--shadow-neo-accent)]">
      <Icon :icon="icon" class="h-6 w-6" aria-hidden="true" />
    </div>
    <div class="flex flex-1 flex-col gap-2">
      <div>
        <p class="text-sm font-semibold text-[color:var(--text)]">{{ label }}</p>
        <p class="text-xs text-[color:var(--muted)]/85">{{ description }}</p>
      </div>
      <AuraProgressLinear v-if="progress !== undefined" :value="progress" />
    </div>
    <span
      class="pointer-events-none absolute inset-0 -z-[1] rounded-[var(--r-2xl)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      :style="glowStyle"
    ></span>
  </Motion>
</template>

<script lang="ts" setup>
import { computed, toRefs, useAttrs, type PropType } from 'vue'
import { Motion } from '@motionone/vue'
import { Icon, type IconifyIcon } from '@iconify/vue'
import { AuraProgressLinear } from '@/components/atoms'
const props = defineProps({
  icon: {
    type: [Object, String] as PropType<IconifyIcon | string>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  progress: {
    type: Number,
    default: undefined,
  },
})

const { progress } = toRefs(props)

const attrs = useAttrs()

const glowStyle = computed(() => ({
  boxShadow: '0 0 52px color-mix(in srgb, var(--accent) 46%, transparent)',
}))
</script>
