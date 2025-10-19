<template>
  <div class="grid md:grid-cols-2 grid-cols-1 w-full h-screen">
    <!-- leftside start  -->
    <div
      class="flex flex-col justify-around m-2 gap-4 rounded-3xl p-4 md:p-0 md:bg-secondary bg-primary"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <h1 id="intro_text" class="font-bold text-4xl">We are an ideas and innovation company.</h1>
        <p id="intro_text" class="text-gray-400 text-sm">
          Having 18 years of experience in more than 10 countries, we have created thousands of
          successful projects.
        </p>
        <!-- tags start  -->
        <div class="flex justify-start items-center gap-2 flex-wrap">
          <router-link id="intro_text" to="/">
            <span
              class="flex justify-center items-center bg-gray-100 hover:bg-primary hover:text-secondary transition-all px-4 py-2 rounded-xl"
              >AI Products</span
            >
          </router-link>
          <router-link id="intro_text" to="/">
            <span
              class="flex justify-center items-center bg-gray-100 hover:bg-primary hover:text-secondary transition-all px-4 py-2 rounded-xl"
              >Websites</span
            >
          </router-link>
          <router-link id="intro_text" to="/">
            <span
              class="flex justify-center items-center bg-gray-100 hover:bg-primary hover:text-secondary transition-all px-4 py-2 rounded-xl"
              >Mobile Apps</span
            >
          </router-link>
          <router-link id="intro_text" to="/">
            <span
              class="flex justify-center items-center bg-gray-100 hover:bg-primary hover:text-secondary transition-all px-4 py-2 rounded-xl"
              >E-commerce</span
            >
          </router-link>
          <router-link id="intro_text" to="/">
            <span
              class="flex justify-center items-center bg-gray-100 hover:bg-primary hover:text-secondary transition-all px-4 py-2 rounded-xl"
              >Branding and Design</span
            >
          </router-link>
          <router-link id="intro_text" to="/">
            <span
              class="flex justify-center items-center bg-gray-100 hover:bg-primary hover:text-secondary transition-all px-4 py-2 rounded-xl"
              >Communications</span
            >
          </router-link>
          <router-link id="intro_text" to="/">
            <span class="flex justify-center items-center bg-gray-100 px-4 py-2 rounded-xl"
              >Digital Marketing</span
            >
          </router-link>
          <router-link id="intro_text" to="/">
            <span
              class="flex justify-center items-center bg-gray-100 hover:bg-primary hover:text-secondary transition-all px-4 py-2 rounded-xl"
              >Business Automation</span
            >
          </router-link>
        </div>
        <!-- tags end -->
      </div>
      <!-- intro bottom  -->
      <div id="intro_text" class="flex justify-around items-center">
        <div class="flex justify-center items-center">
          <router-link to="/">
            <img src="@/assets/contents/video/insurance.png" class="h-8" alt="" />
          </router-link>
        </div>
        <div>
          <button
            type="button"
            @click="filmPopupToggle"
            class="text-xs cursor-pointer flex justify-center items-center gap-2"
          >
            <div class="px-2 py-2 rounded-full text-gray-600 bg-gray-200">
              <Play class="w-6 h-6" />
            </div>
            Watch our film
          </button>
        </div>
      </div>
    </div>
    <!-- left side end  -->
    <!-- right side start  -->
    <div class="flex justify-center items-center">
      <div
        id="intro_text"
        class="w-full h-[90%] rounded-2xl m-2 py-10 bg-no-repeat bg-cover bg-center bg-[url('@/assets/contents/video/intro.gif')]"
      ></div>
    </div>
    <!-- right side end  -->
    <!-- watch our film popup start  -->
    <transition name="slide-up">
      <div
        v-if="isFilmPopup"
        class="w-full h-screen inset-0 z-50 flex justify-center items-center fixed overflow-hidden bg-[rgba(0,0,0,0.4)]"
      >
        <div class="bg-secondary w-full h-full m-2 flex justify-center items-center relative">
          <div id="closebtn" class="absolute top-5 right-5">
            <X
              @click="filmPopupToggle"
              class="p-4 w-12 h-12 rounded-full cursor-pointer shadow-xl bg-gray-200"
            />
          </div>
          <div>
            <img src="@/assets/contents/video/intro.gif" class="object-cover w-164" alt="" />
          </div>
        </div>
      </div>
    </transition>
    <!-- watch our film popup end  -->
  </div>
</template>

<script setup lang="ts">
import { Play, X } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const isFilmPopup = ref(false)
const filmPopupToggle = () => {
  isFilmPopup.value = !isFilmPopup.value
}
onMounted(() => {
  const introTextSelector = gsap.utils.toArray('#intro_text')
  introTextSelector.forEach((intro: any, i) => {
    gsap.fromTo(
      intro,
      { y: 50, opacity: 0 },
      { scrollTrigger: intro, duration: 1, delay: i * 0.1, y: 0, opacity: 1 },
    )
  })
})
</script>
