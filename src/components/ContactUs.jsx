import React from 'react'
import './ContactUs.css'
import Typewriter from 'typewriter-effect';
import Fb from '../assets/social/facebook.png';
import Ig from '../assets/social/instagram.png';
import Gmail from '../assets/social/gmail.png';
import Whatsapp from '../assets/social/whatsapp.png';
import Call from '../assets/social/4070253.png';
import Maps from '../assets/social/location.png'
import ContactForm from './ContactForm';

export default function ContactUs() {
  return (
    <div className='contact-us-container'>
        <div className='contact-us-container-Typewriter'>
        <Typewriter options={{strings: ['GET IN TOUCH', 'CONTACT US','संपर्क करे'],
            autoStart: true,
            loop: true,
          }}/>

        </div>

        <ContactForm/>

        <div className='social-icons'>
    <div className='social-icons-universal'>
        <a href="https://www.facebook.com/profile.php?id=61556144948812&mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer">
            <img src={Fb} alt="Facebook" />
            
        </a>
        <h2>Vishuddhaclasses</h2>
    </div>
    <div className='social-icons-universal'>
        <a href="https://www.instagram.com/vishuddhaclasses/" target="_blank" rel="noopener noreferrer">
            <img src={Ig} alt="Instagram" />
            
        </a>
        <h2>Vishuddhaclasses</h2>
    </div>
    <div className='social-icons-universal'>
    <a href="whatsapp://send?phone=+919279563636&text=hy" target="_blank" rel="noopener noreferrer">
            <img src={Whatsapp} alt="WhatsApp" />
        </a>
        <h2>+91 9279563636</h2>
    </div>
    <div className='social-icons-universal'>
        <a href="mailto:vishuddhaclasses@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={Gmail} alt="Gmail" />
        </a>
        <h2>vishuddhaclasses@gmail.com</h2>
    </div>
    <div className='social-icons-universal'>
        <a href="tel:+919279563636" target="_blank" rel="noopener noreferrer">
            <img src={Call} alt="Call" />
        </a>
        <h2>+91 9279563636</h2>
    </div>
    <div className='social-icons-universal'>
    <a href="https://www.google.com/maps/search/Noida+Sector+3" target="_blank" rel="noopener noreferrer">
        <img src={Maps} alt="Google Maps" />
        
    </a>
    <h2>New Delhi (Noida Sector 3)</h2>
        <h2>Ranchi (Morabadi)</h2>
</div>

        </div>

        
    </div>
  )
}
