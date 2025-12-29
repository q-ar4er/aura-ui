<template>
  <NeoModal
    :open="open"
    :variant="variant"
    :size="size"
    :role="role"
    :aria-modal="ariaModal"
    :aria-label="ariaLabel"
    :aria-labelledby="computedLabelledby"
    :aria-describedby="computedDescribedby"
    :close-on-backdrop="closeOnBackdrop"
    :close-on-escape="closeOnEscape"
    :lock-scroll="lockScroll"
    :auto-focus="autoFocus"
    :container-class="containerClass"
    :overlay-class="overlayClass"
    :panel-class="panelClass"
    @update:open="(v) => emit('update:open', v)"
    @close="(payload) => emit('close', payload)"
  >
    <div class="flex w-full flex-col">
      <slot name="header">
        <header class="flex items-start justify-between gap-4 border-b border-white/5 bg-white/5 px-6 py-4">
          <div class="space-y-1">
            <p
              v-if="pretitle"
              class="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]"
            >
              {{ pretitle }}
            </p>

            <h2
              v-if="title"
              :id="titleId"
              class="text-xl font-semibold text-[color:var(--text)]"
            >
              {{ title }}
            </h2>

            <p
              v-if="subtitle"
              :id="subtitleId"
              class="text-sm text-[color:var(--muted)]"
            >
              {{ subtitle }}
            </p>
          </div>

          <div class="flex items-center gap-2">
            <slot name="header-actions" />

            <button
              v-if="showClose"
              type="button"
              class="inline-flex h-9 w-9 items-center justify-center rounded-[calc(var(--radius-active)_-_12px)] border border-white/10 bg-white/5 text-[color:var(--text)] hover:bg-white/10"
              :aria-label="closeAriaLabel"
              @click="requestClose()"
            >
              ×
            </button>
          </div>
        </header>
      </slot>

      <div class="px-6 py-6">
        <slot />
      </div>

      <footer v-if="$slots.footer" class="border-t border-white/5 bg-white/5 px-6 py-4">
        <slot name="footer" />
      </footer>
    </div>
  </NeoModal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import NeoModal from './NeoModal.vue'

defineOptions({ name: 'NeoDialog' })

type ModalVariant = 'dialog' | 'drawer-right'
type ModalSize = 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{
    open: boolean

    title?: string
    pretitle?: string
    subtitle?: string

    showClose?: boolean
    closeAriaLabel?: string

    variant?: ModalVariant
    size?: ModalSize

    role?: 'dialog' | 'alertdialog'
    ariaModal?: boolean
    ariaLabel?: string
    ariaLabelledby?: string
    ariaDescribedby?: string

    closeOnBackdrop?: boolean
    closeOnEscape?: boolean
    lockScroll?: boolean
    autoFocus?: boolean

    containerClass?: string
    overlayClass?: string
    panelClass?: string
  }>(),
  {
    title: '',
    pretitle: '',
    subtitle: '',

    showClose: true,
    closeAriaLabel: 'Close',

    variant: 'dialog',
    size: 'md',

    role: 'dialog',
    ariaModal: true,

    closeOnBackdrop: true,
    closeOnEscape: true,
    lockScroll: true,
    autoFocus: true,

    containerClass: '',
    overlayClass: '',
    panelClass: '',
  },
)

const emit = defineEmits<{
  (event: 'update:open', value: boolean): void
  (event: 'close', payload: { reason: 'backdrop' | 'escape' | 'api' }): void
}>()

const uid = ref(Math.random().toString(36).slice(2))
const titleId = computed(() => `neo-dialog-title-${uid.value}`)
const subtitleId = computed(() => `neo-dialog-subtitle-${uid.value}`)

const computedLabelledby = computed(() => props.ariaLabelledby || (props.title ? titleId.value : undefined))
const computedDescribedby = computed(() => props.ariaDescribedby || (props.subtitle ? subtitleId.value : undefined))

const requestClose = () => {
  emit('close', { reason: 'api' })
  emit('update:open', false)
}
</script>
