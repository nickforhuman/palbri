<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <main class="w-full min-h-screen">
    <RouterView />
    <FooterComponent />
  </main>
</template>

<style scoped></style>
