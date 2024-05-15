import React from "react";
import { cloud_2, logo, rainbow_2 } from "../../imagepath";
import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-thirteen">
        <div className="footer-bg-icon">
          <img src={cloud_2} alt="#" className="aos" data-aos="fade-right" />
          <img src={rainbow_2} alt="#" className="aos" data-aos="fade-left" />
        </div>
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">About us</h2>
                      <ul>
                        <li>
                          <Link to="#">Our Doctors</Link>
                        </li>
                        <li>
                          <Link to="#">Why us</Link>
                        </li>
                        <li>
                          <Link to="#">How it works</Link>
                        </li>
                        <li>
                          <Link to="#">Our News &amp; Events</Link>
                        </li>
                        <li>
                          <Link to="#">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Our cabins</h2>
                      <ul>
                        <li>
                          <Link to="#">North of London</Link>
                        </li>
                        <li>
                          <Link to="#">Golden Hideaway</Link>
                        </li>
                        <li>
                          <Link to="#">Oak Treehouse</Link>
                        </li>
                        <li>
                          <Link to="#">Acacia Retreat</Link>
                        </li>
                        <li>
                          <Link to="#">Blue Lagoon</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Services</h2>
                      <ul>
                        <li>
                          <Link to="#">Prenatal/New-born</Link>
                        </li>
                        <li>
                          <Link to="#">Vaccinations</Link>
                        </li>
                        <li>
                          <Link to="#">Blood tests</Link>
                        </li>
                        <li>
                          <Link to="#">Diagnostic tests</Link>
                        </li>
                        <li>
                          <Link to="#">Parents training classes</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-widget footer-menu footer-menu-thirteen">
                      <h2 className="footer-title">Services</h2>
                      <ul>
                        <li>
                          <Link to="#">Our Doctors</Link>
                        </li>
                        <li>
                          <Link to="#">Why us</Link>
                        </li>
                        <li>
                          <Link to="#">How it works</Link>
                        </li>
                        <li>
                          <Link to="#">Our News &amp; Events</Link>
                        </li>
                        <li>
                          <Link to="/pages/faq">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Support</h2>
                      <ul>
                        <li>
                          <Link to="#">Help Us</Link>
                        </li>
                        <li>
                          <Link to="/pages/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/pages/contactus">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/pages/terms">Terms of Service</Link>
                        </li>
                        <li>
                          <Link to="#">Complaints Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-contents-thirteen-main">
              <div className="row">
                <div className="col-lg-6">
                  <div className="footer-thirt-inner">
                    <h4>Sign up to our Newsletter</h4>
                    <p>
                      For a weekly curated collection of 3 things you can watch,
                      read or listen to switch off from the busy everyday.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Doccure@example.com"
                      />
                      <button type="submit" className="btn">
                        Subscribe
                        <i className="feather-arrow-right ms-2">
                          <FeatherIcon icon="arrow-right" />
                        </i>
                      </button>
                    </form>
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
              <div className="row align-items-center">
                <div className="col-md-4 col-lg-4">
                  <div className="copyright-img">
                    <Link to="/index-10">
                      <img src={logo} alt="#" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="copyright-text">
                    <p className="mb-0">
                      {" "}
                      Copyright © 2023 All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to="#">
                          <FiLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FiTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FiFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FiInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FiYoutube />
                        </Link>
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
    </div>
  );
};

export default Footer;
