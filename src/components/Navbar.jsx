import React from 'react';
import '../components/Navbar.css'
import Button from '@mui/material/Button';
import image from '../assets/vashuddha.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();

  return (
    

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
          <div className='nav-container'> 
        <div className='nav-internal'>
          
          <div className='nav-child-one'>
          <img onClick={() => navigate('/')} src={image} alt="Vishuddha" width='70em'/>
          <Button onClick={() => navigate('/')} variant="text" id='vashuddha-logo-text'>Vishuddha</Button>
          </div>

          <div className='nav-child-two'>
          <button className='nav-cont-two-btn' onClick={() => navigate('/')}>Home</button>
            <button className='nav-cont-two-btn' onClick={() => navigate('/onlineclasses')}>Online Classes</button>
            <button className='nav-cont-two-btn' onClick={() => navigate('/offlineclasses')}>Offline Classes</button>
            <button className='nav-cont-two-btn' onClick={() => navigate('/courses')}>Courses</button>
            <button className='nav-cont-two-btn' onClick={() => navigate('/subjects')}>Subjects</button>    
          </div>

          <div className='nav-child-three'>
          <Button onClick={() => navigate('/contactus')} size="large" variant="contained" color="success">Contact Us</Button> 
          </div>

        </div>
    </div>
          </AppBar>
        </Box>
      );
    }
    


export default Navbar