import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ReactFlagsSelect from "react-flags-select";
// import FeatherIcon from 'feather-icons-react';
import { onelogo, oneslide } from "./img";
import OnboardingSidebar from "./onboardingsidebar";

const Onboardingpassword = () => {
  const [input, setInput] = useState({
    password: false,
    confirm: false,
  });

  const handleinput = (value) => {
    if (value === "password") setInput({ ...input, password: !input.password });
    else setInput({ ...input, confirm: !input.confirm });
  };

  return (
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
            <div className="col-lg-4">
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
                      <div className="onboarding-progress">
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
                      <div className="onboarding-progress">
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
                      <div className="onboarding-progress">
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
                      <div className="onboarding-progress">
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
            <div className="col-lg-8">
              <div className="onboarding-content-box content-wrap">
                <div className="onboard-set">
                  <div className="onboarding-title pass-title">
                    <h2>Create a passcode on your Doccure account</h2>
                  </div>
                  <div className="onboarding-content">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group pass-group">
                          <div
                            onClick={() => handleinput("password")}
                            className={` input-placeholder form-focus passcode-wrap mail-box ${
                              input.password
                                ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                : ""
                            }`}
                          >
                            {/* <div className="input-placeholder form-focus passcode-wrap mail-box"> */}
                            <label className="focus-label">
                              Enter New Password<span>*</span>
                            </label>
                            <input
                              type="password"
                              className="form-control floating pass-icon"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div
                            onClick={() => handleinput("confirm")}
                            className={` input-placeholder form-focus passcode-wrap mail-box ${
                              input.confirm
                                ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                : ""
                            }`}
                          >
                            <label className="focus-label">
                              Enter Confirm Password<span>*</span>
                            </label>
                            <input
                              type="password"
                              className="form-control floating pass-icon-1"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="onboarding-btn">
                  <Link to="/pages/onboarding-identity">Continue</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboardingpassword;
