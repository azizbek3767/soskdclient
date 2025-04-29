<template>
  <section class="min-h-screen bg-white px-6 py-16">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      <!-- Left Side (Text) -->
      <div class="flex-1">
        <h2 class="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
          {{ $t('aboutTitle') }}
        </h2>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('aboutDescription') }}
        </p>
        <RouterLink
          :to="`/${locale}/donate`"
          class="bg-deep-pink-500 hover:bg-deep-pink-600 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          {{ $t('supportUs') }}
        </RouterLink>
      </div>

      <!-- Right Side (Image) -->
      <div class="flex-1">
        <img
          src="https://images.unsplash.com/photo-1591035897814-41dc249e0c70?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=600"
          alt="Happy children"
          class="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/store/lang'

const langStore = useLangStore()
const { locale } = storeToRefs(langStore)
</script>

<style scoped>
.bg-deep-pink-500 {
  background-color: #de5a6c;
}
.hover\:bg-deep-pink-600:hover {
  background-color: #c94a5a;
}
</style>
