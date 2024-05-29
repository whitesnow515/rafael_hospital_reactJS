import React, { useState } from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import { Modal } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";

const MedicalDetails = (props) => {
  const [show, setShow] = useState(false);
  

  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Medical Details</h2>

                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Medical Details
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
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title float-start">
                        Medical details
                      </h4>
                      <Link
                        to="#modal_medical_form"
                        className="btn btn-primary float-end"
                        onClick={() => setShow(true)}
                      >
                        Add Details
                      </Link>
                    </div>
                    <div className="card-body ">
                      {/* Dependent Tab */}
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>BMI</th>
                                  <th className="text-center">Heart Rate</th>
                                  <th className="text-center">FBC Status</th>
                                  <th>Weight</th>
                                  <th>Order date</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Richard Wilson</td>
                                  <td>23.7</td>
                                  <td className="text-center">89</td>
                                  <td className="text-center">140</td>
                                  <td>74Kg</td>
                                  <td>
                                    11 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      10.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="#edit_medical_form"
                                        onClick={() => setShow(true)}
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="fas fa-edit" /> Edit
                                      </Link>{" "}
                                      &nbsp;
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-trash-alt" />{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Champagne</td>
                                  <td>25.2</td>
                                  <td className="text-center">92</td>
                                  <td className="text-center">135</td>
                                  <td>73Kg</td>
                                  <td>
                                    3 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      11.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="#edit_medical_form"
                                        onClick={() => setShow(true)}
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="fas fa-edit" /> Edit
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-trash-alt" />{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Vena</td>
                                  <td>24.5</td>
                                  <td className="text-center">90</td>
                                  <td className="text-center">125</td>
                                  <td>73.5Kg</td>
                                  <td>
                                    1 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      1.00 PM
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="#edit_medical_form"
                                        onClick={() => setShow(true)}
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="fas fa-edit" /> Edit
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-trash-alt" />{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Tressie</td>
                                  <td>24.2</td>
                                  <td className="text-center">95</td>
                                  <td className="text-center">128</td>
                                  <td>10.2Kg</td>
                                  <td>
                                    30 Oct 2019{" "}
                                    <span className="d-block text-info">
                                      9.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="#edit_medical_form"
                                        onClick={() => setShow(true)}
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="fas fa-edit" /> Edit
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-trash-alt" />{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>Christopher</td>
                                  <td>24.7</td>
                                  <td className="text-center">99</td>
                                  <td className="text-center">122</td>
                                  <td>12.8Kg</td>
                                  <td>
                                    28 Oct 2019{" "}
                                    <span className="d-block text-info">
                                      6.00 PM
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="#edit_medical_form"
                                        onClick={() => setShow(true)}
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="fas fa-edit" /> Edit
                                      </Link>
                                      &nbsp;
                                      <Link
                                        to="#"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-trash-alt" />{" "}
                                        Delete
                                      </Link>
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
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        style={{ marginTop: "75px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add new data</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div>
              <form
                action="#"
                encType="multipart/form-data"
                autoComplete="off"
                method="post"
              >
                <div className="modal-body">
                  <input type="hidden" defaultValue name="id" />
                  <input type="hidden" defaultValue="insert" name="method" />
                  <div className="form-group">
                    <label className="control-label mb-10">
                      {" "}
                      BMI <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="bmi"
                      className="form-control"
                      defaultValue="23.7"
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10">Heart rate </label>
                    <input
                      type="text"
                      name="hr"
                      className="form-control"
                      defaultValue={89}
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10">Weight</label>
                    <input
                      type="text"
                      name="Weight"
                      className="form-control"
                      defaultValue={74}
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10">Fbc</label>
                    <input
                      type="text"
                      name="Fbc"
                      className="form-control"
                      defaultValue={140}
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10">Created Date </label>
                    <input
                      type="text"
                      name="dob"
                      id="editdob"
                      defaultValue="11/11/2019"
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="modal-footer text-center">
                  <button
                    type="submit"
                    className="btn btn-outline btn-success "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Footer {...props} />
    </div>
  );
};

export default MedicalDetails;
