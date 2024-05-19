import React from 'react'
import Product from './product'

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="container">
          <h3 className='text-center'>What we<span> Offer</span></h3>
          {/* <h3>Featured <span>Qurbani</span></h3> */}
          <div className="row products">
            <div className="col-3 product" data-aos="fade-up">
              <div className="pro-title">
                1. Facilitate Qurbani for Overseas
              </div>
              <div className="category">
                Provide a user-friendly platform for overseas to fulfill their Qurbani obligations easily and conveniently.
              </div>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            <div className="col-3 product" data-aos="fade-up">
              <div className="pro-title">
                2. Convenience
              </div>
              <div className="category">
                My Zabiha brings the Qurbani process to your fingertips. Browse, select, and purchase your sacrificial animal directly through the app.
              </div>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            {/* <Product />
           <Product />
           <Product /> */}
            <div className="col-3 product" data-aos="fade-up">
              <div className="pro-title">
                3. Variety
              </div>
              <div className="category">
                Choose from a wide range of healthy and well-maintained animals for your specific needs and budget.

              </div>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            <div className="col-3 product" data-aos="fade-up">
              <div className="pro-title">
                4. Ethical Sourcing
              </div>
              <div className="category">
                We prioritize ethical sourcing, ensuring animals are treated with care and respect throughout the process.
              </div>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            <div className="col-3 product" data-aos="fade-up">
              <div className="pro-title">
                5. Streamlined Sacrifice
              </div>
              <div className="category">
                Choose from a wide range of healthy and well-maintained animals for your specific needs and budget.

              </div>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            <div className="col-3 product" data-aos="fade-up">
              <div className="pro-title">
                6. Accountability
              </div>
              <div className="category">
                Track the status of your Qurbani and receive updates throughout the process.

              </div>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
          </div>

          {/* ⦁	Convenience: My Zabiha brings the Qurbani process to your fingertips. 
          Browse, select, and purchase your sacrificial animal directly through the app.
⦁	Variety: Choose from a wide range of healthy and well-maintained animals for your specific needs and budget.
⦁	Ethical Sourcing: We prioritize ethical sourcing, ensuring animals are treated with care and respect throughout the process.
⦁	Streamlined Sacrifice: Select your preferred method of sacrifice - home delivery or designated centers - for a hassle-free experience.
⦁	Accountability: Track the status of your Qurbani and receive updates throughout the process. */}

        </div>
      </div>
    </>
  )
}

export default Featured