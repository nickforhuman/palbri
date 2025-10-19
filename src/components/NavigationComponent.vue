<template>
  <div
    id="navigation"
    class="w-full h-15 bg-secondary/20 backdrop-blur-md fixed flex inset-0 justify-between items-center"
  >
    <div class="m-4 flex gap-4">
      <router-link to="/">
        <h1 id="navigation" class="text-2xl text-primary font-bold">PALBRI</h1>
      </router-link>
      <ul id="navigation" class="hidden md:flex justify-center items-center gap-2 text-xs">
        <li>
          <router-link
            class="border-b text-gray-400 border-b-gray-400 hover:text-primary hover:border-b-primary transition-all"
            to="/services"
            >Services</router-link
          >
        </li>

        <li>
          <router-link
            class="border-b text-gray-400 border-b-gray-400 hover:text-primary hover:border-b-primary transition-all"
            to="/projects"
            >Projects</router-link
          >
        </li>

        <li>
          <router-link
            class="border-b text-gray-400 border-b-gray-400 hover:text-primary hover:border-b-primary transition-all"
            to="/contact"
            >Contacts</router-link
          >
        </li>
      </ul>
    </div>
    <div
      id="navigation"
      @click="isMenuToggle"
      class="flex m-4 gap-2 justify-center items-center px-4 py-1 rounded-3xl bg-secondary/30 backdrop-blur-md border border-gray-300 hover:bg-primary transition-all cursor-pointer"
    >
      <Ellipsis class="w-4 h-4" />
      Menu
    </div>
  </div>
  <!-- navigation contents  -->
  <transition name="slide-up">
    <div v-if="isMenu" class="fixed inset-0 overflow-hidden w-full h-screen bg-black z-40">
      <div class="relative w-full h-screen">
        <!-- navigation menu top bar start -->
        <div id="navigation" class="w-full flex justify-between p-2">
          <div>
            <h1 class="text-xl font-bold text-primary">PALBRI</h1>
          </div>
          <div>
            <ul class="flex gap-2">
              <li
                class="flex text-xs hover:border-black hover:bg-primary hover:text-black transition-all cursor-pointer justify-center items-center w-6 h-6 rounded-full p-4 border border-gray-400 text-secondary"
              >
                Az
              </li>
              <li
                class="flex text-xs hover:border-black hover:bg-primary hover:text-black transition-all cursor-pointer justify-center items-center w-6 h-6 rounded-full p-4 border border-gray-400 text-secondary"
              >
                En
              </li>
              <li
                @click="isMenuToggle"
                class="flex gap-1 justify-center items-center text-secondary hover:border-black hover:bg-primary cursor-pointer hover:text-black transition-all py-1 px-4 border border-gray-400 rounded-3xl"
              >
                <X class="w-4 h-4" /> close
              </li>
            </ul>
          </div>
        </div>
        <!-- navigation menu top bar end -->
        <!-- navigation search bar start  -->
        <div id="navigation" class="flex justify-center items-center">
          <form class="relative w-full flex justify-center items-center" action="">
            <input
              class="px-12 text-center focus:outlone-none py-4 w-full m-4 border-b border-b-gray-400 text-secondary"
              placeholder="Search"
              type="search"
            />
            <button type="button">
              <SearchCode class="w-6 h-6 text-gray-300 absolute right-6" />
            </button>
          </form>
        </div>
        <!-- navigation search bar end  -->
        <!-- menu contents start  -->
        <div class="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 place-items-center">
          <!-- base links start  -->
          <div>
            <h1 id="navigation" class="text-xs text-gray-400 m-2">MENU</h1>
            <ul class="text-secondary flex flex-col gap-3">
              <li id="navigation">
                <router-link
                  class="py-1 m-2 border-b-2 border-b-gray-400 hover:border-b-primary transition-all"
                  to="/services"
                  >Services</router-link
                >
              </li>
              <li id="navigation">
                <router-link
                  class="py-1 m-2 border-b-2 border-b-gray-400 hover:border-b-primary transition-all"
                  to="/projects"
                  >Projects</router-link
                >
              </li>
              <li id="navigation">
                <router-link
                  class="py-1 m-2 border-b-2 border-b-gray-400 hover:border-b-primary transition-all"
                  to="/about"
                  >About</router-link
                >
              </li>
              <li id="navigation">
                <router-link
                  class="py-1 m-2 border-b-2 border-b-gray-400 hover:border-b-primary transition-all"
                  to="/contact"
                  >Contact</router-link
                >
              </li>
            </ul>
            <!-- social media start  -->
            <ul class="flex justify-center items-center gap-2 py-10">
              <li id="navigation">
                <a href="/"><Instagram class="w-8 h-8 text-[#E1306C]" /></a>
              </li>
              <li id="navigation">
                <a href="/"><Youtube class="w-8 h-8 text-red-600" /></a>
              </li>
              <li id="navigation">
                <a href="/"><Linkedin class="w-8 h-8 text-blue-400" /></a>
              </li>
              <li id="navigation">
                <a href=""><Github class="w-8 h-8 text-secondary" /></a>
              </li>
            </ul>
            <!-- social media end  -->
          </div>
          <!-- base links end  -->
          <!-- directions start -->
          <div>
            <h1 id="navigation" class="text-xs text-gray-400 m-2">OUR DIRECTIONS</h1>
            <ul>
              <li id="navigation">
                <router-link
                  to="/products/aiproducts"
                  class="px-2 py-2 gap-2 text-secondary flex justify-start items-center"
                  ><BrainCircuit class="w-6 h-6 text-red-600" /> AI Products</router-link
                >
              </li>
              <li id="navigation">
                <router-link
                  to="/products/websites"
                  class="px-2 py-2 gap-2 text-secondary flex justify-start items-center"
                >
                  <Globe class="w-6 h-6 text-blue-600" /> Websites</router-link
                >
              </li>
              <li id="navigation">
                <router-link
                  to="/products/mobileapps"
                  class="px-2 py-2 gap-2 text-secondary flex justify-start items-center"
                >
                  <TabletSmartphone class="w-6 h-6 text-orange-400" /> Mobile Apps</router-link
                >
              </li>
              <li id="navigation">
                <router-link
                  to="/products/ecommerce"
                  class="px-2 py-2 gap-2 text-secondary flex justify-start items-center"
                >
                  <ShoppingBag class="w-6 h-6 text-green-400" /> E-commerce</router-link
                >
              </li>
              <li id="navigation">
                <router-link
                  to="/"
                  class="px-2 py-2 gap-2 text-secondary flex justify-start items-center"
                >
                  <Workflow class="w-6 h-6 text-purple-400" /> Business Automation</router-link
                >
              </li>
              <li id="navigation">
                <router-link
                  to="/"
                  class="px-2 py-2 gap-2 text-secondary flex justify-start items-center"
                >
                  <HeartPlus class="w-6 h-6 text-red-400" /> Products Support</router-link
                >
              </li>
            </ul>
          </div>
          <!-- directions end  -->
          <!-- contact button bar start  -->
          <div id="navigation" class="flex justify-center items-center">
            <button type="button" class="px-6 py-2 bg-primary rounded-3xl">Contact</button>
          </div>
          <!-- contact button end  -->
        </div>
        <!-- menu content end  -->
        <!-- info start  -->
        <div class="flex justify-start flex-col items-center w-full py-6 gap-2">
          <h1 id="navigation" class="text-xs text-gray-400 m-2">Info</h1>
          <ul class="w-full flex justify-center items-center md:flex-row flex-col gap-4">
            <li>
              <a
                class="w-full px-4 py-2 border border-gray-400 rounded-3xl text-secondary font-bold"
                href="tel:994706062448"
                >+99470 (606) 24 48</a
              >
            </li>
            <li>
              <a
                class="w-full px-4 py-2 border border-gray-400 rounded-3xl text-secondary font-bold"
                href="mailto:info@example.com"
                >info@example.com</a
              >
            </li>
          </ul>
          <div class="flex justify-center items-center py-5">
            <p class="text-xs text-primary">&copy; all right reserved. Code by Inal Garali.</p>
          </div>
        </div>
        <!-- info end  -->
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  X,
  SearchCode,
  BrainCircuit,
  Globe,
  TabletSmartphone,
  ShoppingBag,
  Workflow,
  HeartPlus,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  Ellipsis,
} from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const isMenu = ref(false)

const isMenuToggle = () => {
  isMenu.value = !isMenu.value
}
onMounted(() => {
  const navigationSelector = gsap.utils.toArray('#navigation')
  navigationSelector.forEach((navigations: any, i) => {
    gsap.fromTo(
      navigations,
      { y: 50, opacity: 0 },
      { scrollTrigger: navigations, duration: 1, delay: i * 0.1, y: 0, opacity: 1 },
    )
  })
})
</script>
