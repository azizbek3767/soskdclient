import axios from 'axios'

const api = axios.create({
  baseURL: 'https://your-api.sos.uz/api', // change this when backend is live
  headers: {
    'Content-Type': 'application/json'
  }
})

// Optional: Interceptors for auth or error logging
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error.response || error.message)
    return Promise.reject(error)
  }
)

export default api