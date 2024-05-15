/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import HomeClinic from "./clinic";
// import BookourBestDoctor from "./bookourbestdoctor";
// import BrowsebySpecialities from "./browsebySpecialities";
// import HomeFeatures from "./features";
// import HomeBlog from "./blog";
import { Link } from "react-router-dom";
import { BannerImg } from "./image.jsx";
// import logo from "../../assets/images/logo.png";
import clinic01 from "../../assets/images/clinic/clinic-1.jpg";
import clinic02 from "../../assets/images/clinic/clinic-2.jpg";
import clinic03 from "../../assets/images/clinic/clinic-3.jpg";
import clinic04 from "../../assets/images/clinic/clinic-4.jpg";
import clinic05 from "../../assets/images/clinic/clinic-5.jpg";
import clinic06 from "../../assets/images/clinic/clinic-6.jpg";
import clinic07 from "../../assets/images/clinic/clinic-7.jpg";
import clinic08 from "../../assets/images/clinic/clinic-8.jpg";
import clinic09 from "../../assets/images/clinic/clinic-9.jpg";
import clinic10 from "../../assets/images/clinic/clinic-10.jpg";
import blog1 from "../../assets/images/blog/blog-wrap-01.jpg";
import blog2 from "../../assets/images/blog/blog-wrap-02.jpg";
import blog3 from "../../assets/images/blog/blog-wrap-03.jpg";
import blog4 from "../../assets/images/blog/blog-wrap-04.jpg";
import DoctorThumb01 from "../../assets/images/doctors/doctor-thumb-01.jpg";
import Shape1 from "../../assets/images/shapes/shape-1.png";
import Shape2 from "../../assets/images/shapes/shape-2.png";
import Shape3 from "../../assets/images/shapes/shape-3.png";
import Shape4 from "../../assets/images/shapes/shape-4.png";
import Category1 from "../../assets/images/category/1.png";
import Category2 from "../../assets/images/category/2.png";
import Category3 from "../../assets/images/category/3.png";
import Category4 from "../../assets/images/category/4.png";
import Category5 from "../../assets/images/category/5.png";
import Doctor1 from "../../assets/images/doctors/doctor-01.jpg";
import Doctor2 from "../../assets/images/doctors/doctor-02.jpg";
import Doctor3 from "../../assets/images/doctors/doctor-03.jpg";
import Doctor4 from "../../assets/images/doctors/doctor-04.jpg";
import doctorbannerimage from "../../assets/images/doctor-banner.png";

// import FooterLogo from "../../assets/images/footer-logo.png";
// import LoginButton from "../../assets/images/login-btn.png";
// import config from "config";
// import Dropdown from "react-bootstrap/Dropdown";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  doctor_banner,
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
// import Footer from "../footer";
import Header from "../header";
import ProgressCircle from "./paediatric/scrolltotop";

const Home1 = (props) => {
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

  // const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

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

  // const onHandleMobileMenu = () => {
  //   var root = document.getElementsByTagName("html")[0];
  //   root.classList.add("menu-opened");
  // };

  // const onhandleCloseMenu = () => {
  //   var root = document.getElementsByTagName("html")[0];
  //   root.classList.remove("menu-opened");
  // };

  const clinicsettings = {
    items: 4,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-2",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],
    autoplay: false,
    infinite: "true",
    slidestoshow: 3,
    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 5,
      },
    },
  };

  const specialitysettings = {
    items: 4,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-1",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],

    autoplay: false,
    infinite: "true",

    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 4,
      },
    },
  };

  const blog = {
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-4",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],
    autoplay: false,
    infinite: "true",
    slidestoshow: 4,
    slidestoscroll: 1,
    rtl: "true",
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 5,
      },
    },
  };

  const availablesettings = {
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-3",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],
    items: 4,
    dot: "false",
    autoplay: false,
    infinite: "true",
    slidestoshow: 5,
    slidestoscroll: 1,
    rtl: "true",
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 5,
      },
    },
  };

  // let pathnames = window.location.pathname;
  // const url = pathnames.split("/").slice(0, -1).join("/");

  return (
    <>
      <div className="main-wrapper">
        <Header {...props} />
        {/* /Header */}
        {/* Home Banner  */}
        <section className="doctor-search-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="doctor-search">
                  <div className="banner-header">
                    <h2>
                      Search Doctor, <br /> Make an Appointment
                    </h2>
                  </div>
                  <div className="doctor-form">
                    <form action="#" className="doctor-search-form">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Location</label>
                            <div className="form-custom">
                              <input type="text" className="form-control" />
                              <i className="far fa-compass" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Gender</label>
                            <div className="form-custom">
                              <input type="text" className="form-control" />
                              <i className="far fa-smile" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Department</label>
                            <div className="form-custom">
                              <input type="text" className="form-control" />
                              <i className="fas fa-user-check" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <Link
                            to="/patient/search-doctor"
                            className="btn banner-btn mt-3"
                          >
                            MAKE APPOINTMENT
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={doctorbannerimage} className="img-fluid dr-img" />
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}

        {/* Clinic Section */}
        <section className="clinics-section">
          <div className="shapes">
            <img src={Shape1} className="img-fluid shape-1" />
            <img src={Shape2} className="img-fluid shape-2" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading">
                  <h2>Clinic &amp; Specialities</h2>
                  <p>
                    Access to expert physicians and surgeons, advanced
                    technologies and top-quality surgery facilities right here.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-end aos aos-init aos-animate">
                <div className="owl-nav slide-nav-1 text-end nav-control" />
              </div>
            </div>
            <div
              className="clinics owl-theme aos owl-loaded owl-drag aos-init aos-animate"
              data-aos="fade-up"
            >
              <OwlCarousel {...specialitysettings}>
                <div className="item">
                  <div className="clinic-item">
                    <div className="clinics-card">
                      <div className="clinics-img">
                        <img src={clinic01} className="img-fluid" />
                      </div>
                      <div className="clinics-info">
                        <img src={Category1} className="img-fluid" />
                        <Link to="/index-3">
                          <span>UROLOGY</span>
                        </Link>
                      </div>
                    </div>
                    <div className="clinics-icon">
                      <Link to="#">
                        <i className="fas fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="clinic-item">
                    <div className="clinics-card">
                      <div className="clinics-img">
                        <img src={clinic02} className="img-fluid" />
                      </div>
                      <div className="clinics-info">
                        <img src={Category2} className="img-fluid" />
                        <Link to="#">
                          <span>Orthopedic</span>
                        </Link>
                      </div>
                    </div>
                    <div className="clinics-icon">
                      <Link to="#">
                        <i className="fas fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="clinic-item">
                    <div className="clinics-card">
                      <div className="clinics-img">
                        <img src={clinic04} className="img-fluid" />
                      </div>
                      <div className="clinics-info">
                        <img src={Category4} className="img-fluid" />
                        <Link to="#">
                          <span>Cardiologist</span>
                        </Link>
                      </div>
                    </div>
                    <div className="clinics-icon">
                      <Link to="#">
                        <i className="fas fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="clinic-item">
                    <div className="clinics-card">
                      <div className="clinics-img">
                        <img src={clinic03} className="img-fluid" />
                      </div>
                      <div className="clinics-info">
                        <img src={Category5} className="img-fluid" />
                        <Link to="/index-3">
                          <span>Dentist</span>
                        </Link>
                      </div>
                    </div>
                    <div className="clinics-icon">
                      <Link to="#">
                        <i className="fas fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="clinic-item">
                    <div className="clinics-card">
                      <div className="clinics-img">
                        <img src={clinic05} className="img-fluid" />
                      </div>
                      <div className="clinics-info">
                        <img src={Category3} className="img-fluid" />
                        <Link to="#">
                          <span>Neurology</span>
                        </Link>
                      </div>
                    </div>
                    <div className="clinics-icon">
                      <Link to="#">
                        <i className="fas fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="clinic-item">
                    <div className="clinics-card">
                      <div className="clinics-img">
                        <img src={clinic01} className="img-fluid" />
                      </div>
                      <div className="clinics-info">
                        <img src={Category4} className="img-fluid" />
                        <Link to="#">
                          <span>Cardiologist</span>
                        </Link>
                      </div>
                    </div>
                    <div className="clinics-icon">
                      <Link to="#">
                        <i className="fas fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* /Clinic Section */}
        {/* /Browse by Specialities */}
        <section className="specialities-section">
          <div className="shapes">
            <img src={Shape3} className="img-fluid shape-3" />
            <img src={Shape4} className="img-fluid shape-4" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading bg-area">
                  <h2>Browse by Specialities</h2>
                  <p>Find experienced doctors across all specialties</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="specialist-card d-flex">
                  <div className="specialist-img">
                    <img src={Category1} className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="/index-3">
                      <h4>Urology</h4>
                    </Link>
                    <p>21 Doctors</p>
                  </div>
                  <div className="specialist-nav ms-auto">
                    <Link to="#">
                      <i className="fas fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="specialist-card d-flex">
                  <div className="specialist-img">
                    <img src={Category3} className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">
                      <h4>Neurology</h4>
                    </Link>
                    <p>21 Doctors</p>
                  </div>
                  <div className="specialist-nav ms-auto">
                    <Link to="#">
                      <i className="fas fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="specialist-card d-flex">
                  <div className="specialist-img">
                    <img src={Category2} className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">
                      <h4>Orthopedic</h4>
                    </Link>
                    <p>21 Doctors</p>
                  </div>
                  <div className="specialist-nav ms-auto">
                    <Link to="#">
                      <i className="fas fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="specialist-card d-flex">
                  <div className="specialist-img">
                    <img src={Category4} className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">
                      <h4>Cardiologist</h4>
                    </Link>
                    <p>21 Doctors</p>
                  </div>
                  <div className="specialist-nav ms-auto">
                    <Link to="#">
                      <i className="fas fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="specialist-card d-flex">
                  <div className="specialist-img">
                    <img src={Category1} className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">
                      <h4>Urology</h4>
                    </Link>
                    <p>21 Doctors</p>
                  </div>
                  <div className="specialist-nav ms-auto">
                    <Link to="#">
                      <i className="fas fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="specialist-card d-flex">
                  <div className="specialist-img">
                    <img src={Category3} className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">
                      <h4>Neurology</h4>
                    </Link>
                    <p>21 Doctors</p>
                  </div>
                  <div className="specialist-nav ms-auto">
                    <Link to="#">
                      <i className="fas fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="specialist-card d-flex">
                  <div className="specialist-img">
                    <img src={Category2} className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">
                      <h4>Orthopedic</h4>
                    </Link>
                    <p>21 Doctors</p>
                  </div>
                  <div className="specialist-nav ms-auto">
                    <Link to="#">
                      <i className="fas fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="specialist-card d-flex">
                  <div className="specialist-img">
                    <img src={Category4} className="img-fluid" />
                  </div>
                  <div className="specialist-info">
                    <Link to="#">
                      <h4>Cardiologist</h4>
                    </Link>
                    <p>21 Doctors</p>
                  </div>
                  <div className="specialist-nav ms-auto">
                    <Link to="#">
                      <i className="fas fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Browse by Specialities */}
        {/* Book Doctors*/}
        <section className="our-doctors-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading aos" data-aos="fade-up">
                  <h2>Clinic &amp; Specialities</h2>
                  <p>
                    Access to expert physicians and surgeons, advanced
                    technologies and top-quality surgery facilities right here.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-end aos" data-aos="fade-up">
                <div className="owl-nav slide-nav-2 text-end nav-control" />
              </div>
            </div>
            <div className="our-doctors owl-theme aos" data-aos="fade-up">
              <OwlCarousel {...clinicsettings}>
                <div className="item">
                  <div className="our-doctors-card">
                    <div className="doctors-header">
                      <Link to="#">
                        <img src={Doctor1} className="img-fluid" />
                      </Link>
                      <div className="img-overlay">
                        <span>$20 - $50</span>
                      </div>
                    </div>
                    <div className="doctors-body">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <span className="d-inline-block average-ratings ms-1">
                          3.5
                        </span>
                      </div>
                      <Link to="/patient/doctor-profile">
                        <h4>Dr. Ruby Perrin</h4>
                      </Link>
                      <p>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                      <div className="location d-flex">
                        <p>
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </p>
                        <p className="ms-auto">
                          <i className="fas fa-user-md" /> 450 Consultations
                        </p>
                      </div>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                            tabIndex={0}
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/patient/booking1"
                            className="btn book-btn"
                            tabIndex={0}
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="our-doctors-card">
                    <div className="doctors-header">
                      <Link to="#">
                        <img src={Doctor4} className="img-fluid" />
                      </Link>
                      <div className="img-overlay">
                        <span>$20 - $50</span>
                      </div>
                    </div>
                    <div className="doctors-body">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <span className="d-inline-block average-ratings ms-1">
                          3.5
                        </span>
                      </div>
                      <Link to="/patient/doctor-profile">
                        <h4>Dr. Deborah Angel</h4>
                      </Link>
                      <p>MBBS, MD - General Medicine, DNB</p>
                      <div className="location d-flex">
                        <p>
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </p>
                        <p className="ms-auto">
                          <i className="fas fa-user-md" /> 450 Consultations
                        </p>
                      </div>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                            tabIndex={0}
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/patient/booking1"
                            className="btn book-btn"
                            tabIndex={0}
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="our-doctors-card">
                    <div className="doctors-header">
                      <Link to="#">
                        <img src={Doctor3} className="img-fluid" />
                      </Link>
                      <div className="img-overlay">
                        <span>$20 - $50</span>
                      </div>
                    </div>
                    <div className="doctors-body">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <span className="d-inline-block average-ratings ms-1">
                          3.5
                        </span>
                      </div>
                      <Link to="/patient/doctor-profile">
                        <h4>Dr. Sofia Brient</h4>
                      </Link>
                      <p>MBBS, MS - General Surgery, MCh</p>
                      <div className="location d-flex">
                        <p>
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </p>
                        <p className="ms-auto">
                          <i className="fas fa-user-md" /> 450 Consultations
                        </p>
                      </div>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                            tabIndex={0}
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/patient/booking1"
                            className="btn book-btn"
                            tabIndex={0}
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="our-doctors-card">
                    <div className="doctors-header">
                      <Link to="#">
                        <img src={Doctor2} className="img-fluid" />
                      </Link>
                      <div className="img-overlay">
                        <span>$20 - $50</span>
                      </div>
                    </div>
                    <div className="doctors-body">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <span className="d-inline-block average-ratings ms-1">
                          3.5
                        </span>
                      </div>
                      <Link to="/patient/doctor-profile">
                        <h4>Dr. Darren Elder</h4>
                      </Link>
                      <p>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                      <div className="location d-flex">
                        <p>
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </p>
                        <p className="ms-auto">
                          <i className="fas fa-user-md" /> 450 Consultations
                        </p>
                      </div>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                            tabIndex={0}
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/patient/booking1"
                            className="btn book-btn"
                            tabIndex={0}
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* /Book Doctors*/}
        {/* Clinic Features Section */}
        <section className="clinic-features-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading aos" data-aos="fade-up">
                  <h2>Availabe Features in Our Clinic</h2>
                  <p>Meet our Experts &amp; Book Online</p>
                </div>
              </div>
              <div className="col-md-6 text-end aos" data-aos="fade-up">
                <div className="owl-nav slide-nav-3 text-end nav-control" />
              </div>
            </div>
            <div className="clinic-feature owl-theme aos" data-aos="fade-up">
              <OwlCarousel margin={10} {...availablesettings}>
                <div className="item">
                  <div className="clinic-features">
                    <img src={clinic06} className="img-fluid" />
                  </div>
                  <div className="clinic-feature-overlay">
                    <Link to="#" className="img-overlay">
                      Operation
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="clinic-features">
                    <img src={clinic07} className="img-fluid" />
                  </div>
                  <div className="clinic-feature-overlay">
                    <Link to="#" className="img-overlay">
                      Medical
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="clinic-features">
                    <img src={clinic08} className="img-fluid" />
                  </div>
                  <div className="clinic-feature-overlay">
                    <Link to="#" className="img-overlay">
                      Patient Ward
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="clinic-features">
                    <img src={clinic09} className="img-fluid" />
                  </div>
                  <div className="clinic-feature-overlay">
                    <Link to="#" className="img-overlay">
                      TEST ROOM
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="clinic-features">
                    <img src={clinic10} className="img-fluid" />
                  </div>
                  <div className="clinic-feature-overlay">
                    <Link to="#" className="img-overlay">
                      ICU
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* /Clinic Features Section */}
        {/* Blog Section */}
        <section className="our-blog-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading aos" data-aos="fade-up">
                  <h2>Blogs and News</h2>
                  <p>Read Professional Articles and Latest Articles</p>
                </div>
              </div>
              <div className="col-md-6 text-end aos" data-aos="fade-up">
                <div className="owl-nav slide-nav-4 text-end nav-control" />
              </div>
            </div>
            <div className="blogs owl-theme aos" data-aos="fade-up">
              <OwlCarousel {...blog}>
                <div className="item">
                  <div className="our-blogs">
                    <div className="blogs-img">
                      <Link to="/blog/blog-details">
                        <img src={blog1} className="img-fluid" />
                      </Link>
                      <div className="blogs-overlay d-flex">
                        <img src={DoctorThumb01} className="img-fluid" />
                        <span className="blogs-writter">Dr. Ruby Perrin</span>
                      </div>
                    </div>
                    <div className="blogs-info">
                      <span>Urology</span>
                      <Link to="/blog/blog-details">
                        <h4>Doccure – Making your clinic painless visit?</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                      <span className="blogs-time">
                        <i className="far fa-clock" /> 3 Dec 2021
                      </span>
                    </div>
                    <div className="blogs-nav">
                      <Link to="/blog/blog-details" className="blogs-btn">
                        View Blog
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="our-blogs">
                    <div className="blogs-img">
                      <Link to="/blog/blog-details">
                        <img src={blog2} className="img-fluid" />
                      </Link>
                      <div className="blogs-overlay d-flex">
                        <img src={DoctorThumb01} className="img-fluid" />
                        <span className="blogs-writter">Dr. Ruby Perrin</span>
                      </div>
                    </div>
                    <div className="blogs-info">
                      <span>Neurology</span>
                      <Link to="/blog/blog-details">
                        <h4>What are the benefits of Online Doctor Booking?</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                      <span className="blogs-time">
                        <i className="far fa-clock" /> 3 Dec 2021
                      </span>
                    </div>
                    <div className="blogs-nav">
                      <Link to="/blog/blog-details" className="blogs-btn">
                        View Blog
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="our-blogs">
                    <div className="blogs-img">
                      <Link to="/blog/blog-details">
                        <img src={blog3} className="img-fluid" />
                      </Link>
                      <div className="blogs-overlay d-flex">
                        <img src={DoctorThumb01} className="img-fluid" />
                        <span className="blogs-writter">Dr. Ruby Perrin</span>
                      </div>
                    </div>
                    <div className="blogs-info">
                      <span>Orthopedic</span>
                      <Link to="/blog/blog-details">
                        <h4>Benefits of consulting with an Online Doctor</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                      <span className="blogs-time">
                        <i className="far fa-clock" /> 3 Dec 2021
                      </span>
                    </div>
                    <div className="blogs-nav">
                      <Link to="/blog/blog-details" className="blogs-btn">
                        View Blog
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="our-blogs">
                    <div className="blogs-img">
                      <Link to="/blog/blog-details">
                        <img src={blog4} className="img-fluid" />
                      </Link>
                      <div className="blogs-overlay d-flex">
                        <img src={DoctorThumb01} className="img-fluid" />
                        <span className="blogs-writter">Dr. Ruby Perrin</span>
                      </div>
                    </div>
                    <div className="blogs-info">
                      <span>Cardiologist</span>
                      <Link to="/blog/blog-details">
                        <h4>5 Great reasons to use an Online Doctor</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                      <span className="blogs-time">
                        <i className="far fa-clock" /> 3 Dec 2021
                      </span>
                    </div>
                    <div className="blogs-nav">
                      <Link to="/blog/blog-details" className="blogs-btn">
                        View Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* /Blog Section */}
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
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
                          <Link to="/terms-condition">
                            Terms and Conditions
                          </Link>
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
        <ProgressCircle />
      </div>
      {/* /Main Wrapper */}
    </>
  );
};
export default Home1;
