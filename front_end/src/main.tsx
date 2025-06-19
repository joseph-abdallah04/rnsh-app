import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CSVUpload from './csv_upload.tsx'
import VideoUpload from './video_upload.tsx';
import NavBar from './components/nav_bar.tsx';

function App() {
  const [activeTab, setActiveTab] = useState('csv');

  const rendercontent = () => {
    switch (activeTab) {
      case 'csv': return <CSVUpload />;
      case 'video': return <VideoUpload />;
      case 'settings': return <div>Settings content coming soon...</div>;
      default: return <CSVUpload />;
    }
  };

  return (
    <div style={{ minHeight: '100vh' }} >
      <div style={{ position: 'sticky', zIndex: 1000, padding: '1rem' }}>
        <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {rendercontent()}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)