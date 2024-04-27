import React from 'react';
import cow from '../img/cow.png';
import goat from '../img/goat.png';
import sheep from '../img/sheep.png';

const tab_1 = (props) => {

    function incrementQuantity() {
        const quantityInput = document.querySelector('.quantity-input');
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }

    function decrementQuantity() {
        const quantityInput = document.querySelector('.quantity-input');
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    }
    function delivery_type() {
        let delivery_type = document.querySelector(".delivery-type");
        delivery_type.classList.add("show");
    }
    const handleClick = (event) => {
        const clickedElement = event.target;
        console.log('Clicked Element:', clickedElement);
    
        // Pass the clicked element to another function
        cow_shares(clickedElement);
      };
    function cow_shares(e) {
        let cow_shares = document.querySelector(".cow-shares");
        if (e.value == "Cow") {
            cow_shares.classList.add("show");
        }else{
            cow_shares.classList.remove("show");
        }
        
    }
    function delivery_charges() {
        let delivery_select = document.querySelector(".delivery-type select");
        let delivery_charges = document.querySelector(".delivery-cherges");
        if (delivery_select.value == "Delivery") {
            delivery_charges.style.display = "flex";
            props.toggleShowDelivery();
        }
    }

    return (
        <>
            <div className="tab-1 delivery_info">
                <form method="post">
                    {/* <div className="container fields">
                        <div className="row">

                            <div className="col-4">
                                <label htmlFor="">Delivery Country</label>
                                <select name="" id="">
                                    <option value="India">India</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">Delivery City</label>
                                <select name="" id="">
                                    <option value="India">Mumbai</option>
                                    <option value="India">Delhi</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">Delivery City</label>
                                <input type="date" name="delivery_date" id="delivery_date" />
                            </div>
                        </div>
                    </div> */}
                    <div className="container options">
                        <div className="row">
                            <div className="col-7">
                                <div className="step-1">
                                    <p className="step"><span>Step 1</span> Animal Type</p>
                                    <ul>
                                        <li><input onClick={ handleClick } className="check-animal" type="radio" name="animal-type" value="goat" id="cb1" />
                                            <label className="check-label" htmlFor="cb1"><img src={goat} alt="Goat Icon" /></label>
                                            <p>Goat</p>
                                        </li>
                                        <li><input onClick={ handleClick } className="check-animal" type="radio" name="animal-type" value="sheep" id="cb2" />
                                            <label className="check-label" htmlFor="cb2"><img src={sheep} alt="Sheep Icon" /></label>
                                            <p>Sheep</p>
                                        </li>
                                        <li><input onClick={ handleClick } className="check-animal" type="radio" name="animal-type" value="Cow" id="cb3" />
                                            <label className="check-label" htmlFor="cb3"><img src={cow} alt="Cow Icon" /></label>
                                            <p>Cow</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='cow-shares'>
                                        <p className="step">Select Cow Shares</p>
                                        <input type="radio" id="share-1" name="Cow_shares" value="Cow_shares" />
                                        <label htmlFor="share-1">
                                            1
                                        </label>

                                        <input type="radio" id="share-2" name="Cow_shares" value="Cow_shares" />
                                        <label htmlFor="share-2">
                                            2
                                        </label>
                                        <input type="radio" id="share-3" name="Cow_shares" value="Cow_shares" />
                                        <label htmlFor="share-3">
                                            3
                                        </label>
                                        <input type="radio" id="share-4" name="Cow_shares" value="Cow_shares" />
                                        <label htmlFor="share-4">
                                            4
                                        </label>
                                        <input type="radio" id="share-5" name="Cow_shares" value="Cow_shares" />
                                        <label htmlFor="share-5">
                                            5
                                        </label>
                                        <input type="radio" id="share-6" name="Cow_shares" value="Cow_shares" />
                                        <label htmlFor="share-6">
                                            6
                                        </label>
                                        <input type="radio" id="share-7" name="Cow_shares" value="Cow_shares" />
                                        <label htmlFor="share-7">
                                            7
                                        </label>
                                    </div>
                                <div className="step-2">
                                    <p className="step"><span>Step 2</span> Zabiha Type</p>
                                    <div id='zabiha-type'>
                                        <input onClick={() => { delivery_type() }} type="radio" id="Sadaqah" name="Zabiha Type" value="Sadqah" />
                                        <label htmlFor="Sadaqah">
                                            Sadqah Zabiha
                                        </label>

                                        <input onClick={() => { delivery_type() }} type="radio" id="Aqeeqah" name="Zabiha Type" value="Aqeeqah" />
                                        <label htmlFor="Aqeeqah">
                                            Aqeeqah Zabiha
                                        </label>
                                        <input onClick={() => { delivery_type() }} type="radio" id="Eid-Ul-Adha" name="Zabiha Type" value="Eid-Ul-Adha Zabiha" />
                                        <label htmlFor="Eid-Ul-Adha">
                                            Eid-Ul-Adha Zabiha
                                        </label>
                                    </div>
                                    
                                    <div className='delivery-type'>
                                        <p>Select Distribute or Delivery</p>
                                        <select onChange={() => { delivery_charges() }}>
                                            <option>
                                                Select Distribute or Delivery
                                            </option>
                                            <option value="distribute">
                                                Distribute
                                            </option>
                                            <option value="Delivery">
                                                Delivery
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="step-3">
                                    <p className="step"><span>Step 4</span> Quantity</p>
                                    <div className="quantity-container">

                                        <div className="quantity-control decrement" onClick={() => { decrementQuantity() }}>
                                            <i className="fas fa-minus"></i>
                                        </div>


                                        <input type="number" className="quantity-input" value="1" min="1" max="10" readOnly />


                                        <div className="quantity-control increment" onClick={() => { incrementQuantity() }}>
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div>
                                    {/* <p className="step"><span>Step 3</span> Available Options (Sheep)</p> */}
                                    <div className="row space-between delivery-cherges">
                                        {/* <div className="col-6">
                                            <input type="radio" id="radio2" name="Weight" />
                                            <label className="radio-label" htmlFor="radio2">100 KG </label>
                                        </div>
                                        <div className="col-6">
                                            <div className="cal-price">
                                                Rs 37,976.36
                                            </div>
                                        </div> */}

                                        <div className="col-6"><p>Delivery Charges:</p></div>
                                        <div className="col-6"><p className='textBold'>Rs 400</p></div>
                                    </div>
                                    <div className="total-price text-center">
                                        Total : Rs 37,976.36
                                    </div>
                                    <div className="proceed">
                                        <button onClick={props.toggleBool}>Proceed</button>
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

export default tab_1