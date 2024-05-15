/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import { mobileicon, shape01, shape02 } from "./img";

const MobileOtp = (props) => {
  return (
    <>
      <Header {...props} />
      <>
        {/* Page Content */}
        <div className="login-content-info">
          <div className="container">
            {/* Login Phone Otp */}
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
                  <div className="account-info">
                    <div className="login-back">
                      <Link to="/pages/phone-otp">
                        <i className="fa-solid fa-arrow-left-long" /> Back
                      </Link>
                    </div>
                    <div className="login-verify-img">
                      <img src={mobileicon} alt="" />
                    </div>
                    <div className="login-title">
                      <h3>Phone OTP Verification</h3>
                      <p className="mb-0">
                        OTP sent to your mobile number ending{" "}
                        <strong>******9575</strong>
                      </p>
                    </div>
                    <form
                      method="get"
                      className="digit-group login-form-control"
                      data-group-name="digits"
                      data-autosubmit="false"
                      autoComplete="off"
                      action="/doctor/doctor-dashboard"
                    >
                      <div className="otp-box">
                        <div className="form-group">
                          <input
                            type="text"
                            id="digit-1"
                            name="digit-1"
                            data-next="digit-2"
                            maxLength={1}
                          />
                          <input
                            type="text"
                            id="digit-2"
                            name="digit-2"
                            data-next="digit-3"
                            data-previous="digit-1"
                            maxLength={1}
                          />
                          <input
                            type="text"
                            id="digit-3"
                            name="digit-3"
                            data-next="digit-4"
                            data-previous="digit-2"
                            maxLength={1}
                          />
                          <input
                            type="text"
                            id="digit-4"
                            name="digit-4"
                            data-next="digit-5"
                            data-previous="digit-3"
                            maxLength={1}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="otp-info">
                          <div className="otp-code">
                            <p>Didn't receive OTP code?</p>
                            <Link to="#">Resend Code</Link>
                          </div>
                          <div className="otp-sec">
                            <p>
                              <i className="feather-clock" /> 00:25 secs
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="reset-btn">
                        <button className="btn btn-block" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login Phone Otp */}
          </div>
        </div>
        {/* /Page Content */}
      </>
    </>
  );
};

export default MobileOtp;
