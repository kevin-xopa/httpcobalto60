<script setup lang="ts">
const route = useRoute();
const { getCodeByNumber } = useCodes();
const codeNum = computed(() => Number(route.params.code));
const httpCode = computed(() => getCodeByNumber(codeNum.value));

useHead({
  title: computed(() =>
    httpCode.value
      ? `${httpCode.value.code} ${httpCode.value.title} — ${httpCode.value.mexicanContext} | HTTP Cobalto 60`
      : "Código no encontrado | HTTP Cobalto 60",
  ),
  meta: [
    {
      name: "description",
      content: computed(() =>
        httpCode.value
          ? `HTTP ${httpCode.value.code}: ${httpCode.value.description} Ejemplos en 5 lenguajes y buenas prácticas.`
          : "",
      ),
    },
  ],
});
</script>

<template>
  <CodigoPage :code="codeNum" />
</template>
