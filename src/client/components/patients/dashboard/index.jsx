/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "./sidebar/sidebar.jsx";
// import { Tab, Tabs } from "react-bootstrap";
import StickyBox from "react-sticky-box";
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
import Dashboard1 from "../../../assets/images/specialities/pt-dashboard-01.png";
import Dashboard2 from "../../../assets/images/specialities/pt-dashboard-02.png";
import Dashboard3 from "../../../assets/images/specialities/pt-dashboard-03.png";
import Dashboard4 from "../../../assets/images/specialities/pt-dashboard-04.png";
import Graph1 from "../../../assets/images/shapes/graph-01.png";
import Graph2 from "../../../assets/images/shapes/graph-02.png";
import Graph3 from "../../../assets/images/shapes/graph-03.png";
import Graph4 from "../../../assets/images/shapes/graph-04.png";

import Footer from "../../footer";
import Header from "../../header.jsx";

const Dashboard = (props) => {
  const [count, setCount] = useState(1, 2, 3, 4);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     key: 1,
  //   };
  //   this.handleSelect = this.handleSelect.bind(this);
  // }

  return (
    <>
      <Header {...props} />
      {/* <!-- Breadcrumb --> */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Dashboard</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Breadcrumb -->     */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img src={Dashboard1} width={55} />
                        </div>
                        <h5>Heart Rate</h5>
                        <h6>
                          12 <sub>bpm</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img src={Dashboard2} width={55} />
                        </div>
                        <h5>Body Temperature</h5>
                        <h6>
                          18 <sub>C</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img src={Dashboard3} width={55} />
                        </div>
                        <h5>Glucose Level</h5>
                        <h6>70 - 90</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img src={Dashboard4} width={55} />
                        </div>
                        <h5>Blood Pressure</h5>
                        <h6>
                          202/90 <sub>mg/dl</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row patient-graph-col">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Graph Status</h4>
                      </div>
                      <div className="card-body pt-2 pb-2 mt-1 mb-1">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <Link
                              to="#"
                              className="graph-box"
                              data-bs-target="#graph1"
                            >
                              <div>
                                <h4>BMI Status</h4>
                              </div>
                              <div className="graph-img">
                                <img src={Graph1} />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 6d
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <Link
                              to="#"
                              className="graph-box pink-graph"
                              data-bs-target="#graph2"
                            >
                              <div>
                                <h4>Heart Rate Status</h4>
                              </div>
                              <div className="graph-img">
                                <img src={Graph2} />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 2d
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <Link
                              to="#"
                              className="graph-box sky-blue-graph"
                              data-bs-target="#graph3"
                            >
                              <div>
                                <h4>FBC Status</h4>
                              </div>
                              <div className="graph-img">
                                <img src={Graph3} />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 5d
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <Link
                              to="#"
                              className="graph-box orange-graph"
                              data-bs-target="#graph4"
                            >
                              <div>
                                <h4>Weight Status</h4>
                              </div>
                              <div className="graph-img">
                                <img src={Graph4} />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 3d
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pt-0">
                  {/* <!-- Tab Menu --> */}
                  <nav className="user-tabs mb-4">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
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
                          to="#pat_prescriptions"
                          data-bs-toggle="tab"
                        >
                          Prescriptions
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#pat_medical_records"
                          data-bs-toggle="tab"
                        >
                          <span className="med-records">Medical Records</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#pat_billing"
                          data-bs-toggle="tab"
                        >
                          Billing
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  {/* <!-- /Tab Menu --> */}
                  <div className="tab-content pt-0">
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
                                          src={IMG01}
                                          alt="User"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Ruby Perrin <span>Dental</span>
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
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
                                          src={IMG07}
                                          alt="User"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Linda Tobin <span>Neurology</span>
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
                                        className="btn btn-sm bg-primary-light"
                                        to="#0"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        className="btn btn-sm bg-info-light"
                                        to="#0"
                                      >
                                        <i className="far fa-eye"></i> View
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
                                          src={IMG08}
                                          alt="User"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Paul Richard{" "}
                                        <span>Dermatology</span>
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
                                    <span className="badge rounded-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
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
                                          src={IMG09}
                                          alt="User"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. John Gibbs <span>Dental</span>
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
                                    <span className="badge rounded-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
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
                                          src={IMG10}
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Olga Barlow <span>Dental</span>
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
                                    <span className="badge rounded-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
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

                    <div className="tab-pane fade" id="pat_prescriptions">
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
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
                                          alt="User "
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
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
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
                    <div id="pat_medical_records" className="tab-pane fade">
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
                                    <Link to="#0">#MR-0010</Link>
                                  </td>
                                  <td>14 Nov 2019</td>
                                  <td>Dental Filling</td>
                                  <td>
                                    <Link to="#0">dental-test.pdf</Link>
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#0">#MR-0009</Link>
                                  </td>
                                  <td>13 Nov 2019</td>
                                  <td>Teeth Cleaning</td>
                                  <td>
                                    <Link to="#0">dental-test.pdf</Link>
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#0">#MR-0008</Link>
                                  </td>
                                  <td>12 Nov 2019</td>
                                  <td>General Checkup</td>
                                  <td>
                                    <Link to="#0">cardio-test.pdf</Link>
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#0">#MR-0007</Link>
                                  </td>
                                  <td>11 Nov 2019</td>
                                  <td>General Test</td>
                                  <td>
                                    <Link to="#0">general-test.pdf</Link>
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <Link to="#0">#MR-0005</Link>
                                  </td>
                                  <td>9 Nov 2019</td>
                                  <td>Leg Pain</td>
                                  <td>
                                    <Link to="#0">ortho-test.pdf</Link>
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
                                          alt="User "
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
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#0"
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
                    <div id="pat_billing" className="tab-pane fade">
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
                                          alt="User "
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
                                        to="/pages/invoice-view"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
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
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Darren Elder
                                        <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$300</td>
                                  <td>13 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="/pages/invoice-view"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
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
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Deborah Angel
                                        <span>Cardiology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$150</td>
                                  <td>12 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="/pages/invoice-view"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
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
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">
                                        Dr. Sofia Brient
                                        <span>Urology</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$50</td>
                                  <td>11 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="/pages/invoice-view"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
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
                                        to="/patient/dashboard"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG09}
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/dashboard">
                                        Dr. John Gibbs <span>Dental</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$175</td>
                                  <td>6 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="/pages/invoice-view"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
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
                                        to="/patient/dashboard"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={IMG10}
                                          alt="User "
                                        />
                                      </Link>
                                      <Link to="/patient/dashboard">
                                        Dr. Olga Barlow <span>#0010</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$550</td>
                                  <td>5 Nov 2019</td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <Link
                                        to="/pages/invoice-view"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>
                                      <Link
                                        to="#0"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </Link>
                                      &nbsp;
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
      <Footer {...props} />
    </>
  );
};

export default Dashboard;
