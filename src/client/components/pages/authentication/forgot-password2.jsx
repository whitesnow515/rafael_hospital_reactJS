import React from "react";
import { Link } from "react-router-dom";
// import Header from "../../header";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { shape01, shape02 } from "./img";
// import config from "config";
import AuthenticationHeader from "../../authiticationHeader";

const ForgotPassword2 = () => {
  const config = "/react/template";
  return (
    <>
      {/* <Header {...props} /> */}
      <AuthenticationHeader />
      {/* Page Content */}
      <div className="login-content-info">
        <div className="container">
          {/* Forgot Password */}
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
                    <h3>Password Recovery</h3>
                    <p className="mb-0">
                      Enter your email and we will send you a link to reset your
                      password.
                    </p>
                  </div>
                  <form action={`${config}/pages/login-email`}>
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-block" type="submit">
                        Sign in
                      </button>
                    </div>
                    <div className="form-group back-btn-light mb-0">
                      <button className="btn btn-light btn-block" type="submit">
                        <i className="fa-solid fa-arrow-left" /> Back
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Forgot Password */}
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default ForgotPassword2;
