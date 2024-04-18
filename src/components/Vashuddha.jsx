import React from 'react';
import './Vashuddha.css';
import image from '../assets/3155688.png';


export default function Vashuddha() {
  return (
    <div className="vashuddha-container">

      <div className='vashuddha-cont-why'>
        <div>
        <h1 className='vashuddha-h1'>WHY VISHUDDHA ?</h1>
        </div>

        <div className='vashuddha-cont-two'>
            <img id='vashuddha-why-img' src={image} alt="" />
            <div className='vashuddha-cont-two-text'>
            <h3>1.     Weekly Test Series</h3>
            <h3>2. Two Teachers Benefit</h3>
            <h3>3. Mentor Support After Class</h3>
            <h3>4. Available For All Grade Levels</h3>
            <h3>5. Experienced & Qualified Tutors</h3>
            <h3>6. Free Trial Class</h3>
            <h3>7. Graphical Teaching Approach</h3>
            </div>
            
        </div>
      

      </div>
      
    </div>
  );
}
