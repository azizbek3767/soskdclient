<template>
    <div class="donation-box">
      <h2>Make a Donation</h2>
      <form @submit.prevent="submitDonation">
        <input v-model="donorName" placeholder="Your Name" />
        <input v-model.number="amount" type="number" placeholder="Amount (UZS)" />
        <button type="submit">Donate</button>
      </form>
      <p v-if="success">Thank you, {{ donorName }}! Your donation of {{ amount }} UZS has been received.</p>
    </div>
  </template>
  
  <script lang="ts" setup>
 import api from '@/services/axios'
import { ref } from 'vue'

const donorName = ref('')
const amount = ref<number | null>(null)
const success = ref(false)

const submitDonation = async () => {
  if (!donorName.value || !amount.value) return

  try {
    await api.post('/donations', {
      name: donorName.value,
      amount: amount.value
    })
    success.value = true
  } catch (error) {
    console.error('Donation failed:', error)
  }
}

  </script>
  
  <style scoped>
  .donation-box {
    max-width: 400px;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 10px;
    background-color: #fefefe;
  }
  input {
    display: block;
    margin: 10px 0;
    padding: 8px;
    width: 100%;
  }
  button {
    background-color: var(--primary, #00abec);
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    cursor: pointer;
  }
  </style>
  