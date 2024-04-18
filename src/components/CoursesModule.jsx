import React from 'react';
import image from '../assets/student.png'
import '../components/CoursesModule.css'
import Typewriter from 'typewriter-effect';


export default function CoursesModule() {
  

    
  return (
    <div className='coursesModule-flex-container'>
      <div className='coursesModule-flex-internal-container-one'>
        <h1>
          We offer <span className='coursesModule-education-span'>#tutoring</span> from 1 to 12th 
          <span className='coursesModule-typewriter-span'>
          <Typewriter options={{strings: ['Grade'],
            autoStart: true,
            loop: true,
          }}/>

          </span>
          
        </h1>
        
      
      <p className='coursesModule-para-container'>Contact us to know more.......</p>

      </div>
      <div className='coursesModule-flex-internal-container-two'>
        <img src={image} width={700} alt="Hero-Section" />

      </div>
    </div>
  )
};
