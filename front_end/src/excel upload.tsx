import NavBar from './components/nav_bar'
import './excel upload.css'

function App() {
  return (
    <div className="excel-bg">
      <NavBar />
      <div className="excel-center">
        <div className="excel-content">
          <div className="excel-upload-box">
            <img src="/upload-icon.svg" alt="Upload Icon" className="excel-upload-icon" />
            <p className="excel-upload-title">Upload Icon</p>
            <p className="excel-upload-desc">Drag and drop file or<br />click to upload</p>
          </div>
          <div className="excel-instructions">
            <h2>Upload Instructions for data file</h2>
            <p>Insert upload instructions here. Follow these instructions:</p>
            <ol>
              <li>Instruction one do this</li>
              <li>Instruction two do that</li>
              <li>Instruction three do this</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="excel-actions">
        <button className="excel-remove-btn">Remove File 🗑️</button>
        <button className="excel-analyse-btn">Analyse ▶️</button>
      </div>
    </div>
  )
}

export default App
