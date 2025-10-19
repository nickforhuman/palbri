<template>
  <!-- header start  -->
  <div class="py-16 flex justify-start items-center">
    <h1 id="project" class="text-5xl p-6">
      Our maked <br />
      <span class="underline text-primary font-bold">inovative</span> projects.
    </h1>
  </div>
  <!-- header end  -->
  <!-- portfolio  -->
  <PortfolioComponent />
</template>

<script setup lang="ts">
import PortfolioComponent from '@/components/PortfolioComponent.vue'
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const projectsSelector = gsap.utils.toArray('#project')
  projectsSelector.forEach((projects: any, i) => {
    gsap.fromTo(
      projects,
      { y: 50, opacity: 0 },
      { scrollTrigger: projects, duration: 1, delay: i * 0.2, y: 0, opacity: 1 },
    )
  })
})
</script>
