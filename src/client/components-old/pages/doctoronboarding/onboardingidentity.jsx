import React from "react";
import { Link } from "react-router-dom";
// import Header from "../../header";
// import Footer from "../../footer";
// import FeatherIcon from "feather-icons-react";
import { onelogo, oneslide, file, success_tick } from "./img";
import Select from "react-select";
import OnboardingSidebar from "./onboardingsidebar";

const options = [
  { value: " Select Document Type", label: " Select Document Type" },
  { value: "PDF", label: "PDF" },
  { value: "TXT", label: "TXT" },
  { value: "JPEC", label: "JPEC" },
];

const OnboardingIdentity = () => {
  // const [select, setSelect] = useState(false);

  const customStyles = {
    menu: (provided) => ({
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
                        <div className="onboarding-progress">
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
                        <div className="onboarding-progress">
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
                        <div className="onboarding-progress">
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
                  <div className="onboarding-title">
                    <h2>
                      Upload identification<span>*</span>
                    </h2>
                    <h6>
                      We need to determine if an identity document is authentic
                      and belongs to you. You just need to go through some steps
                      which will help us to build a secure system together
                    </h6>
                  </div>
                  <div className="onboarding-content passcode-wrap mail-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <Select
                            styles={customStyles}
                            options={options}
                            placeholder="Select Document Type"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Document Number"
                            className="form-control placeholder-style"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="call-option file-option ">
                            <input
                              type="file"
                              id="radio1"
                              name="selector"
                              className="option-radio"
                            />
                            <label
                              htmlFor="radio1"
                              className="call-lable verify-lable verify-file"
                            >
                              {" "}
                              <img src={file} alt="" />
                              Upload Document
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="onboarding-btn Personalize-btn">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#id-verified"
                    >
                      Continue
                    </Link>
                  </div>
                  {/* Modal */}
                  <div
                    className="modal fade fade-custom"
                    id="id-verified"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog id-upload modal-dialog-centered">
                      <div className="modal-content id-pop-content">
                        <div className="modal-header id-pop-header justify-content-center">
                          <img src={success_tick} alt="" />
                        </div>
                        <div className="modal-body id-pop-body text-center">
                          <h2>Your ID uploaded Successfully</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        <div className="modal-footer id-pop-footer text-center">
                          <div
                            className="onboarding-btn pop-btn"
                            onClick={() => window.location.reload()}
                          >
                            <Link to="/pages/onboarding-personalize">
                              Continue
                            </Link>
                          </div>
                        </div>
                      </div>
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

export default OnboardingIdentity;
