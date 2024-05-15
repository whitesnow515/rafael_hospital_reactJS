import React from "react";
import { Link } from "react-router-dom";
//images
import {
  IMG01,
  IMG02,
  IMG08,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
  blog10,
  doctorthumb3,
  doctorthumb4,
  doctorthumb5,
  doctorthumb6,
  doctorthumb7,
  doctorthumb8,
  doctorthumb9,
  doctorthumb10,
} from "./img.jsx";
//components

import Footer from "../../footer.jsx";
import Header from "../../header.jsx";
import StickyBox from "react-sticky-box";

const Doctorblog = (props) => {
  return (
    <div>
      <Header {...props} />
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Doctor Blog</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Doctor Blog
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
                            <Link to="/doctor-change-password">
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
                <div className="doc-review review-listing">
                  <div className="row mb-5">
                    <div className="col">
                      <ul className="nav nav-tabs nav-tabs-solid">
                        <li className="nav-item">
                          <Link className="nav-link active" to="/doctor-blog">
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
                  {/* Blog */}
                  <div className="row blog-grid-row">
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={IMG01}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={IMG08} alt="Post Author" />{" "}
                                  <span>Dr. Ruby Perrin</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 4 Dec 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Doccure – Making your clinic painless visit?
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={blog2}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={IMG02} alt="Post Author" />{" "}
                                  <span>Dr. Darren Elder</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 3 Dec 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              What are the benefits of Online Doctor Booking?
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={blog3}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={doctorthumb3} alt="Post Author" />{" "}
                                  <span>Dr. Deborah Angel</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 3 Dec 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Benefits of consulting with an Online Doctor
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={blog4}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={doctorthumb4} alt="Post Author" />{" "}
                                  <span>Dr. Sofia Brient</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 2 Dec 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              5 Great reasons to use an Online Doctor
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={blog5}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={doctorthumb5} alt="Post Author" />{" "}
                                  <span>Dr. Marvin Campbell</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 1 Dec 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Online Doctor Appointment Scheduling
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={blog6}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={doctorthumb6} alt="Post Author" />{" "}
                                  <span>Dr. Katharine Berthold</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 30 Nov 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Simple steps to make your doctor visits
                              exceptional!
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={blog7}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={doctorthumb7} alt="Post Author" />{" "}
                                  <span>Dr. Linda Tobin</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 28 Nov 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Choose your own Online Doctor Appointment
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={blog8}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={doctorthumb8} alt="Post Author" />{" "}
                                  <span>Dr. Paul Richard </span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 25 Nov 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Simple steps to visit your doctor today
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={blog9}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={doctorthumb9} alt="Post Author" />{" "}
                                  <span>Dr. John Gibbs</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 24 Nov 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              5 Great reasons to use an Online Doctor
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <img
                              className="img-fluid"
                              src={blog10}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <img src={doctorthumb10} alt="Post Author" />{" "}
                                  <span>Dr. Olga Barlow</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 23 Nov 2019
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Online Doctoral Programs
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em
                            adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link
                              to="/blog/doctor-edit-blog"
                              className="text-success"
                            >
                              <i className="far fa-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="far fa-trash-alt" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                  </div>
                  {/* Blog Pagination */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="blog-pagination">
                        <nav>
                          <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                              <Link className="page-link" to="#" tabIndex={-1}>
                                <i className="fas fa-angle-double-left" />
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item active">
                              <Link className="page-link" to="#">
                                2{" "}
                                <span className="visually-hidden">
                                  (current)
                                </span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                <i className="fas fa-angle-double-right" />
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* /Blog Pagination */}
                  {/* /Blog */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />

      {/* Model */}
      <div
        className="modal fade"
        id="deleteConfirmModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="deleteConfirmModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p id="acc_msg" />
            </div>
            <div className="modal-footer">
              <Link to="#" className="btn btn-success si_accept_confirm">
                Yes
              </Link>
              <button
                type="button"
                className="btn btn-danger si_accept_cancel"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteNotConfirmModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="deleteNotConfirmModal"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="acc_title">
                Inactive Service?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p id="acc_msg1">Service is Booked and Inprogress..</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger si_accept_cancel"
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Model */}
    </div>
  );
};

export default Doctorblog;
