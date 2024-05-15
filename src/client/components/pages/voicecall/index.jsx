import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IMG01, IMG02 } from "./img";
// import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Header from "../../header";

const VoiceCall = (props) => {
  useEffect(() => {
    document.body.classList.add("call-page");

    return () => document.body.classList.remove("call-page");
  }, []);

  return (
    <>
      <Header {...props} />
      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container">
            {/* Call Wrapper */}
            <div className="call-wrapper">
              <div className="call-main-row">
                <div className="call-main-wrapper">
                  <div className="call-view">
                    <div className="call-window">
                      {/* Call Header */}
                      <div className="fixed-header">
                        <div className="navbar">
                          <div className="user-details me-auto">
                            <div className="float-start user-img">
                              <Link
                                className="avatar avatar-sm me-2"
                                to="/doctor/patient-profile"
                                title="Charlene Reed"
                              >
                                <img
                                  src={IMG01}
                                  alt="User Image"
                                  className="rounded-circle"
                                />
                                <span className="status online" />
                              </Link>
                            </div>
                            <div className="user-info float-start">
                              <Link to="/doctor/patient-profile">
                                <span>Charlene Reed</span>
                              </Link>
                              <span className="last-seen">Online</span>
                            </div>
                          </div>
                          <ul className="nav float-end custom-menu">
                            <li className="nav-item dropdown dropdown-action">
                              <Link
                                to="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-cog" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link to="#" className="dropdown-item">
                                  Settings
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /Call Header */}
                      {/* Call Contents */}
                      <div className="call-contents">
                        <div className="call-content-wrap">
                          <div className="voice-call-avatar">
                            <img
                              src={IMG02}
                              alt="User Image"
                              className="call-avatar"
                            />
                            <span className="username">Dr. Darren Elder</span>
                            <span className="call-timing-count">00:59</span>
                          </div>
                          <div className="call-users">
                            <ul>
                              <li>
                                <Link to="#">
                                  <img
                                    src={IMG01}
                                    className="img-fluid"
                                    alt="User Image"
                                  />
                                  <span className="call-mute">
                                    <i className="fa fa-microphone-slash" />
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* /Call Contents */}
                      {/* Call Footer */}
                      <div className="call-footer">
                        <div className="call-icons">
                          <ul className="call-items">
                            <li className="call-item">
                              <Link
                                to="#"
                                title="Enable Video"
                                data-placement="top"
                                data-bs-toggle="tooltip"
                              >
                                <i className="fas fa-video camera" />
                              </Link>
                            </li>
                            <li className="call-item">
                              <Link
                                to="#"
                                title="Mute"
                                data-placement="top"
                                data-bs-toggle="tooltip"
                              >
                                <i className="fa fa-microphone microphone" />
                              </Link>
                            </li>
                            <li className="call-item">
                              <Link
                                to="#"
                                title="Add User"
                                data-placement="top"
                                data-bs-toggle="tooltip"
                              >
                                <i className="fa fa-user-plus" />
                              </Link>
                            </li>
                          </ul>
                          <div className="end-call">
                            <Link to="#;">
                              <i className="material-icons">call_end</i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Call Footer */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Call Wrapper */}
          </div>
        </div>
        {/* /Page Content */}
      </>
    </>
  );
};

export default VoiceCall;
