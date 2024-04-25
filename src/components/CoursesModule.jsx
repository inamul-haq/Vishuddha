import React from 'react';
import Typewriter from 'typewriter-effect';
import studentImage from '../assets/student.png';
import './CoursesModule.css'

export default function CoursesModule() {
  return (
    <div className='courses-container'>
      <div className='courses-content'>
        <h1>
          Explore #Tutoring from 1 to 12th Grade{' '}
          <span className='typing-animation'>
            <Typewriter
              options={{
                strings: ['Grade'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p>Contact us to know more...</p>
      </div>
      <div className='courses-image'>
        <img src={studentImage} alt='Student' />
      </div>
    </div>
  );
}
