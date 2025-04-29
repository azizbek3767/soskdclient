<template>
    <div class="relative w-full overflow-hidden bg-white">
  
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        navigation
        class="w-full h-[80vh]"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
          class="relative flex items-center justify-start w-screen h-[80vh]"
        >
          <!-- Background Image -->
          <img :src="slide.image" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
  
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
  
          <!-- Caption (F-layout with blue semi-background) -->
          <div class="relative z-10 pl-8 md:pl-24 py-8 bg-blue-500 bg-opacity-50 rounded-r-2xl text-white max-w-2xl">
            <h2 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">{{ slide.title }}</h2>
            <p class="text-lg md:text-xl">{{ slide.subtitle }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Autoplay } from 'swiper/modules'
  
  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  
  const slides = [
    {
      image: '/images/children1.jpg',
      title: 'Bright Futures Begin Here',
      subtitle: 'Supporting children towards a better tomorrow'
    },
    {
      image: '/images/family1.jpg',
      title: 'A Loving Home for Every Child',
      subtitle: 'Creating families for children without parental care'
    },
    {
      image: '/images/education1.jpg',
      title: 'Education Changes Lives',
      subtitle: 'Unlocking opportunities for future leaders'
    }
  ]
  </script>
  
  <style scoped>
  /* Optional if you want customizations */
  </style>
  