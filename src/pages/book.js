import React, { useState, useEffect } from 'react'
import '../App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Tabs from '../components/tabs';
import Tab_1 from '../components/Tab_1';
import Tab_2 from '../components/Tab_2';

import Tab_3 from '../components/tab_3';

const Book = () => {

  const [formReset, setFormReset] = useState(false);
  function set_FormReset(form_reset) {
    setFormReset(form_reset);
  }
  useEffect(()=>{
    // console.log(formReset);
  }, [formReset]);

  const [prices, setPrices] = useState({});
  function setprice(func_prices) {
    setPrices(func_prices);
  };useEffect(() => {
    // console.log(prices);
  }, [prices]);

  const [price, setPrice] = useState(0);
  useEffect(()=>{
  },[price]);
function set_animal_price(animal_val){
  switch (animal_val) {
    case "cow":
      setPrice(prices.cow);
      
      break;
    case "goat":
      setPrice(prices.goat);
      
      break;
    case "sheep":
      setPrice(prices.sheep);
      
      break;
  
    default:
      break;
  }
}

const [dcs, setdcs] = useState({});
  function setDcs(func_prices) {
    setdcs(func_prices);
  };useEffect(() => {
    // console.log(dcs);
  }, [dcs]);

  const [dc, setdc] = useState(0);
  useEffect(()=>{
    // console.log(dc);
  },[dc]);
  function set_delivery_charges(country_val){
    console.log(country_val)
    switch (country_val) {
      case "Pakistan":
        setdc(dcs.local);
        
        break;
    
      default:
        setdc(dcs.int);
        break;
    }
  }

  const [formResetTab2, setFormResetTab2] = useState(false);
  function set_FormResetTab2(form_reset) {
    setFormResetTab2(form_reset);
  }
  useEffect(()=>{
    console.log(formResetTab2);
  }, [formResetTab2]);

  //**************  Form Data Collection ********************************

  const [form_val_1, set_form_val_1] = useState({});
  function set_form_tab1(val) {
    set_form_val_1(val);
  };useEffect(() => {
    // console.log(form_val_1);
  }, [form_val_1]);

  const [form_val_2, set_form_val_2] = useState({ data: 22 });
  function set_form_tab2(val) {
    set_form_val_2(val);
    //  sendForm()
  }


  const [formData, setFormData] = useState({});
  useEffect(() => {
    console.log(form_val_2);
    setFormData({...form_val_1,...form_val_2})
  }, [form_val_2]);




  let sendForm = async (formData) => {
    
      try {
        const response = await fetch('https://myzabiha.com/web_app/public/api/book_now', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // Convert form data to JSON format
        });
        if (response.ok) {
          // API call succeeded
          const responseData = await response.json();
          console.log('API Response:', responseData);
          toggleBool2();
          // Perform any additional actions based on API response
        } else {
          // API call failed
          const errorData = await response.json();
          console.error('API Error:', errorData);
          // Handle error condition
        }
      } catch (error) {
        console.error('Error sending form data:', error);
        // Handle fetch error
      }
      // console.log(formData);
  
  }


  const [showDelivery, setShowDelivery] = useState(false);
  function toggleShowDelivery() {
    setShowDelivery(true);
  }

  const [myBool, setmyBool] = useState(1);
  let component;
  let activate = false;
  let activate2 = false;
  let activate3 = false;
  function toggleBool() {
    setmyBool(2)
  }
  function backBtn() {
    setmyBool(1)
  }
  function toggleBool2() {
    setmyBool(3)
  }
  if (myBool === 1) {
    component = <Tab_1 price={price} set_FormReset={set_FormReset} formReset={formReset} set_animal_price={set_animal_price} form_val_1={form_val_1} set_form_tab1={set_form_tab1} toggleBool={toggleBool} showDelivery={showDelivery} toggleShowDelivery={toggleShowDelivery} />;
    activate = true;
  } else if (myBool === 2) {
    component = <Tab_2 dc={dc} set_FormResetTab2={set_FormResetTab2} formResetTab2={formResetTab2} dcs={dcs} set_delivery_charges={set_delivery_charges} formData={formData} sendForm={sendForm} form_val_1={form_val_1} set_form_tab2={set_form_tab2} backBtn={backBtn} toggleBool2={toggleBool2} showDelivery={showDelivery} />;
    activate2 = true;
  } else if (myBool === 3) {
    component = <Tab_3 dc={form_val_2.delivery_charges} form_val_1={form_val_1}/>;
    activate3 = true;
  }



  return (
    <>
      <Header backBtn={backBtn} setDcs={setDcs} set_FormReset={set_FormReset} setprice={setprice} />
      <main className="book">
        <div className="container breadcrumb">
          <div className="container">
            <p><a href="">Home</a> / Create Order</p>
          </div>
        </div>
        <div className="create_order">
          <h3 style={{ textAlign: "center" }}>Book your Qurbani using <span>simple steps.</span></h3>
        </div>
        <Tabs activate={[activate, activate2, activate3]} />
        {component}
      </main>
      <Footer />
    </>
  )
}

export default Book