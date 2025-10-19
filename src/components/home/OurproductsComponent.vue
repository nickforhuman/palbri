<template>
  <div class="w-full flex flex-col">
    <!-- header start  -->
    <div class="p-6 flex flex-col justify-center items-start gap-2">
      <h1 id="product" class="md:text-5xl text-2xl font-bold">Our Products</h1>
      <p id="product" class="text-xs text-gray-400">
        We create products that make the lives of hundreds of people easier.
      </p>
    </div>
    <!-- header end  -->
    <!-- products container start  -->
    <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 place-items-center">
      <!-- product start  -->
      <div
        id="product"
        v-for="productItem in productItems"
        :key="productItem.id"
        class="flex justify-center items-center m-2"
      >
        <a :href="productItem.link">
          <img :src="productItem.image" class="rounded-2xl" alt="" />
        </a>
      </div>
      <!-- product end  -->
    </div>
    <!-- products container end  -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const productItems = ref([
  {
    id: 1,
    image: new URL('@/assets/contents/products/app.jpg', import.meta.url).href,
    link: '#',
  },
  {
    id: 2,
    image: new URL('@/assets/contents/products/app.jpg', import.meta.url).href,
    link: '#',
  },
  {
    id: 3,
    image: new URL('@/assets/contents/products/app.jpg', import.meta.url).href,
    link: '#',
  },
  {
    id: 4,
    image: new URL('@/assets/contents/products/app.jpg', import.meta.url).href,
    link: '#',
  },
  {
    id: 5,
    image: new URL('@/assets/contents/products/app.jpg', import.meta.url).href,
    link: '#',
  },

  {
    id: 6,
    image: new URL('@/assets/contents/products/app.jpg', import.meta.url).href,
    link: '#',
  },
])
onMounted(() => {
  const productsSelector = gsap.utils.toArray('#product')
  productsSelector.forEach((product: any, i) => {
    gsap.fromTo(
      product,
      { y: 50, opacity: 0 },
      { scrollTrigger: product, duration: 1, delay: i * 0.1, y: 0, opacity: 1 },
    )
  })
})
</script>
