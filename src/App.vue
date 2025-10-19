<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'
</script>

<template>
  <header class="sticky w-full py-10 z-50">
    <NavigationComponent />
  </header>
  <main class="w-full min-h-screen">
    <RouterView />
    <FooterComponent />
  </main>
</template>

<style scoped></style>
