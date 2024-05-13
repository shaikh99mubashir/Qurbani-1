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
                            {/* <li className="progress__item">
                            <i className="fa-solid fa-award"></i>
                                <p className="progress__title">Processign and Quality Check</p>
                                <p className="progress__info">We Are Checking Quality</p>
                                <p className='track-date'>23 July 2023 | 1:39 PM</p>
                            </li> */}
                            <li className="progress__item progress__item--completed">
                            <i className="fa-solid fa-box"></i>
                                <p className="progress__title">Order Delivered</p>
                                <p className="progress__info">We Are Ready</p>
                                <p className='track-date'>23 July 2023 | 1:39 PM</p>
                            </li>
                            <li className="progress__item progress__item--completed">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 87 70" x="0px" y="0px"><circle cx="72.12" cy="71.81" r="4.33"/><circle cx="27.7" cy="71.81" r="4.26"/><path d="M82.46,43.43H79.53L78,36.65l0-.1a8.45,8.45,0,0,0-8.15-6.26H64.34v-3.6a2.84,2.84,0,0,0-2.83-2.83h-44a2.84,2.84,0,0,0-2.83,2.83V63a2.84,2.84,0,0,0,2.83,2.83h6.31a7.08,7.08,0,0,1,7.69,0H68.28a7.08,7.08,0,0,1,7.69,0h6.49A2.84,2.84,0,0,0,85.29,63V46.27A2.84,2.84,0,0,0,82.46,43.43ZM54.77,37.21,40.14,51.84a2.21,2.21,0,0,1-3.12,0l-8.57-8.57a2.21,2.21,0,0,1,3.12-3.12l7,7L51.65,34.09a2.21,2.21,0,0,1,3.12,3.12ZM79.62,60.14H64.34V36H69.8a2.77,2.77,0,0,1,2.66,2l2,8.93a2.84,2.84,0,0,0,2.76,2.2h2.35Z"/></svg>
                                <p className="progress__title">Order Completed</p>
                                <p className="progress__info">Your order is completed</p>
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