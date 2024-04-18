import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import image from '../assets/online-class.jpg'
import './OnlineClassesModule.css'



function OnlineClassesModule() {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


    return (
        <div className='onlineClass-module-flex-container'>
          <div className='onlineClass-module-flex-internal-container-one'>
            <h1>
              Online <span className='onlineClass-module-span'>Tutoring</span> 
              
            </h1>

            <div className='online-class-card-container'>
            <div className='online-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Flexibility</span>
                </Typography>
                <div className='online-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Students can attend classes from anywhere with an internet connection, allowing them to manage their schedules more effectively.
                </Typography>
              </CardContent>
            </Card> 
            </div>
            <div className='online-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Accessibility</span>
                </Typography>
                <div className='online-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Online classes remove geographical barriers, enabling individuals from diverse locations to access education.
                </Typography>
              </CardContent>
            </Card> 
            </div>
            <div className='online-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Cost-effectiveness</span>
                </Typography>
                <div className='online-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Eliminating the need for commuting and physical facilities can reduce overall costs for both students and institutions.
                </Typography>
              </CardContent>
            </Card> 
            </div>
            <div className='online-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Diverse learning resources</span>
                </Typography>
                <div className='online-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Online platforms often offer a variety of multimedia resources, enhancing the learning experience.
                </Typography>
              </CardContent>
            </Card> 
            </div>
            <div className='online-class-card'>
            <Card sx={{ minWidth: 195, minHeight:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  <span>Customization</span>
                </Typography>
                <div className='online-class-padding'></div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Students can often choose from a broader range of courses and tailor their learning experience to their individual needs and interests.
                </Typography>
              </CardContent>
            </Card> 
            </div>

            </div>
            
            
            

          
          <p className='onlineClass-module-para-container'>Contact us for 1:1 free counselling</p>
    
          </div>
          <div className='onlineClass-module-flex-internal-container-two'>
            <img src={image} alt="onlineClass-module-Hero-Section" />
    
          </div>
        </div>
      )
    };

export default OnlineClassesModule
