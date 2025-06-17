import './excel upload.css'

function App() {
  return (
    <div className="cover-bg">
      <div className="navbar">
        <button className="nav-btn active">📄 Excel Upload</button>
        <button className="nav-btn">🎬 Video Upload</button>
        <button className="nav-btn">💬 FAQs</button>
        <span className="settings-icon">⚙️</span>
      </div>
      <div className="cover-content">
        <div className="upload-box">
          <div className="upload-area">
            <span className="upload-icon">⬆️</span>
            <p>Drag and drop file or<br />click to upload</p>
          </div>
        </div>
        <div className="instructions">
          <h2>Upload Instructions for data file</h2>
          <p>Insert upload instructions here. Follow these instructions:</p>
          <ol>
            <li>Instruction one do this</li>
            <li>Instruction two do that</li>
            <li>Instruction three do this</li>
          </ol>
        </div>
      </div>
      <div className="cover-actions">
        <button className="remove-btn">Remove File 🗑️</button>
        <button className="analyse-btn">Analyse ▶️</button>
      </div>
    </div>
  )
}
export default App
