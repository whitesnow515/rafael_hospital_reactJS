import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.png";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";

const Register = (props) => {
  // const history = useHistory();

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  return (
    <>
      <Header {...props} />

      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Register Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src={loginBanner}
                        className="img-fluid"
                        alt="Doccure Register"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Patient Register{" "}
                          <Link to="/doctor/doctor-register">
                            Are you a Doctor?
                          </Link>
                        </h3>
                      </div>
                      {/* Register Form */}
                      <form>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                          />
                          <label className="focus-label">Name</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                          />
                          <label className="focus-label">Mobile Number</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                          />
                          <label className="focus-label">Create Password</label>
                        </div>
                        <div className="text-end">
                          <Link className="forgot-link" to="/login">
                            Already have an account?
                          </Link>
                        </div>
                        <Link to="/patient/patientregisterstep-1"
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Signup
                        </Link>
                        <div className="login-or">
                          <span className="or-line" />
                          <span className="span-or">or</span>
                        </div>
                        <div className="row form-row social-login">
                          <div className="col-6">
                            <Link to="#" className="btn btn-facebook w-100">
                              <i className="fab fa-facebook-f me-1" /> Login
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link to="#" className="btn btn-google w-100">
                              <i className="fab fa-google me-1" /> Login
                            </Link>
                          </div>
                        </div>
                      </form>
                      {/* /Register Form */}
                    </div>
                  </div>
                </div>
                {/* /Register Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />
    </>
  );
};

export default Register;
