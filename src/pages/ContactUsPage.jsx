import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/FooterModule';
import { useEffect } from 'react';

export default function ContactUsPage() {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (<> 
  <Navbar />
  <ContactUs />
  <AboutUs />
  <Footer/>
</>
  )
}
