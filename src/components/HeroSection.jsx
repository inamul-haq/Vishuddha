import React from 'react';
import image from '../assets/landingpage.png'
import {useState,} from 'react'
import '../components/HeroSection.css'
import Typewriter from 'typewriter-effect';
import { blue } from '@mui/material/colors';

export default function HeroSection() {
  

    
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

      </div>
      <div className='flex-internal-container-two'>
        <img src={image} alt="Hero-Section" />

      </div>
    </div>
  )
};
