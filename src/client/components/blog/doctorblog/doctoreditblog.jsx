import React from "react";
import { Link } from "react-router-dom";
//images
import { IMG02, img_1, img_2, img_3 } from "./img.jsx";
//components
import Footer from "../../footer.jsx";
import Header from "../../header.jsx";
import StickyBox from "react-sticky-box";

const Doctoreditblog = (props) => {
  return (
    <div>
      <Header {...props} />
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Edit Blog</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Edit Blog
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* <!-- Page Content -->  */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox>
                  {/* <!-- Profile Sidebar --> */}
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
                              BDS, MDS - Oral & Maxillofacial Surgery
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
                              <i className="fas fa-columns"></i>
                              <span>Dashboard</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/appointments">
                              <i className="fas fa-calendar-check"></i>
                              <span>Appointments</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/my-patients">
                              <i className="fas fa-user-injured"></i>
                              <span>My Patients</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/schedule-timing">
                              <i className="fas fa-hourglass-start"></i>
                              <span>Schedule Timings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/pages/invoice">
                              <i className="fas fa-file-invoice"></i>
                              <span>Invoices</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/review">
                              <i className="fas fa-star"></i>
                              <span>Reviews</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/chat-doctor">
                              <i className="fas fa-comments"></i>
                              <span>Message</span>
                              <small className="unread-msg">23</small>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/profile-setting">
                              <i className="fas fa-user-cog"></i>
                              <span>Profile Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/social-media">
                              <i className="fas fa-share-alt"></i>
                              <span>Social Media</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor-change-password">
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
                  {/* <!-- /Profile Sidebar --> */}
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
                        <i className="fas fa-plus me-1"></i> Add Blog
                      </Link>
                    </div>
                  </div>

                  {/* <!-- Edit Blog --> */}
                  <div className="card">
                    <div className="card-body">
                      <h3 className="pb-3">Edit Blog</h3>

                      <form
                        method="post"
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
                                  defaultValue="18"
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
                                  <option defaultValue="1">Automobile</option>
                                  <option defaultValue="2" selected="selected">
                                    Construction
                                  </option>
                                  <option defaultValue="3">Interior</option>
                                  <option defaultValue="4">Cleaning</option>
                                  <option defaultValue="5">Electrical</option>
                                  <option defaultValue="6">Carpentry</option>
                                  <option defaultValue="7">Computer</option>
                                  <option defaultValue="8">Painting</option>
                                  <option defaultValue="9">Car Wash</option>
                                  <option defaultValue="10">
                                    Category Test
                                  </option>
                                  <option defaultValue="11">dfdf</option>
                                  <option defaultValue="12">Equipment</option>
                                  <option defaultValue="13">
                                    Test category1
                                  </option>
                                  <option defaultValue="14">Farming</option>
                                  <option defaultValue="15">
                                    Test Category02
                                  </option>
                                  <option defaultValue="16">Laundry</option>
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
                                  <option defaultValue="5">Others</option>
                                  <option defaultValue="6">Others</option>
                                  <option defaultValue="7">Others</option>
                                  <option defaultValue="8">
                                    House cleaning
                                  </option>
                                  <option defaultValue="9">Others</option>
                                  <option defaultValue="10">Others</option>
                                  <option defaultValue="11">Others</option>
                                  <option defaultValue="12">Others</option>
                                  <option defaultValue="13">
                                    Full Car Wash
                                  </option>
                                  <option defaultValue="14" selected="selected">
                                    Testing category
                                  </option>
                                  <option defaultValue="15">
                                    Test Sub category
                                  </option>
                                  <option defaultValue="16">
                                    Harvesting pine
                                  </option>
                                  <option defaultValue="17">
                                    Test Sub category name
                                  </option>
                                  <option defaultValue="18">
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
                                >
                                  note.
                                </textarea>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="service-fields mb-3">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="service-upload">
                                <i className="fas fa-cloud-upload-alt"></i>
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
                                  defaultValue="18"
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
                            defaultValue="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- /Edit Blog --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Page Content --> */}
      </>

      <Footer {...props} />
    </div>
  );
};

export default Doctoreditblog;
