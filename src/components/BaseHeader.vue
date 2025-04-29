<template>
  <Navbar/>
  <header class="bg-white shadow p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="text-2xl font-bold text-blue-500">SOS Uzbekistan</div>

      <!-- Mobile Toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-2xl transition duration-300">
        <i :class="isOpen ? 'fas fa-times rotate-90' : 'fas fa-bars'" class="text-gray-700"></i>
      </button>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-6 text-gray-700 font-medium">
        <RouterLink
          v-for="(label, path) in navLinks"
          :key="path"
          :to="`/${locale}/${path}`"
          class="hover:text-blue-600"
          :class="{ 'text-blue-600 font-bold underline': isActive(path) }"
        >
          {{ $t(label) }}
        </RouterLink>
      </nav>

      <!-- Language Switcher -->
      <div class="relative ml-4">
        <button @click="showDropdown = !showDropdown" class="border rounded px-2 py-1 text-sm bg-white shadow">
          {{ locale.toUpperCase() }} ⌄
        </button>
        <ul v-if="showDropdown" class="absolute right-0 mt-1 w-28 bg-white border shadow-lg rounded z-50 overflow-hidden">
          <li
            v-for="lang in langStore.supportedLocales"
            :key="lang"
            @click="changeLanguage(lang)"
            class="px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
          >
            <span class="text-xl">
              <template v-if="lang === 'uz'">🇺🇿</template>
              <template v-else-if="lang === 'ru'">🇷🇺</template>
              <template v-else-if="lang === 'en'">🇬🇧</template>
            </span>
            <span>{{ lang.toUpperCase() }}</span>
          </li>

        </ul>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="isOpen" class="absolute top-16 left-0 w-full bg-white shadow-lg z-10 flex flex-col items-start px-6 py-4 md:hidden">
        <RouterLink
          v-for="(label, path) in navLinks"
          :key="path"
          :to="`/${locale}/${path}`"
          class="block w-full py-2 border-b text-gray-700 font-medium"
          :class="{ 'text-blue-600 font-bold': isActive(path) }"
          @click="isOpen = false"
        >
          {{ $t(label) }}
        </RouterLink>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLangStore } from '@/store/lang'
import { storeToRefs } from 'pinia'

import Navbar from '@/components/Navbar.vue'

const isOpen = ref(false)
const showDropdown = ref(false)
const route = useRoute()
const router = useRouter()

const langStore = useLangStore()
const { locale } = storeToRefs(langStore) as {
  locale: Ref<'uz' | 'en' | 'ru'>
}

const navLinks = {
  '': 'home',
  'about': 'about',
  'donate': 'donate',
  'contact': 'contact'
} as const

function changeLanguage(lang: string) {
  const currentPath = route.fullPath.split('/').slice(2).join('/')
  langStore.setLocale(lang as any)
  showDropdown.value = false
  router.push(`/${lang}/${currentPath}`)
}

function isActive(path: string) {
  return route.path === `/${locale.value}/${path}`
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateY(-100%);
}
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
