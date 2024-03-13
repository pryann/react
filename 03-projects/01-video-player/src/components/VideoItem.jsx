import PropTypes from 'prop-types'

VideoItem.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  onSelectVideo: PropTypes.func.isRequired,
}

export default function VideoItem({ video, onSelectVideo }) {
  return (
    <div
      role="button"
      tabIndex="0"
      className="container p-1 video"
      onKeyUp={(e) => e.key === 'Enter' && onSelectVideo()}
      onClick={onSelectVideo}>
      <div className="row">
        <div className="col-6">
          <img
            className="img-fluid"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>
        <div className="col-6">
          <h3 className="h6">{video.snippet.title}</h3>
        </div>
      </div>
    </div>
  )
}
