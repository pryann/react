import PropTypes from 'prop-types'

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onUpdateValue: PropTypes.func.isRequired,
}

export default function InputField({
  value,
  name,
  id,
  type,
  label,
  onUpdateValue,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onUpdateValue}
      />
    </div>
  )
}

// const InputField = () => {}

// InputField.propTypes = {}

// export default InputField
