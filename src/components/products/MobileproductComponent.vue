<template>
  <div class="w-full flex justify-center items-center">
    <div class="grid gap-2 m-2 md:grid-cols-2 grid-cols-1">
      <!-- cards start  -->
      <div id="aiproduct" class="p-2">
        <div>
          <img
            src="@/assets/contents/video/intro.gif"
            class="w-full rounded-2xl object-cover"
            alt=""
          />
        </div>
        <div class="m-2">
          <h1 class="text-lg">Projects for BP Azerbaijan</h1>
          <p class="text-gray-400 text-xs">
            PalBri successfully performed more than 300 projects of various categories for BP
            Azerbaijan
          </p>
        </div>
      </div>
      <!-- cards end  -->
      <!-- cards start  -->
      <div id="aiproduct" class="p-2">
        <div>
          <img
            src="@/assets/contents/video/intro.gif"
            class="w-full rounded-2xl object-cover"
            alt=""
          />
        </div>
        <div class="m-2">
          <h1 class="text-lg">Projects for BP Azerbaijan</h1>
          <p class="text-gray-400 text-xs">
            PalBri successfully performed more than 300 projects of various categories for BP
            Azerbaijan
          </p>
        </div>
      </div>
      <!-- cards end  -->
      <!-- cards start  -->
      <div id="aiproduct" class="p-2 w-full col-span-full">
        <div>
          <img
            src="@/assets/contents/video/intro.gif"
            class="w-full rounded-2xl object-cover"
            alt=""
          />
        </div>
        <div class="m-2">
          <h1 class="text-lg">Projects for BP Azerbaijan</h1>
          <p class="text-gray-400 text-xs">
            PalBri successfully performed more than 300 projects of various categories for BP
            Azerbaijan
          </p>
        </div>
      </div>
      <!-- cards end  -->
      <!-- cards start  -->
      <div id="aiproduct" class="p-2">
        <div>
          <img
            src="@/assets/contents/video/intro.gif"
            class="w-full rounded-2xl object-cover"
            alt=""
          />
        </div>
        <div class="m-2">
          <h1 class="text-lg">Projects for BP Azerbaijan</h1>
          <p class="text-gray-400 text-xs">
            PalBri successfully performed more than 300 projects of various categories for BP
            Azerbaijan
          </p>
        </div>
      </div>
      <!-- cards end  -->
      <!-- cards start  -->
      <div id="aiproduct" class="p-2">
        <div>
          <img
            src="@/assets/contents/video/intro.gif"
            class="w-full rounded-2xl object-cover"
            alt=""
          />
        </div>
        <div class="m-2">
          <h1 class="text-lg">Projects for BP Azerbaijan</h1>
          <p class="text-gray-400 text-xs">
            PalBri successfully performed more than 300 projects of various categories for BP
            Azerbaijan
          </p>
        </div>
      </div>
      <!-- cards end  -->
    </div>
  </div>
</template>
<script setup lang="ts">
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
