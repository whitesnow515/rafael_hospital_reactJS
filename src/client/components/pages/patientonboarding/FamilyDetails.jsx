import React, { useState } from "react";
import { onelogo, oneslide } from "./img";
import { Link } from "react-router-dom";
import OnboardingSidebar from "../doctoronboarding/onboardingsidebar";

const PatientFamilyDetails = () => {
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(0);

  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
    setMinus(minus - 1);
  };

  const dicrementCount = () => {
    setCount(count - 1);
    setMinus(minus - 1);
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
                  <div className="onborad-set">
                    <div className="onboarding-title">
                      <h2>
                        Select Members<span>*</span>
                      </h2>
                      <h6>Who all you want to cover in health insurance</h6>
                    </div>
                    <div className="onboarding-content">
                      <div className="row">
                        <div className="col-lg-12">
                          <form method="post">
                            <div className="checklist-col pregnant-col">
                              <div className="remember-me-col d-flex justify-content-between">
                                <span className="mt-1">Self</span>
                                <label className="custom_check">
                                  <input
                                    type="checkbox"
                                    className=""
                                    name="self"
                                    id="self"
                                    defaultValue="1"
                                    checked={true}
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              <div className="remember-me-col d-flex align-items-center justify-content-between">
                                <span className="mt-1">Spouse</span>
                                <label className="custom_check">
                                  <input
                                    type="checkbox"
                                    className=""
                                    name="spouse"
                                    id="spouse"
                                    defaultValue="1"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              <div className="remember-me-col d-flex align-items-center justify-content-between">
                                <span className="mt-1">Child</span>
                                <div className="increment-decrement">
                                  <div className="input-groups">
                                    <input
                                      onClick={dicrementCount}
                                      type="button"
                                      value="-"
                                      id="subs"
                                      className="button-minus dec button"
                                    />
                                    <input
                                      type="text"
                                      name="child"
                                      id={count}
                                      className="quantity-field"
                                    />
                                    <div className="me-3">{count}</div>

                                    <input
                                      onClick={incrementCount}
                                      type="button"
                                      defaultValue="+"
                                      id="adds"
                                      className="button-plus inc button a1 a2 a3 a4 a0"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="remember-me-col d-flex align-items-center justify-content-between">
                                <span className="mt-1">Mother</span>
                                <label className="custom_check">
                                  <input
                                    type="checkbox"
                                    className=""
                                    name="mother"
                                    id="mother"
                                    defaultValue="1"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              <div className="remember-me-col d-flex align-items-center justify-content-between">
                                <span className="mt-1">Father</span>
                                <label className="custom_check">
                                  <input
                                    type="checkbox"
                                    className=""
                                    name="father"
                                    id="father"
                                    defaultValue="1"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="onboarding-btn">
                    <Link to="/pages/patient-dependant-details">Continue</Link>
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

export default PatientFamilyDetails;
