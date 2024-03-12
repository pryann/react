import PropTypes from 'prop-types'
import { useState } from 'react'

SearcBar.propTypes = {
  onSearchVideos: PropTypes.func.isRequired,
}

export default function SearcBar({ onSearchVideos }) {
  const [query, setQuery] = useState('')

  // function onChange(event) {
  //   const {value} = event.target
  //   setQuery(value)
  // }

  function handleSubmit(event) {
    event.preventDefault()
    onSearchVideos(query)
  }

  return (
    <div className="my-2">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-gorup d-flex justify-content-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="form-control form-control-lg w-50"
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  )
}
