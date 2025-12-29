<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { AuraToastDetail } from '@/toast'

type ToastState = {
  visible: boolean
  message: string
  type: AuraToastDetail['type']
}

const toast = ref<ToastState>({ visible: false, message: '', type: 'info' })
let timer: number | undefined

const show = (detail: AuraToastDetail) => {
  toast.value = { ...detail, visible: true }
  if (timer) window.clearTimeout(timer)
  timer = window.setTimeout(() => {
    toast.value.visible = false
  }, 2500)
}

const onToast = (event: Event) => {
  const e = event as CustomEvent<AuraToastDetail>
  if (!e.detail?.message) return
  show(e.detail)
}

onMounted(() => window.addEventListener('aura:toast', onToast))
onBeforeUnmount(() => window.removeEventListener('aura:toast', onToast))
</script>

<template>
  <Transition name="aura-toast">
    <div
      v-if="toast.visible"
      class="fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 neo-surface neo-ring px-4 py-2 text-sm shadow-2xl"
      :class="
        toast.type === 'success'
          ? 'border border-emerald-500/40'
          : toast.type === 'error'
            ? 'border border-red-500/40'
            : 'border border-white/10'
      "
      role="status"
      aria-live="polite"
    >
      {{ toast.message }}
    </div>
  </Transition>
</template>

<style scoped>
.aura-toast-enter-active,
.aura-toast-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}
.aura-toast-enter-from,
.aura-toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 8px);
}
</style>
