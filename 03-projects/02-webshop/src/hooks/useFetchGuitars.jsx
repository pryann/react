import { useState } from 'react'
import apiClient from '../utils/apiClient'

export default function useFetchGuitars() {
  const [guitars, setGuitars] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  async function fetchGuitars() {
    try {
      setLoading(true)
      const response = await apiClient.get('http://localhost:3005/guitars')
      if (response.status !== 200) throw new Error('HTTP Error')
      setGuitars(response.data)
      setSuccess(true)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return { guitars, loading, error, success, fetchGuitars }
}
