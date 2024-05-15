import React, { useState } from "react";
import { IMG01, IMG02 } from "../doctorprofile/img";
import { Modal } from "react-bootstrap";
import { uploadicon } from "../../imagepath";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import {
  doctorthumb3,
  doctorthumb4,
  doctorthumb5,
  doctorthumb6,
} from "../../blog/doctorblog/img";
const Tablerecords = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
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
                      to="#pat_medicalrecords"
                      data-bs-toggle="tab">
                      Medical Records
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#pat_prescription"
                      data-bs-toggle="tab">
                      Prescription
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /Tab Menu */}
              {/* Tab Content */}
              <div className="tab-content pt-0">
                {/* Medical Records Tab */}
                <div
                  id="pat_medicalrecords"
                  className="tab-pane fade show active">
                  {/* <div className="text-end">
              <Link
                to="#"
                className="add-new-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_medical_records_modal"
                onClick={()=> setShow(true)}
              >
                Add Medical Records
              </Link>
            </div> */}
                  <div className="text-end">
                    {" "}
                    <Link
                      to="#"
                      className="add-new-btn"
                      onClick={() => setShow(true)}>
                      Add Medical Records
                    </Link>{" "}
                  </div>
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Description</th>
                              <th>Attachment</th>
                              <th>Orderd By</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Richard Wilson</td>
                              <td>
                                11 Nov 2019{" "}
                                <span className="d-block text-info">
                                  10.00 AM
                                </span>
                              </td>
                              <td>Benzaxapine Croplex</td>
                              <td>
                                <Link
                                  to="#"
                                  title="Download attachment"
                                  className="btn btn-primary btn-sm">
                                  {" "}
                                  <i className="fa fa-download" />
                                </Link>
                              </td>
                              <td>Your Self</td>
                              <td>
                                <Link
                                  to="#"
                                  className="btn btn-sm bg-danger-light">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Vena</td>
                              <td>
                                3 Nov 2019{" "}
                                <span className="d-block text-info">
                                  11.00 AM
                                </span>
                              </td>
                              <td>Rapalac Neuronium</td>
                              <td>
                                <Link
                                  to="#"
                                  title="Download attachment"
                                  className="btn btn-primary btn-sm">
                                  {" "}
                                  <i className="fa fa-download" />
                                </Link>
                              </td>
                              <td>Your Self</td>
                              <td>
                                <Link
                                  to="#"
                                  className="btn btn-sm bg-danger-light">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Tressie</td>
                              <td>
                                1 Nov 2019{" "}
                                <span className="d-block text-info">
                                  1.00 PM
                                </span>
                              </td>
                              <td>Ombinazol Bonibamol</td>
                              <td>
                                <Link
                                  to="#"
                                  title="Download attachment"
                                  className="btn btn-primary btn-sm">
                                  {" "}
                                  <i className="fa fa-download" />
                                </Link>
                              </td>
                              <td>Your Self</td>
                              <td>
                                <Link
                                  to="#"
                                  className="btn btn-sm bg-danger-light">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Richard Wilson</td>
                              <td>
                                30 Oct 2019{" "}
                                <span className="d-block text-info">
                                  9.00 AM
                                </span>
                              </td>
                              <td>Dantotate Dantodazole</td>
                              <td>
                                <Link
                                  to="#"
                                  title="Download attachment"
                                  className="btn btn-primary btn-sm">
                                  {" "}
                                  <i className="fa fa-download" />
                                </Link>
                              </td>
                              <td>Your Self</td>
                              <td>
                                <Link
                                  to="#"
                                  className="btn btn-sm bg-danger-light">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Christopher</td>
                              <td>
                                28 Oct 2019{" "}
                                <span className="d-block text-info">
                                  6.00 PM
                                </span>
                              </td>
                              <td>Acetrace Amionel</td>
                              <td>
                                <Link
                                  to="#"
                                  title="Download attachment"
                                  className="btn btn-primary btn-sm">
                                  {" "}
                                  <i className="fa fa-download" />
                                </Link>
                              </td>
                              <td>Your Self</td>
                              <td>
                                <Link
                                  to="#"
                                  className="btn btn-sm bg-danger-light">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Medical Records Tab */}
                {/* Prescription Tab */}
                <div className="tab-pane fade" id="pat_prescription">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Date</th>
                              <th>Name</th>
                              <th>Doctor</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                11 Nov 2019{" "}
                                <span className="d-block text-info">
                                  10.00 AM
                                </span>
                              </td>
                              <td>Prescription</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/patient/doctor-profile"
                                    className="avatar avatar-sm me-2">
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
                              <td>
                                <div className="table-action">
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </Link>
                                  &nbsp;
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-success-light">
                                    <i className="fas fa-print" /> Print
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                                3 Nov 2019{" "}
                                <span className="d-block text-info">
                                  11.00 AM
                                </span>
                              </td>
                              <td>Prescription</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/patient/doctor-profile"
                                    className="avatar avatar-sm me-2">
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
                                <div className="table-action">
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </Link>
                                  &nbsp;
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-success-light">
                                    <i className="fas fa-print" /> Print
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                                1 Nov 2019{" "}
                                <span className="d-block text-info">
                                  1.00 PM
                                </span>
                              </td>
                              <td>Prescription</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/patient/doctor-profile"
                                    className="avatar avatar-sm me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={doctorthumb3}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">
                                    Dr. Deborah Angel <span>Cardiology</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                <div className="table-action">
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </Link>
                                  &nbsp;
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-success-light">
                                    <i className="fas fa-print" /> Print
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                                30 Oct 2019{" "}
                                <span className="d-block text-info">
                                  9.00 AM
                                </span>
                              </td>
                              <td>Prescription</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/patient/doctor-profile"
                                    className="avatar avatar-sm me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={doctorthumb4}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">
                                    Dr. Sofia Brient <span>Urology</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                <div className="table-action">
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </Link>
                                  &nbsp;
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-success-light">
                                    <i className="fas fa-print" /> Print
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>
                                28 Oct 2019{" "}
                                <span className="d-block text-info">
                                  6.00 PM
                                </span>
                              </td>
                              <td>Prescription</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/patient/doctor-profile"
                                    className="avatar avatar-sm me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={doctorthumb5}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">
                                    Dr. Marvin Campbell{" "}
                                    <span>Ophthalmology</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                <div className="table-action">
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </Link>
                                  &nbsp;
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-success-light">
                                    <i className="fas fa-print" /> Print
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>
                                27 Oct 2019{" "}
                                <span className="d-block text-info">
                                  8.00 AM
                                </span>
                              </td>
                              <td>Prescription</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/patient/doctor-profile"
                                    className="avatar avatar-sm me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={doctorthumb6}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">
                                    Dr. Katharine Berthold{" "}
                                    <span>Orthopaedics</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                <div className="table-action">
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </Link>
                                  &nbsp;
                                  <Link
                                    to="#"
                                    className="btn btn-sm bg-success-light">
                                    <i className="fas fa-print" /> Print
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
                {/* /Prescription Tab */}
              </div>
              {/* Tab Content */}
            </div>
          </div>
        </div>
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        style={{ marginTop: "75px" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add Medical Records</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <form id="medical_records_form">
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Title Name</label>
                      <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Enter Title Name"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Patient</label>
                      <select className="form-select form-control">
                        <option>Myself</option>
                        <option>Child_1</option>
                        <option>Self</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>Hospital Name</label>
                      <input
                        type="text"
                        name="hospital"
                        className="form-control"
                        placeholder="Enter name here.."
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>Upload</label>
                      <div className="upload-medical-records">
                        <input
                          className="form-control"
                          type="file"
                          name="user_file"
                          id="user_files_mr"
                        />
                        <div className="upload-content dropzone">
                          <div className="text-center">
                            <div className="upload-icon mb-2">
                              <img src={uploadicon} alt />
                            </div>
                            <h5>Drag &amp; Drop</h5>
                            <h6>
                              or <span className="text-danger">Browse</span>
                            </h6>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>Symptoms</label>
                      <input
                        type="text"
                        data-role="tagsinput"
                        className="input-tags form-control"
                        defaultValue="Fever, Fatigue"
                        name="services"
                        id="services"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Date</label>
                      <div className="form-group">
                        <DatePicker
                          selected={new Date()}
                          className="form-control date-icon"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="submit-section text-center">
                    <button
                      type="submit"
                      id="medical_btn"
                      className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Tablerecords;
