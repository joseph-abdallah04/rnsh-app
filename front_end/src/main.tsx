import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './excel upload.tsx'

import NavBar from './components/nav_bar.tsx'
import VideoUpload from './video_upload.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
