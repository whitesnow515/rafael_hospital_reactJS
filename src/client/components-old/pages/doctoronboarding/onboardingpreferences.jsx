/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  onelogo,
  oneslide,
  success_tick,
  mic_black,
  video_icon,
  ch,
  repeat,
} from "./img";
import DatePicker from "react-datepicker";
import Select from "react-select";
import OnboardingSidebar from "./onboardingsidebar";

const State = [
  { label: "Euro", value: "Euro" },
  { label: "INR", value: "INR" },
  { label: "Dinar", value: "Dinar" },
  { label: "ring", value: "ring" },
];

const Time = [
  { label: "12:00 a.m", value: "12:00 a.m" },
  { label: "1:00 a.m", value: "1:00 a.m" },
  { label: "2:00 a.m", value: "2:00 a.m" },
  { label: "3:00 a.m", value: "3:00 a.m" },
  { label: "4:00 a.m", value: "4:00 a.m" },
  { label: "5:00 a.m", value: "5:00 a.m" },
  { label: "6:00 a.m", value: "6:00 a.m" },
  { label: "7:00 a.m", value: "7:00 a.m" },
  { label: "8:00 a.m", value: "8:00 a.m" },
  { label: "9:00 a.m", value: "9:00 a.m" },
];

const Lang = [
  { label: "French", value: "French" },
  { label: "English", value: "English" },
  { label: "Spanish", value: "Spanish" },
];
const OnboardingPreferences = (props) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      //   paddingTop: 20,
      paddingBottom: 20,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#fff" : "#F5F6FA",
      height: "50px",
      borderRadius: 4,
      border: 0,
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      outline: state.isFocused && "none",
    }),
    container: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "0.5px solid #F5F6FA " : 0,
      height: "50px",
      borderRadius: 4,
    }),
    placeholder: () => ({
      width: "60px",
      marginTop: "15px",
      paddingLeft: "10px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    dropdownIndicator: () => ({
      marginBottom: "50px",
      paddingRight: "10px",
    }),
    // input: ()=> ({
    // 	marginBottom: '20px',
    // 	overflow: 'hidden',
    // 	textOverflow: 'ellipsis',
    // }),
    singleValue: () => ({
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "70px",
      marginTop: "15px",
    }),
  };

  const LanguageStyles = {
    menu: (provided, state) => ({
      ...provided,
      //   paddingTop: 20,
      paddingBottom: 20,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#fff" : "#F5F6FA",
      height: "50px",
      borderRadius: 4,
      border: 0,
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      outline: state.isFocused && "none",
    }),
    container: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "0.5px solid #F5F6FA " : 0,
      height: "50px",
      borderRadius: 4,
      width: "100%",
    }),
    placeholder: () => ({
      // marginBottom: '20px',
      paddingLeft: "10px",
    }),
    dropdownIndicator: () => ({
      // marginBottom: '20px',
      paddingRight: "10px",
    }),
    input: () => ({
      // marginBottom: '20px',
    }),
    singleValue: () => ({
      // marginBottom: '20px',
    }),
  };

  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <div className="onboard-wrapper">
        <div className="left-panel">
          <div className="onboarding-logo text-center">
            <Link to="/index">
              <img src={onelogo} className="img-fluid" alt="" />
            </Link>
          </div>
          <div className="onboard-img">
            <img src={oneslide} className="img-fluid" alt="" />
          </div>
          <OnboardingSidebar></OnboardingSidebar>
        </div>
        <div className="right-panel">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-0">
                <div className="right-panel-title text-center">
                  <Link to="/index">
                    {" "}
                    <img src={onelogo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="on-board-wizard">
                  <ul>
                    <li>
                      <Link to="/pages/onboarding-email">
                        <div className="onboarding-progress active">
                          <span>1</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Registration</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-identity">
                        <div className="onboarding-progress active">
                          <span>2</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Upload Identity</h6>
                          <p>Upload your Identity for Verification</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-personalize">
                        <div className="onboarding-progress active">
                          <span>3</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Personal Details</h6>
                          <p>Enter your Personal Details</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-verification">
                        <div className="onboarding-progress active">
                          <span>4</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Doctor Verification</h6>
                          <p>Upload Documents for the Verification</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-payments">
                        <div className="onboarding-progress active">
                          <span>5</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Payment details</h6>
                          <p>Setup Your Payment Details</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-preferences">
                        <div className="onboarding-progress active">
                          <span>6</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Preferences</h6>
                          <p>Setup Your Preferences for your Account</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="onboarding-content-box">
                  <div className="onboarding-title">
                    <h2>
                      Preferences <span>*</span>
                    </h2>
                    <h6>
                      This can be edited later on from the account settings.
                    </h6>
                  </div>
                  <div className="onboarding-content">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Cost of an Consultation
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="onboard-set">
                                  <div className="onboarding-title">
                                    <h2>
                                      What is the maximum cost per <br />
                                      consultation?<span>*</span>
                                    </h2>
                                    <h6>
                                      This can be edited later on from the
                                      preferences section.
                                    </h6>
                                  </div>
                                  <div className="onboarding-content passcode-wrap mail-box">
                                    <div className="row">
                                      <div className="col-lg-2">
                                        <div className="form-group">
                                          <Select
                                            styles={customStyles}
                                            options={State}
                                            placeholder="Euro"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-lg-10">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            placeholder="Enter Amount"
                                            className=" placeholder-style form-control"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="onboarding-btn Consultation-btn cost-btns">
                                  <Link
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    to="#"
                                  >
                                    Save
                                  </Link>
                                  <Link
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    to="#"
                                  >
                                    Not Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Preferred means for online consultations
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="onboarding-title">
                                  <h2>
                                    Which are your preferred means <br /> of
                                    online consultation?<span>*</span>
                                  </h2>
                                  <h6>
                                    You can select more than one from the below.
                                    These will show up as options for the
                                    patient when booking an appointment.
                                  </h6>
                                </div>
                                <div className="onboarding-content">
                                  <div className="consult-option mb-lg-4 mb-sm-1">
                                    <div className="call-option">
                                      <input
                                        type="checkbox"
                                        id="radio1"
                                        name="selector"
                                        className="option-radio"
                                        defaultChecked=""
                                      />
                                      <label
                                        htmlFor="radio1"
                                        className="call-lable"
                                      >
                                        {" "}
                                        <img src={mic_black} alt="" />
                                        Audio Call
                                      </label>
                                    </div>
                                    <div className="call-option">
                                      <input
                                        type="checkbox"
                                        id="radio2"
                                        name="selector"
                                        className="option-radio"
                                      />
                                      <label
                                        htmlFor="radio2"
                                        className="call-lable"
                                      >
                                        <img src={video_icon} alt="" />
                                        Video Call
                                      </label>
                                    </div>
                                    <div className="call-option">
                                      <input
                                        type="checkbox"
                                        id="radio3"
                                        name="selector"
                                        className="option-radio"
                                      />
                                      <label
                                        htmlFor="radio3"
                                        className="call-lable"
                                      >
                                        {" "}
                                        <img src={ch} alt="" />
                                        Chat
                                      </label>
                                    </div>
                                  </div>
                                  <div className="onboarding-title">
                                    <h6>
                                      Choose your preferred language for Audio,
                                      Video calls and chat. You can select more
                                      than one option.
                                    </h6>
                                  </div>
                                  <div className="form-group">
                                    <label className="onboarding-lable">
                                      Language
                                    </label>
                                    <Select
                                      styles={LanguageStyles}
                                      options={Lang}
                                      placeholder="Choose your Language"
                                    />
                                  </div>
                                  <div className="onboarding-btn Consultation-btn">
                                    <Link
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="true"
                                      aria-controls="collapseTwo"
                                      to="#"
                                    >
                                      Save
                                    </Link>
                                    <Link
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="true"
                                      aria-controls="collapseTwo"
                                      to="#"
                                    >
                                      Not Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Availabilities
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="onboarding-title">
                                  <h2>
                                    Add availability<span>*</span>
                                  </h2>
                                  <h6>
                                    Visitors will only be able to schedule
                                    appointments during available hours.
                                  </h6>
                                </div>
                                <div className="onboarding-content passcode-wrap mail-box">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label className="onboarding-lable">
                                          Date
                                        </label>
                                        <DatePicker
                                          selected={date}
                                          placeholder="DD/MM/YYYY"
                                          onChange={handleChange}
                                          className="form-control placeholder-style datetimepicker"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="form-group">
                                        <label className="onboarding-lable">
                                          Time will you be available?
                                        </label>
                                        <Select
                                          styles={LanguageStyles}
                                          options={Time}
                                          placeholder="Start Time"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="form-group">
                                        <label className="onboarding-lable">
                                          &nbsp;
                                        </label>
                                        <Select
                                          styles={LanguageStyles}
                                          options={Time}
                                          placeholder="End Time"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <div className="repeat-avail d-flex ">
                                          <div className="tog-button">
                                            <label className="switch">
                                              <input type="checkbox" />
                                              <span className="tog-slider round" />
                                            </label>
                                          </div>
                                          <div className="avail-content d-flex ">
                                            <Link to="#">
                                              <h6>
                                                <img src={repeat} alt="" />{" "}
                                                Repeat Availability
                                              </h6>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label className="onboarding-lable">
                                          Choose any day of the week to repeat
                                          this availability.
                                        </label>
                                        <div className="weekDays-selector">
                                          <input
                                            type="checkbox"
                                            id="weekday-mon"
                                            className="weekday"
                                          />
                                          <label htmlFor="weekday-mon">M</label>
                                          <input
                                            type="checkbox"
                                            id="weekday-tue"
                                            className="weekday"
                                          />
                                          <label htmlFor="weekday-tue">T</label>
                                          <input
                                            type="checkbox"
                                            id="weekday-wed"
                                            className="weekday"
                                          />
                                          <label htmlFor="weekday-wed">W</label>
                                          <input
                                            type="checkbox"
                                            id="weekday-thu"
                                            className="weekday"
                                          />
                                          <label htmlFor="weekday-thu">T</label>
                                          <input
                                            type="checkbox"
                                            id="weekday-fri"
                                            className="weekday"
                                          />
                                          <label htmlFor="weekday-fri">F</label>
                                          <input
                                            type="checkbox"
                                            id="weekday-sat"
                                            className="weekday"
                                          />
                                          <label htmlFor="weekday-sat">S</label>
                                          <input
                                            type="checkbox"
                                            id="weekday-sun"
                                            className="weekday"
                                          />
                                          <label htmlFor="weekday-sun">S</label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label className="onboarding-lable">
                                          Repeat this schedule until
                                        </label>
                                        <DatePicker
                                          selected={date}
                                          placeholder="DD/MM/YYYY"
                                          onChange={handleChange}
                                          className="form-control placeholder-style datetimepicker"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="onboarding-btn Personalize-btn">
                                    <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#id-verified"
                                    >
                                      Save &amp; Next
                                    </Link>
                                  </div>
                                  {/* Modal */}
                                  <div
                                    className="modal fade fade-custom"
                                    id="id-verified"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog id-upload modal-dialog-centered">
                                      <div className="modal-content id-pop-content">
                                        <div className="modal-header id-pop-header justify-content-center">
                                          <img src={success_tick} alt="" />
                                        </div>
                                        <div className="modal-body id-pop-body text-center">
                                          <h2>
                                            Doctor’s profile has been verified
                                          </h2>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                          </p>
                                        </div>
                                        <div className="modal-footer id-pop-footer text-center">
                                          <div
                                            className="onboarding-btn pop-btn "
                                            onClick={() =>
                                              window.location.reload()
                                            }
                                          >
                                            <Link to="/doctor/doctor-dashboard">
                                              Continue
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingPreferences;
