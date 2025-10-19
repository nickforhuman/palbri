<template>
  <div id="contact" class="w-full flex bg-primary justify-center items-center py-8">
    <form
      id="contact"
      class="max-w-3xl w-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6 m-4 grid gap-6 md:grid-cols-2"
    >
      <h2
        id="contact"
        class="md:col-span-2 text-4xl font-semibold text-slate-800 dark:text-slate-100"
      >
        Əlaqə məlumatları
      </h2>

      <!-- Full name -->
      <div class="flex flex-col">
        <label id="contact" class="text-sm font-medium text-slate-700 dark:text-slate-200">
          * Full name
        </label>
        <input
          id="contact"
          type="text"
          placeholder="Alikhan Alizade"
          class="mt-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:bg-slate-800 dark:text-slate-100"
        />
      </div>

      <!-- Company name -->
      <div class="flex flex-col">
        <label id="contact" class="text-sm font-medium text-slate-700 dark:text-slate-200">
          * Company name
        </label>
        <input
          id="contact"
          type="text"
          placeholder="Company name"
          class="mt-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:bg-slate-800 dark:text-slate-100"
        />
      </div>

      <!-- Email -->
      <div class="flex flex-col">
        <label id="contact" class="text-sm font-medium text-slate-700 dark:text-slate-200">
          * Email
        </label>
        <input
          id="contact"
          type="email"
          placeholder="example@gmail.com"
          class="mt-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:bg-slate-800 dark:text-slate-100"
        />
      </div>

      <!-- Phone or messenger -->
      <div class="flex flex-col">
        <label id="contact" class="text-sm font-medium text-slate-700 dark:text-slate-200">
          * Phone or any messenger
        </label>
        <input
          id="contact"
          type="text"
          placeholder="+994 50 000 00 00 / Telegram"
          class="mt-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:bg-slate-800 dark:text-slate-100"
        />
      </div>

      <!-- Message -->
      <div class="md:col-span-2 flex flex-col">
        <label id="contact" class="text-sm font-medium text-slate-700 dark:text-slate-200">
          Message (optional)
        </label>
        <textarea
          id="contact"
          rows="4"
          placeholder="Layihə haqqında qısa təsvir..."
          class="mt-2 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:bg-slate-800 dark:text-slate-100"
        ></textarea>
      </div>

      <!-- Buttons -->
      <div class="md:col-span-2 flex items-center justify-between gap-4">
        <div id="contact" class="flex items-center gap-3">
          <button
            type="submit"
            class="inline-flex items-center px-6 py-2.5 rounded-xl bg-primary/70 hover:bg-primary text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          >
            Göndər
          </button>
          <button
            type="reset"
            class="px-5 py-2 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:border-slate-700 transition"
          >
            Sıfırla
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
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
