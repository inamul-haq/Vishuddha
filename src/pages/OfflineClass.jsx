import React,{useEffect} from 'react';
import OfflineClassesModule from '../components/OfflineClassModule';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterModule';

export default function OfflineClass() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<> 
    <Navbar />
    <OfflineClassesModule />
    <Footer/>
    </>
    
    
  )
}
