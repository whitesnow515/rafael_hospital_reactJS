import React from "react";
import {
  footer_card_icon_01,
  footer_card_icon_02,
  footer_card_icon_03,
  footer_card_icon_04,
  footer_img_01,
  footer_img_02,
  footer_img_03,
  footer_img_04,
  footer_logo,
} from "../../imagepath";
import { Link } from "react-router-dom";
import Select from "react-select";

const FooterHomeCare = () => {
  const options = [
    { value: 'india', label: 'India' },
    { value: 'us', label: 'US' },
  ];
  const usdselectoption = [
    { value: 'usd', label: 'USD' },
    { value: 'inr', label: 'INR' },
  ];
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
                src={footer_img_03}
                className="img-fluid w-100"
                alt="Img"
              />
            </div>
          </div>
          <div className="col-sm-3 col-6 p-0">
            <div className="footer-img">
              <img
                src={footer_img_04}
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
                <form action="/index-13">
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
                    <Link to="/index">Home</Link>
                  </li>
                  <li>
                    <Link to="/pages/aboutus">About us</Link>
                  </li>
                  <li>
                    <Link to="/payment">Payments</Link>
                  </li>
                  <li>
                    <Link to="/patient/booking1">Lab Test</Link>
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
                    <Link to="/patient/search-doctor2">Nurse at Home</Link>
                  </li>
                  <li>
                    <Link to="/patient/search-doctor2">Physiotherapy</Link>
                  </li>
                  <li>
                    <Link to="/patient/search-doctor2">Medical Equipment</Link>
                  </li>
                  <li>
                    <Link to="/patient/booking2">Doctor Consultation</Link>
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
                    <Link to="/pages/privacy-policy">Privacy</Link>
                  </li>
                  <li>
                    <Link to="/pages/terms">Terms and Condition</Link>
                  </li>
                  <li>
                    <Link to="/patient/booking1">Aggrements</Link>
                  </li>
                  <li>
                    <Link to="/patient/doctor-grid">Sitemap</Link>
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
                <Select
                className="ms-2 select"
                placeholder="US"
                options={options}
              />
              </div>
              <div className="input-select">
              <Select
              className="select"
              placeholder="USD"
              options={usdselectoption}
            />
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
