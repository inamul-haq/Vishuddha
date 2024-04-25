import React from 'react';
import image from '../assets/landingpage.png'
import '../components/HeroSection.css'
import Typewriter from 'typewriter-effect';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { useNavigate } from 'react-router-dom';


export default function HeroSection() {
 
  
  const navigate = useNavigate();

    
  return (
    <div className='flex-container'>
      <div className='flex-internal-container-one'>
        <h1>
          A good <span className='education-span'>#education</span> is always a base of 
          <span className='typewriter-span'>
          <Typewriter options={{strings: ['A bright future', 'Equitable socities','Self confidence'],
            autoStart: true,
            loop: true,
          }}/>

          </span>
          
        </h1>
        
      
      <p className='para-container'>Education is our passport to the future, for tomorrow belongs only to the people who prepare for it today.” —Malcolm X</p>

      
          <div className='hero-stack'>
            <div className='hero-stack-internal'>
            <Button onClick={() => navigate('/contactus')} size="large" variant="contained" startIcon={<SchoolIcon />}>
            Enroll Now
          </Button>
            </div>
            <div className='hero-stack-internal'>
            <Button onClick={() => navigate('/yoga')} size="large" color="secondary" variant="contained" endIcon={<SelfImprovementIcon />}>
            Free Yoga Session
          </Button>
            </div>
          
          
        </div>

      

      </div>
      <div className='flex-internal-container-two'>
        <img src={image} alt="Hero-Section" />

      </div>
    </div>
  )
};
