import React from 'react'
// import backimage from '../img/banner.jpg';
// import delivery from '../img/deliver.png';
import { ImageUrl } from '../Helpers';
// import meat from '../img/meatico.png';

const Hero = () => {
  return (
    <>
    <div className="hero" style={{  backgroundImage: `url(${ImageUrl('ZABIHABANNER.png')})`}}>
        <div className="container" style={{padding: 0}}>
          <div className="row">
            <div className="col-6" style={{padding: 0}}>
              <h2 data-aos="fade-right"><span className="">My Zabiha,</span><br /> Amplify your Faith</h2>
              <p data-aos="fade-right" data-aos-delay="200">Available for:</p>
              <p data-aos="fade-right" data-aos-delay="200">Qurbani, Aqiqah and Sadaqah: Delivered Worldwide</p>
              <div className="row hero-features" data-aos="fade-right" data-aos-delay="400">
                <div className="col-6">
                <img src={ImageUrl("meatico.png")} alt="" />
                  <p>High-Quality (Cow, Goat, Sheep and Camel)</p>
                </div>
                <div className="col-6">
                  <img src={ImageUrl("deliver.png")} alt="" />
                  <p>Available for Worldwide and Overseas</p>
                </div>
              </div>
  
              {/* <div className='mt2'></div>
             <p data-aos="fade-right"  data-aos-delay="400"><strong>About Us:</strong></p> 

              <div className='mt2'></div>
              <p data-aos="fade-right"  data-aos-delay="400">My Zabiha is a user-friendly application designed to streamline the Qurbani experience for everyone. Our application caters to all your Qurbani needs, facilitating Aqiqah, Sadaqah, and Qurbani animal selection and sacrifice arrangements.</p>
              <div className='mt2'></div> */}

              <a href="/book" data-aos="fade-up" data-aos-delay="600" data-aos-offset="-200">Book your Qurbani with us!</a>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero