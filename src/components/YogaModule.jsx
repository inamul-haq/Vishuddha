import React from 'react';
import './YogaModule.css';
import VideoComponent from './VideoComponent';
import video from '../assets/videos/yoga/4451166-uhd_3840_2160_25fps.mp4';
import video2 from '../assets/videos/yoga/4110446-uhd_3840_2160_30fps.mp4';
import video3 from '../assets/videos/yoga/8959188-hd_1920_1080_25fps.mp4';
import video4 from '../assets/videos/yoga/3327726-hd_1920_1080_24fps.mp4';
import video5 from '../assets/videos/yoga/2790143-uhd_3840_2160_25fps.mp4';
import video6 from '../assets/videos/yoga/3191859-uhd_3840_2160_25fps.mp4';
import video7 from '../assets/videos/yoga/4110438-uhd_3840_2160_30fps.mp4';
import { Link } from 'react-router-dom';

export default function YogaModule() {
  return (
    <>
      <VideoComponent
        videoSrc={video}
        heading="Raising the Bar on Yoga Education"
        paragraph="Blending modern science with traditional wisdom to provide teachers and students with the tools to create individualized therapeutic yoga practices that support all aspects of health and wellness."
      />
      <section class="section">
        <h1 class="section-heading">
          <u>Expand your knowledge. </u>
          <span className='section-heading-span'><u>Elevate your practice. </u></span>
          <u>Enrich your life.</u>
        </h1>
        <div class="cards-container">
          <div class="card">
            <div class="video-container">
              <video className='video-yoga-section' src={video2} autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              <h2>Improves flexibility & fitness</h2>
            </div>
          </div>
          <div class="card">
            <div class="video-container">
              <video className='video-yoga-section' src={video3} autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              <h2>Reduces stress levels</h2>
            </div>
          </div>
          <div class="card">
            <div class="video-container">
              <video className='video-yoga-section' src={video4} autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              <h2>Improves attention & concentration</h2>
            </div>
          </div>
        </div>
        <div class="cards-container">
          <div class="card">
            <div class="video-container">
              <video className='video-yoga-section' src={video5} autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              <h2>Supports Heart Health</h2>
            </div>
          </div>
          <div class="card">
            <div class="video-container">
              <video className='video-yoga-section' src={video6} autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              <h2>Improves Sleep Quality</h2>
            </div>
          </div>
          <div class="card">
            <div class="video-container">
              <video className='video-yoga-section' src={video7} autoPlay muted loop style={{ width: '100%', height: 'auto' }} />
              <h2>Aids in Weight Management</h2>
            </div>
          </div>
        </div>
      </section>
      <section className='section2'>
        <div>
          <h2>More Details</h2>
          <p>If you need more information, feel free to reach out to us!</p>
          <Link to="/contactus">
            <button>Contact Us</button>
          </Link>
        </div>
      </section>
    </>
  )
}
