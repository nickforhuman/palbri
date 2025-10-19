<template>
  <div class="w-full">
    <!-- contact form start -->
    <ContactformComponent />
    <!-- contact form end  -->
    <div class="grid gap-3 md:grid-cols-2 grid-cols-1">
      <!-- card start  -->
      <div id="contact" class="m-2 p-4 border border-gray-400 rounded-2xl">
        <!-- card header start  -->
        <div id="contact" class="w-full px-4 py-4 border-b border-b-gray-400">
          <h1>🇹🇷 Turkey, Eskishehir</h1>
        </div>
        <!-- card header end  -->
        <div id="contact" class="flex flex-col m-2">
          <h1 class="text-xs text-gray-400">Contact phone</h1>
          <a class="text-md" href="tel:905514691636">+90 (551) 469 16 36</a>
        </div>
        <div id="contact" class="flex flex-col m-2">
          <h1 class="text-xs text-gray-400">Contact email</h1>
          <a class="text-md" href="mailto:info@example.com">info@example.com</a>
        </div>
      </div>
      <!-- card end  -->
      <!-- card start  -->
      <div id="contact" class="m-2 p-4 border border-gray-400 rounded-2xl">
        <!-- card header start  -->
        <div id="contact" class="w-full px-4 py-4 border-b border-b-gray-400">
          <h1>🇦🇿 Azerbaijan, Baku</h1>
        </div>
        <!-- card header end  -->
        <div id="contact" class="flex flex-col m-2">
          <h1 class="text-xs text-gray-400">Contact phone</h1>
          <a class="text-md" href="tel:905514691636">+994 70 (606) 24 48</a>
        </div>
        <div id="contact" class="flex flex-col m-2">
          <h1 class="text-xs text-gray-400">Contact email</h1>
          <a class="text-md" href="mailto:info@example.com">info@example.com</a>
        </div>
      </div>
      <!-- card end  -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactformComponent from '@/components/ContactformComponent.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const contactSelector = gsap.utils.toArray('#contact')
  contactSelector.forEach((contacts: any, i) => {
    gsap.fromTo(
      contacts,
      { y: 50, opacity: 0 },
      { scrollTrigger: contacts, duration: 1, delay: i * 0.1, y: 0, opacity: 1 },
    )
  })
})
</script>
