<template>
  <footer class="w-full flex justify-center items-center">
    <div id="footer" class="w-full min-h-104 px-6 py-6 m-2 rounded-3xl bg-black">
      <div class="w-full py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div>
          <ul id="footer" class="md:flex hidden flex-col gap-5 text-secondary">
            <li>
              <router-link
                to="/services"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >Services</router-link
              >
            </li>
            <li>
              <router-link
                to="/projects"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >Projects</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                to="/contact"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >Contacts</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <h1 id="footer" class="text-xs text-gray-200 sm:hidden block py-4">Services</h1>
          <ul id="footer" class="flex md:flex-col flex-wrap md:flex-nowrap gap-5 text-secondary">
            <li>
              <router-link
                to="/products/aiproducts"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >AI Products</router-link
              >
            </li>
            <li>
              <router-link
                to="/products/websites"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >Websites</router-link
              >
            </li>
            <li>
              <router-link
                to="/products/mobileapps"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >Mobile Apps</router-link
              >
            </li>
            <li>
              <router-link
                to="/products/ecommerce"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >E-commerce</router-link
              >
            </li>

            <li>
              <router-link
                to="/"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >Branding and Design</router-link
              >
            </li>

            <li>
              <router-link
                to="/"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >Communications</router-link
              >
            </li>

            <li>
              <router-link
                to="/"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >Digital Marketing</router-link
              >
            </li>

            <li>
              <router-link
                to="/"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >Business Automation</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <h1 id="footer" class="text-xs text-gray-200 sm:hidden block py-4">Info</h1>

          <ul id="footer" class="flex flex-col gap-5 text-secondary">
            <li>
              <a
                href="tel:+994515555555"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >+994 51 (555) 55 55</a
              >
            </li>
            <li>
              <a
                href="mailto:info@example.com"
                class="px-4 py-2 rounded-3xl border border-gray-500 hover:bg-black hover:border-black hover:text-primary transition-all"
                >info@example.com</a
              >
            </li>
          </ul>
        </div>
        <div>
          <ul id="footer" class="flex flex-col gap-5 w-full md:items-end items-center py-4">
            <li>
              <button
                class="px-6 py-3 md:w-auto w-72 rounded-3xl bg-primary hover:bg-secondary transition-all cursor-pointer"
              >
                Contacts
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- footer bottom bar start -->
      <div
        id="footer"
        class="w-full gap-2 place-items-center grid md:grid-cols-2 grid-cols-1 py-4 border-t border-t-secondary text-secondary"
      >
        <h1 class="md:text-md text-xs">&copy; Palbri all right reserved. code by Inal Garali</h1>

        <ul class="flex justify-center items-center gap-2">
          <li>
            <a href=""><Instagram class="text-[#E1306C]" /></a>
          </li>
          <li>
            <a href=""><Youtube class="text-red-600" /></a>
          </li>
          <li>
            <a href=""><Linkedin class="text-blue-400" /></a>
          </li>
          <li>
            <a href=""><Github class="text-secondary" /></a>
          </li>
        </ul>
      </div>
      <!-- footer bottom bar end  -->
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Youtube, Linkedin, Github } from 'lucide-vue-next'
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const footerSelector = gsap.utils.toArray('#footer')
  footerSelector.forEach((footers: any, i) => {
    gsap.fromTo(
      footers,
      { y: 50, opacity: 0 },
      { scrollTrigger: footers, duration: 1, delay: i * 0.1, y: 0, opacity: 1 },
    )
  })
})
</script>
