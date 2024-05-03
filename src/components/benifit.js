import React from 'react'
import backimage from '../img/fresh.jpg';
import deliver from '../img/deliver.png';
import packet from '../img/packet.png';
import protect from '../img/protect.png';
import meat from '../img/meat.png';
import backimage1 from '../img/feature-bg.png';


const Benifit = () => {
    return (
        <>
            <div className="benifits"  style={{ backgroundImage: `url(${backimage1})`}}>
                <div className="container">
                    <h3 style={{ textAlign: 'center' }}>My Zabiha Qurbani: <span>Four Steps</span></h3>
                    <p style={{ textAlign: 'center', marginTop: "-20px", marginBottom: "20px" }}>Experience a stress-free Qurbani with My Zabiha's streamlined process:</p>
                    <div className="row">
                        <div className="col-4">
                            <div className="benifit" data-aos="fade-right">
                                <div className="content">
                                    <h4>Select Your Animal</h4>
                                    <p>Browse a wide variety selection of healthy animals directly through the website.</p>
                                </div>
                                <div className="icon">
                                <img src={meat} alt="meat" />
                                </div>
                            </div>
                            <div className="benifit" data-aos="fade-right" data-aos-delay="200">
                                <div className="content">
                                    <h4>Choose Your Qurbani Type</h4>
                                    <p>Whether it's Qurbani, Aqiqah, or Sadaqah, My Zabiha caters to your specific needs.</p>
                                </div>
                                <div className="icon">
                                <img src={packet} alt="packet" />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <img src={backimage} alt="backimage" className='mid-img' />

                        </div>
                        <div className="col-4">
                            <div className="benifit" data-aos="fade-left">
                                <div className="icon">
                                    <img src={deliver} alt="deliver" />
                                </div>
                                <div className="content">
                                    <h4>Book with Confidence</h4>
                                    <p>Secure your sacrifice with a few simple clicks and enjoy a hassle-free booking experience.</p>
                                </div>

                            </div>
                            <div className="benifit" data-aos="fade-left" data-aos-delay="200">
                                <div className="icon">
                                <img src={protect} alt="protect" />
                                </div>
                                <div className="content">
                                    <h4>Track & Stay Informed</h4>
                                    <p>Receive updates on the status of your Qurbani and even get a picture of the distribution process (subject to availability).</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Benifit