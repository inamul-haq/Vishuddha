import React,{useEffect} from 'react';
import CoursesModule from '../components/CoursesModule';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterModule';

export default function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<> 
    <Navbar />
    <CoursesModule />
    <Footer/>
    </>
    
  )
}
