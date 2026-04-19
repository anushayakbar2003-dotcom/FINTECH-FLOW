import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'   // ✅ CHANGE THIS
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)