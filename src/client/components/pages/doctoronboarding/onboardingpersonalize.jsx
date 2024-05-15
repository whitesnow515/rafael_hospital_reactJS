/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
import { onelogo, oneslide, edit, up_img } from "./img";
import DatePicker from "react-datepicker";
import Select from "react-select";
import OnboardingSidebar from "./onboardingsidebar";

const Gender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const State = [
  { label: "Washington", value: "Washington" },
  { label: "Florida", value: "Florida" },
  { label: "Alaska", value: "Alaska" },
];

const onboardingpersonalize = (props) => {
  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      //   paddingTop: 20,
      paddingBottom: 20,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#fff" : "#F5F6FA",
      height: "50px",
      borderRadius: 4,
      border: 0,
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      outline: state.isFocused && "none",
    }),
    container: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "0.5px solid #F5F6FA " : 0,
      height: "50px",
      borderRadius: 4,
    }),
    placeholder: () => ({
      marginBottom: "20px",
      paddingLeft: "10px",
    }),
    dropdownIndicator: () => ({
      marginBottom: "20px",
      paddingRight: "10px",
    }),
    input: () => ({
      marginBottom: "20px",
    }),
    singleValue: () => ({
      marginBottom: "20px",
    }),
  };

  return (
    <>
      <div className="onboard-wrapper">
        <div className="left-panel">
          <div className="onboarding-logo text-center">
            <Link to="/index">
              <img src={onelogo} className="img-fluid" alt="" />
            </Link>
          </div>
          <div className="onboard-img">
            <img src={oneslide} className="img-fluid" alt="" />
          </div>
          <OnboardingSidebar></OnboardingSidebar>
        </div>
        <div className="right-panel">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-0">
                <div className="right-panel-title text-center">
                  <Link to="/index">
                    {" "}
                    <img src={onelogo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="on-board-wizard">
                  <ul>
                    <li>
                      <Link to="/pages/onboarding-email">
                        <div className="onboarding-progress active">
                          <span>1</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Registration</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-identity">
                        <div className="onboarding-progress active">
                          <span>2</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Upload Identity</h6>
                          <p>Upload your Identity for Verification</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-personalize">
                        <div className="onboarding-progress active">
                          <span>3</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Personal Details</h6>
                          <p>Enter your Personal Details</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-verification">
                        <div className="onboarding-progress">
                          <span>4</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Doctor Verification</h6>
                          <p>Upload Documents for the Verification</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-payments">
                        <div className="onboarding-progress ">
                          <span>5</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Payment details</h6>
                          <p>Setup Your Payment Details</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/onboarding-preferences">
                        <div className="onboarding-progress ">
                          <span>6</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Preferences</h6>
                          <p>Setup Your Preferences for your Account</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="onboarding-content-box">
                  <div className="onboarding-title profile-title">
                    <h2>
                      Personalize Your Profile <span>*</span>
                    </h2>
                  </div>
                  <div className="onboarding-content passcode-wrap mail-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="upload-pic">
                            <img src={up_img} alt="img" id="blah" />
                            <div className="upload-pics">
                              <Link className="btn-profile">
                                <img src={edit} alt="" />
                              </Link>
                              <input type="file" id="imgInp" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="photo-norms">
                            <h5>
                              Logo Should be minimum 152 * 152 Supported File
                              format JPG,PNG,SVG
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Legal Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control placeholder-style"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Gender <span>*</span>
                          </label>
                          <Select
                            styles={customStyles}
                            options={Gender}
                            placeholder="Select Gender"
                          />
                          {/* <select className="select">
                            <option disabled="" selected="">
                              Select Gender
                            </option>
                            <option>male</option>
                            <option>female</option>
                          </select> */}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Date of Birth <span>*</span>
                          </label>
                          <DatePicker
                            selected={date}
                            placeholder="DD/MM/YYYY"
                            onChange={handleChange}
                            className="form-control placeholder-style datetimepicker"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Address<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Address"
                            className="form-control placeholder-style"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            City <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter City"
                            className="placeholder-style form-control"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            State<span>*</span>
                          </label>
                          <Select
                            styles={customStyles}
                            options={State}
                            placeholder="Select State"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            About you <span>*</span>
                          </label>
                          <textarea defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div className="onboarding-btn Personalize-btn">
                      <Link to="/pages/onboarding-verification">Continue</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default onboardingpersonalize;
