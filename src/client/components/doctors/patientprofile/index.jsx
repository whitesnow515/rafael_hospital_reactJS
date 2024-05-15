import React, { useState } from "react";
import PatientSidebar from "../patienttsidebar";
import { Link } from "react-router-dom";
// import { Tab, Tabs, Modal } from "react-bootstrap";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
  IMG10,
} from "./img";
import Footer from "../../footer";
import StickyBox from "react-sticky-box";
import Header from "../../header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PatientProfile = (props) => {
  // const [ setsow] = useState();

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // const handleSelect = (key) => {
  //   setsow({ key });
  // };
  // const handleClose = () => {
  //   setsow({
  //     show: false,
  //   });
  // };

  // const handleShow = () => {
  //   setsow({
  //     show: true,
  //   });
  // };

  return (
    <div>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Profile</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <PatientSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="user-tabs">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="#pat_appointments"
                          data-bs-toggle="tab"
                        >
                          Appointments
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#pres"
                          data-bs-toggle="tab"
                        >
                          <span>Prescription</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#medical"
                          data-bs-toggle="tab"
                        >
                          <span className="med-records">Medical Records</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#billing"
                          data-bs-toggle="tab"
                        >
                          <span>Billing</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    {/* <!-- Appointment Tab --> */}
                    <div
                      id="pat_appointments"
                      className="tab-pane fade show active"
                    >
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Doctor</th>
                                  <th>Appt Date</th>
                                  <th>Booking Date</th>
                                  <th>Amount</th>
                                  <th>Follow Up</th>
                                  <th>Status</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    14 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      10.00 AM
                                    </span>
                                  </td>
                                  <td>12 Nov 2019</td>
                                  <td>$160</td>
                                  <td>16 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="far fa-edit"></i> Edit
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    12 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      8.00 PM
                                    </span>
                                  </td>
                                  <td>12 Nov 2019</td>
                                  <td>$250</td>
                                  <td>14 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="far fa-edit"></i> Edit
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    11 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      11.00 AM
                                    </span>
                                  </td>
                                  <td>10 Nov 2019</td>
                                  <td>$400</td>
                                  <td>13 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-danger-light">
                                      Cancelled
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="far fa-edit"></i> Edit
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    10 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      3.00 PM
                                    </span>
                                  </td>
                                  <td>10 Nov 2019</td>
                                  <td>$350</td>
                                  <td>12 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-warning-light">
                                      Pending
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="/editprescription"
                                        className="btn btn-sm bg-success-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="far fa-edit"></i> Edit
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="far fa-trash-alt"></i>{" "}
                                        Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    9 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      7.00 PM
                                    </span>
                                  </td>
                                  <td>8 Nov 2019</td>
                                  <td>$75</td>
                                  <td>11 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="far fa-edit"></i> Edit
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    8 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      9.00 AM
                                    </span>
                                  </td>
                                  <td>6 Nov 2019</td>
                                  <td>$175</td>
                                  <td>10 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-danger-light">
                                      Cancelled
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="far fa-edit"></i> Edit
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    8 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      6.00 PM
                                    </span>
                                  </td>
                                  <td>6 Nov 2019</td>
                                  <td>$450</td>
                                  <td>10 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="far fa-edit"></i> Edit
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    7 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      9.00 PM
                                    </span>
                                  </td>
                                  <td>7 Nov 2019</td>
                                  <td>$275</td>
                                  <td>9 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-info-light">
                                      Completed
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="far fa-clock"></i>{" "}
                                        Reschedule
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    6 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      8.00 PM
                                    </span>
                                  </td>
                                  <td>4 Nov 2019</td>
                                  <td>$600</td>
                                  <td>8 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-info-light">
                                      Completed
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="far fa-clock"></i>{" "}
                                        Reschedule
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>
                                    5 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      5.00 PM
                                    </span>
                                  </td>
                                  <td>1 Nov 2019</td>
                                  <td>$100</td>
                                  <td>7 Nov 2019</td>
                                  <td>
                                    <span className="badge rounded-pill bg-info-light">
                                      Completed
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="far fa-clock"></i>{" "}
                                        Reschedule
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /Appointment Tab -->
										
										<!-- Prescription Tab --> */}
                    <div className="tab-pane fade" id="pres">
                      <div className="text-end">
                        <Link to="/add-prescription" className="add-new-btn">
                          Add Prescription
                        </Link>
                      </div>
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Date </th>
                                  <th>Name</th>
                                  <th>Created by </th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>14 Nov 2019</td>
                                  <td>Prescription 1</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG01}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Ruby Perrin <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>13 Nov 2019</td>
                                  <td>Prescription 2</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                      <Link
                                        to="/editprescription"
                                        className="btn btn-sm bg-success-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-edit"></i> Edit
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-danger-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="far fa-trash-alt"></i>{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>12 Nov 2019</td>
                                  <td>Prescription 3</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG03}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Deborah Angel{" "}
                                        <span>Cardiology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>11 Nov 2019</td>
                                  <td>Prescription 4</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG04}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Sofia Brient <span>Urology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>10 Nov 2019</td>
                                  <td>Prescription 5</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG05}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Marvin Campbell <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>9 Nov 2019</td>
                                  <td>Prescription 6</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG06}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Katharine Berthold{" "}
                                        <span>Orthopaedics</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>8 Nov 2019</td>
                                  <td>Prescription 7</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG07}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Linda Tobin <span>Neurology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>7 Nov 2019</td>
                                  <td>Prescription 8</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG08}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Paul Richard{" "}
                                        <span>Dermatology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>6 Nov 2019</td>
                                  <td>Prescription 9</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG09}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. John Gibbs <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>5 Nov 2019</td>
                                  <td>Prescription 10</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG10}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Olga Barlow <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /Prescription Tab -->

										<!-- Medical Records Tab --> */}
                    <div className="tab-pane fade" id="medical">
                      <div className="text-end">
                        <Link
                          to="#"
                          className="add-new-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#add_medical_records"
                        >
                          Add Medical Records
                        </Link>
                      </div>
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Date </th>
                                  <th>Description</th>
                                  <th>Attachment</th>
                                  <th>Created</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0010</Link>
                                  </td>
                                  <td>14 Nov 2019</td>
                                  <td>Dental Filling</td>
                                  <td>
                                    <Link to="#">dental-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG01}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Ruby Perrin <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0009</Link>
                                  </td>
                                  <td>13 Nov 2019</td>
                                  <td>Teeth Cleaning</td>
                                  <td>
                                    <Link to="#">dental-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                      <Link
                                        to=""
                                        className="btn btn-sm bg-success-light"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_medical_records"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-edit"></i> Edit
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="far fa-trash-alt"></i>{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0008</Link>
                                  </td>
                                  <td>12 Nov 2019</td>
                                  <td>General Checkup</td>
                                  <td>
                                    <Link to="#">cardio-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG03}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Deborah Angel{" "}
                                        <span>Cardiology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0007</Link>
                                  </td>
                                  <td>11 Nov 2019</td>
                                  <td>General Test</td>
                                  <td>
                                    <Link to="#">general-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG04}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Sofia Brient <span>Urology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0006</Link>
                                  </td>
                                  <td>10 Nov 2019</td>
                                  <td>Eye Test</td>
                                  <td>
                                    <Link to="#">eye-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG05}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Marvin Campbell{" "}
                                        <span>Ophthalmology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0005</Link>
                                  </td>
                                  <td>9 Nov 2019</td>
                                  <td>Leg Pain</td>
                                  <td>
                                    <Link to="#">ortho-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG06}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Katharine Berthold{" "}
                                        <span>Orthopaedics</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0004</Link>
                                  </td>
                                  <td>8 Nov 2019</td>
                                  <td>Head pain</td>
                                  <td>
                                    <Link to="#">neuro-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG07}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Linda Tobin <span>Neurology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0003</Link>
                                  </td>
                                  <td>7 Nov 2019</td>
                                  <td>Skin Alergy</td>
                                  <td>
                                    <Link to="#">alergy-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG08}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Paul Richard{" "}
                                        <span>Dermatology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0002</Link>
                                  </td>
                                  <td>6 Nov 2019</td>
                                  <td>Dental Removing</td>
                                  <td>
                                    <Link to="#">dental-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG09}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. John Gibbs <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#">#MR-0001</Link>
                                  </td>
                                  <td>5 Nov 2019</td>
                                  <td>Dental Filling</td>
                                  <td>
                                    <Link to="#">dental-test.pdf</Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG10}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Olga Barlow <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /Medical Records Tab -->
										
										<!-- Billing Tab --> */}
                    <div className="tab-pane" id="billing">
                      <div className="text-end">
                        <Link className="add-new-btn" to="/add-billing">
                          Add Billing
                        </Link>
                      </div>
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Invoice No</th>
                                  <th>Doctor</th>
                                  <th>Amount</th>
                                  <th>Paid On</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0010
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG01}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Ruby Perrin <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$450</td>
                                  <td>14 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0009
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$300</td>
                                  <td>13 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                      <Link
                                        to="/editbilling"
                                        className="btn btn-sm bg-success-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-edit"></i> Edit
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="far fa-trash-alt"></i>{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0008
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG03}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Deborah Angel{" "}
                                        <span>Cardiology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$150</td>
                                  <td>12 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0007
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG04}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Sofia Brient <span>Urology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$50</td>
                                  <td>11 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0006
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG05}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Marvin Campbell{" "}
                                        <span>Ophthalmology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$600</td>
                                  <td>10 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0005
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG06}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Katharine Berthold{" "}
                                        <span>Orthopaedics</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$200</td>
                                  <td>9 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0004
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG07}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Linda Tobin <span>Neurology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$100</td>
                                  <td>8 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0003
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG08}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Paul Richard{" "}
                                        <span>Dermatology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$250</td>
                                  <td>7 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0002
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG09}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. John Gibbs <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$175</td>
                                  <td>6 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/pages/invoice-view">
                                      #INV-0001
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG10}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Olga Barlow <span>#0010</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$550</td>
                                  <td>5 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-primary-light"
                                        style={{ marginRight: "5px" }}
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Billing Tab --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade custom-modal" id="add_medical_records">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Medical Records</h3>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <label>Date</label>
                  {/* <input
                    type="text"
                    className="form-control datetimepicker"
                    defaultValue="31-10-2019"
                  /> */}
                  <DatePicker
                    className="form-control datetimepicker"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="31-10-2019"
                  />
                </div>
                <div className="form-group">
                  <label>Description ( Optional )</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Upload File</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary submit-btn"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer {...props} />

      {/* Add Medical Records Modal */}
      <div className="modal fade custom-modal" id="add_medical_records">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Medical Records</h3>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <label>Date</label>
                  {/* <input
                    type="text"
                    className="form-control datetimepicker"
                    defaultValue="31-10-2019"
                  /> */}
                  <DatePicker
                    className="form-control datetimepicker"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="Thu, Mar 24, 2022"
                  />
                </div>
                <div className="form-group">
                  <label>Description ( Optional )</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Upload File</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary submit-btn"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Medical Records Modal */}
    </div>
  );
};

export default PatientProfile;
