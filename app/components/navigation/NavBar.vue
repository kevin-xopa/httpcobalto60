<template>
  <v-app-bar flat color="background" :elevation="0" height="64">
    <v-container class="d-flex align-center py-0" style="max-width: 1200px">
      <NuxtLink to="/" class="d-flex align-center text-decoration-none">
        <span class="text-display nav-logo">☢️ COBALTO 60</span>
      </NuxtLink>

      <v-spacer />

      <!-- Nav links desktop -->
      <div class="d-none d-md-flex align-center ga-1">
        <v-btn
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          variant="text"
          size="small"
          class="nav-link"
        >
          {{ link.label }}
        </v-btn>

        <v-btn
          variant="text"
          size="small"
          class="nav-link"
          @click="searchOpen = true"
        >
          <v-icon size="16" class="mr-1">mdi-magnify</v-icon>
          Buscar
          <kbd class="shortcut-key ml-2">⌘K</kbd>
        </v-btn>

        <!-- Toggle tema -->
        <v-btn
          icon
          variant="text"
          size="small"
          class="nav-link ml-1"
          @click="toggle"
        >
          <v-icon size="18">{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
          <v-tooltip activator="parent" location="bottom">
            {{ isDark ? 'Tema claro' : 'Tema oscuro' }}
          </v-tooltip>
        </v-btn>
      </div>

      <!-- Mobile menu -->
      <v-btn
        class="d-md-none"
        icon
        variant="text"
        size="small"
        @click="mobileMenu = !mobileMenu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>

    <!-- Mobile drawer -->
    <v-navigation-drawer
      v-model="mobileMenu"
      location="right"
      temporary
      color="surface-container-low"
      width="280"
    >
      <v-list bg-color="transparent">
        <v-list-item
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          @click="mobileMenu = false"
        >
          <v-list-item-title class="drawer-link">{{ link.label }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="searchOpen = true; mobileMenu = false">
          <v-list-item-title class="drawer-link">
            <v-icon size="16" class="mr-2">mdi-magnify</v-icon>
            Buscar
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="toggle(); mobileMenu = false">
          <v-list-item-title class="drawer-link">
            <v-icon size="16" class="mr-2">{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
            {{ isDark ? 'Tema claro' : 'Tema oscuro' }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>

  <UiSearchModal v-model="searchOpen" />
</template>

<script setup lang="ts">
const mobileMenu = ref(false)
const searchOpen = ref(false)
const { isDark, toggle } = useThemeToggle()

const navLinks = [
  { label: 'Códigos', to: '/codigos' },
  { label: 'Filosofía HTTP', to: '/#filosofia' },
  { label: 'Acerca de', to: '/about' },
]
</script>

<style scoped lang="scss">
.nav-logo {
  font-size: 1.3rem;
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: 0.1em;
}

.nav-link {
  color: rgb(var(--v-theme-secondary)) !important;
  font-size: 0.8rem !important;
  letter-spacing: 0.02em;
  text-transform: none !important;

  &:hover {
    color: rgb(var(--v-theme-on-surface)) !important;
  }
}

.drawer-link {
  color: rgb(var(--v-theme-on-surface));
}

.shortcut-key {
  display: inline-block;
  padding: 1px 5px;
  font-size: 0.65rem;
  font-family: 'JetBrains Mono', monospace;
  background-color: rgb(var(--v-theme-surface-bright));
  border: 1px solid var(--co60-border);
  border-radius: 3px;
  color: var(--co60-text-muted);
}
</style>
