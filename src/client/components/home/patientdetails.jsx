import React from "react";
import Headerconsultation from "./headerconsultation";
import { Link } from "react-router-dom";
import { doctor02 } from "../pages/aboutus/img";
import { appimg, devicemessage, googleimg, smartphone } from "../imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
const Patientdetails = () => {
  const config = "/react/template";

  const options = [
    { value: 1, label: "Select" },
    { value: 2, label: "Dependent" },
    { value: 3, label: "Dependent" },
    { value: 4, label: "Dependent" },
  ];
  return (
    <div className="main-wrapper">
      <Headerconsultation />

      <div className="doctor-content">
        <div className="container">
          {/* Paitent */}
          <div className="row">
            <div className="col-md-12">
              <div className="back-link">
                <Link to="/patient/booking1">
                  <i className="fa-solid fa-arrow-left-long" /> Back
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="paitent-header">
                <h4 className="paitent-title">Paitent Details</h4>
              </div>
              <div className="paitent-appointment">
                <form action={`${config}/consultation`}>
                  <div className="form-group">
                    <label className="form-group-title">Appointment for</label>
                    <label className="custom_radio me-4">
                      <input
                        type="radio"
                        name="appointment"
                        defaultChecked=""
                      />
                      <span className="checkmark" /> My Self
                    </label>
                    <label className="custom_radio">
                      <input type="radio" name="appointment" />
                      <span className="checkmark" /> Dependent
                    </label>
                  </div>
                  <div className="form-group">
                    <div className="form-group-flex">
                      <label className="form-group-title">
                        Choose Dependent
                      </label>
                      <Link to="#" className="btn">
                        <i className="feather-plus">
                          <FeatherIcon icon={"plus"} />
                        </i>{" "}
                        Add
                      </Link>
                    </div>
                    <div className="paitent-dependent-select">
                      <Select
                        className="select w-100"
                        defaultValue={options[0]} // Set default value based on the options array
                        options={options}
                        placeholder="Select"
                        isSearchable={false}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-group-title">
                      Do you have insurance?
                    </label>
                    <label className="custom_radio me-4">
                      <input type="radio" name="insurance" />
                      <span className="checkmark" /> Yes
                    </label>
                    <label className="custom_radio">
                      <input type="radio" name="insurance" defaultChecked="" />
                      <span className="checkmark" /> No
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="form-group-title">Reason</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter Your Reason"
                      defaultValue={""}
                    />
                    <p className="characters-text">400 Characters</p>
                  </div>
                  <div className="form-group">
                    <label className="form-group-title d-flex align-items-center">
                      <i className="fa fa-paperclip me-2" /> Attachment
                    </label>
                    <div className="attachment-box">
                      <div className="attachment-img">
                        <div className="attachment-icon">
                          <i className="feather-image" />
                        </div>
                        <div className="attachment-content">
                          <p>Skin Allergy Image</p>
                          <span>12.30 mb</span>
                        </div>
                      </div>
                      <div className="attachment-close">
                        <Link to="#">
                          <i className="feather-x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-group-title">
                      Symtoms <span>(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skin Allergy"
                    />
                  </div>
                  <div className="form-group mb-0">
                    <div className="booking-btn">
                      <button
                        type="submit"
                        className="btn btn-primary prime-btn justify-content-center align-items-center"
                      >
                        Next <i className="feather-arrow-right-circle" />
                      </button>
                    </div>
                  </div>
                </form>
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
          {/* /Paitent */}
        </div>
      </div>
    </div>
  );
};

export default Patientdetails;
