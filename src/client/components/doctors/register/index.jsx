import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import loginBanner from "../../../assets/images/login-banner.png";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";

const DoctorRegister = (props) => {
  const config = "/react/template";
  // const history = useHistory();
  useEffect(() => {
    document.getElementsByTagName("body")[0].className = "account-page";

    return () => (document.getElementsByTagName("body")[0].className = "");
  });

  return (
    <>
      <Header {...props} />
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Login Banner"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Doctor Register{" "}
                        <Link to="/register">Not a Doctor?</Link>
                      </h3>
                    </div>

                    <form action={`${config}/registerstepone`}>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
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
                        <Link to="/login" className="forgot-link">
                          Already have an account?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                        // onClick={() => history.push("/pages/onboarding-email")}
                      >
                        Signup
                      </button>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <Link to="#0" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1"></i> Login
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="#0" className="btn btn-google w-100">
                            <i className="fab fa-google me-1"></i> Login
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default DoctorRegister;
