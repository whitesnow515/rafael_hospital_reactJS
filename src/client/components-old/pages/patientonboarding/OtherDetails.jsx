/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Header from "../../header";
// import Footer from "../../footer";
import { onelogo, oneslide, success_tick } from "./img";
import Select from "react-select";
import OnboardingSidebar from "../doctoronboarding/onboardingsidebar";

const Country = [
  { label: "Argentina", value: "Argentina" },
  { label: "Brazil", value: "Brazil" },
  { label: "Chile", value: "Chile" },
  { label: "Egypt", value: "Egypt" },
];

const State = [
  { label: "Alaska", value: "Alaska" },
  { label: "California", value: "California" },
  { label: "Hawaii", value: "Hawaii" },
  { label: "Georgia", value: "Georgia" },
];

const City = [
  { label: "New York", value: "New York" },
  { label: "Los Angeles", value: "Los Angeles" },
  { label: "Houston", value: "Houston" },
];

const OtherDetails = () => {
  const [input, setInput] = useState(false);

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
      height: "40px",
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
                      <Link to="/pages/patient-email">
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
                      <Link to="/pages/patient-personalize">
                        <div className="onboarding-progress active">
                          <span>2</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Profile Picture</h6>
                          <p>Upload Profile picture</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-details">
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
                      <Link to="/pages/patient-family-details">
                        <div className="onboarding-progress active">
                          <span>4</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Select Members</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-dependant-details">
                        <div className="onboarding-progress active">
                          <span>5</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Dependant details</h6>
                          <p>Dependants Profile</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-other-details">
                        <div className="onboarding-progress active">
                          <span>6</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Other Detail</h6>
                          <p>More information</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="onboarding-content-box content-wrap">
                  <div className="onborad-set">
                    <div className="onboarding-title">
                      <h2>
                        Other Details<span>*</span>
                      </h2>
                      <h6>Please fill the details below</h6>
                    </div>
                    <div className="onboarding-content passcode-wrap mail-box">
                      <div className="row">
                        <form method="post">
                          <div className="col-lg-12">
                            <div className="form-group ">
                              <div
                                onClick={() => setInput(true)}
                                className={` input-placeholder form-focus passcode-wrap mail-box ${
                                  input
                                    ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                    : ""
                                }`}
                              >
                                <label className="focus-label">
                                  Enter Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control floating"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <Select
                                styles={customStyles}
                                options={City}
                                placeholder="Select City"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <Select
                                styles={customStyles}
                                options={State}
                                placeholder="Select State"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <Select
                                styles={customStyles}
                                options={Country}
                                placeholder="Select Country"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group ">
                              <div className="form-floating input-placeholder passcode-wrap">
                                <textarea
                                  className="form-control"
                                  placeholder="Leave a comment here"
                                  id="floatingTextarea2"
                                  style={{ height: "135px" }}
                                ></textarea>
                                <label for="floatingTextarea2">
                                  Other Information
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="onboarding-btn">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#profile-completed"
                    >
                      Continue
                    </Link>
                  </div>
                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade fade-custom"
                    id="profile-completed"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog id-upload modal-dialog-centered">
                      <div className="modal-content id-pop-content">
                        <div className="modal-header id-pop-header justify-content-center">
                          <img src={success_tick} alt="" />
                        </div>
                        <div className="modal-body id-pop-body text-center">
                          <h3>Thank you</h3>
                          <span> Mr.Dennis</span>
                          <p className="pb-0">
                            your Account has been completed successfully
                          </p>
                        </div>
                        <div className="modal-footer id-pop-footer text-center">
                          <div
                            className="onboarding-btn pop-btn "
                            onClick={() => window.location.reload()}
                          >
                            <Link to="/patient/dashboard">Go to Dashboard</Link>
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

export default OtherDetails;
