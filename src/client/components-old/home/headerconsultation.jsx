import React from "react";
import { logo } from "../imagepath";
import {
  flag01,
  flag02,
  flag03,
  flag05,
} from "../../../admin/components/imagepath";
import { Link } from "react-router-dom";

const Headerconsultation = () => {
  return (
    <div>
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
              <li>
                <Link to="/pages/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/loginemail">Login</Link>
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
    </div>
  );
};

export default Headerconsultation;
