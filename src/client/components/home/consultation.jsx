import React from "react";
import { doctor02, patient3 } from "../pages/aboutus/img";
import { appimg, devicemessage, googleimg, smartphone } from "../imagepath";
import Headerconsultation from "./headerconsultation";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Consultation = () => {
  return (
    <div className="main-wrapper">
      <Headerconsultation />

      <div className="doctor-content">
        <div className="container">
          {/* Consultation */}
          <div className="row">
            <div className="col-md-12">
              <div className="back-link">
                <Link to="/patientdetails">
                  <i className="fa-solid fa-arrow-left-long" /> Back
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="paitent-header">
                <h4 className="paitent-title">Type of Consultation</h4>
              </div>
              <div className="consultation-grid">
                <div className="consultation-info">
                  <p>Online Consultation</p>
                  <div className="consultation-list">
                    <ul>
                      <li>
                        <div className="consultation-types active">
                          <Link to="#">
                            <i className="feather-video" /> Video Consulting
                          </Link>
                          <span>
                            <i className="fas fa-circle-check" />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="consultation-types">
                          <Link to="#">
                            <i className="feather-mic" /> Audio Consulting
                          </Link>
                          <span>
                            <i className="fas fa-circle-check" />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="consultation-types">
                          <Link to="#">
                            <i className="feather-message-square" /> Chat
                            Consulting
                          </Link>
                          <span>
                            <i className="fas fa-circle-check" />
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="consultation-info">
                  <p>Home Visit</p>
                  <div className="consultation-list">
                    <ul>
                      <li>
                        <div className="consultation-types">
                          <Link to="#">
                            <i className="feather-home" /> Home Visit
                          </Link>
                          <span>
                            <i className="fas fa-circle-check" />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="consultation-types">
                          <Link to="#">
                            <i className="feather-users" /> Consult Instatly
                          </Link>
                          <span>
                            <i className="fas fa-circle-check" />
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="booking-btn">
                <Link
                  to="/payment"
                  className="btn btn-primary prime-btn justify-content-center align-items-center"
                >
                  Next <i className="feather-arrow-right-circle" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="booking-header">
                <h4 className="booking-title">Booking Summary</h4>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body">
                  <div className="booking-doctor-details">
                    <div className="booking-doctor-left">
                      <div className="booking-doctor-img">
                        <Link to="/patient/doctor-profile">
                          <img src={doctor02} alt="" />
                        </Link>
                      </div>
                      <div className="booking-doctor-info">
                        <h4>
                          <Link to="/patient/doctor-profile">Dr. John Doe</Link>
                        </h4>
                        <p>MBBS, Dentist</p>
                      </div>
                    </div>
                    <div className="booking-doctor-right">
                      <p>
                        <i className="fas fa-circle-check" />
                        <Link to="/doctor/profile-setting">Edit</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body booking-list-body">
                  <div className="booking-list">
                    <div className="booking-date-list">
                      <ul>
                        <li>
                          Booking Date: <span>Sun, 30 Aug 2022</span>
                        </li>
                        <li>
                          Booking Time: <span>10.00AM to 11:00AM</span>
                        </li>
                      </ul>
                    </div>
                    <div className="booking-doctor-right">
                      <p>
                        <Link to="/patient/booking1">Edit</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body">
                  <div className="booking-doctor-details">
                    <div className="booking-doctor-left">
                      <div className="booking-doctor-img">
                        <Link to="#">
                          <img src={patient3} alt="" />
                        </Link>
                      </div>
                      <div className="booking-doctor-info">
                        <h4>
                          <Link to="/patient/profile">John Smith</Link>
                        </h4>
                        <p>P123456</p>
                      </div>
                    </div>
                    <div className="booking-doctor-right">
                      <p>
                        <Link to="/patient/profile">Edit</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body">
                  <div className="booking-doctor-details">
                    <div className="booking-device">
                      <div className="booking-device-img">
                        <img src={devicemessage} alt="" />
                      </div>
                      <div className="booking-doctor-info">
                        <h3>We can help you</h3>
                        <p className="device-text">
                          Call us +1 888-888-8888 (or) chat with our customer
                          support team.
                        </p>
                        <Link to="/patient/patient-chat" className="btn">
                          Chat With Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card booking-card mb-0">
                <div className="card-body booking-card-body">
                  <div className="booking-doctor-details">
                    <div className="booking-device">
                      <div className="booking-device-img">
                        <img src={smartphone} alt="" />
                      </div>
                      <div className="booking-doctor-info">
                        <h3>Get the App</h3>
                        <p className="device-text">
                          Download our app for better experience and for more
                          feature
                        </p>
                        <div className="app-images">
                          <Link to="#">
                            <img src={googleimg} alt="" />
                          </Link>
                          <Link to="#">
                            <img src={appimg} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Consultation */}
        </div>
      </div>
    </div>
  );
};

export default Consultation;
