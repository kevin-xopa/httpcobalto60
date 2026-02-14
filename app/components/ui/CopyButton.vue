<template>
  <v-btn
    icon
    size="small"
    variant="text"
    :color="copied ? 'success' : 'secondary'"
    @click="copyCode"
  >
    <v-icon size="16">{{ copied ? 'mdi-check' : 'mdi-content-copy' }}</v-icon>
    <v-tooltip activator="parent" location="top">
      {{ copied ? 'Copiado' : 'Copiar código' }}
    </v-tooltip>
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const copied = ref(false)
let timeout: ReturnType<typeof setTimeout>

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    // Fallback silencioso
  }
}

onUnmounted(() => clearTimeout(timeout))
</script>
