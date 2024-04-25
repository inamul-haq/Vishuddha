import React from 'react';
import './AboutUs.css';
import image from '../assets/vashuddha.jpeg';
import Rating from '@mui/material/Rating';

export default function AboutUs() {
  const value = 5;

  return (
    <div className='about-container'>
      <div className='about-image'>
        <img src={image} alt="Vashuddha" />
      </div>

      <div className='about-content'>
        <h1>ABOUT US</h1>
        <div className='about-text'>
          <p>Vashuddha is the leading provider of private tutoring. We are a rapidly growing organization that offers huge possibilities for your career advancement.</p>
          <p>Vashuddha has a mission to make world-class home-tuitions, online tuitions, and e-tuitions accessible and dedicated to fulfilling dreams of education across India.</p>
          <p>We help find learning options for students as well as adults in academic and non-academic areas.</p>
          <div className='star-rating'>
            <Rating name="read-only" value={value} readOnly size="large" />
          </div>
        </div>
      </div>
    </div>
  );
}
