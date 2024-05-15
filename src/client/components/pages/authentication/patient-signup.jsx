import React from "react";
// import Header from "../../header";
import { Link } from "react-router-dom";
import { shape01, shape02 } from "./img";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import AuthenticationHeader from "../../authiticationHeader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PatientSignup = () => {
  const config = "/react/template";
  return (
    <>
      {/* <Header {...props} /> */}
      <AuthenticationHeader />
      <>
        {/* Page Content */}
        <div className="login-content-info">
          <div className="container">
            {/* Patient Signup */}
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
                      <Link to="/signup">
                        <i className="fa-solid fa-arrow-left-long" /> Back
                      </Link>
                    </div>
                    <div className="login-title">
                      <h3>Patient Signup</h3>
                      <p className="mb-0">
                        Welcome back! Please enter your details.
                      </p>
                    </div>
                    <form action={`${config}/success-signup`}>
                      <div
                        className="form-group d-flex"
                        style={{ flexDirection: "column" }}
                      >
                        <label>Phone Number</label>
                        <PhoneInput
                          containerClassName="intl-tel-input"
                          inputClassName="form-control form-control-lg group_formcontrol form-control-phone"
                          id="phone"
                          name="phone"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your First Name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Last Name"
                        />
                      </div>
                      <div className="form-group form-check-box terms-check-box">
                        <div className="form-group-flex">
                          <label className="custom_check">
                            I have read and agree to Doccure’s{" "}
                            <Link to="#">Terms of Service</Link> and{" "}
                            <Link to="#">Privacy Policy.</Link>
                            <input type="checkbox" name="Terms" />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-block" type="submit">
                          Register Now
                        </button>
                      </div>
                      <div className="form-group back-btn-light">
                        <button
                          className="btn btn-light btn-block"
                          type="submit"
                        >
                          Create an Account
                        </button>
                      </div>
                      <div className="account-signup">
                        <p>
                          Already a Member?{" "}
                          <Link to="/pages/login-email">Sign in</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Patient Signup */}
          </div>
        </div>
        {/* /Page Content */}
      </>
    </>
  );
};

export default PatientSignup;
