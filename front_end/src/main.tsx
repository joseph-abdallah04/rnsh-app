import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NavBar from './components/nav_bar.tsx'
import VideoUpload from './video_upload.tsx'
import ExcelUpload from './excel_upload.tsx'

function MainApp() {
  const [activeTab, setActiveTab] = useState('excel');

  const renderContent = () => {
    switch (activeTab) {
      case 'excel':
        return <ExcelUpload />;
      case 'video':
        return <VideoUpload />;
      case 'faqs':
        return <div>FAQs content coming soon...</div>;
      case 'settings':
        return <div>Settings content coming soon...</div>;
      default:
        return <ExcelUpload />;
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ position: 'sticky', zIndex: 1000, padding: '1rem' }}>
        <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>    

      {renderContent()}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)