import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Owlcarousel from "react-owl-carousel";
import { CiHeart } from "react-icons/ci";
import {
  doctor_03,
  doctor_07,
  doctor_09,
  doctor_11,
  fifteen_bg_icon1,
  fifteen_bg_icon2,
} from "../../imagepath";
const Doctorsection = () => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  const options = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
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
        items: 3,
      },
    },
  };
  return (
    <>
      {/* Doctors section */}
      <div className="doctors-section-fifteen">
        <div className="doctor-fifteen-icon">
          <img src={fifteen_bg_icon2} alt="" />
        </div>
        <div className="doctors-fifteen-icon">
          <img
            src={fifteen_bg_icon1}
            alt=""
            className="aos"
            data-aos="fade-down"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fifteen text-center">
                <h2>
                  Our <span>Expert Doctors</span>
                </h2>
                <p>The Great Place Of ENT Hospital Center</p>
              </div>
            </div>
          </div>
          <div
            className="doctor-slider-fifteen owl-theme aos"
            data-aos="fade-up"
          >
            <Owlcarousel
              className="doctor-slider-fifteen owl-theme aos"
              data-aos="fade-up"
              {...options}
            >
              <div className="item item-fifteen">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img src={doctor_11} className="img-fluid" alt="" />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <Link to="#" className="fav-icon">
                        <CiHeart className="feather-heart" />
                      </Link>
                    </div>
                    <div className="item-info">
                      <h6>15+ Years Experience</h6>
                    </div>
                  </div>
                  <div className="doc-content-fift">
                    <Link to="/patient/doctor-profile">
                      Dr. Brandon Nicholas
                    </Link>
                    <p>Ear-Nose-Throat (ENT) Specialist</p>
                    <div className="rate-fifteen">
                      <div className="rate-four">
                        <i className="fas fa-star filled me-2" />
                        <span>4.8</span>
                      </div>
                      <ul>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item item-fifteen">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img src={doctor_03} className="img-fluid" alt="" />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <Link to="#" className="fav-icon">
                        <CiHeart className="feather-heart" />
                      </Link>
                    </div>
                    <div className="item-info">
                      <h6>09+ Years Experience</h6>
                    </div>
                  </div>
                  <div className="doc-content-fift">
                    <Link to="/patient/doctor-profile">
                      Dr. Katherine Victoria
                    </Link>
                    <p>MBBS, MS - ENT</p>
                    <div className="rate-fifteen">
                      <div className="rate-four">
                        <i className="fas fa-star filled me-2" />
                        <span>4.9</span>
                      </div>
                      <ul>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item item-fifteen">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img src={doctor_07} className="img-fluid" alt="" />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <Link to="#" className="fav-icon">
                        <CiHeart className="feather-heart" />
                      </Link>
                    </div>
                    <div className="item-info">
                      <h6>10+ Years Experience</h6>
                    </div>
                  </div>
                  <div className="doc-content-fift">
                    <Link to="/patient/doctor-profile">Dr. Lisa Madeleine</Link>
                    <p>MBBS, MS - ENT</p>
                    <div className="rate-fifteen">
                      <div className="rate-four">
                        <i className="fas fa-star filled me-2" />
                        <span>4.8</span>
                      </div>
                      <ul>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item item-fifteen">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img src={doctor_09} className="img-fluid" alt="" />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <Link to="#" className="fav-icon">
                        <CiHeart className="feather-heart" />
                      </Link>
                    </div>
                    <div className="item-info">
                      <h6>15+ Years Experience</h6>
                    </div>
                  </div>
                  <div className="doc-content-fift">
                    <Link to="/patient/doctor-profile">
                      Dr. Brandon Nicholas
                    </Link>
                    <p>Ear-Nose-Throat (ENT) Specialist</p>
                    <div className="rate-fifteen">
                      <div className="rate-four">
                        <i className="fas fa-star filled me-2" />
                        <span>4.8</span>
                      </div>
                      <ul>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Owlcarousel>
          </div>
        </div>
      </div>
      {/* /blog section */}
    </>
  );
};
export default Doctorsection;
