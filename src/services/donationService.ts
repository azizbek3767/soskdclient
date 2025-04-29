import api from './axios'

export const submitDonation = (data: { name: string; amount: number }) =>
  api.post('/donations', data)

// in any component
// import { submitDonation } from '@/services/donationService'
// await submitDonation({ name: 'Azizbek', amount: 50000 })