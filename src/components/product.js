import React from 'react'
import { ImageUrl } from '../Helpers'
// import backimage from '../img/meat-pro.jpg';

const Product = () => {
  return (
    <>
        <div className="col-4 product" data-aos="fade-up">
        <img src={ImageUrl('meat-pro.jpg')} alt="backimage" />
              <div className="pro-title">
                Goat 200 Kg
              </div>
              <div className="category">
                Dorper
              </div>
              <div className="price">
                Rs 7,595.27
              </div>
              <a href="" className="buy-now">Book Qurbani</a>
            </div>
    </>
  )
}

export default Product