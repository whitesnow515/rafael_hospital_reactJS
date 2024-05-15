import React from "react";
// import loginBanner from '../../assets/images/login-banner.png';
import Logo from "../../assets/images/logo.png";
import camera from "../../assets/images/icons/camera.svg";
import { Link } from "react-router-dom";

const Patientregisterstepone = () => {
  return (
    <>
      <>
        {/* Page Content */}
        <div className="content login-page pt-0">
          <div className="container-fluid">
            {/* Register Content */}
            <div className="account-content">
              <div className="row align-items-center">
                <div className="login-right">
                  <div className="inner-right-login">
                    <div className="login-header">
                      <div className="logo-icon">
                        <img src={Logo} alt="" />
                      </div>
                      <div className="step-list">
                        <ul>
                          <li>
                            <Link to="#" className="active">
                              1
                            </Link>
                          </li>
                          <li>
                            <Link to="#">2</Link>
                          </li>
                          <li>
                            <Link to="#">3</Link>
                          </li>
                          <li>
                            <Link to="#">4</Link>
                          </li>
                          <li>
                            <Link to="#">5</Link>
                          </li>
                        </ul>
                      </div>
                      <form id="profile_pic_form" encType="multipart/form-data">
                        <div className="profile-pic-col">
                          <h3>Profile Picture</h3>
                          <div className="profile-pic-upload">
                            <div className="cam-col">
                              <img
                                src={camera}
                                id="prof-avatar"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <span>Upload Profile Picture</span>
                            <input
                              type="file"
                              id="profile_image"
                              name="profile_image"
                            />
                          </div>
                        </div>
                        <div className="mt-5">
                          <Link
                            to="/patient/patientregisterstep-2"
                            className="btn btn-primary w-100 btn-lg login-btn step1_submit"
                          >
                            continue{" "}
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="login-bottom-copyright">
                    <span>© 2022 Doccure. All rights reserved.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /Register Content */}
          </div>
        </div>
        {/* /Page Content */}
      </>
    </>
  );
};

export default Patientregisterstepone;
