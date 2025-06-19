import NavBar from './components/nav_bar'
import './excel_upload.css'
import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState<File | null>(null);

  // Example handler for file upload (replace with your actual logic)
  // not sure what this added- but for the upload linking file functionality 
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="excel-bg">
      <NavBar />
      <div className="excel-center">
        <div className="excel-content">
          <div className="excel-upload-box">
          
            <p className="excel-upload-desc">Drag and drop file or<br />click to upload</p>
            <input type="file" onChange={handleFileUpload} />
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

      <div className="excel-floating-actions"> 
        {file && (
          <button className="excel-remove-btn" onClick={() => setFile(null)}>
            Remove File
          </button>
        )}
        <button
          className={`excel-analyse-btn${!file ? ' disabled' : ''}`}
          disabled={!file}
        >
          Analyse
        </button>
      </div>
    </div>
  );
}

export default App
