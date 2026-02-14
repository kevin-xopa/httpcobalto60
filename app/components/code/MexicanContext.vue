<template>
  <v-card color="surface-container-low" flat class="pa-6 border-subtle">
    <h3 class="text-display section-title mb-1">
      {{ mexicanContext }}
    </h3>
    <p class="context-subtitle mb-4">Contexto Mexicano</p>

    <div class="mexican-text">
      <p
        v-for="(paragraph, i) in paragraphs"
        :key="i"
        class="mb-3"
      >
        {{ paragraph }}
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  mexicanContext: string
  mexican: string
}>()

const paragraphs = computed(() => {
  return props.mexican
    .split('\n')
    .map(p => p.trim())
    .filter(Boolean)
})
</script>

<style scoped lang="scss">
.section-title {
  font-size: 1.1rem;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 0.05em;
}

.context-subtitle {
  color: var(--co60-text-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.mexican-text p {
  color: rgb(var(--v-theme-on-surface));
  font-size: 0.9rem;
  line-height: 1.8;
}
</style>
