import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import camera from "../../assets/images/icons/camera.svg";

import { Link } from "react-router-dom";

const Pharmacyregisterstepthree = () => {
  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  return (
    <>
      {/* <!-- Page Content --> */}
      <div className="content login-page pt-0">
        <div className="container-fluid">
          {/* <!-- Register Content --> */}
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
                      </ul>
                    </div>
                    <form id="personal_details" encType="multipart/form-data">
                      <div className="pregnant-col pt-4">
                        <div>
                          <div className="remember-me-col d-flex justify-content-between">
                            <span className="mt-1">Are you Registered</span>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                className=""
                                id="is_registered"
                                name="pregnant"
                                defaultValue="1"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="step-process-col mt-4">
                        <div
                          className="form-group"
                          id="preg_div"
                          style={{ display: "none" }}
                        >
                          <label>
                            How Many Years you have been Registered?
                          </label>
                          <select
                            className="form-select form-control"
                            id="preg_term"
                            name="preg_term"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <option defaultValue="">
                              Tell us Many Years you have been Registered
                            </option>
                            <option defaultValue="1">1</option>
                            <option defaultValue="2">2</option>
                            <option defaultValue="3">3</option>
                            <option defaultValue="4">4</option>
                            <option defaultValue="5">5</option>
                            <option defaultValue="6">6</option>
                            <option defaultValue="7">7</option>
                            <option defaultValue="8">8</option>
                            <option defaultValue="9">9</option>
                            <option defaultValue="10">10</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Address line 1</label>
                          <input
                            type="text"
                            placeholder="Address line 1"
                            className="form-control"
                            id="address1"
                            defaultValue=""
                            name="address1"
                          />
                        </div>
                        <div className="form-group">
                          <label>Address line 2</label>
                          <input
                            type="text"
                            placeholder="Address line 2"
                            className="form-control"
                            id="address2"
                            defaultValue=""
                            name="address2"
                          />
                        </div>
                        <div className="form-group">
                          <label>Postal/Zip code</label>
                          <input
                            type="text"
                            placeholder="Postal/Zip code"
                            className="form-control"
                            id="postal"
                            defaultValue=""
                            name="postal"
                          />
                        </div>
                        <div className="form-group">
                          <label>Certification and Employer</label>
                          <div className="row justify-content-center">
                            <div className="profile-pic-upload d-flex flex-wrap  justify-content-center">
                              <div className="cam-col">
                                <img src={camera} alt="" />
                              </div>
                              <span className="text-center">
                                Upload Rigth To sell Certigifcate
                              </span>
                              <input
                                type="file"
                                id="right_to_sell"
                                name="right_to_sell"
                              />
                            </div>
                            <div className="profile-pic-upload d-flex flex-wrap  justify-content-center">
                              <div className="cam-col">
                                <img src={camera} alt="" />
                              </div>
                              <span className="text-center">
                                Upload Photo ID
                              </span>
                              <input
                                type="file"
                                id="photo_id"
                                name="photo_id"
                              />
                            </div>
                            <div className="profile-pic-upload d-flex flex-wrap  justify-content-center">
                              <div className="cam-col">
                                <img src={camera} alt="" />
                              </div>
                              <span className="text-center">
                                Upload Clinical employment
                              </span>
                              <input
                                type="file"
                                id="c_employment"
                                name="c_employment"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="checklist-col pregnant-col">
                          <div className="remember-me-col d-flex justify-content-between">
                            <span className="mt-1">Do you Deliver?</span>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                className=""
                                name="deliver"
                                id="deliver"
                                defaultValue="1"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <div className="remember-me-col d-flex justify-content-between">
                            <span className="mt-1">
                              Do you Offer appoinment?
                            </span>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                className=""
                                name="appoinment"
                                id="appoinment"
                                defaultValue="1"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <div className="remember-me-col d-flex justify-content-between">
                            <span className="mt-1">
                              Do you honour free prescription?
                            </span>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                className=""
                                name="prescription"
                                id="prescription"
                                defaultValue="1"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <Link
                          to="/Pharmacy/Pharmacy-index"
                          className="btn btn-primary w-100 btn-lg login-btn step2_submit"
                          id="step2_button"
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
          {/* <!-- /Register Content --> */}
        </div>
      </div>
      {/* <!-- /Page Content --> */}
    </>
  );
};

export default Pharmacyregisterstepthree;
