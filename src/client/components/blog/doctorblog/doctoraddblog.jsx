import React from "react";
import { Link } from "react-router-dom";
//images
import { IMG02, img_1, img_2, img_3 } from "./img.jsx";
//components
import Footer from "../../footer.jsx";
import Header from "../../header.jsx";
import StickyBox from "react-sticky-box";

const Doctoraddblog = (props) => {
  return (
    <div>
      <Header {...props} />
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Add Blog</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Add Blog
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox>
                  {/* Profile Sidebar */}
                  <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                      <div className="profile-info-widget">
                        <Link to="#" className="booking-doc-img">
                          <img src={IMG02} alt="User Image" />
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
                    <div className="dashboard-widget">
                      <nav className="dashboard-menu">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-dashboard">
                              <i className="fas fa-columns" />
                              <span>Dashboard</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/appointments">
                              <i className="fas fa-calendar-check" />
                              <span>Appointments</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/my-patients">
                              <i className="fas fa-user-injured" />
                              <span>My Patients</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/schedule-timing">
                              <i className="fas fa-hourglass-start" />
                              <span>Schedule Timings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/pages/invoice">
                              <i className="fas fa-file-invoice" />
                              <span>Invoices</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/review">
                              <i className="fas fa-star" />
                              <span>Reviews</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/chat-doctor">
                              <i className="fas fa-comments" />
                              <span>Message</span>
                              <small className="unread-msg">23</small>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/profile-setting">
                              <i className="fas fa-user-cog" />
                              <span>Profile Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/social-media">
                              <i className="fas fa-share-alt" />
                              <span>Social Media</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor-change-passwword">
                              <i className="fas fa-lock" />
                              <span>Change Password</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/index">
                              <i className="fas fa-sign-out-alt" />
                              <span>Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* /Profile Sidebar */}
                </StickyBox>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="doc-review review-listing custom-edit-service">
                  <div className="row mb-5">
                    <div className="col">
                      <ul className="nav nav-tabs nav-tabs-solid">
                        <li className="nav-item">
                          <Link className="nav-link" to="/doctor-blog">
                            Acitive Blog
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="/blog/doctor-pending-blog"
                          >
                            Pending Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-auto">
                      <Link
                        className="btn btn-primary btn-sm"
                        to="/blog/doctor-add-blog"
                      >
                        <i className="fas fa-plus me-1" /> Add Blog
                      </Link>
                    </div>
                  </div>
                  {/* Add Blog */}
                  <div className="card">
                    <div className="card-body">
                      <h3 className="pb-3">Add Blog</h3>
                      <form
                        // method="post"
                        encType="multipart/form-data"
                        autoComplete="off"
                        id="update_service"
                        action="/doctor-blog"
                      >
                        <input
                          type="hidden"
                          name="csrf_token_name"
                          defaultValue="0146f123a4c7ae94253b39bca6bd5a5e"
                        />
                        <div className="service-fields mb-3">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label>
                                  Blog Title{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="hidden"
                                  name="service_id"
                                  id="service_id"
                                  defaultValue={18}
                                />
                                <input
                                  className="form-control"
                                  type="text"
                                  name="service_title"
                                  id="service_title"
                                  defaultValue="Doccure – Making your clinic painless visit?"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="service-fields mb-3">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>
                                  Category{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <select
                                  className="form-select form-control"
                                  name="category"
                                  required=""
                                >
                                  <option value={1}>Automobile</option>
                                  <option value={2} selected="selected">
                                    Construction
                                  </option>
                                  <option value={3}>Interior</option>
                                  <option value={4}>Cleaning</option>
                                  <option value={5}>Electrical</option>
                                  <option value={6}>Carpentry</option>
                                  <option value={7}>Computer</option>
                                  <option value={8}>Painting</option>
                                  <option value={9}>Car Wash</option>
                                  <option value={10}>Category Test</option>
                                  <option value={11}>dfdf</option>
                                  <option value={12}>Equipment</option>
                                  <option value={13}>Test category1</option>
                                  <option value={14}>Farming</option>
                                  <option value={15}>Test Category02</option>
                                  <option value={16}>Laundry</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>
                                  Sub Category{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <select
                                  className="form-select form-control"
                                  name="subcategory"
                                >
                                  <option value={5}>Others</option>
                                  <option value={6}>Others</option>
                                  <option value={7}>Others</option>
                                  <option value={8}>House cleaning</option>
                                  <option value={9}>Others</option>
                                  <option value={10}>Others</option>
                                  <option value={11}>Others</option>
                                  <option value={12}>Others</option>
                                  <option value={13}>Full Car Wash</option>
                                  <option value={14} selected="selected">
                                    Testing category
                                  </option>
                                  <option value={15}>Test Sub category</option>
                                  <option value={16}>Harvesting pine</option>
                                  <option value={17}>
                                    Test Sub category name
                                  </option>
                                  <option value={18}>
                                    Test Sub category name
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="service-fields mb-3">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label>
                                  Descriptions{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <textarea
                                  id="about"
                                  className="form-control service-desc"
                                  name="about"
                                  defaultValue={"note."}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="service-fields mb-3">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="service-upload">
                                <i className="fas fa-cloud-upload-alt" />
                                <span>Upload Blog Images *</span>
                                <input
                                  type="file"
                                  name="images[]"
                                  id="images"
                                  multiple=""
                                  accept="image/jpeg, image/png, image/gif,"
                                />
                              </div>
                              <div id="uploadPreview">
                                <ul className="upload-wrap">
                                  <li>
                                    <div className=" upload-images">
                                      <img alt="Blog Image" src={img_1} />
                                    </div>
                                  </li>
                                  <li>
                                    <div className=" upload-images">
                                      <img alt="Blog Image" src={img_2} />
                                    </div>
                                  </li>
                                  <li>
                                    <div className=" upload-images">
                                      <img alt="Blog Image" src={img_3} />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="service-fields mb-3">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label>
                                  Video id{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="hidden"
                                  name="video_id"
                                  id="video_id"
                                  defaultValue={18}
                                />
                                <input
                                  className="form-control"
                                  type="text"
                                  name="video_id"
                                  id="video_id"
                                  defaultValue="Rf34rhkWW1"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="submit-section">
                          <button
                            className="btn btn-primary submit-btn"
                            type="submit"
                            name="form_submit"
                            value="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /Add Blog */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />
    </div>
  );
};

export default Doctoraddblog;
