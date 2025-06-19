import React, { useState } from 'react';
import './upload_page.css';

function CSVUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      const isCSV = uploadedFile.type === 'text/csv' || uploadedFile.name.endsWith('.csv');
      if (isCSV) {
        setFile(uploadedFile);
        setError(null);
      } else {
        setFile(null);
        setError('Please upload a valid CSV file.');
      }
    }
  };

  return (
    <div className="upload-bg">
      <div className="upload-center">
        <div className="upload-content">
          <div className="upload-box">
            <p>Drag and drop CSV file or<br />click to upload</p>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
            {error && <span style={{ color: 'red', marginTop: '1rem' }}>{error}</span>}
          </div>
          <div className="instructions-box">
            <h2>Upload Instructions for CSV File</h2>
            <p>Insert upload instructions here. Follow these instructions:</p>
            <ol>
              <li>Instruction one for CSV</li>
              <li>Instruction two for CSV</li>
              <li>Instruction three for CSV</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="upload-actions">
        {file && (
          <button className="remove-btn" onClick={() => setFile(null)}>
            Remove File
          </button>
        )}
        <button
          className={`analyse-btn${!file ? ' disabled' : ''}`}
          disabled={!file}
        >
          Analyse
        </button>
      </div>
    </div>
  );
}

export default CSVUpload;
