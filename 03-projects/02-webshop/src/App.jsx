import './App.css'
import MainNavigation from './components/MainNavigation'
import GuitarList from './components/GuitarList'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'
import useFetchGuitars from './hooks/useFetchGuitars'
import 'react-toastify/dist/ReactToastify.min.css'

export default function App() {
  const { fetchGuitars, error, loading, success } = useFetchGuitars()

  useEffect(() => {
    fetchGuitars()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (error) {
      toast('Failed to fetch guitars', { type: 'error' })
    }
  }, [error])

  return (
    <>
      <MainNavigation />
      <h1 className="text-center">Guitars</h1>
      {loading && <p>Loading...</p>}
      {success && <GuitarList />}
      <ToastContainer />
    </>
  )
}
