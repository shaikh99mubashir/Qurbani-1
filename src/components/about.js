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
              <h3>About <span>My Zabiha</span></h3>
              {/* <p className="colored">"CREED Qurbani is ardent about providing the best quality meat for your religious and
                personal needs "</p> */}
              <p>My Zabiha is designed to streamline the Qurbani experience for everyone. Our application caters to all your Qurbani needs, facilitating Aqiqah, Sadaqah, and Qurbani animal selection and sacrifice arrangements.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="feature" data-aos="fade-up">
        <div className="container">
          <h3 style={{ textAlign: 'center' }}>Fulfill your Qurbani obligation with ease! My Zabiha simplifies the <span>entire process!
          </span></h3>
          <p>Browse and purchase animals as per your needs and budget. We prioritize ethical sourcing and respectful treatment of animals. Select your preferred sacrifice method, either home delivery or a designated center, for a stress-free experience. Track your Qurbani's progress and receive updates along the way.
            My Zabiha: Qurbani made it convenient.
          </p>
        </div>
      </div>
    </>
  )
}

export default About