<template>
  <div class="w-full">
    <!-- header start  -->
    <div class="w-full flex justify-start items-center text-3xl font-bold px-4 py-6">
      <h1 id="service">Our directions</h1>
    </div>
    <!-- header end  -->
    <!-- contents start  -->
    <div class="w-full grid md:grid-cols-3 grid-cols-1 gap-4">
      <!-- card start  -->
      <div
        id="service"
        class="p-4 m-4 hover:bg-primary hover:border-primary/30 transition-all h-64 border border-gray-300 outline outline-gray-300 rounded-3xl"
      >
        <div class="flex flex-col gap-5">
          <div id="service" class="w-full flex items-center gap-2">
            <BrainCircuit class="w-8 h-8 text-red-600" />
            <h1 class="text-2xl font-bold">AI Products</h1>
          </div>
          <div id="service">
            <p class="text-xs text-gray-400">
              We develop AI-powered solutions that automate communication, customer support, and
              internal operations. Our tools reduce operational costs, speed up response time, and
              unlock new opportunities for scaling your business.
            </p>
          </div>
        </div>
      </div>
      <!-- card end  -->
      <!-- card start  -->
      <div
        id="service"
        class="p-4 m-4 hover:bg-primary hover:border-primary/30 transition-all h-64 border border-gray-300 outline outline-gray-300 rounded-3xl"
      >
        <div class="flex flex-col gap-5">
          <div id="service" class="w-full flex items-center gap-2">
            <Globe class="w-8 h-8 text-blue-600" />
            <h1 class="text-2xl font-bold">Websites</h1>
          </div>
          <div id="service">
            <p class="text-xs text-gray-400">
              We start by understanding your goals and needs. We discuss your project's scope,
              target audience and desired features. This helps us create a detailed plan for the
              project, outlining tasks, timelines and resources.
            </p>
          </div>
        </div>
      </div>
      <!-- card end  -->
      <!-- card start  -->
      <div
        id="service"
        class="p-4 m-4 hover:bg-primary hover:border-primary/30 transition-all h-64 border border-gray-300 outline outline-gray-300 rounded-3xl"
      >
        <div class="flex flex-col gap-5">
          <div id="service" class="w-full flex items-center gap-2">
            <TabletSmartphone class="w-8 h-8 text-orange-400" />
            <h1 class="text-2xl font-bold">Mobile Apps</h1>
          </div>
          <div id="service">
            <p class="text-xs text-gray-400">
              We start by understanding your goals and needs. We discuss your project's scope,
              target audience and desired features. This helps us create a detailed plan for the
              project, outlining tasks, timelines, and resources.
            </p>
          </div>
        </div>
      </div>
      <!-- card end  -->
      <!-- card start  -->
      <div
        id="service"
        class="p-4 m-4 hover:bg-primary hover:border-primary/30 transition-all h-64 border border-gray-300 outline outline-gray-300 rounded-3xl"
      >
        <div class="flex flex-col gap-5">
          <div id="service" class="w-full flex items-center gap-2">
            <ShoppingBag class="w-8 h-8 text-green-400" />
            <h1 class="text-2xl font-bold">E-commerce</h1>
          </div>
          <div id="service">
            <p class="text-xs text-gray-400">
              We specialize in building fully customized online stores and marketplaces that not
              only generate substantial profits but also seamlessly integrate into people's everyday
              lives. Our e-commerce solutions enable thousands of users to browse and purchase a
              diverse array of products. From purchasing phones at Irshad Electronics to shopping
              for stylish Sisley and Benetton clothes on MyBrands, ordering food from Simpla.az,
              jewellery from Resm, and conveniently paying bills via E-pul, our platforms have
              become an integral part of people's daily routines.
            </p>
          </div>
        </div>
      </div>
      <!-- card end  -->
      <!-- card start  -->
      <div
        id="service"
        class="p-4 m-4 hover:bg-primary hover:border-primary/30 transition-all h-64 border border-gray-300 outline outline-gray-300 rounded-3xl"
      >
        <div class="flex flex-col gap-5">
          <div id="service" class="w-full flex items-center gap-2">
            <Workflow class="w-8 h-8 text-purple-400" />
            <h1 class="text-2xl font-bold">Business Automation</h1>
          </div>
          <div id="service">
            <p class="text-xs text-gray-400">
              We help implement technologies that automate routine and complex tasks, freeing up
              your time and resources for more strategic priorities. These solutions enable you to
              focus on business growth, improve efficiency, and achieve your goals.
            </p>
          </div>
        </div>
      </div>
      <!-- card end  -->
      <!-- card start  -->
      <div
        id="service"
        class="p-4 m-4 hover:bg-primary hover:border-primary/30 transition-all h-64 border border-gray-300 outline outline-gray-300 rounded-3xl"
      >
        <div class="flex flex-col gap-5">
          <div id="service" class="w-full flex items-center gap-2">
            <HeartPlus class="w-8 h-8 text-red-400" />
            <h1 class="text-2xl font-bold">Product Support</h1>
          </div>
          <div id="service">
            <p class="text-xs text-gray-400">
              We help implement technologies that automate routine and complex tasks, freeing up
              your time and resources for more strategic priorities. These solutions enable you to
              focus on business growth, improve efficiency, and achieve your goals.
            </p>
          </div>
        </div>
      </div>
      <!-- card end  -->
    </div>
    <!-- contents end  -->
  </div>
</template>

<script setup lang="ts">
import {
  BrainCircuit,
  Globe,
  TabletSmartphone,
  ShoppingBag,
  Workflow,
  HeartPlus,
} from 'lucide-vue-next'
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const servicesSelector = gsap.utils.toArray('#service')
  servicesSelector.forEach((services: any, i) => {
    gsap.fromTo(
      services,
      { y: 50, opacity: 0 },
      { scrollTrigger: services, duration: 1, delay: i * 0.2, y: 0, opacity: 1 },
    )
  })
})
</script>
