<template>
  <v-chip
    :style="{ backgroundColor: color + '22', color: color, borderColor: color + '44' }"
    variant="outlined"
    size="small"
    label
  >
    {{ range }} {{ label }}
  </v-chip>
</template>

<script setup lang="ts">
import type { Category } from '~/composables/useCategories'

const props = defineProps<{
  categoryId: Category['id']
}>()

const { getCategoryColor, getCategoryLabel, getCategoryRange } = useCategories()

const color = computed(() => getCategoryColor(props.categoryId))
const label = computed(() => getCategoryLabel(props.categoryId))
const range = computed(() => getCategoryRange(props.categoryId))
</script>
