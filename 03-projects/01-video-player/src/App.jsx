import { useEffect, useState } from 'react'
import './App.css'
import { youTubeAPI, defaultParams } from './apis/youtubeAPI'
import SearcBar from './components/SearcBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'

export default function App() {
  const [videos, setVideos] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)

  async function searchVideos(q) {
    try {
      const result = await youTubeAPI.get('/search', {
        params: {
          ...defaultParams,
          q,
        },
      })
      const videosResult = result.data.items
      setVideos(videosResult)
      setSelectedVideo(videosResult[0])
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    searchVideos('Reactjs')
  }, [])

  return (
    <>
      <header className="container">
        <SearcBar onSearchVideos={searchVideos} />
      </header>
      <main>
        <div className="container">
          {videos && (
            <div className="row">
              <div className="col-lg-8">
                <VideoPlayer video={selectedVideo} />
              </div>
              <div className="col-lg-4">
                <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
