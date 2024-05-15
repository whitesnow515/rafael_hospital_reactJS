import React from "react";
import {
  add_circle,
  atom_bond2,
  doctor_25,
  doctor_26,
  doctor_27,
  pulse_1,
  pulse_2,
  pulse_3,
} from "../../imagepath";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
const Ourdoctors = () => {
  const settings = {
    items: 3,
    loop: true,
    margin: 55,
    dots: true,
    nav: true,
    navContainer: ".slide-nav-2",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],

    autoplay: false,
    infinite: "true",

    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
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
  return (
    <>
      <div className="our-doctor-thirteen common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <div className="section-inner-thirteen">
                  <img src={atom_bond2} alt="" />
                </div>
                <h2>Our Doctors</h2>
              </div>
            </div>
          </div>
          <div
            className=" our-slider-thirteen owl-theme aos"
            data-aos="fade-up"
          >
            <OwlCarousel {...settings}>
              <div className="our-doctor-thirteen-all">
                <div className="our-doctor-thirteen-img">
                  <img src={doctor_25} alt="" className="img-fluid" />
                </div>
                <div className="our-doctor-content">
                  <Link to="/patient/doctor-profile">Gloria Smith</Link>
                  <div className="our-doctor-content-inner">
                    <span>Paediatrician</span>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.1
                        </span>{" "}
                        (3621)
                      </p>
                    </div>
                  </div>
                  <h6>+1500 Patients</h6>
                  <p>
                    <i className="fa-solid fa-location-dot" /> New York, USA
                  </p>
                  <div className="our-doctor-thirteen-imgone">
                    <img src={add_circle} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="our-doctor-thirteen-all">
                <div className="our-doctor-thirteen-img">
                  <img src={doctor_27} alt="" className="img-fluid" />
                </div>
                <div className="our-doctor-content">
                  <Link to="/patient/doctor-profile">Mark E. Wong</Link>
                  <div className="our-doctor-content-inner">
                    <span>Paediatrician</span>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.0
                        </span>{" "}
                        (1053)
                      </p>
                    </div>
                  </div>
                  <h6>+1500 Patients</h6>
                  <p>
                    <i className="fa-solid fa-location-dot" /> Mexico, USA
                  </p>
                  <div className="our-doctor-thirteen-imgone">
                    <img src={add_circle} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="our-doctor-thirteen-all">
                <div className="our-doctor-thirteen-img">
                  <img src={doctor_25} alt="" className="img-fluid" />
                </div>
                <div className="our-doctor-content">
                  <Link to="/patient/doctor-profile">William M. Williams</Link>
                  <div className="our-doctor-content-inner">
                    <span>Paediatrician</span>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.5
                        </span>{" "}
                        (3500)
                      </p>
                    </div>
                  </div>
                  <h6>+6500 Patients</h6>
                  <p>
                    <i className="fa-solid fa-location-dot" /> Los Angels, USA
                  </p>
                  <div className="our-doctor-thirteen-imgone">
                    <img src={add_circle} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="our-doctor-thirteen-all">
                <div className="our-doctor-thirteen-img">
                  <img src={doctor_26} alt="" className="img-fluid" />
                </div>
                <div className="our-doctor-content">
                  <Link to="/patient/doctor-profile">Gloria Smith</Link>
                  <div className="our-doctor-content-inner">
                    <span>Paediatrician</span>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.5
                        </span>{" "}
                        (35)
                      </p>
                    </div>
                  </div>
                  <h6>+1500 Patients</h6>
                  <p>
                    <i className="fa-solid fa-location-dot" /> Mexico, USA
                  </p>
                  <div className="our-doctor-thirteen-imgone">
                    <img src={add_circle} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="our-doctor-thirteen-all">
                <div className="our-doctor-thirteen-img">
                  <img src={doctor_25} alt="" className="img-fluid" />
                </div>
                <div className="our-doctor-content">
                  <Link to="/patient/doctor-profile">Gloria Smith</Link>
                  <div className="our-doctor-content-inner">
                    <span>Paediatrician</span>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.1
                        </span>{" "}
                        (3621)
                      </p>
                    </div>
                  </div>
                  <h6>+1500 Patients</h6>
                  <p>
                    <i className="fa-solid fa-location-dot" /> New York, USA
                  </p>
                  <div className="our-doctor-thirteen-imgone">
                    <img src={add_circle} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="our-doctor-thirteen-all">
                <div className="our-doctor-thirteen-img">
                  <img src={doctor_27} alt="" className="img-fluid" />
                </div>
                <div className="our-doctor-content">
                  <Link to="/patient/doctor-profile">Mark E. Wong</Link>
                  <div className="our-doctor-content-inner">
                    <span>Paediatrician</span>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.0
                        </span>{" "}
                        (1053)
                      </p>
                    </div>
                  </div>
                  <h6>+1500 Patients</h6>
                  <p>
                    <i className="fa-solid fa-location-dot" /> Mexico, USA
                  </p>
                  <div className="our-doctor-thirteen-imgone">
                    <img src={add_circle} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="our-doctor-thirteen-all">
                <div className="our-doctor-thirteen-img">
                  <img src={doctor_25} alt="" className="img-fluid" />
                </div>
                <div className="our-doctor-content">
                  <Link to="/patient/doctor-profile">William M. Williams</Link>
                  <div className="our-doctor-content-inner">
                    <span>Paediatrician</span>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.5
                        </span>{" "}
                        (3500)
                      </p>
                    </div>
                  </div>
                  <h6>+6500 Patients</h6>
                  <p>
                    <i className="fa-solid fa-location-dot" /> Los Angels, USA
                  </p>
                  <div className="our-doctor-thirteen-imgone">
                    <img src={add_circle} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="our-doctor-thirteen-one">
          <img src={pulse_1} alt="" />
          <img src={pulse_3} alt="" />
          <img src={pulse_2} alt="" />
          <img src={pulse_3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Ourdoctors;
