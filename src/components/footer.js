import React from 'react';
// import logo from "../img/zabiha-logo.png";
import { Link } from "react-router-dom";
import { ImageUrl } from '../Helpers';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
        <div className="col-4">
        <img src={ImageUrl("zabiha-logo.png")} alt="Zabiha Logo" />
        </div>
          <div className="col-4">
            <h4>GET TO KNOW US</h4>
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
          </div>
          {/* <div className="col-4">
            <h4>IMPORTANT LINKS</h4>
            <ul>
              <li><a href="">Terms of Usage</a></li>
              <li><a href="">Refund Policy</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Support</a></li>
              <li><a href="">FAQ`S</a></li>
              <li><a href="">EULA</a></li>
            </ul>
          </div> */}
          <div className="col-4">
            <h4>CONNECT WITH US</h4>
            <div className="socials">
              <a href="https://www.instagram.com/my_zabiha?igsh=MTZ3cTJ4eXNpZnFnNA==" target='_blank'><i className="fa-brands fa-instagram"></i></a>
              
              <a href="https://www.facebook.com/profile.php?id=61559837012667&mibextid=ZbWKwL" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
              {/* <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i> */}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} My Zabiha. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer