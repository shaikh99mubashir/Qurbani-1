import React from 'react'
// import backimage from '../img/cta-banner.jpg';
import backimage2 from '../img/fresh.jpg';

const Cta = () => {
  return (
    <>
      <div className="CTA">
        <div className="container" style={{ backgroundImage: `url(${backimage2})` }}>
          <div className="row">
            <div className="col-12">
              <h3>My Zabiha Qurbani: Your Sacrifice,<span> Your Way!</span></h3>
              <p>Here's how you can make your Qurbani effective and efficient:</p>
              <p>⦁	  Sharing is Caring: Split your sacrifice with loved ones – spreading the blessings and the deliciousness!</p>
              <p>⦁	  Homeward Bound? Get your Qurbani meat delivered right to your doorstep. (Delivery fees may vary depending on your location, but convenience is priceless!)</p>
              <p>⦁	  Give Back Seamlessly: Choose to have your Qurbani distributed to those in need. We'll even provide you with proof, so you can witness the impact of your generosity.</p>
              <p>My Zabiha empowers you to personalize your Qurbani experience. Fulfill your obligations and celebrate the spirit of giving, all on your terms!</p>

            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cta