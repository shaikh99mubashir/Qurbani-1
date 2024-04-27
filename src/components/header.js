import React from 'react'
import logo from '../img/logo.png';
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
  return (
    <>
      <header>
        <div className="logo">
          <h1 className='logo'>Qurbani</h1>

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
          <div className="login">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="country">
            <i className="fa-solid fa-earth-asia"></i>
          </div>
        </div>


      </header>
    </>
  )
}

export default Header