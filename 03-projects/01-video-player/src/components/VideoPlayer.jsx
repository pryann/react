import PropTypes from 'prop-types'

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string,
      playlistId: PropTypes.string,
    }).isRequired,
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default function VideoPlayer({ video }) {
  const baseVideoUrl = 'https://youtube.com/embed/'
  const { videoId, playlistId } = video.id
  const videoUrl = videoId
    ? `${baseVideoUrl}${videoId}`
    : `${baseVideoUrl}videoseries?list=${playlistId}`

  return (
    <div className="video-player">
      <div className="ratio ratio-16x9">
        <iframe src={videoUrl} title="Video Player"></iframe>
      </div>
      <div className="mt-3">
        <h2 className="h4">{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}
