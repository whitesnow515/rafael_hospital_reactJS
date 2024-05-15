import React from "react";
// import loginBanner from '../../assets/images/login-banner.png';
import Logo from "../../assets/images/logo.png";
// import camera from '../../assets/images/icons/camera.svg';
// import male from '../../assets/images/icons/male.png'
// import female from '../../assets/images/icons/female.png'

import { Link } from "react-router-dom";

const Patientregisterstepfour = () => {
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
                            <Link to="#" className="active-done">
                              1
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="active-done">
                              2
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="active-done">
                              3
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="active">
                              4
                            </Link>
                          </li>
                          <li>
                            <Link to="#">5</Link>
                          </li>
                        </ul>
                      </div>
                      <form method="post" id="famil_age">
                        <div className="text-start mt-2">
                          <p>Add age of the each members</p>
                          <h4 className="mt-3">Age</h4>
                        </div>
                        <div className="step-process-col mt-4">
                          <div className="form-group">
                            <label>Child_1 Age</label>
                            <input
                              type="text"
                              className="form-control"
                              id="Child_1_age"
                              name="Child_1_age"
                            />
                          </div>
                          <div className="form-group">
                            <label>Child_1 Image</label>
                            <input
                              type="file"
                              className="form-control"
                              id="Child_1_image"
                              name="Child_1_image"
                            />
                          </div>
                          <div className="form-group">
                            <label>Spouse Age</label>
                            <input
                              type="text"
                              className="form-control"
                              id="spouse_age"
                              name="spouse_age"
                            />
                          </div>
                          <div className="form-group">
                            <label>Spouse Image</label>
                            <input
                              type="file"
                              className="form-control"
                              id="spouse_file"
                              name="spouse_file"
                            />
                          </div>
                          <div className="form-group">
                            <label>Father</label>
                            <input
                              type="text"
                              className="form-control"
                              id="father_age"
                              name="father_age"
                            />
                          </div>
                          <div className="form-group">
                            <label>Father Image</label>
                            <input
                              type="file"
                              className="form-control"
                              id="father_file"
                              name="father_file"
                            />
                          </div>
                          <div className="form-group">
                            <label>Mother</label>
                            <input
                              type="text"
                              className="form-control"
                              id="mother_age"
                              name="mother_age"
                            />
                          </div>
                          <div className="form-group">
                            <label>Mother Image</label>
                            <input
                              type="file"
                              className="form-control"
                              id="mother_file"
                              name="mother_file"
                            />
                          </div>
                        </div>
                        <div className="mt-5">
                          <Link
                            to="/patient/patientregisterstep-5"
                            className="btn btn-primary w-100 btn-lg login-btn step4_submit"
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

export default Patientregisterstepfour;
