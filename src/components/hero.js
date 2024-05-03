import React from 'react'
import backimage from '../img/banner.jpg';

const Hero = () => {
  return (
    <>
    <div className="hero" style={{  backgroundImage: `url(${backimage})`}}>
        <div className="container" style={{padding: 0}}>
          <div className="row">
            <div className="col-6" style={{padding: 0}}>
              <h2 data-aos="fade-right"><span className="">My Zabiha,</span><br /> Amplify your Fatith</h2>
              <p data-aos="fade-right" data-aos-delay="200">Available for:</p>
              <p data-aos="fade-right" data-aos-delay="200">Fresh Meat for Aqiqah, Sadaqah & Qurbani: Delivered Worldwide</p>
              <div className="row hero-features" data-aos="fade-right" data-aos-delay="400">
                <div className="col-6">
                  <i className="fa-solid fa-cow"></i>
                  <p>High-Quality (Cow, Goat, Sheep) Delivered Fresh </p>
                </div>
                <div className="col-6">
                  <i className="fa-solid fa-box"></i>
                  <p>Overseas for Religious Observances</p>
                </div>
              </div>
  
              {/* <div className='mt2'></div>
             <p data-aos="fade-right"  data-aos-delay="400"><strong>About Us:</strong></p> 

              <div className='mt2'></div>
              <p data-aos="fade-right"  data-aos-delay="400">My Zabiha is a user-friendly application designed to streamline the Qurbani experience for everyone. Our application caters to all your Qurbani needs, facilitating Aqiqah, Sadaqah, and Qurbani animal selection and sacrifice arrangements.</p>
              <div className='mt2'></div> */}

              <a href="/book" data-aos="fade-up" data-aos-delay="600">Book your Qurbani with us!</a>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero