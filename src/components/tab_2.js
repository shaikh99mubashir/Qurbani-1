import React from 'react'

const tab_2 = (props) => {
    return (
        <>
            <div className="tab-2 cutomer_info">
                <form method="post">
                    <div className="container options">
                        <div className="row tab-2">
                            <div className="col-7">

                                <h2>Order Delivery Information</h2>
                                <h3>Customer Information</h3>
                                <div className="row">
                                    <input type="text" name="fname" placeholder="Full Name" className="col-6" />
                                    <input type="text" name="lname" placeholder="Last Name" className="col-6" />
                                </div>
                                <div className="row">
                                    <input type="email" name="email" placeholder="Email Address" />
                                </div>
                                <div className="row">
                                    <input type="number" name="number" placeholder="Mobile Number" />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <h3>Recipient Information</h3>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="check"><input type="checkbox" id="check" />Same as customer
                                            information</label>
                                    </div>

                                </div>
                                <div className="row">
                                    <input type="text" name="recipient_fname" placeholder="Full Name" className="col-6" />
                                    <input type="text" name="recipient_lname" placeholder="Last Name" className="col-6" />
                                </div>
                                <div className="row">
                                    <input type="number" name="recipient_number" placeholder="Mobile Number" />
                                </div>
                                <h3>Where should we deliver your order?</h3>
                                <div className="row">
                                    <label htmlFor="address"><input type="radio" name="address" id="address" /> Delivery
                                        Address</label>
                                </div>
                                <h3>Delivery Address Details</h3>
                                <div className="row">
                                    <input type="address" name="Address" id="" placeholder="Address" />
                                </div>
                                <div className="row">
                                    <select name="country" id="country" className="col-6">
                                        <option value="India">India</option>
                                    </select>
                                    <select name="city" id="city" className="col-6">
                                        <option value="India">Mumbai</option>
                                        <option value="India">Delhi</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <input type="postal-code" name="postal-code" id="" placeholder="Postal Code" />
                                </div>
                                <div className="row move">
                                    <div className="col-5">
                                        <button className="back">Back</button>
                                    </div>
                                    <div className="col-7">
                                        <button className="continue" onClick={props.toggleBool2}>Continue to shopping</button>
                                    </div>
                                </div>
                                <div className="row login">
                                    <div className="col-12">
                                        <a href="">Login to your account </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <table>
                                    <tbody>
                                        <tr>
                                            {/* <img src="img/sheep.png" alt=""> */}
                                        </tr>
                                        <tr>
                                            <h3 className="summary"> Order Summary</h3>
                                        </tr>

                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="title">Order Date</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Order Date</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Order Date</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Order Date</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Order Date</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>

                                        <tr>
                                            <td className="title">Order Date</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Order Date</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Order Date</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{marginTop: "30px",textAlign: "center"}}>
                                    <div className="title">Total Payable</div>
                                    <div className="amount">
                                        ₹ 11,173.84
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}

export default tab_2