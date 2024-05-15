import React from "react";
import Header from "../../header";
import { Link } from "react-router-dom";
import { shape01, shape02 } from "./img";

const SuccessSignup = (props) => {
  const config = "/react/template";
  return (
    <>
      <Header {...props} />
      <>
        {/* Page Content */}
        <div className="login-content-info">
          <div className="container">
            {/* Signup Success */}
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
                    <div className="login-success-icon">
                      <i className="fas fa-circle-check" />
                    </div>
                    <div className="login-title">
                      <h3>Success</h3>
                      <p className="mb-0">
                        Your new password has been Successfully saved
                      </p>
                    </div>
                    <form action={`${config}/pages/login-email`}>
                      <div className="form-group mb-0">
                        <button className="btn btn-block" type="submit">
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Signup Success */}
          </div>
        </div>
        {/* /Page Content */}
      </>
    </>
  );
};

export default SuccessSignup;
