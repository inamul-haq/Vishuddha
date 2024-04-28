import React from 'react';
import './AboutUs.css';
import image from '../assets/vashuddha.jpeg';
import Rating from '@mui/material/Rating';

export default function AboutUs() {
  const value = 5;

  return (

    <section className="image-text-section">
    <div className="image-container">
      <img src={image} alt="Description" />
    </div>
    <div className="text-container">
      <h2>ABOUT US</h2>
      <p>
      Vashuddha is the leading provider of private tutoring. We are a rapidly growing organization that offers huge possibilities for 
      your career advancement.Vashuddha has a mission to make world-class home-tuitions, online tuitions, and e-tuitions accessible 
      and dedicated to fulfilling dreams of education across India.We help find learning options for students as well as adults in 
      academic and non-academic areas.</p>
      <Rating name="read-only" value={value} readOnly size="large" />
    </div>
  </section>
  );
}
