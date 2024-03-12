import PropTypes from 'prop-types'
import { useState } from 'react'

InputField.propTypes = {
  onInput: PropTypes.func.isRequired,
}

export default function InputField({ onInput }) {
  const [name, setName] = useState('')

  function handleInput(event) {
    const { value } = event.target
    setName(value)
    onInput(value)
  }

  return (
    <input
      type="text"
      name="name"
      id="name"
      value={name}
      onInput={handleInput}
    />
  )
}
