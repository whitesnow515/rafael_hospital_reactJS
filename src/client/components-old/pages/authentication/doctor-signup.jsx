import React, { useState } from "react";
// import Header from "../../header";
import { Link } from "react-router-dom";
import { shape01, shape02 } from "./img";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import AuthenticationHeader from "../../authiticationHeader";
import { signupUnlock, signupUsers } from "../../imagepath";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const DoctorSignup = () => {
  const [tab, setTab] = useState(true);
  const config = "/react/template";
  return (
    <>
      {/* <Header {...props} /> */}
      <AuthenticationHeader />
      <>
        {/* Page Content */}
        <div className="login-content-info">
          <div className="container">
            {/* Doctor Signup */}
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="account-content">
                  <div className="login-shapes">
                    <div className="shape-img-left">
                      <img src={shape01} alt="" />
                    </div>
                    <div className="shape-img-right">
                      <img src={shape02} alt="" />
                    </div>
                  </div>
                  <div className="widget-set">
                    <div className="account-info">
                      <div className="widget-content multistep-form">
                        <fieldset
                          id="first"
                          className={`${tab === true ? "d-block" : "d-none"}`}
                        >
                          <div className="login-back">
                            <Link to="/index">
                              <i className="fa-solid fa-arrow-left-long" /> Back
                            </Link>
                          </div>
                          <div className="login-title">
                            <h3>Doctor Signup</h3>
                            <p className="mb-0">
                              Welcome back! Please enter your details.
                            </p>
                          </div>
                          <div className="widget-setcount">
                            <ul id="progressbar">
                              <li className="progress-active">
                                <div className="step-box">
                                  <div className="step-icon">
                                    <span>
                                      <img src={signupUsers} alt="icon" />
                                    </span>
                                  </div>
                                  <div className="step-content">
                                    <p>Step 1</p>
                                    <h4>Create Account</h4>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="step-box">
                                  <div className="step-icon">
                                    <span>
                                      <img src={signupUnlock} alt="icon" />
                                    </span>
                                  </div>
                                  <div className="step-content">
                                    <p>Step 2</p>
                                    <h4>Verify Account</h4>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <form action="#">
                            <div className="form-group">
                              <label>Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                              />
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Email"
                              />
                            </div>
                            <div
                              className="form-group d-flex"
                              style={{ flexDirection: "column" }}
                            >
                              <label>Phone Number</label>

                              <PhoneInput
                                containerClassName="intl-tel-input"
                                inputClassName="form-control form-control-lg  group_formcontrol form-control-phone"
                                id="phone"
                                name="phone"
                                type="text"
                              />
                            </div>
                            <div className="form-group">
                              <label>Password</label>
                              <div className="pass-group">
                                <input
                                  type="password"
                                  className="form-control pass-input-sub"
                                  placeholder="*************"
                                />
                                <span className="feather-eye toggle-password-sub" />
                              </div>
                            </div>
                          </form>
                          <div className="widget-btn">
                            <Link
                              to="#"
                              className="btn btn-primary btn-block next_btn"
                              onClick={() => setTab(!tab)}
                            >
                              Next
                            </Link>
                          </div>
                        </fieldset>
                        <fieldset
                          className={`${
                            tab === false ? "field-card d-block" : "d-none"
                          }`}
                        >
                          <div className="login-back">
                            <Link
                              to="#"
                              className="prev_btn"
                              onClick={() => setTab(!tab)}
                            >
                              <i className="fa-solid fa-arrow-left-long" /> Back
                            </Link>
                          </div>
                          <div className="login-title">
                            <h3>Security Verification</h3>
                            <p className="mb-0">
                              To Secure your Account create complete the
                              following verify request.
                            </p>
                          </div>
                          <div className="widget-setcount">
                            <ul id="progressbar">
                              <li className="progress-active">
                                <div className="step-box">
                                  <div className="step-icon">
                                    <span>
                                      <img src={signupUsers} alt="icon" />
                                    </span>
                                  </div>
                                  <div className="step-content">
                                    <p>Step 1</p>
                                    <h4>Create Account</h4>
                                  </div>
                                </div>
                              </li>
                              <li className="progress-active">
                                <div className="step-box">
                                  <div className="step-icon">
                                    <span>
                                      <img src={signupUnlock} alt="icon" />
                                    </span>
                                  </div>
                                  <div className="step-content">
                                    <p>Step 2</p>
                                    <h4>Verify Account</h4>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <form
                            action={`${config}/success-signup`}
                            className="signup-verfication-form"
                          >
                            <div className="form-group">
                              <div className="form-group-flex">
                                <label>Phone Number Verfication Code</label>
                                <Link to="#" className="forgot-link">
                                  Get Code
                                </Link>
                              </div>
                              <div className="pass-group">
                                <input
                                  className="form-control form-control-lg group_formcontrol form-control-phone"
                                  id="phone-number"
                                  name="phone-number"
                                  type="text"
                                />
                              </div>
                              <p className="signup-code">
                                Enter the 6 digit code sent to 98****4578
                              </p>
                            </div>
                            <div className="form-group">
                              <div className="form-group-flex">
                                <label>Email Verfication Code</label>
                                <Link to="#" className="forgot-link">
                                  Get Code
                                </Link>
                              </div>
                              <div className="pass-group">
                                <input
                                  type="text"
                                  className="form-control form-control-phone"
                                  placeholder="example@gmail.com"
                                />
                              </div>
                              <p className="signup-code">
                                Enter the 6 digit code sent to ex****@gmail.com
                              </p>
                            </div>
                            <div className="form-group mb-0">
                              <button
                                className="btn btn-primary btn-block"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Signup */}
          </div>
        </div>
        {/* /Page Content */}
      </>
    </>
  );
};

export default DoctorSignup;
