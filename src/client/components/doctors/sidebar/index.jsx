import React from "react";
import { Link } from "react-router-dom";
import { doctor_thumb_02 } from "../../imagepath";

const DoctorSidebar = () => {
  let pathnames = window.location.pathname;
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="#" className="booking-doc-img">
              <img src={doctor_thumb_02} alt="User Image" />
            </Link>
            <div className="profile-det-info">
              <h3>Dr. Darren Elder</h3>
              <div className="patient-details">
                <h5 className="mb-0">
                  BDS, MDS - Oral &amp; Maxillofacial Surgery
                </h5>
              </div>
            </div>
          </div>
        </div>
        {
          (pathnames.includes('/react/template/doctor') && width >= 768) &&
          <div className="dashboard-widget">
            <nav className="dashboard-menu">
              <ul>
                <li
                  className={
                    pathnames.includes("/doctor/doctor-dashboard") ? "active" : ""
                  }
                >
                  <Link to="/doctor/doctor-dashboard">
                    <i className="fas fa-columns" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("/doctor/appointments") ? "active" : ""
                  }
                >
                  <Link to="/doctor/appointments">
                    <i className="fas fa-calendar-check" />
                    <span>Appointments</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("/doctor/my-patients") ? "active" : ""
                  }
                >
                  <Link to="/doctor/my-patients">
                    <i className="fas fa-user-injured" />
                    <span>My Patients</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("/doctor/schedule-timing") ? "active" : ""
                  }
                >
                  <Link to="/doctor/schedule-timing">
                    <i className="fas fa-hourglass-start" />
                    <span>Schedule Timings</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("/doctor/available-timing") ? "active" : ""
                  }
                >
                  <Link to="/doctor/available-timing">
                    <i className="fas fa-clock" />
                    <span>Available Timings</span>
                  </Link>
                </li>
                <li
                  className={pathnames.includes("/pages/invoice") ? "active" : ""}
                >
                  <Link to="/pages/invoice">
                    <i className="fas fa-file-invoice" />
                    <span>Invoices</span>
                  </Link>
                </li>
                {/* <li
                  className={
                    pathnames.includes("/doctor/account") ? "active" : ""
                  }
                >
                  <Link to="/doctor/account">
                    <i className="fas fa-file-invoice-dollar" />
                    <span>Accounts</span>
                  </Link>
                </li> */}
                <li
                  className={pathnames.includes("/doctor/review") ? "active" : ""}
                >
                  <Link to="/doctor/review">
                    <i className="fas fa-star" />
                    <span>Reviews</span>
                  </Link>
                </li>
                {/* <li
                  className={
                    pathnames.includes("/doctor/chat-doctor") ? "active" : ""
                  }
                >
                  <Link to="/doctor/chat-doctor">
                    <i className="fas fa-comments" />
                    <span>Message</span>
                    <small className="unread-msg">23</small>
                  </Link>
                </li> */}
                <li
                  className={
                    pathnames.includes("/doctor/profile-setting") ? "active" : ""
                  }
                >
                  <Link to="/doctor/profile-setting">
                    <i className="fas fa-user-cog" />
                    <span>Profile Settings</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("/doctor/social-media") ? "active" : ""
                  }
                >
                  <Link to="/doctor/social-media">
                    <i className="fas fa-share-alt" />
                    <span>Social Media</span>
                  </Link>
                </li>
                <li
                  className={
                    pathnames.includes("/doctor/doctor-change-password")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/doctor/doctor-change-password">
                    <i className="fas fa-lock" />
                    <span>Change Password</span>
                  </Link>
                </li>
                <li className={pathnames.includes("/index") ? "active" : ""}>
                  <Link to="/index">
                    <i className="fas fa-sign-out-alt" />
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        }
      </div>
      {/* /Profile Sidebar */}
    </>
  );
};

export default DoctorSidebar;
