import React from 'react'
import '../components/ProcessSection.css';
import ImageOne from '../assets/process/Untitled-3.png';
import ImageTwo from '../assets/process/Untitled-2.png';
import ImageThree from '../assets/process/Untitled-4.png';
import ImageFour from '../assets/process/Untitled-1.png';


export default function ProcessSection() {
  return (
    <div className='outer-container'>
        <div className='internal-container'>

                    <div className='int-sub-cont'>
                    <img src={ImageOne} alt="" />
                    <h4>500+ Students</h4>
                    </div>

                    <div className='int-sub-cont'>
                    <img src={ImageTwo} alt="" />
                    <h4>Qualified Teachers</h4>
                    </div>
                    
                    <div className='int-sub-cont'> 
                    <img src={ImageThree} alt="" />
                    <h4>Online/Offline</h4>
                    </div>
                    
                    <div className='int-sub-cont'>
                    <img src={ImageFour} alt="" />
                    <h4>Effective Learning</h4>
                    </div>
                    

        </div>
    </div>
  )
}
