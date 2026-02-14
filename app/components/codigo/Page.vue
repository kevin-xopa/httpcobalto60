<template>
  <div v-if="httpCode">
    <!-- Header visual -->
    <section class="code-hero" :style="{ borderBottomColor: categoryColor }">
      <v-container style="max-width: 1200px" class="py-12">
        <!-- Breadcrumbs -->
        <v-breadcrumbs class="pa-0 mb-6" :items="breadcrumbs">
          <template #divider>
            <v-icon size="14" class="breadcrumb-divider">mdi-chevron-right</v-icon>
          </template>
          <template #item="{ item }">
            <NuxtLink :to="item.to" class="breadcrumb-link">
              {{ item.title }}
            </NuxtLink>
          </template>
        </v-breadcrumbs>

        <div class="d-flex align-start flex-wrap ga-4">
          <div class="flex-grow-1">
            <UiCategoryBadge :category-id="httpCode.category" class="mb-4" />

            <h1
              class="text-display code-hero-number"
              :style="{ color: categoryColor }"
            >
              {{ httpCode.code }}
            </h1>
            <h2 class="code-hero-title">{{ httpCode.title }}</h2>
            <p class="code-hero-context">{{ httpCode.mexicanContext }}</p>
          </div>
        </div>
      </v-container>
    </section>

    <v-container style="max-width: 1200px" class="py-8">
      <v-row>
        <!-- Columna principal -->
        <v-col cols="12" lg="8">
          <!-- Definición técnica -->
          <section class="mb-8">
            <h3 class="text-display detail-heading mb-4">DEFINICIÓN TÉCNICA</h3>
            <v-card color="surface-container-low" flat class="pa-6 border-subtle">
              <p class="technical-text">{{ httpCode.description }}</p>
              <div v-if="httpCode.headers && httpCode.headers.length > 0" class="mt-4">
                <span class="headers-label">Headers relevantes:</span>
                <div class="d-flex flex-wrap ga-2 mt-2">
                  <code
                    v-for="header in httpCode.headers"
                    :key="header"
                    class="header-chip"
                  >
                    {{ header }}
                  </code>
                </div>
              </div>
            </v-card>
          </section>

          <!-- Contexto mexicano -->
          <section class="mb-8">
            <h3 class="text-display detail-heading mb-4">CONTEXTO MEXICANO</h3>
            <CodeMexicanContext
              :mexican-context="httpCode.mexicanContext"
              :mexican="httpCode.mexican"
            />
          </section>

          <!-- Ejemplos de código -->
          <section class="mb-8">
            <h3 class="text-display detail-heading mb-4">EJEMPLOS DE CÓDIGO</h3>
            <CodeLanguageTabs :examples="httpCode.examples" />
          </section>
        </v-col>

        <!-- Sidebar -->
        <v-col cols="12" lg="4">
          <!-- Buenas prácticas -->
          <CodeBestPractices
            :best-practice="httpCode.bestPractice"
            :anti-pattern="httpCode.antiPattern"
            :related-codes="httpCode.relatedCodes"
          />
        </v-col>
      </v-row>

      <!-- Navegación prev/next -->
      <NavigationCodeNavigator :prev="adjacent.prev" :next="adjacent.next" />
    </v-container>
  </div>

  <!-- 404 -->
  <div v-else class="text-center py-16">
    <v-container style="max-width: 600px">
      <h1 class="text-display not-found-code">404</h1>
      <p class="mt-4 not-found-text">Código HTTP no encontrado en el catálogo.</p>
      <NuxtLink to="/codigos">
        <v-btn variant="outlined" color="primary" class="mt-6" style="text-transform: none">
          Volver al explorador
        </v-btn>
      </NuxtLink>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  code: number
}>()

const { getCodeByNumber, getAdjacentCodes } = useCodes()
const { getCategoryColor } = useCategories()

const httpCode = computed(() => getCodeByNumber(props.code))
const categoryColor = computed(() => httpCode.value ? getCategoryColor(httpCode.value.category) : '#6B6B6B')
const adjacent = computed(() => getAdjacentCodes(props.code))

const breadcrumbs = computed(() => [
  { title: 'Inicio', to: '/' },
  { title: 'Códigos', to: '/codigos' },
  { title: httpCode.value ? `${httpCode.value.code} ${httpCode.value.title}` : '', to: '#' },
])

// Navegación con flechas
function handleKeydown(e: KeyboardEvent) {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
  if (e.key === 'ArrowLeft' && adjacent.value.prev) {
    navigateTo(`/codigos/${adjacent.value.prev.code}`)
  }
  if (e.key === 'ArrowRight' && adjacent.value.next) {
    navigateTo(`/codigos/${adjacent.value.next.code}`)
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped lang="scss">
.code-hero {
  background-color: rgb(var(--v-theme-background));
  border-bottom: 1px solid var(--co60-border);
  background-image: radial-gradient(ellipse at 50% 100%, rgba(var(--v-theme-surface), 0.5) 0%, transparent 70%);
}

.breadcrumb-link {
  color: var(--co60-text-muted);
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    color: rgb(var(--v-theme-primary));
    filter: none;
  }
}

.breadcrumb-divider {
  color: var(--co60-text-muted);
}

.code-hero-number {
  font-size: clamp(4rem, 10vw, 8rem);
  line-height: 0.9;
  letter-spacing: 0.05em;
}

.code-hero-title {
  color: rgb(var(--v-theme-on-surface));
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5rem;
}

.code-hero-context {
  color: rgb(var(--v-theme-primary));
  font-size: 1rem;
  font-style: italic;
  margin-top: 0.5rem;
}

.detail-heading {
  font-size: 0.85rem;
  color: rgb(var(--v-theme-secondary));
  letter-spacing: 0.12em;
}

.technical-text {
  color: rgb(var(--v-theme-on-surface));
  font-size: 0.9rem;
  line-height: 1.8;
}

.headers-label {
  color: var(--co60-text-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.header-chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  background-color: rgb(var(--v-theme-surface-bright));
  border: 1px solid var(--co60-border);
  border-radius: 4px;
  color: rgb(var(--v-theme-tertiary));
}

.not-found-code {
  font-size: 4rem;
  color: rgb(var(--v-theme-error));
}

.not-found-text {
  color: rgb(var(--v-theme-secondary));
}
</style>
