import React, { useState } from 'react';
import App from '../excel_upload';
import VideoUpload from '../video_upload';

interface NavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function NavBar({ activeTab, onTabChange }: NavBarProps) {
  console.log('NavBar rendered with activeTab:', activeTab); // Debug log

  const handleClick = (tab: string) => {
    console.log('Button clicked for tab:', tab); // Debug log
    onTabChange(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'excel':
        return <App />;
      case 'video':
        return <VideoUpload />;
    }
  };

  return (
    <div className="navbar" style={{ 
      display: 'flex', 
      gap: '10px', 
      padding: '10px',
      backgroundColor: '#333'
    }}>
      <button
        className={`nav-btn ${activeTab === 'excel' ? 'active' : ''}`}
        onClick={() => handleClick('excel')}
        style={{
          padding: '10px 20px',
          backgroundColor: activeTab === 'excel' ? '#007bff' : '#666',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Excel Upload
      </button>

      <button
        className={`nav-btn ${activeTab === 'video' ? 'active' : ''}`}
        onClick={() => handleClick('video')}
        style={{
          padding: '10px 20px',
          backgroundColor: activeTab === 'video' ? '#007bff' : '#666',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Video Upload
      </button>

      <button
        className={`nav-btn ${activeTab === 'faqs' ? 'active' : ''}`}
        onClick={() => handleClick('faqs')}
        style={{
          padding: '10px 20px',
          backgroundColor: activeTab === 'faqs' ? '#007bff' : '#666',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        FAQs
      </button>

      {renderContent()}
    </div>
  );
}

export default NavBar;
