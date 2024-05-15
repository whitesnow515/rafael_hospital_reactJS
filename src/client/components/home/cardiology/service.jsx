import React, { useEffect } from "react";
import {
  doctor_19,
  doctor_20,
  doctor_21,
  doctor_22,
  doctor_23,
  doctor_24,
  feature_07,
  feature_08,
  feature_09,
  feature_10,
  feature_11,
  feature_12,
} from "../../imagepath";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div>
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">
                  Our <span>Services</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row-gap aos" data-aos="fade-up">
            <div className="col-md-6 col-sm-12 col-lg-4">
              <div className="listing-card">
                <div className="listing-img">
                  <Link to="/patient/search-doctor">
                    <img src={feature_07} className="img-fluid" alt="#" />
                  </Link>
                  <div className="fav-item">
                    <Link to="#" className="fav-icon">
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-title">
                      <h3>
                        <Link to="/patient/search-doctor">
                          Heart Valve Disease
                        </Link>
                      </h3>
                    </div>
                    <div className="listing-profile-details">
                      <div className="listing-user">
                        <div className="listing-profile-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={doctor_19}
                              className="img-fluid"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="listing-user-details">
                          <span>Specialist</span>
                          <h6>
                            <Link to="/patient/doctor-profile">
                              Dr Anoop Shetty
                            </Link>
                          </h6>
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
            <div className="col-md-6 col-sm-12 col-lg-4">
              <div className="listing-card">
                <div className="listing-img">
                  <Link to="/patient/search-doctor">
                    <img src={feature_08} className="img-fluid" alt="#" />
                  </Link>
                  <div className="fav-item">
                    <Link to="#" className="fav-icon">
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-title">
                      <h3>
                        <Link to="/patient/search-doctor">
                          Coronary artery disease
                        </Link>
                      </h3>
                    </div>
                    <div className="listing-profile-details">
                      <div className="listing-user">
                        <div className="listing-profile-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={doctor_20}
                              className="img-fluid"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="listing-user-details">
                          <span>Specialist</span>
                          <h6>
                            <Link to="/patient/doctor-profile">
                              Dr Simon Pearse
                            </Link>
                          </h6>
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
            <div className="col-md-6 col-sm-12 col-lg-4">
              <div className="listing-card">
                <div className="listing-img">
                  <Link to="/patient/search-doctor">
                    <img src={feature_09} className="img-fluid" alt="#" />
                  </Link>
                  <div className="fav-item">
                    <Link to="#" className="fav-icon">
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-title">
                      <h3>
                        <Link to="/patient/search-doctor">
                          High blood pressure
                        </Link>
                      </h3>
                    </div>
                    <div className="listing-profile-details">
                      <div className="listing-user">
                        <div className="listing-profile-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={doctor_21}
                              className="img-fluid"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="listing-user-details">
                          <span>Specialist</span>
                          <h6>
                            <Link to="/patient/doctor-profile">
                              Dr Rajan Sharma
                            </Link>
                          </h6>
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
            <div className="col-md-6 col-sm-12 col-lg-4">
              <div className="listing-card">
                <div className="listing-img">
                  <Link to="/patient/search-doctor">
                    <img src={feature_10} className="img-fluid" alt="#" />
                  </Link>
                  <div className="fav-item">
                    <Link to="#" className="fav-icon">
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-title">
                      <h3>
                        <Link to="/patient/search-doctor">Heart attack</Link>
                      </h3>
                    </div>
                    <div className="listing-profile-details">
                      <div className="listing-user">
                        <div className="listing-profile-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={doctor_22}
                              className="img-fluid"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="listing-user-details">
                          <span>Specialist</span>
                          <h6>
                            <Link to="/patient/doctor-profile">
                              Dr John Paul
                            </Link>
                          </h6>
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
            <div className="col-md-6 col-sm-12 col-lg-4">
              <div className="listing-card">
                <div className="listing-img">
                  <Link to="/patient/search-doctor">
                    <img src={feature_11} className="img-fluid" alt="#" />
                  </Link>
                  <div className="fav-item">
                    <Link to="#" className="fav-icon">
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-title">
                      <h3>
                        <Link to="/patient/search-doctor">
                          Heart palpitations
                        </Link>
                      </h3>
                    </div>
                    <div className="listing-profile-details">
                      <div className="listing-user">
                        <div className="listing-profile-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={doctor_23}
                              className="img-fluid"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="listing-user-details">
                          <span>Specialist</span>
                          <h6>
                            <Link to="/patient/doctor-profile">
                              Dr Marry Peter
                            </Link>
                          </h6>
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
            <div className="col-md-6 col-sm-12 col-lg-4">
              <div className="listing-card">
                <div className="listing-img">
                  <Link to="/patient/search-doctor">
                    <img src={feature_12} className="img-fluid" alt="#" />
                  </Link>
                  <div className="fav-item">
                    <Link to="#" className="fav-icon">
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-title">
                      <h3>
                        <Link to="/patient/search-doctor">
                          Heart palpitations
                        </Link>
                      </h3>
                    </div>
                    <div className="listing-profile-details">
                      <div className="listing-user">
                        <div className="listing-profile-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              src={doctor_24}
                              className="img-fluid"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="listing-user-details">
                          <span>Specialist</span>
                          <h6>
                            <Link to="/patient/doctor-profile">Dr Juliana</Link>
                          </h6>
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
      </section>
    </div>
  );
};

export default Service;
