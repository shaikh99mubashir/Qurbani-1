import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const track = () => {
    return (
        <>
            <Header />
            <main className="book">
                <div className="container breadcrumb">
                    <div className="container">
                        <p><a href="">Home</a> / Track Order</p>
                    </div>
                </div>
                <div className="create_order">
                    <h3 style={{ textAlign: "center" }}>Track your <span>order</span></h3>
                    <div className=" container">
                        <div className="track">
                            <form action="">
                                <div className="row">
                                    <div className="col-8">
                                        <input type="text" name="track" id="track" />
                                    </div>
                                    <div className="col-4">
                                        <input type="submit" value="Track Order" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="progressContainer">
                        <ul className="progress">
                            <li className="progress__item progress__item--completed">
                            <i className="fa-solid fa-calendar"></i>
                                <p className="progress__title">Order Placed</p>
                                <p className="progress__info">We Have Recieved Your Order</p>
                                <p className='track-date'>23 July 2023 | 1:39 PM</p>
                            </li>
                            <li className="progress__item progress__item--completed">
                            <i className="fa-solid fa-file-circle-check"></i>
                                <p className="progress__title">Order Confirmed</p>
                                <p className="progress__info">We Have Confirmed Your Order</p>
                                <p className='track-date'>23 July 2023 | 1:39 PM</p>
                            </li>
                            <li className="progress__item">
                            <i className="fa-solid fa-award"></i>
                                <p className="progress__title">Processign and Quality Check</p>
                                <p className="progress__info">We Are Checking Quality</p>
                                <p className='track-date'>23 July 2023 | 1:39 PM</p>
                            </li>
                            <li className="progress__item">
                            <i className="fa-solid fa-box"></i>
                                <p className="progress__title">Order Deliverd</p>
                                <p className="progress__info">We Are Ready</p>
                                <p className='track-date'>23 July 2023 | 1:39 PM</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default track