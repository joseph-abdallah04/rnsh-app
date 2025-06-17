import React from "react";
import NavBar from "./components/nav_bar";

function VideoUpload() {
    return (
        <div className="video-upload-page">
            <NavBar />

            <div className="main-box">
                <div className="upload-video-box">
                    <img src="/upload-icon.svg" alt="Upload Icon" className="upload-icon" />
                    <p>Drag and drop file or</p> 
                    <p>click to upload</p>
                </div>

                <div className="instructions-box">
                    <h2>Instructions for Data File Input</h2>
                    <p>Insert instructions for upload here. Follow these instructions:</p>
                    <ol>
                        <li>1. Instruction</li>
                        <li>2. Instruction</li>                    </ol>
                </div>
            </div>

            <div className="actions-box">
                /* <button className="removeBtn">Remove File</button> */
                <button className="analyseBtn">Analyse</button>
            </div>
        </div>
    )
}

export default VideoUpload;