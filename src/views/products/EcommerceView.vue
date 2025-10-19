<template>
  <div class="w-full">
    <!-- header start  -->
    <div class="w-full flex flex-col justify-center items-center gap-3">
      <div id="aiproduct" class="flex justify-center items-center">
        <ShoppingBag class="w-12 h-12 text-green-400" />
      </div>
      <h1 id="aiproduct" class="text-5xl font-bold">E-commerce</h1>
      <h1 id="aiproduct" class="text-3xl text-primary font-bold tracking-widest">PALBRI</h1>
    </div>
    <!-- header end  -->
    <!-- about ai product start  -->
    <div
      class="grid gap-4 md:grid-cols-2 grid-cols-1 py-16 border-t border-b border-t-gray-200 border-b-gray-200 m-4"
    >
      <div id="aiproduct">
        <h1 class="text-2xl font-bold text">Brief information</h1>
      </div>
      <div>
        <p id="aiproduct" class="text-xs text-gray-400 font-bold">
          We start by understanding your goals and needs. We discuss your project's scope, target
          audience and desired features. This helps us create a detailed plan for the project,
          outlining tasks, timelines and resources.
        </p>
      </div>
    </div>
    <!-- about ai product end  -->
    <!-- expertise start  -->
    <div class="w-full py-6 flex justify-center items-center">
      <div id="aiproduct" class="flex p-2 flex-col justify-center items-center">
        <h1 class="text-5xl font-bold">Technology + Innovation + Market Expertise</h1>
        <p class="text-gray-400 text-xs px-4 py-1 border border-gray-400 rounded-3xl">SERVICES</p>
        <p class="text-xs py-2 text-gray-600">
          You can find more than 50 unique functionalities on our platform that is constantly
          improving according to the latest trends and technologies:
        </p>
      </div>
    </div>
    <!-- expertise end  -->
    <!-- product managment start  -->
    <div class="flex justify-center items-center w-full">
      <div
        class="w-full grid md:grid-cols-2 grid-cols-1 border border-gray-200 m-2 p-2 rounded-3xl"
      >
        <!-- left side start  -->
        <div>
          <h1 id="aiproduct" class="text-3xl m-2 font-bold">Product Management</h1>
          <ul class="flex flex-col">
            <li
              id="aiproduct"
              v-for="projectManagmentItem in projectManagmentItems"
              :key="projectManagmentItem.desc"
              class="flex justify-start items-center m-2 gap-2"
            >
              <BadgeCheck class="w-6 h-6 text-primary" />
              <h1>{{ projectManagmentItem.desc }}</h1>
            </li>
          </ul>
        </div>
        <!-- left side end  -->
        <!-- right side start  -->
        <div id="aiproduct">
          <img
            src="@/assets/contents/products/ecommerce.jpg"
            class="w-full object-cover rounded-3xl p-4"
            alt=""
          />
        </div>
        <!-- right side end  -->
      </div>
    </div>
    <!-- product managment end  -->
    <!-- Shopping & Checkout start  -->
    <div class="flex justify-center items-center w-full">
      <div
        class="w-full grid md:grid-cols-2 grid-cols-1 border border-gray-200 m-2 p-2 rounded-3xl"
      >
        <!-- left side start  -->

        <div id="aiproduct">
          <img
            src="@/assets/contents/products/ecommerceweb.jpg"
            class="w-full object-cover rounded-3xl p-4"
            alt=""
          />
        </div>
        <!-- left side end  -->
        <!-- right side start  -->
        <div>
          <h1 id="aiproduct" class="text-3xl m-2 font-bold">Shopping & Checkout Experience</h1>
          <ul class="flex flex-col">
            <li
              id="aiproduct"
              v-for="shoppingItem in shoppingItems"
              :key="shoppingItem.desc"
              class="flex justify-start items-center m-2 gap-2"
            >
              <BadgeCheck class="w-6 h-6 text-primary" />
              <h1>{{ shoppingItem.desc }}</h1>
            </li>
          </ul>
        </div>

        <!-- right side end  -->
      </div>
    </div>
    <!-- Shopping & Checkout end  -->
    <!-- sponsor start  -->
    <SponsorsComponent />
    <!-- sponsor end  -->
    <!-- aiproducts component start  -->
    <h1 id="aiproduct" class="text-2xl font-bold m-2">Completed projects</h1>
    <EcommerceproductComponent />
    <!-- ai products component end  -->
    <!-- contact us start -->
    <div class="w-full flex justify-center items-center py-4">
      <p class="text-gray-400 text-xs px-4 py-1 border border-gray-400 rounded-3xl">CONTACT</p>
    </div>
    <ContactformComponent />
    <!-- contact us end  -->
  </div>
</template>

<script setup lang="ts">
import { ShoppingBag, BadgeCheck } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EcommerceproductComponent from '@/components/products/EcommerceproductComponent.vue'
import ContactformComponent from '@/components/ContactformComponent.vue'
import SponsorsComponent from '@/components/SponsorsComponent.vue'
gsap.registerPlugin(ScrollTrigger)
const shoppingItems = ref([
  {
    desc: 'Promo code system (discounts and promotions)',
  },
  {
    desc: 'B2B sales module (Wholesale Sales Channel)',
  },
  {
    desc: 'Automatic invoicing system (online invoicing)',
  },
  {
    desc: 'Backorder and Preorder capabilities',
  },
  {
    desc: 'Multiple currency support (AZN, USD, EUR, etc.)',
  },
])
const projectManagmentItems = ref([
  {
    desc: 'Admin Panel (improved management system)',
  },
  {
    desc: 'Responsive site design (mobile, tablet, desktop compatibility)',
  },
  {
    desc: 'Unlimited Product Addition',
  },
  {
    desc: 'Multiootional product (color, size, model options)',
  },
  {
    desc: 'Warehouse module (stock and Supply Management)',
  },
  {
    desc: 'Exercises and Manual for the use of the System',
  },
  {
    desc: 'Popup module (for discount, notification)',
  },
  {
    desc: 'Integrations with ERP and warehouse Program',
  },
  {
    desc: 'Multi-branch Stock Management',
  },
  {
    desc: 'Product rating and feedback system (reviews and ratings)',
  },
  {
    desc: 'Advanced Search Engine and product filters',
  },
  {
    desc: 'Gift Card and gift certificate sale',
  },
  {
    desc: 'Product 360° review and Video promotion',
  },
  {
    desc: 'Landing Page Generator (page creator for campaigns)',
  },
])

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
