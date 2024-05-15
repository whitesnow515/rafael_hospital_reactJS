import React from "react";
import { Link } from "react-router-dom";
// import Header from "../../header";
import { googleicon, shape01, shape02 } from "./img";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import config from "config";
import AuthenticationHeader from "../../authiticationHeader";
const LoginEmailOtp = () => {
  const config = "/react/template";
  return (
    <>
      {/* <Header {...props} /> */}
      <AuthenticationHeader />
      <>
        {/* Page Content */}
        <div className="login-content-info">
          <div className="container">
            {/* Login Email Otp */}
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
                      <Link to="/pages/login-email">
                        <i className="fa-solid fa-arrow-left-long" /> Back
                      </Link>
                    </div>
                    <div className="login-title">
                      <h3>Sign in</h3>
                      <p>Well send a confirmation code to your email.</p>
                      <span>
                        Sign in with{" "}
                        <Link to="/pages/login-phone">Phone Number</Link>
                      </span>
                    </div>
                    <form action={`${config}/pages/eotp`}>
                      <div className="form-group">
                        <label>E-mail</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="example@email.com"
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
                          <Link to="/signup">Sign up</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login Email Otp */}
          </div>
        </div>
        {/* /Page Content */}
      </>
    </>
  );
};

export default LoginEmailOtp;
