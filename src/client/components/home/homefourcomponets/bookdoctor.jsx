import React from "react";
import { Link } from "react-router-dom";
import {
  Doctor1,
  Doctor2,
  Doctor3,
  Doctor4,
  alarm,
  consult,
  exper,
  mapplus,
} from "../image";

function Bookdoctor() {
  return (
    <section className="book-section">
      <div className="container">
        <div className="section-header-three text-center">
          <h2>Book Our Best Doctor</h2>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
            <div className="book-best-doctors">
              <div className="book-header">
                <Link to="/patient/doctor-profile">
                  <img src={Doctor1} alt="" className="img-fluid" />
                </Link>
                <div className="img-overlay">
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="doctors-body">
                <div className="inner-section">
                  <span className="float-start">PSICOLOGIST</span>
                  <div className="rating text-end">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-ratings ms-1">3.5</span>
                  </div>
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Ruby Perrin</h4>
                  </Link>
                  <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                </div>
                <div className="row row-sm loc-details">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={mapplus} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Location</span>
                        <span className="data-info">Newyork, USA</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={alarm} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Available on</span>
                        <span className="data-info">Fri, 22 March</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={consult} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Consulting</span>
                        <span className="data-info">500+ Patients</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={exper} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">EXPERIENCE</span>
                        <span className="data-info">25+ Years</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row row-sm align-items-center p-3">
                  <div className="col-6">
                    <Link
                      to="/patient/doctor-profile"
                      className="amt-txt"
                      tabIndex={0}>
                      $50 - $100
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="/patient/booking1"
                      className="btn book-btn"
                      tabIndex={0}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
            <div className="book-best-doctors">
              <div className="book-header">
                <Link to="/patient/doctor-profile">
                  <img src={Doctor2} alt="" className="img-fluid" />
                </Link>
                <div className="img-overlay">
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="doctors-body">
                <div className="inner-section">
                  <span className="float-start">PSICOLOGIST</span>
                  <div className="rating text-end">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-ratings ms-1">3.5</span>
                  </div>
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Darren Elder</h4>
                  </Link>
                  <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                </div>
                <div className="row row-sm loc-details">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={mapplus} />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Location</span>
                        <span className="data-info">Newyork, USA</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={alarm} />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Available on</span>
                        <span className="data-info">Fri, 22 March</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={consult} />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Consulting</span>
                        <span className="data-info">500+ Patients</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={exper} />
                      </Link>
                      <Link to="#">
                        <span className="available-info">EXPERIENCE</span>
                        <span className="data-info">25+ Years</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row row-sm align-items-center p-3">
                  <div className="col-6">
                    <Link
                      to="/patient/doctor-profile"
                      className="amt-txt"
                      tabIndex={0}>
                      $50 - $100
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="/patient/doctor-profile"
                      className="btn book-btn"
                      tabIndex={0}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
            <div className="book-best-doctors">
              <div className="book-header">
                <Link to="/patient/doctor-profile">
                  <img src={Doctor3} alt="" className="img-fluid" />
                </Link>
                <div className="img-overlay">
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="doctors-body">
                <div className="inner-section">
                  <span className="float-start">PSICOLOGIST</span>
                  <div className="rating text-end">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-ratings ms-1">3.5</span>
                  </div>
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Deborah Angel</h4>
                  </Link>
                  <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                </div>
                <div className="row row-sm loc-details">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={mapplus} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Location</span>
                        <span className="data-info">Newyork, USA</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={alarm} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Available on</span>
                        <span className="data-info">Fri, 22 March</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={consult} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Consulting</span>
                        <span className="data-info">500+ Patients</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={exper} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">EXPERIENCE</span>
                        <span className="data-info">25+ Years</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row row-sm align-items-center p-3">
                  <div className="col-6">
                    <Link
                      to="/patient/doctor-profile"
                      className="amt-txt"
                      tabIndex={0}>
                      $50 - $100
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="/patient/booking1"
                      className="btn book-btn"
                      tabIndex={0}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
            <div className="book-best-doctors">
              <div className="book-header">
                <Link to="/patient/doctor-profile">
                  <img src={Doctor4} alt="" className="img-fluid" />
                </Link>
                <div className="img-overlay">
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="doctors-body">
                <div className="inner-section">
                  <span className="float-start">PSICOLOGIST</span>
                  <div className="rating text-end">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-ratings ms-1">3.5</span>
                  </div>
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Sofia Brient</h4>
                  </Link>
                  <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                </div>
                <div className="row row-sm loc-details">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={mapplus} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Location</span>
                        <span className="data-info">Newyork, USA</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={alarm} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Available on</span>
                        <span className="data-info">Fri, 22 March</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={consult} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">Consulting</span>
                        <span className="data-info">500+ Patients</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <img src={exper} alt="" />
                      </Link>
                      <Link to="#">
                        <span className="available-info">EXPERIENCE</span>
                        <span className="data-info">25+ Years</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row row-sm align-items-center p-3">
                  <div className="col-6">
                    <Link
                      to="/patient/doctor-profile"
                      className="amt-txt"
                      tabIndex={0}>
                      $50 - $100
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="/patient/booking1"
                      className="btn book-btn"
                      tabIndex={0}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all-more text-center aos" data-aos="fade-up">
          <Link to="/patient/doctor-profile" className="btn btn-primary">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Bookdoctor;
