import React, { useState } from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import son from "../../../assets/images/son.jpg";
import mother from "../../../assets/images/mother.jpg";
import father from "../../../assets/images/father.jpg";
import daughter from "../../../assets/images/daughter.jpg";
import Footer from "../../footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../header.jsx";

const Dependent = (props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Dependent</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dependent
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-6">
                      <h3 className="card-title">Dependent</h3>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-end">
                        <a
                          href="#modal_form"
                          onClick={() => setShow(true)}
                          className="btn btn-primary btn-sm"
                          tabIndex={0}
                        >
                          Add Dependent
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  {/* Dependent Tab */}
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Dependent</th>
                              <th>Relationship</th>
                              <th>gender</th>
                              <th>Number</th>
                              <th>Blood Group</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <span className="avatar avatar-sm me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={son}
                                      alt="User Image"
                                    />
                                  </span>
                                  Christopher
                                </h2>
                              </td>
                              <td>Son</td>
                              <td>Male</td>
                              <td>303-297-6170</td>
                              <td>AB+</td>
                              <td>
                                <div className="table-action">
                                  <a
                                    href="#edit_form"
                                    className="btn btn-sm bg-info-light"
                                    data-bs-toggle="modal"
                                    onClick={() => setEdit(true)}
                                  >
                                    {" "}
                                    <i className="fas fa-edit" /> Edit
                                  </a>
                                  &nbsp;
                                  <a
                                    href="#"
                                    className="btn btn-sm bg-danger-light"
                                  >
                                    <i className="fas fa-times" /> Deactive
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <span className="avatar avatar-sm me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={daughter}
                                      alt="User Image"
                                    />
                                  </span>
                                  Tressie
                                </h2>
                              </td>
                              <td>Daughter</td>
                              <td>Female</td>
                              <td>360-822-9097</td>
                              <td>B+</td>
                              <td>
                                <div className="table-action">
                                  <a
                                    href="#edit_form"
                                    className="btn btn-sm bg-info-light"
                                    data-bs-toggle="modal"
                                    onClick={() => setEdit(true)}
                                  >
                                    {" "}
                                    <i className="fas fa-edit" /> Edit
                                  </a>
                                  &nbsp;
                                  <a
                                    href="#"
                                    className="btn btn-sm bg-danger-light"
                                  >
                                    <i className="fas fa-times" /> Deactive
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <span className="avatar avatar-sm me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={father}
                                      alt="User Image"
                                    />
                                  </span>
                                  Champagne
                                </h2>
                              </td>
                              <td>Father</td>
                              <td>Male</td>
                              <td>720-841-8299</td>
                              <td>B+</td>
                              <td>
                                <div className="table-action">
                                  <a
                                    href="#edit_form"
                                    className="btn btn-sm bg-info-light"
                                    data-bs-toggle="modal"
                                    onClick={() => setEdit(true)}
                                  >
                                    {" "}
                                    <i className="fas fa-edit" /> Edit
                                  </a>
                                  &nbsp;
                                  <a
                                    href="#"
                                    className="btn btn-sm bg-danger-light"
                                  >
                                    <i className="fas fa-times" /> Deactive
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <span className="avatar avatar-sm me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={mother}
                                      alt="User Image"
                                    />
                                  </span>
                                  Vena
                                </h2>
                              </td>
                              <td>Mother</td>
                              <td>Male</td>
                              <td>949-583-4370</td>
                              <td>A+</td>
                              <td>
                                <div className="table-action">
                                  <a
                                    href="#edit_form"
                                    className="btn btn-sm bg-info-light"
                                    data-bs-toggle="modal"
                                    onClick={() => setEdit(true)}
                                  >
                                    {" "}
                                    <i className="fas fa-edit" /> Edit
                                  </a>
                                  &nbsp;
                                  <a
                                    href="#"
                                    className="btn btn-sm bg-danger-light"
                                  >
                                    <i className="fas fa-times" /> Deactive
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* /Dependent Tab */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="modal"
        style={{ marginTop: "80px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add new member</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <form
              action="#"
              encType="multipart/form-data"
              autoComplete="off"
              method="post"
            >
              <div className="modal-body">
                <div className="form-group">
                  <label className="control-label mb-10">
                    {" "}
                    Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" name="name" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">Relationship </label>
                  <input
                    type="text"
                    name="relationship"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">Gender </label>
                  <select className="form-control" name="gender">
                    <option value>Select</option>
                    <option defaultValue="Male">Male</option>
                    <option defaultValue="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">DOB </label>
                  <DatePicker
                    name="dob"
                    id="dob"
                    selected={date}
                    onChange={handleChange}
                    className="form-control date-icon"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">Photo </label>
                  <input
                    type="file"
                    name="profile_image"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer text-center">
                <button type="submit" className="btn btn-primary submit-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* <!-- Edit Dependent Modal--> */}
      <div
        id="edit_form"
        className="modal fade custom-modal"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        // eslint-disable-next-line react/no-unknown-property
        show={edit}
        onClick={() => setEdit(false)}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form
              action="#"
              encType="multipart/form-data"
              autoComplete="off"
              method="post"
            >
              <div className="modal-header">
                <h5 className="modal-title">Edit member</h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="control-label mb-10">
                    {" "}
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    defaultValue="Christopher"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">Relationship </label>
                  <input
                    type="text"
                    name="relationship"
                    className="form-control"
                    defaultValue="son"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">Gender </label>
                  <select className="form-select form-control" name="gender">
                    <option defaultValue="">Select</option>
                    <option defaultValue="Male" selected>
                      Male
                    </option>
                    <option defaultValue="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">DOB </label>
                  <DatePicker
                    name="dob"
                    id="editdob"
                    selected={date}
                    onChange={handleChange}
                    className="form-control date-icon"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">Photo </label>
                  <input
                    type="file"
                    name="profile_image"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer text-center">
                <button type="submit" className="btn btn-primary submit-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- /Edit Dependent Modal--> */}
      <Footer {...props} />
    </div>
  );
};

export default Dependent;
