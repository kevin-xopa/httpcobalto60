<template>
  <NuxtLink :to="`/codigos/${code.code}`" class="text-decoration-none">
    <v-card color="surface-container" class="code-card" flat>
      <!-- Barra de color de categoría -->
      <div
        class="category-bar"
        :style="{ backgroundColor: categoryColor }"
      />

      <div class="pa-5">
        <div class="d-flex align-center justify-space-between mb-3">
          <span
            class="text-display code-number"
            :style="{ color: categoryColor }"
          >
            {{ code.code }}
          </span>
          <UiCategoryBadge :category-id="code.category" />
        </div>

        <h3 class="code-title mb-1">{{ code.title }}</h3>
        <p class="code-context">{{ code.mexicanContext }}</p>

        <p class="code-mexican mt-3">
          {{ truncate(code.mexican, 120) }}
        </p>
      </div>
    </v-card>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { HTTPCode } from '~/data/codes'

const props = defineProps<{
  code: HTTPCode
}>()

const { getCategoryColor } = useCategories()
const categoryColor = computed(() => getCategoryColor(props.code.category))

function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length).trimEnd() + '...'
}
</script>

<style scoped lang="scss">
.code-card {
  border: 1px solid var(--co60-border) !important;
  transition: border-color 0.3s ease, transform 0.3s ease;
  overflow: hidden;
  height: 100%;

  &:hover {
    border-color: var(--co60-card-hover-border) !important;
    transform: translateY(-2px);
  }
}

.category-bar {
  height: 3px;
  width: 100%;
}

.code-number {
  font-size: 2rem;
  line-height: 1;
}

.code-title {
  color: rgb(var(--v-theme-on-surface));
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3;
}

.code-context {
  color: rgb(var(--v-theme-primary));
  font-size: 0.8rem;
  font-style: italic;
}

.code-mexican {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.8rem;
  line-height: 1.5;
}
</style>
