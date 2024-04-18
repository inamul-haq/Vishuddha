import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import image from '../assets/offline-class.jpg'
import './OfflineClassModule.css'



function OfflineClassesModule() {


    return (
        <div className='offlineClass-module-flex-container'>
          <div className='offlineClass-module-flex-internal-container-one'>
            <h1>
              Offline <span className='offlineClass-module-span'>Tutoring</span> 
              
            </h1>

            <div className='offline-class-card-container'>
            <div className='offline-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Interactive Learning Environment</span>
                </Typography>
                <div className='offline-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Offline classes provide face-to-face interaction between students and instructors, fostering dynamic discussions and hands-on learning experiences.
                </Typography>
              </CardContent>
            </Card> 
            </div>
            <div className='offline-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Personalized Attention</span>
                </Typography>
                <div className='offline-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                In offline classes, instructors can offer personalized support and guidance to students, addressing their individual learning needs more effectively.
                </Typography>
              </CardContent>
            </Card> 
            </div>
            <div className='offline-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Networking Opportunities</span>
                </Typography>
                <div className='offline-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Offline classes enable students to build relationships and networks with their peers, facilitating collaboration, teamwork, and social interaction.
                </Typography>
              </CardContent>
            </Card> 
            </div>
            <div className='offline-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Access to Physical Resources</span>
                </Typography>
                <div className='offline-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Offline classes often provide access to physical resources such as libraries, laboratories, and specialized equipment, enriching the learning experience.
                </Typography>
              </CardContent>
            </Card> 
            </div>
            <div className='offline-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Structured Learning Environment</span>
                </Typography>
                <div className='offline-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Offline classes typically follow a structured schedule and format, helping students develop discipline, time management skills, and a sense of accountability.
                </Typography>
              </CardContent>
            </Card> 
            </div>

            </div>
            
            
            

          
          <p className='offlineClass-module-para-container'>Contact us for 1:1 free counselling</p>
    
          </div>
          <div className='offlineClass-module-flex-internal-container-two'>
            <img src={image} alt="offlineClass-module-Hero-Section" />
    
          </div>
        </div>
      )
    };

export default OfflineClassesModule
