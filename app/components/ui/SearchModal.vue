<template>
  <v-dialog
    v-model="isOpen"
    max-width="600"
    :scrim-opacity="0.7"
    content-class="search-modal"
  >
    <v-card color="surface-container-low" class="search-card">
      <v-text-field
        ref="searchInput"
        v-model="query"
        placeholder="Buscar código HTTP, nombre o contexto..."
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        bg-color="surface-container"
        hide-details
        autofocus
        class="search-input"
        @keydown.escape="close"
      />

      <v-divider class="divider" />

      <v-list
        v-if="results.length > 0"
        bg-color="transparent"
        class="search-results"
        max-height="400"
      >
        <v-list-item
          v-for="code in results"
          :key="code.code"
          :to="`/codigos/${code.code}`"
          @click="close"
        >
          <template #prepend>
            <span
              class="text-display code-number"
              :style="{ color: getCategoryColor(code.category) }"
            >
              {{ code.code }}
            </span>
          </template>
          <v-list-item-title class="text-body-2 result-title">
            {{ code.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="result-subtitle">
            {{ code.mexicanContext }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <div
        v-else-if="query.length > 0"
        class="pa-6 text-center no-results"
      >
        Sin resultados para "{{ query }}"
      </div>

      <div v-else class="pa-4 text-center hint-text">
        Escribe un código, nombre HTTP o contexto mexicano
      </div>

      <v-divider class="divider" />
      <div class="pa-2 d-flex align-center justify-end shortcut-bar">
        <kbd class="shortcut-key">ESC</kbd>
        <span class="ml-1">cerrar</span>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const { getCategoryColor } = useCategories()
const { searchCodes } = useCodes()

const isOpen = defineModel<boolean>({ default: false })
const query = ref('')

const results = computed(() => {
  if (!query.value.trim()) return []
  return searchCodes(query.value).slice(0, 10)
})

function close() {
  isOpen.value = false
  query.value = ''
}

// Atajo Cmd+K / Ctrl+K
function handleKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    isOpen.value = !isOpen.value
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped lang="scss">
.search-card {
  border: 1px solid var(--co60-border) !important;
}

.code-number {
  font-size: 1.25rem;
  min-width: 48px;
  text-align: center;
}

.result-title {
  color: rgb(var(--v-theme-on-surface));
}

.result-subtitle {
  color: rgb(var(--v-theme-secondary));
}

.no-results {
  color: rgb(var(--v-theme-secondary));
}

.hint-text {
  color: var(--co60-text-muted);
  font-size: 0.875rem;
}

.divider {
  border-color: var(--co60-border) !important;
}

.shortcut-bar {
  color: var(--co60-text-muted);
  font-size: 0.75rem;
}

.shortcut-key {
  display: inline-block;
  padding: 2px 6px;
  font-size: 0.7rem;
  font-family: 'JetBrains Mono', monospace;
  background-color: rgb(var(--v-theme-surface-bright));
  border: 1px solid var(--co60-border);
  border-radius: 4px;
  color: rgb(var(--v-theme-secondary));
}
</style>
