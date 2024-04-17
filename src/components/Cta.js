import React from 'react'
import backimage from '../img/cta-banner.jpg';

const Cta = () => {
  return (
    <>
    <div className="CTA">
        <div className="container"  style={{  backgroundImage: `url(${backimage})`}}>
          <div className="row">
            <div className="col-6">
              <p>Become a Supplier</p>
              <a href="">Register Now</a>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cta