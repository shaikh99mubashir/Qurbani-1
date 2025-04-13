import React from 'react'
// import dotted from '../img/dotted-line.png';
// import feature from '../img/steps.png';
// import feature_mob from '../img/steps-mob.png';
import { ImageUrl } from '../Helpers';

const Feature = () => {
  return (
    <>
    
      <div className="feature">
        <div className="container">
          <h3 style={{ textAlign: 'center' }} data-aos="fade-up">Follow the Steps and make <br />   your Qurbani <span>more Convenient.</span></h3>
          <p data-aos="fade-up">My Zabiha is designed to streamline the Qurbani experience for everyone. We caters to all your needs, facilitating<br/> Qurbani, Sadaqqah and Aqiqah animal selection and sacrifice arrangements</p>
          <div className='temp-bg-feature desk' style={{  backgroundImage: `url(${ImageUrl('steps.png')})`}} data-aos="fade-up">

          </div>
          <div className='temp-bg-feature mob' style={{  backgroundImage: `url(${ImageUrl('steps-mob.png')})`}} data-aos="fade-up">

          </div>

        
          {/* <div className="row" style={{ alignItems: 'center' }}>
            <div className="col" data-aos="fade-right">
              <div className="numberBox num-1">
                <div>01</div>
              </div>
              <div className="icon-box">
                <i className="fa-solid fa-list-check"></i>
              </div>
              <p>Select an Qurbani</p>
            </div>
            <div className="col-1">
              <img src={dotted} alt="dotted" />

            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="200">
              <p>Provide delivery address</p>

              <div className="icon-box">
                <i className="fa-solid fa-money-check"></i>
              </div>
              <div className="numberBox num-2">
                <div>02</div>
              </div>

            </div>
            <div className="col-1">
              <img src={dotted} alt="dotted" />

            </div>
            <div className="col" data-aos="fade-down" data-aos-delay="400">
              <div className="numberBox num-3">
                <div>03</div>
              </div>
              <div className="icon-box">
                <i className="fa-solid fa-file-circle-check"></i>
              </div>
              <p>Make payment</p>

            </div>
            <div className="col-1">
              <img src={dotted} alt="dotted" />

            </div>
            <div className="col" data-aos="fade-left" data-aos-delay="600">
              <p>Track your order</p>

              <div className="icon-box">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <div className="numberBox num-4">
                <div>04</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Feature