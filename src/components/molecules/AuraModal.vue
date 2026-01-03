<template>
  <Teleport to="body">
    <Transition
      :enter-active-class="transition.enterActive"
      :enter-from-class="transition.enterFrom"
      :enter-to-class="transition.enterTo"
      :leave-active-class="transition.leaveActive"
      :leave-from-class="transition.leaveFrom"
      :leave-to-class="transition.leaveTo"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-40"
        data-test="neo-modal"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0"
          :class="overlayClassMerged"
          aria-hidden="true"
          @click="onBackdropClick"
        />

        <!-- Layout container -->
        <div
          class="relative z-10 flex h-full w-full"
          :class="containerClassMerged"
          @click.self="onBackdropClick"
        >
          <!-- Panel -->
          <div
            ref="panelRef"
            class="neo-surface outline-none"
            :class="panelClassMerged"
            :role="role"
            :aria-modal="ariaModal ? 'true' : 'false'"
            :aria-label="ariaLabel"
            :aria-labelledby="ariaLabelledby"
            :aria-describedby="ariaDescribedby"
            tabindex="-1"
            @click.stop
          >
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'

defineOptions({ name: 'AuraModal' })

type ModalVariant = 'dialog' | 'drawer-right'
type ModalSize = 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{
    open: boolean

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

const panelRef = ref<HTMLElement | null>(null)
let previousActive: Element | null = null
let previousBodyOverflow: string | null = null

const openModel = computed({
  get: () => props.open,
  set: (value: boolean) => emit('update:open', value),
})

const sizeClass = computed(() => {
  // dialog sizes
  switch (props.size) {
    case 'sm':
      return 'max-w-md'
    case 'lg':
      return 'max-w-3xl'
    case 'xl':
      return 'max-w-5xl'
    default:
      return 'max-w-xl'
  }
})

const containerClassMerged = computed(() => {
  if (props.variant === 'drawer-right') {
    // Right drawer: align to right, full height
    return ['items-stretch justify-end', props.containerClass].filter(Boolean).join(' ')
  }

  // Centered dialog
  return ['items-center justify-center px-4 py-8 sm:px-6', props.containerClass].filter(Boolean).join(' ')
})

const overlayClassMerged = computed(() => {
  return [
    'bg-black/60 backdrop-blur-sm',
    props.overlayClass,
  ].filter(Boolean).join(' ')
})

const panelClassMerged = computed(() => {
  if (props.variant === 'drawer-right') {
    return [
      'relative h-full w-full max-w-2xl overflow-y-auto',
      'border-l border-white/10',
      'bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)]',
      'shadow-[var(--shadow-neo)]',
      props.panelClass,
    ].filter(Boolean).join(' ')
  }

  // dialog
  return [
    'relative w-full',
    sizeClass.value,
    'max-h-[85vh] overflow-hidden',
    'rounded-[var(--radius-active)] border border-white/10',
    'bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)]',
    'shadow-[var(--shadow-neo)]',
    props.panelClass,
  ].filter(Boolean).join(' ')
})

const transition = computed(() => {
  if (props.variant === 'drawer-right') {
    return {
      enterActive: 'transition duration-200 ease-out',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leaveActive: 'transition duration-150 ease-in',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    }
  }

  return {
    enterActive: 'transition duration-200 ease-out',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leaveActive: 'transition duration-150 ease-in',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  }
})

const close = (reason: 'backdrop' | 'escape' | 'api') => {
  emit('close', { reason })
  openModel.value = false
}

const onBackdropClick = () => {
  if (!props.closeOnBackdrop) return
  close('backdrop')
}

const focusableSelector =
  'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])'

const focusFirst = async () => {
  await nextTick()
  const root = panelRef.value
  if (!root) return

  const first = root.querySelector<HTMLElement>(focusableSelector)
  if (props.autoFocus) {
    ;(first ?? root).focus?.()
  } else {
    root.focus?.()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!props.open) return

  if (event.key === 'Escape' && props.closeOnEscape) {
    event.preventDefault()
    close('escape')
    return
  }

  if (event.key !== 'Tab') return
  const root = panelRef.value
  if (!root) return

  const focusables = Array.from(root.querySelectorAll<HTMLElement>(focusableSelector))
    .filter((el) => !el.hasAttribute('disabled') && el.tabIndex !== -1)

  if (focusables.length === 0) {
    event.preventDefault()
    root.focus?.()
    return
  }

  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  const active = document.activeElement as HTMLElement | null

  if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  } else if (event.shiftKey && (active === first || active === root)) {
    event.preventDefault()
    last.focus()
  }
}

const applyScrollLock = (enabled: boolean) => {
  if (typeof document === 'undefined') return
  if (!props.lockScroll) return

  const body = document.body
  if (enabled) {
    previousBodyOverflow = body.style.overflow
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = previousBodyOverflow || ''
  }
}

watch(
  () => props.open,
  async (isOpen) => {
    if (typeof document === 'undefined') return

    if (isOpen) {
      previousActive = document.activeElement
      applyScrollLock(true)
      document.addEventListener('keydown', handleKeydown)
      await focusFirst()
    } else {
      document.removeEventListener('keydown', handleKeydown)
      applyScrollLock(false)
      ;(previousActive as HTMLElement | null)?.focus?.()
      previousActive = null
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('keydown', handleKeydown)
    applyScrollLock(false)
  }
})
</script>
