import './App.css'
import InputField from './components/InputField'

function App() {
  function handleInput(value) {
    console.log(value)
  }

  return (
    <div>
      <InputField onInput={handleInput} />
    </div>
  )
}

export default App
