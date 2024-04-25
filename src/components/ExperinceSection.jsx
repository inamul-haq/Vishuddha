import React from 'react';
import image from '../assets/education/Greensboro-College-Department-of-Education-1-scaled.jpg'
import image2 from '../assets/education/school_soe_cover-1200x675.jpg'
import image3 from '../assets/education/sia-science-teaching-title_tcm7-165543.jpg'
import './ExperienceSection.css'

export default function ExperinceSection() {
  return (
    <div>
    <section class="facilities">
        <h1>Experience Excellence</h1>
        <p className='facilities-p'><u>World-Class Facilities at Vishuddha Tutions</u></p>

    <div class="row-testimoni">
        <div class="facilities-col">
            <img src={image}/>
            <h3>Foster Understanding</h3>
            <p>Discover a learning environment at Vishuddha Classes where understanding takes precedence over rote memorization. 
                Our facilities are designed to foster deep comprehension, encouraging students to delve into the core principles 
                of each subject and grasp concepts with clarity.
            </p>
        </div>
        <div class="facilities-col">
            <img src={image2}/>
            <h3>Logic Building Initiative</h3>
            <p>At Vishuddha Classes, we prioritize logic building as a fundamental skill for academic success and real-world 
                problem-solving. Through state-of-the-art facilities and innovative teaching methodologies, we cultivate logical 
                thinking abilities in our students, equipping them with the tools to tackle complex challenges with confidence and ingenuity.</p>
        </div>
        <div class="facilities-col">
            <img src={image3}/>
            <h3>Innovative Learning Spaces</h3>
            <p>Step into our cutting-edge learning environments designed to foster creativity, critical thinking, and collaboration. 
                Our facilities are equipped with the latest technology and resources, providing students with immersive educational 
                experiences that go beyond traditional classroom settings.
            </p>
        </div>
    </div>
</section>
</div>
  )
}
