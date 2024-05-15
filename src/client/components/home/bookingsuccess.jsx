import React from "react";
import Headerconsultation from "./headerconsultation";
import { doctor02 } from "../pages/aboutus/img";
import { Link } from "react-router-dom";

const Bookingsuccess = () => {
  return (
    <div className="main-wrapper">
      <Headerconsultation />
      <div className="doctor-content">
        <div className="container">
          {/* Booking Success */}
          <div className="row">
            <div className="col-md-12">
              <div className="back-link">
                <Link to="/payment">
                  <i className="fa-solid fa-arrow-left-long" /> Back
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="success-content">
                <div className="success-icon">
                  <i className="fas fa-circle-check" />
                </div>
                <h4>Your Appointment Booked Succesfully</h4>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body booking-list-body">
                  <div className="booking-doctor-left booking-success-info">
                    <div className="booking-doctor-img">
                      <a href="#">
                        <img src={doctor02} alt="" className="img-fluid" />
                      </a>
                    </div>
                    <div className="booking-doctor-info">
                      <h4>
                        <a href="#">Dr. John Doe</a>
                      </h4>
                      <p>MBBS, Dentist</p>
                      <div className="booking-doctor-location">
                        <p>
                          <i className="feather-map-pin" /> Newyork, USA
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="booking-list">
                    <div className="booking-date-list consultation-date-list">
                      <ul>
                        <li>
                          Booking Date: <span>Sun, 30 Aug 2022</span>
                        </li>
                        <li>
                          Booking Time: <span>10.00AM to 11:00AM</span>
                        </li>
                        <li>
                          Type of Consultaion:{" "}
                          <span>
                            <i className="feather-video" /> Video Consulting
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="success-btn">
                <a href="#" className="btn btn-primary prime-btn">
                  Add to Google Calendar
                </a>
                <a href="#" className="btn btn-light">
                  Appointment
                </a>
              </div>
              <div className="success-dashboard-link">
                <a href="#">
                  <i className="fa-solid fa-arrow-left-long" /> Back to
                  Dashboard
                </a>
              </div>
            </div>
          </div>
          {/* /Booking Success */}
        </div>
      </div>
    </div>
  );
};

export default Bookingsuccess;
