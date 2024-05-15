/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Header from "../../header";
// import Footer from "../../footer";
import { onelogo, oneslide } from "./img";
import Select from "react-select";
// import { faGalacticSenate } from "@fortawesome/free-brands-svg-icons";
import OnboardingSidebar from "../doctoronboarding/onboardingsidebar";

const Weight = [
  { label: "KG", value: "KG" },
  { label: "LBS", value: "LBS" },
];

const Height = [
  { label: "CM", value: "CM" },
  { label: "FEET", value: "FEET" },
  { label: "INCH", value: "INCH" },
];

const Blood = [
  { label: "O +ve", value: "O +ve" },
  { label: "O -ve", value: "O -ve" },
  { label: "B +ve", value: "B +ve" },
  { label: "B -ve", value: "B -ve" },
];

const Month = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
];

const OnboardingDetails = (props) => {
  const [pregnant, setPregnant] = useState(false);

  function handleCheckbox(value) {
    if (value === true) setPregnant(true);
    else setPregnant(false);
  }

  const [input, setInput] = useState({
    weight: false,
    height: false,
    age: false,
    heartRate: false,
    bloodPressure: false,
    glucose: false,
    allergies: false,
  });

  const handleInput = (value) => {
    if (value === "weight") setInput({ ...input, weight: !input.weight });
    if (value === "height") setInput({ ...input, height: !input.height });
    if (value === "age") setInput({ ...input, age: !input.age });
    if (value === "heartRate")
      setInput({ ...input, heartRate: !input.heartRate });
    if (value === "bloodPressure")
      setInput({ ...input, bloodPressure: !input.bloodPressure });
    if (value === "glucose") setInput({ ...input, glucose: !input.glucose });
    if (value === "allergies")
      setInput({ ...input, allergies: !input.allergies });
  };

  const PregnantStyles = {
    menu: (provided, state) => ({
      ...provided,
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
      height: "40px",
      borderRadius: 4,
    }),
    placeholder: () => ({
      paddingLeft: "10px",
    }),
    dropdownIndicator: () => ({
      paddingRight: "10px",
    }),
    singleValue: () => ({
      paddingLeft: "10px",
    }),
  };

  const BloodStyles = {
    menu: (provided, state) => ({
      ...provided,
      paddingBottom: 20,
      background: state.isFocused && "#fff",
      zIndex: 1,
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
      height: "40px",
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
      paddingLeft: "10px",
    }),
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
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
      width: "60px",
      marginTop: "15px",
      paddingLeft: "10px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    dropdownIndicator: () => ({
      marginBottom: "50px",
      paddingRight: "10px",
    }),
    singleValue: () => ({
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "70px",
      marginTop: "15px",
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
                      <Link to="/pages/patient-email">
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
                      <Link to="/pages/patient-personalize">
                        <div className="onboarding-progress active">
                          <span>2</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Profile Picture</h6>
                          <p>Upload Profile picture</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-details">
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
                      <Link to="/pages/patient-family-details">
                        <div className="onboarding-progress">
                          <span>4</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Select Members</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-dependant-details">
                        <div className="onboarding-progress">
                          <span>5</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Dependant details</h6>
                          <p>Dependants Profile</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-other-details">
                        <div className="onboarding-progress">
                          <span>6</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Other Detail</h6>
                          <p>More information</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="onboarding-content-box content-wrap">
                  <div className="onboarding-title">
                    <h2>
                      What are your personal details? <span>*</span>
                    </h2>
                    <h6>Please provide your personal information</h6>
                  </div>
                  <div className="patient-details-form">
                    <div className="login-header">
                      <form id="personal_details" encType="multipart/form-data">
                        <div className="form-group">
                          <div className="row select-gender-option">
                            <div className="col-6">
                              <div className="option-set">
                                <input
                                  type="radio"
                                  id="test1"
                                  name="gender"
                                  defaultValue="Male"
                                />
                                <label htmlFor="test1">
                                  <span>
                                    <i className="fas fa-mars"></i> Male
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="col-6 ">
                              <input
                                type="radio"
                                id="test2"
                                name="gender"
                                defaultValue="Female"
                              />
                              <label htmlFor="test2">
                                <span>
                                  <i className="fas fa-venus"></i> Female
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-9">
                            <div className="form-group">
                              <div
                                onClick={() => handleInput("weight")}
                                className={` input-placeholder form-focus passcode-wrap mail-box ${
                                  input.weight
                                    ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                    : ""
                                }`}
                              >
                                <label className="focus-label">
                                  Your Weight<span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control floating"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="form-group">
                              <div className="passcode-wrap input-placeholder form-focus">
                                <Select
                                  styles={customStyles}
                                  options={Weight}
                                  placeholder="KG"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <div className="form-group">
                              <div
                                onClick={() => handleInput("height")}
                                className={` input-placeholder form-focus passcode-wrap mail-box ${
                                  input.height
                                    ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                    : ""
                                }`}
                              >
                                <label className="focus-label">
                                  Your Height<span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control floating"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="form-group">
                              <div className="passcode-wrap input-placeholder form-focus">
                                <Select
                                  styles={customStyles}
                                  options={Height}
                                  placeholder="CM"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div
                                onClick={() => handleInput("age")}
                                className={` input-placeholder form-focus passcode-wrap mail-box ${
                                  input.age
                                    ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                    : ""
                                }`}
                              >
                                <label className="focus-label">
                                  Age<span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control floating"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div className="passcode-wrap input-placeholder form-focus">
                                <Select
                                  styles={BloodStyles}
                                  options={Blood}
                                  placeholder="Blood Type"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div
                                onClick={() => handleInput("heartRate")}
                                className={` input-placeholder form-focus passcode-wrap mail-box ${
                                  input.heartRate
                                    ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                    : ""
                                }`}
                              >
                                <label className="focus-label">
                                  Heart Rate<span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control floating"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div
                                onClick={() => handleInput("bloodPressure")}
                                className={` input-placeholder form-focus passcode-wrap mail-box ${
                                  input.bloodPressure
                                    ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                    : ""
                                }`}
                              >
                                <label className="focus-label">
                                  Blood Pressure <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control floating"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div
                                onClick={() => handleInput("glucose")}
                                className={` input-placeholder form-focus passcode-wrap mail-box ${
                                  input.glucose
                                    ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                    : ""
                                }`}
                              >
                                <label className="focus-label">
                                  Glucose Level <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control floating"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div
                                onClick={() => handleInput("allergies")}
                                className={` input-placeholder form-focus passcode-wrap mail-box ${
                                  input.allergies
                                    ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                    : ""
                                }`}
                              >
                                <label className="focus-label">
                                  Allergies <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control floating"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <div className="pregnant-col pregnant-check pt-4">
                                <div className="checklist-col">
                                  <div className="remember-me-col d-flex justify-content-between align-items-center">
                                    <span className="mt-1">
                                      Are you Pregnant
                                    </span>
                                    <label className="custom_check">
                                      <input
                                        type="checkbox"
                                        className=""
                                        id="is_registered"
                                        name="pregnant"
                                        value="1"
                                        onChange={(e) =>
                                          handleCheckbox(e.target.checked)
                                        }
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {pregnant && (
                                <div className="step-process-col mt-4">
                                  <div className="form-group" id="preg_div">
                                    <Select
                                      styles={PregnantStyles}
                                      options={Month}
                                      placeholder="Select Month"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <div className="checklist-col">
                                  <div className="remember-me-col d-flex justify-content-between align-items-center">
                                    <span className="mt-1">
                                      Do you have any pre-exisiting conditions?
                                    </span>
                                    <label className="custom_check">
                                      <input
                                        type="checkbox"
                                        className=""
                                        name="cancer"
                                        id="cancer"
                                        defaultValue="1"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </div>
                                  <div
                                    className="remember-me-col"
                                    id="cancer_div"
                                    style={{ display: "none" }}
                                  >
                                    <div className="condition_input">
                                      <input
                                        type="text"
                                        id="conditions"
                                        name="conditions[]"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </div>
                                    <Link to="#" className="add_condition">
                                      <i className="fa fa-plus"></i>
                                    </Link>
                                  </div>
                                  <div className="remember-me-col d-flex justify-content-between align-items-center">
                                    <span className="mt-1">
                                      Are you currently taking any medication
                                    </span>
                                    <label className="custom_check">
                                      <input
                                        type="checkbox"
                                        className=""
                                        name="medicine"
                                        id="medicine"
                                        defaultValue="1"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </div>
                                  <div
                                    className="remember-me-col"
                                    id="medicine_div"
                                    style={{ display: "none" }}
                                  >
                                    <div className="medicine_input">
                                      <input
                                        type="text"
                                        id="medicine_name"
                                        name="medicine_name[]"
                                        defaultValue=""
                                        className="form-control"
                                        placeholder="Enter medicine_name"
                                      />
                                      <input
                                        type="text"
                                        defaultValue=""
                                        id="dosage"
                                        name="dosage[]"
                                        className="form-control"
                                        placeholder="Enter dosage"
                                      />
                                    </div>
                                    <Link to="#" className="add_medicine">
                                      <i className="fa fa-plus"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="onboarding-btn">
                    <Link to="/pages/patient-family-details">Continue</Link>
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

export default OnboardingDetails;
