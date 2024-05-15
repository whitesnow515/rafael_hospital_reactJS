import React from "react";
import {
  Banner_call_icon,
  Banner_cloud_01,
  Banner_curve_bg,
  Banner_img_13,
  Banner_img_curve_13,
  Banner_lief_img,
  Banner_round_vector_13,
} from "../../imagepath";
import { Link } from "react-router-dom";

const HomeCareBanner = () => {
  return (
    <section className="banner-section banner-sec-fourteen">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content aos" data-aos="fade-up">
              <div className="banner-head">
                <h6>LET’s Take CARE</h6>
                <h1>Home Care Services in Your Area</h1>
                <p>
                  Book an expert caregiver that you can trust. To get started
                </p>
              </div>
              <div className="banner-form-field">
                <span>Home Visit</span>
                <form action>
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="input-block">
                        <div className="icon-badge">
                          <span>
                            <i className="feather-user" />
                          </span>
                        </div>
                        <div className="banner-input-box">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Dorothy Joanne"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="input-block">
                        <div className="icon-badge">
                          <span>
                            <i className="feather-smartphone" />
                          </span>
                        </div>
                        <div className="banner-input-box">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="1 XXXXX YYY95"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="input-block">
                        <div className="icon-badge">
                          <span>
                            <i className="feather-mail" />
                          </span>
                        </div>
                        <div className="banner-input-box">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Sample@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="input-block">
                        <div className="icon-badge">
                          <span>
                            <i className="feather-map-pin" />
                          </span>
                        </div>
                        <div className="banner-input-box">
                          <label className="form-label">Location</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Newyork, United States"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="banner-btns">
                <Link to="/booking-2" className="btn appoint-btn">
                  <i className="feather-file me-2" />
                  Book an Appointment
                </Link>
                <Link to="/index-13" className="btn demo-btn">
                  <i className="feather-video me-2" />
                  Live Demo
                </Link>
              </div>
              <div className="watch-video">
                <Link to="#">
                  <span>
                    <i className="fa-solid fa-circle-play" />
                  </span>
                  Watch Video About Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-sec-img">
              <span>
                <img src={Banner_img_13} className="img-fluid" alt="Img" />
              </span>
              <span
                className="banner-curve aos"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <img
                  src={Banner_img_curve_13}
                  className="img-fluid"
                  alt="Img"
                />
              </span>
              <span className="banner-round-bg">
                <img src={Banner_round_vector_13} alt="Img" />
              </span>
              <span
                className="cloud-bg-one"
                data-aos="fade-right"
                data-aos-delay={500}
              >
                <img src={Banner_cloud_01} alt="Img" />
              </span>
              <span
                className="cloud-bg-two"
                data-aos="fade-left"
                data-aos-delay={500}
              >
                <img src={Banner_cloud_01} alt="Img" />
              </span>
              <span className="lief-img">
                <img src={Banner_lief_img} alt="Img" />
              </span>
              <span className="banner-curve-two">
                <img src={Banner_curve_bg} alt="Img" />
              </span>
              <span className="chat-call-btn">
                <Link to="/chat-doctor">Chat and Call Now</Link>
              </span>
              <div className="banner-cal-icon">
                <span className="calender-border">
                  <img src={Banner_call_icon} alt="Img" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareBanner;
