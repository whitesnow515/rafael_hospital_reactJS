/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logo.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

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
      {!props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") &&
        !props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") && (
          <footer className="footer footer-one">
            <div className="footer-top">
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
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4">
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
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4">
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
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-5">
                    <div className="footer-widget footer-contact">
                      <h2 className="footer-title">Contact Us</h2>
                      <div className="footer-contact-info">
                        <div className="footer-address">
                          <p>
                            <i>
                              <FeatherIcon
                                icon="map-pin"
                                style={{ width: "16px", height: "16px" }}
                              />
                            </i>{" "}
                            3556 Beech Street, USA
                          </p>
                        </div>
                        <div className="footer-address">
                          <p>
                            <i>
                              <FeatherIcon
                                icon="phone-call"
                                style={{ width: "16px", height: "16px" }}
                              />
                            </i>{" "}
                            +1 315 369 5943
                          </p>
                        </div>
                        <div className="footer-address mb-0">
                          <p>
                            <i>
                              <FeatherIcon
                                icon="mail"
                                style={{ width: "16px", height: "16px" }}
                              />
                            </i>{" "}
                            doccure@example.com
                          </p>
                        </div>
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
                              <i className="fab fa-facebook" />{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-instagram" />
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                {/* Copyright */}
                <div className="copyright">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="copyright-text">
                        <p className="mb-0">
                          {" "}
                          Copyright © 2023{" "}
                          <Link
                            to="https://themeforest.net/user/dreamguys/portfolio"
                            target="_blank"
                          >
                            Dreamguys.
                          </Link>{" "}
                          All Rights Reserved
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      {/* Copyright Menu */}
                      <div className="copyright-menu">
                        <ul className="policy-menu">
                          <li>
                            <Link to="/pages/privacy-policy">
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="/pages/terms">Terms and Conditions</Link>
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
          </footer>
        )}
    </>
  );
};

export default Footer;
