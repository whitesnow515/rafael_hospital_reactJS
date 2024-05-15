import React from "react";
import {
  flag01,
  flag02,
  flag03,
  flag05,
  home_01,
  home_02,
  home_03,
  home_04,
  home_05,
  home_06,
  home_07,
  home_08,
  home_09,
  home_10,
  home_11,
  logo,
} from "./imagepath";
import { Link } from "react-router-dom";
const AuthenticationHeader = () => {
  return (
    <>
      {/* Header */}
      <header className="header login-header-info">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link id="mobile_btn" to="#">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link>
            <Link to="/index" className="navbar-brand logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/index" className="menu-logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
              <Link id="menu_close" className="menu-close" to="#">
                <i className="fas fa-times" />
              </Link>
            </div>
            <ul className="main-nav">
              <li className="has-submenu megamenu">
                <Link to="#">
                  Home <i className="fas fa-chevron-down" />
                </Link>
                <ul className="submenu mega-submenu">
                  <li>
                    <div className="megamenu-wrapper">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index" className="inner-demo-img">
                                <img
                                  src={home_11}
                                  className="img-fluid "
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index" className="inner-demo-img">
                                General Home
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo ">
                            <div className="demo-img">
                              <Link to="/index" className="inner-demo-img">
                                <img
                                  src={home_10}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index" className="inner-demo-img">
                                General Home 2
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-3" className="inner-demo-img">
                                <img
                                  src={home_09}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-3" className="inner-demo-img">
                                General Home 3
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-4" className="inner-demo-img">
                                <img
                                  src={home_08}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-4" className="inner-demo-img">
                                General Home 4
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-5" className="inner-demo-img">
                                <img
                                  src={home_07}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-5" className="inner-demo-img">
                                Cardiology Home
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-6" className="inner-demo-img">
                                <img
                                  src={home_06}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-6" className="inner-demo-img">
                                Eye Care Home
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-7" className="inner-demo-img">
                                <img
                                  src={home_05}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-7" className="inner-demo-img">
                                Veterinary Home
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-8" className="inner-demo-img">
                                <img
                                  src={home_04}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-8" className="inner-demo-img">
                                Paediatric Home
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-9" className="inner-demo-img">
                                <img
                                  src={home_03}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-9" className="inner-demo-img">
                                Fertility Home
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-10" className="inner-demo-img">
                                <img
                                  src={home_02}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-10" className="inner-demo-img">
                                ENT Hospital Home
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-11" className="inner-demo-img">
                                <img
                                  src={home_01}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-11" className="inner-demo-img">
                                Cosmetics Home
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="#">
                  Doctors <i className="fas fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/doctor/doctor-dashboard">Doctor Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/doctor/appointments">Appointments</Link>
                  </li>
                  <li>
                    <Link to="/doctor/schedule-timing">Schedule Timing</Link>
                  </li>
                  <li>
                    <Link to="/doctor/my-patients">Patients List</Link>
                  </li>
                  <li>
                    <Link to="/doctor/patient-profile">Patients Profile</Link>
                  </li>
                  <li>
                    <Link to="/doctor/chat-doctor">Chat</Link>
                  </li>
                  <li>
                    <Link to="/doctor/invoice">Invoices</Link>
                  </li>
                  <li>
                    <Link to="/doctor/profile-setting">Profile Settings</Link>
                  </li>
                  <li>
                    <Link to="/doctor/review">Reviews</Link>
                  </li>
                  <li>
                    <Link to="/doctor/doctor-register">Doctor Register</Link>
                  </li>
                  <li className="has-submenu">
                    <Link to="/doctor-blog">Blog</Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/doctor-blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/blog/blog-details">Blog view</Link>
                      </li>
                      <li>
                        <Link to="/blog/doctor-add-blog">Add Blog</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="#">
                  Patients <i className="fas fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li className="has-submenu">
                    <Link to="#">Doctors</Link>
                    <ul className="submenu inner-submenu">
                      <li>
                        <Link to="/patient/doctor-grid">Map Grid</Link>
                      </li>
                      <li>
                        <Link to="/patient/doctor-list">Map List</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <Link to="#">Search Doctor</Link>
                    <ul className="submenu inner-submenu">
                      <li>
                        <Link to="/patient/search-doctor">
                          Search Doctor 1
                        </Link>
                      </li>
                      <li>
                        <Link to="/patient/search-doctor2">
                          Search Doctor 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/patient/doctor-profile">Doctor Profile</Link>
                  </li>
                  <li className="has-submenu">
                    <Link to="#">Booking</Link>
                    <ul className="submenu inner-submenu">
                      <li>
                        <Link to="/patient/booking1">Booking 1</Link>
                      </li>
                      <li>
                        <Link to="/patient/booking2">Booking 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/patient/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/patient/booking-success">Booking Success</Link>
                  </li>
                  <li>
                    <Link to="/patient/dashboard">Patient Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/patient/favourites">Favourites</Link>
                  </li>
                  <li>
                    <Link to="/patient/patient-chat">Chat</Link>
                  </li>
                  <li>
                    <Link to="/patient/profile">Profile Settings</Link>
                  </li>
                  <li>
                    <Link to="/patient/change-password">Change Password</Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="">
                  Pharmacy <i className="fas fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link>
                  </li>
                  <li>
                    <Link to="/Pharmacy/Pharmacy-details">
                      Pharmacy Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/Pharmacy/pharmacy-search">Pharmacy Search</Link>
                  </li>
                  <li>
                    <Link to="/Pharmacy/product-all">Product</Link>
                  </li>
                  <li>
                    <Link to="/Pharmacy/product-description">
                      Product Description
                    </Link>
                  </li>
                  <li>
                    <Link to="/Pharmacy/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/Pharmacy/product-checkout">
                      Product Checkout
                    </Link>
                  </li>
                  <li>
                    <Link to="/Pharmacy/payment-success">Payment Success</Link>
                  </li>
                  <li>
                    <Link to="/Pharmacy/pharmacy-register">
                      Pharmacy Register
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu active">
                <Link to="#">
                  Pages <i className="fas fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/pages/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/pages/contactus">Contact Us</Link>
                  </li>
                  <li className="has-submenu">
                    <Link to="#">Call</Link>
                    <ul className="submenu inner-submenu">
                      <li>
                        <Link to="/pages/voice-call">Voice Call</Link>
                      </li>
                      <li>
                        <Link to="/pages/video-call">Video Call</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <Link to="#">Invoices</Link>
                    <ul className="submenu inner-submenu">
                      <li>
                        <Link to="/pages/invoice">Invoices</Link>
                      </li>
                      <li>
                        <Link to="/pages/invoice-view">Invoice View</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu active">
                    <Link to="#">Authentication</Link>
                    <ul className="submenu inner-submenu">
                      <li>
                        <Link to="/pages/login-email">Login Email</Link>
                      </li>
                      <li>
                        <Link to="/pages/login-phone">Login Phone</Link>
                      </li>
                      <li>
                        <Link to="/pages/doctor-signup">Doctor Signup</Link>
                      </li>
                      <li className="active">
                        <Link to="/pages/patient-signup">Patient Signup</Link>
                      </li>
                      <li>
                        <Link to="/pages/forgot-password">
                          Forgot Password 1
                        </Link>
                      </li>
                      <li>
                        <Link to="/pages/forgot-password2">
                          Forgot Password 2
                        </Link>
                      </li>
                      <li>
                        <Link to="/pages/email-otp">Email OTP</Link>
                      </li>
                      <li>
                        <Link to="/pages/phone-otp">Phone OTP</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <Link to="#">Error Pages</Link>
                    <ul className="submenu inner-submenu">
                      <li>
                        <Link to="/pages/error-404">404 Error</Link>
                      </li>
                      <li>
                        <Link to="/pages/error-500">500 Error</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/pages/blank-page">Starter Page</Link>
                  </li>
                  <li>
                    <Link to="/pages/pricing-plan">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link to="/pages/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/pages/maintenance">Maintenance</Link>
                  </li>
                  <li>
                    <Link to="/pages/comingsoon">Coming Soon</Link>
                  </li>
                  <li>
                    <Link to="/pages/terms">Terms &amp; Condition</Link>
                  </li>
                  <li>
                    <Link to="/pages/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/pages/component">Components</Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="#">
                  Blog <i className="fas fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/blog/blog-list">Blog List</Link>
                  </li>
                  <li>
                    <Link to="/blog/blog-grid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link to="/blog/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="#">
                  Admin <i className="fas fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/admin" target="_blank">
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="/pharmacyadmin" target="_blank">
                      Pharmacy Admin
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="flag-dropdown-hide">
                <div className="flag-dropdown">
                  <Link
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <img src={flag01} alt="" height={20} className="flag-img" />{" "}
                    <span>English</span>
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="#" className="dropdown-item">
                      <img src={flag01} alt="" height={16} /> English
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <img src={flag02} alt="" height={16} /> French
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <img src={flag03} alt="" height={16} /> Spanish
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <img src={flag05} alt="" height={16} /> German
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item dropdown">
              <div className="flag-dropdown">
                <Link
                  className="dropdown-toggle nav-link"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  <img src={flag01} alt="" height={20} className="flag-img" />{" "}
                  <span>English</span>
                </Link>
                <div className="dropdown-menu">
                  <Link to="#" className="dropdown-item">
                    <img src={flag01} alt="" height={16} /> English
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <img src={flag02} alt="" height={16} /> French
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <img src={flag03} alt="" height={16} /> Spanish
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <img src={flag05} alt="" height={16} /> German
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      {/* /Header */}
    </>
  );
};

export default AuthenticationHeader;
