/* eslint-disable no-constant-condition */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { RiPhoneLine } from "react-icons/ri";
// import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";
// import config from "config";
// import {
//   doctor_img,
//   logo,
//   banner_check,
//   shapes_10,
//   shapes_7,
//   shapes_8,
//   shapes_6,
//   logo_one,
//   banner_img,
//   appoinment_img,
//   phone_call,
//   services_01,
//   services_02,
//   services_03,
//   services_04,
//   features_01,
//   features_02,
//   features_03,
//   features_04,
//   book_doctor_01,
//   book_doctor_02,
//   book_doctor_03,
//   book_doctor_04,
//   doctor_check,
//   news_img,
//   blog_11,
//   blog_12,
//   blog_13,
//   footer_logo,
//   icon6,
//   icon3,
//   icon2,
//   icon4,
//   icon1,
// } from "./image.jsx";
import {
  ban_fift_icon1,
  ban_fift_icon2,
  ban_fift_icon3,
  ban_fift_icon4,
  ban_fift_icon5,
  ban_fift_icon6,
  ban_fift_icon7,
  ban_fift_icon8,
  banner_ryt,
  banner_vd,
  customer_service_1,
  customer_service_2,
  fifteen_play,
  // footer_fift_payment,
  // globe,
  // logo_03,
} from "../imagepath";
import Servicesection from "./Home10/servicesection";
import PatientsSection from "./Home10/patientsection";
import Doctorsection from "./Home10/doctorssection";
import Pharmacysection from "./Home10/pharmacysection";
import Feedback from "./Home10/feedback";
import Contact from "./Home10/contact";
import Patientaboutus from "./Home10/patientaboutus";
import Frequentsection from "./Home10/frequentsection";
import Header from "../header.jsx";
import Footer10 from "./Home10/footer10.jsx";
import ProgressCircle from "./paediatric/scrolltotop.jsx";
const Home10 = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
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

  // const settings = {
  //   width: 400,
  //   dots: false,
  //   autoplay: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   centerPadding: "10px",
  //   arrows: true,
  //   centerMode: true,
  //   responsive: [
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 993,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //   ],
  // };
  // const doctors = {
  //   width: 400,
  //   dots: false,

  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   centerPadding: "10px",
  //   arrows: true,
  //   centerMode: true,
  //   responsive: [
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 993,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //   ],
  // };
  // let pathnames = window.location.pathname;

  // const [active, setActive] = useState(false);
  // const url = pathnames.split("/").slice(0, -1).join("/");

  // const onHandleMobileMenu = () => {
  //   var root = document.getElementsByTagName("html")[0];
  //   root.classList.add("menu-opened");
  // };

  // const onhandleCloseMenu = () => {
  //   var root = document.getElementsByTagName("html")[0];
  //   root.classList.remove("menu-opened");
  // };
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  // const options1 = [
  //   { id: 1, text: "English" },
  //   { id: 2, text: "Spanish" },
  //   { id: 3, text: "Mexico" },
  // ];
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper home-fifteen">
        {/* Header */}
        {/* <header className="header header-fixed header-fourteen header-fifteen">
			<div className="container"> */}
        <Header {...props} />
        {/* </div>
      </header> */}
        {/* Home Banner */}
        <section className="banner-section-fifteen">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div
                  className="banner-content banner-content-fifteen aos"
                  data-aos="fade-up"
                >
                  <h2>Painless, Safe Service</h2>
                  <h1>Hear what you have been Missing</h1>
                  <div className="banner-btns-fifteen">
                    <Link
                      to="/doctor/appointments"
                      className="btn btn-primary me-2"
                    >
                      Make an Appointment
                    </Link>
                    <Link
                      to="/patient/booking1"
                      className="btn btn-primary btns-primarytwo"
                    >
                      Quick Consultation
                    </Link>
                  </div>
                  <div className="aboutus-companyimg">
                    <Link to="#">
                      <img src={banner_vd} alt="image" className="img-fluid" />
                    </Link>
                    <Link to="#" data-bs-toggle="modal" data-bs-target="#video">
                      <div className="playicon">
                        <span>
                          <i className="fa-solid fa-play" />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="watch-video-fifteen">
                    <img src={fifteen_play} alt="" />
                    <h6>Watch Video About Us</h6>
                  </div>
                  <div className="support-consult-main">
                    <div className="support-consult">
                      <div className="support-consult-img">
                        <img src={customer_service_2} alt="" />
                      </div>
                      <div className="support-consult-right">
                        <h6>24/7 Support</h6>
                        <div className="rating rating-fifteen">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                    <div className="support-consult">
                      <div className="support-consult-img">
                        <img src={customer_service_1} alt="" />
                      </div>
                      <div className="support-consult-right">
                        <h6>Online Consultation</h6>
                        <span>Just 60 Secs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-right-fifteen">
                  <img src={banner_ryt} alt="image" className="img-fluid" />
                  <div className="banner-right-fifteenone">
                    <img src={ban_fift_icon1} alt="" />
                  </div>
                  <div className="banner-right-fifteentwo">
                    <img src={ban_fift_icon2} alt="" />
                  </div>
                  <div className="banner-right-fifteenthree">
                    <img src={ban_fift_icon3} alt="" />
                  </div>
                  <div className="banner-right-fifteenfour">
                    <img src={ban_fift_icon4} alt="" />
                  </div>
                  <div className="banner-right-fifteenfive">
                    <img src={ban_fift_icon5} alt="" />
                  </div>
                  <div className="banner-right-fifteensix">
                    <img src={ban_fift_icon6} alt="" />
                  </div>
                  <div className="banner-right-fifteenseven">
                    <img src={ban_fift_icon7} alt="" />
                  </div>
                  <div className="banner-right-fifteeneight">
                    <img src={ban_fift_icon8} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        <Servicesection />
        <PatientsSection />
        <Doctorsection />
        <Pharmacysection />
        <Feedback />
        <Contact />
        <Patientaboutus />
        <Frequentsection />
        {/* Footer */}
        <Footer10 />
        {/* Footer */}
        {/* Modal */}
        <div
          className="modal fade modal-content-video"
          id="video"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-times" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="video-home">
                  <video controls="" id="promovideo">
                    <iframe src="https://www.youtube.com/embed/ExJZAegsOis" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ScrollToTop */}
        <div className="progress-wrap active-progress">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919px, 307.919px",
                strokeDashoffset: "228.265" ? "228.265px" : "0.0318383",
              }}
            ></path>
          </svg>
        </div>
        <ProgressCircle />
        {/* /ScrollToTop */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Home10;
