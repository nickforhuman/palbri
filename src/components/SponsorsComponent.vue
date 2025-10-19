<template>
  <div class="w-full">
    <div class="md:text-3xl text-2xl m-2 font-bold">
      <h1 id="sponsor">
        Helping leaders to create and transform products, brand <br />
        experiences, and customer relationships.
      </h1>
    </div>
    <div class="flex justify-center items-center flex-wrap gap-8 py-6">
      <a id="sponsor" href="#" v-for="SponsorItem in SponsorItems" :key="SponsorItem.id">
        <img :src="SponsorItem.image" class="w-36 rounded-xl" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const SponsorItems = ref([
  {
    id: 1,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
  {
    id: 2,
    image: new URL('@/assets/contents/sponsors/2.png', import.meta.url).href,
  },
  {
    id: 3,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
  {
    id: 4,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
  {
    id: 5,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
  {
    id: 6,
    image: new URL('@/assets/contents/sponsors/2.png', import.meta.url).href,
  },
  {
    id: 7,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
  {
    id: 8,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
  {
    id: 9,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },

  {
    id: 10,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
  {
    id: 11,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
  {
    id: 12,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },

  {
    id: 11,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
  {
    id: 12,
    image: new URL('@/assets/contents/sponsors/1.png', import.meta.url).href,
  },
])
onMounted(() => {
  const sponsorSelector = gsap.utils.toArray('#sponsor')
  sponsorSelector.forEach((sponsor: any, i) => {
    gsap.fromTo(
      sponsor,
      { y: 50, opacity: 0 },
      { scrollTrigger: sponsor, duration: 1, delay: i * 0.2, y: 0, opacity: 1 },
    )
  })
})
</script>
