/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
// import Header from '../../header';
// import Footer from '../../footer';
// import FeatherIcon from 'feather-icons-react';
import { onelogo, oneslide, file } from "./img";
import Select from "react-select";
import OnboardingSidebar from "./onboardingsidebar";

const AreaofInterest = [
  { label: "Surgery", value: "Surgery" },
  { label: "Heart", value: "Heart" },
  { label: "Ortho", value: "Ortho" },
];

const Onboardingverification = () => {
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
      marginBottom: "20px",
      paddingLeft: "10px",
    }),
    dropdownIndicator: () => ({
      marginBottom: "20px",
      paddingRight: "10px",
    }),
    input: () => ({
      marginBottom: "20px",
    }),
    singleValue: () => ({
      marginBottom: "20px",
    }),
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
                        <div className="onboarding-progress ">
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
                        <div className="onboarding-progress ">
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
                      Doctor Verification<span>*</span>
                    </h2>
                    <h6>
                      Please provide the details below and attach copies for
                      your:
                    </h6>
                  </div>
                  <div className="onboarding-content passcode-wrap mail-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="verify-box">
                          <ul className="verify-list">
                            <li className="verify-item">
                              Certificate of Registration with the Maltese
                              Medical Council OR Registration from the
                              appropriate Professional Council
                            </li>
                            <li className="verify-item">
                              Certificate of Good Standing (from the Maltese
                              Medical Council - valid for 3 months from the date
                              of issue). Doctors applying from overseas are to
                              provide a Certificate of Good Standing issued from
                              the most recent country of residence / practise
                              (valid for 3 months from the date of issue) (only
                              applicable for Medical Doctors)
                            </li>
                            <li className="verify-item">Curriculum Vitae</li>
                            <li className="verify-item">
                              Specialist Registration Certificate
                            </li>
                            <li className="verify-item">
                              Digital signature: copy of the signature and
                              registration number
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-4">
                          <label className="onboarding-lable">
                            Medical council registration number
                            <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Medical council registration number"
                            className="form-control placeholder-style"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="call-option file-option ">
                            <input
                              type="file"
                              id="radio1"
                              name="selector"
                              className="option-radio"
                            />
                            <label
                              htmlFor="radio1"
                              className="call-lable verify-lable verify-file"
                            >
                              {" "}
                              <img src={file} alt="" />
                              Upload Document
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-4">
                          <label className="onboarding-lable">
                            Area of Specialisation<span>*</span>
                          </label>
                          <Select
                            styles={customStyles}
                            options={AreaofInterest}
                            placeholder="Select Area of Specialisation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="onboarding-btn Personalize-btn">
                    <Link to="/pages/onboarding-payments">Continue</Link>
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

export default Onboardingverification;
