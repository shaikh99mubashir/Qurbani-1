import React from 'react'
import Product  from './product'

const Featured = () => {
  return (
    <>
        <div className="featured">
        <div className="container">
          <h3 className='text-center'>What we Offer</h3>
          {/* <h3>Featured <span>Qurbani</span></h3> */}
          {/* <div className="row products">
           <Product />
           <Product />
           <Product />
          </div> */}
          ⦁	Convenience: My Zabiha brings the Qurbani process to your fingertips. 
          Browse, select, and purchase your sacrificial animal directly through the app.
⦁	Variety: Choose from a wide range of healthy and well-maintained animals for your specific needs and budget.
⦁	Ethical Sourcing: We prioritize ethical sourcing, ensuring animals are treated with care and respect throughout the process.
⦁	Streamlined Sacrifice: Select your preferred method of sacrifice - home delivery or designated centers - for a hassle-free experience.
⦁	Accountability: Track the status of your Qurbani and receive updates throughout the process.

        </div>
      </div>
    </>
  )
}

export default Featured