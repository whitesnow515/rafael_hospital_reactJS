/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { footer_fift_payment, globe, logo_03 } from "../../imagepath";
import { RiPhoneLine } from "react-icons/ri";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import Select from "react-select";
const Footer10 = () => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  // const options1 = [
  //     { id: 1, text: 'English', },
  //     { id: 2, text: 'Spanish', },
  //     { id: 3, text: 'Mexico', },
  //   ]

  const options = [
    { value: 1, label: "English" },
    { value: 2, label: "Spanish" },
    { value: 3, label: "Mexico" },
  ];

  return (
    <>
      {/* Footer */}
      <footer className="footer footer-fifteen">
        <div className="footer-top footer-top-fifteen aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="footer-left-fifteen">
                  <div className="footer-fifteen-image">
                    <img src={logo_03} alt="" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <h6 className="subscribe-fifteen">Subscribe Newsletter</h6>
                  <div className="subscribe-form subscribe-form-fifteen">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                    <button type="submit" className="btn footer-btn">
                      Subscribe
                    </button>
                  </div>
                  <h6 className="subscribe-fifteentwo">Acceptable Payments </h6>
                  <div className="footer-fifteen-image-2">
                    <img src={footer_fift_payment} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right-fifteen">
                  <h6 className="subscribe-fifteenthree">Quick Links</h6>
                  <ul>
                    <li>
                      <Link to="/pages/aboutus">About</Link>
                    </li>
                    <li>
                      <Link to="/patient/search-doctor2">services</Link>
                    </li>
                    <li>
                      <Link to="/patientdetails">Patients</Link>
                    </li>
                    <li>
                      <Link to="#">Camp</Link>
                    </li>
                    <li>
                      <Link to="/doctor-blog">Doctors</Link>
                    </li>
                    <li>
                      <Link to="#">Treatments</Link>
                    </li>
                    <li>
                      <Link to="#">Facilities</Link>
                    </li>
                  </ul>
                  <h6 className="subscribe-fifteenthree">Contact</h6>
                  <p>38 Simpson Street, Rock Island, Illinois - 61201</p>
                  <div className="user-details-fift">
                    <ul>
                      <li>
                        <div className="contact-fifteen">
                          <div className="contact-form-fift">
                            <RiPhoneLine className="feather-phone" />
                          </div>
                          <div className="contact-content-fift">
                            <h6>Phone Number</h6>
                            <span>1800 - 42657678</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="contact-fifteen">
                          <div className="contact-form-fift">
                            <AiOutlineMail className="feather-mail" />
                          </div>
                          <div className="contact-content-fift">
                            <h6>Email</h6>
                            <span>Doccure@example.com</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="contact-fifteen">
                          <div className="contact-form-fift">
                            <AiOutlineClockCircle className="feather-clock" />
                          </div>
                          <div className="contact-content-fift">
                            <h6>Opening</h6>
                            <span>Available 24*7</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h6 className="subscribe-fifteenthree">
                    Language and Social
                  </h6>
                  <div className="footer-fift-selects">
                    <div className="footer-select click">
                      <img src={globe} alt="img" />
                      <Select
                        className="select w-100"
                        defaultValue={options[0]}
                        options={options}
                        placeholder="Select Language"
                        isSearchable={false}
                      />
                      {/* <select className="select" value={selectedOption} onChange={handleChange}>
                <option>English</option>
                <option>Spanish</option>
                <option>Mexico</option>
              </select> */}
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fa-brands fa-facebook" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-bottom footer-bottom-fifteen">
                    <div className="container">
                      {/* Copyright */}
                      <div className="copyright">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="copyright-text">
                              <p>© 2023 Doccure. All rights reserve.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            {/* Copyright Menu */}
                            <div className="copyright-menu">
                              <ul className="policy-menu">
                                <li>
                                  <Link to="terms-condition">Terms</Link>
                                </li>
                                <li>
                                  <Link to="privacy-policy">
                                    Privacy Policy
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">Sitemap</Link>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* /Footer */}
    </>
  );
};
export default Footer10;
