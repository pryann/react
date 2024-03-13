import axios from 'axios'

// baseURL comes from .env file in real life

const apiClient = axios.create({
  baseURL: 'http://localhost:3005',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default apiClient
