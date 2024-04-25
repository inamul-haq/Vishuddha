import React from 'react';
import './Vashuddha.css';
import image from '../assets/vishuddha/Why-School-education-crucial-for-child-development.jpg';
import image2 from '../assets/vishuddha/objective-of-education-is-learning-feature-900x612.jpg';
import image3 from '../assets/vishuddha/types-of-education-formal-informal-non-formal-for-kids.jpeg';

export default function Vashuddha() {
  return (
    <section class="campus col-lg-12 col-md-6 col-sm-3">

        <h1>WHY VISHUDDHA</h1>
        <p>Di bawah ini beberapa jurusan yang ada di SMKN 7 Semarang.</p>

        <div class="row">
            <div class="campus-col">
            <img src={image}/>
            <div class="layer">
                <h3>EASY LEARNING</h3>
            </div>
        </div>
                <div class="campus-col">
                <img src={image2}/>
                <div class="layer">
                    <h3>DOUBT SOLVING</h3>
                </div>
            </div>
                    <div class="campus-col">
                    <img src={image3}/>
                    <div class="layer">
                        <h3>1:1 MENTORING</h3>
                    </div>
                </div>
        </div>
    </section>
  );
}
