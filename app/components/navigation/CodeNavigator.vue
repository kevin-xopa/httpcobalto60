<template>
  <v-container style="max-width: 1200px" class="pa-0 mt-8">
    <v-row>
      <v-col cols="6">
        <NuxtLink
          v-if="prev"
          :to="`/codigos/${prev.code}`"
          class="text-decoration-none"
        >
          <v-card color="surface-container-low" class="pa-4 nav-card" flat>
            <div class="nav-label mb-1">
              <v-icon size="14">mdi-arrow-left</v-icon> Anterior
            </div>
            <div class="d-flex align-center ga-2">
              <span
                class="text-display"
                :style="{ color: getCategoryColor(prev.category), fontSize: '1.5rem' }"
              >
                {{ prev.code }}
              </span>
              <span class="nav-title">{{ prev.title }}</span>
            </div>
          </v-card>
        </NuxtLink>
      </v-col>

      <v-col cols="6" class="text-right">
        <NuxtLink
          v-if="next"
          :to="`/codigos/${next.code}`"
          class="text-decoration-none"
        >
          <v-card color="surface-container-low" class="pa-4 nav-card" flat>
            <div class="nav-label mb-1 text-right">
              Siguiente <v-icon size="14">mdi-arrow-right</v-icon>
            </div>
            <div class="d-flex align-center justify-end ga-2">
              <span class="nav-title">{{ next.title }}</span>
              <span
                class="text-display"
                :style="{ color: getCategoryColor(next.category), fontSize: '1.5rem' }"
              >
                {{ next.code }}
              </span>
            </div>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { HTTPCode } from '~/data/codes'

defineProps<{
  prev: HTTPCode | null
  next: HTTPCode | null
}>()

const { getCategoryColor } = useCategories()
</script>

<style scoped lang="scss">
.nav-card {
  border: 1px solid var(--co60-border) !important;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--co60-card-hover-border) !important;
  }
}

.nav-label {
  color: var(--co60-text-muted);
  font-size: 0.75rem;
}

.nav-title {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.875rem;
}
</style>
