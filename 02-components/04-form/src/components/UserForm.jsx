import { useState } from 'react'
import InputField from './InputField'

export default function UserForm() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
  }

  const [formData, setFormData] = useState(initialState)

  // state: le lesz cserélve egy új objektumra, nem mutálom azaz nem módosítom
  // let state = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  // }

  // state = {
  //   firstName: 'Gergő',
  //   lastName: '',
  //   email: '',
  // }

  function updateValue(event) {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(JSON.stringify(formData))
    setFormData(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="First name:"
        name="firstName"
        id="firstName"
        type="text"
        value={formData.firstName}
        onUpdateValue={updateValue}
      />
      <InputField
        label="Last name:"
        name="lastName"
        id="lastName"
        type="text"
        value={formData.lastName}
        onUpdateValue={updateValue}
      />
      <InputField
        label="Email address:"
        name="email"
        id="email"
        type="email"
        value={formData.email}
        onUpdateValue={updateValue}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
