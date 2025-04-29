<template>
  <!-- <BaseSlider /> -->
  <h1 class="text-center text-3xl font-bold my-8">New Swiper.js Slider</h1>
    <SwiperSlider />
  <section class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
    <h1 class="text-4xl md:text-6xl font-bold text-blue-500 mb-4">
      {{ $t('homeTitle') }}
    </h1>
    <p class="text-lg text-gray-700 mb-6 max-w-2xl">
      {{ $t('homeSubtitle') }}
    </p>
    <RouterLink
      :to="`/${locale}/donate`"
      class="bg-deep-pink-500 hover:bg-deep-pink-600 text-white font-semibold py-3 px-6 rounded-full transition"
    >
      {{ $t('donateNow') }}
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/store/lang'
import BaseSlider from '@/components/BaseSlider.vue'
import SwiperSlider from '@/components/SwiperSlider.vue'

const langStore = useLangStore()
const { locale } = storeToRefs(langStore)
</script>

<style scoped>
/* Deep pink from your branding secondary color */
.bg-deep-pink-500 {
  background-color: #de5a6c;
}
.hover\:bg-deep-pink-600:hover {
  background-color: #c94a5a;
}
</style>
