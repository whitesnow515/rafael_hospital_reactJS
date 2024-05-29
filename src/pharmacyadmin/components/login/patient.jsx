import React from "react";
import { logowhite } from "../imagepath";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const PharmacyLogin = () => {
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
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  {/* Form */}
                  <form action="/pharmacyadmin">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary w-100" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center forgotpass">
                    <Link to="/pharmacyadmin/forgotPassword">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Login with</span>
                    <Link to="#" className="facebook">
                      <i>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </i>
                    </Link>
                    <Link to="#" className="google">
                      <i>
                        <FontAwesomeIcon icon={faGoogle} />
                      </i>
                    </Link>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">
                    Don’t have an account?{" "}
                    <Link to="/pharmacyadmin/register">Register</Link>
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

export default PharmacyLogin;
