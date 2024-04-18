import React from 'react';
import image from '../assets/booktree.png'
import './SubjectModule.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function SubjectsModule() {
    const style = {
        py: 0,
        width: '100%',
        maxWidth: 300,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      };

    return (
        <div className='subject-module-flex-container'>
          <div className='subject-module-flex-internal-container-one'>
            <h1>
              Subects of <span className='subject-module-span'>Tutoring</span> 
              
            </h1>
            
            <List sx={style}>
      <ListItem>
        <ListItemText primary="Mathematics" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Science" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText primary="English" />
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem>
        <ListItemText primary="Hindi" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Geography" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Economics" />
      </ListItem>
    </List>
          
          <p className='subject-module-para-container'>he more that you read, the more things you will know, the more that you learn, the more places you’ll go.” —Dr. Seuss</p>
    
          </div>
          <div className='subject-module-flex-internal-container-two'>
            <img src={image} alt="subject-module-Hero-Section" />
    
          </div>
        </div>
      )
    };

