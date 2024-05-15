/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import HomeSearch from "./search";
import HomeClinic from "./clinic";
import HomeBookDoctor from "./bookDoctor";
import HomeFeatures from "./features";
import HomeBlog from "./blog";
import { Doctor07, ImgPharmacy1, LabImage, footerlogo } from "./image.jsx";
import Header from "../header";
// import Footer from "../footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  let pathnames = window.location.pathname;
  return (
    <div>
      <div className="main-wrapper">
        <Header {...props} />
        <HomeSearch />
        <section className="section home-tile-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9 m-auto">
                <div className="section-header text-center">
                  <h2>What are you looking for?</h2>
                </div>
                <div className="row">
                  <div className="col-lg-4 mb-3">
                    <div className="card text-center doctor-book-card">
                      <img src={Doctor07} alt="" className="img-fluid" />
                      <div className="doctor-book-card-content tile-card-content-1">
                        <div>
                          <h3 className="card-title mb-0">Visit a Doctor</h3>
                          <Link
                            to="/patient/search-doctor"
                            className="btn book-btn1 px-3 py-2 mt-3"
                            tabIndex={0}
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="card text-center doctor-book-card">
                      <img src={ImgPharmacy1} alt="" className="img-fluid" />
                      <div className="doctor-book-card-content tile-card-content-1">
                        <div>
                          <h3 className="card-title mb-0">Find a Pharmacy</h3>
                          <Link
                            to="/Pharmacy/pharmacy-search"
                            className="btn book-btn1 px-3 py-2 mt-3"
                            tabIndex={0}
                          >
                            Find Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="card text-center doctor-book-card">
                      <img src={LabImage} alt="" className="img-fluid" />
                      <div className="doctor-book-card-content tile-card-content-1">
                        <div>
                          <h3 className="card-title mb-0">Find a Lab</h3>
                          <Link
                            to="#"
                            className="btn book-btn1 px-3 py-2 mt-3"
                            tabIndex={0}
                          >
                            Coming Soon
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomeClinic />
        <HomeBookDoctor />
        <HomeFeatures />
        <HomeBlog />
      </div>
      {/* Footer */}
      <footer className="footer">
        {/* Footer Top */}
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src={footerlogo} alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-facebook-f" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-dribbble" />{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Patients</h2>
                  <ul>
                    <li>
                      <Link to="/patient/search-doctor">
                        Search for Doctors
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/patient/booking1">Booking</Link>
                    </li>
                    <li>
                      <Link to="/patient/dashboard">Patient Dashboard</Link>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Doctors</h2>
                  <ul>
                    <li>
                      <Link to="/doctor/appointments">Appointments</Link>
                    </li>
                    <li>
                      <Link to="/patient/patient-chat">Chat</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/doctor/doctor-register">Register</Link>
                    </li>
                    <li>
                      <Link to="/doctor/doctor-dashboard">
                        Doctor Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span>
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <p>
                        {" "}
                        3556 Beech Street, San Francisco,
                        <br /> California, CA 94108{" "}
                      </p>
                    </div>
                    <p>
                      <i className="fas fa-phone-alt" />
                      +1 315 369 5943
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-envelope" />
                      doccure@example.com
                    </p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container-fluid">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">
                      © 2023 Doccure. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to="/terms-condition">Terms and Conditions</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy">Policy</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Copyright Menu */}
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      {/* /Footer */}
      {/* Cursor */}
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
      {/* /Cursor */}
    </div>
  );
};

export default Home;
