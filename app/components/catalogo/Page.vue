<template>
  <v-container style="max-width: 1200px" class="py-12">
    <!-- Header -->
    <h1 class="text-display page-title mb-2">EXPLORADOR DE CÓDIGOS</h1>
    <p class="page-subtitle mb-8">
      {{ allCodes.length }} códigos HTTP. Cada uno con su realidad mexicana.
    </p>

    <!-- Filtros -->
    <div class="d-flex flex-wrap align-center ga-3 mb-8">
      <v-text-field
        v-model="query"
        placeholder="Buscar por número, nombre o contexto..."
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        bg-color="surface-container"
        hide-details
        density="comfortable"
        style="max-width: 400px"
        clearable
      />

      <v-chip-group v-model="selectedCategory" selected-class="selected-chip">
        <v-chip
          :value="undefined"
          variant="outlined"
          size="small"
          :class="!selectedCategory ? 'chip-active' : 'chip-inactive'"
        >
          Todos
        </v-chip>
        <v-chip
          v-for="cat in categories"
          :key="cat.id"
          :value="cat.id"
          variant="outlined"
          size="small"
          :style="
            selectedCategory === cat.id
              ? `border-color: ${cat.color}; color: ${cat.color}`
              : ''
          "
          :class="selectedCategory !== cat.id ? 'chip-inactive' : ''"
        >
          {{ cat.range }} {{ cat.label }}
        </v-chip>
      </v-chip-group>
    </div>

    <!-- Resultados -->
    <div v-if="filteredCodes.length > 0">
      <p class="results-count mb-6">
        {{ filteredCodes.length }} resultado{{
          filteredCodes.length !== 1 ? "s" : ""
        }}
      </p>

      <v-row>
        <v-col
          v-for="code in filteredCodes"
          :key="code.code"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <CodeCard :code="code" />
        </v-col>
      </v-row>
    </div>

    <!-- Sin resultados -->
    <div v-else class="text-center py-16">
      <v-icon size="64" color="secondary">mdi-magnify-close</v-icon>
      <p class="mt-4 no-results-text">Sin resultados para "{{ query }}"</p>
      <p class="no-results-hint">
        Intenta con un número de código, nombre HTTP o contexto mexicano
      </p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import type { Category } from "~/composables/useCategories";

const route = useRoute();
const { allCodes, searchCodes } = useCodes();
const { categories } = useCategories();

const query = ref("");
const selectedCategory = ref<Category["id"] | undefined>(
  (route.query.categoria as Category["id"]) || undefined,
);

const filteredCodes = computed(() => {
  return searchCodes(query.value, selectedCategory.value);
});
</script>

<style scoped lang="scss">
.page-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: 0.1em;
}

.page-subtitle {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.95rem;
}

.results-count {
  color: var(--co60-text-muted);
  font-size: 0.8rem;
}

.selected-chip {
  font-weight: 600;
}

.chip-active {
  border-color: rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-primary)) !important;
}

.chip-inactive {
  border-color: var(--co60-border) !important;
  color: rgb(var(--v-theme-secondary)) !important;
}

.no-results-text {
  color: var(--co60-text-muted);
  font-size: 1rem;
}

.no-results-hint {
  color: var(--co60-border);
  font-size: 0.875rem;
}
</style>
