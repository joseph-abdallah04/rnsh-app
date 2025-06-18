import React from "react";
import './video_upload.css';

function VideoUpload() {
    return (
        <div className="video-upload-page">
            
            <div className="main-box">
                <div className="upload-video-box">
                    <p>Drag and drop file or</p> 
                    <p>click to upload</p>
                </div>

                <div className="instructions-box">
                    <h2>Instructions for Data File Input</h2>
                    <p>Insert instructions for upload here. Follow these instructions:</p>
                    <ol>
                        <li>Instruction</li>
                        <li>Instruction</li>
                    </ol>
                </div>
            </div>

            <div className="actions-box">
                <button className="analyseBtn">Analyse</button>
            </div>
        </div>
    )
}

export default VideoUpload;