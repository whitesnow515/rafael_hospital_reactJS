import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
import FeatherIcon from "feather-icons-react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import {
  blog_wrap_02,
  blog_wrap_03,
  doctor_thumb_01,
  // doctor_thumb_02,
  doctor_thumb_03,
  // doctor_thumb_04,
  features_clinic1,
  features_clinic2,
  features_clinic3,
  features_clinic4,
  news_letter,
  banner4,
  browse1,
  browse2,
  browse3,
  browse4,
  browse5,
  browse6,
  browse7,
  browse8,
  Doctor01,
  patient1,
  book_doctor_09,
  patient_icon,
  book_doctor_12,
  book_doctor_11,
  book_doctor_10,
  // book_doctor_06,
  // book_doctor_07,
  // book_doctor_08,
  // blog_01,
  // blog_02,
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
  icon9,
  icon10,
  icon11,
} from "./image.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressCircle from "./paediatric/scrolltotop.jsx";
import Header from "../header.jsx";

const Home12 = () => {
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
    loop: true,
    items: 1,
    nav: true,
    dots: true,
    autoplay: false,
    infinite: "true",
    slidestoshow: 1,
    slidestoscroll: 1,
    arrows: false,
    rtl: "true",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidestoshow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidestoshow: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidestoshow: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidestoshow: 1,
        },
      },
    ],
  };

  const latestblogslider = {
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-7",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],

    autoplay: false,
    infinite: true,
    slidestoshow: 3,
    slidestoscroll: 1,
    rtl: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidestoshow: 1,
        },
      },
    ],
  };

  const featuresclinicslider = {
    items: 4,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-6",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    autoplay: false,
    infinite: true,
    slidestoshow: 4,
    slidestoscroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidestoshow: 1,
        },
      },
    ],
  };

  const bestourdoctors = {
    items: 4,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-5",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    autoplay: false,
    infinite: true,
    slidestoshow: 4,
    slidestoscroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidestoshow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidestoshow: 1,
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
        {/*Top Header */}
        <div className="header-top home-three-top">
          <div className="left-top aos" data-aos="fade-up">
            <ul>
              <li>
                <FeatherIcon icon="phone" size="14" /> +1 315 369 5943
                {/* <i className="feather-phone me-1" />  */}
              </li>
              <li>
                <FeatherIcon icon="mail" size="17" /> doccure@example.com
                {/* <i className="feather-mail me-1" /> */}
              </li>
            </ul>
          </div>
          <div className="right-top aos" data-aos="fade-up">
            <ul>
              <li>
                <Link to="#" target="_blank">
                  <i className="fab fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank">
                  <i className="fab fa-linkedin" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*/Top Header */}
        {/* Header */}

        <Header />

        {/* /Header */}
        {/* Home Banner */}
        <section className="home-banner-three">
          <div className="owl-carousel home-three-slider owl-theme">
            <OwlCarousel {...settings} top={50}>
              <div className="item">
                <img src={banner4} className="img-fluid" alt="" />
              </div>
              <div className="item">
                <img src={banner4} className="img-fluid" alt="" />
              </div>
              <div className="item">
                <img src={banner4} className="img-fluid" alt="" />
              </div>
            </OwlCarousel>
            {/* </div> */}
            <div className="banner-wrapper-three">
              <div className="doc-form w-100">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-wrapper  d-lg-block d-md-none banner-wrapper-left">
                      <div className="app-form">
                        <div className="banner-three-content">
                          <h2>We Provide Solution</h2>
                          <h2>
                            <span>To stressless Life</span>
                          </h2>
                          <p>
                            People who are more perfectionist are most likely to
                            be depressed, Because they stress themselves out so
                            much.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-wrapper banner-wrapper-right">
                      <div className="app-form app-form-one">
                        <form action="#" className="doctor-form">
                          <div className="row">
                            <div className="col-md-12 col-lg-12">
                              <div className="form-group">
                                <label>Location</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="form-group">
                                <label>Gender</label>
                                <select className="select form-control">
                                  <option>Male</option>
                                  <option>Female</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-8">
                              <div className="form-group">
                                <label>Department</label>
                                <select className="select form-control">
                                  <option>Surgen</option>
                                  <option>Cardiologist</option>
                                  <option>Gynacologist</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12 col-lg-12">
                              <Link
                                to="/patient/search-doctor"
                                className="btn btn-one w-100"
                              >
                                Search
                              </Link>
                            </div>
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
        {/* /Home Banner */}
        {/* Looking Section Three */}
        <section className="looking-section-three">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-three aos" data-aos="fade-up">
                  <h2 className="mb-0">What are you looking for?</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center aos" data-aos="fade-up">
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="looking-box w-100 hvr-bounce-to-bottom">
                  <div className="looking-icon">
                    <div className="icon-inner">
                      <i className="fas fa-user-md" />
                    </div>
                  </div>
                  <div className="looking-info">
                    <Link to="/patient/search-doctor" className="looking-link">
                      Visit a Doctor
                    </Link>
                    <p>
                      We hire the best specialists to deliver top-notch
                      diagnostic services for you.
                    </p>
                  </div>
                  <div className="looking-btn">
                    <Link to="/patient/booking1" className="btn btn-one w-100">
                      <span>Book Now</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="looking-box w-100 hvr-bounce-to-bottom">
                  <div className="looking-icon">
                    <div className="icon-inner">
                      <i className="fas fa-tablets" />
                    </div>
                  </div>
                  <div className="looking-info">
                    <Link
                      to="pharmacy-/patient/search-doctor"
                      className="looking-link"
                    >
                      Find a Pharmacy
                    </Link>
                    <p>
                      We provide the a wide range of medical services, so every
                      person could have the opportunity.
                    </p>
                  </div>
                  <div className="looking-btn">
                    <Link to="/patient/booking1" className="btn btn-one w-100">
                      <span>Find Now</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="looking-box w-100 hvr-bounce-to-bottom">
                  <div className="looking-icon">
                    <div className="icon-inner">
                      <i className="fas fa-vial" />
                    </div>
                  </div>
                  <div className="looking-info">
                    <Link to="#" className="looking-link">
                      Find a Lab
                    </Link>
                    <p>
                      We use the first-class medical equipment for timely
                      diagnostics of various diseases.
                    </p>
                  </div>
                  <div className="looking-btn">
                    <Link to="/patient/booking1" className="btn btn-one w-100">
                      <span>Book Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Looking Section Three */}
        {/* Browse Specialities Section */}
        <section className="browse-section-three">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-three aos" data-aos="fade-up">
                  <h2>Browse by Specialities</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="browse-grid w-100">
                  <div className="browse-img">
                    <img src={browse1} className="img-fluid" alt="" />
                    <div className="overlay" />
                    <div className="browse-content">
                      <h4>Orthopedic</h4>
                      <p>50 Doctors</p>
                    </div>
                    <div className="browse-icon">
                      <div className="browse-inner">
                        <div className="browse-box-img">
                          <img
                            src={icon7}
                            className="browse-inner-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="browse-grid w-100">
                  <div className="browse-img">
                    <img src={browse2} className="img-fluid" alt="" />
                    <div className="overlay" />
                    <div className="browse-content">
                      <h4>Cardiologist</h4>
                      <p>140 Doctors</p>
                    </div>
                    <div className="browse-icon">
                      <div className="browse-inner">
                        <div className="browse-box-img">
                          <img
                            src={icon3}
                            className="browse-inner-img browse-inner-one"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="browse-grid w-100">
                  <div className="browse-img">
                    <img src={browse3} className="img-fluid" alt="" />
                    <div className="overlay" />
                    <div className="browse-content">
                      <h4>Dentist</h4>
                      <p>80 Doctors</p>
                    </div>
                    <div className="browse-icon">
                      <div className="browse-inner">
                        <div className="browse-box-img">
                          <img
                            src={icon4}
                            className="browse-inner-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="browse-grid w-100">
                  <div className="browse-img">
                    <img src={browse4} className="img-fluid" alt="" />
                    <div className="overlay" />
                    <div className="browse-content">
                      <h4>MRI Scans</h4>
                      <p>68 Doctors</p>
                    </div>
                    <div className="browse-icon">
                      <div className="browse-inner">
                        <div className="browse-box-img">
                          <img
                            src={icon8}
                            className="browse-inner-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="browse-grid w-100">
                  <div className="browse-img">
                    <img src={browse5} className="img-fluid" alt="" />
                    <div className="overlay" />
                    <div className="browse-content">
                      <h4>Urology</h4>
                      <p>124 Doctors</p>
                    </div>
                    <div className="browse-icon">
                      <div className="browse-inner">
                        <div className="browse-box-img">
                          <img
                            src={icon1}
                            className="browse-inner-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="browse-grid w-100">
                  <div className="browse-img">
                    <img src={browse6} className="img-fluid" alt="" />
                    <div className="overlay" />
                    <div className="browse-content">
                      <h4>Neurology</h4>
                      <p>21 Doctors</p>
                    </div>
                    <div className="browse-icon">
                      <div className="browse-inner">
                        <div className="browse-box-img">
                          <img
                            src={icon9}
                            className="browse-inner-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="browse-grid w-100">
                  <div className="browse-img">
                    <img src={browse7} className="img-fluid" alt="" />
                    <div className="overlay" />
                    <div className="browse-content">
                      <h4>Laboratory</h4>
                      <p>78 Doctors</p>
                    </div>
                    <div className="browse-icon">
                      <div className="browse-inner">
                        <div className="browse-box-img">
                          <img
                            src={icon10}
                            className="browse-inner-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="browse-grid w-100">
                  <div className="browse-img">
                    <img src={browse8} className="img-fluid" alt="" />
                    <div className="overlay" />
                    <div className="browse-content">
                      <h4>Primary Checkup</h4>
                      <p>46 Doctors</p>
                    </div>
                    <div className="browse-icon">
                      <div className="browse-inner">
                        <div className="browse-box-img">
                          <img
                            src={icon11}
                            className="browse-inner-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Browse Specialities Section */}
        {/* Doctor and Patient */}
        <section className="doctor-details-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="doctor-grid w-100">
                  <div className="doctor-details">
                    <h4>ARE YOU A DOCTOR?</h4>
                    <p>
                      The service allows you to get maximum visibility online
                      and to manage appointments and contacts coming from the
                      site, in a simple and fast way.
                    </p>
                    <Link to="/patient/booking1" className="btn btn-one">
                      Book Now
                    </Link>
                    <div className="doctor-details-img">
                      <img src={Doctor01} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="doctor-grid w-100">
                  <div className="doctor-details doctor-details-one">
                    <h4>ARE YOU A PATIENT?</h4>
                    <p>
                      The service allows you to get maximum visibility online
                      and to manage appointments and contacts coming from the
                      site, in a simple and fast way.
                    </p>
                    <Link to="/patient/booking1" className="btn btn-one">
                      Book Now
                    </Link>
                    <div className="doctor-details-img">
                      <img src={patient1} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Doctor and Patient */}
        {/* Doctor Section Three */}
        <section className="doctor-section-three">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-three aos" data-aos="fade-up">
                  <h2>Book Our Best Doctor</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="owl-carousel best-our-doctors owl-theme aos"
                  data-aos="fade-up"
                >
                  <OwlCarousel {...bestourdoctors}>
                    <div className="item">
                      <div className="our-doctors-card">
                        <div className="doctors-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={book_doctor_09}
                              alt=""
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                        <div className="pro-content">
                          <div className="provider-info">
                            <div className="doctors-amount">
                              <span>$20 - $50</span>
                            </div>
                            <div className="total-patient">
                              <p>
                                <img
                                  src={patient_icon}
                                  alt=""
                                  className="me-1"
                                />
                                500+ Patients
                              </p>
                            </div>
                            <h3 className="mb-2">
                              <Link to="/patient/doctor-profile">
                                Dr. Deborah Angel
                              </Link>
                            </h3>
                            <p className="doctor-post">
                              MBBS, MD - General Medicine, DNB
                            </p>
                            <div>
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
                            </div>
                            <div className="content-info">
                              <div className="booking-btn">
                                <Link
                                  to="/patient/booking1"
                                  className="btn book-btn"
                                >
                                  Book Appointment
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="our-doctors-card">
                        <div className="doctors-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={book_doctor_10}
                              alt=""
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                        <div className="pro-content">
                          <div className="provider-info">
                            <div className="doctors-amount">
                              <span>$30 - $60</span>
                            </div>
                            <div className="total-patient">
                              <p>
                                <img
                                  src={patient_icon}
                                  alt=""
                                  className="me-1"
                                />
                                100+ Patients
                              </p>
                            </div>
                            <h3 className="mb-2">
                              <Link to="/patient/doctor-profile">
                                Dr. Darren Elder
                              </Link>
                            </h3>
                            <p className="doctor-post">
                              MBBS, MS - General Surgery, MCh
                            </p>
                            <div>
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
                            </div>
                            <div className="content-info">
                              <div className="booking-btn">
                                <Link
                                  to="/patient/booking1"
                                  className="btn book-btn"
                                >
                                  Book Appointment
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="our-doctors-card">
                        <div className="doctors-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={book_doctor_11}
                              alt=""
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                        <div className="pro-content">
                          <div className="provider-info">
                            <div className="doctors-amount">
                              <span>$40 - $70</span>
                            </div>
                            <div className="total-patient">
                              <p>
                                <img
                                  src={patient_icon}
                                  alt=""
                                  className="me-1"
                                />
                                200+ Patients
                              </p>
                            </div>
                            <h3 className="mb-2">
                              <Link to="/patient/doctor-profile">
                                Dr. Sofia Brient
                              </Link>
                            </h3>
                            <p className="doctor-post">
                              MBBS, MD - General Medicine, DNB
                            </p>
                            <div>
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
                            </div>
                            <div className="content-info">
                              <div className="booking-btn">
                                <Link
                                  to="/patient/booking1"
                                  className="btn book-btn"
                                >
                                  Book Appointment
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="our-doctors-card">
                        <div className="doctors-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={book_doctor_12}
                              alt=""
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                        <div className="pro-content">
                          <div className="provider-info">
                            <div className="doctors-amount">
                              <span>$50 - $80</span>
                            </div>
                            <div className="total-patient">
                              <p>
                                <img
                                  src={patient_icon}
                                  alt=""
                                  className="me-1"
                                />
                                300+ Patients
                              </p>
                            </div>
                            <h3 className="mb-2">
                              <Link to="/patient/doctor-profile">
                                Dr. Sofia Brient
                              </Link>
                            </h3>
                            <p className="doctor-post">
                              MBBS, MS - General Surgery, MCh
                            </p>
                            <div>
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
                            </div>
                            <div className="content-info">
                              <div className="booking-btn">
                                <Link
                                  to="/patient/booking1"
                                  className="btn book-btn"
                                >
                                  Book Appointment
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                <div className="owl-nav slide-nav-5 nav-control" />
                <div className="float-end">
                  <div className="text-end">
                    <Link to="/patient/doctor-profile" className="btn btn-one">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Doctor Section Three */}
        {/* Features Clinic */}
        <section className="features-clinic">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-three aos" data-aos="fade-up">
                  <h2>Available Features in Our Clinic</h2>
                  <p>Meet our Experts &amp; Book Online</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <div className="owl-carousel features-clinic-slider owl-theme">
                  <OwlCarousel {...featuresclinicslider}>
                    <div className="item">
                      <div className="features-clinic-grid">
                        <div className="features-clinic-img">
                          <img
                            src={features_clinic1}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="feature-clinic-overlay">
                          <p>Medical</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="features-clinic-grid">
                        <div className="features-clinic-img">
                          <img
                            src={features_clinic2}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="feature-clinic-overlay">
                          <p>Patient Ward</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="features-clinic-grid">
                        <div className="features-clinic-img">
                          <img
                            src={features_clinic3}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="feature-clinic-overlay">
                          <p>Operation</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="features-clinic-grid">
                        <div className="features-clinic-img">
                          <img
                            src={features_clinic4}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="feature-clinic-overlay">
                          <p>Laboratory</p>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                <div className="owl-nav slide-nav-6 nav-control" />
                <div className="float-end">
                  <div className="text-end">
                    <Link to="#" className="btn btn-one">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Features Clinic */}
        {/* Latest Blog Section */}
        <section className="latest-blog-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-three aos" data-aos="fade-up">
                  <h2>Our Latest Blogs</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <div className="owl-carousel latest-blog-slider owl-theme">
                  <OwlCarousel {...latestblogslider}>
                    <div className="item">
                      <div className="latest-blog-grid">
                        <div className="latest-blog-img">
                          <Link to="/blog/blog-details">
                            <img src={blog_04} alt="" className="img-fluid" />
                          </Link>
                        </div>
                        <div className="lastest-blog-info">
                          <div className="lastest-blog-date">
                            <h4>
                              20 <span>Jan 2022</span>
                            </h4>
                          </div>
                          <h4 className="latest-blog-title">
                            <Link to="/blog/blog-details">
                              Doccure – Making your clinic painless visit?
                            </Link>
                          </h4>
                          <p>Urology</p>
                          <div className="lastest-post-author">
                            <Link to="/patient/doctor-profile">
                              <img
                                src={doctor_thumb_01}
                                alt=""
                                className="me-2"
                              />
                              <span>Dr. Ruby Perrin</span>
                            </Link>
                          </div>
                          <div className="lastest-blod-btn">
                            <Link
                              to="/blog/blog-details"
                              className="btn btn-one"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="latest-blog-grid">
                        <div className="latest-blog-img">
                          <Link to="/blog/blog-details">
                            <img
                              src={blog_wrap_02}
                              alt=""
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                        <div className="lastest-blog-info">
                          <div className="lastest-blog-date">
                            <h4>
                              13 <span>Feb 2022</span>
                            </h4>
                          </div>
                          <h4 className="latest-blog-title">
                            <Link to="/blog/blog-details">
                              What are the benefits of Online Doctor Booking?
                            </Link>
                          </h4>
                          <p>Surgery</p>
                          <div className="lastest-post-author">
                            <Link to="/patient/doctor-profile">
                              <img
                                src={doctor_thumb_03}
                                alt=""
                                className="me-2"
                              />
                              <span>Dr. Darren Elder</span>
                            </Link>
                          </div>
                          <div className="lastest-blod-btn">
                            <Link
                              to="/blog/blog-details"
                              className="btn btn-one"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="latest-blog-grid">
                        <div className="latest-blog-img">
                          <Link to="/blog/blog-details">
                            <img
                              src={blog_wrap_03}
                              alt=""
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                        <div className="lastest-blog-info">
                          <div className="lastest-blog-date">
                            <h4>
                              05 <span>Mar 2022</span>
                            </h4>
                          </div>
                          <h4 className="latest-blog-title">
                            <Link to="/blog/blog-details">
                              Benefits of consulting with an Online Doctor
                            </Link>
                          </h4>
                          <p>Cardiology</p>
                          <div className="lastest-post-author">
                            <Link to="/patient/doctor-profile">
                              <img
                                src={doctor_thumb_03}
                                alt=""
                                className="me-2"
                              />
                              <span>Dr. Deborah Angel</span>
                            </Link>
                          </div>
                          <div className="lastest-blod-btn">
                            <Link
                              to="/blog/blog-details"
                              className="btn btn-one"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                <div className="owl-nav slide-nav-7 nav-control" />
                <div className="float-end">
                  <div className="text-end">
                    <Link to="/blog/blog-details" className="btn btn-one">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Blog Section */}
        {/* News Letter Section */}
        <section className="news-letter-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 news-left aos" data-aos="fade-up">
                <div className="news-info">
                  <h2>
                    Subscribe to our <span>Newsletter</span>
                  </h2>
                  <p>
                    Subscribe today for our exclusive offers, latest news and
                    updates about health care programs.
                  </p>
                </div>
                <div className="news-info news-info-one">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button type="submit" className="btn btn-one">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 aos" data-aos="fade-up">
                <div className="news-letter-img">
                  <img src={news_letter} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* News Letter Section */}
        {/* Footer Three */}
        <footer className="footer footer-three">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="container">
              <div className="row aos" data-aos="fade-up">
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <img src={logo_one} alt="logo" />
                    </div>
                    <div className="footer-about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="social-icon">
                        <ul>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-facebook" />{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-linkedin" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-twitter" />{" "}
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
              </div>
            </div>
          </div>
          {/* /Footer Top */}
          {/* Footer Middle */}
          <div className="footer-middle">
            <div className="container">
              <div className="footer-middle-menu">
                <div className="row aos" data-aos="fade-up">
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Services</h2>
                      <ul>
                        <li>
                          <Link to="#">Cardiology</Link>
                        </li>
                        <li>
                          <Link to="#">Diabetes</Link>
                        </li>
                        <li>
                          <Link to="#">Plastic Surgery</Link>
                        </li>
                        <li>
                          <Link to="#">Gastroenterology</Link>
                        </li>
                        <li>
                          <Link to="#">Gynecology</Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu footer-menu-three">
                      <ul>
                        <li>
                          <Link to="#">Hepatology</Link>
                        </li>
                        <li>
                          <Link to="#">Neurology</Link>
                        </li>
                        <li>
                          <Link to="#">Radiology</Link>
                        </li>
                        <li>
                          <Link to="#">Rhinology</Link>
                        </li>
                        <li>
                          <Link to="#">Obstetrics</Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu footer-menu-three">
                      <ul>
                        <li>
                          <Link to="#">Ophthalmology</Link>
                        </li>
                        <li>
                          <Link to="#">Oral Health</Link>
                        </li>
                        <li>
                          <Link to="#">Orthopedics</Link>
                        </li>
                        <li>
                          <Link to="#">Osteology</Link>
                        </li>
                        <li>
                          <Link to="#">Otology</Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu footer-menu-three">
                      <ul>
                        <li>
                          <Link to="#">Pediatrics</Link>
                        </li>
                        <li>
                          <Link to="#">Psychiatry</Link>
                        </li>
                        <li>
                          <Link to="#">Pulmonology</Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        {/* /Footer Three */}
        <ProgressCircle />
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Home12;
