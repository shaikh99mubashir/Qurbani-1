import React from 'react'
import logo from '../img/logo.png';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <h1 className='logo'>Qurbani</h1>

        </div>
        <nav>
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