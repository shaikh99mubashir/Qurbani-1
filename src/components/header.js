import React from "react";
import logo from "../img/zabiha-logo.png";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
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
          <select>
            <option>PKR</option>
            <option>USD</option>
            <option>AED</option>
          </select>
        </div>
      </div>
      <header>
        <div className="logo">
          <img src={logo} alt="Zabiha Logo" />
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
            PKR
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
