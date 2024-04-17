import React from 'react'
import backimage from '../img/fresh.jpg';
import deliver from '../img/deliver.png';
import packet from '../img/packet.png';
import protect from '../img/protect.png';
import meat from '../img/meat.png';


const Benifit = () => {
    return (
        <>
            <div className="benifits">
                <div className="container">
                    <h3 style={{ textAlign: 'center' }}>CREED Qurbani is <span>Better</span></h3>
                    <div className="row">
                        <div className="col-4">
                            <div className="benifit">
                                <div className="content">
                                    <h4>Premium Produce</h4>
                                    <p>Animals are raised in humane conditions which keep them healthy and ensure high-quality meat</p>
                                </div>
                                <div className="icon">
                                <img src={meat} alt="meat" />
                                </div>
                            </div>
                            <div className="benifit">
                                <div className="content">
                                    <h4>Premium Produce</h4>
                                    <p>Animals are raised in humane conditions which keep them healthy and ensure high-quality meat</p>
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
                            <div className="benifit">
                                <div className="icon">
                                    <img src={deliver} alt="deliver" />
                                </div>
                                <div className="content">
                                    <h4>Premium Produce</h4>
                                    <p>Animals are raised in humane conditions which keep them healthy and ensure high-quality meat</p>
                                </div>

                            </div>
                            <div className="benifit">
                                <div className="icon">
                                <img src={protect} alt="protect" />
                                </div>
                                <div className="content">
                                    <h4>Premium Produce</h4>
                                    <p>Animals are raised in humane conditions which keep them healthy and ensure high-quality meat</p>
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