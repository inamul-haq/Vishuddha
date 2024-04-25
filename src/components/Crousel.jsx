import React from 'react';
import Image from '../assets/education/boy-cartoon-character-surrounded-by-technology.jpg';
import Image2 from '../assets/education/digital-art-young-students-attending-school.jpg';
import Image3 from '../assets/education/view-3d-young-child-watching-movie.jpg';

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Image} className="d-block w-100" style={{ maxHeight: '56rem', objectFit: 'cover' }} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Unlocking the Potential of Technology in Education</h5>
            <p>Embrace the future of learning with innovative technologies.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Image2} className="d-block w-100" style={{ maxHeight: '56rem', objectFit: 'cover' }} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Fostering Creativity and Collaboration</h5>
            <p>Empower students to explore, create, and collaborate in the digital age.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block w-100" style={{ maxHeight: '56rem', objectFit: 'cover' }} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Exploring New Horizons in Education</h5>
            <p>Experience immersive learning environments that inspire curiosity and discovery.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
