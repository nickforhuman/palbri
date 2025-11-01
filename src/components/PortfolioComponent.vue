<template>
  <div class="w-full">
    <h1 id="portfolio" class="text-3xl w-full p-2 font-bold">
      We have the largest portfolio in the country with more than 500 <br />
      projects in all the main industries.
    </h1>
    <div class="grid gap-2 m-2 md:grid-cols-2 grid-cols-1">
      <!-- cards start  -->
      <a href="https://woofood.onrender.com" target="_blank">
        <div id="portfolio" class="p-2">
          <div>
            <img
              src="@/assets/contents/video/products/woopizza/desktopwoopizza.gif"
              class="w-full rounded-2xl object-cover"
              alt=""
            />
          </div>
          <div class="m-2">
            <h1 class="text-lg">Projects for Woofood</h1>
            <p class="text-gray-400 text-xs">
              InalGarali successfully performed more than 1 projects of various categories for
              woofood
            </p>
          </div>
        </div>
      </a>
      <!-- cards end  -->
      <!-- cards start  -->
      <a href="https://cartierman.onrender.com/">
        <div id="portfolio" class="p-2">
          <div>
            <img
              src="@/assets/contents/video/products/cartierman/cartiermandesktop.gif"
              class="w-full rounded-2xl object-cover"
              alt=""
            />
          </div>
          <div class="m-2">
            <h1 class="text-lg">Projects for Cartierman</h1>
            <p class="text-gray-400 text-xs">
              InalGarali successfully performed more than 1 projects of various categories for
              cartierman
            </p>
          </div>
        </div>
      </a>
      <!-- cards end  -->
      <!-- cards start  -->
      <div id="portfolio" class="p-2 w-full col-span-full">
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
            IGstudio successfully performed more than 300 projects of various categories for BP
            Azerbaijan
          </p>
        </div>
      </div>
      <!-- cards end  -->
      <!-- cards start  -->
      <div id="portfolio" class="p-2">
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
            IGstudio successfully performed more than 300 projects of various categories for BP
            Azerbaijan
          </p>
        </div>
      </div>
      <!-- cards end  -->
      <!-- cards start  -->
      <div id="portfolio" class="p-2">
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
            IGstudio successfully performed more than 300 projects of various categories for BP
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
  const portfolioSelector = gsap.utils.toArray('#portfolio')
  portfolioSelector.forEach((portfolio: any, i) => {
    gsap.fromTo(
      portfolio,
      { y: 50, opacity: 0 },
      { scrollTrigger: portfolio, duration: 1, delay: i * 0.1, y: 0, opacity: 1 },
    )
  })
})
</script>
