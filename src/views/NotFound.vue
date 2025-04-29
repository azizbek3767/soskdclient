<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
    <h1 class="text-6xl font-extrabold text-blue-500">404</h1>
    <h2 class="mt-4 text-2xl font-semibold text-gray-800">Oops! Page not found</h2>
    <p class="mt-2 text-gray-600">The page you are looking for does not exist or has been moved.</p>

    <RouterLink
      :to="`/${locale}/`"
      class="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
    >
      ← Back to Home
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/store/lang'

// Get current locale to return user to their home page in correct language
const langStore = useLangStore()
const { locale } = storeToRefs(langStore)
</script>
