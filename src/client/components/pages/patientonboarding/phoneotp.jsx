import React from "react";
import { Link } from "react-router-dom";
// import ReactFlagsSelect from "react-flags-select";
import { onelogo, oneslide } from "./img";
import OnboardingSidebar from "../doctoronboarding/onboardingsidebar";

const PhoneOtp = () => {
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
                      <div className="onboarding-progress">
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
                      <div className="onboarding-progress">
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
                <div className="onboard-set">
                  <div className="onboarding-title">
                    <h2>Enter 4-digit code sent to your phone.</h2>
                    <h6>We’ve sent it to the number +1 00 000 0000</h6>
                  </div>
                  <div className="onboarding-content passcode-wrap">
                    <div className="d-flex digit-group">
                      <input inputMode="decimal" autoFocus />
                      <input inputMode="decimal" />
                      <input inputMode="decimal" />
                      <span className="hyphen" />
                      <input inputMode="decimal" />
                    </div>
                  </div>
                </div>
                <div className="onboarding-btn">
                  <Link to="/pages/onboarding-password">Continue</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneOtp;
