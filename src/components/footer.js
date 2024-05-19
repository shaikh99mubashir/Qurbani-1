import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h4>GET TO KNOW US</h4>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-4">
            <h4>IMPORTANT LINKS</h4>
            <ul>
              <li><a href="">Terms of Usage</a></li>
              <li><a href="">Refund Policy</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Support</a></li>
              <li><a href="">FAQ`S</a></li>
              <li><a href="">EULA</a></li>
            </ul>
          </div>
          <div className="col-4">
            <h4>CONNECT WITH US</h4>
            <div className="socials">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
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