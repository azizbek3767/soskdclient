<template>
  <section class="min-h-screen bg-white px-6 py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
        {{ $t('contactTitle') }}
      </h2>
      <p class="text-lg text-gray-700 mb-10 leading-relaxed">
        {{ $t('contactSubtitle') }}
      </p>

      <!-- Contact Form -->
      <form @submit.prevent="submitForm" class="space-y-6 text-left">
        <div>
          <label class="block text-gray-600 mb-2">{{ $t('yourName') }}</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label class="block text-gray-600 mb-2">{{ $t('yourEmail') }}</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label class="block text-gray-600 mb-2">{{ $t('yourMessage') }}</label>
          <textarea
            v-model="form.message"
            required
            rows="5"
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-deep-pink-500 hover:bg-deep-pink-600 text-white font-semibold py-3 px-8 rounded-full transition w-full"
        >
          {{ $t('sendMessage') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  if (form.name && form.email && form.message) {
    alert('Thank you! Your message has been sent. ✉️')
    form.name = ''
    form.email = ''
    form.message = ''
    // TODO: Later connect to backend/email API
  } else {
    alert('Please fill in all fields.')
  }
}
</script>

<style scoped>
.bg-deep-pink-500 {
  background-color: #de5a6c;
}
.hover\:bg-deep-pink-600:hover {
  background-color: #c94a5a;
}
</style>
