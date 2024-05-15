import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
import FeatherIcon from "feather-icons-react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  book_doctor_13,
  book_doctor_14,
  book_doctor_15,
  book_doctor_16,
  doctor_img2,
  clinic_1,
  clinic_2,
  clinic_3,
  clinic_4,
  clinic_5,
  clinic_6,
  // blog_wrap_02,
  // blog_wrap_03,
  doctor_thumb_01,
  doctor_thumb_02,
  doctor_thumb_03,
  // doctor_thumb_04,
  // features_clinic1,
  // features_clinic2,
  // features_clinic3,
  // features_clinic4,
  // news_letter,
  // banner4,
  // browse1,
  // browse2,
  // browse3,
  // browse4,
  // browse5,
  // browse6,
  // browse7,
  // browse8,
  // Doctor01,
  // patient1,
  // book_doctor_09,
  // patient_icon,
  // book_doctor_12,
  // book_doctor_11,
  // book_doctor_10,
  // book_doctor_06,
  // book_doctor_07,
  // book_doctor_08,
  // blog_01,
  // blog_02,
  // blog_04,
  // best_doctor_check,
  // doctor_img,
  logo,
  // banner_check,
  // shapes_10,
  // shapes_7,
  // shapes_8,
  // shapes_6,
  // logo_one,
  // banner_img,
  // appoinment_img,
  // phone_call,
  // services_01,
  // services_02,
  // services_03,
  // services_04,
  features_01,
  features_02,
  features_03,
  features_04,
  features_05,
  features_06,
  // book_doctor_01,
  // book_doctor_02,
  // book_doctor_03,
  // book_doctor_04,
  // doctor_check,
  // news_img,
  blog_11,
  blog_12,
  blog_13,
  footer_logo,
  // icon6,
  icon3,
  // icon2,
  icon4,
  icon1,
  // icon5,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
} from "./image.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressCircle from "./paediatric/scrolltotop.jsx";

const Home14 = () => {
  const config = "/react/template";
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuone, setSideMenuone] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebarone = (value) => {
    setSideMenuone(value);
  };
  const toggleSidebartwo = (value) => {
    setSideMenutwo(value);
  };

  let pathnames = window.location.pathname;

  // const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="nav-bg-five">
              <nav className="navbar navbar-expand-lg header-nav nav-transparent">
                <div className="navbar-header">
                  <Link
                    id="mobile_btn"
                    to="#"
                    onClick={() => onHandleMobileMenu()}
                  >
                    {" "}
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
                    <Link
                      to="#0"
                      id="menu_close"
                      className="menu-close"
                      onClick={() => onhandleCloseMenu()}
                    >
                      <i className="fas fa-times"></i>
                    </Link>
                  </div>
                  <ul className="main-nav black-font">
                    <li
                      className={`has-submenu ${
                        pathnames.includes("home") ||
                        pathnames.includes("home2") ||
                        pathnames.includes("home3") ||
                        pathnames.includes("cardiohome") ||
                        pathnames.includes("homeslider1") ||
                        pathnames.includes("home4") ||
                        pathnames.includes("homeslider2") ||
                        pathnames.includes("home6") ||
                        (pathnames.includes("home7") &&
                          !pathnames.includes("home10")) ||
                        pathnames.includes("home11") ||
                        pathnames.includes("home12") ||
                        pathnames.includes("home13") ||
                        pathnames.includes("home14") ||
                        pathnames.includes("paediatrichome")
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link
                        className={isSideMenu == "home" ? "subdrop" : ""}
                        onMouseEnter={() =>
                          toggleSidebar(isSideMenu == "home" ? "" : "home")
                        }
                      >
                        Home <i className="fas fa-chevron-down" />
                      </Link>
                      {isSideMenu == "home" ? (
                        <ul className="submenu">
                          <li
                            className={
                              pathnames.includes("home") &&
                              !pathnames.includes("home2") &&
                              !pathnames.includes("home3") &&
                              !pathnames.includes("cardiohome") &&
                              !pathnames.includes("homeslider1") &&
                              !pathnames.includes("home4") &&
                              !pathnames.includes("homeslider2") &&
                              !pathnames.includes("home6") &&
                              !pathnames.includes("home7") &&
                              !pathnames.includes("home10") &&
                              !pathnames.includes("home11") &&
                              !pathnames.includes("home12") &&
                              !pathnames.includes("home13") &&
                              !pathnames.includes("home14") &&
                              !pathnames.includes("paediatrichome")
                                ? "active"
                                : ""
                            }
                          >
                            <Link to="/index">Home</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("home2") ? "active" : ""
                            }
                          >
                            <Link to="/index">Home 2</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("home3") ? "active" : ""
                            }
                          >
                            <Link to="/index-3">Home 3</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("homeslider1") ? "active" : ""
                            }
                          >
                            <Link to="/homeslider1">Home 4</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("cardiohome") ? "active" : ""
                            }
                          >
                            <Link to="/index-5">Home 5</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("homeslider2") ? "active" : ""
                            }
                          >
                            <Link to="/homeslider2">Home 6</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("/index-7") ? "active" : ""
                            }
                          >
                            <Link to="/index-7">Home 7</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("/index-8") ? "active" : ""
                            }
                          >
                            <Link to="/index-8">Home 8</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("home9") ? "active" : ""
                            }
                          >
                            <Link to="/index-9">Home 9</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("home10") ? "active" : ""
                            }
                          >
                            <Link to="/home10">Home 10</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("/home11") ? "active" : ""
                            }
                          >
                            <Link to="/home11">Home 11</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("/home12") ? "active" : ""
                            }
                          >
                            <Link to="/home12">Home 12</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("/home13") ? "active" : ""
                            }
                          >
                            <Link to="/home13">Home 13</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("/home14") ? "active" : ""
                            }
                          >
                            <Link to="/home14">Home 14</Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li
                      className={`has-submenu ${
                        url.includes("/doctor") ? "active" : ""
                      }`}
                    >
                      <Link
                        className={isSideMenu == "doctors" ? "subdrop" : ""}
                        onMouseEnter={() =>
                          toggleSidebar(
                            isSideMenu == "doctors" ? "" : "doctors"
                          )
                        }
                      >
                        Doctors <i className="fas fa-chevron-down" />
                      </Link>
                      {isSideMenu == "doctors" ? (
                        <ul className={`submenu`}>
                          <li
                            className={
                              pathnames.includes("doctor-dashboard")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/doctor/doctor-dashboard"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Doctor Dashboard
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("appointments") ? "active" : ""
                            }
                          >
                            <Link
                              to="/doctor/appointments"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Appointments
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("schedule-timing")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/doctor/schedule-timing"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Schedule Timing
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("my-patients") ? "active" : ""
                            }
                          >
                            <Link
                              to="/doctor/my-patients"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Patients List
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("patient-profile")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/doctor/patient-profile"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Patients Profile
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("chat-doctor") ? "active" : ""
                            }
                          >
                            <Link
                              to="/doctor/chat-doctor"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Chat
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("invoice") ? "active" : ""
                            }
                          >
                            <Link
                              to="/pages/invoice"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Invoices
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("profile-setting")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/doctor/profile-setting"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Profile Settings
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("review") ? "active" : ""
                            }
                          >
                            <Link
                              to="/doctor/review"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Reviews
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("doctor-register")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/doctor/doctor-register"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Doctor Register
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li
                      className={`has-submenu ${
                        url.includes("/patient") ? "active" : ""
                      }`}
                    >
                      <Link
                        className={isSideMenu == "patients" ? "subdrop" : ""}
                        onMouseEnter={() =>
                          toggleSidebar(
                            isSideMenu == "patients" ? "" : "patients"
                          )
                        }
                      >
                        Patients <i className="fas fa-chevron-down" />
                      </Link>
                      {isSideMenu == "patients" ? (
                        <ul className={`submenu`}>
                          <li
                            className={`has-submenu ${
                              pathnames.includes("doctor") &&
                              !pathnames.includes("doctor-profile") &&
                              !pathnames.includes("search-doctor")
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link
                              className={
                                isSideMenutwo == "doctor" ? "subdrop" : ""
                              }
                              onMouseEnter={() =>
                                toggleSidebartwo(
                                  isSideMenutwo == "doctor" ? "" : "doctor"
                                )
                              }
                            >
                              Doctors{" "}
                            </Link>
                            {isSideMenutwo == "doctor" ? (
                              <ul className="submenu">
                                <li
                                  className={
                                    pathnames.includes("doctor-grid")
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <Link
                                    to="/patient/doctor-grid"
                                    onClick={() => onhandleCloseMenu()}
                                  >
                                    Map Grid
                                  </Link>
                                </li>
                                <li
                                  className={
                                    pathnames.includes("doctor-list")
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <Link
                                    to="/patient/doctor-list"
                                    onClick={() => onhandleCloseMenu()}
                                  >
                                    Map List
                                  </Link>
                                </li>
                                <li
                                  className={
                                    pathnames.includes("map-list")
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <Link
                                    to="/patient/map-list"
                                    onClick={() => onhandleCloseMenu()}
                                  >
                                    Map List 1
                                  </Link>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li
                            className={
                              pathnames.includes("search-doctor")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/patient/search-doctor"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Search Doctor
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("doctor-profile")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/patient/doctor-profile"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Doctor Profile
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("booking") &&
                              !pathnames.includes("booking-success")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/patient/booking1"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Booking
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("checkout") ? "active" : ""
                            }
                          >
                            <Link
                              to="/patient/checkout"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Checkout
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("booking-success")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/patient/booking-success"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Booking Success
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("dashboard") ? "active" : ""
                            }
                          >
                            <Link
                              to="/patient/dashboard"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Patient Dashboard
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("favourites") ? "active" : ""
                            }
                          >
                            <Link
                              to="/patient/favourites"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Favourites
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("patient-chat") ? "active" : ""
                            }
                          >
                            <Link
                              to="/patient/patient-chat"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Chat
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("profile") &&
                              !pathnames.includes("doctor-profile")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/patient/profile"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Profile Settings
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("change-password")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/patient/change-password"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Change Password
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li
                      className={`has-submenu ${
                        url.includes("/Pharmacy") ? "active" : ""
                      }`}
                    >
                      <Link
                        className={isSideMenu == "pharmacy" ? "subdrop" : ""}
                        onMouseEnter={() =>
                          toggleSidebar(
                            isSideMenu == "pharmacy" ? "" : "pharmacy"
                          )
                        }
                      >
                        Pharmacy <i className="fas fa-chevron-down" />
                      </Link>
                      {isSideMenu == "pharmacy" ? (
                        <ul className="submenu">
                          <li
                            className={
                              pathnames.includes("Pharmacy-index")
                                ? "active"
                                : ""
                            }
                          >
                            <Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("Pharmacy-details")
                                ? "active"
                                : ""
                            }
                          >
                            <Link to="/Pharmacy/Pharmacy-details">
                              Pharmacy Details
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("pharmacy-search")
                                ? "active"
                                : ""
                            }
                          >
                            <Link to="/Pharmacy/pharmacy-search">
                              Pharmacy Search
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("product-all") ? "active" : ""
                            }
                          >
                            <Link to="/Pharmacy/product-all">Product</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("product-description")
                                ? "active"
                                : ""
                            }
                          >
                            <Link to="/Pharmacy/product-description">
                              Product Description
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("cart") ? "active" : ""
                            }
                          >
                            <Link to="/Pharmacy/cart">Cart</Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("product-checkout")
                                ? "active"
                                : ""
                            }
                          >
                            <Link to="/Pharmacy/product-checkout">
                              Product Checkout
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("payment-success")
                                ? "active"
                                : ""
                            }
                          >
                            <Link to="/Pharmacy/payment-success">
                              Payment Success
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("pharmacy-register")
                                ? "active"
                                : ""
                            }
                          >
                            <Link to="/Pharmacy/pharmacy-register">
                              Pharmacy Register
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li
                      className={`has-submenu ${
                        url.includes("/pages") ? "active" : ""
                      }`}
                    >
                      <Link
                        className={isSideMenu == "pages" ? "subdrop" : ""}
                        onMouseEnter={() =>
                          toggleSidebar(isSideMenu == "pages" ? "" : "pages")
                        }
                      >
                        Pages <i className="fas fa-chevron-down" />
                      </Link>
                      {isSideMenu == "pages" ? (
                        <ul className={`submenu`}>
                          <li
                            className={`${
                              pathnames.includes("/voice-call") ? "active" : ""
                            }`}
                          >
                            <Link
                              to="/pages/voice-call"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Voice Call
                            </Link>
                          </li>
                          <li
                            className={`${
                              pathnames.includes("/video-call") ? "active" : ""
                            }`}
                          >
                            <Link
                              to="/pages/video-call"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Video Call
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("search-doctor")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/patient/search-doctor"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Search Doctor
                            </Link>
                          </li>

                          <li
                            className={`${
                              pathnames.includes("/calendar") ? "active" : ""
                            }`}
                          >
                            <Link
                              to="/pages/calendar"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Calendar
                            </Link>
                            <li
                              className={`${
                                pathnames.includes("/onboarding-email")
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <Link to="/pages/onboarding-email">
                                Doctor Onboarding
                              </Link>
                            </li>
                            <li
                              className={`${
                                pathnames.includes("/patient-email")
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <Link to="/pages/patient-email">
                                Patient Onboarding
                              </Link>
                            </li>
                          </li>
                          <li
                            className={`${
                              pathnames.includes("/component") ? "active" : ""
                            }`}
                          >
                            <Link
                              to="/pages/component"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Components
                            </Link>
                          </li>
                          <li
                            className={`has-submenu ${
                              pathnames.includes("/invoice-view")
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link
                              className={
                                isSideMenuone == "invoices" ? "subdrop" : ""
                              }
                              onMouseEnter={() =>
                                toggleSidebarone(
                                  isSideMenuone == "invoices" ? "" : "invoices"
                                )
                              }
                            >
                              Invoices{" "}
                            </Link>
                            {isSideMenuone == "invoices" ? (
                              <ul className="submenu">
                                <li
                                  className={
                                    pathnames.includes("invoice")
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <Link
                                    to="/pages/invoice"
                                    onClick={() => onhandleCloseMenu()}
                                  >
                                    Invoices
                                  </Link>
                                </li>
                                <li
                                  className={
                                    pathnames.includes("-view") ? "active" : ""
                                  }
                                >
                                  <Link
                                    to="/pages/invoice-view"
                                    onClick={() => onhandleCloseMenu()}
                                  >
                                    Invoice View
                                  </Link>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li
                            className={`${
                              pathnames.includes("/blank-page") ? "active" : ""
                            }`}
                          >
                            <Link
                              to="/pages/blank-page"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Starter Page
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("login") ? "active" : ""
                            }
                          >
                            <Link
                              to="/login"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Login
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("/register") ? "active" : ""
                            }
                          >
                            <Link
                              to="/register"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Register
                            </Link>
                          </li>
                          <li
                            className={`${
                              pathnames === "/forgot-password" ? "active" : ""
                            }`}
                          >
                            <Link
                              to="/forgot-password"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li
                      className={`has-submenu ${
                        url.includes("/blog") ? "active" : ""
                      }`}
                    >
                      <Link
                        className={isSideMenu == "blog" ? "subdrop" : ""}
                        onMouseEnter={() =>
                          toggleSidebar(isSideMenu == "blog" ? "" : "blog")
                        }
                      >
                        Blog <i className="fas fa-chevron-down" />
                      </Link>
                      {isSideMenu == "blog" ? (
                        <ul className="submenu">
                          <li
                            className={
                              pathnames.includes("blog-list") ? "active" : ""
                            }
                          >
                            <Link
                              to="/blog/blog-list"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Blog List
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("blog-grid") ? "active" : ""
                            }
                          >
                            <Link
                              to="/blog/blog-grid"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Blog Grid
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("blog-details") ? "active" : ""
                            }
                          >
                            <Link
                              to="/blog/blog-details"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="has-submenu">
                      <Link
                        target="_blank"
                        className={isSideMenu == "admin" ? "subdrop" : ""}
                        onMouseEnter={() =>
                          toggleSidebar(isSideMenu == "admin" ? "" : "admin")
                        }
                      >
                        Admin
                        <i className="fas fa-chevron-down" />
                      </Link>
                      {isSideMenu == "admin" ? (
                        <ul className="submenu">
                          <li>
                            <Link to={`${config}admin/login`} target="_blank">
                              Admin
                            </Link>
                          </li>
                          <li>
                            <Link to={`${config}pharmacyadmin`} target="_blank">
                              Pharmacy Admin
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="login-link">
                      {" "}
                      <Link to="/login">Login / Signup</Link>
                    </li>
                  </ul>
                </div>
                <ul className="nav header-navbar-rht">
                  <li className="nav-item contact-item">
                    <div className="header-contact-img">
                      <i>
                        <FeatherIcon icon="phone" />
                      </i>
                    </div>
                    <div className="header-contact-detail">
                      <p className="contact-info-header">+1 315 369 5943</p>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn-five" to="/login">
                      Sign In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn-five-light" to="/register">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* /Header */}
        {/* Home Five Banner */}
        <section className="home-section-five">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="banner-wrapper-five aos" data-aos="fade-up">
                  <div className="section-search-five text-center">
                    <span>Worlds Largest </span>
                    <h2>Search Doctor, Make an Appointment</h2>
                    <p>
                      Discover the best doctors, clinic &amp; hospital the city
                      nearest to you.
                    </p>
                    <div className="search-box-five">
                      <form action={`${config}/patient/search-doctor`}>
                        <div className="search-input-five">
                          <i className="bficon compass-icon">
                            <FeatherIcon icon="compass" />
                          </i>
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control search-loc"
                              placeholder="Search Location"
                            />
                          </div>
                        </div>
                        <div className="search-input-five line-five">
                          <i className="bficon">
                            <FeatherIcon icon="user-check" />
                          </i>
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control search-ortho"
                              placeholder="Orthopedic"
                            />
                          </div>
                        </div>
                        <div className="search-btn-five">
                          <button className="btn search_service" type="submit">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Five Banner */}
        {/* Looking Section Five */}
        <section className="looking-section-five">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header section-header-five text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="title-five">What are you looking for?</h2>
                </div>
              </div>
            </div>
            <div className="looking-bg-five">
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="looking-grid-five looking-grid-blue w-100">
                    <div className="looking-icon-five">
                      <i className="fas fa-user-md" />
                    </div>
                    <div className="looking-info-five">
                      <Link to="/patient/search-doctor">Visit a Doctor</Link>
                      <p>
                        We hire the best specialists to deliver top-notch
                        diagnostic services for you.
                      </p>
                    </div>
                    <div className="looking-info-btn">
                      <Link to="/patient/booking1" className="btn btn-five">
                        Book Now
                        <i className="ms-1">
                          <FeatherIcon icon="arrow-right" />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="looking-grid-five looking-grid-green w-100">
                    <div className="looking-icon-five">
                      <i className="fas fa-tablets" />
                    </div>
                    <div className="looking-info-five">
                      <Link to="pharmacy-/patient/search-doctor">
                        Find a Pharmacy
                      </Link>
                      <p>
                        We provide the a wide range of medical services, so
                        every person could have the opportunity.
                      </p>
                    </div>
                    <div className="looking-info-btn">
                      <Link to="/patient/booking1" className="btn btn-five">
                        Find Now
                        <i className="ms-1">
                          <FeatherIcon icon="arrow-right" />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="looking-grid-five looking-grid-orange w-100">
                    <div className="looking-icon-five">
                      <i className="fas fa-vial" />
                    </div>
                    <div className="looking-info-five">
                      <Link to="#">Find a Lab</Link>
                      <p>
                        We use the first-class medical equipment for timely
                        diagnostics of various diseases timely diagnostics of
                        various diseases diseases timely diagnostics of various
                        diseases.
                      </p>
                    </div>
                    <div className="looking-info-btn">
                      <Link to="/patient/booking1" className="btn btn-five">
                        Book Now
                        <i className="ms-1">
                          <FeatherIcon icon="arrow-right" />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Looking Section Five */}
        {/* Clinic Section Five */}
        <section className="clinic-section-five">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header section-header-five text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="title-five">Clinic and Specialities</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five">
                      <img src={clinic_1} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Urology</p>
                    <div className="clinic-five-btn">
                      <Link to="#" className="btn">
                        Consult Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five">
                      <img src={clinic_2} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Orthopedic</p>
                    <div className="clinic-five-btn">
                      <Link to="#" className="btn">
                        Consult Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five">
                      <img src={clinic_3} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>MRI Scans</p>
                    <div className="clinic-five-btn">
                      <Link to="#" className="btn">
                        Consult Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five">
                      <img src={clinic_4} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Dentist</p>
                    <div className="clinic-five-btn">
                      <Link to="#" className="btn">
                        Consult Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five">
                      <img src={clinic_5} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Cardiologist</p>
                    <div className="clinic-five-btn">
                      <Link to="#" className="btn">
                        Consult Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five">
                      <img src={clinic_6} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Neurology</p>
                    <div className="clinic-five-btn">
                      <Link to="#" className="btn">
                        Consult Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clinic-see-btn text-center aos" data-aos="fade-up">
              <Link to="#" className="btn btn-six">
                See All Specialities
              </Link>
            </div>
          </div>
        </section>
        {/* Clinic Section Five */}
        {/* Doctor Section Five */}
        <section className="doctor-section-five">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="doctor-grid-five w-100">
                  <div className="doctor-details">
                    <h4>ARE YOU A DOCTOR?</h4>
                    <p>
                      The service allows you to get maximum visibility online
                      and to manage appointments and contacts coming from the
                      site, in a simple and fast way.
                    </p>
                    <Link to="/patient/booking1" className="btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 doctor-img2 aos"
                data-aos="fade-up"
              >
                <div className="doctor-grid-five w-100">
                  <img src={doctor_img2} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="doctor-grid-five w-100">
                  <div className="doctor-details doctor-details-one">
                    <h4>ARE YOU A PATIENT?</h4>
                    <p>
                      The service allows you to get maximum visibility online
                      and to manage appointments and contacts coming from the
                      site, in a simple and fast way.
                    </p>
                    <Link to="/patient/booking1" className="btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Doctor Section Five */}
        {/* Browse Section Five */}
        <section className="browse-section-five">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header section-header-five text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="title-five">Browse by Specialities</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="specialist-card-five d-flex hvr-bounce-to-right">
                  <div className="specialist-img-five">
                    <img src={icon1} alt="" className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">Urology</Link>
                  </div>
                  <div className="specialist-nav-five ms-auto">
                    <Link to="#">
                      <FeatherIcon icon="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="specialist-card-five d-flex hvr-bounce-to-right">
                  <div className="specialist-img-five">
                    <img src={icon7} alt="" className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">Orthopedic</Link>
                  </div>
                  <div className="specialist-nav-five ms-auto">
                    <Link to="#">
                      <FeatherIcon icon="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="specialist-card-five d-flex hvr-bounce-to-right">
                  <div className="specialist-img-five">
                    <img src={icon4} alt="" className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">Dentist</Link>
                  </div>
                  <div className="specialist-nav-five ms-auto">
                    <Link to="#">
                      <FeatherIcon icon="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="specialist-card-five d-flex hvr-bounce-to-right">
                  <div className="specialist-img-five">
                    <img src={icon3} alt="" className="img-fluid spec-img" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">Cardiologist</Link>
                  </div>
                  <div className="specialist-nav-five ms-auto">
                    <Link to="#">
                      <FeatherIcon icon="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="specialist-card-five d-flex hvr-bounce-to-right">
                  <div className="specialist-img-five">
                    <img src={icon8} alt="" className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">MRI Scans</Link>
                  </div>
                  <div className="specialist-nav-five ms-auto">
                    <Link to="#">
                      <FeatherIcon icon="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="specialist-card-five d-flex hvr-bounce-to-right">
                  <div className="specialist-img-five">
                    <img src={icon9} alt="" className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">Neurology</Link>
                  </div>
                  <div className="specialist-nav-five ms-auto">
                    <Link to="#">
                      <FeatherIcon icon="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="specialist-card-five d-flex hvr-bounce-to-right">
                  <div className="specialist-img-five">
                    <img src={icon10} alt="" className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">Laboratory</Link>
                  </div>
                  <div className="specialist-nav-five ms-auto">
                    <Link to="#">
                      <FeatherIcon icon="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="specialist-card-five d-flex hvr-bounce-to-right">
                  <div className="specialist-img-five">
                    <img src={icon11} alt="" className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">Primary Checkup</Link>
                  </div>
                  <div className="specialist-nav-five ms-auto">
                    <Link to="#">
                      <FeatherIcon icon="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Browse Section Five */}
        {/* Best Section Five */}
        <section className="best-section-five">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header section-header-five text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="title-five">Book Our Best Doctor</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="doctors-grid-five w-100">
                  <div className="doctors-img-five">
                    <Link to="/patient/doctor-profile">
                      <img src={book_doctor_13} alt="" className="img-fluid" />
                    </Link>
                    <div className="social-info">
                      <div className="social-inner">
                        <Link to="#" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="best-doctors-info">
                    <h3>
                      <Link to="/patient/doctor-profile">
                        Dr. Deborah Angel
                      </Link>
                    </h3>
                    <p className="doctor-posting">Cardiology Specialist</p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating ms-1">
                        4.9 ( 82 )
                      </span>
                    </div>
                    <div className="doctors-btn-five">
                      <Link to="/patient/booking1" className="btn w-100">
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="doctors-grid-five w-100">
                  <div className="doctors-img-five">
                    <Link to="/patient/doctor-profile">
                      <img src={book_doctor_14} alt="" className="img-fluid" />
                    </Link>
                    <div className="social-info">
                      <div className="social-inner">
                        <Link to="#" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="best-doctors-info">
                    <h3>
                      <Link to="/patient/doctor-profile">
                        Dr. Edward Willey
                      </Link>
                    </h3>
                    <p className="doctor-posting">Dermatologist</p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating ms-1">
                        4.9 ( 82 )
                      </span>
                    </div>
                    <div className="doctors-btn-five">
                      <Link to="/patient/booking1" className="btn w-100">
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="doctors-grid-five w-100">
                  <div className="doctors-img-five">
                    <Link to="/patient/doctor-profile">
                      <img src={book_doctor_15} alt="" className="img-fluid" />
                    </Link>
                    <div className="social-info">
                      <div className="social-inner">
                        <Link to="#" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="best-doctors-info">
                    <h3>
                      <Link to="/patient/doctor-profile">
                        Dr. Merry Anderson
                      </Link>
                    </h3>
                    <p className="doctor-posting">Gastrologic Specialist</p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating ms-1">
                        4.9 ( 82 )
                      </span>
                    </div>
                    <div className="doctors-btn-five">
                      <Link to="/patient/booking1" className="btn w-100">
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="doctors-grid-five w-100">
                  <div className="doctors-img-five">
                    <Link to="/patient/doctor-profile">
                      <img src={book_doctor_16} alt="" className="img-fluid" />
                    </Link>
                    <div className="social-info">
                      <div className="social-inner">
                        <Link to="#" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                        <Link to="#" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="best-doctors-info">
                    <h3>
                      <Link to="/patient/doctor-profile">
                        Dr. David Blackwell
                      </Link>
                    </h3>
                    <p className="doctor-posting">Cosmetic Specialist</p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating ms-1">
                        4.9 ( 82 )
                      </span>
                    </div>
                    <div className="doctors-btn-five">
                      <Link to="/patient/booking1" className="btn w-100">
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-see-btn text-center aos" data-aos="fade-up">
              <Link to="#" className="btn btn-six">
                See All Doctors
              </Link>
            </div>
          </div>
        </section>
        {/* /Best Section Five */}
        {/* Clinic Section Five */}
        <section className="clinic-section-five">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header section-header-five text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="title-five">
                    Available Features in Our Clinic
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom pb-0">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five clinic-img-five1">
                      <img src={features_01} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Operation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom pb-0">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five clinic-img-five1">
                      <img src={features_02} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Medical</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom pb-0">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five clinic-img-five1">
                      <img src={features_03} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Patient Ward</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom pb-0">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five clinic-img-five1">
                      <img src={features_04} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Test Room</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five w-100 hvr-bounce-to-bottom pb-0">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five clinic-img-five1">
                      <img src={features_05} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>ICU</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-five hvr-bounce-to-bottom w-100 pb-0">
                  <div className="clinic-grid-img">
                    <div className="clinic-img-five clinic-img-five1">
                      <img src={features_06} alt="" />
                    </div>
                  </div>
                  <div className="clinic-grid-info">
                    <p>Laboratory</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clinic-see-btn text-center aos" data-aos="fade-up">
              <Link to="#" className="btn btn-six">
                See All Features
              </Link>
            </div>
          </div>
        </section>
        {/* Clinic Section Five */}
        {/* News Letter Five */}
        <section className="news-letter-five">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="news-five">
                  <div className="news-five-head aos" data-aos="fade-up">
                    <h2>Grab Our Newsletter</h2>
                    <p>To receive latest offers and discounts from the shop.</p>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                      <div className="news-five-form aos" data-aos="fade-up">
                        <form>
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Email Address"
                            />
                            <button type="submit" className="btn">
                              Subscribe
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* News Letter Five */}
        {/* Blog Section Five */}
        <section className="blog-section-five">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header section-header-five text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="title-five">Our Latest Blogs</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="blog-grid-five w-100">
                  <div className="blog-five-img">
                    <Link to="/blog/blog-details">
                      <img
                        src={blog_11}
                        className="img-fluid blog-details-img"
                        alt=""
                      />
                    </Link>
                    <div className="blog-item-info">
                      <div className="blog-news-date">
                        <Link to="/blog/blog-details">
                          <i className="me-2">
                            <FeatherIcon icon="calendar" />
                          </i>
                          <span>10 Dec 2021</span>
                        </Link>
                      </div>
                      <div className="blog-doctors-profile">
                        <Link to="/blog/blog-details">
                          <img src={doctor_thumb_01} alt="" className="me-2" />
                          <span>Ruby Perrin</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="blog-info-five">
                    <h3 className="blog-news-title">
                      <Link to="/blog/blog-details">
                        How to handle patient body in MRI
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/blog/blog-details" className="read-news">
                      Read News
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="blog-grid-five w-100">
                  <div className="blog-five-img">
                    <Link to="/blog/blog-details">
                      <img
                        src={blog_12}
                        className="img-fluid blog-details-img"
                        alt=""
                      />
                    </Link>
                    <div className="blog-item-info">
                      <div className="blog-news-date">
                        <Link to="/blog/blog-details">
                          <i className="me-2">
                            <FeatherIcon icon="calendar" />
                          </i>
                          <span>03 Jan 2021</span>
                        </Link>
                      </div>
                      <div className="blog-doctors-profile">
                        <Link to="/blog/blog-details">
                          <img src={doctor_thumb_02} alt="" className="me-2" />
                          <span>Daren Elder</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="blog-info-five">
                    <h3 className="blog-news-title">
                      <Link to="/blog/blog-details">
                        Doccure – Making your clinic painless visit?
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/blog/blog-details" className="read-news">
                      Read News
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="blog-grid-five w-100">
                  <div className="blog-five-img">
                    <Link to="/blog/blog-details">
                      <img
                        src={blog_13}
                        className="img-fluid blog-details-img"
                        alt=""
                      />
                    </Link>
                    <div className="blog-item-info">
                      <div className="blog-news-date">
                        <Link to="/blog/blog-details">
                          <i className="me-2">
                            <FeatherIcon icon="calendar" />
                          </i>
                          <span>25 Feb 2021</span>
                        </Link>
                      </div>
                      <div className="blog-doctors-profile">
                        <Link to="/blog/blog-details">
                          <img src={doctor_thumb_03} alt="" className="me-2" />
                          <span>Dr. Angel</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="blog-info-five">
                    <h3 className="blog-news-title">
                      <Link to="/blog/blog-details">
                        Benefits of consulting with an Online Doctor
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/blog/blog-details" className="read-news">
                      Read News
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="blog-five-btn aos" data-aos="fade-up">
                  <Link to="/blog/blog-details" className="btn btn-six">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Blog Section Five */}
        {/* Footer Five */}
        <footer className="footer footer-five">
          {/* Footer Top */}
          <div className="footer-top aos" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <img src={footer_logo} alt="logo" />
                    </div>
                    <div className="footer-about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="footer-widget footer-menu footer-menu-five">
                      <ul>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-facebook" /> Facebook
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-twitter" /> Twitter
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-linkedin" /> Linkedin
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-instagram" /> Instagram
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-contact">
                    <h2 className="footer-title">Contact Us</h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <span>
                          <FeatherIcon icon="map-pin" />
                        </span>
                        <p>
                          3556 Beech Street, San Francisco,
                          <br />
                          California, CA <br />
                          94108
                        </p>
                      </div>
                      <p>
                        <i>
                          <FeatherIcon icon="phone" />
                        </i>
                        +1 315 369 5943
                      </p>
                      <p className="mb-0">
                        <FeatherIcon icon="mail" />
                        doccure@example.com
                      </p>
                    </div>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
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
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
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
                      <li>
                        <Link to="doctor-/register">Register</Link>
                      </li>
                      <li>
                        <Link to="/doctor/doctor-dashboard">
                          Doctor Dashboard
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
              </div>
            </div>
          </div>
          {/* /Footer Top */}
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              {/* Copyright */}
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-text">
                      <p className="mb-0">
                        © 2022 Doccure. All rights reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    {/* Copyright Menu */}
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
                    {/* /Copyright Menu */}
                  </div>
                </div>
              </div>
              {/* /Copyright */}
            </div>
          </div>
          {/* /Footer Bottom */}
        </footer>
        {/* /Footer Two*/}
        <ProgressCircle />
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Home14;
