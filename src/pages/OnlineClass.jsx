import React,{useEffect} from 'react';
import OnlineClassesModule from '../components/OnlineClassesModule';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterModule';

export default function OnlineClass() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (<>
  
    <Navbar />
    <OnlineClassesModule />
    <Footer/>

</>
    
  )
}
