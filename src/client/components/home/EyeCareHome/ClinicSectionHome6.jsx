import React from "react";
import {
  clinic_bg_01,
  eye_doctor_01,
  eye_doctor_02,
  eye_doctor_03,
  eye_doctor_04,
  eye_doctor_05,
  eye_icon,
} from "../../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

function ClinicSectionHome6() {
  const doctersettings = {
    items: 3,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    //   navContainer: '.slide-nav-2',
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
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
        items: 5,
      },
    },
  };
  return (
    <>
      <section className="eyeclinics-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <img src={eye_icon} alt="" className="img-fluid" />
                <h2>
                  <span>Our</span> Specialties
                </h2>
                <p>The Great Place Of Eyecare Hospital Center</p>
              </div>
            </div>
          </div>
          <div className="eye-clinic owl-them aos" data-aos="fade-up">
            <OwlCarousel {...doctersettings}>
              <div className="item">
                <div className="our-doctors-card eye-doc">
                  <div className="doctors-header">
                    <Link to="/patient/doctor-profile">
                      <img src={eye_doctor_01} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="doctors-body">
                    <h4>
                      <Link to="/patient/doctor-profile">Dr. Andrea</Link>
                    </h4>
                    <p>MBBS, DOMS, DNB - Ophthalmology</p>
                    <h6>8+ Years Experience Overall</h6>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>3.8</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-doctors-card eye-doc">
                  <div className="doctors-header">
                    <Link to="/patient/doctor-profile">
                      <img src={eye_doctor_02} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="doctors-body">
                    <h4>
                      <Link to="/patient/doctor-profile">
                        Dr. Elizabeth Bella
                      </Link>
                    </h4>
                    <p>MBBS, MS - Ophthalmology</p>
                    <h6>6+ Years Experience Overall</h6>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>4.5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-doctors-card eye-doc">
                  <div className="doctors-header">
                    <Link to="/patient/doctor-profile">
                      <img src={eye_doctor_03} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="doctors-body">
                    <h4>
                      <Link to="/patient/doctor-profile">Dr. Christian</Link>
                    </h4>
                    <p>MBBS, DOMS, DNB - Ophthalmology</p>
                    <h6>7+ Years Experience Overall</h6>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>4.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-doctors-card eye-doc">
                  <div className="doctors-header">
                    <Link to="/patient/doctor-profile">
                      <img src={eye_doctor_04} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="doctors-body">
                    <h4>
                      <Link to="/patient/doctor-profile">
                        Dr. Gabrielle Carolyn
                      </Link>
                    </h4>
                    <p>MBBS, MS - Surgeon</p>
                    <h6>4+ Years Experience Overall</h6>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>3.7</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-doctors-card eye-doc">
                  <div className="doctors-header">
                    <Link to="/patient/doctor-profile">
                      <img src={eye_doctor_05} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="doctors-body">
                    <h4>
                      <Link to="/patient/doctor-profile">Dr. Gaby Carl</Link>
                    </h4>
                    <p>MBBS, DNB - Ophthalmology</p>
                    <h6>5+ Years Experience Overall</h6>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>3.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="ban-bg">
          <img src={clinic_bg_01} alt="" className="img-fluid bg-08" />
        </div>
      </section>
    </>
  );
}

export default ClinicSectionHome6;
