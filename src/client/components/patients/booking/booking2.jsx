import React from "react";
import Header from "../../header";
import { Link } from "react-router-dom";
import {
  appimg,
  devicemessage,
  doctor_01,
  googleimg,
  smartphone,
  todayicon,
} from "../../imagepath";
import Footer from "../../footer";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

const Booking2 = (props) => {
  return (
    <div className="main-wrapper">
      <Header {...props} />

      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Booking</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Booking
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="content content-space">
        <div className="container">
          {/* Booking */}
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="booking-header">
                <h4 className="booking-title">Select Available Slots</h4>
              </div>
              <div className="booking-date choose-date-book">
                <p>Choose Date</p>
                <div className="booking-range">
                  <div className="bookingrange btn">
                    <img src={todayicon} alt="icons" />
                    <span></span>
                    <div className="datepicker-icon">
                    <DateRangePicker
                    initialSettings={{
                      endDate: new Date("2020-08-11T12:30:00.000Z"),
                      ranges: {
                        "Last 30 Days": [
                          new Date("2020-07-12T04:57:17.076Z"),
                          new Date("2020-08-10T04:57:17.076Z"),
                        ],
                        "Last 7 Days": [
                          new Date("2020-08-04T04:57:17.076Z"),
                          new Date("2020-08-10T04:57:17.076Z"),
                        ],
                        "Last Month": [
                          new Date("2020-06-30T18:30:00.000Z"),
                          new Date("2020-07-31T18:29:59.999Z"),
                        ],
                        "This Month": [
                          new Date("2020-07-31T18:30:00.000Z"),
                          new Date("2020-08-31T18:29:59.999Z"),
                        ],
                        Today: [
                          new Date("2020-08-10T04:57:17.076Z"),
                          new Date("2020-08-10T04:57:17.076Z"),
                        ],
                        Yesterday: [
                          new Date("2020-08-09T04:57:17.076Z"),
                          new Date("2020-08-09T04:57:17.076Z"),
                        ],
                      },
                      startDate: new Date("2020-08-10T04:30:00.000Z"),
                      timePicker: false,
                    }}>
                    <input
                      className="form-control col-4 input-range"
                      type="text"
                      style={{border: "none"  }}
                      // custom="input-range"
                     
                    />
                  </DateRangePicker>
                  </div>
                    <i className="fas fa-chevron-down" />
                  </div>
                </div>
              </div>
              <div className="card booking-card">
                <div className="card-body time-slot-card-body">
                  <div className="schedule-header">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="day-slot">
                          <ul>
                            <li className="left-arrow">
                              <Link to="#0">
                                <i className="fa fa-chevron-left"></i>
                              </Link>
                            </li>
                            <li>
                              <span>Monday</span>
                              <span className="slot-date">sep 5</span>
                            </li>
                            <li>
                              <span>Tuesday</span>
                              <span className="slot-date">sep 6</span>
                            </li>
                            <li>
                              <span>Wed</span>
                              <span className="slot-date">sep 7</span>
                            </li>
                            <li>
                              <span>Thurs</span>
                              <span className="slot-date">sep 8</span>
                            </li>
                            <li>
                              <span>Fri</span>
                              <span className="slot-date">sep 9</span>
                            </li>
                            <li>
                              <span>Sat</span>
                              <span className="slot-date">sep 10</span>
                            </li>
                            <li>
                              <span>Sun</span>
                              <span className="slot-date">sep 11</span>
                            </li>
                            <li className="right-arrow">
                              <Link to="#0">
                                <i className="fa fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: 40 }}>
                    <div className="col-lg-4 col-md-4">
                      <div className="time-slot time-slot-blk">
                        <h4>Morning</h4>
                        <div className="time-slot-list">
                          <ul>
                            <li>
                              <Link className="timing" to="#">
                                <span>
                                  <i className="feather-clock" /> 09:00 - 09:30
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link className="timing" to="#">
                                <span>
                                  <i className="feather-clock" /> 10:00 - 10:30
                                </span>
                              </Link>
                            </li>
                            <li className="time-slot-open time-slot-morning">
                              <Link className="timing" to="#">
                                <span>
                                  <i className="feather-clock" /> 11:00 - 11:30
                                </span>
                              </Link>
                            </li>
                            <li>
                              <div className="load-more-timings load-more-morning">
                                <Link to="#">Load More</Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="time-slot time-slot-blk">
                        <h4>Afternoon</h4>
                        <div className="time-slot-list">
                          <ul>
                            <li>
                              <Link className="timing" to="#">
                                <span>
                                  <i className="feather-clock" /> 12:00 - 12:30
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link className="timing active" to="#">
                                <span>
                                  <i className="feather-clock" /> 01:00 - 01:30
                                </span>
                              </Link>
                            </li>
                            <li className="time-slot-open time-slot-afternoon">
                              <Link className="timing" to="#">
                                <span>
                                  <i className="feather-clock" /> 02:30 - 03:00
                                </span>
                              </Link>
                            </li>
                            <li>
                              <div className="load-more-timings load-more-afternoon">
                                <Link to="#">Load More</Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="time-slot time-slot-blk">
                        <h4>Evening</h4>
                        <div className="time-slot-list">
                          <ul>
                            <li>
                              <Link className="timing" to="#">
                                <span>
                                  <i className="feather-clock" /> 03:00 - 03:30
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link className="timing" to="#">
                                <span>
                                  <i className="feather-clock" /> 04:00 - 04:30
                                </span>
                              </Link>
                            </li>
                            <li className="time-slot-open time-slot-evening">
                              <Link className="timing" to="#">
                                <span>
                                  <i className="feather-clock" /> 05:00 - 05:30
                                </span>
                              </Link>
                            </li>
                            <li>
                              <div className="load-more-timings load-more-evening">
                                <Link to="#">Load More</Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="booking-btn">
                <Link
                  to="/patientdetails"
                  className="btn btn-primary prime-btn justify-content-center align-items-center"
                >
                  Next <i className="feather-arrow-right-circle" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="booking-header">
                <h4 className="booking-title">Booking Summary</h4>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body">
                  <div className="booking-doctor-details">
                    <div className="booking-doctor-left">
                      <div className="booking-doctor-img">
                        <Link to="/patient/doctor-profile">
                          <img src={doctor_01} alt="doctor" />
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
                        <i className="fas fa-check-circle" />
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
                        <img src={devicemessage} alt="devicemsg" />
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
                        <img src={smartphone} alt="smartphone" />
                      </div>
                      <div className="booking-doctor-info">
                        <h3>Get the App</h3>
                        <p className="device-text">
                          Download our app for better experience and for more
                          feature
                        </p>
                        <div className="app-images">
                          <Link to="#">
                            <img src={googleimg} alt="googleimg" />
                          </Link>
                          <Link to="#">
                            <img src={appimg} alt="appimg" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Booking */}
        </div>
      </div>
      {/* /Page Content */}
      <Footer {...props} />
    </div>
  );
};

export default Booking2;
