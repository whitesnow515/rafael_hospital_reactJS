/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import HomeClinic from "./clinic";
// import BookourBestDoctor from "./bookourbestdoctor";
// import BrowsebySpecialities from "./browsebySpecialities";
// import HomeFeatures from "./features";
// import HomeBlog from "./blog";
import { Link } from "react-router-dom";
// import {
//   drslider,
//   IMG01,
//   logo,
//   spec,
//   FooterLogo,
//   Shape3,
//   Shape2,
//   Shape1,
//   Doctor5,
//   Doctor4,
//   Doctor3,
//   Doctor2,
//   Doctor1,
//   consult,
//   exper,
//   alarm,
//   mapplus,
//   bro5,
//   bro4,
//   bro3,
//   bro2,
//   bro1,
//   spec7,
//   spec6,
//   spec5,
//   spec4,
//   spec3,
//   spec2,
//   spec1,
// } from "./image.jsx";
// import Dropdown from "react-bootstrap/Dropdown";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  footer3_logo,
  footerlogo,
  // home_01,
  // home_02,
  // home_03,
  // home_04,
  // home_05,
  // home_06,
  // home_07,
  // home_08,
  // home_09,
  // home_10,
  // home_11,
} from "../imagepath";
import Header from "../header";
// import Footer from "../footer";
import Doctersection from "./homefourcomponets/doctersection";
import Blog from "./homefourcomponets/blog";
import Clinicsection from "./homefourcomponets/clinicsection";
import Bookdoctor from "./homefourcomponets/bookdoctor";
import Homebanner from "./homefourcomponets/homebanner";
import Categoryselect from "./homefourcomponets/categoryselect";
import Browser from "./homefourcomponets/browser";
import ProgressCircle from "./paediatric/scrolltotop";

const Home4 = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  //mobile
  // const [isSideMenu, setSideMenu] = useState("");
  // const [isSideMenuone, setSideMenuone] = useState("");
  // const [isSideMenutwo, setSideMenutwo] = useState("");
  // const toggleSidebar = (value) => {
  //   setSideMenu(value);
  // };
  // const toggleSidebarone = (value) => {
  //   setSideMenuone(value);
  // };
  // const toggleSidebartwo = (value) => {
  //   setSideMenutwo(value);
  // };

  //nav transparent
  // const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

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

  // const onHandleMobileMenu = () => {
  //   var root = document.getElementsByTagName("html")[0];
  //   root.classList.add("menu-opened");
  // };

  // const onhandleCloseMenu = () => {
  //   var root = document.getElementsByTagName("html")[0];
  //   root.classList.remove("menu-opened");
  // };

  // let pathnames = window.location.pathname;
  // const url = pathnames.split("/").slice(0, -1).join("/");

  return (
    <div className="main-wrapper multi-optn">
      {/* Home Banner */}
      <Header {...props} />
      {/* Home Banner */}
      <Homebanner />
      {/* category select*/}
      <Categoryselect />
      {/* /category select*/}
      {/* Clinic Section */}
      <Clinicsection />
      {/* /Clinic Section */}
      {/* browse speciality*/}
      <Browser />
      {/* /browse speciality*/}
      {/* Doctor Section*/}
      <Doctersection />
      {/* /Doctor Section*/}

      {/* Book Doctors*/}
      <Bookdoctor />
      {/* /Book Doctors*/}
      {/* Blogs */}
      <Blog />
      {/* /Blogs */}
      {/* Footer */}
      <footer className="footer">
        {/* Footer Top */}
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src={footer3_logo} alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-facebook-f" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-dribbble" />{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
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
                      <Link to="/doctor/doctor-register">Register</Link>
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
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span>
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <p>
                        {" "}
                        3556 Beech Street, San Francisco,
                        <br /> California, CA 94108{" "}
                      </p>
                    </div>
                    <p>
                      <i className="fas fa-phone-alt" />
                      +1 315 369 5943
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-envelope" />
                      doccure@example.com
                    </p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container-fluid">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">
                      © 2023 Doccure. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to="/terms-condition">Terms and Conditions</Link>
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
      {/* /Footer */}
      {/* Cursor */}
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
      {/* /Cursor */}
      <ProgressCircle />
    </div>
  );
};

export default Home4;
