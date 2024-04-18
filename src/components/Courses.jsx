import React from 'react'
import image from '../assets/vecteezy_hands-with-the-world-of-education-above_4579279.jpg'
import image2 from '../assets/28466.jpg'
import Typewriter from 'typewriter-effect';
import './Courses.css'
import { Button } from '@mui/material';


export default function() {
  return (
    <div className='courses-flex-container'>
        <div className='courses-internal-container-one'>
            <img src={image} alt="" />
        </div>
        
        <div className='courses-internal-container-two'>
        <h1 className='courses-h1'>
          Helping <span className='courses-education-span'>Students</span> always to 
          <span className='courses-typewriter-span'>
          <Typewriter options={{strings: ['Thrive, Excel.','Achieve greatness.', 'succed in future.'],
            autoStart: true,
            loop: true,
          }}/>

          </span>
          
        </h1>
        
      
      <p className='courses-para-container'>He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying. —Friedrich Nietzsche</p>
          <img className='course-para-img' src={image2} alt="" />
          
      </div>
    </div>
  )
}
