import React from "react";
// import Header from "../../header";
import { Link } from "react-router-dom";
import { googleicon, shape01, shape02 } from "./img";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import AuthenticationHeader from "../../authiticationHeader";

const LoginPhoneOtp = () => {
  const config = "/react/template";
  return (
    <>
      {/* <Header {...props} /> */}
      <AuthenticationHeader />
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
                      <Link to="/pages/login-phone">
                        <i className="fa-solid fa-arrow-left-long" /> Back
                      </Link>
                    </div>
                    <div className="login-title">
                      <h3>Sign in</h3>
                      <p>Well send a confirmation code to your Phone.</p>
                      <span>
                        Sign in with <Link to="/pages/login-email">Email</Link>
                      </span>
                    </div>
                    <form action={`${config}/pages/motp`}>
                      <div className="form-group">
                        <label>Phone Number</label>
                        {/* <input
                          className="form-control form-control-lg group_formcontrol form-control-phone"
                          id="phone"
                          name="phone"
                          type="text"
                        /> */}
                        <PhoneInput
                          containerClassName="intl-tel-input"
                          inputClassName="form-control form-control-lg group_formcontrol form-control-phone"
                          name="phone"
                        />
                      </div>
                      <div className="form-group form-check-box">
                        <div className="form-group-flex">
                          <label className="custom_check d-inline-flex">
                            {" "}
                            Remember Me
                            <input
                              type="checkbox"
                              name="login"
                              defaultChecked="true"
                            />
                            <span className="checkmark" />
                          </label>
                          <label className="custom_check d-inline-flex">
                            {" "}
                            Login with OTP
                            <input
                              type="checkbox"
                              name="login"
                              defaultChecked="true"
                            />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-block" type="submit">
                          Sign in
                        </button>
                      </div>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="social-login-btn">
                        <Link to="#" className="btn btn-block">
                          <img src={googleicon} alt="" /> Log in with Google
                        </Link>
                      </div>
                      <div className="account-signup">
                        <p>
                          Dont have an account ?{" "}
                          <Link to="/pages/signup">Sign up</Link>
                        </p>
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

export default LoginPhoneOtp;
