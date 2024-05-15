import React from "react";
import {
  footer_card_icon_01,
  footer_card_icon_02,
  footer_card_icon_03,
  footer_card_icon_04,
  footer_img_01,
  footer_img_02,
  footer_logo,
} from "../../imagepath";
import { Link } from "react-router-dom";

const FooterHomeCare = () => {
  return (
    <footer className="footer footer-sec-fourteen">
      <div className="footer-top">
        <div className="row">
          <div className="col-sm-3 col-6 p-0">
            <div className="footer-img">
              <img src={footer_img_01} className="img-fluid w-100" alt="Img" />
            </div>
          </div>
          <div className="col-sm-3 col-6 p-0">
            <div className="footer-img">
              <img src={footer_img_02} className="img-fluid w-100" alt="Img" />
            </div>
          </div>
          <div className="col-sm-3 col-6 p-0">
            <div className="footer-img">
              <img
                src={footer_card_icon_03}
                className="img-fluid w-100"
                alt="Img"
              />
            </div>
          </div>
          <div className="col-sm-3 col-6 p-0">
            <div className="footer-img">
              <img
                src={footer_card_icon_04}
                className="img-fluid w-100"
                alt="Img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="container">
          <div className="footer-mid-content">
            <p>Would you like to connect with us</p>
            <ul className="social-icons">
              <li>
                <Link to="#">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-mid-two">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-md-6 col-sm-12"
              data-aos="fade-down"
              data-aos-delay={500}
            >
              <div className="footer-logo-col">
                <div className="footer-logo">
                  <img src={footer_logo} alt="Img" />
                </div>
                <p>
                  Connect with healthcare professionals, manage appointments
                  &amp; prioritize your well being{" "}
                </p>
                <form action="index-13.html">
                  <div className="input-block">
                    <span className="mail-icons">
                      <i className="feather-mail" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter You Email Here"
                    />
                    <button className="btn" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-3 col-sm-6"
              data-aos="fade-down"
              data-aos-delay={600}
            >
              <div className="footer-links-middle">
                <h4>QUICK LINKS</h4>
                <ul>
                  <li>
                    <Link to="index.html">Home</Link>
                  </li>
                  <li>
                    <Link to="about-us.html">About us</Link>
                  </li>
                  <li>
                    <Link to="payment.html">Payments</Link>
                  </li>
                  <li>
                    <Link to="booking.html">Lab Test</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-3 col-sm-6"
              data-aos="fade-down"
              data-aos-delay={700}
            >
              <div className="footer-links-middle">
                <h4>SERVICES</h4>
                <ul>
                  <li>
                    <Link to="search-2.html">Nurse at Home</Link>
                  </li>
                  <li>
                    <Link to="search-2.html">Physiotherapy</Link>
                  </li>
                  <li>
                    <Link to="search-2.html">Medical Equipment</Link>
                  </li>
                  <li>
                    <Link to="booking-2.html">Doctor Consultation</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-sm-6"
              data-aos="fade-down"
              data-aos-delay={800}
            >
              <div className="footer-links-middle">
                <h4>CONSUMER POLICY</h4>
                <ul>
                  <li>
                    <Link to="privacy-policy.html">Privacy</Link>
                  </li>
                  <li>
                    <Link to="terms-condition.html">Terms and Condition</Link>
                  </li>
                  <li>
                    <Link to="booking.html">Aggrements</Link>
                  </li>
                  <li>
                    <Link to="map-grid.html">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-sm-6"
              data-aos="fade-down"
              data-aos-delay={900}
            >
              <div className="footer-links-middle">
                <h4>QUICK CONTACT</h4>
                <ul>
                  <li>
                    <span>
                      <i className="feather-mail" />
                    </span>
                    max@example.com
                  </li>
                  <li>
                    <span>
                      <i className="feather-phone" />
                    </span>
                    +91 XXXXX YYYY65
                  </li>
                  <li>
                    <span>
                      <i className="feather-clock" />
                    </span>
                    We are available 24*7
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <ul className="payment-method">
              <li>
                <Link to="#">
                  <img src={footer_card_icon_01} alt="Img" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={footer_card_icon_02} alt="Img" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={footer_card_icon_03} alt="Img" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={footer_card_icon_04} alt="Img" />
                </Link>
              </li>
            </ul>
            <div className="footer-select-drops">
              <div className="input-select">
                <span className="select-icon">
                  <i className="feather-globe" />
                </span>
                <select className="select">
                  <option>India</option>
                  <option>US</option>
                </select>
              </div>
              <div className="input-select">
                <select className="select">
                  <option>USD</option>
                  <option>INR</option>
                </select>
              </div>
            </div>
          </div>
          <div className="copy-right text-center">
            <p>Copyright © 2024 Doccure Homecare. All rights are reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHomeCare;
