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
                    <h3 style={{ textAlign: 'center' }}>CREED Qurbani is <span>Better</span></h3>
                    <div className="row">
                        <div className="col-4">
                            <div className="benifit" data-aos="fade-right">
                                <div className="content">
                                    <h4>Convenience</h4>
                                    <p>My Zabiha eliminates the need to visit animal markets, saving you time and effort.
</p>
                                </div>
                                <div className="icon">
                                <img src={meat} alt="meat" />
                                </div>
                            </div>
                            <div className="benifit" data-aos="fade-right" data-aos-delay="200">
                                <div className="content">
                                    <h4>Peace of Mind</h4>
                                    <p>Our focus on transparency and ethical sourcing ensures a worry-free Qurbani experience</p>
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
                                    <h4>Accessibility</h4>
                                    <p>The app is available for download on all major platforms, making it accessible to everyone across the Globe.</p>
                                </div>

                            </div>
                            <div className="benifit" data-aos="fade-left" data-aos-delay="200">
                                <div className="icon">
                                <img src={protect} alt="protect" />
                                </div>
                                <div className="content">
                                    <h4>Affordability</h4>
                                    <p>We offer competitive pricing to ensure Qurbani remains accessible to all.</p>
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