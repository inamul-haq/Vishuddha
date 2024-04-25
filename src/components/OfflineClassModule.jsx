import React from 'react';
import image1 from '../assets/offline-class/1600x960_1314928-teachers.jpg'
import image2 from '../assets/offline-class/1635153575phpizZMZB.jpeg'
import image3 from '../assets/offline-class/2022_5$largeimg_89069664.jpeg'
import image4 from '../assets/offline-class/60330841a31024adbdb58f8b.jpeg'
import image5 from '../assets/offline-class/homeschool.jpg'
import image6 from '../assets/offline-class/iStock-1171461134.jpg'
import './OfflineClassModule.css'

export default function Vashuddha() {
  return (
    <section class="campus col-lg-12 col-md-6 col-sm-3">

        <h1><u>OFFLINE CLASSES</u></h1>

        <div class="row">
            <div class="offline-campus-col">
            <img src={image1}/>
            <div class="layer">
                <h3>1:1 Mentoring</h3>
            </div>
        </div>
                <div class="offline-campus-col">
                <img src={image2}/>
                <div class="layer">
                    <h3>Collaboration</h3>
                </div>
            </div>
                    <div class="offline-campus-col">
                    <img src={image3}/>
                    <div class="layer">
                        <h3>Practicality</h3>
                    </div>
                </div>

                <div class="offline-campus-col">
                    <img src={image4}/>
                    <div class="layer">
                        <h3>Socialization</h3>
                    </div>
                </div>
                <div class="campus-col">
                    <img src={image5}/>
                    <div class="layer">
                        <h3>Hands-on</h3>
                    </div>
                </div>
                <div class="campus-col">
                    <img src={image6}/>
                    <div class="layer">
                        <h3>Guidance</h3>
                    </div>
                </div>
        </div>
    </section>
  );
}
