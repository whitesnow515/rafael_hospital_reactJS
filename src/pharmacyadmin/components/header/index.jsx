/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import {
  avatar01,
  avatar02,
  avatar03,
  doctor_thumb_01,
  logo,
  logoSmall,
} from "../imagepath";
// import FeatherIcon from "feather-icons-react";

const Header = (props) => {
  
  const [isMiniSidebar, setIsMiniSidebar] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      e.stopPropagation();

      if (isMiniSidebar && document.getElementById("toggle_btn").offsetParent !== null) {
        const sidebar = document.querySelector(".sidebar");
        if (sidebar.contains(e.target)) {
          setIsMiniSidebar(false);
          // Perform actions when mouse is over sidebar
        } else {
          setIsMiniSidebar(true);
          // Perform actions when mouse is not over sidebar
        }
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMiniSidebar]);
  // const [task, settask] = useState(true);
  // const [task1, settask1] = useState(true);

  // const handletheme = () => {
  //   document.body.classList.toggle("darkmode");
  //   settask(!task);
  //   settask1(!task1);
  // };
  const handlesidebar = () => {

    document.body.classList.toggle("mini-sidebar");
  };

  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
  };
  const exclusionArray = ["/pharmacyadmin/pharmacyLogin"];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  const exclusionArray1 = ["/pharmacyadmin/forgotPassword"];
  if (exclusionArray1.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  const exclusionArray2 = ["/pharmacyadmin/register"];
  if (exclusionArray2.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  return (
    <>
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/pharmacyadmin" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/pharmacyadmin" className="logo logo-small">
            <img src={logoSmall} alt="Logo" width="30" height="30" />
          </Link>
        </div>
        <Link to="#" id="toggle_btn" onClick={handlesidebar}>
          <i className="fe fe-text-align-left"></i>
        </Link>
        {/* /Logo */}
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>

        {/* Mobile Menu Toggle */}
        <Link
          to="#"
          className="mobile_btn"
          id="mobile_btn"
          onClick={() => handlesidebarmobilemenu()}
        >
          <i className="fa fa-bars" />
        </Link>
        {/* /Mobile Menu Toggle */}
        {/* Header Right Menu */}
        <ul className="nav user-menu">
          {/* Notifications */}
          <li className="nav-item dropdown noti-dropdown">
            <Link
              to="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <i className="fe fe-bell" />{" "}
              <span className="badge rounded-pill">3</span>
            </Link>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <Link to="#" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </Link>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src={doctor_thumb_01}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Dr. Ruby Perrin</span>{" "}
                            Schedule{" "}
                            <span className="noti-title">her appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src={avatar01}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Charlene Reed</span>{" "}
                            has booked her appointment to{" "}
                            <span className="noti-title">Dr. Ruby Perrin</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src={avatar02}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Travis Trimble</span>{" "}
                            sent a amount of $210 for his{" "}
                            <span className="noti-title">appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src={avatar03}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Carl Kelly</span> send
                            a message{" "}
                            <span className="noti-title"> to his doctor</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link to="#">View all Notifications</Link>
              </div>
            </div>
          </li>

          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow">
            <Link
              to="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src={avatar01}
                  width={31}
                  alt="Ryan Taylor"
                />
              </span>
            </Link>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src={avatar01}
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <Link className="dropdown-item" to="/pharmacyadmin/profile">
                My Profile
              </Link>
              <Link className="dropdown-item" to="/pharmacyadmin/settings">
                Settings
              </Link>
              <Link className="dropdown-item" to="/pharmacyadmin/pharmacyLogin">
                Logout
              </Link>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Right Menu */}
      </div>

      {/* /Header */}
    </>
  );
};

export default Header;
