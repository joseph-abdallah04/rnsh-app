import NavBar from './components/nav_bar'
import './excel upload.css'

function App() {
  return (
    <div className="cover-bg">
      <NavBar />
      <div className="cover-content">
        <div className="upload-box">
          <div className="upload-area">
            <img src="/upload-icon.svg" alt="Upload Icon" className="upload-icon" />
            <p>Drag and drop file or<br /> click to upload</p>
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
