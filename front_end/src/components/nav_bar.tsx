import React, { useState } from 'react';
import ExcelUpload from '../excel_upload';
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
        return <ExcelUpload />;
      case 'video':
        return <VideoUpload />;
    }
  };

  return (
    <div className="navbar">
      <button
        className={`nav-btn ${activeTab === 'excel' ? 'active' : ''}`}
        onClick={() => handleClick('excel')}
      >
        Excel Upload
      </button>

      <button
        className={`nav-btn ${activeTab === 'video' ? 'active' : ''}`}
        onClick={() => handleClick('video')}
      >
        Video Upload
      </button>

      <button
        className={`nav-btn ${activeTab === 'faqs' ? 'active' : ''}`}
        onClick={() => handleClick('faqs')}
      >
        FAQs
      </button>
      
      <button
        className={`nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
        onClick={() => onTabChange('settings')}
      >
        Settings
      </button>
    </div>
  );
}

export default NavBar;
