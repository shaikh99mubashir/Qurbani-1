import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="book">
        <div className="container breadcrumb">
          <div className="container">
            <p>Home / Contact Us</p>
          </div>
          <section className="privacy-policy container">
            <h3>
              <span>Contact Us</span>
            </h3>
            <p>
              If you have any questions, concerns, or need assistance with your
              order, we're here to help. Please feel free to reach out to us
              through any of the following methods:
            </p>

            <h4>Email Support</h4>
            <p>You can email us directly at:</p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@myzabiha.com">support@myzabiha.com</a>
              </li>
            </ul>

            <h4>WhatsApp Support</h4>
            <p>We are available on WhatsApp for quick support:</p>
            <ul>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/923353375813" target="_blank">
                  Click to Message Us
                </a>
              </li>
            </ul>

            <h4>Operating Hours</h4>
            <p>Our support team is available during the following hours:</p>
            <ul>
              <li>Monday – Saturday: 9:00 AM – 7:00 PM (GMT)</li>
              <li>Sunday: Closed</li>
            </ul>

            <h4>Follow Us</h4>
            <p>Stay updated by following us on social media:</p>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61559837012667&mibextid=ZbWKwL" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/my_zabiha?igsh=MTZ3cTJ4eXNpZnFnNA==" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>

            <h4>Website</h4>
            <p>You can also find more information on our website:</p>
            <ul>
              <li>
                <a href="https://myzabiha.com" target="_blank">
                  https://myzabiha.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
