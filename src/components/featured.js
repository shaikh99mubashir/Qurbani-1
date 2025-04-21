import React from 'react'
import { Link } from 'react-router-dom'
// import Product from './product'

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="container">
          <h3 className='text-center'>What we<span> Offer</span></h3>
          {/* <h3>Featured <span>Qurbani</span></h3> */}
          <div className="row products">
            <div className="col-3 product" data-aos="fade-up">
                <Link to="/feature/qurbani-overseas" className="card-link">
              <div className="pro-title">
                1. Facilitate Qurbani for Overseas
              </div>
              <div className="category" style={{ color: "#474f54" }}>
                Provide a user-friendly platform for overseas to fulfill their Qurbani obligations easily and conveniently.
              </div>
              </Link>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            <div className="col-3 product" data-aos="fade-up">
            <Link to="/feature/convenience" className="card-link">
              <div className="pro-title">
                2. Convenience
              </div>
              <div className="category" style={{ color: "#474f54" }}>
                My Zabiha brings the Qurbani process to your fingertips. Browse, select, and purchase your sacrificial animal directly through the app.
              </div>
              </Link>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            {/* <Product />
           <Product />
           <Product /> */}
            <div className="col-3 product" data-aos="fade-up">
            <Link to="/feature/variety" className="card-link">
              <div className="pro-title">
                3. Variety
              </div>
              <div className="category" style={{ color: "#474f54" }}>
                Choose from a wide range of healthy and well-maintained animals for your specific needs and budget.

              </div>
              </Link>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            <div className="col-3 product" data-aos="fade-up">
            <Link to="/feature/ethical-sourcing" className="card-link">
              <div className="pro-title">
                4. Ethical Sourcing
              </div>
              <div className="category" style={{ color: "#474f54" }}>
                We prioritize ethical sourcing, ensuring animals are treated with care and respect throughout the process.
              </div>
              </Link>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            <div className="col-3 product" data-aos="fade-up">
            <Link to="/feature/streamlined-sacrifice" className="card-link">
              <div className="pro-title">
                5. Streamlined Sacrifice
              </div>
              <div className="category" style={{ color: "#474f54" }}>
                Choose from a wide range of healthy and well-maintained animals for your specific needs and budget.

              </div>
              </Link>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            <div className="col-3 product" data-aos="fade-up">
            <Link to="/feature/accountability" className="card-link">
              <div className="pro-title">
                6. Accountability
              </div>
              <div className="category" style={{ color: "#474f54" }}>
                Track the status of your Qurbani and receive updates throughout the process.

              </div>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
              </Link>
            </div>
            
            <div className="col-3 product" data-aos="fade-up">
            <Link to="/feature/delivery-doorstep" className="card-link">
              <div className="pro-title">
                7. Delivery at Your Doorstep
              </div>
              <div className="category" style={{ color: "#474f54" }}>
                Get your Qurbani meat delivered globally to your doorstep — fresh, hygienic, and on time.

              </div>
              </Link>
              {/* <div className="price">
                Rs 7,595.27
              </div> */}
            </div>
            <div className="col-3 product" data-aos="fade-up">
            <Link to="/feature/distribution" className="card-link">
              <div className="pro-title">
                8. Distribution
              </div>
              <div className="category" style={{ color: "#474f54" }}>
                We ensure the meat is distributed to the needy as per your instructions with transparency and care.

              </div>
              </Link>
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