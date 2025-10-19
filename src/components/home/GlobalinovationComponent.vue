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
    <!-- map start  -->
    <div class="w-full flex justify-center items-center">
      <div class="relative flex justify-center items-end w-full">
        <img
          id="globalInovation"
          src="@/assets/contents/inovation/worldmap.png"
          class="outline-4 outline-primary/50 object-cover bg-primary rounded-3xl"
          alt=""
        />
        <div>
          <ul id="globalInovation" class="flex gap-2 flex-col absolute bottom-5 right-5">
            <li
              class="rounded-3xl hover:bg-primary transition-all cursor-pointer px-4 py-2 italic font-bold bg-secondary"
            >
              🇦🇿 Azerbaijan
            </li>
            <li
              class="rounded-3xl hover:bg-primary transition-all cursor-pointer px-4 py-2 italic font-bold bg-secondary"
            >
              🌐 Global
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- map end  -->
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
