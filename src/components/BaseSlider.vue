<template>
    <div
      class="relative w-full overflow-hidden bg-white group"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @touchstart="startTouch"
      @touchmove="onTouch"
      @touchend="endTouch"
    >
      <!-- Slides -->
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}vw`
        }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-screen h-[80vh] relative flex items-center justify-start"
        >
          <!-- Background Image -->
          <img :src="slide.image" class="absolute inset-0 w-full h-full object-cover" />
  
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
  
          <!-- Caption (F-layout with blue semi-background) -->
          <div class="relative z-10 pl-8 md:pl-24 py-8 bg-blue-500 bg-opacity-50 rounded-r-2xl text-white max-w-2xl">
            <h2 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">{{ slide.title }}</h2>
            <p class="text-lg md:text-xl">{{ slide.subtitle }}</p>
          </div>
        </div>
      </div>
  
      <!-- Progress Bar -->
      <div class="absolute bottom-0 left-0 h-1 bg-blue-200 w-full z-20">
        <div
          class="h-full bg-blue-500 transition-all duration-500"
          :style="{ width: `${(currentIndex + 1) / slides.length * 100}%` }"
        ></div>
      </div>
  
      <!-- Navigation Arrows -->
      <button @click="prevSlide" class="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white bg-opacity-80 p-3 rounded-full hover:bg-blue-100 z-30">
        <i class="fas fa-chevron-left text-blue-600 text-lg"></i>
      </button>
      <button @click="nextSlide" class="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white bg-opacity-80 p-3 rounded-full hover:bg-blue-100 z-30">
        <i class="fas fa-chevron-right text-blue-600 text-lg"></i>
      </button>
  
      <!-- Dots/Indicators -->
      <div class="absolute bottom-6 w-full flex justify-center gap-3 z-30">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-4 h-4 rounded-full border-2"
          :class="index === currentIndex ? 'bg-blue-500 border-blue-500 scale-125' : 'bg-white border-gray-400'"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  // SLIDES
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
  
  const currentIndex = ref(0)
  let interval: number | undefined
  
  function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }
  
  function prevSlide() {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
  }
  
  function goToSlide(index: number) {
    currentIndex.value = index
  }
  
  // AUTO SLIDE
  function startAutoSlide() {
    interval = setInterval(nextSlide, 6000)
  }
  function pauseAutoSlide() {
    clearInterval(interval)
  }
  
  onMounted(() => {
    startAutoSlide()
  })
  
  onUnmounted(() => {
    pauseAutoSlide()
  })
  
  // DRAG/TOUCH SWIPE SUPPORT
  let startX = 0
  let isDragging = false
  
  function startDrag(event: MouseEvent) {
    isDragging = true
    startX = event.clientX
  }
  
  function onDrag(event: MouseEvent) {
    if (!isDragging) return
    const diff = startX - event.clientX
    if (diff > 50) {
      nextSlide()
      isDragging = false
    } else if (diff < -50) {
      prevSlide()
      isDragging = false
    }
  }
  
  function endDrag() {
    isDragging = false
  }
  
  function startTouch(event: TouchEvent) {
    startX = event.touches[0].clientX
  }
  
  function onTouch(event: TouchEvent) {
    const diff = startX - event.touches[0].clientX
    if (diff > 50) {
      nextSlide()
      startX = event.touches[0].clientX
    } else if (diff < -50) {
      prevSlide()
      startX = event.touches[0].clientX
    }
  }
  
  function endTouch() {
    // No special action needed
  }
  </script>
  
  <style scoped>
  /* Smoothness already handled by Tailwind classes */
  </style>
  