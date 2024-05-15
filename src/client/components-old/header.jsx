/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logosvg from "../assets/images/logo.svg";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
// import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import FeatherIcon from "feather-icons-react";
import {
  Browser_categorie,
  Home_12,
  Home_13,
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
  logo_03,
  logo_15,
  logo_svg,
  logo_white,
} from "./imagepath";

import Chart from "./patients/dashboard/chart";
import Notification from "./patients/dashboard/notification";
import { IMG07 } from "../components/patients/doctorprofile/img";
import { footer_logo } from "./home/image";

const Header = () => {
  // const history = useHistory();
  //Aos
  // const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const config = "/react/template";

  //mobile menu
  const [change, setChange] = useState(false);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuone, setSideMenuone] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const [isSideSearch, setSideSearch] = useState("");
  const [isSidebooking, setSideBooking] = useState("");
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [isSideMenuthree, setSideMenuthree] = useState("");
  const [isSideMenufour, setSideMenufour] = useState("");
  const [sideMenufive, setSideMenufive] = useState("");
  const [menu, setMenu] = useState(false);

  // const [menu1, setMenu1] = useState(false);
  const toggleSidebarthree = (value) => {
    setSideMenuthree(value);
  };
  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebarfour = (value) => {
    setSideMenufour(value);
  };
  const toggleSidebarfive = (value) => {
    setSideMenufive(value);
  };
  const toggleSidebarone = (value) => {
    setSideMenuone(value);
  };
  const toggleSidebartwo = (value) => {
    setSideMenutwo(value);
  };
  const toggleSidebarsearch = (value) => {
    setSideSearch(value);
  };
  const toggleSidebarbooking = (value) => {
    setSideBooking(value);
  };

  // const mobilemenus = () => {
  //   setMenu(!true);
  // };

  // Rest of your code that uses pathnames

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

  //nav transparent

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {!pathnames.includes("home1") && (
        <header
          className={`header ${
            pathnames.includes("/index-11")
              ? "header-fixed header-fourteen header-sixteen"
              : "" || pathnames.includes("/index-10")
              ? "header-fixed header-fourteen header-fifteen"
              : "" || pathnames.includes("/index-9")
              ? "header-fixed header-fourteen"
              : "" || pathnames.includes("/index-8")
              ? "header-fixed header-fourteen header-twelve header-thirteen"
              : "" || pathnames.includes("/index-7")
              ? "header-fixed header-fourteen header-twelve"
              : "" || pathnames.includes("/index-6")
              ? "header-trans header-eleven"
              : "" || pathnames.includes("/index-4")
              ? "header-trans custom"
              : "" || pathnames.includes("/index-5")
              ? "header header-fixed header-ten"
              : "" || pathnames.includes("home")
              ? "header-trans header-two"
              : "" || pathnames.includes("/index-13")
              ? "header header-custom header-fixed header-ten home-care-header"
              : "" || pathnames.includes("/Pharmacy-index")
              ? "header header-one"
              : "header-fixed header-one"
          } `}
          style={
            pathnames.includes("/index-6") && navbar
              ? { background: "rgb(30, 93, 146)" }
              : { background: "" } && pathnames.includes("/index-10") && navbar
              ? { background: "rgb(255, 255, 255)" }
              : { background: "" } && pathnames.includes("/index-11") && navbar
              ? { background: "rgb(255, 255, 255)" }
              : { background: "" } && pathnames.includes("/index-4") && navbar
              ? { background: "rgb(43, 108, 203)" }
              : { background: "" } && pathnames.includes("/index-9") && navbar
              ? { background: "rgb(43, 108, 203)" }
              : { background: "" } && pathnames.includes("/index") && navbar
              ? { background: "rgb(255, 255, 255)" }
              : { background: "" }
          }
        >
          <div className="container">
            <nav
              className={`navbar navbar-expand-lg header-nav ${
                pathnames.includes("home1") ? "nav-transparent" : ""
              }`}
            >
              <div className="navbar-header">
                <Link
                  to="#0"
                  id="mobile_btn"
                  onClick={() => onHandleMobileMenu()}
                >
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </Link>
                <Link to="/index" className="navbar-brand logo">
                  {pathnames.includes("/index-5") ? (
                    <img src={logo_white} className="img-fluid" alt="Logo" />
                  ) : pathnames.includes(
                      "/react/template/Pharmacy/Pharmacy-index"
                    ) ? (
                    <div className="browse-categorie">
                      <div className="dropdown categorie-dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <img src={Browser_categorie} alt /> Browse Categories
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="#">
                            Ayush
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Covid Essentials
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Devices
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Glucometers
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={
                        pathnames === "/react/template/index-6" ||
                        pathnames === "/react/template/index-4"
                          ? footer_logo
                          : pathnames === "/index-8"
                          ? logosvg
                          : pathnames === "/react/template/index-11"
                          ? logo_15
                          : pathnames === "/react/template/index-10"
                          ? logo_15
                          : pathnames === "/react/template/index-9"
                          ? logo_03
                          : pathnames === "/react/template/index-7"
                          ? logo_svg
                          : pathnames == "/react/template/index-13"
                          ? logo_white
                          : logo
                      }
                      className="img-fluid"
                      alt="Logo"
                    />
                  )}
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

                <ul
                  className={`main-nav ${
                    pathnames.includes("home4") ? "white-font" : ""
                  }`}
                >
                  <li
                    className={`has-submenu megamenu  ${
                      pathnames.includes("index")
                        ? "active"
                        : "" || pathnames.includes("home")
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link
                      to="#"
                      onClick={() => setMenu(!menu)}
                      className={`${menu === true ? "submenu " : ""}`}
                    >
                      Home <i className="fas fa-chevron-down" />
                    </Link>
                    <ul
                      className={`${
                        menu === true
                          ? "submenu mega-submenu d-block"
                          : "submenu mega-submenu"
                      }`}
                    >
                      <li>
                        <div className="megamenu-wrapper">
                          <div className="row">
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index") ? "active" : ""
                                }`}
                              >
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
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index") ? "" : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_10}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index"
                                    className="inner-demo-img"
                                  >
                                    General Home 2
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-3") ? "active" : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-3"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_09}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-3"
                                    className="inner-demo-img"
                                  >
                                    General Home 3
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-4") ? "active" : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-4"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_08}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-4"
                                    className="inner-demo-img"
                                  >
                                    General Home 4
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-5") ? "active" : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-5"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_07}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-5"
                                    className="inner-demo-img"
                                  >
                                    Cardiology Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-6") ? "active" : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-6"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_06}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-6"
                                    className="inner-demo-img"
                                  >
                                    Eye Care Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-7") ? "active" : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-7"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_05}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-7"
                                    className="inner-demo-img"
                                  >
                                    Veterinary Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-8") ? "active" : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-8"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_04}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-8"
                                    className="inner-demo-img"
                                  >
                                    Paediatric Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-9") ? "active" : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-9"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_03}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-9"
                                    className="inner-demo-img"
                                  >
                                    Fertility Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-10")
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-10"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_02}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-10"
                                    className="inner-demo-img"
                                  >
                                    ENT Hospital Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-11")
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-11"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={home_01}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-11"
                                    className="inner-demo-img"
                                  >
                                    Cosmetics Home
                                  </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-12")
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-12"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={Home_12}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-12"
                                    className="inner-demo-img"
                                  >
                                    Lab Test Home
                                  </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2">
                              <div
                                className={`single-demo ${
                                  pathnames.includes("/index-13")
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <div className="demo-img">
                                  <Link
                                    to="/index-13"
                                    className="inner-demo-img"
                                  >
                                    <img
                                      src={Home_13}
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link
                                    to="/index-13"
                                    className="inner-demo-img"
                                  >
                                    Homecare Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`has-submenu ${
                      url.includes("/doctor") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="#"
                      className={isSideMenu == "doctors" ? "subdrop " : ""}
                      onClick={() =>
                        toggleSidebar(
                          isSideMenu == "doctors" ? "submenu" : "doctors"
                        )
                      }
                    >
                      Doctors <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "doctors" ? (
                      <ul
                        className={`${
                          isSideMenu == "doctors"
                            ? "submenu d-block"
                            : "submenu"
                        }`}
                      >
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
                            to="/doctor/invoice"
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
                        <li
                          className={`has-submenu ${
                            pathnames.includes("doctor-blog") ? "active" : ""
                          }`}
                        >
                          <Link
                            to="/doctor-blog"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Blog
                          </Link>
                          <ul className="submenu">
                            <li>
                              <Link
                                to="/doctor-blog"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Blog
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/blog/blog-details"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Blog view
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/blog/doctor-add-blog"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Add Blog
                              </Link>
                            </li>
                          </ul>
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
                      to="#"
                      className={isSideMenu == "patients" ? "subdrop" : ""}
                      onMouseEnter={() =>
                        toggleSidebar(
                          isSideMenu == "patients" ? "submenu" : "patients"
                        )
                      }
                    >
                      Patients <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "patients" ? (
                      <ul
                        className={`${
                          isSideMenu == "patients"
                            ? "submenu d-block"
                            : "submenu"
                        }`}
                      >
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
                            to="#0"
                            className={
                              isSideMenutwo == "doctor" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebartwo(
                                isSideMenutwo == "doctor" ? "" : "doctor"
                              )
                            }
                          >
                            Doctors{" "}
                          </Link>
                          {isSideMenutwo == "doctor" ? (
                            <ul
                              className={
                                isSideMenutwo == "doctor"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
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
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li
                          className={`has-submenu ${
                            pathnames.includes("search-doctor") &&
                            !pathnames.includes("doctor-profile") &&
                            !pathnames.includes("search-doctor")
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSideSearch == "search-doctor" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarsearch(
                                isSideSearch == "search-doctor"
                                  ? ""
                                  : "search-doctor"
                              )
                            }
                          >
                            Search Doctor{" "}
                          </Link>
                          {isSideSearch == "search-doctor" ? (
                            <ul
                              className={
                                isSideSearch == "search-doctor"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("search-doctor1")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/search-doctor"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Search Doctor 1
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("search-doctor2")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/search-doctor2"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Search Doctor 2
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li
                          className={
                            pathnames.includes("doctor-profile") ? "active" : ""
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
                          className={`has-submenu ${
                            pathnames.includes("booking") &&
                            !pathnames.includes("booking-success")
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSidebooking == "booking" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarbooking(
                                isSidebooking == "booking" ? "" : "booking"
                              )
                            }
                          >
                            Booking
                          </Link>
                          {isSidebooking == "booking" ? (
                            <ul
                              className={
                                isSidebooking == "booking"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("booking1") ? "active" : ""
                                }
                              >
                                <Link
                                  to="/patient/booking1"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Booking 1
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("booking2") ? "active" : ""
                                }
                              >
                                <Link
                                  to="/patient/booking2"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Booking 2
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        {/* <li className={pathnames.includes("booking") && !pathnames.includes("booking-success") ? "active" : ""}>
                          <Link to="/patient/booking1" onClick={() => onhandleCloseMenu()}>Booking</Link>
                        </li> */}
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
                      to="#"
                      className={isSideMenu == "pharmacy" ? "subdrop" : ""}
                      onMouseEnter={() =>
                        toggleSidebar(
                          isSideMenu == "pharmacy" ? "submenu" : "pharmacy"
                        )
                      }
                    >
                      Pharmacy <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "pharmacy" ? (
                      <ul
                        className={`${
                          isSideMenu == "pharmacy"
                            ? "submenu d-block"
                            : "submenu"
                        }`}
                      >
                        <li
                          className={
                            pathnames.includes("Pharmacy-index") ? "active" : ""
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
                          className={pathnames.includes("cart") ? "active" : ""}
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
                      to="#"
                      className={isSideMenu == "pages" ? "subdrop" : ""}
                      onMouseEnter={() =>
                        toggleSidebar(
                          isSideMenu == "pages" ? "submenu" : "pages"
                        )
                      }
                    >
                      Pages <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "pages" ? (
                      <ul
                        className={`${
                          isSideMenu == "pages" ? "submenu d-block" : "submenu"
                        }`}
                      >
                        <li
                          className={`${
                            pathnames.includes("/voice-call") ? "active" : ""
                          }`}
                        >
                          <Link
                            to="/pages/aboutus"
                            onClick={() => onhandleCloseMenu()}
                          >
                            About Us
                          </Link>
                        </li>
                        <li
                          className={`${
                            pathnames.includes("/video-call") ? "active" : ""
                          }`}
                        >
                          <Link
                            to="/pages/contactus"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Contact Us
                          </Link>
                        </li>

                        <li
                          className={`has-submenu ${
                            pathnames.includes("/call") ? "active" : ""
                          }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSideMenuthree == "call" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarthree(
                                isSideMenuthree == "call" ? "" : "call"
                              )
                            }
                          >
                            Call{" "}
                          </Link>
                          {isSideMenuthree == "call" ? (
                            <ul
                              className={
                                isSideMenuthree == "call"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("voice-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/voice-call"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Voice Call
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("video-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/video-call"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Video Call
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>

                        <li
                          className={`has-submenu ${
                            pathnames.includes("/invoice-view") ? "active" : ""
                          }`}
                        >
                          <Link
                            to="#0"
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
                            <ul
                              className={
                                isSideMenuone == "invoices"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
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
                          className={`has-submenu ${
                            pathnames.includes("/authentication")
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSideMenufour == "authentication"
                                ? "subdrop"
                                : ""
                            }
                            onClick={() =>
                              toggleSidebarfour(
                                isSideMenufour == "authentication"
                                  ? ""
                                  : "authentication"
                              )
                            }
                          >
                            Authentication{" "}
                          </Link>
                          {isSideMenufour == "authentication" ? (
                            <ul
                              className={
                                isSideMenufour == "authentication"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("voice-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/login-email"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Login Email
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("video-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/login-phone"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Login Phone
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("video-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/doctor-signup"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Doctor Signup
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("video-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/patient-signup"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Patient Signup
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("video-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/forgot-password"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Forgot Password 1
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("video-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/forgot-password2"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Forgot Password 2
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("video-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/email-otp"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Email OTP
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("video-call")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/pages/phone-otp"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Phone OTP
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>

                        <li
                          className={`has-submenu ${
                            pathnames.includes("/error") ? "active" : ""
                          }`}
                        >
                          <Link
                            to="#0"
                            className={sideMenufive == "error" ? "subdrop" : ""}
                            onClick={() =>
                              toggleSidebarfive(
                                sideMenufive == "error" ? "" : "error"
                              )
                            }
                          >
                            Error{" "}
                          </Link>
                          {sideMenufive == "error" ? (
                            <ul
                              className={
                                sideMenufive == "error"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("invoice") ? "active" : ""
                                }
                              >
                                <Link
                                  to="/pages/error-404"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Error 404
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("-view") ? "active" : ""
                                }
                              >
                                <Link
                                  to="/pages/error-500"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Error 500
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
                            pathnames.includes("/aboutus") ? "active" : ""
                          }
                        >
                          <Link
                            to="/pages/pricing-plan"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Pricing Plan
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("/contactus") ? "active" : ""
                          }
                        >
                          <Link
                            to="/pages/faq"
                            onClick={() => onhandleCloseMenu()}
                          >
                            FAQ
                          </Link>
                        </li>

                        <li
                          className={
                            pathnames.includes("login") ? "active" : ""
                          }
                        >
                          <Link
                            to="/pages/maintenance"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Maintenance
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("login") ? "active" : ""
                          }
                        >
                          <Link
                            to="/pages/comingsoon"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Coming Soon
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("/register") ? "active" : ""
                          }
                        >
                          <Link
                            to="/pages/terms"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Terms & Condition
                          </Link>
                        </li>
                        <li
                          className={`${
                            pathnames === "/forgot-password" ? "active" : ""
                          }`}
                        >
                          <Link
                            to="/pages/privacy-policy"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Privacy Policy
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
                      to="#"
                      className={isSideMenu == "blog" ? "subdrop" : ""}
                      onMouseEnter={() =>
                        toggleSidebar(isSideMenu == "blog" ? "submenu" : "blog")
                      }
                    >
                      Blog <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "blog" ? (
                      <ul
                        className={`${
                          isSideMenu == "blog" ? "submenu d-block" : "submenu"
                        }`}
                      >
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
                      to="#"
                      // target="_blank"
                      className={isSideMenu == "admin" ? "subdrop" : ""}
                      onMouseEnter={() =>
                        toggleSidebar(
                          isSideMenu == "admin" ? "submenu" : "admin"
                        )
                      }
                    >
                      Admin
                      <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "admin" ? (
                      <ul
                        className={`${
                          isSideMenu == "admin" ? "submenu d-block" : "submenu"
                        }`}
                      >
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
                    ) : (
                      ""
                    )}
                  </li>
                  {pathnames.includes("/index-5") ||
                  pathnames.includes("/index-11") ? (
                    <li className="searchbar">
                      <Link to="#">
                        <i>
                          {" "}
                          <FeatherIcon icon="search" />
                        </i>
                      </Link>
                      <div className="togglesearch" style={{ display: "none" }}>
                        <form action={`${config}/patient/search-doctor`}>
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  ) : null}
                  {(!pathnames.includes("/index-10") &&
                    pathnames.includes("index")) ||
                  pathnames.includes("/login") ||
                  pathnames.includes("/register") ||
                  pathnames.includes("blog") ||
                  pathnames.includes("/doctor/doctor-register") ||
                  pathnames.includes("pages") ||
                  pathnames.includes("/patient/search-doctor") ||
                  (pathnames.includes("/aboutus") &&
                    !pathnames.includes("/index-6") &&
                    !pathnames.includes("/index-13") &&
                    !pathnames.includes("/index-5") &&
                    !pathnames.includes("/index-6") &&
                    !pathnames.includes("/index-7") &&
                    !pathnames.includes("/index-8") &&
                    !pathnames.includes("/index-9") &&
                    !pathnames.includes("/index-10") &&
                    !pathnames.includes("/index-11")) ? (
                    <>
                      <li className="searchbar">
                        <Link to="#" onClick={() => setChange(!change)}>
                          <i> {/* <FeatherIcon icon="search" /> */}</i>
                        </Link>
                        <div
                          className={`${
                            change === true
                              ? "togglesearch d-block"
                              : "togglesearch d-none"
                          }`}
                        >
                          <form action={`${config}/patient/search-doctor`}>
                            <div className="input-group">
                              <input type="text" className="form-control" />
                              <button type="submit" className="btn">
                                Search
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                      <li className="login-link">
                        <Link to="/login">Login / Signup</Link>
                      </li>
                      {!pathnames.includes("/index-13") &&
                        !pathnames.includes("/index-5") &&
                        !pathnames.includes("/index-6") &&
                        !pathnames.includes("/index-7") &&
                        !pathnames.includes("/index-8") &&
                        !pathnames.includes("/index-9") &&
                        !pathnames.includes("/index-4") &&
                        !pathnames.includes("/index-10") &&
                        !pathnames.includes("/index") &&
                        !pathnames.includes("/index-11") && (
                          // <div
                          //   style={{
                          //     visibility: pathnames.includes(
                          //       "/Pharmacy/Pharmacy-index"
                          //     )
                          //       ? "hidden"
                          //       : "",
                          //   }}
                          // >
                          <>
                            <li className="register-btn">
                              <Link to="/register" className="btn reg-btn">
                                <i>
                                  <FeatherIcon icon="user" />
                                </i>
                                Register
                              </Link>
                            </li>
                            <li className="register-btn">
                              <Link
                                to="/login"
                                className="btn btn-primary log-btn"
                              >
                                <i>
                                  <FeatherIcon icon="lock" />
                                </i>
                                Login
                              </Link>
                            </li>
                          </>
                          // {/* </div> */}
                        )}
                    </>
                  ) : null}
                </ul>
              </div>
              {pathnames.includes("/index-6") ? (
                <ul className="nav header-navbar-rht">
                  <li className="nav-item">
                    <Link
                      className={`nav-link header-login ${
                        pathnames.includes("home6") ? "white-bg" : ""
                      }`}
                      to="/login"
                    >
                      <i className="me-2">
                        <FeatherIcon icon="lock" />
                      </i>
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link header-login btn-light-blue"
                      to="/login"
                    >
                      <i className="me-2">
                        <FeatherIcon icon="user" />
                      </i>
                      Login
                    </Link>
                  </li>
                </ul>
              ) : null}
              {pathnames.includes("/index") &&
              !pathnames.includes("/index-11") &&
              !pathnames.includes("/index-5") &&
              !pathnames.includes("/index-6") &&
              !pathnames.includes("/index-7") &&
              !pathnames.includes("/index-8") &&
              !pathnames.includes("/index-9") &&
              !pathnames.includes("/index-4") ? (
                <ul className="nav header-navbar-rht">
                  <li className="nav-item">
                    <Link
                      className={`nav-link header-login ${
                        pathnames.includes("home4") ? "white-bg" : ""
                      }`}
                      to="/login"
                    >
                      login / Signup
                    </Link>
                  </li>
                </ul>
              ) : null}

              {pathnames.includes("/index-5") ||
              pathnames.includes("/index-7") ||
              pathnames.includes("/index-9") ? (
                <ul className="nav header-navbar-rht">
                  {pathnames.includes("/index-11") ||
                  pathnames.includes("home7") ||
                  pathnames.includes("home9") ? (
                    <li className="searchbar searchbar-fourteen me-2">
                      <Link to="#">
                        <i>
                          <FeatherIcon icon="search" />
                        </i>
                      </Link>
                      <div className="togglesearch">
                        <form action={`${config}/patient/search-doctor`}>
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn btn-primary">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  ) : null}

                  <li
                    className={`${
                      pathnames.includes("/index-7") || "/index-9"
                        ? "login-in-fourteen"
                        : "register-btn"
                    }`}
                  >
                    <Link
                      to="/pages/login-email"
                      className={
                        pathnames === "/index-9"
                          ? "btn reg-btn"
                          : "btn log-btn" && pathnames === "/index-7"
                          ? "btn reg-btn"
                          : "btn log-btn"
                      }
                    >
                      <i className="me-2">
                        {pathnames.includes("home7") ? (
                          <FeatherIcon icon="user" />
                        ) : (
                          <FeatherIcon icon="lock" />
                        )}
                      </i>
                      Log In
                    </Link>
                  </li>
                  <li
                    className={`${
                      pathnames.includes("/index-7") || "/index-9"
                        ? "login-in-fourteen"
                        : "register-btn"
                    }`}
                  >
                    <Link
                      to="/signup"
                      className={`${
                        pathnames.includes("/index-7") || "/index-9"
                          ? "btn btn-primary reg-btn reg-btn-fourteen"
                          : "btn reg-btn"
                      }`}
                    >
                      <i className="me-2">
                        <FeatherIcon icon="user" />
                      </i>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              ) : null}
              {(!pathnames.includes("/patient/search-doctor") &&
                pathnames.includes("patient")) ||
              (pathnames.includes("Pharmacy") &&
                !pathnames.includes("/Pharmacy/Pharmacy-index")) ? (
                <>
                  <ul className="nav header-navbar-rht">
                    <Chart />
                    <Notification />
                    <li className="nav-item dropdown has-arrow logged-item">
                      <Link
                        to="#"
                        className="dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                      >
                        <span className="user-img">
                          <img
                            className="rounded-circle"
                            src={IMG07}
                            width="31"
                            alt="Darren Elder"
                          />
                        </span>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div className="user-header">
                          <div className="avatar avatar-sm">
                            <img
                              src={IMG07}
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="user-text">
                            <h6>Richard Wilson</h6>
                            <p className="text-muted mb-0">Patient</p>
                          </div>
                        </div>
                        <Link className="dropdown-item" to="/patient/dashboard">
                          Dashboard
                        </Link>
                        <Link className="dropdown-item" to="/patient/profile">
                          Profile Settings
                        </Link>
                        <Link className="dropdown-item" to="/login">
                          Logout
                        </Link>
                      </div>
                    </li>
                  </ul>
                </>
              ) : pathnames.includes("doctor") &&
                !pathnames.includes("/doctor/doctor-register") &&
                !pathnames.includes("/patient/search-doctor") &&
                !pathnames.includes("/pages/doctor-signup") &&
                !pathnames.includes("/doctor-blog") &&
                !pathnames.includes("/doctor-edit-blog") &&
                !pathnames.includes("/doctor-pending-blog") &&
                !pathnames.includes("/blog/doctor-add-blog") ? (
                <ul className="nav header-navbar-rht">
                  <Chart />
                  <Notification />
                  <li className="nav-item dropdown has-arrow logged-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="user-img">
                        <img
                          className="rounded-circle"
                          src={IMG01}
                          width="31"
                          alt="Darren Elder"
                        />
                      </span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <img
                            src={IMG01}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>Darren Elde</h6>
                          <p className="text-muted mb-0">Doctor</p>
                        </div>
                      </div>
                      <Link className="dropdown-item" to="/patient/dashboard">
                        Dashboard
                      </Link>
                      <Link className="dropdown-item" to="/patient/profile">
                        Profile Settings
                      </Link>
                      <Link className="dropdown-item" to="/login">
                        Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              ) : null}
              {pathnames.includes("/index-8") ? (
                <ul className="nav header-navbar-rht">
                  <li className="login-link">
                    <Link to="/login">Login / Signup</Link>
                  </li>
                  <li className="login-in-fourteen">
                    <Link to="/pages/login-email" className="btn reg-btn">
                      Log In
                    </Link>
                  </li>
                  <li className="login-in-fourteen">
                    <Link to="/signup" className=" reg-btn-thirteen">
                      <span>Sign Up</span>
                      <div className="user-icon-header">
                        <i>
                          <FeatherIcon icon="user" />
                        </i>
                      </div>
                    </Link>
                  </li>
                </ul>
              ) : pathnames.includes("/index-10") ? (
                <ul className="nav header-navbar-rht">
                  <li className="login-link">
                    <Link to="/login">Login / Signup</Link>
                  </li>
                  <li className="login-in-fourteen">
                    <Link to="/pages/login-email" className="btn reg-btn">
                      <i className="me-2">
                        <FeatherIcon icon="video" />
                      </i>
                      Live Demo
                    </Link>
                  </li>
                  <li className="login-in-fourteen">
                    <Link
                      to="/signup"
                      className="btn btn-primary reg-btn reg-btn-fourteen"
                    >
                      <i className="me-2">
                        <FeatherIcon icon="shopping-cart" />
                      </i>
                      Buy Template
                    </Link>
                  </li>
                </ul>
              ) : null}
              {pathnames.includes("/index-11") ? (
                <ul className="nav header-navbar-rht">
                  <li className="login-link">
                    <Link to="/login">Login / Signup</Link>
                  </li>
                  <li className="login-in-sixteen">
                    <Link to="/pages/login-email" className="btn reg-btn">
                      <i className="me-2">
                        <FeatherIcon icon="lock" />
                      </i>
                      Login<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                  <li className="login-in-sixteen">
                    <Link
                      to="/signup"
                      className="btn btn-primary reg-btn reg-btn-sixteen"
                    >
                      <i className="me-2">
                        <FeatherIcon icon="user" />
                      </i>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              ) : null}

              {pathnames.includes("/index-13") ? (
                <ul className="nav header-navbar-rht">
                  <li className="register-btn">
                    <Link to="/pages/login-email" class="btn log-btn">
                      <i className="feather-lock"></i>Login
                    </Link>
                  </li>
                  <li className="register-btn">
                    <Link to="/signup" class="btn reg-btn">
                      <i className="feather-user"></i>Sign Up
                    </Link>
                  </li>
                </ul>
              ) : null}

              {/* {pathnames == "/react/template/index-13" ? (
                <ul class="nav header-navbar-rht">
                  <li class="register-btn">
                    <Link to="login-email.html" class="btn log-btn">
                      <i class="feather-lock"></i>Login
                    </Link>
                  </li>
                  <li class="register-btn">
                    <Link to="signup.html" class="btn reg-btn">
                      <i class="feather-user"></i>Sign Up
                    </Link>
                  </li>
                </ul>
              ) : null} */}
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
