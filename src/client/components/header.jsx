import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatherIcon from "feather-icons-react";
import {
  logo_svg,
} from "./imagepath";

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const [isSideSearch, setSideSearch] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);


  const toggleSidebar = (value) => {
    setSideMenu(value);
  };


  const toggleSidebartwo = (value) => {
    setSideMenutwo(value);
  };
  const toggleSidebarsearch = (value) => {
    setSideSearch(value);
  };



  let pathnames = window.location.pathname;

  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  



  return (
    <>
        <header
          className={`header header-fixed header-fourteen header-twelve`}
        >
          <div className="container">
            <nav
              className={`navbar navbar-expand-lg header-nav`}
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
                    <img
                      src={logo_svg}
                      className="img-fluid"
                      alt="Logo"
                    />
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link
                    to="#0"
                    id="menu_close"
                    className="menu-close"
                    onClick={() => onhandleCloseMenu()}
                  >
                    <i className="fas fa-times"></i>
                  </Link>
                </div>
                {
                  (pathnames.includes('/react/template/index') && width < 575) ?
                  <ul className={`main-nav`}>
                    <li
                      className={`has-submenu ${
                        url.includes("/blog") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/signin"
                      >
                        Sign In
                      </Link>
                    </li>
                    <li
                      className={`has-submenu ${
                        url.includes("/blog") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/signup"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                  :
                  (
                    (pathnames.includes('/react/template/doctor') && width < 768) ?
                    <li
                      className={`has-submenu ${
                        url.includes("/doctor") ? "active" : ""
                      }`}
                    >
                        <ul
                          className="main-nav d-block"
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
                              pathnames.includes("my-patients") ? "active" : ""
                            }
                          >
                            <Link
                              to="/doctor/my-patients"
                              onClick={() => onhandleCloseMenu()}
                            >
                              My Patients
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
                              pathnames.includes("available-timing") ? "active" : ""
                            }
                          >
                            <Link
                              to="/doctor/available-timing"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Available Timings
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
                              pathnames.includes("social-media")
                                ? "active"
                                : ""
                            }
                          >
                            <Link
                              to="/doctor/social-media"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Social Media
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("doctor-change-password") ? "active" : ""
                            }
                          >
                            <Link
                              to="/doctor/doctor-change-password"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Change Password
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("index") ? "active" : ""
                            }
                          >
                            <Link
                              to="/index"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                    </li>
                    :
                    (
                      (pathnames.includes('/react/template/patient') && width < 768) ?
                      <li
                        className={`has-submenu ${
                          url.includes("/doctor") ? "active" : ""
                        }`}
                      >
                          <ul
                            className="main-nav d-block"
                          >
                            <li
                              className={
                                pathnames.includes("patient/dashboard")
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link
                                to="/patient/dashboard"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Dashboard
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
                                pathnames.includes("orders")
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link
                                to="/patient/orders"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Orders
                              </Link>
                            </li>
                            <li
                              className={
                                pathnames.includes("medicalrecords") ? "active" : ""
                              }
                            >
                              <Link
                                to="/patient/medicalrecords"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Add Medical Records
                              </Link>
                            </li>
                            <li
                              className={
                                pathnames.includes("medicaldetails")
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link
                                to="/patient/medicaldetails"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Medical Details
                              </Link>
                            </li>
                            <li
                              className={
                                pathnames.includes("profile") ? "active" : ""
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
                                pathnames.includes("change-password") ? "active" : ""
                              }
                            >
                              <Link
                                to="/patient/change-password"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Change Password
                              </Link>
                            </li>
                            <li
                              className={
                                pathnames.includes("index")
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link
                                to="/index"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Logout
                              </Link>
                            </li>
                          </ul>
                      </li>
                      :
                      (pathnames.includes('/react/template/index') || pathnames.includes('/react/template/signin') || pathnames.includes('/react/template/signup')
                       || pathnames.includes('/react/template/doctor/login') || pathnames.includes('/react/template/patient/login')?
                        <div></div>
                        :
                        <ul
                          className={`main-nav`}
                        >
                          <li
                            className="megamenu"
                          >
                            <Link
                              to="#"
                              onClick={() => setMenu(!menu)}
                              className={`${menu === true ? "submenu " : ""}`}
                            >
                              Home 
                            </Link>
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
                                  className={`search-doctor`}
                                >
                                  <Link
                                    to="/patient/search-doctor"
                                    className="search-doctor"
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
                                  className="booking"
                                >
                                  <Link
                                    to="/patient/booking1"
                                    className="booking"
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
        
                          <li className="has-submenu">
                            <Link
                              to="#"
                              className={isSideMenu == "admin" ? "subdrop" : ""}
                              onMouseEnter={() =>
                                toggleSidebar(
                                  isSideMenu == "admin" ? "submenu" : "admin"
                                )
                              }
                            >
                              Admin
                            </Link>
                          </li>

                        </ul>
                      )
                    )
                  )
                }
              </div>

                <ul className="nav header-navbar-rht">
                  <li
                    className={"login-in-fourteen"}
                  >
                    <Link
                      to="/signin"
                      className={"btn log-btn"}
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
                    className={"login-in-fourteen"}
                  >
                    <Link
                      to="/signup"
                      className={"btn btn-primary reg-btn reg-btn-fourteen"}
                    >
                      <i className="me-2">
                        <FeatherIcon icon="user" />
                      </i>
                      Sign Up
                    </Link>
                  </li>
                </ul>
            </nav>
          </div>
        </header>
    </>
  );
};

export default Header;
