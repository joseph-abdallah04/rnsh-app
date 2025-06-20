import React, { useState } from 'react';
import './upload_page.css';

function VideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      const isMp4 =
        uploadedFile.type === 'video/mp4' ||
        uploadedFile.name.toLowerCase().endsWith('.mp4');
      if (isMp4) {
        setFile(uploadedFile);
        setError(null);
      } else {
        setFile(null);
        setError('Please upload a valid MP4 video file.');
      }
    }
  };

  return (
    <div className="upload-bg">
      <div className="upload-center">
        <div className="upload-content">
          <div className="upload-box">
            <p>Drag and drop MP4 video file or<br />click to upload</p>
            <label className="file-upload-btn">
              Choose file
              <input
                type="file"
                accept=".mp4,video/mp4"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </label>
            {file && <span className="file-name">{file.name}</span>}
            {error && <span style={{ color: 'red', marginTop: '1rem' }}>{error}</span>}
          </div>
          <div className="instructions-box">
            <h2>Upload Instructions for MP4 Video File</h2>
            <p>Insert upload instructions here. Follow these instructions:</p>
            <ol>
              <li>Instruction one for MP4 video</li>
              <li>Instruction two for MP4 video</li>
              <li>Instruction three for MP4 video</li>
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

export default VideoUpload;