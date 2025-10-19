<template>
  <div class="flex flex-col w-full">
    <!-- header start  -->
    <div class="p-6 flex flex-col justify-center items-start gap-2">
      <h1 id="globalInovation" class="md:text-5xl text-2xl font-bold">Global Innovations Agency</h1>
      <p id="globalInovation" class="text-xs text-gray-400">
        We work all over the world on various projects, starting from building a successful user
        experience for the American website ‘Sumnotes’ to conducting brand positioning for the
        ‘Kommesk’ insurance company in Kazakhstan.
      </p>
    </div>
    <!-- header end  -->
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const globalInovationSelector = gsap.utils.toArray('#globalInovation')
  globalInovationSelector.forEach((globalInovation: any, i) => {
    gsap.fromTo(
      globalInovation,
      { y: 50, opacity: 0 },
      { scrollTrigger: globalInovation, duration: 1, delay: i * 0.2, y: 0, opacity: 1 },
    )
  })
})
</script>
