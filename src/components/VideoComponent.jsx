import React from 'react';
import './VideoComponent.css'
import { Link } from 'react-router-dom';

const VideoComponent = ({ videoSrc, heading, paragraph }) => {
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto' }}
      />
      <div className='video-text-container'>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <Link to="/contactus">
        <button className='button-yoga-contact'>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default VideoComponent;
