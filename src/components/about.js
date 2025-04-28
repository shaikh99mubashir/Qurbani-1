import React from "react";
import { ImageUrl } from "../Helpers";

const About = () => {
  return (
    <>
      <div className="about" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={ImageUrl("about.png")} alt="backimage" />
            </div>
            <div className="col-6">
              <h3>
                About <span>My Zabiha</span>
              </h3>
              {/* <p className="colored">"CREED Qurbani is ardent about providing the best quality meat for your religious and
                personal needs "</p> */}
              <p>
                My Zabiha is designed to streamline the Qurbani experience for
                everyone, especially domestic and overseas Pakistani. We cater to all your{" "}
                <span className="colored">Qurbani needs,</span>
                <strong>
                  {" "}
                  facilitating the selection, sacrifice, and distribution of
                  your Qurbani animal on your behalf.
                </strong>
                We provide a single-window solution for overseas Muslims and
                individuals who seek a complete Qurbani service — from the
                purchase of animals to the distribution of meat — without any
                tiredness or stress. In addition, we manage{" "}
                <span className="colored">Aqiqah</span> and{" "}
                <span className="colored">Sadaqah</span> arrangements.
              </p>

              <h4>Our Mission:</h4>
              <ul>
                <li>
                  <strong>Empowering Pakistanis: </strong>We make Qurbani
                  accessible and convenient for domestic and overseas Pakistanis, allowing them to
                  actively participate in this sacred tradition.
                </li>
                <li>
                  <strong>Facilitate the Qurbani and Distribution: </strong>On
                  behalf of the domestic and overseas we can fulfill the qurbani and
                  distribute the meet to the needy people as per the
                  instructions.
                  <br />
                  <em>
                    Globally, get your Qurbani meat delivered to your doorstep,
                    ensuring ease and satisfaction.
                  </em>
                </li>
                <li>
                  <strong>Peace of Mind for Donors: </strong>Our secure platform
                  and clear communication keep you informed every step of the
                  way, offering peace of mind as you fulfill your Qurbani
                  obligations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature" data-aos="fade-up">
        <div className="container">
          <h3 style={{ textAlign: "center" }}>
            Fulfill your Islamic Obligation with Ease! My Zabiha Simplifies the{" "}
            <span>Entire Process!</span>
          </h3>
          <p>
            Browse and purchase animals as per your needs and budget. We
            prioritize ethical sourcing and respectful treatment of animals.
            Select your preferred sacrifice method, either home delivery or a
            designated center, for a stress-free experience. Track your
            Qurbani's progress and receive updates along the way. My Zabiha:
            Qurbani made it convenient.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
