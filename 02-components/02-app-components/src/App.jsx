import './App.css'
import MainNavigation from './components/MainNavigation'
import SiteContent from './components/SiteContent'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { useState } from 'react'

function App() {
  // const title = 'title'
  const [title, setTitle] = useState('Title')

  setTimeout(() => {
    setTitle('New title')
  }, 5000)

  return (
    <>
      <MainNavigation title={title} />
      <SiteHeader />
      <SiteContent />
      <SiteFooter />
    </>
  )
}

export default App
