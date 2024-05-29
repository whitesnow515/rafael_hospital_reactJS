import React from "react";
import Header from "../../header";
import { Link } from "react-router-dom";
import { shape01, shape02 } from "./img";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import {
  doctorIcon,
  // flag01,
  // flag02,
  // flag03,
  // flag05,
  // logo,
  patientIcon,
} from "../../imagepath";

const authRouter = (props) => {
  console.log('jkl')
  console.log(props)
  return (
    <>
      <Header {...props} />
      {/* <header className="header login-header-info">
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
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="/login-email">Login</Link>
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
      </header> */}
      {/* /Header */}
      {/* Page Content */}
      <div className="login-content-info">
        <div className="container">
          {/* Signup */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="account-content">
                <div className="login-shapes">
                  <div className="shape-img-left">
                    <img src={shape01} alt="" />
                  </div>
                  <div className="shape-img-right">
                    <img src={shape02} alt="" />
                  </div>
                </div>
                <div className="account-info">
                  {/* <div className="login-back">
                    <Link to="/pages/login-email">
                      <i className="fa-solid fa-arrow-left-long" /> Back to
                      Login
                    </Link>
                  </div> */}
                  <div className="login-title text-center">
                    <h3>{props.type === "signup" ? "Sign up": "Sign in"}</h3>
                  </div>
                  <div className="signup-option-btns">
                    <Link to={`${props.type === "signup" ? "/doctor/register": "/doctor/login"}`} className="signup-btn-info">
                      <div className="signup-info">
                        <div className="signup-icon">
                          <img src={doctorIcon} alt="" />
                        </div>
                        <div className="signup-content">
                          <h4>Doctor</h4>
                          <p>Lorem ipsum amet, consectetur</p>
                        </div>
                      </div>
                      <div className="signup-arrow">
                        <i className="fas fa-arrow-right" />
                      </div>
                    </Link>
                    <Link
                     to={`${props.type === "signup" ? "/patient/register": "/patient/login"}`}
                      className="signup-btn-info"
                    >
                      <div className="signup-info">
                        <div className="signup-icon">
                          <img src={patientIcon} alt="" />
                        </div>
                        <div className="signup-content">
                          <h4>Patient</h4>
                          <p>Lorem ipsum amet, consectetur</p>
                        </div>
                      </div>
                      <div className="signup-arrow">
                        <i className="fas fa-arrow-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Signup */}
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default authRouter;
