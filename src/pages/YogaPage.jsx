import React,{useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterModule';
import YogaModule from '../components/YogaModule';

export default function YogaPage() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
    <Navbar/>
    <YogaModule/>
    <Footer/>
    </>
  )
}
