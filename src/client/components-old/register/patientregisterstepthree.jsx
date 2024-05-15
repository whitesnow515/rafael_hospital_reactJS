import React, { useState } from "react";
// import loginBanner from '../../assets/images/login-banner.png';
import Logo from "../../assets/images/logo.png";
// import camera from '../../assets/images/icons/camera.svg';
// import male from '../../assets/images/icons/male.png'
// import female from '../../assets/images/icons/female.png'

import { Link } from "react-router-dom";


const Patientregisterstepthree = () => {
  const [state, setState] = useState(0);

  const handleClickPlus = () => {
    setState(state + 1);
  };
  
  const handleClickMinus = () => {
    setState(state - 1);
  }

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
                            <Link to="#" className="active">
                              3
                            </Link>
                          </li>
                          <li>
                            <Link to="#">4</Link>
                          </li>
                          <li>
                            <Link to="#">5</Link>
                          </li>
                        </ul>
                      </div>
                      <form method="post">
                        <div className="text-start mt-2">
                          <p>Who all you want to cover in health insurance</p>
                          <h4 className="mt-3">Select Members</h4>
                        </div>
                        <div className="checklist-col pregnant-col">
                          <div className="remember-me-col d-flex justify-content-between">
                            <span className="mt-1">Self</span>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                className=""
                                name="self"
                                id="self"
                                defaultValue={1}
                                defaultChecked=""
                              />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <div className="remember-me-col d-flex justify-content-between">
                            <span className="mt-1">Spouse</span>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                className=""
                                name="spouse"
                                id="spouse"
                                defaultValue={1}
                              />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <div className="remember-me-col d-flex justify-content-between">
                            <span className="mt-1">Child</span>
                            <div className="increment-decrement">
                              <div className="input-groups">
                                <input
                                  type="button"
                                  defaultValue="-"
                                  id="subs"
                                  onClick={handleClickMinus}
                                  className="button-minus dec button"
                                />
                                <input
                                  type="text"
                                  name="child"
                                  id="child"
                                  value={state}
                                  className="quantity-field"
                                />
                                <input
                                  type="button"
                                  defaultValue="+"
                                  id="adds"

                                  onClick={handleClickPlus}
                                  className="button-plus inc button a1 a2 a3 a4 a0"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="remember-me-col d-flex justify-content-between">
                            <span className="mt-1">Mother</span>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                className=""
                                name="mother"
                                id="mother"
                                defaultValue={1}
                              />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <div className="remember-me-col d-flex justify-content-between">
                            <span className="mt-1">Father</span>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                className=""
                                name="father"
                                id="father"
                                defaultValue={1}
                              />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                        <div className="mt-5">
                          <Link
                            to="/patient/patientregisterstep-4"
                            className="btn btn-primary w-100 btn-lg login-btn step3_submit"
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

export default Patientregisterstepthree;
