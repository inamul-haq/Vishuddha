import React from 'react';
import image1 from '../assets/subjects/science.jpeg'
import image2 from '../assets/subjects/eco.jpg'
import image3 from '../assets/subjects/english.jpg'
import image4 from '../assets/subjects/hindi.jpg'
import image5 from '../assets/subjects/geo.jpg'
import image6 from '../assets/subjects/maths.jpg'
import './OfflineClassModule.css'

export default function Vashuddha() {
  return (
    <section class="campus col-lg-12 col-md-6 col-sm-3">

        <h1><u>SUBJECTS</u></h1>

        <div class="row">
            <div class="offline-campus-col">
            <img src={image6}/>
            <div class="layer">
                <h3>MATHEMATICS</h3>
            </div>
        </div>
                <div class="offline-campus-col">
                <img src={image1}/>
                <div class="layer">
                    <h3>SCIENCE</h3>
                </div>
            </div>
                    <div class="offline-campus-col">
                    <img src={image3}/>
                    <div class="layer">
                        <h3>ENGLISH</h3>
                    </div>
                </div>

                <div class="offline-campus-col">
                    <img src={image4}/>
                    <div class="layer">
                        <h3>HINDI</h3>
                    </div>
                </div>
                <div class="campus-col">
                    <img src={image5}/>
                    <div class="layer">
                        <h3>GEOGRAPHY</h3>
                    </div>
                </div>
                <div class="campus-col">
                    <img src={image2}/>
                    <div class="layer">
                        <h3>ECONOMICS</h3>
                    </div>
                </div>
        </div>
    </section>
  );
}
