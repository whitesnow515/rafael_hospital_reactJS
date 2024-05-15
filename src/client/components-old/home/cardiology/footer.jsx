import React, { useEffect } from "react";
import {
  ecg,
  footerlogo,
  footermap,
  hexagon_group_4,
  hexagon_group_5,
} from "../../imagepath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
// import { PhoneCall } from 'feather-icons-react/build/IconComponents'
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      <footer className="footer footer-one footer-ten">
        <div className="footer-ten-bg">
          <img src={hexagon_group_4} alt="#" />
          <img src={hexagon_group_5} alt="#" />
          <img src={ecg} alt="#" />
        </div>
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="footer-details">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <img src={footerlogo} alt="logo" />
                    </div>
                    <div className="footer-about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-twitter" />
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
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget footer-contact">
                    <h2 className="footer-title">&nbsp;</h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <p>
                          {" "}
                          <FontAwesomeIcon icon={faMapMarker} /> &nbsp; 3556
                          Beech Street, USA
                        </p>
                      </div>
                      <div className="footer-address">
                        <p>
                          <FontAwesomeIcon icon={faPhone} /> &nbsp;+1 315 369
                          5943
                        </p>
                      </div>
                      <div className="footer-address mb-0">
                        <p>
                          <FontAwesomeIcon icon={faEnvelope} />{" "}
                          &nbsp;doccure@example.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-map">
                    <img src={footermap} className="img-fluid" alt="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Services by city</h2>
                  <ul>
                    <li>
                      <Link to="#">New York</Link>
                    </li>
                    <li>
                      <Link to="#">Los Angeles</Link>
                    </li>
                    <li>
                      <Link to="#">Chicago</Link>
                    </li>
                    <li>
                      <Link to="#">Houston</Link>
                    </li>
                    <li>
                      <Link to="#">Phoenix</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Services by city</h2>
                  <ul>
                    <li>
                      <Link to="#">New York</Link>
                    </li>
                    <li>
                      <Link to="#">Los Angeles</Link>
                    </li>
                    <li>
                      <Link to="#">Chicago</Link>
                    </li>
                    <li>
                      <Link to="#">Houston</Link>
                    </li>
                    <li>
                      <Link to="#">Phoenix</Link>
                    </li>
                  </ul>
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
                      <Link to="/patient/patient-chat">Chat</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-2 col-md-5">
							
						</div> */}
              <div className="col-lg-4 col-md-7">
                <div className="footer-widget">
                  <h2 className="footer-title">Subscribe to newsletter</h2>
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
                  <span className="mail-note">
                    * Will send you weekly updates for your better finance
                    management.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="copyright-text">
                <p className="mb-0">© 2023 Doccure. All Rights Reserved.</p>
              </div>
              {/* Copyright Menu */}
              <div className="copyright-menu">
                <ul className="policy-menu">
                  <li>
                    <Link to="/pages/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/pages/terms">Terms and Conditions</Link>
                  </li>
                </ul>
              </div>
              {/* /Copyright Menu */}
            </div>
            {/* /Copyright */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
