<template>
  <div class="code-block" v-html="highlightedCode" />
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { codeToHtml } from 'shiki'

const props = defineProps<{
  code: string
  lang: string
}>()

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const highlightedCode = ref('')

async function highlight() {
  if (!props.code) {
    highlightedCode.value = '<pre><code>// Sin ejemplo disponible</code></pre>'
    return
  }

  try {
    highlightedCode.value = await codeToHtml(props.code, {
      lang: props.lang,
      theme: isDark.value ? 'vitesse-dark' : 'vitesse-light',
    })
  } catch {
    // Fallback si el lenguaje no es soportado
    highlightedCode.value = `<pre><code>${props.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
  }
}

watch(() => [props.code, props.lang, isDark.value], highlight, { immediate: true })
</script>

<style scoped lang="scss">
.code-block :deep(pre) {
  background-color: var(--co60-bg-code) !important;
  padding: 1rem;
  margin: 0;
  overflow-x: auto;
  font-size: 0.8rem;
  line-height: 1.7;

  code {
    font-family: 'JetBrains Mono', monospace;
  }
}
</style>
