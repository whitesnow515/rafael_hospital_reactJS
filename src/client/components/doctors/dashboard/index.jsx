import React from "react";
import DoctorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import ProgressBar from "react-customizable-progressbar";
import StickyBox from "react-sticky-box";
import { Icon01, Icon02, Icon03 } from "./img";
import Breadcrumbs from "../../breadcrumb";
import Header from "../../header";
import UpcomingTab from "./upcomimgtab";
import AppointmentTab from "./appoitmenttab";
import './styles.css';
const DoctorDashboard = (props) => {

  return (
    <div>
      <Header {...props} />
      <Breadcrumbs />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DoctorSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-md-12">
                  <div className="card dash-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <ProgressBar
                              width={8}
                              radius={40}
                              progress={75}
                              rotate={-183}
                              strokeWidth={6}
                              strokeColor="#da3f81"
                              strokeLinecap="square"
                              trackStrokeWidth={8}
                              trackStrokeColor="#e6e6e6"
                              trackStrokeLinecap="square"
                              pointerRadius={0}
                              initialAnimation={true}
                              transition="1.5s ease 0.5s"
                              trackTransition="0s ease"
                            >
                              <div className="indicator-volume">
                                <img
                                  src={Icon01}
                                  className="img-fluid img-responsive"
                                  alt="Patient"
                                />
                              </div>
                            </ProgressBar>
                            <div
                              className="dash-widget-info"
                              style={{ position: "relative", top: "-18px" }}
                            >
                              <h6>Total Patient</h6>
                              <h3>1500</h3>
                              <p className="text-muted">Till Today</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <ProgressBar
                              width={8}
                              radius={40}
                              progress={65}
                              rotate={-183}
                              strokeWidth={6}
                              strokeColor="#68dda9"
                              strokeLinecap="square"
                              trackStrokeWidth={8}
                              trackStrokeColor="#e6e6e6"
                              trackStrokeLinecap="square"
                              pointerRadius={0}
                              initialAnimation={true}
                              transition="1.5s ease 0.5s"
                              trackTransition="0s ease"
                            >
                              <div className="indicator-volume">
                                <img
                                  src={Icon02}
                                  className="img-fluid img-responsive"
                                  alt="Patient"
                                />
                              </div>
                            </ProgressBar>
                            <div
                              className="dash-widget-info"
                              style={{ position: "relative", top: "-18px" }}
                            >
                              <h6>Today Patient</h6>
                              <h3>160</h3>
                              <p className="text-muted">06, Nov 2019</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget">
                            <ProgressBar
                              width={8}
                              radius={40}
                              progress={50}
                              rotate={-183}
                              strokeWidth={6}
                              strokeColor="#1b5a90"
                              strokeLinecap="square"
                              trackStrokeWidth={8}
                              trackStrokeColor="#e6e6e6"
                              trackStrokeLinecap="square"
                              pointerRadius={0}
                              initialAnimation={true}
                              transition="1.5s ease 0.5s"
                              trackTransition="0s ease"
                            >
                              <div className="indicator-volume">
                                <img
                                  src={Icon03}
                                  className="img-fluid img-responsive"
                                  alt="Patient"
                                />
                              </div>
                            </ProgressBar>
                            <div
                              className="dash-widget-info"
                              style={{ position: "relative", top: "-18px" }}
                            >
                              <h6>Appoinments</h6>
                              <h3>85</h3>
                              <p className="text-muted">06, Apr 2019</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-4">Patient Appoinment</h4>
                  <div className="appointment-tab">
                    {/* Appointment Tab */}
                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="#upcoming-appointments"
                          data-bs-toggle="tab"
                        >
                          Upcoming
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#today-appointments"
                          data-bs-toggle="tab"
                        >
                          Today
                        </Link>
                      </li>
                    </ul>
                    {/* /Appointment Tab */}
                    <div className="tab-content">
                      {/* Upcoming Appointment Tab */}
                      <UpcomingTab />
                      {/* Today Appointment Tab */}
                      <AppointmentTab />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default DoctorDashboard;
