import React from 'react'
import dotted from '../img/dotted-line.png';
import feature from '../img/feature-img-desk.jpg';

const Feature = () => {
  return (
    <>
      <div className="feature">
        <div className="container">
          <h3 style={{ textAlign: 'center' }}>CREED Qurbani is <span>Simple</span></h3>
          <p>My Zabiha is a platform that empowers users to fulfill their religious obligations with ease and confidence. By prioritizing convenience, transparency, and ethical sourcing, we aim to redefine the Qurbani experience for the modern world</p>
          <div className='temp-bg-feature' style={{  backgroundImage: `url(${feature})`}}>

          </div>

          My Zabiha Qurbani: Four Steps
Experience a stress-free Qurbani with My Zabiha's streamlined process:
<br></br>
⦁	Select Your Animal: Browse a wide variety selection of healthy animals directly through the app/website,
<br></br>
⦁	Choose Your Qurbani Type: Whether it's Qurbani, Aqiqah, or Sadaqah, My Zabiha caters to your specific needs.
<br></br>
⦁	Book with Confidence: Secure your sacrifice with a few simple clicks and enjoy a hassle-free booking experience.
<br></br>
⦁	Track & Stay Informed: Receive updates on the status of your Qurbani and even get a picture of the distribution process (subject to availability).
My Zabiha simplifies Qurbani, allowing you to focus on the true meaning of the celebration.
<br></br>
My Zabiha Qurbani: Your Sacrifice, Your Way!
<br></br>
Don't just book a Qurbani, tailor it according to your need with My Zabiha!
<br></br>
Here's how you can make your Qurbani effective and efficient:
<br></br>
⦁	Sharing is Caring: Spl it your sacrifice with loved ones – spreading the blessings and the deliciousness!
<br></br>
⦁	Homeward Bound? Get your Qurbani meat delivered right to your doorstep. (Delivery fees may vary depending on your location, but convenience is priceless!)
<br></br>
⦁	Give Back Seamlessly: Choose to have your Qurbani distributed to those in need. We'll even provide you with proof, so you can witness the impact of your generosity.
<br></br>
My Zabiha empowers you to personalize your Qurbani experience. Fulfill your obligations and celebrate the spirit of giving, all on your terms!
<br></br>

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