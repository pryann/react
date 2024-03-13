import './App.css'
import MainNavigation from './components/MainNavigation'
import GuitarList from './components/GuitarList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function App() {
  return (
    <>
      <MainNavigation />
      <h1 className="text-center">Guitars</h1>
      <GuitarList />
      <ToastContainer />
    </>
  )
}
