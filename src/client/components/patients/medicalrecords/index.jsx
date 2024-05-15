import React from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
// import { Tab, Tabs, Modal } from "react-bootstrap";
// import DoctorThumb01 from "../../../assets/images/doctors/doctor-thumb-01.jpg";
// import DoctorThumb02 from "../../../assets/images/doctors/doctor-thumb-02.jpg";
// import DoctorThumb03 from "../../../assets/images/doctors/doctor-thumb-03.jpg";
// import DoctorThumb04 from "../../../assets/images/doctors/doctor-thumb-04.jpg";
// import DoctorThumb05 from "../../../assets/images/doctors/doctor-thumb-05.jpg";
// import DoctorThumb06 from "../../../assets/images/doctors/doctor-thumb-06.jpg";
import Header from "../../header";
import Footer from "../../footer";
import Tablerecords from "./tablerecords.jsx";

const MedicalRecords = (props) => {
  // const [ setDate] = useState(new Date());

  // const handleChange = (date) => {
  //     setDate(date)
  // }

  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Medical Records</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/patient/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Medical Records
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
                <DashboardSidebar />{" "}
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <Tablerecords />
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />
    </div>
  );
};

export default MedicalRecords;
