<template>
  <v-card color="surface-container" flat class="overflow-hidden">
    <v-tabs
      v-model="activeTab"
      density="compact"
      color="primary"
      bg-color="surface-container-low"
      show-arrows
    >
      <v-tab
        v-for="lang in languages"
        :key="lang.id"
        :value="lang.id"
        size="small"
      >
        {{ lang.label }}
      </v-tab>
    </v-tabs>

    <v-divider />

    <div class="code-header">
      <span class="code-lang-label">{{ activeLanguage?.label }}</span>
      <UiCopyButton :text="activeCode" />
    </div>

    <CodeExample :code="activeCode" :lang="activeLanguage?.shikiLang ?? 'text'" />
  </v-card>
</template>

<script setup lang="ts">
interface LanguageTab {
  id: string
  label: string
  shikiLang: string
}

const props = defineProps<{
  examples: {
    javascript: string
    python: string
    phpLaravel: string
    rust: string
    cpp: string
  }
}>()

const languages: LanguageTab[] = [
  { id: 'javascript', label: 'JavaScript', shikiLang: 'javascript' },
  { id: 'python', label: 'Python', shikiLang: 'python' },
  { id: 'phpLaravel', label: 'PHP/Laravel', shikiLang: 'php' },
  { id: 'rust', label: 'Rust', shikiLang: 'rust' },
  { id: 'cpp', label: 'C++', shikiLang: 'cpp' },
]

const activeTab = ref('javascript')

const activeLanguage = computed(() => languages.find(l => l.id === activeTab.value))

const activeCode = computed(() => {
  const key = activeTab.value as keyof typeof props.examples
  return props.examples[key] || '// Sin ejemplo disponible'
})
</script>

<style scoped lang="scss">
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: var(--co60-bg-code);
  border-bottom: 1px solid var(--co60-border);
}

.code-lang-label {
  font-size: 0.7rem;
  color: rgb(var(--v-theme-tertiary));
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.7;
}

:deep(pre) {
  border: none;
  border-radius: 0;
  margin: 0;
}
</style>
