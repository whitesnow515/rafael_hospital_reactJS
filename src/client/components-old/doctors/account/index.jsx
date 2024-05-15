import React, { useState } from "react";
// import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
// import { Tab, Tabs, Modal } from "react-bootstrap";
import {
  patient,
  patient1,
  patient2,
  patient3,
  patient4,
  patient5,
} from "./image.jsx";
import Header from "../../header";
import Footer from "../../footer";
import DoctorSidebar from "../../doctors/sidebar/index.jsx";
import { Modal } from "react-bootstrap";

const Accounts = (props) => {
  const [show, setshow] = useState();
  const [display, setDisplay] = useState();

  // const handleClose = () => {
  //   setShow(false);
  // };
  const handleClose = () => {
    setshow(false);
  };

  const handleShow = () => {
    setshow(true);
  };

  const displayClose = () => {
    setDisplay(false);
  };

  const displayShow = () => {
    setDisplay(true);
  };

  return (
    <div>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Accounts</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Accounts
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      <>
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <DoctorSidebar />
                {/* /Profile Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-lg-5 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-sm-6">
                            <h3 className="card-title">Account</h3>
                          </div>
                          <div className="col-sm-6">
                            <div className="text-end">
                              <Link
                                title="Edit Profile"
                                className="btn btn-primary btn-sm"
                                to="#account_modal"
                                // data-bs-toggle="modal"
                                onClick={handleShow}
                              >
                                <i className="fas fa-pencil"></i> Edit Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="profile-view-bottom">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Bank Name</div>
                                <div className="text" id="bank_name">
                                  Wells Fargo &amp; Co
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Branch Name</div>
                                <div className="text" id="branch_name">
                                  Lenexa
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Account Number</div>
                                <div className="text" id="account_no">
                                  5396 5250 1908 3838
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Account Name</div>
                                <div className="text" id="account_name">
                                  Dr. Darren Elder
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 d-flex">
                    <div className="card flex-fill">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="account-card bg-success-light">
                              <span>$90.48</span> Earned
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="account-card bg-warning-light">
                              <span>$0.00</span> Requested
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="account-card bg-purple-light">
                              <span>$90.48</span> Balance
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <Link
                              to="#payment_request_modal"
                              className="btn btn-primary request_btn"
                              // data-bs-toggle="modal"
                              onClick={displayShow}
                            >
                              Payment Request
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body pt-0">
                        {/* Tab Menu */}
                        <nav className="user-tabs mb-4">
                          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                to="#pat_accounts"
                                data-bs-toggle="tab"
                              >
                                Accounts
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#pat_refundrequest"
                                data-bs-toggle="tab"
                              >
                                Patients Refund Request
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        {/* /Tab Menu */}
                        {/* Tab Content */}
                        <div className="tab-content pt-0">
                          {/* Accounts Tab */}
                          <div
                            id="pat_accounts"
                            className="tab-pane fade show active"
                          >
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Date</th>
                                        <th>Patient Name</th>
                                        <th className="text-center">Amount</th>
                                        <th>Status</th>
                                        <th />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          11 Nov 2019{" "}
                                          <span className="d-block text-info">
                                            10.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Richard Wilson{" "}
                                              <span>#PT0016</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$150</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          3 Nov 2019{" "}
                                          <span className="d-block text-info">
                                            11.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient1}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Charlene Reed <span>#PT0001</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$200</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          1 Nov 2019{" "}
                                          <span className="d-block text-info">
                                            1.00 PM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient2}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Travis Trimble{" "}
                                              <span>#PT0002</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$75</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          30 Oct 2019{" "}
                                          <span className="d-block text-info">
                                            9.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient3}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Carl Kelly <span>#PT0003</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$100</td>
                                        <td>
                                          <span className="badge rounded-pill bg-warning-light">
                                            Pending
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          28 Oct 2019{" "}
                                          <span className="d-block text-info">
                                            6.00 PM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient4}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Michelle Fairfax{" "}
                                              <span>#PT0004</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$350</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          27 Oct 2019{" "}
                                          <span className="d-block text-info">
                                            8.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient5}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Gina Moore <span>#PT0005</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$250</td>
                                        <td>
                                          <span className="badge rounded-pill bg-danger-light">
                                            Refunded
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
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
                          {/* /Accounts Tab */}
                          {/* Refund Request Tab */}
                          <div className="tab-pane fade" id="pat_refundrequest">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Date</th>
                                        <th>Patient Name</th>
                                        <th className="text-center">Amount</th>
                                        <th>Status</th>
                                        <th />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          11 Nov 2019{" "}
                                          <span className="d-block text-info">
                                            10.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Richard Wilson{" "}
                                              <span>#PT0016</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$150</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          3 Nov 2019{" "}
                                          <span className="d-block text-info">
                                            11.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient1}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Charlene Reed <span>#PT0001</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$200</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          1 Nov 2019{" "}
                                          <span className="d-block text-info">
                                            1.00 PM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient2}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Travis Trimble{" "}
                                              <span>#PT0002</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$75</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          30 Oct 2019{" "}
                                          <span className="d-block text-info">
                                            9.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient3}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Carl Kelly <span>#PT0003</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$100</td>
                                        <td>
                                          <span className="badge rounded-pill bg-warning-light">
                                            Pending
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          28 Oct 2019{" "}
                                          <span className="d-block text-info">
                                            6.00 PM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient4}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Michelle Fairfax{" "}
                                              <span>#PT0004</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$350</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          27 Oct 2019{" "}
                                          <span className="d-block text-info">
                                            8.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/doctor/patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient5}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/doctor/patient-profile">
                                              Gina Moore <span>#PT0005</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$250</td>
                                        <td>
                                          <span className="badge rounded-pill bg-danger-light">
                                            Refunded
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
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
                          {/* /Refund Request Tab */}
                        </div>
                        {/* Tab Content */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />

      {/* Account Details Modal*/}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ zIndex: 99999, marginTop: "55px" }}
      >
        <Modal.Header closeButton>
          <h5 className="modal-title">Account Details</h5>
        </Modal.Header>
        <Modal.Body>
          <form id="accounts_form" method="post">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="control-label">Bank Name</label>
                  <input
                    type="text"
                    name="bank_name"
                    className="form-control bank_name"
                    defaultValue="Wells Fargo & Co"
                  />
                  <span className="help-block" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="control-label">Branch Name</label>
                  <input
                    type="text"
                    name="branch_name"
                    className="form-control branch_name"
                    defaultValue="Lenexa"
                  />
                  <span className="help-block" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="control-label">Account Number</label>
                  <input
                    type="text"
                    name="account_no"
                    className="form-control account_no"
                    defaultValue="5396 5250 1908 3838"
                  />
                  <span className="help-block" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="control-label">Account Name</label>
                  <input
                    type="text"
                    name="account_name"
                    className="form-control acc_name"
                    defaultValue="Dr. Darren Elder"
                  />
                  <span className="help-block" />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <button type="submit" id="acc_btn" className="btn btn-primary">
          Save
        </button>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {/* /Account Details Modal*/}

      <Modal show={display} onHide={displayClose} centered>
        <Modal.Header closeButton>
          <h5 className="modal-title">Payment Request</h5>
        </Modal.Header>
        <Modal.Body>
          <form id="payment_request_form" method="post">
            <input
              type="hidden"
              name="payment_type"
              id="payment_type"
              defaultValue={1}
            />
            <div className="mb-3">
              <label>Request Amount</label>
              <input
                type="text"
                name="request_amount"
                id="request_amount"
                className="form-control"
                maxLength={6}
                // oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              />
              <span className="help-block" />
            </div>
            <div className="mb-3">
              <label>Description (Optional)</label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                defaultValue={""}
              />
              <span className="help-block" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" id="request_btn" className="btn btn-primary">
            Request
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Accounts;
