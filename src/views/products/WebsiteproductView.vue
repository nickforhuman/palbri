<template>
  <div class="w-full">
    <!-- header start  -->
    <div class="w-full flex flex-col justify-center items-center gap-3">
      <div id="aiproduct" class="flex justify-center items-center">
        <Globe class="w-12 h-12 text-blue-600" />
      </div>
      <h1 id="aiproduct" class="text-5xl font-bold">Websites</h1>
      <h1 id="aiproduct" class="text-3xl text-primary font-bold tracking-widest">PALBRI</h1>
    </div>
    <!-- header end  -->
    <!-- about ai product start  -->
    <div
      class="grid gap-4 md:grid-cols-2 grid-cols-1 py-16 border-t border-b border-t-gray-200 border-b-gray-200 m-4"
    >
      <div>
        <h1 class="text-2xl font-bold text">Brief information</h1>
      </div>
      <div>
        <p class="text-xs text-gray-400 font-bold">
          We start by understanding your goals and needs. We discuss your project's scope, target
          audience and desired features. This helps us create a detailed plan for the project,
          outlining tasks, timelines and resources.
        </p>
      </div>
    </div>
    <!-- about ai product end  -->
    <!-- aiproducts component start  -->
    <h1 class="text-2xl font-bold m-2">Completed projects</h1>
    <WebsiteproductComponent />
    <!-- ai products component end  -->
  </div>
</template>

<script setup lang="ts">
import { Globe } from 'lucide-vue-next'
import WebsiteproductComponent from '@/components/products/WebsiteproductComponent.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const aiproductSelector = gsap.utils.toArray('#aiproduct')
  aiproductSelector.forEach((aiproducts: any, i) => {
    gsap.fromTo(
      aiproducts,
      { y: 50, opacity: 0 },
      { scrollTrigger: aiproducts, duration: 1, delay: i * 0.2, y: 0, opacity: 1 },
    )
  })
})
</script>
