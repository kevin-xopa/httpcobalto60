<template>
  <v-card color="surface-container-low" flat class="pa-6 border-subtle">
    <h3 class="text-display section-title mb-4">
      <v-icon size="18" class="mr-2" color="success">mdi-check-circle-outline</v-icon>
      Buenas Prácticas
    </h3>

    <div class="best-practice-text" v-html="formattedPractice" />

    <template v-if="antiPattern">
      <v-divider class="divider my-5" />

      <h4 class="anti-title mb-3">
        <v-icon size="16" class="mr-2" color="error">mdi-close-circle-outline</v-icon>
        Anti-Pattern
      </h4>

      <div class="anti-pattern-text" v-html="formattedAntiPattern" />
    </template>

    <template v-if="relatedCodes && relatedCodes.length > 0">
      <v-divider class="divider my-5" />

      <h4 class="related-title mb-3">
        Códigos Relacionados
      </h4>
      <div class="d-flex flex-wrap ga-2">
        <NuxtLink
          v-for="rc in relatedCodes"
          :key="rc"
          :to="`/codigos/${rc}`"
        >
          <v-chip
            size="small"
            variant="outlined"
            class="related-chip"
          >
            {{ rc }}
          </v-chip>
        </NuxtLink>
      </div>
    </template>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  bestPractice: string
  antiPattern?: string
  relatedCodes?: number[]
}>()

function formatText(text: string): string {
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => `<p>${line}</p>`)
    .join('')
}

const formattedPractice = computed(() => formatText(props.bestPractice))
const formattedAntiPattern = computed(() => props.antiPattern ? formatText(props.antiPattern) : '')
</script>

<style scoped lang="scss">
.section-title {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: 0.05em;
}

.anti-title {
  color: rgb(var(--v-theme-error));
  font-size: 0.85rem;
  font-weight: 500;
}

.related-title {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.85rem;
  font-weight: 500;
}

.related-chip {
  border-color: var(--co60-border) !important;
  color: rgb(var(--v-theme-primary)) !important;
}

.divider {
  border-color: var(--co60-border) !important;
}

.best-practice-text :deep(p),
.anti-pattern-text :deep(p) {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.875rem;
  line-height: 1.7;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
