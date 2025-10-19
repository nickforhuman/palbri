<template>
  <!-- header start  -->
  <div class="flex justify-start items-center py-4">
    <h1 id="about" class="text-6xl font-bold w-164 m-4">Global Agency of Innovations</h1>
  </div>
  <!-- header end  -->
  <div class="w-full grid md:grid-cols-2 grid-cols-1">
    <div class="hidden md:block"></div>
    <div class="flex flex-col gap-6 p-4 shadow-sm rounded-3xl m-2 text-lg">
      <p id="about">
        The agency helps leaders to build and transform products, brand experiences and customer
        relationships.
      </p>
      <p id="about">
        Hundreds of mega brands, including Bolkart, Birkart, Kommesk and Centras have been created
        from scratch in the studio. You come across them in your daily life.
      </p>
    </div>
  </div>
  <!-- introduction video start  -->
  <div class="flex justify-center items-center py-6">
    <video id="about" controls autoplay muted class="w-full object-cover p-4 rounded-4xl">
      <source src="@/assets/contents/video/palbri.mp4" />
    </video>
  </div>
  <!-- introduction video end  -->
  <!-- services  -->
  <ServicesComponent />
</template>

<script setup lang="ts">
import ServicesComponent from '@/components/ServicesComponent.vue'
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const aboutSelector = gsap.utils.toArray('#about')
  aboutSelector.forEach((aboutitems: any, i) => {
    gsap.fromTo(
      aboutitems,
      { y: 50, opacity: 0 },
      { scrollTrigger: aboutitems, duration: 1, delay: i * 0.1, y: 0, opacity: 1 },
    )
  })
})
</script>
