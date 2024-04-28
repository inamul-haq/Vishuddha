import React,{ useEffect } from 'react';
import Navbar from '../components/Navbar';
import SubjectsModule from '../components/SubjectsModule';
import Footer from '../components/FooterModule'

function Subjects() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return <>
  <Navbar />
  <SubjectsModule />
  <Footer/></>
}

export default Subjects;
