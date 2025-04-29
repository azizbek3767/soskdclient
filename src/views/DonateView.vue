<template>
  <section class="min-h-screen bg-gray-50 px-6 py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
        {{ $t('donateTitle') }}
      </h2>
      <p class="text-lg text-gray-700 mb-10 leading-relaxed">
        {{ $t('donateSubtitle') }}
      </p>

      <!-- Donation options -->
      <div class="flex flex-col md:flex-row justify-center gap-6">
        <button
          v-for="amount in donationAmounts"
          :key="amount"
          @click="donate(amount)"
          class="bg-deep-pink-500 hover:bg-deep-pink-600 text-white font-semibold py-3 px-6 rounded-full text-lg transition"
        >
          {{ amount }} $
        </button>
      </div>

      <!-- Custom amount -->
      <div class="mt-10">
        <input
          v-model="customAmount"
          type="number"
          placeholder="Enter custom amount"
          class="border rounded-full py-2 px-5 w-64 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          @click="donate(customAmount)"
          class="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          {{ $t('donateNow') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/store/lang'

const langStore = useLangStore()
const { locale } = storeToRefs(langStore)

const donationAmounts = [10, 25, 50, 100]
const customAmount = ref<number | null>(null)

function donate(amount: number | null) {
  if (amount && amount > 0) {
    alert(`Thank you for donating ${amount} USD! ❤️`)
    // TODO: Redirect to real payment gateway or form later
  } else {
    alert('Please enter a valid amount')
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
