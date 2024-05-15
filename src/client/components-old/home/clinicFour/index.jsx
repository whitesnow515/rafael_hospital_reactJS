import React from "react";
import {
  clinic_big_img,
  features_clinic_02,
  features_clinic_03,
  features_clinic_04,
  features_clinic_01,
} from "../image.jsx";
//slider
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Clinicfour = () => {
  const settings = {
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-8",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    infinite: "true",
    speed: 500,
    slidestoshow: 4,
    slidestoscroll: 1,
    centerpadding: "5px",
    arrows: "false",
    centermode: "true",
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidestoshow: 1,
          slidestoscroll: 1,
          infinite: "true",
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidestoshow: 2,
          slidestoscroll: 1,
          infinite: "true",
        },
      },
    ],
  };
  return (
    <>
      {/* Features Clinic Four */}
      <section className="features-clinic-four">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-header-four text-center aos"
                data-aos="fade-up"
              >
                <h2 className="title-four">
                  Available Features{" "}
                  <span className="color-primary">in Our Clinic</span>
                </h2>
                <p className="sub-title color-grey">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="clinic-big-img aos" data-aos="fade-up">
                <img src={clinic_big_img} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="owl-carousel features-clinic-slider-four owl-theme aos"
                data-aos="fade-up"
              >
                <OwlCarousel {...settings}>
                  <div className="item ">
                    <div className="features-clinic-grid">
                      <div className="features-clinic-img">
                        <img
                          src={features_clinic_01}
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
                          src={features_clinic_02}
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
                          src={features_clinic_03}
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
                          src={features_clinic_04}
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

              <div className="row">
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                  <div className="owl-nav slide-nav-8 nav-control" />
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
          </div>
        </div>
      </section>
      {/* /Features Clinic Four */}
    </>
  );
};

export default Clinicfour;
