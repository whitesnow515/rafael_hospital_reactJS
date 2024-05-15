import React from "react";
import { Link } from "react-router-dom";
import {
  IMG01,
  IMG02,
  IMG03,
  patient10,
  patient11,
  patient9,
} from "./img";

const AppointmentTab = () => {
  return (
    <>
      {/* Today Appointment Tab */}
      <div className="tab-pane" id="today-appointments">
        <div className="card card-table mb-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-center mb-0">
                <thead style={{borderBottom:"none"}}>
                  <tr>
                    <th>Patient Name</th>
                    <th>Appt Date</th>
                    <th>Purpose</th>
                    <th>Type</th>
                    <th className="text-center">Paid Amount</th>
                    <th />
                  </tr>
                </thead>
                <tbody style={{borderTop:"none"}}>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <Link
                          to="/doctor/patient-profile"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src={IMG01}
                            alt="User Image"
                          />
                        </Link>
                        <Link to="/doctor/patient-profile">
                          Elsie Gilley <span>#PT0006</span>
                        </Link>
                      </h2>
                    </td>
                    <td>
                      14 Nov 2019{" "}
                      <span className="d-block text-info">6.00 PM</span>
                    </td>
                    <td>Fever</td>
                    <td>Old Patient</td>
                    <td className="text-center">$300</td>
                    <td className="text-end">
                      <div className="table-action">
                        <Link to="#" className="btn btn-sm bg-info-light" style={{marginRight:"5px"}}>
                          <i className="far fa-eye" /> View
                        </Link>
                        <Link to="#" className="btn btn-sm bg-success-light" style={{marginRight:"5px"}}>
                          <i className="fas fa-check" /> Accept
                        </Link>
                        <Link to="#" className="btn btn-sm bg-danger-light" >
                          <i className="fas fa-times" /> Cancel
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <Link
                          to="/doctor/patient-profile"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src={IMG02}
                            alt="User Image"
                          />
                        </Link>
                        <Link to="/doctor/patient-profile">
                          Joan Gardner <span>#PT0006</span>
                        </Link>
                      </h2>
                    </td>
                    <td>
                      14 Nov 2019{" "}
                      <span className="d-block text-info">5.00 PM</span>
                    </td>
                    <td>General</td>
                    <td>Old Patient</td>
                    <td className="text-center">$100</td>
                    <td className="text-end">
                      <div className="table-action">
                        <Link to="#" className="btn btn-sm bg-info-light" style={{marginRight:"5px"}}>
                          <i className="far fa-eye" /> View
                        </Link>
                        <Link to="#" className="btn btn-sm bg-success-light" style={{marginRight:"5px"}}>
                          <i className="fas fa-check" /> Accept
                        </Link>
                        <Link to="#" className="btn btn-sm bg-danger-light" >
                          <i className="fas fa-times" /> Cancel
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <Link
                          to="/doctor/patient-profile"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src={IMG03}
                            alt="User Image"
                          />
                        </Link>
                        <Link to="/doctor/patient-profile">
                          Daniel Griffing <span>#PT0007</span>
                        </Link>
                      </h2>
                    </td>
                    <td>
                      14 Nov 2019{" "}
                      <span className="d-block text-info">3.00 PM</span>
                    </td>
                    <td>General</td>
                    <td>New Patient</td>
                    <td className="text-center">$75</td>
                    <td className="text-end">
                      <div className="table-action">
                        <Link to="#" className="btn btn-sm bg-info-light" style={{marginRight:"5px"}}>
                          <i className="far fa-eye" /> View
                        </Link>
                        <Link to="#" className="btn btn-sm bg-success-light" style={{marginRight:"5px"}}>
                          <i className="fas fa-check" /> Accept
                        </Link>
                        <Link to="#" className="btn btn-sm bg-danger-light" >
                          <i className="fas fa-times" /> Cancel
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <Link
                          to="/doctor/patient-profile"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src={patient9}
                            alt="User Image"
                          />
                        </Link>
                        <Link to="/doctor/patient-profile">
                          Walter Roberson <span>#PT0008</span>
                        </Link>
                      </h2>
                    </td>
                    <td>
                      14 Nov 2019{" "}
                      <span className="d-block text-info">1.00 PM</span>
                    </td>
                    <td>General</td>
                    <td>Old Patient</td>
                    <td className="text-center">$350</td>
                    <td className="text-end">
                      <div className="table-action">
                        <Link to="#" className="btn btn-sm bg-info-light" style={{marginRight:"5px"}}>
                          <i className="far fa-eye" /> View
                        </Link>
                        <Link to="#" className="btn btn-sm bg-success-light" style={{marginRight:"5px"}}>
                          <i className="fas fa-check" /> Accept
                        </Link>
                        <Link to="#" className="btn btn-sm bg-danger-light" >
                          <i className="fas fa-times" /> Cancel
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <Link
                          to="/doctor/patient-profile"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src={patient10}
                            alt="User Image"
                          />
                        </Link>
                        <Link to="/doctor/patient-profile">
                          Robert Rhodes <span>#PT0010</span>
                        </Link>
                      </h2>
                    </td>
                    <td>
                      14 Nov 2019{" "}
                      <span className="d-block text-info">10.00 AM</span>
                    </td>
                    <td>General</td>
                    <td>New Patient</td>
                    <td className="text-center">$175</td>
                    <td className="text-end">
                      <div className="table-action">
                        <Link to="#" className="btn btn-sm bg-info-light" style={{marginRight:"5px"}}>
                          <i className="far fa-eye" /> View
                        </Link>
                        <Link to="#" className="btn btn-sm bg-success-light" style={{marginRight:"5px"}}>
                          <i className="fas fa-check" /> Accept
                        </Link>
                        <Link to="#" className="btn btn-sm bg-danger-light" >
                          <i className="fas fa-times" /> Cancel
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <Link
                          to="/doctor/patient-profile"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src={patient11}
                            alt="User Image"
                          />
                        </Link>
                        <Link to="/doctor/patient-profile">
                          Harry Williams <span>#PT0011</span>
                        </Link>
                      </h2>
                    </td>
                    <td>
                      14 Nov 2019{" "}
                      <span className="d-block text-info">11.00 AM</span>
                    </td>
                    <td>General</td>
                    <td>New Patient</td>
                    <td className="text-center">$450</td>
                    <td className="text-end">
                      <div className="table-action">
                        <Link to="#" className="btn btn-sm bg-info-light" style={{marginRight:"5px"}}>
                          <i className="far fa-eye" /> View
                        </Link>
                        <Link to="#" className="btn btn-sm bg-success-light" style={{marginRight:"5px"}}>
                          <i className="fas fa-check" /> Accept
                        </Link>
                        <Link to="#" className="btn btn-sm bg-danger-light" >
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
      {/* /Today Appointment Tab */}
    </>
  );
};

export default AppointmentTab;
