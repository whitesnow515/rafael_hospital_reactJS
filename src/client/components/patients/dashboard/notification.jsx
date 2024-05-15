import React from 'react';
import { client_01, client_02, client_03, client_04 } from '../../imagepath';
import { Link } from 'react-router-dom';

function Notification() {
  return (
    <>
    {/* Notifications */}
    <li className="nav-item dropdown noti-nav me-3 pe-0">
      <Link
        to="#"
        className="dropdown-toggle nav-link p-0"
        data-bs-toggle="dropdown"
      >
        <i className="fa-solid fa-bell" /> <span className="badge">5</span>
      </Link>
      <div className="dropdown-menu notifications dropdown-menu-end ">
        <div className="topnav-dropdown-header">
          <span className="notification-title">Notifications</span>
        </div>
        <div className="noti-content">
          <ul className="notification-list">
            <li className="notification-message">
              <Link to="#">
                <div className="media d-flex">
                  <span className="avatar">
                    <img
                      className="avatar-img"
                      alt=""
                      src={client_01}
                    />
                  </span>
                  <div className="media-body">
                    <h6>
                      Travis Tremble{" "}
                      <span className="notification-time">18.30 PM</span>
                    </h6>
                    <p className="noti-details">
                      Sent a amount of $210 for his Appointment{" "}
                      <span className="noti-title">Dr.Ruby perin </span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="#">
                <div className="media d-flex">
                  <span className="avatar">
                    <img
                      className="avatar-img"
                      alt=""
                      src={client_02}
                    />
                  </span>
                  <div className="media-body">
                    <h6>
                      Travis Tremble{" "}
                      <span className="notification-time">12 Min Ago</span>
                    </h6>
                    <p className="noti-details">
                      {" "}
                      has booked her appointment to{" "}
                      <span className="noti-title">Dr. Hendry Watt</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="#">
                <div className="media d-flex">
                  <div className="avatar">
                    <img
                      className="avatar-img"
                      alt=""
                      src={client_03}
                    />
                  </div>
                  <div className="media-body">
                    <h6>
                      Travis Tremble{" "}
                      <span className="notification-time">6 Min Ago</span>
                    </h6>
                    <p className="noti-details">
                      {" "}
                      Sent a amount $210 for his Appointment{" "}
                      <span className="noti-title">Dr.Maria Dyen</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="#">
                <div className="media d-flex">
                  <div className="avatar avatar-sm">
                    <img
                      className="avatar-img"
                      alt=""
                      src={client_04}
                    />
                  </div>
                  <div className="media-body">
                    <h6>
                      Travis Tremble{" "}
                      <span className="notification-time">8.30 AM</span>
                    </h6>
                    <p className="noti-details"> Send a message to his doctor</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
    {/* /Notifications */}
  </>
  
  );
}

export default Notification;
