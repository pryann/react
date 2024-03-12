import { useEffect } from 'react'
import './App.css'
import { youTubeAPI, defaultParams } from './apis/youtubeAPI'
import SearcBar from './components/SearcBar'

function App() {
  async function searchVideos(q) {
    const result = await youTubeAPI.get('/search', {
      params: {
        ...defaultParams,
        q,
      },
    })
    console.log(result)
  }

  useEffect(() => {
    // searchVideos('Reactjs')
  }, [])

  return (
    <>
      <header className="container">
        <SearcBar onSearchVideos={searchVideos} />
      </header>
    </>
  )
}

export default App
