import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PasswordState from './context/PasswordState.jsx'

createRoot(document.getElementById('root')).render(
    <PasswordState>
        <App />
    </PasswordState>,
)
