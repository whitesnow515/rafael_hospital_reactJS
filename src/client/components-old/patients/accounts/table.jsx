import React from 'react'
import { doctor_thumb_01, doctor_thumb_02, doctor_thumb_03, doctor_thumb_04, doctor_thumb_05, doctor_thumb_07, doctorthumb02 } from '../../imagepath'
import { Link } from "react-router-dom";

const TableContent = () => {
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
          <div id="pat_accounts" className="tab-pane fade show active">
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
                          <span className="d-block text-info">10.00 AM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_01}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/doctor/patient-profile">
                              Richard Wilson <span>#PT0016</span>
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          3 Nov 2019{" "}
                          <span className="d-block text-info">11.00 AM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctorthumb02}
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          1 Nov 2019{" "}
                          <span className="d-block text-info">1.00 PM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_03}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/doctor/patient-profile">
                              Travis Trimble <span>#PT0002</span>
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          30 Oct 2019{" "}
                          <span className="d-block text-info">9.00 AM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_04}
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          28 Oct 2019{" "}
                          <span className="d-block text-info">6.00 PM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_05}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/doctor/patient-profile">
                              Michelle Fairfax <span>#PT0004</span>
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          27 Oct 2019{" "}
                          <span className="d-block text-info">8.00 AM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_07}
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
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
                          <span className="d-block text-info">10.00 AM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_01}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/doctor/patient-profile">
                              Richard Wilson <span>#PT0016</span>
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          3 Nov 2019{" "}
                          <span className="d-block text-info">11.00 AM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_02}
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          1 Nov 2019{" "}
                          <span className="d-block text-info">1.00 PM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_03}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/doctor/patient-profile">
                              Travis Trimble <span>#PT0002</span>
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          30 Oct 2019{" "}
                          <span className="d-block text-info">9.00 AM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_04}
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          28 Oct 2019{" "}
                          <span className="d-block text-info">6.00 PM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_05}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/doctor/patient-profile">
                              Michelle Fairfax <span>#PT0004</span>
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          27 Oct 2019{" "}
                          <span className="d-block text-info">8.00 AM</span>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/doctor/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor_thumb_07}
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
                            >
                              <i className="far fa-eye" /> View
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-success-light"
                            >
                              <i className="fas fa-check" /> Accept
                            </Link>&nbsp;
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fas fa-times" /> Cancel
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
  )
}

export default TableContent