import React from "react";
import { Link } from "react-router-dom";
// import FeatherIcon from 'feather-icons-react';
import { onelogo, oneslide, payment_card } from "./img";
import Select from "react-select";
import OnboardingSidebar from "./onboardingsidebar";

const Months = [
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
  { label: "June", value: "June" },
  { label: "July", value: "July" },
  { label: "August", value: "August" },
  { label: "September", value: "September" },
  { label: "October", value: "October" },
  { label: "November", value: "November" },
  { label: "December", value: "December" },
];

const OnboardingPayments = () => {
  const customStyles = {
    menu: (provided) => ({
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
                        <div className="onboarding-progress">
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
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="onboarding-title">
                        <h2>
                          Payment Details <span>*</span>
                        </h2>
                        <h6>Set Your Payment Methods</h6>
                      </div>
                      <div className="onboarding-content passcode-wrap mail-box">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="onboarding-lable">
                                Name On Card <span>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Max Doe"
                                className="form-control placeholder-style"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label className="onboarding-lable">
                                Expiration Date<span>*</span>
                              </label>
                              {/* <select className="select">
								<option disabled="" selected="">
								  Select Month
								</option>
								<option value="January">January</option>
								<option value="February">February</option>
								<option value="March">March</option>
								<option value="April">April</option>
								<option value="May">May</option>
								<option value="June">June</option>
								<option value="July">July</option>
								<option value="August">August</option>
								<option value="September">September</option>
								<option value="October">October</option>
								<option value="November">November</option>
								<option value="December">December</option>
							  </select> */}
                              <Select
                                styles={customStyles}
                                options={Months}
                                placeholder="Month"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label className="onboarding-lable">&nbsp;</label>
                              <input
                                type="text"
                                placeholder="Year"
                                className="form-control placeholder-style yearpicker"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label className="onboarding-lable">
                                CVV<span>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter CVV"
                                className="form-control placeholder-style"
                                maxLength={3}
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="onboarding-lable">
                                Card Number<span>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="4111 1111 1111 1111"
                                className="form-control placeholder-style"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-1g-12">
                          <div className="save-detail">
                            <div className="tog-button">
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="tog-slider round" />
                              </label>
                            </div>
                            <div className="save-card">
                              <h5>Save Card for further billing?</h5>
                              <h6>
                                {" "}
                                If you need more info, please check budget
                                planning
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="onboarding-btn Personalize-btn">
                          <Link to="/pages/onboarding-preferences">
                            Continue
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="payment-icon">
                        <img src={payment_card} alt="" className="img-fluid" />
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

export default OnboardingPayments;
