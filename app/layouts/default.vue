<template>
  <v-app>
    <NavigationNavBar />

    <v-main>
      <slot />
    </v-main>

    <NavigationFooter />
  </v-app>
</template>

<script setup lang="ts">
const { init } = useThemeToggle()

onMounted(() => {
  init()
})
</script>
