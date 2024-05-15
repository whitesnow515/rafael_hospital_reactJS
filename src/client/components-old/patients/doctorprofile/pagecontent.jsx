import React from "react";
import { IMG01, IMG02 } from "./img";
import MyComponent from "./mycomponent";
import { Link } from "react-router-dom";
import { doctorthumb02 } from "../../imagepath";

const Pagecontent = () => {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-body">
            <div className="doctor-widget">
              <div className="doc-info-left">
                <div className="doctor-img">
                  <img src={IMG01} className="img-fluid" alt="User Image" />
                </div>
                <div className="doc-info-cont">
                  <h4 className="doc-name">Dr. Darren Elder</h4>
                  <p className="doc-speciality">
                    BDS, MDS - Oral &amp; Maxillofacial Surgery
                  </p>
                  <p className="doc-department">
                    <img src={IMG02} className="img-fluid" alt="Speciality" />
                    Dentist
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating ms-1">
                      (35)
                    </span>
                  </div>
                  <div className="clinic-details">
                    <p className="doc-location">
                      <i className="fas fa-map-marker-alt"></i> Newyork, USA -
                    </p>

                    {/* <i className="fas fa-map-marker-alt" /> Newyork, USA -{" "}
              <Link to="#;">Get Directions</Link> */}

                    <div>
                      <MyComponent />
                    </div>
                  </div>
                  <div className="clinic-services">
                    <span>Dental Fillings</span>
                    <span>Teeth Whitneing</span>
                  </div>
                </div>
              </div>
              <div className="doc-info-right">
                <div className="clini-infos">
                  <ul>
                    <li>
                      <i className="far fa-thumbs-up" /> 99%
                    </li>
                    <li>
                      <i className="far fa-comment" /> 35 Feedback
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" /> Newyork, USA
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt" /> $100 per hour{" "}
                    </li>
                  </ul>
                </div>
                <div className="doctor-action">
                  <Link to="#" className="btn btn-white fav-btn">
                    <i className="far fa-bookmark" />
                  </Link>
                  <Link
                    to="/doctor/chat-doctor"
                    className="btn btn-white msg-btn"
                  >
                    <i className="far fa-comment-alt" />
                  </Link>

                  <Link
                    to="#"
                    className="btn btn-white call-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#voice_call"
                  >
                    <i className="fas fa-phone" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-white call-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#video_call"
                  >
                    <i className="fas fa-video" />
                  </Link>
                </div>
                <div className="clinic-booking">
                  <Link className="apt-btn" to="/patient/booking1">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Outgoing Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        alt="User Image"
                        src={doctorthumb02}
                        className="call-avatar"
                      />
                      <h4>Dr. Darren Elder</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/pages/voice-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">call</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Outgoing Call */}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Incoming Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        className="call-avatar"
                        src={doctorthumb02}
                        alt="User Image"
                      />
                      <h4>Dr. Darren Elder</h4>
                      <span>Calling ...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/pages/video-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">videocam</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Incoming Call */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagecontent;
