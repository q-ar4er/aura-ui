<script setup lang="ts">
import NeoDialog from '@/components/molecules/NeoDialog.vue'
import NeoButton from '@/components/atoms/button/Button.vue'

const props = withDefaults(
  defineProps<{
    open: boolean
    title: string
    description?: string
    confirmLabel?: string
    cancelLabel?: string
    destructive?: boolean
  }>(),
  {
    description: undefined,
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    destructive: false,
  },
)

const emit = defineEmits<{ (e: 'update:open', value: boolean): void; (e: 'confirm'): void; (e: 'cancel'): void }>()

const close = () => emit('update:open', false)

const onCancel = () => {
  emit('cancel')
  close()
}

const onConfirm = () => {
  emit('confirm')
  close()
}
</script>

<template>
  <NeoDialog :open="props.open" :title="props.title" @update:open="emit('update:open', $event)">
    <template #default>
      <p v-if="description" class="mt-2 text-sm text-[color:var(--muted)]">{{ description }}</p>
    </template>
    <template #footer>
      <div class="flex items-center justify-end gap-2">
        <NeoButton variant="ghost" @click="onCancel">{{ cancelLabel }}</NeoButton>
        <NeoButton :variant="destructive ? 'subtle' : 'primary'" @click="onConfirm">{{ confirmLabel }}</NeoButton>
      </div>
    </template>
  </NeoDialog>
</template>
