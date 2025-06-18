import React, { useState } from 'react';
import NavBar from './components/nav_bar';
import ExcelUpload from './excel_upload';
import VideoUpload from './video_upload';

function App() {
  const [activeTab, setActiveTab] = useState('excel');

  console.log('Current active tab:', activeTab); // Debug log

  const handleTabChange = (tab: string) => {
    console.log('Tab change requested:', tab); // Debug log
    setActiveTab(tab);
  };

  const renderContent = () => {
    console.log('Rendering content for tab:', activeTab); // Debug log
    switch (activeTab) {
      case 'excel':
        return <ExcelUpload />;
      case 'video':
        return <VideoUpload />;
      case 'faqs':
        return <div style={{ padding: '20px', color: 'white', background: '#222', minHeight: '100vh' }}>FAQs content coming soon...</div>;
      default:
        return <ExcelUpload />;
    }
  };

  return (
    <div style={{ background: '#222', minHeight: '100vh' }}>
      <div style={{ padding: '2rem' }}>
        <NavBar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      {renderContent()}
    </div>
  );
}

export default App;