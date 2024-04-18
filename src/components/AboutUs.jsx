import React,{useState,useEffect} from 'react';
import './AboutUs.css';
import image from '../assets/vashuddha.jpeg'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function() {
  const value = 5;

  return (
    <div className='about-container'>

                    <div className='about-cont-one'>
                      <img src={image} alt="" />

                    </div>

                    <div className='about-cont-two'>
                    <h1>ABOUT US</h1>
                    <div className='about-cont-two-para'>
                    <p>Vashuddha is the leading provider of private tutoring.We are rapidly growing organisation that offers 
                    huge possibilities for your career advancement.</p>
                    
                    <p>Vashuddha has a mission to make world class home-tuitions, online tuitions and e-tuitions accessible and dedicated 
                        to fulfill dreams of education across India.</p>

                    <p>We help find learning options for students as well as adults in academic and non academic area.</p>
                    <div className='star-rating-about-us'>
                    <Rating  name="read-only" value={value} readOnly size="large"/>
                    </div>
                    
              
                    </div>

        </div>
        
         </div>
  )
}
