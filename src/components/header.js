import React from 'react'
import logo from '../img/zabiha-logo.png';
import { Outlet, Link } from "react-router-dom";

const Header = () => {

  function show_nav(){
    let nav = document.querySelector("header nav");
    nav.classList.add("show");
  }
  function hide_nav(){
    let nav = document.querySelector("header nav");
    nav.classList.remove("show");
  }
  function show_currency_drop(){
    let country_drop = document.querySelector(".currency-drop");
    country_drop.classList.add("active");
  }
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Zabiha Logo" />

        </div>
      
        <div className="hamburger">
        <i class="fa-solid fa-bars" onClick={()=>{show_nav()}}></i>
        </div>

        <nav>
        <div className="close">
        <i class="fa-solid fa-xmark" onClick={()=>{hide_nav()}}></i>
        </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book">Book Qurbani</Link></li>
            <li><Link to="/track">Track Qurbani</Link></li>
          </ul>
        </nav>
          <Outlet />
        <div className="btns">
          <div className="country" onClick={()=>{show_currency_drop()}}>
            <i className="fa-solid fa-earth-asia"></i>
            PKR
          </div>
          <div className='currency-drop'>
            Select Currency
            <select>
              <option>PKR</option>
              <option>USD</option>
              <option>AED</option>
            </select>
          </div>
        </div>


      </header>
    </>
  )
}

export default Header