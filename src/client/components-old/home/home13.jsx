import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
import FeatherIcon from "feather-icons-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  // clinic_big_img,
  clinic_11,
  clinic_12,
  clinic_13,
  clinic_14,
  clinic_15,
  clinic_16,
  clinic_17,
  clinic_18,
  // features_clinic_01,
  // features_clinic_02,
  // features_clinic_03,
  // features_clinic_04,
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
  book_doctor_09,
  // patient_icon,
  book_doctor_12,
  book_doctor_11,
  book_doctor_10,
  // book_doctor_06,
  // book_doctor_07,
  // book_doctor_08,
  blog_01,
  blog_02,
  blog_04,
  // best_doctor_check,
  // doctor_img,
  // logo,
  // banner_check,
  // shapes_10,
  // shapes_7,
  // shapes_8,
  // shapes_6,
  logo_one,
  // banner_img,
  // appoinment_img,
  // phone_call,
  // services_01,
  // services_02,
  // services_03,
  // services_04,
  // features_01,
  // features_02,
  // features_03,
  // features_04,
  // features_05,
  // features_06,
  // book_doctor_01,
  // book_doctor_02,
  // book_doctor_03,
  // book_doctor_04,
  // doctor_check,
  // news_img,
  // blog_11,
  // blog_12,
  // blog_13,
  // footer_logo,
  // icon6,
  icon3,
  // icon2,
  icon4,
  icon1,
  // icon5,
  icon7,
  icon8,
  // icon9,
  icon10,
  icon11,
} from "./image.jsx";
import ProgressCircle from "./paediatric/scrolltotop";
import Clinicfour from "./clinicFour/index.jsx";

const Home13 = () => {
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

  const settings = {
    width: 400,
    dots: true,

    infinite: "true",
    speed: 500,
    slidesToShow: 4,
    slidestoscroll: 1,
    centerpadding: "5px",
    arrows: "false",
    centermode: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidestoshow: 1,
          slidestoscroll: 1,
          infinite: "true",
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidestoshow: 2,
          slidestoscroll: 1,
          infinite: "true",
        },
      },
    ],
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
        {/* Home Banner */}
        <section className="home-four-banner">
          {/*Top Header */}
          <div className="home-four-top">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="left-top aos" data-aos="fade-up">
                    <ul>
                      <li>
                        <FeatherIcon icon="phone" size="14" /> +1 315 369 5943
                        {/* <i className="feather-phone me-1" />  */}
                      </li>
                      <li>
                        <FeatherIcon icon="mail" size="17" />{" "}
                        doccure@example.com
                        {/* <i className="feather-mail me-1" /> */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div className="right-top aos" data-aos="fade-up">
                    <ul>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/Top Header */}
          <div className="container">
            {/* Header */}
            <header className="header">
              <div className="nav-bg home-four-nav">
                <nav className="navbar navbar-expand-lg header-nav nav-transparent">
                  <div className="navbar-header">
                    <Link
                      id="mobile_btn"
                      to="#"
                      onClick={() => onHandleMobileMenu()}
                    >
                      <span className="bar-icon blue-bar">
                        <span />
                        <span />
                        <span />
                      </span>
                    </Link>
                    <Link to="/index" className="navbar-brand logo">
                      <img src={logo_one} className="img-fluid" alt="Logo" />
                    </Link>
                  </div>
                  <div className="main-menu-wrapper">
                    <div className="menu-header">
                      <Link to="/index" className="menu-logo">
                        <img src={logo_one} className="img-fluid" alt="Logo" />
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
                                pathnames.includes("homeslider1")
                                  ? "active"
                                  : ""
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
                                pathnames.includes("homeslider2")
                                  ? "active"
                                  : ""
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
                                pathnames.includes("appointments")
                                  ? "active"
                                  : ""
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
                                pathnames.includes("my-patients")
                                  ? "active"
                                  : ""
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
                                pathnames.includes("chat-doctor")
                                  ? "active"
                                  : ""
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
                                pathnames.includes("patient-chat")
                                  ? "active"
                                  : ""
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
                                pathnames.includes("/voice-call")
                                  ? "active"
                                  : ""
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
                                pathnames.includes("/video-call")
                                  ? "active"
                                  : ""
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
                            </li>
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
                                    isSideMenuone == "invoices"
                                      ? ""
                                      : "invoices"
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
                                      pathnames.includes("-view")
                                        ? "active"
                                        : ""
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
                                pathnames.includes("/blank-page")
                                  ? "active"
                                  : ""
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
                                pathnames.includes("blog-details")
                                  ? "active"
                                  : ""
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
                              <Link
                                to={`${config}pharmacyadmin`}
                                target="_blank"
                              >
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
                    <ul className="nav header-navbar-rht right-menu">
                      <li className="nav-item">
                        <Link
                          className="nav-link theme-btn btn-four"
                          to="/login"
                        >
                          Sign In
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link theme-btn btn-four-light"
                          to="/register"
                        >
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
            {/* /Header */}
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12" />
              <div className="col-lg-7 col-md-12">
                <div className="home-four-doctor">
                  <div className="home-four-header">
                    <h2>
                      Search Doctor, Make an <span>Appointment</span>
                    </h2>
                  </div>
                  <div className="banner-four-form">
                    <form action="#" className="banner-four-search">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue=""
                              placeholder="Search Location"
                            />
                            <i className="far fa-compass" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <select className="select form-control">
                              <option>Gender</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                            <i className="far fa-smile" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <select className="select form-control">
                              <option>Department</option>
                              <option>Surgen</option>
                              <option>Cardiologist</option>
                              <option>Gynacologist</option>
                              <option>Pharmacy</option>
                            </select>
                            <i className="fas fa-user-check" />
                          </div>
                        </div>
                        <div className="col-md-6" />
                        <div className="col-md-6">
                          <div className="form-group text-end mb-0">
                            <Link
                              to="/patient/search-doctor"
                              className="btn theme-btn btn-four w-100"
                            >
                              MAKE APPOINTMENT
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/* Looking Section Four */}
        <section className="looking-section-four">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header-four text-center aos"
                  data-aos="fade-up"
                >
                  <h2>
                    What are you <span className="color-primary">looking</span>{" "}
                    for?
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="row looking-row justify-content-center aos"
              data-aos="fade-up"
            >
              <div className="col-lg-4 col-md-6 looking-col d-flex">
                <div className="looking-grid-four w-100">
                  <div className="looking-box-four">
                    <div className="looking-inner-box">
                      <div className="looking-info-four">
                        <Link to="/patient/search-doctor">
                          <i className="fas fa-user-md me-2" /> Visit a Doctor
                        </Link>
                        <p>
                          We hire the best specialists to deliver top-notch
                          diagnostic services for you diagnostic services for
                          you.
                        </p>
                      </div>
                      <div className="looking-four-btn">
                        <Link to="/patient/booking1">
                          Book Now <i className="fas fa-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex looking-col">
                <div className="looking-grid-four w-100">
                  <div className="looking-box-four">
                    <div className="looking-inner-box">
                      <div className="looking-info-four">
                        <Link to="pharmacy-/patient/search-doctor">
                          <i className="fas fa-tablets me-2" /> Find a Pharmacy
                        </Link>
                        <p>
                          We provide the a wide range of medical services, so
                          every person could have the opportunity.
                        </p>
                      </div>
                      <div className="looking-four-btn">
                        <Link to="/patient/booking1">
                          Find Now <i className="fas fa-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex looking-col">
                <div className="looking-grid-four w-100">
                  <div className="looking-box-four">
                    <div className="looking-inner-box">
                      <div className="looking-info-four">
                        <Link to="#">
                          <i className="fas fa-vial me-2" /> Find a Lab
                        </Link>
                        <p>
                          We use the first-class medical equipment for timely
                          diagnostics of various diseases.
                        </p>
                      </div>
                      <div className="looking-four-btn">
                        <Link to="/patient/booking1">
                          Book Now <i className="fas fa-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Looking Section Four */}
        {/* Clinic Section Four */}
        <section className="clinic-section-four">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header-four text-center aos"
                  data-aos="fade-up"
                >
                  <h2>
                    Clinic &amp;{" "}
                    <span className="color-primary">Specialities</span>
                  </h2>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-four w-100">
                  <div className="clinic-img">
                    <img
                      src={clinic_11}
                      className="img-fluid clinic-image"
                      alt=""
                    />
                    <div className="clinic-content">
                      <h4>Urology</h4>
                    </div>
                    <div className="clinic-icon-inner">
                      <div className="clinic-box-img">
                        <img src={icon1} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="clinic-cricle">
                      <div className="clinic-round">
                        <img src={icon1} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <h4>Urology</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-four w-100">
                  <div className="clinic-img">
                    <img
                      src={clinic_12}
                      className="img-fluid clinic-image"
                      alt=""
                    />
                    <div className="clinic-content">
                      <h4>Orthopedic</h4>
                    </div>
                    <div className="clinic-icon-inner">
                      <div className="clinic-box-img">
                        <img src={icon7} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="clinic-cricle">
                      <div className="clinic-round">
                        <img src={icon7} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <h4>Orthopedic</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-four w-100">
                  <div className="clinic-img">
                    <img
                      src={clinic_13}
                      className="img-fluid clinic-image"
                      alt=""
                    />
                    <div className="clinic-content">
                      <h4>Dentist</h4>
                    </div>
                    <div className="clinic-icon-inner">
                      <div className="clinic-box-img">
                        <img src={icon4} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="clinic-cricle">
                      <div className="clinic-round">
                        <img src={icon4} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <h4>Dentist</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-four w-100">
                  <div className="clinic-img">
                    <img
                      src={clinic_14}
                      className="img-fluid clinic-image"
                      alt=""
                    />
                    <div className="clinic-content">
                      <h4>Cardiologist</h4>
                    </div>
                    <div className="clinic-icon-inner">
                      <div className="clinic-box-img">
                        <img
                          src={icon3}
                          className="img-fluid clinic-inner-heart"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="clinic-cricle">
                      <div className="clinic-round">
                        <img
                          src={icon3}
                          className="img-fluid clinic-heart-img"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4>Cardiologist</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-four w-100">
                  <div className="clinic-img">
                    <img
                      src={clinic_15}
                      className="img-fluid clinic-image"
                      alt=""
                    />
                    <div className="clinic-content">
                      <h4>MRI Scans</h4>
                    </div>
                    <div className="clinic-icon-inner">
                      <div className="clinic-box-img">
                        <img src={icon8} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="clinic-cricle">
                      <div className="clinic-round">
                        <img src={icon8} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <h4>MRI Scans</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-four w-100">
                  <div className="clinic-img">
                    <img
                      src={clinic_16}
                      className="img-fluid clinic-image"
                      alt=""
                    />
                    <div className="clinic-content">
                      <h4>Neurology</h4>
                    </div>
                    <div className="clinic-icon-inner">
                      <div className="clinic-box-img">
                        <img src={icon1} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="clinic-cricle">
                      <div className="clinic-round">
                        <img src={icon1} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <h4>Neurology</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-four w-100">
                  <div className="clinic-img">
                    <img
                      src={clinic_17}
                      className="img-fluid clinic-image"
                      alt=""
                    />
                    <div className="clinic-content">
                      <h4>Laboratory</h4>
                    </div>
                    <div className="clinic-icon-inner">
                      <div className="clinic-box-img">
                        <img src={icon10} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="clinic-cricle">
                      <div className="clinic-round">
                        <img src={icon10} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <h4>Laboratory</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="clinic-grid-four w-100">
                  <div className="clinic-img">
                    <img
                      src={clinic_18}
                      className="img-fluid clinic-image"
                      alt=""
                    />
                    <div className="clinic-content">
                      <h4>Primary Checkup</h4>
                    </div>
                    <div className="clinic-icon-inner">
                      <div className="clinic-box-img">
                        <img src={icon11} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="clinic-cricle">
                      <div className="clinic-round">
                        <img src={icon11} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <h4>Primary Checkup</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Clinic Section Four */}
        {/* Doctor Section Four */}
        <section className="doctor-section-four">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header-four text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="title-four">
                    Book Our <span className="color-primary">Best Doctor</span>
                  </h2>
                  <p className="sub-title color-grey">
                    Access to expert physicians and surgeons, advanced
                    technologies and top-quality surgery facilities right here.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <div className="best-doctors-slider slider">
                  <Slider {...settings}>
                    <div className="best-doctors-grid">
                      <div className="best-doctors-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={book_doctor_09}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="best-doctors-info">
                        <h3>
                          <Link to="/patient/doctor-profile">
                            Dr. Deborah Angel
                          </Link>
                        </h3>
                        <p className="doctor-posting">
                          MBBS, MS - General Surgery, MCh
                        </p>
                        <h5 className="doctors-amount">$20 - $50</h5>
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
                        <div className="booking-btn">
                          <Link to="/patient/booking1" className="btn">
                            <span>
                              Book Appointment{" "}
                              <i className="fas fa-arrow-right ms-2" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctors-grid">
                      <div className="best-doctors-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={book_doctor_10}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="best-doctors-info">
                        <h3>
                          <Link to="/patient/doctor-profile">
                            Dr. Darren Elder
                          </Link>
                        </h3>
                        <p className="doctor-posting">
                          MBBS, MD - General Medicine, DNB
                        </p>
                        <h5 className="doctors-amount">$30 - $70</h5>
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
                        <div className="booking-btn">
                          <Link to="/patient/booking1" className="btn">
                            <span>
                              Book Appointment{" "}
                              <i className="fas fa-arrow-right ms-2" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctors-grid">
                      <div className="best-doctors-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={book_doctor_11}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="best-doctors-info">
                        <h3>
                          <Link to="/patient/doctor-profile">
                            Dr. Sofia Brient
                          </Link>
                        </h3>
                        <p className="doctor-posting">
                          MBBS, MD - General Medicine, DNB
                        </p>
                        <h5 className="doctors-amount">$40 - $80</h5>
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
                        <div className="booking-btn">
                          <Link to="/patient/booking1" className="btn">
                            <span>
                              Book Appointment{" "}
                              <i className="fas fa-arrow-right ms-2" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctors-grid">
                      <div className="best-doctors-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={book_doctor_12}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="best-doctors-info">
                        <h3>
                          <Link to="/patient/doctor-profile">
                            Dr. Ruby Perrin
                          </Link>
                        </h3>
                        <p className="doctor-posting">
                          MBBS, MS - General Surgery, MCh
                        </p>
                        <h5 className="doctors-amount">$50 - $90</h5>
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
                        <div className="booking-btn">
                          <Link to="/patient/booking1" className="btn">
                            <span>
                              Book Appointment{" "}
                              <i className="fas fa-arrow-right ms-2" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctors-grid">
                      <div className="best-doctors-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={book_doctor_11}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="best-doctors-info">
                        <h3>
                          <Link to="/patient/doctor-profile">
                            Dr. Sofia Brient
                          </Link>
                        </h3>
                        <p className="doctor-posting">
                          MBBS, MD - General Medicine, DNB
                        </p>
                        <h5 className="doctors-amount">$40 - $80</h5>
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
                        <div className="booking-btn">
                          <Link to="/patient/booking1" className="btn">
                            <span>
                              Book Appointment{" "}
                              <i className="fas fa-arrow-right ms-2" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctors-grid">
                      <div className="best-doctors-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            src={book_doctor_12}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="best-doctors-info">
                        <h3>
                          <Link to="/patient/doctor-profile">
                            Dr. Ruby Perrin
                          </Link>
                        </h3>
                        <p className="doctor-posting">
                          MBBS, MS - General Surgery, MCh
                        </p>
                        <h5 className="doctors-amount">$50 - $90</h5>
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
                        <div className="booking-btn">
                          <Link to="/patient/booking1" className="btn">
                            <span>
                              Book Appointment{" "}
                              <i className="fas fa-arrow-right ms-2" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Doctor Section Four */}
        {/* Features Clinic Four */}
        <Clinicfour />
        {/* /Features Clinic Four */}
        {/* Blog Section Four */}
        <section className="blog-section-four">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="section-header-four text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="title-four">
                    Our Latest <span className="color-primary">Blogs</span>
                  </h2>
                  <p className="sub-title color-grey">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="grid-blog-four w-100">
                  <div className="grid-blog-image">
                    <Link to="/blog/blog-details">
                      <img
                        className="img-fluid"
                        src={blog_01}
                        alt="News Image"
                      />
                    </Link>
                    <div className="blog-title-four">
                      <Link to="/blog/blog-details" className="btn">
                        Health
                      </Link>
                    </div>
                    <div className="blog-date-four">
                      <Link to="#">
                        <i className="feather-calendar me-2" />
                        <span>4 Jan 2022</span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-info-four">
                    <Link to="/blog/blog-details">
                      How to handle patient body in MRI
                    </Link>
                  </div>
                  <div className="blog-doctors-four">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Link to="/patient/doctor-profile">
                          <img src={doctor_thumb_01} alt="" className="me-2" />
                          <span>Dr. Ruby Perrin</span>
                        </Link>
                      </div>
                      <div>
                        <p>Urology</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-four-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="blog-four-arrow">
                    <Link to="/blog/blog-details">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="grid-blog-four w-100">
                  <div className="grid-blog-image">
                    <Link to="/blog/blog-details">
                      <img
                        className="img-fluid"
                        src={blog_02}
                        alt="News Image"
                      />
                    </Link>
                    <div className="blog-title-four">
                      <Link to="/blog/blog-details" className="btn">
                        General
                      </Link>
                    </div>
                    <div className="blog-date-four">
                      <Link to="#">
                        <i className="feather-calendar me-2" />
                        <span>13 Feb 2022</span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-info-four">
                    <Link to="/blog/blog-details">
                      Doccure – Making your clinic painless visit?
                    </Link>
                  </div>
                  <div className="blog-doctors-four">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Link to="/patient/doctor-profile">
                          <img src={doctor_thumb_02} alt="" className="me-2" />
                          <span>Dr. Darren Elder</span>
                        </Link>
                      </div>
                      <div>
                        <p>Surgery</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-four-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="blog-four-arrow">
                    <Link to="/blog/blog-details">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="grid-blog-four w-100">
                  <div className="grid-blog-image">
                    <Link to="/blog/blog-details">
                      <img
                        className="img-fluid"
                        src={blog_04}
                        alt="News Image"
                      />
                    </Link>
                    <div className="blog-title-four">
                      <Link to="/blog/blog-details" className="btn">
                        Neurology
                      </Link>
                    </div>
                    <div className="blog-date-four">
                      <Link to="#">
                        <i className="feather-calendar me-2" />
                        <span>26 Mar 2022</span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-info-four">
                    <Link to="/blog/blog-details">
                      Benefits of consulting with an Online Doctor
                    </Link>
                  </div>
                  <div className="blog-doctors-four">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Link to="/patient/doctor-profile">
                          <img src={doctor_thumb_03} alt="" className="me-2" />{" "}
                          <span>Dr. Angel</span>
                        </Link>
                      </div>
                      <div>
                        <p>Cardiology</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-four-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="blog-four-arrow">
                    <Link to="/blog/blog-details">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/blog/blog-details" className="btn btn-one">
                View More
              </Link>
            </div>
          </div>
        </section>
        {/* /Blog Section Four */}
        {/* Footer Four */}
        <footer className="footer footer-four">
          <div className="news-section-four">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="news-info">
                    <h2>Subscribe to our Newsletter</h2>
                    <p>
                      Subscribe today for our exclusive offers, latest news and
                      updates about health care programs.
                    </p>
                  </div>
                  <div className="footer-news-four">
                    <form>
                      <div className="form-group mb-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Email Address"
                        />
                        <button type="submit" className="btn btn-one">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Top */}
          <div className="footer-top aos" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-contact">
                    <h2 className="footer-title">Contact Us</h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <span>
                          <i className="feather-map-pin" />
                        </span>
                        <p>
                          3556 Beech Street, San Francisco,
                          <br />
                          California, CA <br />
                          94108
                        </p>
                      </div>
                      <p>
                        <i className="feather-phone" />
                        +1 315 369 5943
                      </p>
                      <p className="mb-0">
                        <i className="feather-mail" />
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
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Social Network</h2>
                    <ul>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-facebook me-2" /> Facebook
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-twitter me-2" /> Twitter
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-linkedin me-2" /> Linkedin
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-instagram me-2" /> Instagram
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
        {/* /Footer One*/}
        <ProgressCircle />
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Home13;
