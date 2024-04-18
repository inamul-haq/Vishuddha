import React from 'react';
import OfflineClassesModule from '../components/OfflineClassModule';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

export default function OfflineClass() {
  return (<> <Navbar />
    <OfflineClassesModule />
    <AboutUs />
    <ContactUs /></>
    
  )
}
