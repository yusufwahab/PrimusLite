import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './Dashboard.jsx'
import Header from './Header.jsx'
import App from './App.jsx'
// import AddButton from './AddButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
