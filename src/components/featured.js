import React from 'react'
import Product  from './product'

const Featured = () => {
  return (
    <>
        <div className="featured">
        <div className="container">
          <h3>Featured <span>Qurbani</span></h3>
          <div className="row products">
           <Product />
           <Product />
           <Product />
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured