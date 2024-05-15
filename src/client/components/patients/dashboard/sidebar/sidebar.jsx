import React from "react";
import { Link } from "react-router-dom";
import IMG01 from "../../../../assets/images/patient.jpg";

export const DashboardSidebar = () => {
  const pathname = window.location.pathname;
  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <Link to="#0" className="booking-doc-img">
            <img src={IMG01} alt="User" />
          </Link>
          <div className="profile-det-info">
            <h3>Richard Wilson</h3>
            <div className="patient-details">
              <h5>
                <i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years
              </h5>
              <h5 className="mb-0">
                <i className="fas fa-map-marker-alt"></i> Newyork, USA
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            <li className={pathname.includes("/dashboard") ? "active" : ""}>
              <Link to="/patient/dashboard">
                <i className="fas fa-columns"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={pathname.includes("/favourites") ? "active" : ""}>
              <Link to="/patient/favourites">
                <i className="fas fa-bookmark"></i>
                <span>Favourites</span>
              </Link>
            </li>
            {/* <li className={pathname.includes("/dependent") ? "active" : ""}>
              <Link to="/patient/dependent">
                <i className="fas fa-users"></i>
                <span>Dependent</span>
              </Link>
            </li> */}
            <li className={pathname.includes("/chat-doctor") ? "active" : ""}>
              <Link to="/patient/patient-chat">
                <i className="fas fa-comments"></i>
                <span>Message</span>
                <small className="unread-msg">23</small>
              </Link>
            </li>
            {/* <li className={pathname.includes("/accounts") ? "active" : ""}>
              <Link to="/patient/accounts">
                <i className="fas fa-file-invoice-dollar"></i>
                <span>Accounts</span>
              </Link>
            </li> */}
            <li className={pathname.includes("/orders") ? "active" : ""}>
              <Link to="/patient/orders">
                <i className="fas fa-list-alt"></i>
                <span>Orders</span>
                <small className="unread-msg">7</small>
              </Link>
            </li>
            <li
              className={pathname.includes("/medicalrecords") ? "active" : ""}
            >
              <Link to="/patient/medicalrecords">
                <i className="fas fa-clipboard"></i>
                <span>Add Medical Records</span>
              </Link>
            </li>
            <li
              className={pathname.includes("/medicaldetails") ? "active" : ""}
            >
              <Link to="/patient/medicaldetails">
                <i className="fas fa-file-medical-alt"></i>
                <span>Medical Details</span>
              </Link>
            </li>
            <li className={pathname.includes("/profile") ? "active" : ""}>
              <Link to="/patient/profile">
                <i className="fas fa-user-cog"></i>
                <span>Profile Settings</span>
              </Link>
            </li>
            <li
              className={pathname.includes("/change-password") ? "active" : ""}
            >
              <Link to="/patient/change-password">
                <i className="fas fa-lock"></i>
                <span>Change Password</span>
              </Link>
            </li>
            <li>
              <Link to="/index">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default DashboardSidebar;
