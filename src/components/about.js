import React from 'react'
import left_image from '../img/post.avif';

const About = () => {
  return (
    <>
      <div className="about" data-aos="fade-up">
        <div className="container">
          <div className='row'>
            <div className='col-6'>
            <img src={left_image} alt="backimage" />
            </div>
            <div className='col-6'>
              <h3>About <span>Qurbani</span></h3>
              <p className="colored">"CREED Qurbani is ardent about providing the best quality meat for your religious and
                personal needs "</p>
              <p>Whether you intend to perform Qurbani as an act of devotion, want to distribute the meat to those in need,
                or seek fresh and hygienic packed meat for everyday consumption, Qurbani is here to serve you.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About