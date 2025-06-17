import React from 'react';
import './video_analysis.css';
import NavBar from './components/nav_bar';

function VideoAnalysis() {

  return (
    <div className='video-analysis-page'>
      <NavBar />
      <div className="main-box">
        
        <div className="sidebar">
          <h3>Frames List</h3>
          // list the frames here
          <button className='exportBtn'>Export Frames</button>
        </div>

        <div className='video-section'>
          <div className='measure-toolbar'>
          </div>

          <div className='video-display'>

          </div>

        </div>
        
      </div>
    </div>
  );
}

export default VideoAnalysis;