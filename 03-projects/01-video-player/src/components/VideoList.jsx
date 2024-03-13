import PropTypes from 'prop-types'
import VideoItem from './VideoItem'

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onSelectVideo: PropTypes.func.isRequired,
}

export default function VideoList({ videos, onSelectVideo }) {
  return (
    <>
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          video={video}
          onSelectVideo={() => onSelectVideo(video)}
        />
      ))}
    </>
  )
}
