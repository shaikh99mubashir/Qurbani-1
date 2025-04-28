import React, { useEffect, useState } from "react";
// import logo from "../img/zabiha-logo.png";
import { Outlet, Link } from "react-router-dom";
import { ImageUrl } from "../Helpers";

const Header = (props) => {
  const {setDcs, setprice} = props
  const [currency, setCurrency] = useState(localStorage.getItem("currency"));
  if(localStorage.getItem("currency") === null){
    localStorage.setItem("currency", "PKR");
    setCurrency("PKR");
  }
  useEffect(()=>{
    loadprices();
    loaddcs();
  }, [currency]);



  function change_currency(){
    let item = document.querySelector("#select-currency");
    localStorage.setItem("currency", item.value);
    setCurrency(item.value);
    currency_popup_close();
    if(window.location.href.includes("/book")){
      props.backBtn();
      props.set_FormReset(false);
      props.set_FormReset(true);
    }
  }
  
  const [priceObj, setPriceObj] = useState({});
  async function loadprices() {
    try {
      const response = await fetch("https://myzabiha.com/web_app/public/api/animal_prices");
      const prices = await response.json();
      if (localStorage.getItem("currency") === "USD") {
        setPriceObj({
          // cow : '793',
          // goat : '164',
          // sheep : '146'
          cow : prices.cow_usd,
          goat : prices.goat_usd,
          sheep : prices.sheep_usd
        });
      }else if (localStorage.getItem("currency") === "PKR"){
        setPriceObj({
          // cow : '218000',
          // goat : '45000',
          // sheep : '40000'
          cow : prices.cow_pkr,
          goat : prices.goat_pkr,
          sheep : prices.sheep_pkr
        });
      }else if(localStorage.getItem("currency") === "AED"){
        setPriceObj({
          // cow : '3115',
          // goat : '643',
          // sheep : '572'
          cow : prices.cow_aed,
          goat : prices.goat_aed,
          sheep : prices.sheep_aed
        });
      }
    } catch (error) {
      alert("Sorry for the inconvenience, We Are facing some issues from Server");
    }

   
  }
  useEffect(()=>{
    if(window.location.href.includes("/book")){
    setprice(priceObj);
    }
  },[priceObj, setprice] );

  
  const [dcsObj, setdcsObj] = useState({});
  async function loaddcs() {
    try{
      const response = await fetch("https://myzabiha.com/web_app/public/api/delivery_charges");
      const dcs = await response.json();
      if(localStorage.getItem("currency") === "USD"){
          setdcsObj({
              local : dcs.local_usd,
              int : dcs.int_usd,
          });
      } else if(localStorage.getItem("currency") === "PKR"){
          setdcsObj({
              local : dcs.local_pkr,
              int : dcs.int_pkr,
          });
      }else if(localStorage.getItem("currency") === "AED"){
          setdcsObj({
              local : dcs.local_aed,
              int : dcs.int_aed,
          });
      }
    } catch (error) {
      alert("Sorry for the inconvenience, We Are facing some issues from Server");
    }
  }
  useEffect(()=>{
    if(window.location.href.includes("/book")){
    setDcs(dcsObj);
    }
  },[dcsObj, setDcs] );



  function show_nav() {
    let nav = document.querySelector("header nav");
    nav.classList.add("show");
  }
  function hide_nav() {
    let nav = document.querySelector("header nav");
    nav.classList.remove("show");
  }
  function show_currency_drop() {
    let country_drop = document.querySelector(".currency-popup");
    country_drop.classList.add("active");
  }
  function currency_popup_close(){
    let country_drop = document.querySelector(".currency-popup");
    country_drop.classList.remove("active");
  }
  return (
    <>
      <div className="currency-popup">
        <div className="currency">
          <div className="currency-close" onClick={()=>{currency_popup_close()}}>
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </div>
          <p>Select Currency</p>
          <select id="select-currency" defaultValue={'DEFAULT'} onChange={()=>{change_currency()}}>
            {/* { if(currency === PKR){
            <option selected>PKR</option>
            }else{
            <option>PKR</option>
            }} */}
          {currency === "PKR"? 
            <option value="DEFAULT">PKR</option>:
            <option>PKR</option>
          }
          {currency === "USD"? 
            <option value="DEFAULT">USD</option>:
            <option>USD</option>
          }
          {currency === "AED"? 
            <option value="DEFAULT">AED</option>:
            <option>AED</option>
          }
          </select>
        </div>
      </div>
      <header>
        <div className="logo">
          <img src={ImageUrl("zabiha-logo.png")} alt="Zabiha Logo" />
        </div>

        <div className="hamburger">
          <i
            className="fa-solid fa-bars"
            onClick={() => {
              show_nav();
            }}
          ></i>
        </div>

        <nav>
          <div className="close">
            <i
              className="fa-solid fa-xmark"
              onClick={() => {
                hide_nav();
              }}
            ></i>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/book">Book Qurbani</Link>
            </li>
            <li>
              <Link to="/track">Track Qurbani</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <div className="btns">
          <div
            className="country"
            onClick={() => {
              show_currency_drop();
            }}
          >
            <i className="fa-solid fa-earth-asia"></i>
            {currency}

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
