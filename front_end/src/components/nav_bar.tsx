import React from 'react'

function NavBar() {
  return (
    <div className="navbar">
      <button className="nav-btn active">📄 Excel Upload</button>
      <button className="nav-btn">🎬 Video Upload</button>
      <button className="nav-btn">💬 FAQs</button>
      <span className="settings-icon">⚙️</span>
    </div>
  )
}

export default NavBar

