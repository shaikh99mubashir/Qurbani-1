import React from 'react';
import { Link } from "react-router-dom";
import goat from '../img/goat.png';

const tab_3 = () => {
    return (
        <>
            <div className="tab-3 cutomer_info">
                <form method="post">
                    <div className="container options">
                        <div className="row tab-2">
                            <div className="col-7">

                                <h3 className="confirm_head" style={{ textAlign: "center" }}>Thank You For Your Payment</h3>
                                <h3 className="confirm_head" style={{ textAlign: "center" }}> <span>Your Order Is Placed
                                    Successfully!</span></h3>
                                <div className="container">


                                    <div className="row move">
                                        <div className="col-6">
                                            {/* <a href="/track" className="back">Track Order</a> */}
                                            <Link to="/track" className="back">Track Order</Link>
                                        </div>
                                        <div className="col-6">
                                            <button className="continue">Download Reciept</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-5">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src={goat} alt="Sheep Icon" /></td>
                                        </tr>
                                        <tr>
                                            <td><h3 className="summary"> Order Summary</h3></td>
                                        </tr>

                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="title">Animal Type:</td>
                                            <td className="data">Goat</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Zabiha Type:</td>
                                            <td className="data">Sadqah Zabiha</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Quantity:</td>
                                            <td className="data">1</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Distribute or Delivery:</td>
                                            <td className="data">Distribute</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Order Date:</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Delivery Charges:</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{ marginTop: "30px", textAlign: "center" }}>
                                    <div className="title">Paid Amount</div>
                                    <div className="amount">
                                        ₹ 11,173.84
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}

export default tab_3