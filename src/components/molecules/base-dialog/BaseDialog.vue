<template>
  <AuraDialog
    :open="open"
    :size="size"
    :pretitle="pretitle"
    :title="title"
    :subtitle="subtitle"
    :show-close="showClose"
    :close-aria-label="closeAriaLabel"
    :auto-focus="autoFocus"
    :close-on-backdrop="closeOnBackdrop"
    :close-on-escape="closeOnEscape"
    :lock-scroll="lockScroll"
    :container-class="containerClass"
    :overlay-class="overlayClass"
    :panel-class="panelClass"
    @update:open="(v) => emit('update:open', v)"
    @close="(payload) => emit('close', payload)"
  >
    <div ref="contentRef">
      <slot />
    </div>

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </AuraDialog>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

import AuraDialog from '@/components/molecules/AuraDialog.vue'

defineOptions({ name: 'AuraBaseDialog' })

type DialogSize = 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{
    open: boolean

    title?: string
    pretitle?: string
    subtitle?: string

    size?: DialogSize

    showClose?: boolean
    closeAriaLabel?: string

    closeOnBackdrop?: boolean
    closeOnEscape?: boolean
    lockScroll?: boolean

    /**
     * Selector for autofocus when opening.
     * If not set, the first focusable element inside the default slot will be used.
     */
    focusSelector?: string

    /**
     * Forwarded classes to AuraModal.
     */
    containerClass?: string
    overlayClass?: string
    panelClass?: string

    /**
     * Forwarded to AuraDialog/AuraModal.
     */
    autoFocus?: boolean
  }>(),
  {
    title: '',
    pretitle: '',
    subtitle: '',

    size: 'md',

    showClose: true,
    closeAriaLabel: 'Close',

    closeOnBackdrop: true,
    closeOnEscape: true,
    lockScroll: true,

    focusSelector: '',

    containerClass: '',
    overlayClass: '',
    panelClass: '',

    autoFocus: true,
  },
)

const emit = defineEmits<{
  (event: 'update:open', value: boolean): void
  (event: 'close', payload: { reason: 'backdrop' | 'escape' | 'api' }): void
}>()

const contentRef = ref<HTMLElement | null>(null)

const defaultFocusableSelector =
  '[data-modal-autofocus],a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])'

const focusFirstField = async () => {
  await nextTick()

  const root = contentRef.value
  if (!root) return

  const selector = props.focusSelector?.trim() || defaultFocusableSelector
  const el = root.querySelector<HTMLElement>(selector)
  el?.focus?.()
}

let focusTimer: number | null = null

watch(
  () => props.open,
  (isOpen) => {
    if (!isOpen) {
      if (focusTimer) {
        window.clearTimeout(focusTimer)
        focusTimer = null
      }
      return
    }

    // Give AuraModal time to mount and then focus inside the dialog.
    focusTimer = window.setTimeout(() => {
      focusTimer = null
      void focusFirstField()
    }, 0)
  },
)

onBeforeUnmount(() => {
  if (focusTimer) {
    window.clearTimeout(focusTimer)
    focusTimer = null
  }
})
</script>
