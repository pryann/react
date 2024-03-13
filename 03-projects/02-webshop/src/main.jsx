import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GuitarsProvider from './components/GuitarsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GuitarsProvider>
      <App />
    </GuitarsProvider>
  </React.StrictMode>
)
