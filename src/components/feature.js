import React from 'react'
import dotted from '../img/dotted-line.png';
import feature from '../img/feature-img-desk.jpg';

const Feature = () => {
  return (
    <>
      <div className="feature">
        <div className="container">
          <h3 style={{ textAlign: 'center' }}>CREED Qurbani is <span>Simple</span></h3>

          <div className='temp-bg-feature' style={{  backgroundImage: `url(${feature})`}}>

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