import React from 'react'
import backimage from '../img/banner.jpg';

const Hero = () => {
  return (
    <>
    <div className="hero" style={{  backgroundImage: `url(${backimage})`}}>
        <div className="container" style={{padding: 0}}>
          <div className="row">
            <div className="col-6" style={{padding: 0}}>
              <h2 data-aos="fade-right"><span className="">My Zabiha,</span> Amplify your Fatith</h2>
              <p data-aos="fade-right" data-aos-delay="200">Available for:</p>
              <p data-aos="fade-right" data-aos-delay="200"><strong>Aqiqah, Sadaqah and Qurbani</strong></p>
              <div className="row hero-features" data-aos="fade-right" data-aos-delay="400">
                <div className="col-3">
                  <i className="fa-solid fa-cow"></i>
                  <p>FRESH MEAT</p>
                </div>
                <div className="col-5">
                  <i className="fa-solid fa-droplet"></i>
                  <p>HYGIENICALLY PROCESSED</p>
                </div>
                <div className="col-4">
                  <i className="fa-solid fa-box"></i>
                  <p>FREE DELIVERY</p>
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