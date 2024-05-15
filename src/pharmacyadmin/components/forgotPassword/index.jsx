import React from "react";
import { logowhite } from "../imagepath";
import { Link } from "react-router-dom";

const ParmacyForgotPassword = () => {
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={logowhite} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Forgot Password?</h1>
                  <p className="account-subtitle">
                    Enter your email to get a password reset link
                  </p>
                  {/* Form */}
                  <form action="/pharmacyadmin/pharmacyLogin">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-0">
                      <button className="btn btn-primary w-100" type="submit">
                        Reset Password
                      </button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center dont-have">
                    Remember your password?{" "}
                    <Link to="/pharmacyadmin/pharmacyLogin">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};
export default ParmacyForgotPassword;
