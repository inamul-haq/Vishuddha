import React from 'react';
import './FooterModule.css'
import Fb from '../assets/social/facebook.png';
import Ig from '../assets/social/instagram.png';
import Gmail from '../assets/social/gmail.png';
import Whatsapp from '../assets/social/whatsapp.png';
import Call from '../assets/social/4070253.png';
import Maps from '../assets/social/location.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
      <section className="d-flex justify-content-between p-4 footer-section" style={{ backgroundColor: '#6351ce' }}>
        <div className="footer-connect">
          <span className='footer-connect-para'>Get connected with us on social networks:</span>
        </div>

        <div className='social-footer'>
        <div className='social-icons-cont'>
    <div className='social-icons-footer'>
        <a href="https://www.facebook.com/profile.php?id=61556144948812&mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer">
            <img src={Fb} alt="Facebook" />
            
        </a>
    </div>
    <div className='social-icons-footer'>
        <a href="https://www.instagram.com/vishuddhaclasses/" target="_blank" rel="noopener noreferrer">
            <img src={Ig} alt="Instagram" />
            
        </a>
    </div>
    <div className='social-icons-footer'>
    <a href="whatsapp://send?phone=+919279563636&text=hy" target="_blank" rel="noopener noreferrer">
            <img src={Whatsapp} alt="WhatsApp" />
        </a>

    </div>
    <div className='social-icons-footer'>
        <a href="mailto:vishuddhaclasses@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={Gmail} alt="Gmail" />
        </a>

    </div>
    <div className='social-icons-footer'>
        <a href="tel:+919279563636" target="_blank" rel="noopener noreferrer">
            <img src={Call} alt="Call" />
        </a>

    </div>
    <div className='social-icons-footer'>
    <a href="https://www.google.com/maps/search/Noida+Sector+3" target="_blank" rel="noopener noreferrer">
        <img src={Maps} alt="Google Maps" />      
    </a>

</div>

</div>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Vishuddha</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
              Vashuddha is the leading provider of private tutoring. We are a rapidly growing organization that offers huge possibilities for your career advancement.
              </p>
              <p>We help find learning options for students as well as adults in academic and non-academic areas.</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Courses</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                <button onClick={() => navigate('/onlineclasses')} className="footer-button">Online Courses</button>
              </p>
              <p>
              <button onClick={() => navigate('/offlineclasses')} className="footer-button">Offline Courses</button>
              </p>
              <p>
              <button onClick={() => navigate('/yoga')} className="footer-button">Yoga Classes</button>
              </p>
              <p>
              <button onClick={() => navigate('/contactus')} className="footer-button">Free Trial</button>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
              <h6 className="text-uppercase fw-bold">Subjects</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>Mathematics
              </p>
              <p>Science
              </p>
              <p>English   |   Hindi
              </p>
              <p>Geography  |  Economics
              </p>
              
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><i className="fas fa-home mr-3"></i> New Delhi ( Noida sector 3 )</p>
              <p><i className="fas fa-envelope mr-3"></i> Ranchi ( Morabadi )</p>
              <p><i className="fas fa-phone mr-3"></i> + 91 9279563636</p>
            </div>
 
          </div>
 
        </div>
      </section>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © Vishuddha 2024 Copyright
      </div>
 
    </footer>
  );
}

export default Footer;
