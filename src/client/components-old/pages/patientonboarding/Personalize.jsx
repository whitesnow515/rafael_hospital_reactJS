import React from "react";
import { Link } from "react-router-dom";
// import Header from "../../header";
// import Footer from "../../footer";
import { onelogo, oneslide, up_cam } from "./img";
import OnboardingSidebar from "../doctoronboarding/onboardingsidebar";

const OnboardingPersonalize = () => {
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
                      <Link to="/pages/patient-family-details">
                        <div className="onboarding-progress">
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
                <div className="onboarding-content-box">
                  <div className="onboarding-title profile-title">
                    <h2>Upload Profile Picture</h2>
                    <h6>Add a profile photo</h6>
                  </div>
                  <div className="onboarding-content passcode-wrap mail-box">
                    <div className="onboarding-contents">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group onboarding-contents">
                            <div className="upload-pic patient-photo-upload">
                              <img src={up_cam} alt="img" id="blah" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="upload-patient-pic">
                            <div className="upload-patient-btn">
                              <Link className="pic-upload-btn">
                                <i className="fas fa-upload me-2"></i>Upload
                                images
                              </Link>
                              <input type="file" id="imgInp" />
                            </div>
                            <div>
                              <Link className="pic-upload-btn">
                                <i className="fas fa-camera me-2"></i>Take a
                                photo
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="uploads-report">
                            <Link to="#" className="text-success">
                              <i className="fas fa-check-double me-2"></i>
                              Uploaded Successfully
                            </Link>
                            <Link to="#" className="text-danger">
                              <i className="far fa-times-circle me-2"></i>Upload
                              Failed
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="onboarding-btn Personalize-btn">
                      <Link to="/pages/patient-details">Continue</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer {...props}/> */}
    </>
  );
};

export default OnboardingPersonalize;
