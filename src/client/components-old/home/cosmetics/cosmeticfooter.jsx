import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const CosmeticFooter = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer footer-one footer-sixteen">
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                    <button type="submit" className="btn footer-btn">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Company</h2>
                  <ul>
                    <li>
                      <Link to="/pages/aboutus">About us</Link>
                    </li>
                    <li>
                      <Link to="/Pharmacy/cart">Careers</Link>
                    </li>
                    <li>
                      <Link to="#">News</Link>
                    </li>
                    <li>
                      <Link to="/pages/contactus">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Resources</h2>
                  <ul>
                    <li>
                      <Link to="#">Events</Link>
                    </li>
                    <li>
                      <Link to="#">Help Centre</Link>
                    </li>
                    <li>
                      <Link to="#">Tutorials</Link>
                    </li>
                    <li>
                      <Link to="#">Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-5">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Social</h2>
                  <ul>
                    <li>
                      <Link to="#">Twitter</Link>
                    </li>
                    <li>
                      <Link to="#">LinkedIn</Link>
                    </li>
                    <li>
                      <Link to="#">Facebook</Link>
                    </li>
                    <li>
                      <Link to="#">Dribble</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-7">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Legal</h2>
                  <ul>
                    <li>
                      <Link to="/pages/terms">Terms &amp; Condition</Link>
                    </li>
                    <li>
                      <Link to="/pages/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/pages/comingsoon">Cookies</Link>
                    </li>
                    <li>
                      <Link to="#">Licenses</Link>
                    </li>
                  </ul>
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
                    <p>© 2023 Doccure. All rights reserve.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-twitter" />{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fa-brands fa-whatsapp" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fa-brands fa-youtube" />
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
      {/* /Footer */}
    </>
  );
};

export default CosmeticFooter;
