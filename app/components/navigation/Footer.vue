<template>
  <v-footer color="background" class="footer-main pa-0 mt-16">
    <v-container style="max-width: 1200px">
      <v-divider class="divider mb-8" />

      <v-row>
        <v-col cols="12" md="6">
          <span class="text-display footer-title">☢️ HTTP COBALTO 60</span>
          <p class="mt-2 footer-desc">
            Los códigos HTTP explicados desde lo más oscuro, crudo y real de México.
            Una guía técnica seria envuelta en la realidad mexicana sin filtros.
          </p>
        </v-col>

        <v-col cols="12" md="3">
          <h4 class="footer-heading mb-3">
            Navegación
          </h4>
          <div class="d-flex flex-column ga-1">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="footer-link"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </v-col>

        <v-col cols="12" md="3">
          <h4 class="footer-heading mb-3">
            Autor
          </h4>
          <p class="footer-author mb-2">Kevin Ochoa Xopa</p>
          <div class="d-flex ga-2">
            <v-btn
              icon
              variant="text"
              size="small"
              href="https://github.com/kevin-xopa"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              class="footer-social"
            >
              <v-icon size="18">mdi-github</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              size="small"
              href="https://linkedin.com/in/kevin-ochoa-xopa-88a454219"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              class="footer-social"
            >
              <v-icon size="18">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              size="small"
              href="mailto:xopa.kevin.x@gmail.com"
              aria-label="Email"
              class="footer-social"
            >
              <v-icon size="18">mdi-email-outline</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider class="divider mt-8 mb-4" />

      <div class="d-flex justify-space-between align-center flex-wrap footer-bottom">
        <span>Hecho en México · {{ new Date().getFullYear() }}</span>
        <span>Los códigos HTTP irradiando conocimiento</span>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Explorar Códigos', to: '/codigos' },
  { label: 'Acerca de', to: '/about' },
]
</script>

<style scoped lang="scss">
.divider {
  border-color: var(--co60-border) !important;
}

.footer-title {
  font-size: 1.1rem;
  color: rgb(var(--v-theme-secondary));
  letter-spacing: 0.1em;
}

.footer-desc {
  color: var(--co60-text-muted);
  font-size: 0.875rem;
  max-width: 400px;
}

.footer-heading {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.footer-link {
  color: var(--co60-text-muted);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(var(--v-theme-primary));
    filter: none;
  }
}

.footer-author {
  color: rgb(var(--v-theme-on-surface));
  font-size: 0.875rem;
}

.footer-social {
  color: var(--co60-text-muted) !important;
  transition: color 0.3s ease !important;

  &:hover {
    color: rgb(var(--v-theme-primary)) !important;
  }
}

.footer-bottom {
  color: var(--co60-text-muted);
  font-size: 0.75rem;
}
</style>
