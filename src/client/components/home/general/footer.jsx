/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      {" "}
      {!props.location.pathname.includes("/index-4") &&
        !props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") && (
          <footer className="footer footer-one">
            <div className="footer-top aos" data-aos="fade-up">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-about">
                      <div className="footer-logo">
                        <img src={logo} alt="logo" />
                      </div>
                      <div className="footer-about-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <div className="social-icon">
                          <ul>
                            <li>
                              <Link to="#0">
                                <i className="fab fa-facebook-f"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#0">
                                <i className="fab fa-twitter"></i>{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="#0">
                                <i className="fab fa-linkedin-in"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#0">
                                <i className="fab fa-instagram"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#0">
                                <i className="fab fa-dribbble"></i>{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4">
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
                  </div>

                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">For Doctors</h2>
                      <ul>
                        <li>
                          <Link to="/doctor/appointments">Appointments</Link>
                        </li>
                        <li>
                          <Link to="/doctor/chat-doctor">Chat</Link>
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
                  </div>

                  <div className="col-lg-3 col-md-5">
                    <div className="footer-widget footer-contact">
                      <h2 className="footer-title">Contact Us</h2>
                      <div className="footer-contact-info">
                        <div className="footer-address">
                          <span>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <p>
                            {" "}
                            3556 Beech Street, San Francisco,California, CA
                            94108{" "}
                          </p>
                        </div>
                        <p>
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          +1 315 369 5943
                        </p>
                        <p className="mb-0">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          doccure@example.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-7">
                    <div className="footer-widget">
                      <h2 className="footer-title">Join Our Newsletter</h2>
                      <div className="subscribe-form">
                        <form action="#">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                          />
                          <button type="submit" className="btn">
                            Submit
                          </button>
                        </form>
                      </div>
                      <div className="social-icon">
                        <ul>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-facebook"></i>{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-twitter"></i>{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="container-fluid">
                <div className="copyright">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="copyright-text">
                        <p className="mb-0">
                          &copy; 2020 Doccure. All rights reserved.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="copyright-menu">
                        <ul className="policy-menu">
                          <li>
                            <Link to="/terms">Terms and Conditions</Link>
                          </li>
                          <li>
                            <Link to="/privacy-policy">Policy</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )}
    </>
  );
};

export default Footer;
