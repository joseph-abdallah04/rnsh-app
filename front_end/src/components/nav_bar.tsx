import React from 'react'

interface NavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function NavBar({ activeTab, onTabChange }: NavBarProps) {
  return (
    <div className="navbar">
      <button 
        className={`nav-btn ${activeTab === 'excel' ? 'active' : ''}`}
        onClick={() => onTabChange('excel')}
      >
        Excel Upload
      </button>

      <button 
        className={`nav-btn ${activeTab === 'video' ? 'active' : ''}`}
        onClick={() => onTabChange('video')}
      >
        Video Upload
      </button>

      <button 
        className={`nav-btn ${activeTab === 'faqs' ? 'active' : ''}`}
        onClick={() => onTabChange('faqs')}
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
  )
}

export default NavBar

