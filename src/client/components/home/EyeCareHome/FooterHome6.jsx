/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { logo_03, payment } from "../../imagepath";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
function FooterHome6() {
  const options = [
    { value: 1, label: "English" },
    { value: 2, label: "Spanish" },
  ];

  return (
    <>
      <footer className="footer footer-eleven">
        <div className="footer-top aos aos-init aos-animate" data-aos="fade-up">
          <div className="container">
            <div className="footer-contacts">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-wrap">
                    <div className="footer-icon">
                      <FiMail className="feather-mail" />
                    </div>
                    <div className="footer-info">
                      <h6>Email</h6>
                      <p>doccure@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-wrap">
                    <div className="footer-icon">
                      <FiPhone className="feather-phone" />
                    </div>
                    <div className="footer-info">
                      <h6>Phone Number</h6>
                      <p>1800 - 672-4399</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-wrap">
                    <div className="footer-icon">
                      <FiClock className="feather-clock" />
                    </div>
                    <div className="footer-info">
                      <h6>Open Timing</h6>
                      <p>We are available 24*7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="footer-content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-widget">
                  <h2 className="footer-title">Subscribe Newsletter</h2>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                      <button type="submit" className="btn">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-payment">
                  <h6>Acceptable Payments </h6>
                  <img src={payment} alt="payment" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-language">
                  <Select
                    className="select w-100 p-3"
                    defaultValue={options[0]}
                    options={options}
                    placeholder="Select Language"
                    isSearchable={false}
                  />
                  <span className="icon-lang">
                    <i>
                      <FeatherIcon icon={"globe"} />
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="footer-widget footer-menu">
                  <ul>
                    <li>
                      <Link to="#">About</Link>
                    </li>
                    <li>
                      <Link to="#">Our services</Link>
                    </li>
                    <li>
                      <Link to="#">Patients</Link>
                    </li>
                    <li>
                      <Link to="#">Camp</Link>
                    </li>
                    <li>
                      <Link to="#">Doctors</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
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
            {/* Copyright */}
            <div className="copyright">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="copyright-text">
                    <p>© 2023 Doccure. All Rights Reserved.</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="footer-bottom-logo">
                    <Link to="/index-10">
                      <img src={logo_03} className="img-fluid" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms-condition">Terms and Conditions</Link>
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
    </>
  );
}

export default FooterHome6;
