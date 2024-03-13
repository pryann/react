import axios from 'axios'

const YOUTUBE_API_KEY = 'AIzaSyCw1Uc6MWnDG8-8G-wDKqfMpl3kiaqgCuo'

export const defaultParams = {
  part: 'snippet',
  maxResults: 12,
  key: YOUTUBE_API_KEY,
}

export const youTubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
