import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import camera from '../../assets/images/icons/camera.svg';
import male from '../../assets/images/icons/male.png';
import female from '../../assets/images/icons/female.png';

const DoctorRegister = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 5) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
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
                            <button
                                onClick={nextStep}
                                className="btn btn-primary w-100 btn-lg login-btn step1_submit"
                            >
                                continue{" "}
                            </button>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="text-start mt-2">
                            <h4 className="mt-3">Select Your Gender</h4>
                        </div>
                        <div className="select-gender-col">
                            <div className="row">
                                <div className="col-6 pe-0">
                                    <input
                                        type="radio"
                                        id="test1"
                                        name="gender"
                                        defaultChecked=""
                                        defaultValue="Male"
                                    />
                                    <label htmlFor="test1">
                                        <span className="gender-icon">
                                            <img src={male} alt="" />
                                        </span>
                                        <span>Male</span>
                                    </label>
                                </div>
                                <div className="col-6 ps-2">
                                    <input
                                        type="radio"
                                        id="test2"
                                        name="gender"
                                        defaultValue="Female"
                                    />
                                    <label htmlFor="test2">
                                        <span className="gender-icon">
                                            <img src={female} alt="" />
                                        </span>
                                        <span>Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="pregnant-col pt-4">
                            <div>
                                <div className="remember-me-col d-flex justify-content-between">
                                    <span className="mt-1">Are you Registered?</span>
                                    <label className="custom_check">
                                        <input
                                            type="checkbox"
                                            className=""
                                            id="is_registered"
                                            name="isregistered"
                                            defaultValue={1}
                                        />
                                        <span className="checkmark" />
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
                                    How many years have you been registered?
                                </label>
                                <select
                                    className="form-select form-control"
                                    id="register_years"
                                    name="register_years"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                >
                                    <option value="">
                                        Tell us how long you have been practicing
                                    </option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value="">7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value="10+">10+</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Registered Clinic address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    id="address"
                                />
                            </div>
                            <div className="form-group">
                                <label>Address 2</label>
                                <input
                                    type="text"
                                    name="address2"
                                    className="form-control"
                                    id="address2"
                                />
                            </div>
                            <div className="form-group">
                                <label>Pincode / Zipcoode</label>
                                <input
                                    type="text"
                                    name="zipcode"
                                    className="form-control"
                                    id="zipcode"
                                />
                            </div>
                            <div className="form-group">
                                <label>Certification and Employer</label>
                                <div className="row justify-content-center">
                                    {/* <div className="col-12 col-md-6 d-flex">
                            <div className="profile-pic-upload d-flex flex-wrap justify-content-center">
                              <div className="cam-col">
                                <img src={camera} alt="" />
                              </div>
                              <span className="text-center">
                                Upload Rigth To sell Certigifcate
                              </span>
                              <input
                                type="file"
                                id="quali_certificate"
                                name="quali_certificate"
                              />
                            </div>
                          </div> */}
                                    <div className="col-12 col-md-6 d-flex">
                                        <div className="profile-pic-upload d-flex flex-wrap justify-content-center">
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
                                    </div>
                                    <div className="col-12 col-md-6 d-flex">
                                        <div className="profile-pic-upload d-flex flex-wrap justify-content-center">
                                            <div className="cam-col">
                                                <img src={camera} alt="" />
                                            </div>
                                            <span className="text-center">
                                                Upload Clinical employment
                                            </span>
                                            <input
                                                type="file"
                                                id="clinical_employment"
                                                name="clinical_employment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Your Weight</label>
                                <div className="row">
                                    <div className="col-7 pe-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="weight"
                                            id="weight"
                                        />
                                    </div>
                                    <div className="col-5 ps-2">
                                        <select
                                            className="form-select form-control"
                                            id="weight_unit"
                                            name="weight_unit"
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <option value="kg">Kg</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Your Height</label>
                                <div className="row">
                                    <div className="col-7 pe-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="height"
                                        />
                                    </div>
                                    <div className="col-5 ps-2">
                                        <select
                                            className="form-select form-control"
                                            id="height_unit"
                                            name="height_unit"
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <option value="cm">cm</option>
                                            <option value="ft">ft</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Your Age</label>
                                <input
                                    type="text"
                                    name="age"
                                    className="form-control"
                                    id="age"
                                />
                            </div>
                            <div className="form-group">
                                <label>Blood Type</label>
                                <select
                                    className="form-select form-control"
                                    id="blood_group"
                                    name="blood_group"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                >
                                    <option value="">Select your blood group</option>
                                    <option value="A-">A-</option>
                                    <option value="A+">A+</option>
                                    <option value="B-">B-</option>
                                    <option value="B+">B+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="O-">O-</option>
                                    <option value="O+">O+</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button
                                onClick={nextStep}
                                className="btn btn-primary w-100 btn-lg login-btn step2_submit"
                            >
                                continue{" "}
                            </button>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <h3 className="my-4">Your Location</h3>
                        <div className="form-group">
                            <label>Select City</label>
                            <select
                                className="form-select form-control"
                                id="heart_rate"
                                name="heart_rate"
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <option value="">Select Your City</option>
                                <option value={1}>City 1</option>
                                <option value={2}>City 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Select State</label>
                            <select
                                className="form-select form-control"
                                id="bp"
                                name="bp"
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <option value="">Select Your State</option>
                                <option value={1}>State 1</option>
                                <option value={2}>State 2</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <button
                                onClick={() => { }}
                                className="btn btn-primary w-100 btn-lg login-btn step5_submit"
                            >
                                Continue{" "}
                            </button>
                        </div>
                    </>
                );

            default:
                return <div>Unknown step</div>;
        }
    };

    return (
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
                                                    <Link to="#" className={step > 1 ? "active-done" : "active"}>
                                                        1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className={step === 2 ? "active" : step > 2 ? "active-done" : ""}>
                                                        2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className={step === 3 ? "active" : step > 3 ? "active-done" : ""}>
                                                        3
                                                    </Link>
                                                </li>

                                            </ul>

                                        </div>
                                        {renderStep()}
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

    );
};

export default DoctorRegister;
