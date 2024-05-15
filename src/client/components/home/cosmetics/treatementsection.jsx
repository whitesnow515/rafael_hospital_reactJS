import React from "react";
import {
  servicesixteenicon,
  treatment1,
  treatment2,
  treatment3,
  treatment4,
} from "../image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const TreatmentSection = () => {
  const settings = {
    items: 4,
    loop: true,
    margin: 15,
    dots: true,
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
        items: 5,
      },
    },
  };
  return (
    <div className="treatment-section-sixteen">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header-sixteen text-center">
              <p>OUr services</p>
              <h2>Choose a treatment</h2>
            </div>
          </div>
        </div>
        <div className=" treatment-sixteen-slider owl-theme">
          <OwlCarousel {...settings}>
            <div className="item item-sixteen">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img">
                      <img src={treatment1} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <span>Face Lift</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <Link to="/patient/doctor-profile">
                        Barbara L. Williams
                      </Link>
                      <p>Aesthetic Surgery</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.5
                        </span>{" "}
                        (35)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> Newyork, USA
                    </p>
                  </div>
                </div>
                <Link to="/patient/booking1" className="btn btn-primary">
                  Book
                </Link>
              </div>
            </div>
            <div className="item item-sixteen">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img">
                      <img src={treatment2} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <span>Implant</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <Link to="/patient/doctor-profile">James L. George</Link>
                      <p>Cardiology</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.5
                        </span>{" "}
                        (35)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> Mexico, USA
                    </p>
                  </div>
                </div>
                <Link to="/patient/booking1" className="btn btn-primary">
                  Book
                </Link>
              </div>
            </div>
            <div className="item item-sixteen">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img">
                      <img src={treatment3} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <span>Blearoplasty</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <Link to="/patient/doctor-profile">Matthew R. Paul</Link>
                      <p>Aesthetic Surgery</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.4
                        </span>{" "}
                        (65)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> Mexico, USA
                    </p>
                  </div>
                </div>
                <Link to="/patient/booking1" className="btn btn-primary">
                  Book
                </Link>
              </div>
            </div>
            <div className="item item-sixteen">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img">
                      <img src={treatment4} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <span>Tummy Tuck</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <Link to="/patient/doctor-profile">Carolina F. Paul</Link>
                      <p>Aesthetic Surgery</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.0
                        </span>{" "}
                        (15)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> Log Angels, USA
                    </p>
                  </div>
                </div>
                <Link to="/patient/booking1" className="btn btn-primary">
                  Book
                </Link>
              </div>
            </div>
            <div className="item item-sixteen">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img">
                      <img src={treatment3} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <span>Blearoplasty</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <Link to="/patient/doctor-profile">Matthew R. Paul</Link>
                      <p>Aesthetic Surgery</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.4
                        </span>{" "}
                        (65)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> Mexico, USA
                    </p>
                  </div>
                </div>
                <Link to="/patient/booking1" className="btn btn-primary">
                  Book
                </Link>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className="service-sixteen-icontwo">
        <img src={servicesixteenicon} alt="" />
      </div>
    </div>
  );
};

export default TreatmentSection;
