import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExcelUpload from './excel_upload.tsx'
import VideoUpload from './video_upload.tsx';
import NavBar from './components/nav_bar.tsx';

function App() {
  const [activeTab, setActiveTab] = useState('excel');

  const rendercontent = () => {
    switch (activeTab) {
      case 'excel': return <ExcelUpload />;
      case 'video': return <VideoUpload />;
      case 'faqs': return ;
      case 'settings': return;
      default: return <App />;
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