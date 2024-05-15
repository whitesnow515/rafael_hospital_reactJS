import React, { useEffect } from "react";
import {
  doctor_13,
  doctor_thumb_02,
  doctor_thumb_05,
  doctor_thumb_07,
  ecgwave,
  hexagon_group_1,
  hexagon_group_2,
} from "../../imagepath";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Ourdoctor = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      <section className="our-doctor-section">
        <div className="section-floating-bg">
          <img src={hexagon_group_1} alt="" />
          <img src={hexagon_group_2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">
                  Our Specialist <span>Doctors</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row-gap aos" data-aos="fade-up">
            <div className="col-md-4 col-sm-12 col-lg-3">
              <div className="module-border-wrap">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="/patient/doctor-profile">
                      <img src={doctor_13} className="img-fluid" alt="" />
                    </Link>
                    <div className="fav-item">
                      <div className="featured-rating">
                        <i className="fa fa-star " /> <span>4.5</span>
                      </div>
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-category">
                        <Link to="#" className="listing-category-tag tag-green">
                          Cardiology
                        </Link>
                        <Link
                          to="#"
                          className="listing-category-tag tag-purple">
                          physiology
                        </Link>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-floating-img">
                          <img src={ecgwave} alt="" />
                        </div>
                        <div className="listing-user">
                          <div className="listing-user-details">
                            <h6>
                              <Link to="/patient/doctor-profile">
                                Dr Jonathan Behar{" "}
                              </Link>
                            </h6>
                            <span>Cardiologist</span>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link
                            to="/patient/booking2"
                            className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-3">
              <div className="module-border-wrap">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="/patient/doctor-profile">
                      <img src={doctor_thumb_02} className="img-fluid" alt="" />
                    </Link>
                    <div className="fav-item">
                      <div className="featured-rating">
                        <i className="fa fa-star " /> <span>4.5</span>
                      </div>
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-category">
                        <Link to="#" className="listing-category-tag tag-red">
                          Hypertension
                        </Link>
                        <Link to="#" className="listing-category-tag tag-green">
                          Cardiology
                        </Link>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-floating-img">
                          <img src={ecgwave} alt="" />
                        </div>
                        <div className="listing-user">
                          <div className="listing-user-details">
                            <h6>
                              <Link to="/patient/doctor-profile">
                                Dr Piers Clifford
                              </Link>
                            </h6>
                            <span>Consultant Cardiologist</span>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link
                            to="/patient/booking2"
                            className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-3">
              <div className="module-border-wrap">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="/patient/doctor-profile">
                      <img src={doctor_thumb_05} className="img-fluid" alt="" />
                    </Link>
                    <div className="fav-item">
                      <div className="featured-rating">
                        <i className="fa fa-star " /> <span>4.5</span>
                      </div>
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-category">
                        <Link to="#" className="listing-category-tag tag-green">
                          Cardiology
                        </Link>
                        <Link
                          to="#"
                          className="listing-category-tag tag-purple">
                          physiology
                        </Link>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-floating-img">
                          <img src={ecgwave} alt="" />
                        </div>
                        <div className="listing-user">
                          <div className="listing-user-details">
                            <h6>
                              <Link to="/patient/doctor-profile">
                                Dr Rajan Sharma
                              </Link>
                            </h6>
                            <span>Cardiologist</span>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link
                            to="/patient/booking2"
                            className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-3">
              <div className="module-border-wrap">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="/patient/doctor-profile">
                      <img src={doctor_thumb_07} className="img-fluid" alt="" />
                    </Link>
                    <div className="fav-item">
                      <div className="featured-rating">
                        <i className="fa fa-star " /> <span>4.5</span>
                      </div>
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-category">
                        <Link to="#" className="listing-category-tag tag-red">
                          Hypertension
                        </Link>
                        <Link to="#" className="listing-category-tag tag-green">
                          Cardiology
                        </Link>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-floating-img">
                          <img src={ecgwave} alt="" />
                        </div>
                        <div className="listing-user">
                          <div className="listing-user-details">
                            <h6>
                              <Link to="/patient/doctor-profile">
                                Dr Julian Collinson
                              </Link>
                            </h6>
                            <span>Consultant Cardiologist</span>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link
                            to="/patient/booking2"
                            className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourdoctor;
