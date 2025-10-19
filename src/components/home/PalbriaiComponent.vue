<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full grid md:block md:grid-cols-2 grid-cols-1 relative">
      <video id="palbri-ai" class="w-full p-2 object-cover rounded-2xl relative" controls>
        <source type="video/mp4" src="@/assets/contents/video/palbri.mp4" />
      </video>
      <!-- more about bar start -->

      <div
        class="w-96 flex flex-col justify-around gap-6 px-4 py-10 bg-secondary z-10 md:absolute relative top-5 right-5 rounded-2xl"
      >
        <h1 id="palbri-ai" class="mx-4 text-2xl font-bold">Palbri.ai</h1>
        <p id="palbri-ai" class="mx-4 text-gray-400 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil maiores sequi aliquam
          eveniet vero ullam porro alias quisquam modi molestias officia accusantium quae, rerum
          ipsum debitis ad adipisci? Cum.
        </p>
        <p id="palbri-ai" class="mx-4 text-gray-400 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iure aperiam exercitationem
          aspernatur quo esse minima optio error harum sed dolore itaque quisquam inventore id,
          fugit laboriosam illo at! Asperiores?
        </p>
        <div id="palbri-ai" class="w-full flex justify-center items-center py-2">
          <router-link
            to="/"
            class="w-72 px-8 py-2 bg-primary rounded-2xl shadow-xl hover:text-primary hover:bg-secondary transition-all flex justify-center items-center"
          >
            Explorer the project
          </router-link>
        </div>
      </div>
      <!-- more about bar end  -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const palbriaiSelector = gsap.utils.toArray('#palbri-ai')
  palbriaiSelector.forEach((palbriai: any, i) => {
    gsap.fromTo(
      palbriai,
      { y: 50, opacity: 0 },
      { scrollTrigger: palbriai, duration: 1, delay: i * 0.1, y: 0, opacity: 1 },
    )
  })
})
</script>
