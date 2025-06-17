import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './excel upload.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
