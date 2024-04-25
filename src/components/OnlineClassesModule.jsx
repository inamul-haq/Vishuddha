import React from 'react';
import image1 from '../assets/online-class/1627752542_1611610628_online-education.jpg'
import image2 from '../assets/online-class/AskMentor_teachingscienceonline_hero.jpg'
import image3 from '../assets/online-class/e5ea69f5336d428bad838da472af8f91.jpg'
import image4 from '../assets/online-class/how-to-be-successful-with-online-classes.jpg'
import image5 from '../assets/online-class/online-class-student-josekutty-panackal.jpg'
import image6 from '../assets/online-class/online-class-video-conference.jpg'

export default function Vashuddha() {
  return (
    <section class="campus col-lg-12 col-md-6 col-sm-3">

        <h1><u>ONLINE CLASSES</u></h1>

        <div class="row">
            <div class="campus-col">
            <img src={image1}/>
            <div class="layer">
                <h3>Flexibility</h3>
            </div>
        </div>
                <div class="campus-col">
                <img src={image2}/>
                <div class="layer">
                    <h3>Accessibility</h3>
                </div>
            </div>
                    <div class="campus-col">
                    <img src={image3}/>
                    <div class="layer">
                        <h3>Interaction</h3>
                    </div>
                </div>

                <div class="campus-col">
                    <img src={image4}/>
                    <div class="layer">
                        <h3>Convenience</h3>
                    </div>
                </div>
                <div class="campus-col">
                    <img src={image5}/>
                    <div class="layer">
                        <h3>Customization</h3>
                    </div>
                </div>
                <div class="campus-col">
                    <img src={image6}/>
                    <div class="layer">
                        <h3>Engagement</h3>
                    </div>
                </div>
        </div>
    </section>
  );
}
