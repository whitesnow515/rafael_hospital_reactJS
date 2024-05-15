import React from "react";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";
import {
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar07,
  avatar08,
  avatar10,
  blog01,
  blog02,
  blog03,
  blog04,
  blog06,
  blog07,
  blog08,
  blog09,
  eyeIcon,
} from "../imagepath";
import FeatherIcon from "feather-icons-react";

const Blog = () => {
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Blog List */}
          <div className="row">
            <div className="col-md-9">
              <ul className="list-links mb-4">
                <li className="active">
                  <Link to="/admin/blog">Active Blog</Link>
                </li>
                <li>
                  <Link to="/admin/pending-blog">Pending Blog</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 text-md-end">
              <Link
                to="/admin/add-blog"
                className="btn btn-primary btn-blog mb-3"
              >
                Add Blog
              </Link>
            </div>
          </div>
          <div className="row">
            {/* Blog Post */}
            <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
              <div className="blog grid-blog flex-fill">
                <div className="blog-image">
                  <Link to="/admin/blog-details">
                    <img className="img-fluid" src={blog01} alt="Post Image" />
                  </Link>
                  <div className="fav-btn">
                    <img src={eyeIcon} alt="icon" /> 225
                  </div>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/admin/profile">
                          <img src={avatar02} alt="Post Author" />
                          <span>
                            <span className="post-title">Dr. Ruby Perrin</span>
                            <span className="post-date">
                              <i className="far fa-clock" /> 4 Dec 2022
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/admin/blog-details">
                      Doccure – Making your clinic painless visit?
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/admin/edit-blog" className="text-success">
                      <i className="me-1">
                        <FeatherIcon icon="edit-3" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="col text-end">
                    <Link
                      to="#"
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                    >
                      <i className="me-1">
                        <FeatherIcon icon="eye-off" />
                      </i>{" "}
                      Inactive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/admin/blog-details">
                    <img className="img-fluid" src={blog02} alt="Post Image" />
                  </Link>
                  <div className="fav-btn">
                    <img src={eyeIcon} alt="icon" /> 103
                  </div>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/admin/profile">
                          <img src={avatar05} alt="Post Author" />
                          <span>
                            <span className="post-title">Dr. Lester </span>
                            <span className="post-date">
                              <i className="far fa-clock" /> 2 Dec 2022
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/admin/blog-details">
                      Doccure – Making your clinic painless visit?
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/admin/edit-blog" className="text-success">
                      <i className="me-1">
                        <FeatherIcon icon="edit-3" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="col text-end">
                    <Link
                      to="#"
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                    >
                      <i className="me-1">
                        <FeatherIcon icon="eye-off" />
                      </i>{" "}
                      Inactive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/admin/blog-details">
                    <img className="img-fluid" src={blog03} alt="Post Image" />
                  </Link>
                  <div className="fav-btn">
                    <img src={eyeIcon} alt="icon" /> 80
                  </div>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/admin/profile">
                          <img src={avatar07} alt="Post Author" />
                          <span>
                            <span className="post-title">Dr. Stephen</span>
                            <span className="post-date">
                              <i className="far fa-clock" /> 12 Dec 2022
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/admin/blog-details">
                      Doccure – Making your clinic painless visit?
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/admin/edit-blog" className="text-success">
                      <i className="me-1">
                        <FeatherIcon icon="edit-3" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="col text-end">
                    <Link
                      to="#"
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                    >
                      <i className="me-1">
                        <FeatherIcon icon="eye-off" />
                      </i>{" "}
                      Inactive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/admin/blog-details">
                    <img className="img-fluid" src={blog03} alt="Post Image" />
                  </Link>
                  <div className="fav-btn">
                    <img src={eyeIcon} alt="icon" /> 225
                  </div>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/admin/profile">
                          <img src={avatar08} alt="Post Author" />
                          <span>
                            <span className="post-title">Dr. Jeffrey</span>
                            <span className="post-date">
                              <i className="far fa-clock" /> 11 Nov 2022
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/admin/blog-details">
                      5 Great reasons to use an Online Doctor
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/admin/edit-blog" className="text-success">
                      <i className="me-1">
                        <FeatherIcon icon="edit-3" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="col text-end">
                    <Link
                      to="#"
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                    >
                      <i className="me-1">
                        <FeatherIcon icon="eye-off" />
                      </i>{" "}
                      Inactive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/admin/blog-details">
                    <img className="img-fluid" src={blog04} alt="Post Image" />
                  </Link>
                  <div className="fav-btn">
                    <img src={eyeIcon} alt="icon" /> 103
                  </div>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/admin/profile">
                          <img src={avatar10} alt="Post Author" />
                          <span>
                            <span className="post-title">Dr. Charles</span>
                            <span className="post-date">
                              <i className="far fa-clock" /> 06 Nov 2022
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/admin/blog-details">
                      Online Doctor Appointment Scheduling
                    </Link>
                  </h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore pariatur...
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/admin/edit-blog" className="text-success">
                      <i className="me-1">
                        <FeatherIcon icon="edit-3" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="col text-end">
                    <Link
                      to="#"
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                    >
                      <i className="me-1">
                        <FeatherIcon icon="eye-off" />
                      </i>{" "}
                      Inactive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/admin/blog-details">
                    <img className="img-fluid" src={blog06} alt="Post Image" />
                  </Link>
                  <div className="fav-btn">
                    <img src={eyeIcon} alt="icon" /> 80
                  </div>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/admin/profile">
                          <div className="empty-user">
                            <i className="feather-user" />{" "}
                          </div>
                          <span>
                            <span className="post-title">Dr. Daniel</span>
                            <span className="post-date">
                              <i className="far fa-clock" /> 22 Nov 2022
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/admin/blog-details">
                      Simple steps to make your doctor visits excep....
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor...
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/admin/edit-blog" className="text-success">
                      <i className="me-1">
                        <FeatherIcon icon="edit-3" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="col text-end">
                    <Link
                      to="#"
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                    >
                      <i className="me-1">
                        <FeatherIcon icon="eye-off" />
                      </i>{" "}
                      Inactive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/admin/blog-details">
                    <img className="img-fluid" src={blog07} alt="Post Image" />
                  </Link>
                  <div className="fav-btn">
                    <img src={eyeIcon} alt="icon" /> 225
                  </div>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/admin/profile">
                          <img src={avatar03} alt="Post Author" />
                          <span>
                            <span className="post-title">Dr. Jennifer</span>
                            <span className="post-date">
                              <i className="far fa-clock" /> 14 Oct 2022
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/admin/blog-details">
                      Choose your own Online Doctor Appointment
                    </Link>
                  </h3>
                  <p>
                    LLorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor...
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/admin/edit-blog" className="text-success">
                      <i className="me-1">
                        <FeatherIcon icon="edit-3" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="col text-end">
                    <Link
                      to="#"
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                    >
                      <i className="me-1">
                        <FeatherIcon icon="eye-off" />
                      </i>{" "}
                      Inactive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/admin/blog-details">
                    <img className="img-fluid" src={blog08} alt="Post Image" />
                  </Link>
                  <div className="fav-btn">
                    <img src={eyeIcon} alt="icon" /> 103
                  </div>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/admin/profile">
                          <img src={avatar10} alt="Post Author" />
                          <span>
                            <span className="post-title">Dr. Paul</span>
                            <span className="post-date">
                              <i className="far fa-clock" /> 15 Oct 2022
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/admin/blog-details">
                      Top 15 types of doctors you should know
                    </Link>
                  </h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur...
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/admin/edit-blog" className="text-success">
                      <i className="me-1">
                        <FeatherIcon icon="edit-3" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="col text-end">
                    <Link
                      to="#"
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                    >
                      <i className="me-1">
                        <FeatherIcon icon="eye-off" />
                      </i>{" "}
                      Inactive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/admin/blog-details">
                    <img className="img-fluid" src={blog09} alt="Post Image" />
                  </Link>
                  <div className="fav-btn">
                    <img src={eyeIcon} alt="icon" /> 80
                  </div>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/admin/profile">
                          <img src={avatar04} alt="Post Author" />
                          <span>
                            <span className="post-title">Dr. Elizabeth</span>
                            <span className="post-date">
                              <i className="far fa-clock" /> 20 Oct 2022
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/admin/blog-details">
                      How to Keep Your Brain Sharp as You Age
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor...
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/admin/edit-blog" className="text-success">
                      <i className="me-1">
                        <FeatherIcon icon="edit-3" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="col text-end">
                    <Link
                      to="#"
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                    >
                      <i className="me-1">
                        <FeatherIcon icon="eye-off" />
                      </i>{" "}
                      Inactive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blog Post */}
          </div>
          {/* Pagination */}
          <div className="row ">
            <div className="col-md-12">
              <div className="pagination-tab mt-md-5 d-flex justify-content-center">
                <ul className="pagination mb-0">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" tabIndex={-1}>
                      <i className="me-2">
                        <FeatherIcon icon="chevron-left" />
                      </i>
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      2 <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Next
                      <i className="ms-2">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Pagination */}
        </div>
        {/* /Blog List */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default Blog;
