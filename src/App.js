import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import Crousel from './components/Crousel';
import Courses from './components/Courses';
import Vashuddha from './components/Vashuddha';
import Footer from './components/FooterModule';
import Testomani from './components/Testomani';
import ExperinceSection from './components/ExperinceSection';

function App() {
  return <>
  <Navbar />
  <HeroSection />
  <ProcessSection />
   <Courses />
  <Vashuddha />
  <ExperinceSection/>
  <Testomani/>
  {/* <AboutUs /> */}
  {/* <ContactUs /> */}
  <Crousel/>
  <Footer/></>
}

export default App;
