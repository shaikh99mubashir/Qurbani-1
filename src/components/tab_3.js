import React from 'react';
import { Link } from "react-router-dom";
import cow from '../img/cow.png';
import goat from '../img/goat.png';
import sheep from '../img/sheep.png';

const tab_3 = (props) => {
    const renderText = () => {
        if (props.form_val_1.animal == "goat") {
          return goat;
        } else if (props.form_val_1.animal == "sheep") {
          return sheep;
        }else{
            return cow;
        }
      }
    return (
        <>
            <div className="tab-3 cutomer_info">
                <form method="post">
                    <div className="container options">
                        <div className="row tab-2">
                            <div className="col-7">

                                <h3 className="confirm_head" style={{ textAlign: "center" }}>Thank You For Your Payment</h3>
                                <h4 className="confirm_head" style={{ textAlign: "center" }}>Your Order ID is <span style={{color: "#d8363d"}}>{props.response.order.order_id}</span></h4>
                                <p className="confirm_head" style={{ textAlign: "center", marginBottom: "10px" }}> <span>Save it to track your order.</span></p>
                                <p className="confirm_head" style={{ textAlign: "center" }}> <span>Thankyou for shopping with My Zabiha, you will soon receive the confirmation email and stay active on your registered number so the team may contact you for details or queries.</span></p>
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
                                            <td><img src={renderText()}/> </td>
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
                                            <td className="data">{props.form_val_1.animal}</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Zabiha Type:</td>
                                            <td className="data">{props.form_val_1.type}</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Quantity:</td>
                                            <td className="data">{props.form_val_1.quantity}</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Distribute or Delivery:</td>
                                            <td className="data">{props.form_val_1.distribute_or_delivery}</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Price:</td>
                                            <td className="data">{props.form_val_1.price + " " + localStorage.getItem("currency")}</td>
                                        </tr>
                                        {/* <tr>
                                            <td className="title">Order Date:</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr> */}
                                        <tr>
                                            <td className="title">Delivery Charges:</td>
                                            <td className="data">
                                            {props.dc + " " + localStorage.getItem("currency")}
                                            {/* {props.dc} */}
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div style={{ marginTop: "30px", textAlign: "center" }}>
                                    <div className="title">Total Amount</div>
                                    <div className="amount">
                                        {(Number(props.form_val_1.price) * Number(props.form_val_1.quantity)) + Number(props.dc) + " " + localStorage.getItem("currency")}
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