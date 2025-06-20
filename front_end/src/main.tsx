import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CSVUpload from './csv_upload.tsx'
import VideoUpload from './video_upload.tsx';
import SettingsPage from './settings-page.tsx';
import NavBar from './components/nav_bar.tsx';

function App() {
  const [activeTab, setActiveTab] = useState('csv');

  const rendercontent = () => {
    switch (activeTab) {
      case 'csv': return <CSVUpload />;
      case 'video': return <VideoUpload />;
      case 'settings': return <SettingsPage />;
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