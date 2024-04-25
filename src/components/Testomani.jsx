import React from 'react';
import './Testimani.css';
import student1 from '../assets/testimoni/photograph.jpg';
import student2 from '../assets/testimoni/IMG-20220308-WA0007-transformed.png'

export default function Testomani() {
  return (
    <div>
        
<section class="testimonials">
        <h1><i><u>What Our Student says</u></i></h1>
        <p>Pendapat alumni SMKN 7 Semarang</p>
    
        <div class="row-testimoni">
            <div class="testimonial-col">
                <img src={student1}/>
                <div>
                    <p><i>"Vishuddha Tutors transformed my learning journey. Their dedication to excellence and personalized approach truly set them apart."
                    </i></p>
                <h3>Inamul Haq</h3>
                </div>
            </div>
            <div class="testimonial-col">
                <img src={student2}/>
                <div>
                    <p><i>"Vishuddha Tutors goes beyond traditional teaching methods, inspiring students to excel academically and personally."</i></p>
                <h3>Ikram</h3>
            </div>
        </div>
        
    </div>
</section>
    </div>
  )
}
