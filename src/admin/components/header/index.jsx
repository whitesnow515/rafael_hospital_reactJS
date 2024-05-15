/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
// import { avatar01, avatar02, avatar03, avatar05, avatar06, logo, logoSmall } from '../imagepath'
// import { Appcontext } from "../../../approuter";
import {
  avatar01,
  doctor_thumb_01,
  logo,
  logoSmall,
  patient1,
  patient2,
  patient3,
} from "../imagepath";

const Header = (props) => {
  // let pathname = props.location.pathname;
  // const { isAuth, setIsAuth } = useContext(Appcontext);
  // const [task, settask] = useState(true);
  // const [task1, settask1] = useState(true);
  // const [dropdown, setdropdown] = useState(false);
  // const [dropdown1, setdropdown1] = useState(false);

  // const handletheme = () => {
  //   document.body.classList.toggle("darkmode");
  //   settask(!task);
  //   settask1(!task1);
  // };
  // const handledropdown = () => {
  //   setdropdown(!dropdown);
  //   setdropdown1(false);
  // };
  // const handledropdown1 = () => {
  //   setdropdown1(!dropdown1);
  //   setdropdown(false);
  // };
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };
  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
  };

  if (props.location.pathname.split("/")[1] === "admin") {
    require("../../assets/css/feathericon.min.css");
    require("../../assets/js/feather.min.js");
    require("../../assets/plugins/fontawesome/css/fontawesome.min.css");
    require("../../assets/plugins/fontawesome/css/all.min.css");
    require("../../assets/plugins/fontawesome/js/fontawesome.min.js");
    require("../../assets/css/font-awesome.min.css");
    require("../../assets/css/custom.css");
  }

  const exclusionArray = ["/admin/login"];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/admin" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/admin" className="logo logo-small">
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
                            src={patient1}
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
                            src={patient2}
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
                            src={patient3}
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
              <Link className="dropdown-item" to="/admin/profile">
                My Profile
              </Link>
              <Link className="dropdown-item" to="/admin/settings">
                Settings
              </Link>
              <Link className="dropdown-item" to="/admin/login">
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
