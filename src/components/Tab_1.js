import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import cow from '../img/cow.png';
// import goat from '../img/goat.png';
// import sheep from '../img/sheep.png';

const Tab_1 = (props) => {

  if(props.formReset){
    let formreset = document.getElementById("form-tab-1");
    formreset.reset();
    props.set_FormReset(false);
  }
  
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  setValue('price', props.price);
  const onSubmit = (data) => {
    let animal_type = document.getElementById("animal-type");
    let zabiha_type_val = document.getElementById("zabiha-type-val");
    let quantity = document.getElementById("quantity");
    let delivery_type = document.getElementById("delivery-type");
    if (
      animal_type.value === "Select Your Animal" ||
      zabiha_type_val.value === "Choose Your Qurbani Type" ||
      quantity.value === "" ||
      delivery_type.value === "Select Distribute or Delivery"
    ) {
      alert("Please select the value");
    } else {
      props.toggleBool();
      props.set_form_tab1(data);
    }
    
  };

 const [quantity,setquantity] = useState(1)

  function incrementQuantity() {
    if(quantity<10){
    setquantity(quantity + 1);
    const newValue = quantity + 1;
    setValue('quantity', newValue);
    }
  }

  function decrementQuantity() {
    if(quantity>1){
    setquantity(quantity - 1);
    const newValue = quantity - 1;
    setValue('quantity', newValue);
    }
  }
  function delivery_type() {
    let delivery_type = document.querySelector(".delivery-type");
    delivery_type.classList.add("show");
  }
  // const handleClick = (event) => {
  //     const clickedElement = event.target;
  //     console.log('Clicked Element:', clickedElement);

  //     // Pass the clicked element to another function
  //     Cow_or_shares(clickedElement);
  // };
  // const handleClick2 = (event) => {
  //     const clickedElement = event.target;
  //     console.log('Clicked Element:', clickedElement);

  //     // Pass the clicked element to another function
  //     Cow_shares(clickedElement);
  // };
 

  


  function Cow_or_shares() {
    let Cow_or_shares = document.querySelector(".Cow_or_shares");
    let animal_val = document.querySelector(".step-1 select");


    if (animal_val.value == "cow") {
      Cow_or_shares.classList.add("show");
    } else {
      Cow_or_shares.classList.remove("show");
    }
    let delivery_charges = document.querySelector(".delivery-cherges");
      delivery_charges.style.display = "flex";
     props.set_animal_price(animal_val.value);
  }



  function Cow_shares() {
    let cow_shares = document.querySelector(".cow-shares");
    let full_or_shares = document.querySelector(".Cow_or_shares select");
    if (full_or_shares.value == "shares") {
      cow_shares.classList.add("show");
    } else {
      cow_shares.classList.remove("show");
    }
  }
  function delivery_charges() {
    let delivery_select = document.querySelector(".delivery-type select");
    
    if (delivery_select.value == "Delivery") {
     
      props.toggleShowDelivery();
    }
  }
  // function form_submit(event){
  //   let animal_type = document.getElementById("animal-type")
  //   let zabiha_type_val = document.getElementById("zabiha-type-val");
  //   let quantity = document.getElementById("quantity");
  //   if (animal_type.value == "Select Your Animal" || zabiha_type_val.value == 'Choose Your Qurbani Type' || quantity.value == '') {
  //     alert("Please select the value");
  //     event.preventDefault();
  // }else{
  //     props.toggleBool();
  // }
  // }

  return (
    <>
      <div className="tab-1 delivery_info">
        <form method="post" id="form-tab-1" onSubmit={handleSubmit(onSubmit)}>
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
              <div className="col-12">
                <div className="step-1">
                  <p className="step">
                    <span>Step 1</span> Animal Type
                  </p>
                  <p>Select Your Animal</p>
                  <select
                    {...register("animal")}
                    onChange={() => {
                      Cow_or_shares();
                    }}
                    required={true}
                    id="animal-type"
                  >
                    <option>Select Your Animal</option>
                    <option value="cow">Cow</option>
                    <option value="goat">Goat</option>
                    <option value="sheep">Sheep</option>
                  </select>
                </div>
                <div className="Cow_or_shares">
                  <p>Select Full Cow or Shares</p>
                  <select
                    {...register("cow_or_shares")}
                    onChange={() => {
                      Cow_shares();
                    }}
                  >
                    <option>Select full cow or shares</option>
                    <option value="full cow">Full Cow</option>
                    <option value="shares">Shares</option>
                  </select>
                  {/* <input onClick={Cow_or_shares()} type="radio" id="full-cow" name="Cow_or_shares" value="full-cow" />
                                    <label htmlFor="full-cow">
                                        Full Cow
                                    </label>

                                    <input onClick={Cow_or_shares()} type="radio" id="cow-share" name="Cow_or_shares" value="cow-share" />
                                    <label htmlFor="cow-share">
                                        Shares
                                    </label> */}
                </div>
                <div className="cow-shares">
                  <p className="step">Select Cow Shares</p>
                  <input
                    type="radio"
                    id="share-1"
                    {...register("cow_shares")}
                    value="1"
                  />
                  <label htmlFor="share-1">1</label>

                  <input
                    type="radio"
                    id="share-2"
                    {...register("cow_shares")}
                    value="2"
                  />
                  <label htmlFor="share-2">2</label>
                  <input
                    type="radio"
                    id="share-3"
                    {...register("cow_shares")}
                    value="3"
                  />
                  <label htmlFor="share-3">3</label>
                  <input
                    type="radio"
                    id="share-4"
                    {...register("cow_shares")}
                    value="4"
                  />
                  <label htmlFor="share-4">4</label>
                  <input
                    type="radio"
                    id="share-5"
                    {...register("cow_shares")}
                    value="5"
                  />
                  <label htmlFor="share-5">5</label>
                  <input
                    type="radio"
                    id="share-6"
                    {...register("cow_shares")}
                    value="6"
                  />
                  <label htmlFor="share-6">6</label>
                  <input
                    type="radio"
                    id="share-7"
                    {...register("cow_shares")}
                    value="7"
                  />
                  <label htmlFor="share-7">7</label>
                </div>
                <div className="step-2">
                  <p className="step">
                    <span>Step 2</span> Zabiha Type
                  </p>
                  <div id="zabiha-type">
                    <p>Choose Your Qurbani Type</p>
                    <select
                      {...register("type")}
                      onChange={() => {
                        delivery_type();
                      }}
                      id="zabiha-type-val"
                      required={true}
                    >
                      <option>Choose Your Qurbani Type</option>
                      <option value="sadqah">Sadqah</option>
                      <option value="aqeeqah">Aqeeqah</option>
                      <option value="eid-ul-adha">Eid-Ul-Adha</option>
                    </select>

                    {/* <input
                      onClick={() => {
                        delivery_type();
                      }}
                      type="radio"
                      id="Sadaqah"
                      name="Zabiha Type"
                      value="Sadqah"
                    />
                    <label htmlFor="Sadaqah">Sadqah Zabiha</label>

                    <input
                      onClick={() => {
                        delivery_type();
                      }}
                      type="radio"
                      id="Aqeeqah"
                      name="Zabiha Type"
                      value="Aqeeqah"
                    />
                    <label htmlFor="Aqeeqah">Aqeeqah Zabiha</label>
                    <input
                      onClick={() => {
                        delivery_type();
                      }}
                      type="radio"
                      id="Eid-Ul-Adha"
                      name="Zabiha Type"
                      value="Eid-Ul-Adha Zabiha"
                    />
                    <label htmlFor="Eid-Ul-Adha">Eid-Ul-Adha Zabiha</label> */}
                  </div>

                  <div className="delivery-type">
                    <p>Select Distribute or Delivery</p>
                    <select
                      {...register("distribute_or_delivery")}
                      onChange={() => {
                        delivery_charges();
                      }}
                      id="delivery-type"
                    >
                      <option>Select Distribute or Delivery</option>
                      <option value="distribute">Distribute</option>
                      <option value="Delivery">Delivery</option>
                    </select>
                  </div>
                </div>
                <div className="step-3">
                  <p className="step">
                    <span>Step 4</span> Quantity
                  </p>
                  <div className="quantity-container">
                    <div
                      className="quantity-control decrement"
                      onClick={() => {
                        decrementQuantity();
                      }}
                    >
                      <i className="fas fa-minus"></i>
                    </div>

                    <input
                    {...register("quantity")}
                      type="number"
                      className="quantity-input"
                      name="quantity"
                      value={quantity}
                      readOnly
                      id="quantity"
                      
                    />

                    <div
                      className="quantity-control increment"
                      onClick={() => {
                        incrementQuantity();
                      }}
                    >
                      <i className="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
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

                  <div className="col-6">
                    <p>Price (Per Animal):</p>
                  </div>
                  <div className="col-6">
                    <p className="textBold">
                    <input type='hidden' id='price' name='price' {...register("price")} value={props.price} />
                    {props.price + " " + localStorage.getItem("currency")}
                    </p>
                  </div>
                </div>
                {/* <div className="total-price text-center">
                  Total : Rs 37,976.36
                </div> */}
                <div className="proceed">
                  {/* props.toggleBool */}

                  <button
                    type="submit"
                    // onClick={()=>{form_submit()}}
                  >
                    Proceed With Payment
                  </button>
                </div>
              </div>
              {/* <div className="col-5">
                <div>
                 
                  <p className="step"><span>Step 3</span> Available Options (Sheep)</p>
                </div>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Tab_1;
