<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column align-center justify-center" style="min-height: 100vh; max-width: 600px">
        <span class="text-display error-code">
          {{ error?.statusCode || 404 }}
        </span>

        <h1 class="text-display error-title mt-4">
          LOS 43 DE AYOTZINAPA
        </h1>

        <p class="error-subtitle mt-2">
          No encontrado
        </p>

        <v-card color="surface-container-low" flat class="pa-6 border-subtle mt-8" style="max-width: 500px; width: 100%">
          <p class="error-text">
            43 estudiantes normalistas desaparecidos en Iguala, Guerrero, la noche del 26 de
            septiembre de 2014. Buscados por sus familias, por organizaciones, por un país entero.
            Nunca encontrados. El recurso que buscas tampoco existe en este servidor.
          </p>
        </v-card>

        <p class="error-details mt-6" v-if="error?.message && error.message !== 'Page not found: ' + error.url">
          {{ error.message }}
        </p>

        <div class="d-flex ga-3 mt-8">
          <v-btn
            variant="outlined"
            color="primary"
            style="text-transform: none"
            @click="handleError"
          >
            <v-icon start>mdi-home</v-icon>
            Volver al inicio
          </v-btn>

          <NuxtLink to="/codigos">
            <v-btn
              variant="text"
              color="secondary"
              style="text-transform: none"
            >
              Explorar códigos
            </v-btn>
          </NuxtLink>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<style scoped lang="scss">
.error-code {
  font-size: clamp(5rem, 15vw, 10rem);
  line-height: 0.9;
  letter-spacing: 0.05em;
  color: rgb(var(--v-theme-error));
}

.error-title {
  font-size: 1.5rem;
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: 0.1em;
  text-align: center;
}

.error-subtitle {
  color: rgb(var(--v-theme-secondary));
  font-size: 1rem;
}

.error-text {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.9rem;
  line-height: 1.8;
  text-align: center;
}

.error-details {
  color: var(--co60-text-muted);
  font-size: 0.8rem;
  font-family: 'JetBrains Mono', monospace;
}
</style>
